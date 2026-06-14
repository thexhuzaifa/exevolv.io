import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/ui/Breadcrumbs'
import { FileText } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of service for exevolv.io. Read our terms and conditions for using our website and products.',
}

export default function TermsOfServicePage() {
  return (
    <>
      <section className="gradient-bg py-16 md:py-24">
        <div className="container-custom">
          <Breadcrumbs items={[{ label: 'Terms of Service' }]} />
          
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-primary-50 dark:bg-primary-900/20 rounded-xl flex items-center justify-center">
                <FileText className="w-6 h-6 text-primary" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-dark-900 dark:text-white">
                Terms of Service
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
            <h2>Acceptance of Terms</h2>
            <p>
              By accessing or using exevolv.io website and any of our products or services, you agree 
              to be bound by these Terms of Service. If you do not agree to these terms, please do not 
              use our services.
            </p>

            <h2>Description of Services</h2>
            <p>
              exevolv.io provides browser extensions, mobile applications, and related services. Our 
              current products include:
            </p>
            <ul>
              <li>ProxyConnector Pro - Proxy management extension</li>
              <li>QuizMaster AI - AI-powered quiz solving extension</li>
              <li>TaleemSpot Notes - Educational study app</li>
            </ul>
            <p>
              We reserve the right to modify, suspend, or discontinue any part of our services at any time.
            </p>

            <h2>User Accounts</h2>
            <p>
              Some features may require account creation. You are responsible for:
            </p>
            <ul>
              <li>Providing accurate information</li>
              <li>Maintaining the security of your account</li>
              <li>All activities that occur under your account</li>
              <li>Notifying us of any unauthorized access</li>
            </ul>

            <h2>Acceptable Use</h2>
            <p>You agree not to:</p>
            <ul>
              <li>Use our services for any illegal purpose</li>
              <li>Violate any applicable laws or regulations</li>
              <li>Infringe on intellectual property rights</li>
              <li>Transmit malware or harmful code</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Interfere with the proper working of our services</li>
              <li>Use our products for academic dishonesty</li>
              <li>Resell or redistribute our products without permission</li>
            </ul>

            <h2>Intellectual Property</h2>
            <p>
              All content, features, and functionality of our website and products are owned by 
              exevolv.io and protected by copyright, trademark, and other intellectual property laws. 
              You may not:
            </p>
            <ul>
              <li>Copy, modify, or distribute our content without permission</li>
              <li>Reverse engineer or decompile our software</li>
              <li>Remove proprietary notices from our products</li>
              <li>Create derivative works based on our products</li>
            </ul>

            <h2>User Content</h2>
            <p>
              If you submit content to us (feedback, suggestions, etc.), you grant us a non-exclusive, 
              royalty-free license to use, modify, and display such content for our business purposes.
            </p>

            <h2>Third-Party Services</h2>
            <p>
              Our services may contain links to third-party websites or integrate with third-party 
              services. We are not responsible for the content, privacy policies, or practices of 
              third parties.
            </p>

            <h2>Disclaimer of Warranties</h2>
            <p>
              OUR SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, 
              EXPRESS OR IMPLIED. WE DO NOT WARRANT THAT:
            </p>
            <ul>
              <li>Our services will be uninterrupted or error-free</li>
              <li>Defects will be corrected</li>
              <li>Our services are free of viruses or harmful components</li>
              <li>Results from using our services will meet your requirements</li>
            </ul>

            <h2>Limitation of Liability</h2>
            <p>
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, EXEVOLV.IO SHALL NOT BE LIABLE FOR ANY INDIRECT, 
              INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO:
            </p>
            <ul>
              <li>Loss of profits, data, or goodwill</li>
              <li>Service interruptions</li>
              <li>Computer damage or system failure</li>
              <li>Unauthorized access to your data</li>
            </ul>

            <h2>Indemnification</h2>
            <p>
              You agree to indemnify and hold harmless exevolv.io and its affiliates from any claims, 
              damages, losses, or expenses arising from your use of our services or violation of these terms.
            </p>

            <h2>Termination</h2>
            <p>
              We may terminate or suspend your access to our services at any time, without prior notice, 
              for conduct that we believe violates these Terms or is harmful to other users, us, or 
              third parties.
            </p>

            <h2>Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with applicable laws, 
              without regard to conflict of law principles.
            </p>

            <h2>Changes to Terms</h2>
            <p>
              We may update these Terms from time to time. We will notify you of significant changes 
              by posting the new terms on this page. Continued use of our services after changes 
              constitutes acceptance of the new terms.
            </p>

            <h2>Severability</h2>
            <p>
              If any provision of these Terms is found to be unenforceable, the remaining provisions 
              will continue in full force and effect.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have questions about these Terms of Service, please contact us:
            </p>
            <ul>
              <li>Email: <a href="mailto:legal@exevolv.io">legal@exevolv.io</a></li>
              <li>Website: <Link href="/contact">exevolv.io/contact</Link></li>
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}
