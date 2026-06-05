import { Metadata } from 'next'
import { products } from '@/lib/products'
import { notFound } from 'next/navigation'
import { SITE_URL } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Privacy Policy for UC Max',
  description: 'Privacy Policy for the UC Max application.',
  alternates: {
    canonical: `${SITE_URL}/products/uc-max/privacy-policy`,
  },
}

export default function PrivacyPolicyPage() {
  const product = products.find(p => p.slug === 'uc-max')
  if (!product) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy for {product.name}</h1>
      <p className="text-gray-600 mb-4">Last Updated: {product.lastUpdated}</p>

      <div className="prose lg:prose-xl">
        <h2 className="text-2xl font-semibold mt-6 mb-2">1. Introduction</h2>
        <p>
          Welcome to {product.name}. We are committed to protecting your privacy. This Privacy Policy explains what information we collect, how we use it, and your rights in relation to it.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">2. Information We Collect</h2>
        <p>We may collect the following types of information:</p>
        <ul>
          <li><strong>Personal Data:</strong> When you log in using Google, we collect your email address, name, and profile photo.</li>
          <li><strong>Device Data:</strong> We collect your Device ID and IP address, which is necessary for serving ads through Google AdMob.</li>
          <li><strong>App Activity:</strong> We track your points earned, withdrawal history, and task completion logs to manage your account.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-2">3. How We Use Information</h2>
        <p>Your information is used for the following purposes:</p>
        <ul>
          <li>To create and manage your user account and track your points (XP).</li>
          <li>To process your UC withdrawal requests.</li>
          <li>For security purposes, including preventing fraud and multiple claims.</li>
          <li>To display personalized advertisements through Google AdMob.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-2">4. Third-Party Services</h2>
        <p>We use the following third-party services:</p>
        <ul>
          <li><strong>Google Identity / Credential Manager:</strong> For user authentication.</li>
          <li><strong>Supabase:</strong> To securely store your data.</li>
          <li><strong>Google AdMob:</strong> For serving advertisements.</li>
        </ul>
        <p>Please note that these services have their own privacy policies, and by using our app, you agree to their terms as well.</p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">5. Data Retention & Deletion</h2>
        <p>
          We retain your data as long as your account is active. You have the right to request the deletion of your account and associated data at any time. You can do this through the "Delete Account" option within the app or by contacting us.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">6. Children's Privacy</h2>
        <p>
          Our app is a gaming rewards application and is not intended for children under the age of 13 (or the equivalent minimum age in your jurisdiction). We do not knowingly collect personal information from children.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">7. Security</h2>
        <p>
          We use industry-standard encryption (such as SSL used by Supabase) to protect your data from unauthorized access.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">8. Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, you can contact us at: <a href="mailto:support@freeuc.app">support@freeuc.app</a>
        </p>
      </div>
    </div>
  )
}
