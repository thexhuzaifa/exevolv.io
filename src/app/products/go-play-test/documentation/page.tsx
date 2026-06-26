import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/ui/Breadcrumbs'
import { getProductBySlug } from '@/lib/products'
import { Book, ArrowLeft, Download, Settings, Zap, HelpCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Documentation - Go Play Test',
  description: 'Complete documentation and user guide for Go Play Test. Learn how to join beta tests, report issues, and use the app.',
}

export default function DocumentationPage() {
  const product = getProductBySlug('go-play-test')
  if (!product) {
    return <div>Product not found</div>
  }

  const docSections = [
    {
      icon: <Download className="w-5 h-5" />,
      title: 'How to Join',
      content: `Visit the Google Play Store (${product.storeUrl}) and opt into the beta if available. Alternatively, join our Google Group for beta announcements and direct links to pre-release builds: ${product.groupUrl}.`,
    },
    {
      icon: <Settings className="w-5 h-5" />,
      title: 'Submitting Feedback',
      content: 'Use the in-app feedback flow or open an issue on the GitHub repository. Provide device details, steps to reproduce, and logs where possible.',
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: 'Core Features',
      content: product.features.map(f => f.title).join(', ') + '.',
    },
    {
      icon: <HelpCircle className="w-5 h-5" />,
      title: 'Troubleshooting',
      content: 'If the app fails to install or run, ensure your device meets the minimum Android version and that you have enough storage. Reach out via the Google Group for beta help.',
    },
  ]

  return (
    <>
      <section className="gradient-bg py-16 md:py-24">
        <div className="container-custom">
          <Breadcrumbs 
            items={[
              { label: 'Products', href: '/products' },
              { label: product.name, href: `/products/${product.slug}` },
              { label: 'Documentation' }
            ]} 
          />
          
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-primary-50 dark:bg-primary-900/20 rounded-xl flex items-center justify-center">
                <Book className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-dark-500">{product.name}</p>
                <h1 className="text-3xl md:text-4xl font-bold text-dark-900 dark:text-white">Documentation</h1>
              </div>
            </div>
            <p className="text-dark-600 dark:text-dark-400">Everything you need to know about using {product.name}.</p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white dark:bg-dark-950">
        <div className="container-custom">
          <div className="grid lg:grid-cols-4 gap-8">
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <h3 className="font-semibold text-dark-900 dark:text-white mb-4">Quick Navigation</h3>
                <nav className="space-y-1">
                  {docSections.map((section) => (
                    <a key={section.title} href={`#${section.title.toLowerCase().replace(/\s/g, '-')}`} className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-dark-600 dark:text-dark-400 hover:bg-dark-100 dark:hover:bg-dark-800 hover:text-primary transition-colors">
                      {section.icon}
                      {section.title}
                    </a>
                  ))}
                </nav>
                <div className="mt-8 p-4 bg-dark-50 dark:bg-dark-900 rounded-xl">
                  <h4 className="font-semibold text-dark-900 dark:text-white mb-2 text-sm">Need Help?</h4>
                  <p className="text-xs text-dark-600 dark:text-dark-400 mb-3">Can't find what you're looking for?</p>
                  <Link href="/contact" className="text-primary text-sm font-medium hover:underline">Contact Support →</Link>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3 space-y-12">
              <div>
                <h2 className="text-2xl font-bold text-dark-900 dark:text-white mb-4">Overview</h2>
                <p className="text-dark-600 dark:text-dark-400 mb-4">{product.description}</p>
                <div className="card p-4 bg-primary-50 dark:bg-primary-900/20 border-primary-200 dark:border-primary-800">
                  <p className="text-sm text-primary-800 dark:text-primary-300"><strong>Version:</strong> {product.version} • <strong>Last Updated:</strong> {product.lastUpdated}</p>
                </div>
              </div>

              {docSections.map((section) => (
                <div key={section.title} id={section.title.toLowerCase().replace(/\s/g, '-')} className="scroll-mt-24">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-primary-50 dark:bg-primary-900/20 rounded-lg flex items-center justify-center text-primary">{section.icon}</div>
                    <h2 className="text-xl font-bold text-dark-900 dark:text-white">{section.title}</h2>
                  </div>
                  <div className="card p-6">
                    <p className="text-dark-600 dark:text-dark-400">{section.content}</p>
                  </div>
                </div>
              ))}

              <div id="features" className="scroll-mt-24">
                <h2 className="text-xl font-bold text-dark-900 dark:text-white mb-4">Features in Detail</h2>
                <div className="space-y-4">
                  {product.features.map((feature, index) => (
                    <div key={index} className="card p-6">
                      <h3 className="font-bold text-dark-900 dark:text-white mb-2">{feature.title}</h3>
                      <p className="text-dark-600 dark:text-dark-400">{feature.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <Link href={`/products/${product.slug}`} className="inline-flex items-center text-primary hover:underline"><ArrowLeft className="w-4 h-4 mr-2" />Back to {product.name}</Link>
          </div>
        </div>
      </section>
    </>
  )
}
