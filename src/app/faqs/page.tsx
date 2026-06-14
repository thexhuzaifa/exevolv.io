'use client'

import { useState } from 'react'
import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/ui/Breadcrumbs'
import { Search, ChevronDown, ChevronUp, MessageSquare } from 'lucide-react'

const faqCategories = [
  {
    id: 'general',
    name: 'General',
    faqs: [
      {
        question: 'What is exevolv.io?',
        answer: 'exevolv.io is a company that creates innovative browser extensions and applications designed to enhance your digital experience. We focus on privacy-focused, user-friendly tools that solve real problems.'
      },
      {
        question: 'Are your products free to use?',
        answer: 'Yes! All our browser extensions and apps are free to use. Some products may offer premium features in the future, but core functionality will always remain free.'
      },
      {
        question: 'How do I get support?',
        answer: 'You can reach our support team via email at support@exevolv.io or through our contact page. We typically respond within 24-48 hours.'
      },
      {
        question: 'Do you collect user data?',
        answer: 'We take privacy seriously. Our products are designed with privacy-first principles. We don\'t collect or sell personal data. Check individual product privacy policies for specifics.'
      },
    ]
  },
  {
    id: 'ip-filter-exchange',
    name: 'ProxyConnector Pro',
    faqs: [
      {
        question: 'What is ProxyConnector Pro?',
        answer: 'ProxyConnector Pro is a Chrome extension for secure proxy management. It helps you connect to proxies, prevents WebRTC leaks, and automatically matches timezones based on your proxy location.'
      },
      {
        question: 'How do I add a proxy?',
        answer: 'After installing the extension, click the extension icon, go to settings, and add your proxy details including host, port, username, and password. The extension supports HTTP, HTTPS, and SOCKS proxies.'
      },
      {
        question: 'What is WebRTC protection?',
        answer: 'WebRTC is a technology that can expose your real IP address even when using a proxy or VPN. ProxyConnector Pro blocks WebRTC leaks to ensure your privacy is protected.'
      },
      {
        question: 'Does the extension work with all websites?',
        answer: 'Yes, once connected, all your browser traffic goes through the configured proxy. Some websites may block known proxy IPs, but that\'s a limitation of the proxy server, not the extension.'
      },
    ]
  },
  {
    id: 'quizmaster-ai',
    name: 'QuizMaster AI',
    faqs: [
      {
        question: 'What is QuizMaster AI?',
        answer: 'QuizMaster AI is a Chrome extension that helps students solve quizzes and multiple-choice questions. It uses AI-powered OCR to scan questions from your screen and provides accurate answers with explanations.'
      },
      {
        question: 'How does the scan feature work?',
        answer: 'Click the extension icon and press "Scan and Solve". The extension captures your screen, extracts questions using OCR technology, and sends them to our AI for analysis. You\'ll receive answers within seconds.'
      },
      {
        question: 'Is it accurate?',
        answer: 'QuizMaster AI uses advanced language models to provide accurate answers. However, AI isn\'t perfect - we recommend verifying answers for important exams and using it as a learning tool.'
      },
      {
        question: 'Is my data secure?',
        answer: 'Yes, all data is transmitted through encrypted connections. We don\'t store your scanned content on our servers. Privacy is a core principle of our design.'
      },
    ]
  },
  {
    id: 'taleemspot-notes',
    name: 'TaleemSpot Notes',
    faqs: [
      {
        question: 'What is TaleemSpot Notes?',
        answer: 'TaleemSpot Notes is an Android app for Pakistani students preparing for Matric and Inter exams. It provides past papers, notes, MCQ tests, and study resources for all Punjab BISE boards.'
      },
      {
        question: 'Which boards are supported?',
        answer: 'We support all Punjab BISE boards including Lahore, Gujranwala, Rawalpindi, Faisalabad, Sargodha, Sahiwal, Multan, Bahawalpur, DG Khan, Federal Board (FBISE), and AJK Board.'
      },
      {
        question: 'Can I use it offline?',
        answer: 'Yes! TaleemSpot Notes has an offline mode. Download the content you need while connected to the internet, and you can access it anytime without a connection.'
      },
      {
        question: 'Is the app free?',
        answer: 'Yes, the app is completely free with access to all study materials including past papers, notes, MCQ tests, and more.'
      },
    ]
  },
  {
    id: 'pulser-pro',
    name: 'Pulser Pro',
    faqs: [
      {
        question: 'What is Pulser Pro?',
        answer: 'Pulser Pro is a Chrome extension that boosts audio volume up to 600% on any website. It works with YouTube, Netflix, Spotify, Google Meet, Zoom, and all other websites.'
      },
      {
        question: 'Does Pulser Pro affect audio quality?',
        answer: 'Pulser Pro uses real-time audio processing with zero latency. It amplifies audio cleanly without distortion at moderate boost levels. At very high boost levels, some clipping may occur depending on the source audio quality.'
      },
      {
        question: 'Can I control volume per tab?',
        answer: 'Yes! Pulser Pro allows you to independently control volume levels for each open tab. This means you can boost a lecture video while keeping other tabs at normal volume.'
      },
      {
        question: 'Does Pulser Pro collect any data?',
        answer: 'No. All audio processing happens locally on your device. Pulser Pro does not collect, transmit, or store any data whatsoever.'
      },
    ]
  },
  {
    id: 'zeroadsblocker',
    name: 'ZeroAds',
    faqs: [
      {
        question: 'What is ZeroAds?',
        answer: 'ZeroAds is a lightweight ad blocker Chrome extension that blocks video ads, display ads, pop-ups, tracking scripts, and overlay notifications across all websites — with zero configuration needed.'
      },
      {
        question: 'How is ZeroAds different from other ad blockers?',
        answer: 'ZeroAds is ultra-lightweight at just 63KB, making it one of the smallest ad blockers available. Despite its small size, it effectively blocks ads across all websites including YouTube, without slowing down your browser.'
      },
      {
        question: 'Will ZeroAds break any websites?',
        answer: 'ZeroAds is designed to block ads without breaking website functionality. In rare cases, some sites may detect ad blocking and ask you to disable it. You can whitelist specific sites if needed.'
      },
      {
        question: 'Does ZeroAds block YouTube ads?',
        answer: 'Yes, ZeroAds blocks video advertisements on YouTube and other streaming platforms, giving you an uninterrupted viewing experience.'
      },
    ]
  },
]

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-dark-100 dark:border-dark-800 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-4 flex items-center justify-between text-left"
      >
        <span className="font-medium text-dark-900 dark:text-white pr-4">
          {question}
        </span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-primary flex-shrink-0" />
        ) : (
          <ChevronDown className="w-5 h-5 text-dark-400 flex-shrink-0" />
        )}
      </button>
      {isOpen && (
        <div className="pb-4 text-dark-600 dark:text-dark-400 animate-fade-in">
          {answer}
        </div>
      )}
    </div>
  )
}

export default function FAQsPage() {
  const [activeCategory, setActiveCategory] = useState('general')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredFaqs = faqCategories.map(category => ({
    ...category,
    faqs: category.faqs.filter(faq => 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.faqs.length > 0)

  const currentCategory = filteredFaqs.find(c => c.id === activeCategory) || filteredFaqs[0]

  return (
    <>
      {/* Hero Section */}
      <section className="relative gradient-bg py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        </div>
        <div className="container-custom relative">
          <Breadcrumbs items={[{ label: 'FAQs' }]} />
          
          <div className="max-w-3xl">
            <span className="badge-primary mb-4 inline-block">Help Center</span>
            <h1 className="text-4xl md:text-5xl font-bold text-dark-900 dark:text-white mb-4 leading-[1.1]">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-dark-600 dark:text-dark-400 mb-8 leading-relaxed">
              Find answers to common questions about our products and services.
            </p>
            
            {/* Search */}
            <div className="relative max-w-xl">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-dark-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search FAQs..."
                className="w-full pl-12 pr-4 py-4 bg-white/80 dark:bg-dark-900/80 backdrop-blur-sm border border-dark-200 dark:border-dark-700 rounded-xl text-dark-900 dark:text-white placeholder:text-dark-400 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="section-padding bg-white dark:bg-dark-950">
        <div className="container-custom">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Category Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <h3 className="font-semibold text-dark-900 dark:text-white mb-4">
                  Categories
                </h3>
                <nav className="space-y-1">
                  {faqCategories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setActiveCategory(category.id)}
                      className={`w-full text-left px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                        activeCategory === category.id
                          ? 'bg-primary text-white'
                          : 'text-dark-600 dark:text-dark-400 hover:bg-dark-100 dark:hover:bg-dark-800'
                      }`}
                    >
                      {category.name}
                    </button>
                  ))}
                </nav>
              </div>
            </div>

            {/* FAQ List */}
            <div className="lg:col-span-3">
              {currentCategory && (
                <div className="card p-6">
                  <h2 className="text-xl font-bold text-dark-900 dark:text-white mb-6">
                    {currentCategory.name}
                  </h2>
                  <div className="divide-y divide-dark-100 dark:divide-dark-800">
                    {currentCategory.faqs.map((faq, index) => (
                      <FAQItem key={index} {...faq} />
                    ))}
                  </div>
                </div>
              )}

              {filteredFaqs.length === 0 && (
                <div className="card p-8 text-center">
                  <p className="text-dark-600 dark:text-dark-400">
                    No FAQs found matching your search. Try different keywords.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-12 bg-dark-50 dark:bg-dark-900">
        <div className="container-custom text-center">
          <div className="w-16 h-16 bg-primary-50 dark:bg-primary-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <MessageSquare className="w-8 h-8 text-primary" />
          </div>
          <h3 className="text-xl font-bold text-dark-900 dark:text-white mb-2">
            Still have questions?
          </h3>
          <p className="text-dark-600 dark:text-dark-400 mb-6">
            Can't find the answer you're looking for? Our support team is here to help.
          </p>
          <Link href="/contact" className="btn-primary">
            Contact Support
          </Link>
        </div>
      </section>
    </>
  )
}
