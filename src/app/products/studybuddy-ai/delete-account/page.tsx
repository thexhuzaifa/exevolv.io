import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getProductBySlug } from '@/lib/products'
import { SITE_URL } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Delete Account for StudyBuddy AI',
  description: 'Account deletion and local data removal information for StudyBuddy AI.',
  alternates: {
    canonical: `${SITE_URL}/products/studybuddy-ai/delete-account`,
  },
}

export default function DeleteAccountPage() {
  const product = getProductBySlug('studybuddy-ai')

  if (!product) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <h1 className="text-3xl font-bold mb-4">Delete Account for {product.name}</h1>
      <p className="mb-6 text-gray-700 dark:text-gray-300">
        StudyBuddy AI does not require an account, login, or personal profile. Because no account is created, there is no cloud account to delete.
      </p>

      <div className="bg-gray-100 dark:bg-dark-900 p-6 rounded-lg">
        <p className="text-lg text-gray-800 dark:text-gray-200">
          If you want to remove your local saved questions or answers, delete them from inside the app or uninstall the app from your device.
        </p>
        <p className="mt-4 text-gray-700 dark:text-gray-300">
          For help removing local content, contact us at <a href="mailto:privacy@exevolv.io" className="text-blue-600 hover:underline">privacy@exevolv.io</a>.
        </p>
      </div>

      <p className="mt-6 text-sm text-gray-600 dark:text-gray-400">
        Since the app does not store personal accounts or profiles, deletion is limited to local device data.
      </p>

      <div className="mt-8">
        <Link href={`/products/${product.slug}`} className="text-primary hover:underline">
          Back to {product.name}
        </Link>
      </div>
    </div>
  )
}