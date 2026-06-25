import { Metadata } from 'next'
import Link from 'next/link'
import { Github, ExternalLink, Code2 } from 'lucide-react'
import { products } from '@/lib/products'

export const metadata: Metadata = {
  title: 'GitHub Source Code',
  description: 'Browse the GitHub source code repositories for our products.',
}

const sourceProducts = products.filter((product) => product.sourceCodeUrl)

export default function GitHubSourceCodePage() {
  return (
    <>
      <section className="gradient-bg py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-primary-50 dark:bg-primary-900/20 rounded-xl flex items-center justify-center">
                <Github className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-dark-500">GitHub</p>
                <h1 className="text-3xl md:text-4xl font-bold text-dark-900 dark:text-white">
                  Source Code
                </h1>
              </div>
            </div>
            <p className="text-dark-600 dark:text-dark-400">
              Browse the GitHub repositories for the products that have public source code available.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white dark:bg-dark-950">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-6">
            {sourceProducts.map((product) => (
              <div key={product.id} className="card p-6 border border-dark-100 dark:border-dark-800">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl overflow-hidden bg-dark-50 dark:bg-dark-900 flex items-center justify-center flex-shrink-0">
                    <img src={product.icon} alt={`${product.name} logo`} className="w-full h-full object-contain p-2" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2 text-primary">
                      <Code2 className="w-4 h-4" />
                      <span className="text-xs font-semibold uppercase tracking-wide">Source Code</span>
                    </div>
                    <h2 className="text-xl font-bold text-dark-900 dark:text-white mb-1">
                      {product.name}
                    </h2>
                    <p className="text-sm text-dark-600 dark:text-dark-400 mb-4">
                      {product.description}
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <Link
                        href={`/products/${product.slug}`}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-dark-100 dark:bg-dark-800 text-dark-800 dark:text-dark-200 hover:bg-dark-200 dark:hover:bg-dark-700 transition-colors"
                      >
                        Product Page
                      </Link>
                      <a
                        href={product.sourceCodeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-dark-900 text-white hover:bg-dark-800 transition-colors"
                      >
                        <Github className="w-4 h-4" />
                        Open GitHub
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
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