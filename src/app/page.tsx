import Link from 'next/link'
import { 
  ArrowRight, 
  Shield, 
  Zap, 
  Users, 
  Download, 
  Star, 
  Globe,
  Lock,
  Sparkles,
  Rocket,
  CheckCircle,
  ChevronRight
} from 'lucide-react'
import ProductCard from '@/components/ui/ProductCard'
import FeatureCard from '@/components/ui/FeatureCard'
import TestimonialCard from '@/components/ui/TestimonialCard'
import StatCard from '@/components/ui/StatCard'
import { products } from '@/lib/products'

const stats = [
  { value: '10K+', label: 'Active Users', icon: <Users className="w-6 h-6" /> },
  { value: '5+', label: 'Products', icon: <Rocket className="w-6 h-6" /> },
  { value: '4.8', label: 'Avg Rating', icon: <Star className="w-6 h-6" /> },
  { value: '50+', label: 'Countries', icon: <Globe className="w-6 h-6" /> },
]

const features = [
  {
    icon: <Shield className="w-6 h-6" />,
    title: 'Privacy Focused',
    description: 'Your data stays yours. We never collect or sell your personal information.',
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: 'Lightning Fast',
    description: 'Optimized for performance. Our products are lightweight and blazing fast.',
  },
  {
    icon: <Lock className="w-6 h-6" />,
    title: 'Secure by Design',
    description: 'Built with security best practices. Your safety is our top priority.',
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: 'User Friendly',
    description: 'Clean, intuitive interfaces that anyone can use without a learning curve.',
  },
]

const testimonials = [
  {
    quote: "ProxyConnector Pro is exactly what I needed for managing proxies. Clean interface and works flawlessly!",
    author: "Alex Chen",
    role: "Security Researcher",
    rating: 5,
  },
  {
    quote: "QuizMaster AI helped me ace my certification exams. The explanations are incredibly helpful.",
    author: "Sarah Johnson",
    role: "IT Professional",
    rating: 5,
  },
  {
    quote: "TaleemSpot Notes made my board exam preparation so much easier. Highly recommended!",
    author: "Ahmed Khan",
    role: "Student",
    rating: 5,
  },
]

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden gradient-bg min-h-[90vh] flex items-center">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
        </div>

        <div className="container-custom relative w-full">
          <div className="py-20 md:py-32 lg:py-40">
            <div className="max-w-4xl mx-auto text-center">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/80 dark:bg-dark-900/80 backdrop-blur-sm rounded-full shadow-lg shadow-dark-900/5 mb-8 animate-fade-up border border-dark-100 dark:border-dark-800">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                <span className="text-sm font-medium text-dark-600 dark:text-dark-400">
                  Building the future of browser extensions
                </span>
              </div>

              {/* Headline */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-dark-900 dark:text-white mb-6 animate-fade-up animate-delay-100 leading-[1.1]">
                Innovative Tools for a
                <span className="gradient-text block mt-2">Better Digital Experience</span>
              </h1>

              {/* Subheadline */}
              <p className="text-lg md:text-xl text-dark-600 dark:text-dark-400 mb-10 max-w-2xl mx-auto animate-fade-up animate-delay-200">
                We create powerful browser extensions and applications that enhance your productivity, 
                protect your privacy, and simplify your digital life.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up animate-delay-300">
                <Link href="/products" className="btn-primary text-lg px-8 py-4">
                  Explore Products
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link href="/about" className="btn-secondary text-lg px-8 py-4">
                  Learn More
                </Link>
              </div>

              {/* Trust badges */}
              <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-dark-500 animate-fade-up animate-delay-400">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span>Privacy First</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span>Free to Use</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span>Regular Updates</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white dark:bg-dark-950 border-y border-dark-100 dark:border-dark-800">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <StatCard key={stat.label} {...stat} />
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="section-padding bg-dark-50 dark:bg-dark-900">
        <div className="container-custom">
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16">
            <span className="badge-primary mb-4">Our Products</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark-900 dark:text-white mb-4">
              Built for You
            </h2>
            <p className="text-dark-600 dark:text-dark-400 max-w-2xl mx-auto">
              Discover our collection of carefully crafted browser extensions and applications 
              designed to enhance your digital experience.
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* View All CTA */}
          <div className="text-center mt-12">
            <Link href="/products" className="btn-outline inline-flex items-center gap-2">
              View All Products
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-white dark:bg-dark-950">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Content */}
            <div>
              <span className="badge-primary mb-4">Why Choose Us</span>
              <h2 className="text-3xl md:text-4xl font-bold text-dark-900 dark:text-white mb-6">
                Quality Products You Can Trust
              </h2>
              <p className="text-dark-600 dark:text-dark-400 mb-8">
                We're committed to building products that respect your privacy, 
                work reliably, and make your life easier. Here's what sets us apart.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6">
                {features.map((feature) => (
                  <FeatureCard key={feature.title} {...feature} />
                ))}
              </div>
            </div>

            {/* Visual */}
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900/20 dark:to-primary-800/20 rounded-3xl flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-24 h-24 bg-primary rounded-3xl flex items-center justify-center mx-auto mb-6">
                    <span className="text-5xl font-bold text-white">e</span>
                  </div>
                  <h3 className="text-2xl font-bold text-dark-900 dark:text-white mb-2">
                    exevolv.io
                  </h3>
                  <p className="text-dark-600 dark:text-dark-400">
                    Evolving Digital Experiences
                  </p>
                </div>
              </div>
              
              {/* Floating cards */}
              <div className="absolute -top-4 -right-4 bg-white dark:bg-dark-800 rounded-xl shadow-xl p-4 animate-bounce-slow">
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                  <span className="font-bold text-dark-900 dark:text-white">4.8</span>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-white dark:bg-dark-800 rounded-xl shadow-xl p-4 animate-pulse-slow">
                <div className="flex items-center gap-2">
                  <Download className="w-5 h-5 text-primary" />
                  <span className="font-bold text-dark-900 dark:text-white">10K+</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-dark-50 dark:bg-dark-900">
        <div className="container-custom">
          <div className="text-center mb-12 md:mb-16">
            <span className="badge-primary mb-4">Testimonials</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark-900 dark:text-white mb-4">
              Loved by Users
            </h2>
            <p className="text-dark-600 dark:text-dark-400 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our users have to say.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-primary via-primary-600 to-primary-800 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-white/10 rounded-full" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] border border-white/5 rounded-full" />
        </div>

        <div className="container-custom relative">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-white/80 mb-10">
              Join thousands of users who are already enhancing their digital experience 
              with our products. It's free to get started!
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                href="/products" 
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-primary bg-white rounded-lg hover:bg-dark-50 transition-all duration-200 shadow-lg"
              >
                Browse Products
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white border-2 border-white/30 rounded-lg hover:bg-white/10 transition-all duration-200"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
