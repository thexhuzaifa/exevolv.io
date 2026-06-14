import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/ui/Breadcrumbs'
import { Book, Search, ChevronRight, FileText, Download, HelpCircle, Wrench, Code } from 'lucide-react'
import { products } from '@/lib/products'

export const metadata: Metadata = {
  title: 'Documentation',
  description: 'Comprehensive documentation for all exevolv.io products. Find user guides, installation instructions, and troubleshooting help.',
  openGraph: {
    title: 'Documentation - exevolv.io',
    description: 'Comprehensive documentation for all exevolv.io products.',
  },
}

const quickLinks = [
  {
    title: 'Getting Started',
    icon: <Download className="w-6 h-6" />,
    description: 'New to our products? Start here to learn how to install and set up our browser extensions and apps.',
    links: [
      { name: 'ProxyConnector Pro Guide', href: '/products/proxyconnector-pro/documentation' },
      { name: 'QuizMaster AI Guide', href: '/products/quizmaster-ai/documentation' },
      { name: 'TaleemSpot Notes Guide', href: '/products/taleemspot-notes/documentation' },
    ]
  },
  {
    title: 'User Guides',
    icon: <Book className="w-6 h-6" />,
    description: 'Detailed guides for using and getting the most out of our products.',
    links: [
      { name: 'Pulser Pro Guide', href: '/products/pulser-pro/documentation' },
      { name: 'ZeroAds Guide', href: '/products/zeroadsblocker/documentation' },
      { name: 'View All Products', href: '/products' },
    ]
  },
  {
    title: 'Troubleshooting & FAQs',
    icon: <Wrench className="w-6 h-6" />,
    description: 'Having issues? Check our frequently asked questions and troubleshooting guides.',
    links: [
      { name: 'General FAQs', href: '/faqs' },
      { name: 'IP Filter Exchange FAQs', href: '/products/ip-filter-exchange/faqs' },
      { name: 'QuizMaster AI FAQs', href: '/products/quizmaster-ai/faqs' },
    ]
  },
  {
    title: 'Legal & Policies',
    icon: <FileText className="w-6 h-6" />,
    description: 'Privacy policies, terms of service, and other legal documentation for our products.',
    links: [
      { name: 'Privacy Policy', href: '/privacy-policy' },
      { name: 'Terms of Service', href: '/terms-of-service' },
      { name: 'Refund Policy', href: '/refund-policy' },
    ]
  },
]

export default function DocsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative gradient-bg py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        </div>
        <div className="container-custom relative">
          <Breadcrumbs items={[{ label: 'Documentation' }]} />
          
          <div className="max-w-3xl">
            <span className="badge-primary mb-4 inline-block">Resources</span>
            <h1 className="text-4xl md:text-5xl font-bold text-dark-900 dark:text-white mb-4 leading-[1.1]">
              Documentation
            </h1>
            <p className="text-lg text-dark-600 dark:text-dark-400 mb-8 leading-relaxed">
              Everything you need to know about our products. Find guides, tutorials, 
              and technical documentation to help you get the most out of our tools.
            </p>
            
            {/* Search */}
            <div className="relative max-w-xl">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-dark-400" />
              <input
                type="text"
                placeholder="Search documentation..."
                className="w-full pl-12 pr-4 py-4 bg-white/80 dark:bg-dark-900/80 backdrop-blur-sm border border-dark-200 dark:border-dark-700 rounded-xl text-dark-900 dark:text-white placeholder:text-dark-400 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Doc Categories */}
      <section className="section-padding bg-white dark:bg-dark-950">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            {quickLinks.map((category) => (
              <div key={category.title} className="card card-hover p-8 border-t-4 border-t-primary">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 rounded-2xl flex items-center justify-center text-primary flex-shrink-0">
                    {category.icon}
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-dark-900 dark:text-white mb-1">
                      {category.title}
                    </h2>
                    <p className="text-sm text-dark-600 dark:text-dark-400 leading-relaxed">
                      {category.description}
                    </p>
                  </div>
                </div>
                <ul className="space-y-1">
                  {category.links.map((link) => (
                    <li key={link.name}>
                      <Link 
                        href={link.href}
                        className="flex items-center justify-between p-3 rounded-xl hover:bg-dark-50 dark:hover:bg-dark-800 transition-colors group"
                      >
                        <span className="text-dark-700 dark:text-dark-300 group-hover:text-primary transition-colors font-medium text-sm">
                          {link.name}
                        </span>
                        <ChevronRight className="w-4 h-4 text-dark-400 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Documentation */}
      <section className="section-padding bg-dark-50 dark:bg-dark-900">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-bold text-dark-900 dark:text-white mb-8 text-center">
            Product Documentation
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {products.map((product) => (
              <Link 
                key={product.id}
                href={`/products/${product.slug}/documentation`}
                className="card card-hover p-6 group"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900/20 dark:to-primary-800/20 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  <span className="text-xl font-bold text-primary">{product.name.charAt(0)}</span>
                </div>
                <h3 className="font-bold text-lg text-dark-900 dark:text-white mb-2 group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                <p className="text-sm text-dark-600 dark:text-dark-400 mb-4">
                  {product.tagline}
                </p>
                <div className="flex items-center text-primary text-sm font-medium">
                  View Documentation <ChevronRight className="w-4 h-4 ml-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Help Section */}
      <section className="py-12 bg-white dark:bg-dark-950">
        <div className="container-custom text-center">
          <div className="w-16 h-16 bg-primary-50 dark:bg-primary-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <HelpCircle className="w-8 h-8 text-primary" />
          </div>
          <h3 className="text-xl font-bold text-dark-900 dark:text-white mb-2">
            Can't find what you're looking for?
          </h3>
          <p className="text-dark-600 dark:text-dark-400 mb-6 max-w-lg mx-auto">
            Check our FAQs or contact our support team for personalized help.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/faqs" className="btn-outline">
              View FAQs
            </Link>
            <Link href="/contact" className="btn-primary">
              Contact Support
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
