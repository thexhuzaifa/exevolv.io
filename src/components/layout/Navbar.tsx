'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Menu, X, ChevronDown, Moon, Sun } from 'lucide-react'
import { cn } from '@/lib/utils'

const navigation = [
  { name: 'Home', href: '/' },
  { 
    name: 'Products', 
    href: '/products',
    children: [
      { name: 'ProxyConnector Pro', href: '/products/proxyconnectorpro' },
      { name: 'QuizMaster AI', href: '/products/quizmaster-ai' },
      { name: 'Policy Scan AI', href: '/products/policy-scan-ai' },
      { name: 'Pulser Pro', href: '/products/pulser-pro' },
      { name: 'ZeroAds', href: '/products/zeroadsblocker' },
      { name: '1Click PDF Maker', href: '/products/oneclickpdfmaker' },
      { name: 'EXV Player', href: '/products/exv-player' },
    ]
  },
  { name: 'About', href: '/about' },
  { name: 'Blog', href: '/blog' },
  { name: 'Docs', href: '/docs' },
  { name: 'FAQs', href: '/faqs' },
  { name: 'GitHub Source Code', href: '/github-source-code' },
  { name: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isDark, setIsDark] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDark])

  return (
    <nav 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled 
          ? 'bg-white/95 dark:bg-dark-950/95 backdrop-blur-md shadow-lg shadow-dark-900/5' 
          : 'bg-transparent'
      )}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <img 
              src="/Assets/logo.png" 
              alt="Exevolv Logo" 
              className="h-10 w-auto object-contain transition-transform group-hover:scale-105" 
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => (
              <div 
                key={item.name} 
                className="relative"
                onMouseEnter={() => item.children && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={cn(
                    'flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-lg transition-colors',
                    'text-dark-700 dark:text-dark-300 hover:text-primary hover:bg-primary-50 dark:hover:bg-primary-900/20'
                  )}
                >
                  {item.name}
                  {item.children && <ChevronDown className="w-4 h-4" />}
                </Link>
                
                {/* Dropdown */}
                {item.children && activeDropdown === item.name && (
                  <div className="absolute top-full left-0 pt-2 animate-fade-in">
                    <div className="bg-white dark:bg-dark-900 rounded-xl shadow-xl shadow-dark-900/10 border border-dark-100 dark:border-dark-800 py-2 min-w-[200px]">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          className="block px-4 py-2 text-sm text-dark-700 dark:text-dark-300 hover:text-primary hover:bg-primary-50 dark:hover:bg-primary-900/20"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            {/* Dark Mode Toggle */}
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-lg text-dark-600 dark:text-dark-400 hover:bg-dark-100 dark:hover:bg-dark-800 transition-colors"
              aria-label="Toggle dark mode"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            {/* CTA Button */}
            <Link href="/services" className="hidden md:inline-flex btn-primary text-sm py-2 px-4">
              Get Services
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg text-dark-600 dark:text-dark-400 hover:bg-dark-100 dark:hover:bg-dark-800 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white dark:bg-dark-950 border-t border-dark-100 dark:border-dark-800 animate-fade-in">
          <div className="container-custom py-4 space-y-1">
            {navigation.map((item) => (
              <div key={item.name}>
                <Link
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 text-base font-medium text-dark-700 dark:text-dark-300 hover:text-primary hover:bg-primary-50 dark:hover:bg-primary-900/20 rounded-lg"
                >
                  {item.name}
                </Link>
                {item.children && (
                  <div className="pl-4 space-y-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.name}
                        href={child.href}
                        onClick={() => setIsOpen(false)}
                        className="block px-4 py-2 text-sm text-dark-500 dark:text-dark-400 hover:text-primary"
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4">
              <Link 
                href="/services" 
                onClick={() => setIsOpen(false)}
                className="btn-primary w-full text-center"
              >
                Get Services
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
