import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/ui/Breadcrumbs'
import { Mail, MapPin, MessageSquare, Send, Clock, ExternalLink } from 'lucide-react'

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
    value: 'hello@exevolv.io',
    href: 'mailto:hello@exevolv.io',
  },
  {
    icon: <MessageSquare className="w-6 h-6" />,
    title: 'Support',
    description: 'Product-specific help',
    value: 'support@exevolv.io',
    href: 'mailto:support@exevolv.io',
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

              {/* Social Links */}
              <div className="card p-6">
                <h3 className="font-semibold text-dark-900 dark:text-white mb-4">
                  Follow Us
                </h3>
                <div className="flex gap-3">
                  <a
                    href="https://twitter.com/exevolv_io"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-dark-100 dark:bg-dark-800 rounded-lg flex items-center justify-center text-dark-600 hover:text-primary hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                  <a
                    href="https://github.com/exevolv-io"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-dark-100 dark:bg-dark-800 rounded-lg flex items-center justify-center text-dark-600 hover:text-primary hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                  <a
                    href="https://linkedin.com/company/exevolv-io"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-dark-100 dark:bg-dark-800 rounded-lg flex items-center justify-center text-dark-600 hover:text-primary hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="card p-8">
                <h2 className="text-2xl font-bold text-dark-900 dark:text-white mb-6">
                  Send us a Message
                </h2>
                
                <form action="https://api.web3forms.com/submit" method="POST" className="space-y-6">
                  <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY" />
                  <input type="hidden" name="subject" value="New Contact Form Submission - exevolv.io" />
                  <input type="hidden" name="from_name" value="exevolv.io Contact Form" />
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="input-field"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="input-field"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      className="input-field"
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="support">Product Support</option>
                      <option value="bug">Bug Report</option>
                      <option value="feature">Feature Request</option>
                      <option value="partnership">Partnership</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="product" className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-2">
                      Related Product
                    </label>
                    <select
                      id="product"
                      name="product"
                      className="input-field"
                    >
                      <option value="">Select a product (optional)</option>
                      <option value="proxyconnector-pro">ProxyConnector Pro</option>
                      <option value="quizmaster-ai">QuizMaster AI</option>
                      <option value="taleemspot-notes">TaleemSpot Notes</option>
                      <option value="pulser-pro">Pulser Pro</option>
                      <option value="zeroadsblocker">ZeroAds</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      className="input-field resize-none"
                      placeholder="Tell us how we can help you..."
                    />
                  </div>

                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="privacy"
                      name="privacy"
                      required
                      className="mt-1 w-4 h-4 text-primary border-dark-300 rounded focus:ring-primary"
                    />
                    <label htmlFor="privacy" className="text-sm text-dark-600 dark:text-dark-400">
                      I agree to the{' '}
                      <Link href="/privacy-policy" className="text-primary hover:underline">
                        Privacy Policy
                      </Link>{' '}
                      and consent to being contacted regarding my inquiry.
                    </label>
                  </div>

                  <button type="submit" className="btn-primary w-full sm:w-auto">
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </button>
                </form>
              </div>
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
