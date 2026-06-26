import Link from 'next/link'
import { Github, Linkedin, Mail } from 'lucide-react'

const footerLinks = {
  products: [
    { name: 'ProxyConnector Pro', href: '/products/proxyconnectorpro' },
    { name: 'QuizMaster AI', href: '/products/quizmaster-ai' },
    { name: 'General Knowledge Quiz', href: '/products/general-knowledge-quiz' },
    { name: 'Go Play Test', href: '/products/go-play-test' },
    { name: 'Policy Scan AI', href: '/products/policy-scan-ai' },
    { name: 'Pulser Pro', href: '/products/pulser-pro' },
    { name: 'ZeroAds', href: '/products/zeroadsblocker' },
    { name: '1Click PDF Maker', href: '/products/oneclickpdfmaker' },
    { name: 'EXV Player', href: '/products/exv-player' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ],
  resources: [
    { name: 'Documentation', href: '/docs' },
    { name: 'FAQs', href: '/faqs' },
    { name: 'GitHub Source Code', href: '/github-source-code' },
    { name: 'Support', href: '/contact' },
    { name: 'Blog', href: '/blog' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'Terms of Service', href: '/terms-of-service' },
    { name: 'Cookie Policy', href: '/cookie-policy' },
    { name: 'Refund Policy', href: '/refund-policy' },
    { name: 'Disclaimer', href: '/disclaimer' },
    { name: 'DMCA Policy', href: '/dmca' },
  ],
}

const socialLinks = [
  { name: 'GitHub', icon: Github, href: 'https://github.com/huzaifa78613' },
  { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/in/mhuxaifa/' },
  { name: 'Email', icon: Mail, href: 'mailto:huzaifa@exevolv.io' },
]

export default function Footer() {
  return (
    <footer className="bg-dark-900 text-white">
      {/* Newsletter Section */}
      <div className="border-b border-dark-700">
        <div className="container-custom py-12 md:py-16">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Stay Updated
            </h3>
            <p className="text-dark-400 mb-6">
              Get product updates, tips, and exclusive content delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto items-center justify-center">
              <a 
                href="mailto:huzaifa@exevolv.io?subject=Newsletter Subscription&body=I would like to subscribe to the exevolv.io newsletter."
                className="btn-primary whitespace-nowrap"
              >
                <Mail className="w-4 h-4 mr-2" />
                Subscribe via Email
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {/* Brand */}
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4 group">
              <img 
                src="/Assets/logo.png" 
                alt="Exevolv Logo" 
                className="h-10 w-auto object-contain transition-transform group-hover:scale-105" 
              />
            </Link>
            <p className="text-dark-400 text-sm mb-6 max-w-xs">
              Building innovative browser extensions and applications that enhance your digital experience.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-dark-800 flex items-center justify-center text-dark-400 hover:text-primary hover:bg-dark-700 transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold text-white mb-4">Products</h4>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-dark-400 hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-dark-400 hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-dark-400 hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-dark-400 hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>

      {/* Copyright */}
      <div className="border-t border-dark-700">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-dark-500">
              © {new Date().getFullYear()} exevolv.io. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-dark-500">
              <Link href="/privacy-policy" className="hover:text-primary transition-colors">
                Privacy
              </Link>
              <Link href="/terms-of-service" className="hover:text-primary transition-colors">
                Terms
              </Link>
              <Link href="/cookie-policy" className="hover:text-primary transition-colors">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
