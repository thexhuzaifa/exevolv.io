'use client'

import { useState } from 'react'
import { Chrome, Smartphone, Globe } from 'lucide-react'
import ProductCard from '@/components/ui/ProductCard'
import { Product } from '@/lib/products'

interface ProductsGridProps {
  initialProducts: Product[]
}

const categories = [
  { id: 'all', name: 'All Products', icon: Globe },
  { id: 'chrome-extension', name: 'Chrome Extensions', icon: Chrome },
  { id: 'android-app', name: 'Android Apps', icon: Smartphone },
]

export default function ProductsGrid({ initialProducts }: ProductsGridProps) {
  const [activeCategory, setActiveCategory] = useState('all')

  const filteredProducts = activeCategory === 'all'
    ? initialProducts
    : initialProducts.filter(product => product.category === activeCategory)

  return (
    <div className="container-custom">
      {/* Category Tabs */}
      <div className="flex flex-wrap gap-2 mb-12">
        {categories.map((category) => {
          const isActive = activeCategory === category.id
          return (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
                isActive 
                  ? 'bg-primary text-white' 
                  : 'bg-dark-100 text-dark-700 dark:bg-dark-800 dark:text-dark-300 hover:bg-dark-200 dark:hover:bg-dark-700'
              }`}
            >
              <category.icon className="w-4 h-4" />
              {category.name}
            </button>
          )
        })}
      </div>

      {/* Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-dark-500">No products found in this category.</p>
        </div>
      )}
    </div>
  )
}
