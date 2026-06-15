'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface ImageSliderProps {
  images: string[]
  altText: string
}

export default function ImageSlider({ images, altText }: ImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  if (!images || images.length === 0) return null

  return (
    <div className="relative w-full aspect-[4/3] sm:aspect-video md:aspect-[16/10] bg-gray-50 dark:bg-dark-900 rounded-3xl overflow-hidden shadow-2xl shadow-primary/20 group">
      <Image
        key={currentIndex}
        src={images[currentIndex]} 
        alt={`${altText} - Screenshot ${currentIndex + 1}`}
        fill
        sizes="(max-width: 1024px) 100vw, 70vw"
        priority={currentIndex === 0}
        className="object-contain p-2 sm:p-4 transition-opacity duration-300 ease-in-out"
      />
      
      {/* Slider Controls */}
      {images.length > 1 && (
        <div className="absolute bottom-4 left-0 right-0 flex items-center justify-center gap-4 transition-opacity duration-300">
          {/* Previous Button */}
          <button 
            onClick={prevSlide}
            className="w-12 h-12 rounded-full bg-transparent hover:bg-white/10 backdrop-blur-sm border-2 border-white/50 hover:border-white flex items-center justify-center text-white transition-all shadow-lg"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>
          
          {/* Dots Indicator */}
          <div className="flex gap-2 px-4 py-3 rounded-full bg-transparent backdrop-blur-sm border-2 border-white/50">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  idx === currentIndex ? 'bg-white w-5' : 'bg-white/50 hover:bg-white/80'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          {/* Next Button */}
          <button 
            onClick={nextSlide}
            className="w-12 h-12 rounded-full bg-transparent hover:bg-white/10 backdrop-blur-sm border-2 border-white/50 hover:border-white flex items-center justify-center text-white transition-all shadow-lg"
            aria-label="Next image"
          >
            <ChevronRight className="w-8 h-8" />
          </button>
        </div>
      )}
    </div>
  )
}
