import Image from 'next/image'
import Link from 'next/link'
import { 
  Mail, 
  Smartphone, 
  DollarSign, 
  ShieldAlert, 
  Bug, 
  Send,
  Code2,
  Award,
  Briefcase,
  CheckCircle2
} from 'lucide-react'

export const metadata = {
  title: 'Services & Portfolio - Md Huzaifa',
  description: 'Professional Android Developer, Play Console Policy Fixer, and Web App Monetization Expert. Hire me for commercial apps, ad mediation, and bug fixing.',
}

export default function ServicesPage() {
  const services = [
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: 'Ad Monetization & Web Apps',
      description: 'Expert in maximizing your app revenue with high eCPM setups.',
      points: [
        'AdMob, Google AdX & MCM setups',
        'Google AdSense integration',
        'Unity Ads & AppLovin',
        'Advanced Ad Mediation setups'
      ]
    },
    {
      icon: <ShieldAlert className="w-6 h-6" />,
      title: 'Google Play Console Policy Fixation',
      description: 'Getting your suspended or rejected apps back on the Play Store.',
      points: [
        'App rejection & suspension appeals',
        'Data Safety & Privacy policy forms',
        'Permission declaration fixes',
        'Compliance with latest Google policies'
      ]
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: 'Commercial App Development',
      description: 'End-to-end mobile application development tailored for businesses.',
      points: [
        'High-performance Android Apps',
        'E-commerce & SaaS mobile solutions',
        'Scalable and clean architecture',
        'UI/UX implementation'
      ]
    },
    {
      icon: <Bug className="w-6 h-6" />,
      title: 'App Bug Fixes (Flutter & Kotlin)',
      description: 'Deep diving into the code to resolve both common and extremely rare issues.',
      points: [
        'Common: Gradle build errors, UI overflows, State management issues',
        'Rare: Memory leaks in Platform Channels, NDK/JNI native crashes',
        'ProGuard/R8 obfuscation crashes',
        'Dependency resolution conflicts'
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark-950">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary-50/50 to-transparent dark:from-primary-900/10 dark:to-transparent" />
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-96 h-96 bg-primary/10 dark:bg-primary/20 blur-3xl rounded-full pointer-events-none" />
        
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Text Content */}
            <div className="lg:col-span-7 xl:col-span-8 order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary font-medium text-sm mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Available for Projects
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-dark-900 dark:text-white mb-6 leading-tight">
                Hi, I'm <span className="text-primary">Md Huzaifa</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-dark-600 dark:text-dark-300 font-medium mb-6">
                Professional Android Developer | Play Console Policy Fixer | Web App Monetization Expert
              </p>
              
              <p className="text-lg text-dark-500 dark:text-dark-400 mb-8 max-w-2xl leading-relaxed">
                With over <strong>5+ years of experience</strong>, I help businesses build robust commercial apps, maximize their revenue through smart ad mediation, and keep their apps compliant with Google Play Console policies.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <a href="#contact" className="btn-primary py-3 px-8 text-lg flex items-center gap-2">
                  Hire Me <Briefcase className="w-5 h-5" />
                </a>
                <a href="mailto:huzaifa@exevolv.io" className="btn-outline py-3 px-8 text-lg flex items-center gap-2">
                  <Mail className="w-5 h-5" /> huzaifa@exevolv.io
                </a>
              </div>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-12 pt-8 border-t border-gray-200 dark:border-dark-800">
                <div>
                  <div className="text-3xl font-bold text-dark-900 dark:text-white mb-1">5+</div>
                  <div className="text-dark-500 text-sm">Years Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-dark-900 dark:text-white mb-1">100%</div>
                  <div className="text-dark-500 text-sm">Policy Fix Rate</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-dark-900 dark:text-white mb-1">Expert</div>
                  <div className="text-dark-500 text-sm">Ad Monetization</div>
                </div>
              </div>
            </div>

            {/* Profile Image */}
            <div className="lg:col-span-5 xl:col-span-4 order-1 lg:order-2 flex justify-center lg:justify-end">
              <div className="relative w-72 h-72 md:w-96 md:h-96">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary to-primary-400 rounded-[2rem] rotate-3 scale-105 opacity-20 dark:opacity-40 animate-pulse-slow"></div>
                <div className="absolute inset-0 bg-white dark:bg-dark-800 rounded-[2rem] shadow-2xl overflow-hidden border-4 border-white dark:border-dark-800">
                  {/* Ensure you have an image at public/Assets/MDHuzaifa.jpg or change extension to .png */}
                  <img 
                    src="/Assets/MDHuzaifa.jpg" 
                    alt="Md Huzaifa"
                    className="w-full h-full object-cover object-top"
                    onError={(e) => {
                      // Fallback if image not found
                      e.currentTarget.src = 'https://ui-avatars.com/api/?name=Md+Huzaifa&size=512&background=02B875&color=fff'
                    }}
                  />
                </div>
                
                {/* Floating Badges */}
                <div className="absolute -bottom-6 -left-6 bg-white dark:bg-dark-900 p-4 rounded-2xl shadow-xl border border-gray-100 dark:border-dark-800 flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 text-green-600 rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-bold text-dark-900 dark:text-white">Top Rated</div>
                    <div className="text-xs text-dark-500">Developer</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-white dark:bg-dark-900">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dark-900 dark:text-white mb-4">
              My Core Expertise
            </h2>
            <p className="text-lg text-dark-600 dark:text-dark-400">
              Delivering industry-standard solutions to enhance your app's performance, revenue, and compliance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="card p-8 group hover:-translate-y-1 transition-transform duration-300">
                <div className="w-14 h-14 bg-primary-50 dark:bg-primary-900/20 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-dark-900 dark:text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-dark-600 dark:text-dark-400 mb-6 line-clamp-2">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-dark-700 dark:text-dark-300 text-sm leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding bg-gray-50 dark:bg-dark-950">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto bg-white dark:bg-dark-900 rounded-[2.5rem] shadow-xl overflow-hidden border border-gray-100 dark:border-dark-800">
            <div className="grid md:grid-cols-5 h-full">
              {/* Contact Info */}
              <div className="md:col-span-2 bg-primary p-10 text-white flex flex-col justify-between">
                <div>
                  <h3 className="text-3xl font-bold mb-4">Let's Talk</h3>
                  <p className="text-primary-100 mb-10 leading-relaxed">
                    Have a project in mind, facing a tough app bug, or dealing with a policy violation? Reach out today!
                  </p>
                  
                  <div className="space-y-6">
                    <a href="mailto:huzaifa@exevolv.io" className="flex items-center gap-4 hover:text-primary-100 transition-colors">
                      <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                        <Mail className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="text-sm text-primary-200">Email Me At</div>
                        <div className="font-semibold text-lg">huzaifa@exevolv.io</div>
                      </div>
                    </a>
                    
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                        <Code2 className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="text-sm text-primary-200">Tech Stack</div>
                        <div className="font-semibold text-lg">Android, Flutter, Web</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-12">
                  <div className="text-sm font-medium text-primary-200 mb-4 uppercase tracking-wider">Trusted by clients worldwide</div>
                </div>
              </div>
              
              {/* Contact Form */}
              <div className="md:col-span-3 p-10 lg:p-12">
                <h3 className="text-2xl font-bold text-dark-900 dark:text-white mb-6">Send a Message</h3>
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-dark-700 dark:text-dark-300">Your Name</label>
                      <input type="text" id="name" className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-dark-950 border border-gray-200 dark:border-dark-800 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all dark:text-white" placeholder="John Doe" required />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-dark-700 dark:text-dark-300">Email Address</label>
                      <input type="email" id="email" className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-dark-950 border border-gray-200 dark:border-dark-800 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all dark:text-white" placeholder="john@example.com" required />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-dark-700 dark:text-dark-300">Subject / Service Needed</label>
                    <input type="text" id="subject" className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-dark-950 border border-gray-200 dark:border-dark-800 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all dark:text-white" placeholder="e.g. Play Console Policy Fix" required />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-dark-700 dark:text-dark-300">Project Details</label>
                    <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-dark-950 border border-gray-200 dark:border-dark-800 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none dark:text-white" placeholder="Tell me about your project or issue..." required></textarea>
                  </div>
                  
                  <button type="submit" className="btn-primary w-full py-4 text-lg flex items-center justify-center gap-2 group">
                    Send Message <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}