'use client'

interface ProfileImageProps {
  src: string
  alt: string
  fallbackName: string
}

export default function ProfileImage({ src, alt, fallbackName }: ProfileImageProps) {
  return (
    <img
      src={src}
      alt={alt}
      className="w-full h-full object-cover object-top"
      onError={(e) => {
        e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(fallbackName)}&size=512&background=02B875&color=fff`
      }}
    />
  )
}
