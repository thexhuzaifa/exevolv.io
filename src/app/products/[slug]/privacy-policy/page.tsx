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
    description:
      product.slug === 'vu-scholars'
        ? 'Privacy Policy for VU Scholars, the offline study app for Virtual University handouts and textbooks.'
        : `Privacy policy for ${product.name}. Learn how we handle your data and protect your privacy.`,
  }
}

export default function PrivacyPolicyPage({ params }: Props) {
  const product = getProductBySlug(params.slug)
  
  if (!product) {
    notFound()
  }

  const isExvPlayer = product.slug === 'exv-player'
  const isPolicyScanAI = product.slug === 'policy-scan-ai'
  const isVUScholars = product.slug === 'vu-scholars'

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
              Last updated: {product.slug === 'quizmaster-ai' ? 'May 09, 2026' : 'February 1, 2026'}
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white dark:bg-dark-950">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto prose dark:prose-invert prose-headings:font-bold prose-a:text-primary">
            {product.slug === 'quizmaster-ai' ? (
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
            ) : isPolicyScanAI ? (
              <>
                <h2>Introduction</h2>
                <p>
                  This Privacy Policy describes how {product.name} handles information when you use the app to scan and analyze legal documents.
                  The app is designed to help users understand policies, terms, and contracts while keeping privacy and security in mind.
                </p>

                <h2>Information We Process</h2>
                <ul>
                  <li><strong>Document Content:</strong> When you scan, upload, or paste a document, the text may be processed by our AI services to analyze clauses and generate summaries.</li>
                  <li><strong>Images and Files:</strong> Photos or files you choose to scan are used only for analysis and document extraction.</li>
                  <li><strong>Scan History:</strong> Previous scan results may be stored locally so you can revisit them later.</li>
                </ul>

                <h2>Permissions</h2>
                <p>
                  Policy Scan AI requires the following permissions only for core functionality:
                </p>
                <ul>
                  <li><strong>Internet:</strong> Used to communicate with AI models for document analysis.</li>
                  <li><strong>Camera:</strong> Used to scan physical documents directly through the lens.</li>
                  <li><strong>Photos / Media / Storage:</strong> Used to pick document images or PDFs from your device.</li>
                </ul>

                <h2>How We Use Information</h2>
                <ul>
                  <li>To scan and analyze legal documents for potential risks and unfair clauses.</li>
                  <li>To simplify legal language into short, readable summaries.</li>
                  <li>To show you a final verdict and save scan history for future reference.</li>
                </ul>

                <h2>Data Retention</h2>
                <p>
                  Scan results and history are kept to support future review. You can clear your stored history from the app settings if that option is available in your build.
                </p>

                <h2>Security</h2>
                <p>
                  We use reasonable technical and organizational measures to protect the data processed by the app, but users should still avoid uploading documents they do not want analyzed.
                </p>

                <h2>Children&apos;s Privacy</h2>
                <p>
                  Our services are not directed to children under 13, and we do not knowingly collect information from children.
                </p>

                <h2>Contact Us</h2>
                <p>
                  If you have questions about this policy, contact us at <a href="mailto:privacy@exevolv.io">privacy@exevolv.io</a>.
                </p>
              </>
            ) : isVUScholars ? (
              <>
                <p>
                  VU Scholars (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is designed to give students offline access to educational handouts and textbooks.
                  This Privacy Policy explains how the App works and how it handles information. The short version is simple: we do not collect your personal data.
                </p>

                <h2>1. Information We Do Not Collect</h2>
                <p>
                  VU Scholars is built to work without tracking you. We do not collect, store, sell, or share personal information such as your name, email address, phone number, student ID, location, or device contacts.
                </p>
                <ul>
                  <li>No account is required to use the App.</li>
                  <li>No analytics, ad networks, or hidden trackers are included.</li>
                  <li>No usage logs are created for personal profiling.</li>
                </ul>

                <h2>2. Local Device Storage</h2>
                <p>
                  When you download a handout or textbook, that file is saved locally on your own device so you can read it offline.
                  We do not have access to your device storage and we do not monitor which files you open, download, or delete.
                </p>
                <p>
                  You may remove downloaded files at any time through the App or through your device file manager.
                </p>

                <h2>3. Third-Party Content and Disclaimer</h2>
                <p>
                  VU Scholars is an independent, unofficial student application and is not affiliated with, endorsed by, or connected to the Virtual University of Pakistan.
                </p>
                <p>
                  Educational content shown in the App is sourced from publicly available official Virtual University platforms, including vu.edu.pk and ocw.vu.edu.pk.
                  Because the App only provides a convenient offline reading experience for public study material, we do not share any user data with the Virtual University or any other third party institution.
                </p>

                <h2>4. Children's Privacy</h2>
                <p>
                  The App is intended for university and college students. Since we do not collect personal data, the App does not create a profile of any user, including minors.
                </p>

                <h2>5. Changes to This Privacy Policy</h2>
                <p>
                  We may update this Policy from time to time if the App changes or if legal requirements change. The updated version will be posted on this page with a new effective date.
                </p>

                <h2>6. Contact Us</h2>
                <p>
                  If you have any questions about this Privacy Policy or the VU Scholars app, please contact us at <a href="mailto:privacy@exevolv.io">privacy@exevolv.io</a>.
                </p>
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

            {isExvPlayer && (
              <>
                <h2>Permissions</h2>
                <p>
                  EXV Player only requests permissions that are directly related to media playback and local app settings.
                  It does not request login, ad, tracking, or unrelated permissions.
                </p>
                <ul>
                  <li><strong>Media Access:</strong> Required to open and play your selected audio or video content.</li>
                  <li><strong>Storage:</strong> Used to save playback preferences locally on your device.</li>
                </ul>

                <h2>Ads and Sign-In</h2>
                <p>
                  EXV Player does not show ads and does not require an account or login to use.
                </p>
              </>
            )}

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
