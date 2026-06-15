import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/ui/Breadcrumbs'
import { Mail, MapPin, Clock } from 'lucide-react'
import ContactFormGeneral from '@/components/ui/ContactFormGeneral'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with the exevolv.io team. We\'d love to hear from you about our products, partnerships, or any questions.',
  openGraph: {
    title: 'Contact Us - exevolv.io',
    description: 'Get in touch with the exevolv.io team.',
  },
}

const contactMethods = [
  {
    icon: <Mail className="w-6 h-6" />,
    title: 'Email',
    description: 'Send us an email anytime',
    value: 'huzaifa@exevolv.io',
    href: 'mailto:huzaifa@exevolv.io',
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    title: 'Location',
    description: 'Based in',
    value: 'Faisalabad, Pakistan',
    href: null,
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: 'Response Time',
    description: 'We typically respond within',
    value: '24-48 hours',
    href: null,
  },
]

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative gradient-bg py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        </div>
        <div className="container-custom relative">
          <Breadcrumbs items={[{ label: 'Contact' }]} />
          
          <div className="max-w-3xl">
            <span className="badge-primary mb-4 inline-block">Reach Out</span>
            <h1 className="text-4xl md:text-5xl font-bold text-dark-900 dark:text-white mb-4 leading-[1.1]">
              Get in Touch
            </h1>
            <p className="text-lg text-dark-600 dark:text-dark-400">
              Have a question, feedback, or partnership inquiry? We'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-white dark:bg-dark-950">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Methods */}
            <div className="lg:col-span-1 space-y-6">
              <h2 className="text-2xl font-bold text-dark-900 dark:text-white mb-6">
                Contact Information
              </h2>
              
              {contactMethods.map((method) => (
                <div key={method.title} className="card p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary-50 dark:bg-primary-900/20 rounded-xl flex items-center justify-center text-primary flex-shrink-0">
                      {method.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-dark-900 dark:text-white mb-1">
                        {method.title}
                      </h3>
                      <p className="text-sm text-dark-500 mb-2">
                        {method.description}
                      </p>
                      {method.href ? (
                        <a 
                          href={method.href} 
                          className="text-primary hover:underline font-medium"
                        >
                          {method.value}
                        </a>
                      ) : (
                        <span className="font-medium text-dark-900 dark:text-white">
                          {method.value}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}

            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <ContactFormGeneral />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Link */}
      <section className="py-12 bg-dark-50 dark:bg-dark-900">
        <div className="container-custom text-center">
          <h3 className="text-xl font-bold text-dark-900 dark:text-white mb-2">
            Looking for quick answers?
          </h3>
          <p className="text-dark-600 dark:text-dark-400 mb-4">
            Check out our frequently asked questions for instant help.
          </p>
          <Link href="/faqs" className="btn-outline">
            View FAQs
          </Link>
        </div>
      </section>
    </>
  )
}
