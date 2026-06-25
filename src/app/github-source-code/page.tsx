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
      <section className="relative gradient-bg py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-32 -right-24 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        </div>

        <div className="container-custom relative">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 dark:bg-dark-900/80 backdrop-blur-sm border border-dark-100 dark:border-dark-800 mb-6 shadow-lg shadow-dark-900/5">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-dark-600 dark:text-dark-300">Source code hub</span>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-end">
            <div className="lg:col-span-7 max-w-2xl">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-primary-50 dark:bg-primary-900/20 rounded-xl flex items-center justify-center ring-8 ring-primary/5">
                  <Github className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-dark-500">GitHub</p>
                  <h1 className="text-3xl md:text-4xl font-bold text-dark-900 dark:text-white">
                    Source Code
                  </h1>
                </div>
              </div>

              <p className="text-dark-600 dark:text-dark-400 text-lg leading-relaxed">
                Browse the public source code repositories for the products that have GitHub links available.
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-white/85 dark:bg-dark-900/85 backdrop-blur-sm border border-dark-100 dark:border-dark-800 rounded-3xl p-6 shadow-xl shadow-dark-900/5">
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-dark-900 text-white flex items-center justify-center font-semibold">
                    GH
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-dark-500 mb-1">Developer</p>
                    <p className="text-lg font-semibold text-dark-900 dark:text-white">{developerName}</p>
                  </div>
                </div>
                <a
                  href={developerProfile}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                >
                  github.com/gulraiz12ab
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white dark:bg-dark-950">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-6">
            {sourceProducts.map((product) => (
              <div
                key={product.id}
                className="group relative overflow-hidden rounded-3xl border border-dark-100 dark:border-dark-800 bg-white dark:bg-dark-900 p-6 shadow-sm hover:shadow-xl hover:shadow-primary/10 transition-all duration-300"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-primary-500 to-primary-700" />

                <div className="flex items-center justify-between gap-4 mb-4">
                  <div className="flex items-center gap-2 text-primary">
                    <Code2 className="w-4 h-4" />
                    <span className="text-xs font-semibold uppercase tracking-[0.2em]">source code</span>
                  </div>
                  <span className="text-xs font-medium px-3 py-1 rounded-full bg-primary-50 dark:bg-primary-900/20 text-primary">
                    Public Repo
                  </span>
                </div>

                <h2 className="text-2xl font-bold text-dark-900 dark:text-white mb-2 group-hover:text-primary transition-colors">
                  {product.name}
                </h2>

                <p className="text-sm text-dark-600 dark:text-dark-400 mb-5 leading-relaxed">
                  {product.description}
                </p>

                <div className="rounded-2xl bg-dark-50 dark:bg-dark-950 border border-dark-100 dark:border-dark-800 p-4 mb-5">
                  <div className="flex items-center gap-2 mb-2 text-dark-500 text-xs uppercase tracking-wide">
                    <UserRound className="w-4 h-4" />
                    Developer
                  </div>
                  <p className="font-semibold text-dark-900 dark:text-white mb-1">{developerName}</p>
                  <a
                    href={developerProfile}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-primary hover:underline inline-flex items-center gap-1"
                  >
                    github.com/gulraiz12ab
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>

                <div className="rounded-2xl bg-dark-50 dark:bg-dark-950 border border-dark-100 dark:border-dark-800 p-4 mb-5">
                  <div className="text-xs uppercase tracking-wide text-dark-500 mb-2">source code url</div>
                  <div className="text-sm text-dark-700 dark:text-dark-300 break-all">
                    {product.sourceCodeUrl}
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  <Link
                    href={`/products/${product.slug}`}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-dark-100 dark:bg-dark-800 text-dark-800 dark:text-dark-200 hover:bg-dark-200 dark:hover:bg-dark-700 transition-colors"
                  >
                    Product Page
                  </Link>
                  <a
                    href={product.sourceCodeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-dark-900 text-white hover:bg-dark-800 transition-colors"
                  >
                    Open GitHub
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {sourceProducts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-dark-600 dark:text-dark-400">No source code repositories are available yet.</p>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
