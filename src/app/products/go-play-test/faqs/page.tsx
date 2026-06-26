import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/ui/Breadcrumbs'
import FAQItem from '@/components/ui/FAQItem'
import { getProductBySlug } from '@/lib/products'
import { HelpCircle, ArrowLeft, MessageSquare } from 'lucide-react'

export const metadata: Metadata = {
  title: 'FAQs - Go Play Test',
  description: 'Frequently asked questions about Go Play Test.',
}

export default function ProductFAQsPage() {
  const product = getProductBySlug('go-play-test')
  if (!product) return <div>Product not found</div>

  const faqs = [
    { question: `What is ${product.name}?`, answer: product.description },
    { question: `Is ${product.name} free to use?`, answer: `Yes! ${product.name} is free to download and use for beta testing.` },
    { question: `How do I join the beta?`, answer: `Join the Google Group (${product.groupUrl}) or visit the Play Store page to opt into the beta.` },
    { question: `How do I report issues?`, answer: 'Submit feedback via the in-app flow or open an issue on GitHub.' },
    { question: `What devices are supported?`, answer: 'Android devices running Android 7.0 and up.' },
  ]

  return (
    <>
      <section className="gradient-bg py-16 md:py-24">
        <div className="container-custom">
          <Breadcrumbs items={[{ label: 'Products', href: '/products' }, { label: product.name, href: `/products/${product.slug}` }, { label: 'FAQs' }]} />
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-primary-50 dark:bg-primary-900/20 rounded-xl flex items-center justify-center"><HelpCircle className="w-6 h-6 text-primary" /></div>
              <div>
                <p className="text-sm text-dark-500">{product.name}</p>
                <h1 className="text-3xl md:text-4xl font-bold text-dark-900 dark:text-white">Frequently Asked Questions</h1>
              </div>
            </div>
            <p className="text-dark-600 dark:text-dark-400">Find answers to common questions about {product.name}.</p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white dark:bg-dark-950">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="card p-6 md:p-8">
              <div className="divide-y divide-dark-100 dark:divide-dark-800">
                {faqs.map((faq, index) => (
                  <FAQItem key={index} {...faq} />
                ))}
              </div>
            </div>

            <div className="mt-8 p-6 bg-dark-50 dark:bg-dark-900 rounded-2xl text-center">
              <div className="w-12 h-12 bg-primary-50 dark:bg-primary-900/20 rounded-full flex items-center justify-center mx-auto mb-4"><MessageSquare className="w-6 h-6 text-primary" /></div>
              <h3 className="font-bold text-dark-900 dark:text-white mb-2">Still have questions?</h3>
              <p className="text-dark-600 dark:text-dark-400 mb-4 text-sm">Can't find what you're looking for? Our support team is here to help.</p>
              <Link href="/contact" className="btn-primary text-sm py-2 px-4">Contact Support</Link>
            </div>

            <div className="mt-8"><Link href={`/products/${product.slug}`} className="inline-flex items-center text-primary hover:underline"><ArrowLeft className="w-4 h-4 mr-2" />Back to {product.name}</Link></div>
          </div>
        </div>
      </section>
    </>
  )
}
