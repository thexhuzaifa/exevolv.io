'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  Download,
  Search,
  Youtube,
  Film,
  Music,
  ChevronDown,
  Loader2,
  AlertCircle,
  CheckCircle,
  Copy,
  ExternalLink,
  Shield,
  Zap,
  Smartphone,
  Globe,
  HelpCircle,
  ArrowRight,
  Play,
  X,
} from 'lucide-react'
import { cn } from '@/lib/utils'

interface VideoFormat {
  quality: string
  type: 'video' | 'audio'
  format: string
  label: string
  itag: number
  size: string
  hasAudio: boolean
  downloadUrl: string
}

interface VideoInfo {
  id: string
  title: string
  author: string
  authorUrl: string
  thumbnail: string
  thumbnailMq: string
  duration: string
  viewCount: string
  url: string
  formats: VideoFormat[]
}

export default function YouTubeDownloaderClient() {
  const [url, setUrl] = useState('')
  const [videoInfo, setVideoInfo] = useState<VideoInfo | null>(null)
  const [loading, setLoading] = useState(false)
  const [downloading, setDownloading] = useState(false)
  const [error, setError] = useState('')
  const [selectedFormat, setSelectedFormat] = useState<VideoFormat | null>(null)
  const [copied, setCopied] = useState(false)
  const [thumbnailError, setThumbnailError] = useState(false)
  const [activeTab, setActiveTab] = useState<'video' | 'audio'>('video')
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [showEmbed, setShowEmbed] = useState(false)
  const resultRef = useRef<HTMLDivElement>(null)

  const handleFetchInfo = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!url.trim()) return

    setLoading(true)
    setError('')
    setVideoInfo(null)
    setSelectedFormat(null)
    setThumbnailError(false)
    setShowEmbed(false)

    try {
      const res = await fetch('/api/yt-info', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url: url.trim() }),
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.error || 'Failed to fetch video info')
      }

      setVideoInfo(data)
      // Auto-select first video format
      const defaultFormat = data.formats.find((f: VideoFormat) => f.quality === '720p')
      setSelectedFormat(defaultFormat || data.formats[0])

      // Scroll to results
      setTimeout(() => {
        resultRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 100)
    } catch (err: any) {
      setError(err.message || 'Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const handleDownload = async () => {
    if (!videoInfo || !selectedFormat) return

    setDownloading(true)
    setError('')

    try {
      // Construct filename
      const safeTitle = videoInfo.title.replace(/[^\w\s-]/g, '').trim().replace(/\s+/g, '_')
      const ext = selectedFormat.format || 'mp4'
      const filename = `${safeTitle}_${selectedFormat.quality}.${ext}`
      const contentType = selectedFormat.type === 'audio' ? `audio/${ext}` : `video/${ext}`

      // Encode the download URL as base64 for safe URL transport
      const encodedUrl = btoa(selectedFormat.downloadUrl)

      // Build the GET URL for native browser download
      const downloadPath = `/api/youtube/download?url=${encodeURIComponent(encodedUrl)}&filename=${encodeURIComponent(filename)}&type=${encodeURIComponent(contentType)}`

      // Trigger native browser download - browser handles progress bar natively
      const link = document.createElement('a')
      link.href = downloadPath
      link.download = filename
      link.style.display = 'none'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)

      // Brief delay to show the button state
      await new Promise(resolve => setTimeout(resolve, 1500))
    } catch (err: any) {
      setError(err.message || 'Download failed. Please try again.')
    } finally {
      setDownloading(false)
    }
  }

  const handleCopyUrl = () => {
    if (!videoInfo) return
    navigator.clipboard.writeText(videoInfo.url)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText()
      setUrl(text)
    } catch {
      // Clipboard permission denied
    }
  }

  const handleClear = () => {
    setUrl('')
    setVideoInfo(null)
    setError('')
    setSelectedFormat(null)
    setThumbnailError(false)
    setShowEmbed(false)
  }

  const videoFormats = videoInfo?.formats.filter((f) => f.type === 'video') || []
  const audioFormats = videoInfo?.formats.filter((f) => f.type === 'audio') || []

  const faqs = [
    {
      q: 'Is this YouTube downloader free?',
      a: 'Yes, our YouTube downloader is completely free to use. No registration, no hidden fees, and no limits on the number of downloads.',
    },
    {
      q: 'What video qualities are supported?',
      a: 'We support multiple quality options including Full HD (1080p), HD (720p), SD (480p), and lower resolutions. Audio-only downloads in MP3 format are also available.',
    },
    {
      q: 'Can I download YouTube videos on mobile?',
      a: 'Absolutely! Our downloader is fully responsive and works perfectly on smartphones and tablets — both Android and iOS devices.',
    },
    {
      q: 'Is it safe to download videos?',
      a: 'Yes, our tool is completely safe. We don\'t store any of your data, don\'t require any software installation, and all transfers are done over secure connections.',
    },
    {
      q: 'Can I convert YouTube videos to MP3?',
      a: 'Yes! Simply select the "Audio" tab after fetching your video info, then choose your preferred MP3 quality (128kbps or 256kbps) and download.',
    },
    {
      q: 'Why did my download fail?',
      a: 'Some videos may have restrictions that prevent downloading. Try a different quality or format. If the issue persists, the video may be private, age-restricted, or geo-blocked.',
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden gradient-bg pt-28 pb-16 md:pt-36 md:pb-24">
        {/* Background decorations */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-500/5 rounded-full blur-3xl" />
        </div>

        <div className="container-custom relative">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/80 dark:bg-dark-900/80 backdrop-blur-sm rounded-full shadow-lg shadow-dark-900/5 mb-6 animate-fade-up border border-dark-100 dark:border-dark-800">
              <Youtube className="w-4 h-4 text-red-500" />
              <span className="text-sm font-medium text-dark-600 dark:text-dark-400">
                Free YouTube Video Downloader
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-dark-900 dark:text-white mb-4 md:mb-6 animate-fade-up animate-delay-100 leading-[1.1]">
              Download YouTube Videos
              <span className="block mt-2 bg-gradient-to-r from-red-500 via-red-600 to-red-700 bg-clip-text text-transparent">
                in HD Quality
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-dark-600 dark:text-dark-400 mb-8 md:mb-10 max-w-2xl mx-auto animate-fade-up animate-delay-100 px-4">
              Paste any YouTube link and download videos in 1080p, 720p, or convert to MP3. 
              Fast, free, and works on all devices.
            </p>

            {/* Search Form */}
            <form
              onSubmit={handleFetchInfo}
              className="max-w-3xl mx-auto animate-fade-up animate-delay-100 px-4 sm:px-0"
            >
              <div className="relative flex flex-col sm:flex-row items-stretch gap-3 sm:gap-0">
                <div className="relative flex-1">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-dark-400 pointer-events-none">
                    <Youtube className="w-5 h-5" />
                  </div>
                  <input
                    type="text"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    placeholder="Paste YouTube video URL here..."
                    className={cn(
                      'w-full pl-12 pr-24 py-4 sm:py-5 text-base bg-white dark:bg-dark-900 border-2 rounded-2xl sm:rounded-r-none',
                      'border-dark-200 dark:border-dark-700 focus:border-red-500 dark:focus:border-red-500',
                      'focus:outline-none focus:ring-4 focus:ring-red-500/10 transition-all duration-300',
                      'text-dark-900 dark:text-white placeholder:text-dark-400'
                    )}
                  />
                  {/* Action buttons inside input */}
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1">
                    {url && (
                      <button
                        type="button"
                        onClick={handleClear}
                        className="p-1.5 rounded-lg text-dark-400 hover:text-dark-600 hover:bg-dark-100 dark:hover:bg-dark-800 transition-colors"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    )}
                    <button
                      type="button"
                      onClick={handlePaste}
                      className="px-3 py-1.5 text-xs font-medium text-red-600 bg-red-50 dark:bg-red-900/20 dark:text-red-400 rounded-lg hover:bg-red-100 dark:hover:bg-red-900/30 transition-colors"
                    >
                      Paste
                    </button>
                  </div>
                </div>
                <button
                  type="submit"
                  disabled={loading || !url.trim()}
                  className={cn(
                    'flex items-center justify-center gap-2 px-8 py-4 sm:py-5 text-base font-semibold text-white',
                    'bg-red-600 hover:bg-red-700 rounded-2xl sm:rounded-l-none sm:rounded-r-2xl',
                    'transition-all duration-300 shadow-lg shadow-red-500/25 hover:shadow-xl hover:shadow-red-500/30',
                    'disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-lg',
                    'min-w-[140px]'
                  )}
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span className="sm:inline">Fetching...</span>
                    </>
                  ) : (
                    <>
                      <Search className="w-5 h-5" />
                      <span>Get Video</span>
                    </>
                  )}
                </button>
              </div>

              {/* Supported formats hint */}
              <div className="flex flex-wrap items-center justify-center gap-2 mt-4 text-xs text-dark-400">
                <span>Supports:</span>
                <span className="px-2 py-0.5 bg-dark-100 dark:bg-dark-800 rounded">youtube.com</span>
                <span className="px-2 py-0.5 bg-dark-100 dark:bg-dark-800 rounded">youtu.be</span>
                <span className="px-2 py-0.5 bg-dark-100 dark:bg-dark-800 rounded">shorts</span>
                <span className="px-2 py-0.5 bg-dark-100 dark:bg-dark-800 rounded">embed</span>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Error Message */}
      {error && (
        <div className="container-custom -mt-6 relative z-10">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-start gap-3 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl animate-fade-in">
              <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-medium text-red-700 dark:text-red-400">{error}</p>
                <p className="text-xs text-red-500 dark:text-red-500/70 mt-1">
                  Make sure the URL is a valid YouTube video link and try again.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Video Result Section */}
      {videoInfo && (
        <section ref={resultRef} className="section-padding !pt-8 md:!pt-12 bg-white dark:bg-dark-950">
          <div className="container-custom">
            <div className="max-w-5xl mx-auto">
              <div className="card overflow-hidden dark:bg-dark-900 dark:border-dark-800 animate-fade-up">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  {/* Video Thumbnail / Embedded Player */}
                  <div className="relative aspect-video bg-dark-100 dark:bg-dark-800 overflow-hidden">
                    {showEmbed ? (
                      <iframe
                        src={`https://www.youtube.com/embed/${videoInfo.id}?autoplay=1&rel=0&modestbranding=1`}
                        title={videoInfo.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        className="absolute inset-0 w-full h-full border-0"
                        referrerPolicy="strict-origin-when-cross-origin"
                      />
                    ) : (
                      <>
                        <Image
                          src={thumbnailError ? videoInfo.thumbnailMq : videoInfo.thumbnail}
                          alt={videoInfo.title}
                          fill
                          className="object-cover"
                          onError={() => setThumbnailError(true)}
                          sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                        {/* Play overlay - opens embedded player */}
                        <button
                          onClick={() => setShowEmbed(true)}
                          className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors group cursor-pointer"
                        >
                          <div className="w-16 h-16 md:w-20 md:h-20 bg-red-600 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                            <Play className="w-8 h-8 md:w-10 md:h-10 text-white ml-1" />
                          </div>
                        </button>
                      </>
                    )}
                  </div>

                  {/* Video Info & Download Options */}
                  <div className="p-5 sm:p-6 lg:p-8 flex flex-col">
                    <h2 className="text-lg sm:text-xl font-bold text-dark-900 dark:text-white mb-2 line-clamp-2">
                      {videoInfo.title}
                    </h2>
                    <div className="flex flex-wrap items-center gap-2 mb-5">
                      <span className="text-sm text-dark-500 dark:text-dark-400">{videoInfo.author}</span>
                      {videoInfo.duration && (
                        <>
                          <span className="text-dark-300">•</span>
                          <span className="text-sm text-dark-500 dark:text-dark-400">{videoInfo.duration}</span>
                        </>
                      )}
                      {videoInfo.viewCount && (
                        <>
                          <span className="text-dark-300">•</span>
                          <span className="text-sm text-dark-500 dark:text-dark-400">{videoInfo.viewCount}</span>
                        </>
                      )}
                      <span className="text-dark-300">•</span>
                      <button
                        onClick={handleCopyUrl}
                        className="inline-flex items-center gap-1 text-xs text-dark-400 hover:text-primary transition-colors"
                      >
                        {copied ? <CheckCircle className="w-3.5 h-3.5 text-primary" /> : <Copy className="w-3.5 h-3.5" />}
                        {copied ? 'Copied!' : 'Copy URL'}
                      </button>
                    </div>

                    {/* Format Tabs */}
                    <div className="flex border-b border-dark-100 dark:border-dark-700 mb-4">
                      <button
                        onClick={() => {
                          setActiveTab('video')
                          const vf = videoFormats[0]
                          if (vf) setSelectedFormat(vf)
                        }}
                        className={cn(
                          'flex items-center gap-2 px-4 py-2.5 text-sm font-medium border-b-2 transition-colors',
                          activeTab === 'video'
                            ? 'border-red-500 text-red-600 dark:text-red-400'
                            : 'border-transparent text-dark-500 hover:text-dark-700 dark:hover:text-dark-300'
                        )}
                      >
                        <Film className="w-4 h-4" />
                        Video
                      </button>
                      <button
                        onClick={() => {
                          setActiveTab('audio')
                          const af = audioFormats[0]
                          if (af) setSelectedFormat(af)
                        }}
                        className={cn(
                          'flex items-center gap-2 px-4 py-2.5 text-sm font-medium border-b-2 transition-colors',
                          activeTab === 'audio'
                            ? 'border-red-500 text-red-600 dark:text-red-400'
                            : 'border-transparent text-dark-500 hover:text-dark-700 dark:hover:text-dark-300'
                        )}
                      >
                        <Music className="w-4 h-4" />
                        Audio
                      </button>
                    </div>

                    {/* Format Options */}
                    <div className="flex-1 space-y-2 mb-5 max-h-[200px] overflow-y-auto pr-1 custom-scrollbar">
                      {(activeTab === 'video' ? videoFormats : audioFormats).map((format) => (
                        <label
                          key={format.quality}
                          className={cn(
                            'flex items-center gap-3 p-3 rounded-xl border-2 cursor-pointer transition-all duration-200',
                            selectedFormat?.quality === format.quality && selectedFormat?.type === format.type
                              ? 'border-red-500 bg-red-50 dark:bg-red-900/20 dark:border-red-500'
                              : 'border-dark-100 dark:border-dark-700 hover:border-dark-300 dark:hover:border-dark-600'
                          )}
                        >
                          <input
                            type="radio"
                            name="format"
                            value={format.quality}
                            checked={selectedFormat?.quality === format.quality && selectedFormat?.type === format.type}
                            onChange={() => setSelectedFormat(format)}
                            className="sr-only"
                          />
                          <div
                            className={cn(
                              'w-4 h-4 rounded-full border-2 flex items-center justify-center flex-shrink-0',
                              selectedFormat?.quality === format.quality && selectedFormat?.type === format.type
                                ? 'border-red-500'
                                : 'border-dark-300 dark:border-dark-600'
                            )}
                          >
                            {selectedFormat?.quality === format.quality && selectedFormat?.type === format.type && (
                              <div className="w-2 h-2 rounded-full bg-red-500" />
                            )}
                          </div>
                          <div className="flex-1 flex items-center justify-between gap-2">
                            <span className="text-sm font-medium text-dark-700 dark:text-dark-300">
                              {format.label}
                            </span>
                            <div className="flex items-center gap-2 flex-shrink-0">
                              {format.size && (
                                <span className="text-xs text-dark-400">{format.size}</span>
                              )}
                              <span
                                className={cn(
                                  'text-xs px-2 py-0.5 rounded-full font-medium',
                                  format.quality.includes('1080')
                                    ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400'
                                    : format.quality.includes('720')
                                    ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400'
                                    : 'bg-dark-100 text-dark-600 dark:bg-dark-800 dark:text-dark-400'
                                )}
                              >
                                {format.format.toUpperCase()}
                              </span>
                            </div>
                          </div>
                        </label>
                      ))}
                    </div>

                    {/* Download Button */}
                    <div className="space-y-2">
                      <button
                        onClick={handleDownload}
                        disabled={downloading || !selectedFormat}
                        className={cn(
                          'w-full flex items-center justify-center gap-2 px-6 py-4 text-base font-semibold text-white',
                          'bg-red-600 hover:bg-red-700 rounded-xl transition-all duration-300',
                          'shadow-lg shadow-red-500/25 hover:shadow-xl hover:shadow-red-500/30',
                          'disabled:opacity-50 disabled:cursor-not-allowed'
                        )}
                      >
                        {downloading ? (
                          <>
                            <Loader2 className="w-5 h-5 animate-spin" />
                            Starting Download...
                          </>
                        ) : (
                          <>
                            <Download className="w-5 h-5" />
                            Download {selectedFormat?.type === 'audio' ? 'Audio' : 'Video'}
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Features Section */}
      <section className={cn('section-padding', videoInfo ? 'bg-gray-50 dark:bg-dark-900' : 'bg-white dark:bg-dark-950')}>
        <div className="container-custom">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-dark-900 dark:text-white mb-4">
              Why Use Our YouTube Downloader?
            </h2>
            <p className="text-base md:text-lg text-dark-500 dark:text-dark-400 max-w-2xl mx-auto">
              A powerful, free tool designed for the best downloading experience.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Zap className="w-7 h-7" />,
                title: 'Lightning Fast',
                desc: 'Get your downloads in seconds with our optimized servers. No waiting, no delays.',
                color: 'text-yellow-500 bg-yellow-50 dark:bg-yellow-900/20',
              },
              {
                icon: <Shield className="w-7 h-7" />,
                title: '100% Secure',
                desc: 'No malware, no data collection. Your privacy and security are our top priority.',
                color: 'text-green-500 bg-green-50 dark:bg-green-900/20',
              },
              {
                icon: <Smartphone className="w-7 h-7" />,
                title: 'All Devices',
                desc: 'Works perfectly on desktop, tablet, and mobile. No app installation needed.',
                color: 'text-blue-500 bg-blue-50 dark:bg-blue-900/20',
              },
              {
                icon: <Globe className="w-7 h-7" />,
                title: 'No Limits',
                desc: 'Download unlimited videos for free. No registration or sign-up required.',
                color: 'text-purple-500 bg-purple-50 dark:bg-purple-900/20',
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="card p-6 text-center dark:bg-dark-900 dark:border-dark-800 card-hover group"
              >
                <div
                  className={cn(
                    'inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-4 transition-transform group-hover:scale-110',
                    feature.color
                  )}
                >
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-dark-900 dark:text-white mb-2">{feature.title}</h3>
                <p className="text-sm text-dark-500 dark:text-dark-400">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Use Section */}
      <section className="section-padding bg-white dark:bg-dark-950">
        <div className="container-custom">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-dark-900 dark:text-white mb-4">
              How to Download YouTube Videos
            </h2>
            <p className="text-base md:text-lg text-dark-500 dark:text-dark-400 max-w-2xl mx-auto">
              Just 3 simple steps to download any YouTube video.
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: '1',
                title: 'Paste URL',
                desc: 'Copy the YouTube video URL from your browser and paste it in the input field above.',
                icon: <Copy className="w-6 h-6" />,
              },
              {
                step: '2',
                title: 'Choose Format',
                desc: 'Select your preferred video quality (1080p, 720p, etc.) or audio format (MP3).',
                icon: <Film className="w-6 h-6" />,
              },
              {
                step: '3',
                title: 'Download',
                desc: 'Click the download button and your file will start downloading immediately.',
                icon: <Download className="w-6 h-6" />,
              },
            ].map((step, i) => (
              <div key={i} className="relative text-center group">
                {/* Connector line */}
                {i < 2 && (
                  <div className="hidden md:block absolute top-10 left-[60%] w-[80%] border-t-2 border-dashed border-dark-200 dark:border-dark-700" />
                )}
                <div className="relative z-10 inline-flex items-center justify-center w-20 h-20 bg-red-50 dark:bg-red-900/20 rounded-3xl mb-5 group-hover:scale-110 transition-transform">
                  <div className="text-red-600 dark:text-red-400">{step.icon}</div>
                  <span className="absolute -top-2 -right-2 w-7 h-7 bg-red-600 text-white text-xs font-bold rounded-full flex items-center justify-center">
                    {step.step}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-dark-900 dark:text-white mb-2">{step.title}</h3>
                <p className="text-sm text-dark-500 dark:text-dark-400 max-w-xs mx-auto">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Supported Formats Section */}
      <section className="section-padding bg-gray-50 dark:bg-dark-900">
        <div className="container-custom">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-dark-900 dark:text-white mb-4">
              Supported Formats
            </h2>
            <p className="text-base md:text-lg text-dark-500 dark:text-dark-400 max-w-2xl mx-auto">
              Download in the format that suits your needs.
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Video Formats */}
            <div className="card p-6 dark:bg-dark-800 dark:border-dark-700">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-red-50 dark:bg-red-900/20 rounded-xl flex items-center justify-center">
                  <Film className="w-6 h-6 text-red-500" />
                </div>
                <h3 className="text-lg font-bold text-dark-900 dark:text-white">Video Formats</h3>
              </div>
              <ul className="space-y-3">
                {['MP4 - 1080p Full HD', 'MP4 - 720p HD', 'MP4 - 480p SD', 'MP4 - 360p'].map((f, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-dark-600 dark:text-dark-400">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            {/* Audio Formats */}
            <div className="card p-6 dark:bg-dark-800 dark:border-dark-700">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-purple-50 dark:bg-purple-900/20 rounded-xl flex items-center justify-center">
                  <Music className="w-6 h-6 text-purple-500" />
                </div>
                <h3 className="text-lg font-bold text-dark-900 dark:text-white">Audio Formats</h3>
              </div>
              <ul className="space-y-3">
                {['MP3 - 128kbps Standard', 'MP3 - 256kbps High Quality'].map((f, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-dark-600 dark:text-dark-400">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-white dark:bg-dark-950">
        <div className="container-custom">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-dark-900 dark:text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-base md:text-lg text-dark-500 dark:text-dark-400 max-w-2xl mx-auto">
              Everything you need to know about our YouTube downloader.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="card overflow-hidden dark:bg-dark-900 dark:border-dark-800"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left"
                >
                  <div className="flex items-start gap-3">
                    <HelpCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base font-medium text-dark-900 dark:text-white">
                      {faq.q}
                    </span>
                  </div>
                  <ChevronDown
                    className={cn(
                      'w-5 h-5 text-dark-400 flex-shrink-0 transition-transform duration-200',
                      openFaq === i && 'rotate-180'
                    )}
                  />
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-5 pt-0 animate-fade-in">
                    <div className="pl-8">
                      <p className="text-sm text-dark-500 dark:text-dark-400 leading-relaxed">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-red-600 via-red-700 to-red-800">
        <div className="container-custom text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Download?
          </h2>
          <p className="text-base md:text-lg text-red-100 max-w-2xl mx-auto mb-8">
            Start downloading your favorite YouTube videos now. It&apos;s free, fast, and easy.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-red-600 font-semibold rounded-xl hover:bg-red-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            <ArrowRight className="w-5 h-5" />
            Start Downloading
          </button>
        </div>
      </section>
    </>
  )
}
