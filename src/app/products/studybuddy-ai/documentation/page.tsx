import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Breadcrumbs from '@/components/ui/Breadcrumbs'
import { getProductBySlug } from '@/lib/products'
import { Book, ArrowLeft, Download, WifiOff, Shield, HelpCircle, Sparkles, FileQuestion } from 'lucide-react'
import { SITE_URL } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Documentation for StudyBuddy AI',
  description: 'User guide for StudyBuddy AI, the homework helper app with offline-capable AI explanations.',
  alternates: {
    canonical: `${SITE_URL}/products/studybuddy-ai/documentation`,
  },
}

export default function DocumentationPage() {
  const product = getProductBySlug('studybuddy-ai')

  if (!product) {
    notFound()
  }

  const sections = [
    {
      icon: Download,
      title: 'Install the App',
      content: 'Install StudyBuddy AI from Google Play using the package id app.creativetaleem.aitutor. Open the app after installation to start asking questions.',
    },
    {
      icon: Sparkles,
      title: 'Ask a Question',
      content: 'Type or paste your homework question into the app. The AI will generate a clear answer and, where possible, a step-by-step explanation.',
    },
    {
      icon: WifiOff,
      title: 'Save for Offline Use',
      content: 'If you save questions and answers, they are stored locally on your device so you can review them later without an internet connection.',
    },
    {
      icon: Shield,
      title: 'Privacy First',
      content: 'No account is required, no ads are shown, and no tracking cookies are used. The app is designed to stay lightweight and private.',
    },
    {
      icon: FileQuestion,
      title: 'AI Processing',
      content: 'Your question text is sent only to the AI processor needed to generate the answer. The request is processed ephemerally and is not permanently stored.',
    },
    {
      icon: HelpCircle,
      title: 'Need Help?',
      content: 'If a response looks incomplete, try rephrasing the question or adding more detail. For app issues, use the contact page on the website.',
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
              { label: 'Documentation' },
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
                  {sections.map((section) => {
                    const Icon = section.icon
                    return (
                      <a
                        key={section.title}
                        href={`#${section.title.toLowerCase().replace(/\s/g, '-')}`}
                        className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-dark-600 dark:text-dark-400 hover:bg-dark-100 dark:hover:bg-dark-800 hover:text-primary transition-colors"
                      >
                        <Icon className="w-4 h-4" />
                        {section.title}
                      </a>
                    )
                  })}
                </nav>

                <div className="mt-8 p-4 bg-dark-50 dark:bg-dark-900 rounded-xl">
                  <h4 className="font-semibold text-dark-900 dark:text-white mb-2 text-sm">Need Help?</h4>
                  <p className="text-xs text-dark-600 dark:text-dark-400 mb-3">Can&apos;t find what you&apos;re looking for?</p>
                  <Link href="/contact" className="text-primary text-sm font-medium hover:underline">
                    Contact Support →
                  </Link>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3 space-y-12">
              <div>
                <h2 className="text-2xl font-bold text-dark-900 dark:text-white mb-4">Overview</h2>
                <p className="text-dark-600 dark:text-dark-400 mb-4">{product.description}</p>
                <div className="card p-4 bg-primary-50 dark:bg-primary-900/20 border-primary-200 dark:border-primary-800">
                  <p className="text-sm text-primary-800 dark:text-primary-300">
                    <strong>Version:</strong> {product.version} • <strong>Last Updated:</strong> {product.lastUpdated}
                  </p>
                </div>
              </div>

              {sections.map((section) => {
                const Icon = section.icon
                return (
                  <div key={section.title} id={section.title.toLowerCase().replace(/\s/g, '-')} className="scroll-mt-24">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-primary-50 dark:bg-primary-900/20 rounded-lg flex items-center justify-center text-primary">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h2 className="text-xl font-bold text-dark-900 dark:text-white">{section.title}</h2>
                    </div>
                    <div className="card p-6">
                      <p className="text-dark-600 dark:text-dark-400">{section.content}</p>
                    </div>
                  </div>
                )
              })}

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
            <Link href={`/products/${product.slug}`} className="inline-flex items-center text-primary hover:underline">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to {product.name}
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}