import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/ui/Breadcrumbs'
import { getProductBySlug } from '@/lib/products'
import { ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Terms of Service - Go Play Test',
  description: 'Terms of service for Go Play Test.',
}

export default function TermsPage() {
  const product = getProductBySlug('go-play-test')
  if (!product) return <div>Product not found</div>

  return (
    <>
      <section className="gradient-bg py-16 md:py-24">
        <div className="container-custom">
          <Breadcrumbs items={[{ label: 'Products', href: '/products' }, { label: product.name, href: `/products/${product.slug}` }, { label: 'Terms of Service' }]} />
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-primary-50 dark:bg-primary-900/20 rounded-xl flex items-center justify-center"></div>
              <div>
                <p className="text-sm text-dark-500">{product.name}</p>
                <h1 className="text-3xl md:text-4xl font-bold text-dark-900 dark:text-white">Terms of Service</h1>
              </div>
            </div>
            <p className="text-dark-600 dark:text-dark-400">Last updated: {product.lastUpdated}</p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white dark:bg-dark-950">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto prose dark:prose-invert prose-headings:font-bold prose-a:text-primary">
            <h2>Acceptance of Terms</h2>
            <p>By using {product.name}, you agree to these Terms of Service.</p>
            <h2>License</h2>
            <p>{product.name} is provided under the terms described in the repository license. See the GitHub source for details.</p>
            <h2>Beta Testing</h2>
            <p>Beta builds are provided for testing purposes. Testers should not share pre-release builds outside the beta group.</p>
            <h2>Contact</h2>
            <p>Contact us at <a href="mailto:privacy@exevolv.io">privacy@exevolv.io</a> for questions about these terms.</p>
          </div>

          <div className="max-w-3xl mx-auto mt-12">
            <Link href={`/products/${product.slug}`} className="inline-flex items-center text-primary hover:underline"><ArrowLeft className="w-4 h-4 mr-2" />Back to {product.name}</Link>
          </div>
        </div>
      </section>
    </>
  )
}
