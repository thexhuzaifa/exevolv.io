import { NextRequest, NextResponse } from 'next/server'

export const maxDuration = 60

// GET-based download proxy so the browser handles the download natively
// URL params: url (base64 encoded download URL), filename, type
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const encodedUrl = searchParams.get('url')
    const filename = searchParams.get('filename') || 'youtube-video.mp4'
    const contentType = searchParams.get('type') || 'video/mp4'

    if (!encodedUrl) {
      return NextResponse.json({ error: 'Download URL is required' }, { status: 400 })
    }

    // Decode the base64-encoded download URL
    let downloadUrl: string
    try {
      downloadUrl = Buffer.from(encodedUrl, 'base64').toString('utf-8')
    } catch {
      return NextResponse.json({ error: 'Invalid download URL' }, { status: 400 })
    }

    // Validate it's a YouTube/Google CDN URL
    if (!downloadUrl.includes('googlevideo.com') && !downloadUrl.includes('youtube.com')) {
      return NextResponse.json({ error: 'Invalid download source' }, { status: 400 })
    }

    // Fetch the video/audio from YouTube's CDN
    const res = await fetch(downloadUrl, {
      headers: {
        'User-Agent': 'com.google.android.youtube/19.09.37 (Linux; U; Android 11) gzip',
        'Accept': '*/*',
        'Accept-Language': 'en-US,en;q=0.9',
        'Range': 'bytes=0-',
      },
    })

    if (!res.ok) {
      return NextResponse.json(
        { error: 'Failed to download from YouTube. The link may have expired.' },
        { status: res.status }
      )
    }

    const headers = new Headers()
    headers.set('Content-Type', contentType)
    headers.set('Content-Disposition', `attachment; filename="${filename}"`)
    
    const contentLength = res.headers.get('content-length')
    if (contentLength) {
      headers.set('Content-Length', contentLength)
    }
    
    // Stream the response - browser handles the download natively
    return new NextResponse(res.body, {
      status: 200,
      headers,
    })
  } catch (error: any) {
    console.error('YouTube download proxy error:', error)
    return NextResponse.json(
      { error: 'Failed to process download. Please try again.' },
      { status: 500 }
    )
  }
}
