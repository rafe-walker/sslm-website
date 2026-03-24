'use client'

import Link from 'next/link'
import { blogPosts } from './posts'
import { motion } from 'framer-motion'
import { ArrowRight, BookOpen, Mountain } from 'lucide-react'

export default function BlogPage() {
  return (
    <div className="bg-bg text-textPrimary">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-bg/95 backdrop-blur-sm border-b border-accent/10">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition">
            <Mountain className="w-8 h-8 text-accent" />
            <span className="text-lg font-bold">Sulfur Springs Land Management</span>
          </Link>
          <Link href="/" className="text-textPrimary hover:text-accent transition">
            ← Back Home
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <BookOpen className="w-8 h-8 text-accent" />
              <h1 className="text-4xl md:text-5xl font-bold">
                Land Management <span className="text-accent">Blog</span>
              </h1>
            </div>
            <p className="text-xl text-textPrimary/80">
              Expert guides on off-grid solar systems, land clearing, water management, and sustainable rural property development in the Sulfur Springs Valley and Cochise County.
            </p>
          </motion.div>

          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-bgCard border border-accent/20 rounded-xl p-6 hover:border-accent/40 transition-all duration-300 group cursor-pointer hover:shadow-lg hover:shadow-accent/10"
              >
                <Link href={`/blog/${post.slug}`} className="block h-full">
                  <div className="flex flex-col h-full">
                    {post.featuredImage && (
                      <div className="mb-4 -mx-6 -mt-6 rounded-t-xl overflow-hidden">
                        <img src={post.featuredImage} alt={post.title} className="w-full h-48 object-cover" />
                      </div>
                    )}
                    <div className="mb-4">
                      <span className="text-xs font-semibold text-accent uppercase tracking-wider">
                        {post.category}
                      </span>
                      <div className="flex items-center gap-4 mt-1">
                        <p className="text-xs text-textPrimary/60">{post.date}</p>
                        <p className="text-xs text-textPrimary/60">{post.readTime}</p>
                        <p className="text-xs text-textPrimary/60">By {post.author}</p>
                      </div>
                    </div>

                    <h2 className="text-2xl font-bold mb-3 group-hover:text-accent transition-colors">
                      {post.title}
                    </h2>

                    <p className="text-textPrimary/80 mb-6 flex-grow">
                      {post.description}
                    </p>

                    <div className="flex items-center gap-2 text-accent group-hover:gap-3 transition-all">
                      Read Article
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-bgCard border-t border-accent/10 py-20 px-4"
      >
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Prepare Your <span className="text-accent">Property?</span>
          </h2>
          <p className="text-textPrimary/80 mb-8">
            Whether you need land clearing, grading, solar system consultation, or complete off-grid property development, Sulfur Springs Land Management is here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/#contact"
              className="bg-accent text-bg font-semibold px-6 py-3 rounded-lg transition-all hover:shadow-lg hover:shadow-accent/30 inline-flex items-center justify-center gap-2"
            >
              Contact SSLM for a Consultation
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-bg/50 border-t border-accent/10 py-8 px-4">
        <div className="max-w-7xl mx-auto text-center text-textPrimary/60 text-sm">
          <p>&copy; 2026 Sulfur Springs Land Management. All rights reserved. | <Link href="/privacy" className="hover:text-accent">Privacy</Link> | <Link href="/terms" className="hover:text-accent">Terms</Link></p>
        </div>
      </footer>
    </div>
  )
}
