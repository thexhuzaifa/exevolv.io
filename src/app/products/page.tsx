import { Metadata } from 'next'
import ProductCard from '@/components/ui/ProductCard'
import Breadcrumbs from '@/components/ui/Breadcrumbs'
import { products } from '@/lib/products'
import { Chrome, Smartphone, Globe } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Products - Browser Extensions & Apps',
  description: 'Explore our collection of browser extensions and applications. ProxyConnector Pro, QuizMaster AI, TaleemSpot Notes and more.',
  openGraph: {
    title: 'Products - exevolv.io',
    description: 'Explore our collection of browser extensions and applications.',
  },
}

const categories = [
  { id: 'all', name: 'All Products', icon: Globe },
  { id: 'chrome-extension', name: 'Chrome Extensions', icon: Chrome },
  { id: 'android-app', name: 'Android Apps', icon: Smartphone },
]

export default function ProductsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative gradient-bg py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        </div>
        <div className="container-custom relative">
          <Breadcrumbs items={[{ label: 'Products' }]} />
          
          <div className="max-w-3xl">
            <span className="badge-primary mb-4 inline-block">Browse All</span>
            <h1 className="text-4xl md:text-5xl font-bold text-dark-900 dark:text-white mb-4 leading-[1.1]">
              Our Products
            </h1>
            <p className="text-lg text-dark-600 dark:text-dark-400 leading-relaxed">
              Discover our collection of browser extensions and applications designed 
              to enhance your productivity, protect your privacy, and simplify your digital life.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-padding bg-white dark:bg-dark-950">
        <div className="container-custom">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map((category, index) => (
              <span
                key={category.id}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-colors cursor-default ${
                  index === 0 
                    ? 'bg-primary text-white' 
                    : 'bg-dark-100 text-dark-700 dark:bg-dark-800 dark:text-dark-300'
                }`}
              >
                <category.icon className="w-4 h-4" />
                {category.name}
              </span>
            ))}
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* Coming Soon */}
          <div className="mt-16 p-10 bg-gradient-to-br from-dark-50 to-primary-50/30 dark:from-dark-900 dark:to-primary-900/10 rounded-2xl text-center border border-dark-100 dark:border-dark-800">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🚀</span>
            </div>
            <h3 className="text-xl font-bold text-dark-900 dark:text-white mb-3">
              More Products Coming Soon
            </h3>
            <p className="text-dark-600 dark:text-dark-400 max-w-md mx-auto">
              We&apos;re constantly working on new tools to help you. Stay tuned for updates!
            </p>
          </div>
        </div>
      </section>

      {/* Schema.org markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            itemListElement: products.map((product, index) => ({
              '@type': 'ListItem',
              position: index + 1,
              item: {
                '@type': 'SoftwareApplication',
                name: product.name,
                description: product.description,
                applicationCategory: product.category === 'android-app' ? 'EducationalApplication' : 'BrowserApplication',
                operatingSystem: product.category === 'android-app' ? 'Android' : 'Chrome, Firefox, Edge',
                offers: {
                  '@type': 'Offer',
                  price: '0',
                  priceCurrency: 'USD'
                },
                aggregateRating: {
                  '@type': 'AggregateRating',
                  ratingValue: product.rating,
                  ratingCount: 10
                }
              }
            }))
          })
        }}
      />
    </>
  )
}
