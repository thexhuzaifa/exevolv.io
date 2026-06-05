import { Metadata } from 'next'
import { SITE_URL } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Delete Account for UC Max',
  description: 'Request account deletion for the UC Max application.',
  alternates: {
    canonical: `${SITE_URL}/products/uc-max/delete-account`,
  },
}

export default function DeleteAccountPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Request Account Deletion</h1>
      <p className="mb-6">
        To request the deletion of your UC Max account and all associated data, please send an email to our support team.
      </p>
      <div className="bg-gray-100 p-6 rounded-lg">
        <p className="text-lg">
          Please send an email to <a href="mailto:support@freeuc.app" className="text-blue-600 hover:underline">support@freeuc.app</a> with the subject line "Account Deletion Request".
        </p>
        <p className="mt-4">
          In the body of the email, please include the email address associated with your UC Max account to help us identify your account for deletion.
        </p>
      </div>
       <p className="mt-6 text-sm text-gray-600">
        Please note that account deletion is permanent and cannot be undone. All your data, including your points and history, will be permanently removed.
      </p>
    </div>
  )
}
