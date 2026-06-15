'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Send, CheckCircle, AlertCircle } from 'lucide-react'

export default function ContactFormGeneral() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    product: '',
    message: '',
    privacy: false
  })
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, type } = e.target
    const value = type === 'checkbox' ? (e.target as HTMLInputElement).checked : e.target.value
    setFormData(prev => ({
      ...prev,
      [id]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.privacy) {
      setStatus('error')
      setErrorMessage('You must agree to the Privacy Policy to submit the form.')
      return
    }
    setStatus('submitting')
    setErrorMessage('')

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: 'a8c1efbd-b3a7-4b49-bbbd-128f8b3b8050',
          name: formData.name,
          email: formData.email,
          subject: `exevolv.io Form: ${formData.subject}` + (formData.product ? ` (${formData.product})` : ''),
          message: formData.message,
          from_name: 'exevolv.io General Contact Form'
        })
      })

      const result = await response.json()
      if (result.success) {
        setStatus('success')
        setFormData({ name: '', email: '', subject: '', product: '', message: '', privacy: false })
      } else {
        setStatus('error')
        setErrorMessage(result.message || 'Something went wrong. Please try again.')
      }
    } catch (error) {
      setStatus('error')
      setErrorMessage('Failed to send message. Please check your internet connection.')
    }
  }

  return (
    <div className="card p-8">
      <h2 className="text-2xl font-bold text-dark-900 dark:text-white mb-6">
        Send us a Message
      </h2>

      {status === 'success' && (
        <div className="mb-6 p-4 rounded-xl bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 text-green-800 dark:text-green-300 flex items-start gap-3">
          <CheckCircle className="w-5 h-5 shrink-0 mt-0.5" />
          <div>
            <h4 className="font-semibold text-base">Message Sent Successfully!</h4>
            <p className="text-sm mt-0.5 opacity-90">Thank you for reaching out. The team will get back to you as soon as possible.</p>
          </div>
        </div>
      )}

      {status === 'error' && (
        <div className="mb-6 p-4 rounded-xl bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 text-red-800 dark:text-red-300 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
          <div>
            <h4 className="font-semibold text-base">Failed to Send Message</h4>
            <p className="text-sm mt-0.5 opacity-90">{errorMessage}</p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-2">
              Your Name *
            </label>
            <input
              type="text"
              id="name"
              required
              value={formData.name}
              onChange={handleChange}
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
              required
              value={formData.email}
              onChange={handleChange}
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
            required
            value={formData.subject}
            onChange={handleChange}
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
            value={formData.product}
            onChange={handleChange}
            className="input-field"
          >
            <option value="">Select a product (optional)</option>
            <option value="proxyconnectorpro">ProxyConnector Pro</option>
            <option value="uc-max">UC Max</option>
            <option value="quizmaster-ai">QuizMaster AI</option>
            <option value="pulser-pro">Pulser Pro</option>
            <option value="zeroadsblocker">ZeroAds</option>
            <option value="quizmaster-ai-android">QuizMaster AI App</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-2">
            Message *
          </label>
          <textarea
            id="message"
            required
            rows={6}
            value={formData.message}
            onChange={handleChange}
            className="input-field resize-none"
            placeholder="Tell us how we can help you..."
          />
        </div>

        <div className="flex items-start gap-3">
          <input
            type="checkbox"
            id="privacy"
            required
            checked={formData.privacy}
            onChange={handleChange}
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

        <button 
          type="submit" 
          disabled={status === 'submitting'}
          className="btn-primary w-full sm:w-auto flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          <Send className="w-5 h-5" />
          {status === 'submitting' ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
  )
}
