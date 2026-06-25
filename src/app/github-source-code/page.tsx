import { Metadata } from 'next'
import Link from 'next/link'
import { Github, ExternalLink, Code2, UserRound, ArrowUpRight, Sparkles } from 'lucide-react'
import { products } from '@/lib/products'

export const metadata: Metadata = {
  title: 'GitHub Source Code',
  description: 'Browse the GitHub source code repositories for our products.',
}

const sourceProducts = products.filter((product) => product.sourceCodeUrl)
const developerName = 'Gulraiz Hamza'
const developerProfile = 'https://github.com/gulraiz12ab'

export default function GitHubSourceCodePage() {
  return (
    <>
      {/* ULTRA PREMIUM HERO SECTION */}
      <section className="relative bg-white dark:bg-dark-950 py-24 md:py-36 overflow-hidden">
        {/* Animated Background Mesh */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none flex items-center justify-center">
          <div className="absolute top-[-10%] right-[-5%] w-[40rem] h-[40rem] bg-primary/10 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-screen animate-[pulse_8s_ease-in-out_infinite]" />
          <div className="absolute bottom-[-10%] left-[-5%] w-[35rem] h-[35rem] bg-primary/5 rounded-full blur-[100px] mix-blend-multiply dark:mix-blend-screen animate-[pulse_10s_ease-in-out_infinite_reverse]" />
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
            {/* Animated Premium Badge */}
            <div className="group inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-white/40 dark:bg-dark-900/40 backdrop-blur-xl border border-dark-200/50 dark:border-dark-700/50 mb-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(var(--primary),0.1)] transition-all duration-500 cursor-default hover:-translate-y-1">
              <Sparkles className="w-4 h-4 text-primary group-hover:rotate-12 transition-transform duration-500" />
              <span className="text-sm font-bold bg-gradient-to-r from-dark-800 to-dark-500 dark:from-white dark:to-dark-300 bg-clip-text text-transparent tracking-widest uppercase">
                Premium Source Code
              </span>
            </div>

            {/* M3 Style Heading */}
            <h1 className="text-5xl md:text-7xl font-extrabold text-dark-900 dark:text-white tracking-tight mb-8 drop-shadow-sm">
              Explore Our <span className="text-primary relative inline-block">
                Source Code
                <div className="absolute -bottom-2 left-0 w-full h-1.5 bg-primary/20 rounded-full" />
              </span>
            </h1>

            <p className="text-dark-600 dark:text-dark-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto font-medium">
              Dive into the core architecture. Browse our public repositories, discover the code powering our products, and contribute to the modern ecosystem.
            </p>
          </div>
        </div>
      </section>

      {/* M3 ELEVATED REPOSITORIES GRID */}
      <section className="relative py-24 bg-dark-50/30 dark:bg-dark-950/30 border-t border-dark-100/50 dark:border-dark-800/50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:gap-10 gap-8">
            {sourceProducts.map((product) => (
              <div
                key={product.id}
                className="group relative overflow-hidden rounded-[2.5rem] border border-dark-100/80 dark:border-dark-800/80 bg-white dark:bg-dark-900 p-8 shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_20px_40px_-15px_rgba(255,255,255,0.05)] hover:-translate-y-2 hover:scale-[1.01] transition-all duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)] flex flex-col h-full"
              >
                {/* Animated Shimmer Line */}
                <div className="absolute top-0 left-[-100%] w-[200%] h-1.5 bg-gradient-to-r from-transparent via-primary/80 to-transparent group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />

                <div className="flex items-center justify-between gap-4 mb-8">
                  <div className="flex items-center gap-3 text-primary">
                    <div className="p-2.5 rounded-2xl bg-primary/10 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                      <Code2 className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-extrabold uppercase tracking-widest text-dark-800 dark:text-dark-200 group-hover:text-primary transition-colors">
                      Repository
                    </span>
                  </div>
                  <span className="text-[11px] font-bold px-4 py-2 rounded-full bg-dark-50 dark:bg-dark-800 text-dark-500 dark:text-dark-400 border border-dark-200/50 dark:border-dark-700/50 group-hover:border-primary/30 group-hover:text-primary transition-colors duration-500">
                    PUBLIC
                  </span>
                </div>

                <h2 className="text-3xl font-bold text-dark-900 dark:text-white mb-4 group-hover:text-primary transition-colors duration-300">
                  {product.name}
                </h2>

                <p className="text-base text-dark-600 dark:text-dark-400 mb-10 leading-relaxed flex-grow">
                  {product.description}
                </p>

                <div className="mt-auto flex flex-col gap-5">
                  {/* M3 Surface Container for Developer Info */}
                  <div className="flex items-center justify-between p-4 rounded-3xl bg-dark-50/50 dark:bg-dark-950/50 border border-dark-100/50 dark:border-dark-800/50 group-hover:bg-primary/5 transition-colors duration-500">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-white dark:bg-dark-900 flex items-center justify-center text-dark-500 shadow-sm border border-dark-100 dark:border-dark-800 group-hover:text-primary group-hover:scale-105 transition-all duration-300">
                        <UserRound className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-[11px] font-bold text-dark-400 dark:text-dark-500 uppercase tracking-widest mb-0.5">Author</p>
                        <p className="text-sm font-bold text-dark-900 dark:text-white">{developerName}</p>
                      </div>
                    </div>
                    <a
                      href={developerProfile}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link flex items-center justify-center w-12 h-12 rounded-2xl bg-white dark:bg-dark-900 text-dark-400 hover:text-white hover:bg-primary shadow-sm border border-dark-100 dark:border-dark-800 hover:border-primary transition-all duration-300 active:scale-90"
                      title="View Developer Profile"
                    >
                      <ArrowUpRight className="w-5 h-5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-300" />
                    </a>
                  </div>

                  {/* M3 Interactive Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href={product.sourceCodeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative overflow-hidden group/btn flex-1 flex items-center justify-center gap-2.5 px-6 py-4 rounded-2xl bg-dark-900 dark:bg-white text-white dark:text-dark-900 font-bold transition-all duration-300 hover:shadow-lg hover:shadow-dark-900/20 dark:hover:shadow-white/10 hover:-translate-y-1 active:scale-[0.97]"
                    >
                      <span className="absolute inset-0 w-full h-full bg-white/20 dark:bg-dark-900/10 scale-x-0 group-hover/btn:scale-x-100 origin-left transition-transform duration-500 ease-out" />
                      <Github className="w-5 h-5 relative z-10 group-hover/btn:scale-110 transition-transform duration-300" />
                      <span className="relative z-10 tracking-wide">View on GitHub</span>
                    </a>
                    
                    <Link
                      href={`/products/${product.slug}`}
                      className="group/link flex-1 flex items-center justify-center gap-2.5 px-6 py-4 rounded-2xl bg-white dark:bg-dark-900 text-dark-900 dark:text-white font-bold border-2 border-dark-100 dark:border-dark-800 hover:border-dark-300 dark:hover:border-dark-600 hover:bg-dark-50 dark:hover:bg-dark-800 transition-all duration-300 hover:-translate-y-1 active:scale-[0.97]"
                    >
                      <span className="tracking-wide">Product Details</span>
                      <ExternalLink className="w-5 h-5 text-dark-400 group-hover/link:text-dark-900 dark:group-hover/link:text-white group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-all duration-300" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Animated Premium Empty State */}
          {sourceProducts.length === 0 && (
            <div className="text-center py-32 px-4 bg-gradient-to-b from-white/50 to-transparent dark:from-dark-900/30 dark:to-transparent backdrop-blur-xl rounded-[3rem] border border-dark-100 dark:border-dark-800/50 mt-12 animate-[fadeIn_1s_ease-out]">
              <div className="w-24 h-24 bg-dark-50 dark:bg-dark-800/50 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner relative group">
                <div className="absolute inset-0 rounded-full border-2 border-primary/20 animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite]" />
                <Github className="w-10 h-10 text-dark-400 dark:text-dark-500 group-hover:scale-110 transition-transform duration-500" />
              </div>
              <h3 className="text-3xl font-extrabold text-dark-900 dark:text-white mb-4 tracking-tight">No Repositories Yet</h3>
              <p className="text-dark-500 dark:text-dark-400 max-w-md mx-auto text-lg font-medium">
                We are preparing our codebases. Public repositories will appear here once they are officially released.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  )
}