'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface ImageSliderProps {
  images: string[]
}

export function ImageSlider({ images }: ImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  if (!images || images.length === 0) return null

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }

  const nextSlide = () => {
    const isLastSlide = currentIndex === images.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }

  return (
    <div className="relative w-full max-w-5xl mx-auto mt-12 mb-28">
      {/* Responsive Image Container */}
      <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-gray-50/50 dark:bg-dark-900/50 backdrop-blur-sm border border-gray-200 dark:border-dark-800 shadow-lg">
        <Image
          src={images[currentIndex]}
          alt={`Product screenshot ${currentIndex + 1}`}
          fill
          className="object-contain p-2 md:p-4 transition-opacity duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
          priority
        />
      </div>

      {/* Bottom Navigation Buttons */}
      <div className="absolute -bottom-16 left-0 right-0 flex justify-center items-center gap-6">
        <button
          onClick={prevSlide}
          className="flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all duration-300 backdrop-blur-md border border-primary/20"
          aria-label="Previous Image"
        >
          <ChevronLeft size={32} strokeWidth={2} />
        </button>

        {/* Slide Counter */}
        <span className="text-dark-600 dark:text-dark-400 font-medium px-4">
          {currentIndex + 1} / {images.length}
        </span>

        <button
          onClick={nextSlide}
          className="flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all duration-300 backdrop-blur-md border border-primary/20"
          aria-label="Next Image"
        >
          <ChevronRight size={32} strokeWidth={2} />
        </button>
      </div>
    </div>
  )
}