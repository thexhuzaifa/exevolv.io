import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/ui/Breadcrumbs'
import { CreditCard } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Refund Policy',
  description: 'Refund policy for exevolv.io. Learn about our refund and cancellation policies for paid products and services.',
}

export default function RefundPolicyPage() {
  return (
    <>
      <section className="gradient-bg py-16 md:py-24">
        <div className="container-custom">
          <Breadcrumbs items={[{ label: 'Refund Policy' }]} />
          
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-primary-50 dark:bg-primary-900/20 rounded-xl flex items-center justify-center">
                <CreditCard className="w-6 h-6 text-primary" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-dark-900 dark:text-white">
                Refund Policy
              </h1>
            </div>
            <p className="text-dark-600 dark:text-dark-400">
              Last updated: February 1, 2026
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white dark:bg-dark-950">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto prose dark:prose-invert prose-headings:font-bold prose-a:text-primary">
            <h2>Free Products</h2>
            <p>
              Currently, all exevolv.io products are free to use. This includes:
            </p>
            <ul>
              <li>ProxyConnector Pro browser extension</li>
              <li>QuizMaster AI browser extension</li>
              <li>TaleemSpot Notes mobile app</li>
            </ul>
            <p>
              Since these products are free, no refunds are applicable.
            </p>

            <h2>Future Paid Products</h2>
            <p>
              If we introduce paid products or premium features in the future, the following 
              refund policy will apply:
            </p>

            <h3>Subscription Services</h3>
            <p>
              For subscription-based products:
            </p>
            <ul>
              <li><strong>7-Day Free Trial:</strong> Cancel anytime during the trial period without charge</li>
              <li><strong>Monthly Subscriptions:</strong> Cancel anytime; access continues until the end of the billing period</li>
              <li><strong>Annual Subscriptions:</strong> Full refund within 14 days of purchase if you're not satisfied</li>
            </ul>

            <h3>One-Time Purchases</h3>
            <p>
              For one-time purchase products:
            </p>
            <ul>
              <li>30-day money-back guarantee</li>
              <li>No questions asked for refund requests within this period</li>
              <li>Refunds processed within 5-10 business days</li>
            </ul>

            <h2>How to Request a Refund</h2>
            <p>
              To request a refund, please contact us with:
            </p>
            <ul>
              <li>Your email address used for purchase</li>
              <li>Order/transaction ID</li>
              <li>Product name</li>
              <li>Reason for refund (optional but helpful)</li>
            </ul>
            <p>
              Send your refund request to: <a href="mailto:billing@exevolv.io">billing@exevolv.io</a>
            </p>

            <h2>Non-Refundable Items</h2>
            <p>
              The following are not eligible for refunds:
            </p>
            <ul>
              <li>Products purchased more than 30 days ago (for one-time purchases)</li>
              <li>Products that have been significantly used or consumed</li>
              <li>Custom development or consulting services</li>
              <li>Donations or voluntary tips</li>
            </ul>

            <h2>App Store Purchases</h2>
            <p>
              If you purchased through the Google Play Store or App Store:
            </p>
            <ul>
              <li>Refunds are handled by the respective platform</li>
              <li>Please contact Google Play or Apple for refund requests</li>
              <li>Their refund policies will apply</li>
            </ul>

            <h2>Chargebacks</h2>
            <p>
              We encourage you to contact us before initiating a chargeback with your bank or 
              credit card company. We're happy to resolve any issues directly and can often 
              provide a faster resolution.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have questions about our refund policy, please contact us:
            </p>
            <ul>
              <li>Email: <a href="mailto:billing@exevolv.io">billing@exevolv.io</a></li>
              <li>Website: <Link href="/contact">exevolv.io/contact</Link></li>
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}
