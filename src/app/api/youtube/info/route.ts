import { NextRequest, NextResponse } from 'next/server'

function extractVideoId(url: string): string | null {
  const patterns = [
    /(?:youtube\.com\/watch\?v=)([a-zA-Z0-9_-]{11})/,
    /(?:youtu\.be\/)([a-zA-Z0-9_-]{11})/,
    /(?:youtube\.com\/embed\/)([a-zA-Z0-9_-]{11})/,
    /(?:youtube\.com\/shorts\/)([a-zA-Z0-9_-]{11})/,
    /(?:youtube\.com\/v\/)([a-zA-Z0-9_-]{11})/,
  ]

  for (const pattern of patterns) {
    const match = url.match(pattern)
    if (match) return match[1]
  }
  return null
}

function formatDuration(seconds: number): string {
  const h = Math.floor(seconds / 3600)
  const m = Math.floor((seconds % 3600) / 60)
  const s = seconds % 60
  if (h > 0) return `${h}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`
  return `${m}:${String(s).padStart(2, '0')}`
}

function formatViews(views: string | number): string {
  const n = typeof views === 'string' ? parseInt(views, 10) : views
  if (isNaN(n)) return ''
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M views`
  if (n >= 1_000) return `${(n / 1_000).toFixed(1)}K views`
  return `${n} views`
}

function formatFileSize(bytes: number | string): string {
  const n = typeof bytes === 'string' ? parseInt(bytes, 10) : bytes
  if (isNaN(n) || n === 0) return ''
  if (n >= 1_073_741_824) return `${(n / 1_073_741_824).toFixed(1)} GB`
  if (n >= 1_048_576) return `${(n / 1_048_576).toFixed(1)} MB`
  if (n >= 1024) return `${(n / 1024).toFixed(1)} KB`
  return `${n} B`
}

// Use YouTube's innertube API to get video info
async function getVideoInfoFromInnertube(videoId: string) {
  // Try multiple client strategies for reliability
  const clients = [
    {
      // iOS client - most reliable for getting streaming URLs
      clientName: 'IOS',
      clientVersion: '19.09.3',
      deviceModel: 'iPhone14,3',
      userAgent: 'com.google.ios.youtube/19.09.3 (iPhone14,3; U; CPU iOS 15_6 like Mac OS X)',
      clientNameId: '5',
      payload: {
        videoId,
        context: {
          client: {
            clientName: 'IOS',
            clientVersion: '19.09.3',
            deviceMake: 'Apple',
            deviceModel: 'iPhone14,3',
            hl: 'en',
            gl: 'US',
            utcOffsetMinutes: 0,
          },
        },
        contentCheckOk: true,
        racyCheckOk: true,
      },
    },
    {
      // TVHTML5 embedded player client - fallback
      clientName: 'TVHTML5_SIMPLY_EMBEDDED_PLAYER',
      clientVersion: '2.0',
      deviceModel: '',
      userAgent: 'Mozilla/5.0',
      clientNameId: '85',
      payload: {
        videoId,
        context: {
          client: {
            clientName: 'TVHTML5_SIMPLY_EMBEDDED_PLAYER',
            clientVersion: '2.0',
            hl: 'en',
            gl: 'US',
            utcOffsetMinutes: 0,
          },
          thirdParty: {
            embedUrl: 'https://www.youtube.com/',
          },
        },
        contentCheckOk: true,
        racyCheckOk: true,
      },
    },
    {
      // Web client - another fallback  
      clientName: 'WEB',
      clientVersion: '2.20240101.00.00',
      deviceModel: '',
      userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
      clientNameId: '1',
      payload: {
        videoId,
        context: {
          client: {
            clientName: 'WEB',
            clientVersion: '2.20240101.00.00',
            hl: 'en',
            gl: 'US',
            utcOffsetMinutes: 0,
          },
        },
        contentCheckOk: true,
        racyCheckOk: true,
      },
    },
  ]

  let lastError: Error | null = null

  for (const client of clients) {
    try {
      const res = await fetch(
        'https://www.youtube.com/youtubei/v1/player?prettyPrint=false',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'User-Agent': client.userAgent,
            'X-Youtube-Client-Name': client.clientNameId,
            'X-Youtube-Client-Version': client.clientVersion,
          },
          body: JSON.stringify(client.payload),
        }
      )

      if (!res.ok) {
        lastError = new Error(`${client.clientName} client returned ${res.status}`)
        continue
      }

      const data = await res.json()

      if (data.playabilityStatus?.status === 'OK' && data.streamingData) {
        const hasFormats =
          (data.streamingData.formats?.length > 0) ||
          (data.streamingData.adaptiveFormats?.length > 0)
        if (hasFormats) {
          return data
        }
      }

      // If playability is not OK, try next client
      lastError = new Error(data.playabilityStatus?.reason || `${client.clientName} - no streaming data`)
    } catch (err: any) {
      lastError = err
    }
  }

  throw lastError || new Error('All innertube clients failed')
}

export async function POST(request: NextRequest) {
  try {
    const { url } = await request.json()

    if (!url) {
      return NextResponse.json({ error: 'URL is required' }, { status: 400 })
    }

    const videoId = extractVideoId(url)
    if (!videoId) {
      return NextResponse.json({ error: 'Invalid YouTube URL' }, { status: 400 })
    }

    // Get video info from YouTube innertube API
    const data = await getVideoInfoFromInnertube(videoId)

    if (data.playabilityStatus?.status !== 'OK') {
      const reason = data.playabilityStatus?.reason || 'Video is unavailable'
      return NextResponse.json({ error: reason }, { status: 403 })
    }

    const videoDetails = data.videoDetails || {}
    const streamingData = data.streamingData || {}

    // Build format list from streaming data
    const formats: Array<{
      quality: string
      type: 'video' | 'audio'
      format: string
      label: string
      itag: number
      size: string
      hasAudio: boolean
      downloadUrl: string
    }> = []

    const allFormats = [
      ...(streamingData.formats || []),
      ...(streamingData.adaptiveFormats || []),
    ]

    // Collect video+audio formats (muxed)
    const qualityMap: Record<string, boolean> = {}
    for (const f of streamingData.formats || []) {
      if (!f.url) continue
      const label = f.qualityLabel || `${f.height}p`
      if (!qualityMap[label]) {
        qualityMap[label] = true
        formats.push({
          quality: label,
          type: 'video',
          format: 'mp4',
          label: `${label} (MP4)`,
          itag: f.itag,
          size: f.contentLength ? formatFileSize(f.contentLength) : '',
          hasAudio: true,
          downloadUrl: f.url,
        })
      }
    }

    // Sort video formats by height (highest first)
    formats.sort((a, b) => {
      const aRes = parseInt(a.quality) || 0
      const bRes = parseInt(b.quality) || 0
      return bRes - aRes
    })

    // Collect audio-only formats
    const audioBitrates: Record<string, boolean> = {}
    const adaptiveAudio = (streamingData.adaptiveFormats || [])
      .filter((f: any) => f.mimeType?.startsWith('audio/') && f.url)
      .sort((a: any, b: any) => (b.averageBitrate || b.bitrate || 0) - (a.averageBitrate || a.bitrate || 0))

    for (const f of adaptiveAudio) {
      const bitrate = f.averageBitrate
        ? Math.round(f.averageBitrate / 1000)
        : f.bitrate
        ? Math.round(f.bitrate / 1000)
        : 128
      const key = `${bitrate}kbps`
      if (!audioBitrates[key]) {
        audioBitrates[key] = true
        const container = f.mimeType?.includes('webm') ? 'webm' : 'mp4'
        formats.push({
          quality: key,
          type: 'audio',
          format: container,
          label: `Audio ${key} (${container.toUpperCase()})`,
          itag: f.itag,
          size: f.contentLength ? formatFileSize(f.contentLength) : '',
          hasAudio: true,
          downloadUrl: f.url,
        })
      }
    }

    const duration = videoDetails.lengthSeconds
      ? formatDuration(parseInt(videoDetails.lengthSeconds))
      : ''

    const viewCount = videoDetails.viewCount
      ? formatViews(videoDetails.viewCount)
      : ''

    const videoInfo = {
      id: videoId,
      title: videoDetails.title || 'Unknown Title',
      author: videoDetails.author || 'Unknown Channel',
      authorUrl: videoDetails.channelId
        ? `https://www.youtube.com/channel/${videoDetails.channelId}`
        : '',
      thumbnail: `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`,
      thumbnailMq: `https://i.ytimg.com/vi/${videoId}/mqdefault.jpg`,
      duration,
      viewCount,
      url: `https://www.youtube.com/watch?v=${videoId}`,
      formats,
    }

    return NextResponse.json(videoInfo)
  } catch (error: any) {
    console.error('YouTube info error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch video information. Please try again.' },
      { status: 500 }
    )
  }
}
