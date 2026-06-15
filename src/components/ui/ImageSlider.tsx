'use client'

import { useState, useCallback, useEffect } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface ImageSliderProps {
  images: string[]
  altText: string
}

export default function ImageSlider({ images, altText }: ImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const goToSlide = useCallback((index: number) => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex(index)
    setTimeout(() => setIsAnimating(false), 350)
  }, [isAnimating])

  const nextSlide = useCallback(() => {
    goToSlide(currentIndex === images.length - 1 ? 0 : currentIndex + 1)
  }, [currentIndex, images.length, goToSlide])

  const prevSlide = useCallback(() => {
    goToSlide(currentIndex === 0 ? images.length - 1 : currentIndex - 1)
  }, [currentIndex, images.length, goToSlide])

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prevSlide()
      if (e.key === 'ArrowRight') nextSlide()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [nextSlide, prevSlide])

  if (!images || images.length === 0) return null

  const showControls = images.length > 1

  return (
    <div className="relative w-full select-none">
      {/* Main Image Container */}
      <div className="relative w-full aspect-[4/3] sm:aspect-video md:aspect-[16/10] bg-gray-100 dark:bg-dark-900 rounded-2xl overflow-hidden shadow-2xl shadow-primary/20 border border-gray-200 dark:border-dark-800">
        <Image
          src={images[currentIndex]}
          alt={`${altText} - Screenshot ${currentIndex + 1}`}
          fill
          unoptimized={true}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 70vw"
          priority={currentIndex === 0}
          className={`object-contain p-2 sm:p-4 transition-opacity duration-300 ease-in-out ${
            isAnimating ? 'opacity-60' : 'opacity-100'
          }`}
        />

        {/* Left / Right Arrow Buttons — always visible on sides */}
        {showControls && (
          <>
            <button
              onClick={prevSlide}
              className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-black/40 hover:bg-black/70 backdrop-blur-sm flex items-center justify-center text-white transition-all duration-200 shadow-lg border border-white/20 hover:scale-105"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-black/40 hover:bg-black/70 backdrop-blur-sm flex items-center justify-center text-white transition-all duration-200 shadow-lg border border-white/20 hover:scale-105"
              aria-label="Next image"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            {/* Image counter badge — top right */}
            <div className="absolute top-3 right-3 z-10 px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-sm text-white text-xs font-medium border border-white/20">
              {currentIndex + 1} / {images.length}
            </div>
          </>
        )}
      </div>

      {/* Dots Indicator — below slider, always visible, wraps automatically */}
      {showControls && (
        <div className="mt-4 flex flex-wrap justify-center gap-2 px-2">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToSlide(idx)}
              aria-label={`Go to image ${idx + 1}`}
              className={`rounded-full transition-all duration-300 flex-shrink-0 ${
                idx === currentIndex
                  ? 'bg-primary w-6 h-2.5'
                  : 'bg-gray-300 dark:bg-dark-600 hover:bg-primary/50 w-2.5 h-2.5'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  )
}
