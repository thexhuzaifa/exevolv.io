import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/ui/Breadcrumbs'
import { 
  Target, 
  Eye, 
  Heart, 
  Users, 
  Rocket, 
  Award,
  Code,
  Shield,
  Zap
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about exevolv.io - our mission, vision, and the team behind our innovative browser extensions and applications.',
  openGraph: {
    title: 'About Us - exevolv.io',
    description: 'Learn about exevolv.io and our mission to create innovative digital tools.',
  },
}

const values = [
  {
    icon: <Shield className="w-6 h-6" />,
    title: 'Privacy First',
    description: 'We believe your data is yours. All our products are built with privacy as a core principle.',
  },
  {
    icon: <Code className="w-6 h-6" />,
    title: 'Quality Code',
    description: 'We write clean, maintainable code that performs well and stands the test of time.',
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: 'User Focused',
    description: 'Every feature we build starts with understanding what our users actually need.',
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: 'Innovation',
    description: "We're constantly exploring new technologies to create better solutions.",
  },
]

const milestones = [
  { year: '2024', event: 'Founded exevolv.io', description: 'Huzaifa started exevolv.io from Faisalabad, Pakistan with a vision to create useful browser extensions.' },
  { year: '2025', event: 'Launched ProxyConnector Pro', description: 'Our first Chrome extension for secure proxy management.' },
  { year: '2025', event: 'Released QuizMaster AI', description: 'AI-powered quiz solving extension for students.' },
  { year: '2025', event: 'TaleemSpot Notes App', description: 'Launched our first Android app for Pakistani students.' },
  { year: '2026', event: 'Launched Pulser Pro & ZeroAds', description: 'Sound booster and ad blocker extensions to enhance browsing.' },
  { year: '2026', event: 'Growing Strong', description: 'Serving thousands of users across 50+ countries worldwide.' },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative gradient-bg py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        </div>
        <div className="container-custom relative">
          <Breadcrumbs items={[{ label: 'About' }]} />
          
          <div className="max-w-3xl">
            <span className="badge-primary mb-4 inline-block">Our Story</span>
            <h1 className="text-4xl md:text-5xl font-bold text-dark-900 dark:text-white mb-4 leading-[1.1]">
              About exevolv.io
            </h1>
            <p className="text-lg text-dark-600 dark:text-dark-400 leading-relaxed">
              We&apos;re a passionate team dedicated to building innovative browser extensions 
              and applications that make the digital world a better place.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-white dark:bg-dark-950">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="card card-hover p-8 border-t-4 border-t-primary">
              <div className="w-14 h-14 bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-dark-900 dark:text-white mb-4">
                Our Mission
              </h2>
              <p className="text-dark-600 dark:text-dark-400 leading-relaxed">
                To create powerful, privacy-focused digital tools that enhance productivity 
                and simplify everyday tasks for users worldwide. We believe technology should 
                work for you, not against you.
              </p>
            </div>

            {/* Vision */}
            <div className="card card-hover p-8 border-t-4 border-t-primary">
              <div className="w-14 h-14 bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 rounded-2xl flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-dark-900 dark:text-white mb-4">
                Our Vision
              </h2>
              <p className="text-dark-600 dark:text-dark-400">
                To become a leading provider of browser extensions and applications that 
                users trust and love. We envision a world where digital tools truly empower 
                people without compromising their privacy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-dark-50 dark:bg-dark-900">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-dark-900 dark:text-white mb-4">
              Our Story
            </h2>
            <p className="text-dark-600 dark:text-dark-400 leading-relaxed">
              exevolv.io was founded by <strong className="text-dark-900 dark:text-white">Huzaifa</strong> in <strong className="text-dark-900 dark:text-white">Faisalabad, Pakistan</strong>. 
              It started with a simple idea: create tools that we ourselves wanted to use. 
              As developers and power users, we noticed gaps in the market for privacy-focused, 
              user-friendly browser extensions. So we decided to build them.
            </p>
          </div>

          {/* Timeline */}
          <div className="max-w-2xl mx-auto">
            {milestones.map((milestone, index) => (
              <div key={milestone.year + milestone.event} className="flex gap-6 mb-8 last:mb-0">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {milestone.year.slice(2)}
                  </div>
                  {index < milestones.length - 1 && (
                    <div className="w-0.5 flex-1 bg-primary-200 dark:bg-primary-800 mt-2" />
                  )}
                </div>
                <div className="pb-8">
                  <div className="text-sm text-primary font-medium mb-1">{milestone.year}</div>
                  <h3 className="text-lg font-bold text-dark-900 dark:text-white mb-1">
                    {milestone.event}
                  </h3>
                  <p className="text-dark-600 dark:text-dark-400 text-sm">
                    {milestone.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-white dark:bg-dark-950">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-dark-900 dark:text-white mb-4">
              Our Values
            </h2>
            <p className="text-dark-600 dark:text-dark-400 max-w-2xl mx-auto">
              These core values guide everything we do, from product development to customer support.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div key={value.title} className="card p-6 text-center">
                <div className="w-14 h-14 bg-primary-50 dark:bg-primary-900/20 rounded-xl flex items-center justify-center mx-auto mb-4 text-primary">
                  {value.icon}
                </div>
                <h3 className="font-bold text-lg text-dark-900 dark:text-white mb-2">
                  {value.title}
                </h3>
                <p className="text-dark-600 dark:text-dark-400 text-sm">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-primary">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">5+</div>
              <div className="text-white/80">Products</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">10K+</div>
              <div className="text-white/80">Users</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">50+</div>
              <div className="text-white/80">Countries</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">4.8</div>
              <div className="text-white/80">Avg Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="section-padding bg-white dark:bg-dark-950">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="card p-8 md:p-10 border-t-4 border-t-primary">
              <div className="flex flex-col md:flex-row items-start gap-6">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-primary/25">
                  <span className="text-white font-bold text-3xl">H</span>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-dark-900 dark:text-white mb-1">Huzaifa</h2>
                  <p className="text-primary font-medium mb-3">Founder &amp; Developer</p>
                  <p className="text-dark-600 dark:text-dark-400 leading-relaxed mb-4">
                    Hi, I&apos;m Huzaifa — the founder and sole developer behind exevolv.io. Based in 
                    Faisalabad, Pakistan, I&apos;m passionate about building tools that make the internet 
                    safer, smarter, and more productive for everyone. I started exevolv.io in 2024 
                    to solve real problems I faced as a developer and student. Every product we ship 
                    is something I personally use and believe in.
                  </p>
                  <div className="flex items-center gap-4 text-sm text-dark-500">
                    <span className="flex items-center gap-1.5">📍 Faisalabad, Pakistan</span>
                    <span className="flex items-center gap-1.5">💼 Full-Stack Developer</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-dark-50 dark:bg-dark-900">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-dark-900 dark:text-white mb-4">
            Ready to Try Our Products?
          </h2>
          <p className="text-dark-600 dark:text-dark-400 mb-8 max-w-xl mx-auto">
            Explore our collection of browser extensions and applications and find the perfect tool for your needs.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/products" className="btn-primary">
              View Products
            </Link>
            <Link href="/contact" className="btn-outline">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
