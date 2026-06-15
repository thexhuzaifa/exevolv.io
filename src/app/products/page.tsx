import { Metadata } from 'next'
import Breadcrumbs from '@/components/ui/Breadcrumbs'
import { products } from '@/lib/products'
import ProductsGrid from '@/components/ui/ProductsGrid'

export const metadata: Metadata = {
  title: 'Products - Browser Extensions & Apps',
  description: 'Explore our collection of browser extensions and applications. ProxyConnector Pro, QuizMaster AI, and more.',
  openGraph: {
    title: 'Products - exevolv.io',
    description: 'Explore our collection of browser extensions and applications.',
  },
}

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
        <ProductsGrid initialProducts={products} />
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
