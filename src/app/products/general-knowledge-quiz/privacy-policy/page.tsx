import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/ui/Breadcrumbs'
import { getProductBySlug } from '@/lib/products'
import { Shield, ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Privacy Policy - General Knowledge Quiz',
  description: 'Privacy Policy for General Knowledge Quiz.',
}

export default function PrivacyPolicyPage() {
  const product = getProductBySlug('general-knowledge-quiz')
  if (!product) return <div>Product not found</div>

  return (
    <>
      <section className="gradient-bg py-16 md:py-24">
        <div className="container-custom">
          <Breadcrumbs items={[{ label: 'Products', href: '/products' }, { label: product.name, href: `/products/${product.slug}` }, { label: 'Privacy Policy' }]} />
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-4"><div className="w-12 h-12 bg-primary-50 dark:bg-primary-900/20 rounded-xl flex items-center justify-center"><Shield className="w-6 h-6 text-primary" /></div><div><p className="text-sm text-dark-500">{product.name}</p><h1 className="text-3xl md:text-4xl font-bold text-dark-900 dark:text-white">Privacy Policy</h1></div></div>
            <p className="text-dark-600 dark:text-dark-400">Last updated: {product.lastUpdated}</p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white dark:bg-dark-950">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto prose dark:prose-invert prose-headings:font-bold prose-a:text-primary">
            <p>{product.name} respects your privacy. This app does not collect personal data. Internet permission is only used to fetch quiz questions.</p>
            <h2>Information We Collect</h2>
            <ul><li>Anonymous diagnostic data for crash reporting may be collected.</li><li>No personal information is collected without your explicit consent.</li></ul>
            <h2>Contact</h2>
            <p>Contact us at <a href="mailto:privacy@exevolv.io">privacy@exevolv.io</a> for privacy questions.</p>
          </div>
          <div className="max-w-3xl mx-auto mt-12"><Link href={`/products/${product.slug}`} className="inline-flex items-center text-primary hover:underline"><ArrowLeft className="w-4 h-4 mr-2" />Back to {product.name}</Link></div>
        </div>
      </section>
    </>
  )
}
