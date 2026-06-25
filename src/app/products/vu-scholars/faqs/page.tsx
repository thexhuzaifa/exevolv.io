import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Breadcrumbs from '@/components/ui/Breadcrumbs'
import FAQItem from '@/components/ui/FAQItem'
import { products, getProductBySlug } from '@/lib/products'
import { HelpCircle, ArrowLeft, MessageSquare } from 'lucide-react'
import { SITE_URL } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'FAQs for VU Scholars',
  description: 'Frequently asked questions about VU Scholars, the offline Virtual University study app.',
  alternates: {
    canonical: `${SITE_URL}/products/vu-scholars/faqs`,
  },
}

export default function ProductFAQsPage() {
  const product = getProductBySlug('vu-scholars')

  if (!product) {
    notFound()
  }

  const faqs = [
    {
      question: `What is ${product.name}?`,
      answer: 'VU Scholars is an offline Android app for students who want easy access to Virtual University handouts and textbooks.',
    },
    {
      question: 'Does the app work without internet?',
      answer: 'Yes. Once files are downloaded, you can read them offline at any time.',
    },
    {
      question: 'Do I need an account to use it?',
      answer: 'No account or login is required. You can use the app immediately after installation.',
    },
    {
      question: 'Does VU Scholars collect personal data?',
      answer: 'No. The app does not collect, store, or share personal information and does not include tracking or ads.',
    },
    {
      question: 'Where does the content come from?',
      answer: 'The educational material is sourced from publicly available official Virtual University platforms such as vu.edu.pk and ocw.vu.edu.pk.',
    },
    {
      question: 'How do I report a problem?',
      answer: 'Use the Contact page on the website if you notice a broken download, missing file, or another issue.',
    },
    {
      question: 'Can I delete downloaded files?',
      answer: 'Yes. You can remove downloaded materials any time from inside the app or through your device file manager.',
    },
    {
      question: 'Is the app official?',
      answer: 'No. VU Scholars is an independent, unofficial student app and is not affiliated with the Virtual University of Pakistan.',
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
              { label: 'FAQs' },
            ]}
          />

          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-primary-50 dark:bg-primary-900/20 rounded-xl flex items-center justify-center">
                <HelpCircle className="w-6 h-6 text-primary" />
              </div>
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
              <div className="w-12 h-12 bg-primary-50 dark:bg-primary-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold text-dark-900 dark:text-white mb-2">Still have questions?</h3>
              <p className="text-dark-600 dark:text-dark-400 mb-4 text-sm">Can&apos;t find what you&apos;re looking for? Our support team is here to help.</p>
              <Link href="/contact" className="btn-primary text-sm py-2 px-4">
                Contact Support
              </Link>
            </div>

            <div className="mt-8">
              <Link href={`/products/${product.slug}`} className="inline-flex items-center text-primary hover:underline">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to {product.name}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}