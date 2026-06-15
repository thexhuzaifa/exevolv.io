'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { Search, ChevronRight } from 'lucide-react'
import { Product } from '@/lib/products'

interface DocsSearchProps {
  products: Product[]
}

export default function DocsSearch({ products }: DocsSearchProps) {
  const [query, setQuery] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const filteredProducts = query === ''
    ? []
    : products.filter(product => 
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.tagline.toLowerCase().includes(query.toLowerCase()) ||
        product.description.toLowerCase().includes(query.toLowerCase())
      )

  return (
    <div className="relative max-w-xl" ref={dropdownRef}>
      <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-dark-400" />
      <input
        type="text"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value)
          setIsOpen(true)
        }}
        onFocus={() => setIsOpen(true)}
        placeholder="Search documentation..."
        className="w-full pl-12 pr-4 py-4 bg-white/80 dark:bg-dark-900/80 backdrop-blur-sm border border-dark-200 dark:border-dark-700 rounded-xl text-dark-900 dark:text-white placeholder:text-dark-400 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary shadow-lg"
      />

      {isOpen && query !== '' && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-dark-900 border border-dark-150 dark:border-dark-800 rounded-xl shadow-xl z-50 max-h-80 overflow-y-auto">
          {filteredProducts.length > 0 ? (
            <div className="p-2">
              <div className="px-3 py-1.5 text-xs font-semibold text-dark-500 uppercase tracking-wider">
                Matching Documentation
              </div>
              {filteredProducts.map(product => (
                <Link
                  key={product.id}
                  href={`/products/${product.slug}/documentation`}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between p-3 rounded-lg hover:bg-dark-50 dark:hover:bg-dark-800 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <img src={product.icon} alt={product.name} className="w-8 h-8 rounded-lg object-contain bg-dark-50 dark:bg-dark-950" />
                    <div>
                      <div className="text-sm font-bold text-dark-900 dark:text-white group-hover:text-primary transition-colors">
                        {product.name} Guide
                      </div>
                      <div className="text-xs text-dark-500 line-clamp-1">
                        {product.tagline}
                      </div>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-dark-400 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </Link>
              ))}
            </div>
          ) : (
            <div className="p-4 text-center text-sm text-dark-500">
              No docs found matching &quot;{query}&quot;
            </div>
          )}
        </div>
      )}
    </div>
  )
}
