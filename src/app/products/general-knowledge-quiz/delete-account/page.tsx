import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/ui/Breadcrumbs'
import { getProductBySlug } from '@/lib/products'
import { Trash2, ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Delete Account - General Knowledge Quiz',
  description: 'Request account deletion for General Knowledge Quiz.',
}

export default function DeleteAccountPage() {
  const product = getProductBySlug('general-knowledge-quiz')
  if (!product) return <div>Product not found</div>

  return (
    <>
      <section className="gradient-bg py-16 md:py-24">
        <div className="container-custom">
          <Breadcrumbs items={[{ label: 'Products', href: '/products' }, { label: product.name, href: `/products/${product.slug}` }, { label: 'Delete Account' }]} />
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-4"><div className="w-12 h-12 bg-red-50 dark:bg-red-900/20 rounded-xl flex items-center justify-center"><Trash2 className="w-6 h-6 text-red-500" /></div><div><p className="text-sm text-dark-500">{product.name}</p><h1 className="text-3xl md:text-4xl font-bold text-dark-900 dark:text-white">Request Account Deletion</h1></div></div>
            <p className="text-dark-600 dark:text-dark-400">Submit a request to permanently delete your account and associated data.</p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white dark:bg-dark-950">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <div className="bg-dark-50 dark:bg-dark-900 p-8 rounded-2xl border border-dark-100 dark:border-dark-800">
              <h2 className="text-2xl font-bold mb-6 text-dark-900 dark:text-white">Delete Account Request</h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-2">Email Address</label>
                  <input type="email" id="email" required className="w-full px-4 py-3 rounded-xl border border-dark-200 dark:border-dark-700 bg-white dark:bg-dark-950 focus:outline-none focus:ring-2 focus:ring-red-500" placeholder="Enter your registered email address" />
                </div>
                <div>
                  <label htmlFor="reason" className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-2">Reason for Deletion (Optional)</label>
                  <textarea id="reason" rows={4} className="w-full px-4 py-3 rounded-xl border border-dark-200 dark:border-dark-700 bg-white dark:bg-dark-950 focus:outline-none focus:ring-2 focus:ring-red-500" placeholder="Please let us know why you are leaving..."></textarea>
                </div>
                <button type="submit" className="w-full px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-medium rounded-xl transition-colors">Submit Request</button>
              </form>
            </div>
            <div className="mt-12"><Link href={`/products/${product.slug}`} className="inline-flex items-center text-primary hover:underline"><ArrowLeft className="w-4 h-4 mr-2" />Back to {product.name}</Link></div>
          </div>
        </div>
      </section>
    </>
  )
}
