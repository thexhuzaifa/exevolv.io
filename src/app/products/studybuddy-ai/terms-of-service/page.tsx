import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getProductBySlug } from '@/lib/products'
import { SITE_URL } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Terms of Service for StudyBuddy AI',
  description: 'Terms of service for StudyBuddy AI.',
  alternates: {
    canonical: `${SITE_URL}/products/studybuddy-ai/terms-of-service`,
  },
}

export default function TermsPage() {
  const product = getProductBySlug('studybuddy-ai')

  if (!product) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl prose lg:prose-xl dark:prose-invert">
      <h1>Terms of Service for {product.name}</h1>
      <p>Last Updated: {product.lastUpdated}</p>

      <h2>1. Acceptance of Terms</h2>
      <p>
        By downloading or using {product.name}, you agree to these Terms of Service. If you do not agree, please do not use the app.
      </p>

      <h2>2. Description of Service</h2>
      <p>
        {product.name} is a homework helper app that generates explanations and study support using AI. The app is intended to help students learn and review material more easily.
      </p>

      <h2>3. Acceptable Use</h2>
      <ul>
        <li>Use the app for lawful educational purposes only.</li>
        <li>Do not attempt to reverse engineer or redistribute the app without permission.</li>
        <li>Do not use the app in a way that violates school, exam, or academic integrity rules.</li>
      </ul>

      <h2>4. AI Output</h2>
      <p>
        AI responses may contain mistakes. You are responsible for reviewing and verifying important information before using it in assignments, exams, or other critical situations.
      </p>

      <h2>5. Local Storage</h2>
      <p>
        Any saved questions or answers are stored locally on your device. You are responsible for managing or deleting that local content.
      </p>

      <h2>6. Disclaimer</h2>
      <p>
        The app is provided on an "as is" basis without warranties of any kind. We do not guarantee uninterrupted access or completely accurate results.
      </p>

      <h2>7. Contact</h2>
      <p>
        For questions about these terms, contact <a href="mailto:legal@exevolv.io">legal@exevolv.io</a>.
      </p>

      <div className="mt-8 not-prose">
        <Link href={`/products/${product.slug}`} className="text-primary hover:underline">
          Back to {product.name}
        </Link>
      </div>
    </div>
  )
}