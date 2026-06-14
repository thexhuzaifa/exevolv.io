import Link from 'next/link'
import { Github, Linkedin, Mail } from 'lucide-react'

const footerLinks = {
  products: [
    { name: 'ProxyConnector Pro', href: '/products/ip-filter-exchange' },
    { name: 'QuizMaster AI', href: '/products/quizmaster-ai' },
    { name: 'TaleemSpot Notes', href: '/products/taleemspot-notes' },
    { name: 'Pulser Pro', href: '/products/pulser-pro' },
    { name: 'ZeroAds', href: '/products/zeroadsblocker' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ],
  resources: [
    { name: 'Documentation', href: '/docs' },
    { name: 'FAQs', href: '/faqs' },
    { name: 'Support', href: '/contact' },
    { name: 'Changelog', href: '/blog' },
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
  { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/exevolv-io' },
  { name: 'Email', icon: Mail, href: 'mailto:hello@exevolv.io' },
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
                href="mailto:hello@exevolv.io?subject=Newsletter Subscription&body=I would like to subscribe to the exevolv.io newsletter."
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
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">e</span>
              </div>
              <span className="font-display font-bold text-xl">
                exevolv<span className="text-primary">.io</span>
              </span>
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

        {/* Contact Info */}
        <div className="mt-12 pt-8 border-t border-dark-700">
          <div className="flex flex-wrap gap-6 text-sm text-dark-400">
            <a href="mailto:hello@exevolv.io" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Mail className="w-4 h-4" />
              hello@exevolv.io
            </a>
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
