import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { products, getProductBySlug } from '@/lib/products'
import { SITE_URL } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Terms of Service for VU Scholars',
  description: 'Terms of service for VU Scholars.',
  alternates: {
    canonical: `${SITE_URL}/products/vu-scholars/terms-of-service`,
  },
}

export default function TermsPage() {
  const product = getProductBySlug('vu-scholars')

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
        {product.name} is an offline educational reader for Virtual University handouts and textbooks. The app is designed to help students access public study materials locally on their own devices.
      </p>

      <h2>3. Content and Use</h2>
      <ul>
        <li>Use the app for lawful educational purposes only.</li>
        <li>Do not attempt to reverse engineer, modify, or redistribute the app without permission.</li>
        <li>Do not use the app to infringe copyrights or violate academic rules.</li>
      </ul>

      <h2>4. Content Sources</h2>
      <p>
        Study material in the app is gathered from publicly available Virtual University resources. VU Scholars is an independent, unofficial app and is not affiliated with the Virtual University of Pakistan.
      </p>

      <h2>5. Local Storage</h2>
      <p>
        Downloaded files are stored locally on your device. You are responsible for managing your own device storage and removing files when you no longer need them.
      </p>

      <h2>6. Disclaimer</h2>
      <p>
        The app is provided on an "as is" basis without warranties of any kind. We do not guarantee uninterrupted access, file availability, or absolute accuracy of every document source.
      </p>

      <h2>7. Changes to the App</h2>
      <p>
        We may update or change the app at any time to improve features, fix issues, or reflect new requirements.
      </p>

      <h2>8. Contact</h2>
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