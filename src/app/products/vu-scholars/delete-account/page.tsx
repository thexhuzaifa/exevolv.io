import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { products, getProductBySlug } from '@/lib/products'
import { SITE_URL } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Delete Account for VU Scholars',
  description: 'Account and data deletion information for VU Scholars.',
  alternates: {
    canonical: `${SITE_URL}/products/vu-scholars/delete-account`,
  },
}

export default function DeleteAccountPage() {
  const product = getProductBySlug('vu-scholars')

  if (!product) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <h1 className="text-3xl font-bold mb-4">Delete Account for {product.name}</h1>
      <p className="mb-6 text-gray-700 dark:text-gray-300">
        VU Scholars does not require an account, login, or personal profile. Because no account is created, there is no cloud account to delete.
      </p>

      <div className="bg-gray-100 dark:bg-dark-900 p-6 rounded-lg">
        <p className="text-lg text-gray-800 dark:text-gray-200">
          If you want to remove app data, simply delete the downloaded handouts or textbooks from your device storage, or uninstall the app.
        </p>
        <p className="mt-4 text-gray-700 dark:text-gray-300">
          If you need help removing a specific file, contact us at <a href="mailto:privacy@exevolv.io" className="text-blue-600 hover:underline">privacy@exevolv.io</a>.
        </p>
      </div>

      <p className="mt-6 text-sm text-gray-600 dark:text-gray-400">
        Since the app does not store personal accounts or profiles, deletion is limited to removing local files from your device.
      </p>

      <div className="mt-8">
        <Link href={`/products/${product.slug}`} className="text-primary hover:underline">
          Back to {product.name}
        </Link>
      </div>
    </div>
  )
}