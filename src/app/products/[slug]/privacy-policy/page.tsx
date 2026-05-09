import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Breadcrumbs from '@/components/ui/Breadcrumbs'
import { products, getProductBySlug } from '@/lib/products'
import { Shield, ArrowLeft } from 'lucide-react'

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = getProductBySlug(params.slug)
  
  if (!product) {
    return { title: 'Product Not Found' }
  }

  return {
    title: `Privacy Policy - ${product.name}`,
    description: `Privacy policy for ${product.name}. Learn how we handle your data and protect your privacy.`,
  }
}

export default function PrivacyPolicyPage({ params }: Props) {
  const product = getProductBySlug(params.slug)
  
  if (!product) {
    notFound()
  }

  return (
    <>
      <section className="gradient-bg py-16 md:py-24">
        <div className="container-custom">
          <Breadcrumbs 
            items={[
              { label: 'Products', href: '/products' },
              { label: product.name, href: `/products/${product.slug}` },
              { label: 'Privacy Policy' }
            ]} 
          />
          
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-primary-50 dark:bg-primary-900/20 rounded-xl flex items-center justify-center">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-dark-500">{product.name}</p>
                <h1 className="text-3xl md:text-4xl font-bold text-dark-900 dark:text-white">
                  Privacy Policy
                </h1>
              </div>
            </div>
            <p className="text-dark-600 dark:text-dark-400">
              Last updated: {product.slug === 'quizmaster-ai-android' ? 'May 09, 2026' : 'February 1, 2026'}
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white dark:bg-dark-950">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto prose dark:prose-invert prose-headings:font-bold prose-a:text-primary">
            {product.slug === 'quizmaster-ai-android' ? (
              <>
                <p>QuizMaster AI ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and share information when you use our mobile application, QuizMaster AI - Instant Quiz Solver (the "App").</p>
                
                <h2>1. Information We Collect</h2>
                <h3>A. Personal Information</h3>
                <ul>
                  <li><strong>Account Information:</strong> When you sign in using Google Authentication, we collect your name, email address, and profile picture URL to create and manage your account.</li>
                  <li><strong>User Content:</strong> We store your quiz history, scanned questions, and AI-generated solutions in Firebase Firestore to allow you to access them across devices.</li>
                </ul>
                
                <h3>B. Sensitive Permissions & Data</h3>
                <ul>
                  <li><strong>Camera & Images:</strong> The App requires access to your camera and gallery to capture images of quiz questions. These images are processed locally using Google ML Kit (OCR) and then the extracted text is sent to our AI services. We do not store your raw images on our servers.</li>
                  <li><strong>Screen Capture (Media Projection):</strong> For the "Scan & Solve" floating feature, the App uses Screen Capture to read text from your screen. This data is processed in real-time to provide quiz solutions and is not stored permanently unless you choose to save the result.</li>
                  <li><strong>Overlay Permission:</strong> The App uses the SYSTEM_ALERT_WINDOW permission to show a floating solver button for a seamless multi-tasking experience.</li>
                </ul>
                
                <h2>2. Third-Party Services</h2>
                <p>We use the following third-party services which may collect information used to identify you:</p>
                <ul>
                  <li><strong>Google Play Services:</strong> For App functionality and updates.</li>
                  <li><strong>Google AdMob:</strong> To display advertisements. AdMob may collect data such as device identifiers and location to serve relevant ads.</li>
                  <li><strong>Firebase (Google):</strong> For authentication (Google Sign-In), database management (Firestore), and cloud messaging (Push Notifications).</li>
                  <li><strong>Groq AI:</strong> We use Groq's API to process quiz questions and provide solutions. Only the text of the quiz is sent to this service.</li>
                </ul>

                <h2>3. Data Retention and Deletion</h2>
                <ul>
                  <li>We retain your quiz history and account data as long as your account is active.</li>
                  <li><strong>User Control:</strong> You can delete your history within the App.</li>
                  <li><strong>Logout:</strong> When you log out, local caches and sensitive session data are purged from the device.</li>
                  <li><strong>Account Deletion:</strong> Users can request account and data deletion by contacting us at privacy@exevolv.io.</li>
                </ul>

                <h2>4. Security</h2>
                <p>We implement industry-standard security measures, including SSL encryption and Firebase Security Rules, to protect your data from unauthorized access.</p>

                <h2>5. Children’s Privacy</h2>
                <p>Our services are not intended for children under the age of 13. We do not knowingly collect personal information from children under 13.</p>

                <h2>6. Changes to This Policy</h2>
                <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.</p>

                <h2>7. Contact Us</h2>
                <p>If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us at:</p>
                <ul>
                  <li>Email: <a href="mailto:privacy@exevolv.io">privacy@exevolv.io</a></li>
                </ul>
              </>
            ) : (
              <>
                <h2>Introduction</h2>
                <p>
                  This Privacy Policy describes how {product.name} ("we", "our", or "us") collects, uses, 
                  and shares information about you when you use our {product.category === 'android-app' ? 'mobile application' : 'browser extension'}.
                </p>

            <h2>Information We Collect</h2>
            <p>
              We are committed to protecting your privacy. {product.name} is designed with privacy as a core principle.
            </p>
            <ul>
              <li><strong>No Personal Data Collection:</strong> We do not collect, store, or transmit any personally identifiable information.</li>
              <li><strong>No Browsing History:</strong> We do not track or store your browsing history.</li>
              <li><strong>No Third-Party Tracking:</strong> We do not use any third-party analytics or tracking services.</li>
            </ul>

            {product.slug === 'pulser-pro' && (
              <>
                <h2>Browser Permissions</h2>
                <p>
                  Pulser Pro requires the following browser permissions to function. Each permission is used solely 
                  for audio enhancement and nothing else:
                </p>
                <ul>
                  <li><strong>Active Tab (<code>activeTab</code>):</strong> Required to access and modify the audio 
                  output of the currently active tab. This permission is only activated when you interact with the extension.</li>
                  <li><strong>Storage (<code>storage</code>):</strong> Used to save your volume preferences, bass settings, 
                  and per-tab audio profiles locally on your device. No data is synced or transmitted externally.</li>
                  <li><strong>Host Permissions (All URLs):</strong> Required so the extension can inject its audio processing 
                  scripts into any webpage you visit. This is necessary for the sound booster to work across all websites 
                  including YouTube, Netflix, Spotify, and others.</li>
                </ul>

                <h2>Audio Processing</h2>
                <p>
                  Pulser Pro modifies audio output in real-time using the Web Audio API built into your browser. 
                  Important details about our audio processing:
                </p>
                <ul>
                  <li><strong>Local Processing Only:</strong> All audio amplification and bass enhancement happens 
                  entirely within your browser. No audio data is recorded, captured, streamed, or sent to any server.</li>
                  <li><strong>No Audio Recording:</strong> Pulser Pro does not record, store, or transmit any audio 
                  from your browser tabs. It only modifies the volume output in real-time.</li>
                  <li><strong>Content Scripts:</strong> The extension uses content scripts that run on web pages to 
                  intercept and boost audio elements. These scripts do not read, collect, or transmit any page content, 
                  personal data, or browsing information.</li>
                </ul>
              </>
            )}

            {product.slug === 'zeroadsblocker' && (
              <>
                <h2>Browser Permissions</h2>
                <p>
                  ZeroAds requires certain browser permissions to block ads effectively. Each permission is used 
                  solely for ad blocking and privacy protection:
                </p>
                <ul>
                  <li><strong>Web Request / Declarative Net Request:</strong> Required to intercept and block ad-related 
                  network requests before they load. This is the core mechanism that prevents ads from appearing on web pages.</li>
                  <li><strong>Host Permissions (All URLs):</strong> Necessary so the extension can block ads on every 
                  website you visit, including YouTube, news sites, and social media platforms.</li>
                  <li><strong>Storage:</strong> Used to save your preferences and whitelist settings locally on your device.</li>
                </ul>

                <h2>Ad Blocking &amp; Content Filtering</h2>
                <p>
                  ZeroAds uses filter rules to identify and block unwanted content. Here&apos;s how it works:
                </p>
                <ul>
                  <li><strong>Local Filter Processing:</strong> All ad detection and blocking happens locally in your 
                  browser. No browsing data is sent to any server for analysis.</li>
                  <li><strong>No Page Content Reading:</strong> ZeroAds only inspects network request URLs to determine 
                  if they match known ad/tracking patterns. It does not read, analyze, or store the actual content of 
                  web pages you visit.</li>
                  <li><strong>No Browsing Profiles:</strong> We do not build browsing profiles, track your interests, 
                  or monitor which websites you visit.</li>
                </ul>
              </>
            )}

            <h2>How We Use Information</h2>
            <p>
              Since we don&apos;t collect personal information, there&apos;s no personal data to use. The {product.category === 'android-app' ? 'app' : 'extension'} 
              {' '}operates entirely locally on your device.
            </p>

            <h2>Data Storage</h2>
            <p>
              Any preferences or settings you configure are stored locally on your device using 
              {product.category === 'android-app' ? ' the app\'s local storage' : ' browser storage APIs'}. 
              This data never leaves your device.
            </p>
            {product.slug === 'pulser-pro' && (
              <ul>
                <li><strong>Volume Levels:</strong> Your custom volume boost percentage for each tab.</li>
                <li><strong>Bass Settings:</strong> Your bass enhancement preferences.</li>
                <li><strong>User Preferences:</strong> UI settings and audio profile configurations.</li>
              </ul>
            )}
            {product.slug === 'zeroadsblocker' && (
              <ul>
                <li><strong>Whitelist:</strong> Websites you choose to allow ads on.</li>
                <li><strong>Filter Preferences:</strong> Your selected blocking intensity and categories.</li>
                <li><strong>UI Settings:</strong> Extension interface preferences and display options.</li>
              </ul>
            )}

            <h2>Third-Party Services</h2>
            <p>
              {(product.slug === 'pulser-pro' || product.slug === 'zeroadsblocker')
                ? `${product.name} does not connect to any external servers or third-party services. All functionality is self-contained within the extension and runs entirely in your browser.`
                : `${product.name} may connect to external services as part of its core functionality. These connections are necessary for the product to work and are encrypted for security.`
              }
            </p>

            <h2>Data Security</h2>
            <p>
              We take security seriously. {(product.slug === 'pulser-pro' || product.slug === 'zeroadsblocker')
                ? `Since ${product.name} operates entirely offline with no network communication, there is no risk of data interception. Your preferences are stored securely in your browser's local storage.`
                : 'All network communications are encrypted using industry-standard protocols. Your local data is protected by your device\'s security measures.'
              }
            </p>

            <h2>Children&apos;s Privacy</h2>
            <p>
              Our products are not directed at children under 13. We do not knowingly collect information from children.
            </p>

            <h2>Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting 
              the new Privacy Policy on this page and updating the &quot;Last updated&quot; date.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <ul>
              <li>Email: <a href="mailto:privacy@exevolv.io">privacy@exevolv.io</a></li>
              <li>Website: <a href="https://exevolv.io/contact">exevolv.io/contact</a></li>
            </ul>
              </>
            )}
          </div>

          <div className="max-w-3xl mx-auto mt-12">
            <Link 
              href={`/products/${product.slug}`}
              className="inline-flex items-center text-primary hover:underline"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to {product.name}
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
