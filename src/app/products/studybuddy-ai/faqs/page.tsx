import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Breadcrumbs from '@/components/ui/Breadcrumbs'
import FAQItem from '@/components/ui/FAQItem'
import { getProductBySlug } from '@/lib/products'
import { HelpCircle, ArrowLeft, MessageSquare } from 'lucide-react'
import { SITE_URL } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'FAQs for StudyBuddy AI',
  description: 'Frequently asked questions about StudyBuddy AI, the homework helper app.',
  alternates: {
    canonical: `${SITE_URL}/products/studybuddy-ai/faqs`,
  },
}

export default function ProductFAQsPage() {
  const product = getProductBySlug('studybuddy-ai')

  if (!product) {
    notFound()
  }

  const faqs = [
    {
      question: `What is ${product.name}?`,
      answer: 'StudyBuddy AI is a homework helper app that gives step-by-step AI explanations for student questions.',
    },
    {
      question: 'Do I need an account?',
      answer: 'No. The app works without sign-up, login, or creating a profile.',
    },
    {
      question: 'Does the app show ads?',
      answer: 'No. StudyBuddy AI is designed to be distraction-free and contains no advertisements.',
    },
    {
      question: 'Does it save my questions?',
      answer: 'If you choose to save questions and answers, they are stored locally on your device for offline access.',
    },
    {
      question: 'Is my question data shared?',
      answer: 'Question text is processed only to generate an answer and is not permanently stored on our servers.',
    },
    {
      question: 'Can children use the app?',
      answer: 'Yes. The app is intended to be safe for students of all ages, including children in middle and high school.',
    },
    {
      question: 'What if the answer is not correct?',
      answer: 'AI output should always be verified. The app provides help, but you should confirm important facts before submitting homework or exams.',
    },
    {
      question: 'How do I get support?',
      answer: 'Use the Contact page on the website if you need help or want to report a problem.',
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