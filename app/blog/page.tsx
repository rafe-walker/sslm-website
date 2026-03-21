'use client'

import Link from 'next/link'
import { blogPosts } from './posts'
import { motion } from 'framer-motion'
import { ArrowRight, BookOpen, Mountain } from 'lucide-react'

export default function BlogPage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  return (
    <div className="bg-bg text-textPrimary">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-bg/95 backdrop-blur-sm border-b border-sage-green/10">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition">
            <Mountain className="w-8 h-8 text-sage-green" />
            <span className="text-lg font-bold">Cochise Land Management</span>
          </Link>
          <Link href="/" className="text-textPrimary hover:text-sage-green transition">
            ← Back Home
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <motion.section
        initial="initial"
        animate="animate"
        variants={staggerContainer}
        className="pt-32 pb-20 px-4"
      >
        <div className="max-w-4xl mx-auto">
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <BookOpen className="w-8 h-8 text-sage-green" />
              <h1 className="text-4xl md:text-5xl font-bold">
                Land Management <span className="text-sage-green">Blog</span>
              </h1>
            </div>
            <p className="text-xl text-textPrimary/80">
              Expert guides on off-grid solar systems, land clearing, water management, and sustainable rural property development in Cochise County.
            </p>
          </motion.div>

          {/* Blog Posts Grid */}
          <motion.div
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-8"
          >
            {blogPosts.map((post) => (
              <motion.article
                key={post.id}
                variants={fadeInUp}
                className="bg-card border border-sage-green/20 rounded-xl p-6 hover:border-sage-green/40 transition-all duration-300 group cursor-pointer hover:shadow-lg hover:shadow-sage-green/10"
              >
                <Link href={`/blog/${post.slug}`} className="block h-full">
                  <div className="flex flex-col h-full">
                    <div className="mb-4">
                      <span className="text-xs font-semibold text-sage-green uppercase tracking-wider">
                        {post.category}
                      </span>
                      <p className="text-xs text-textPrimary/60 mt-1">{post.date}</p>
                    </div>

                    <h2 className="text-2xl font-bold mb-3 group-hover:text-sage-green transition-colors">
                      {post.title}
                    </h2>

                    <p className="text-textPrimary/80 mb-6 flex-grow">
                      {post.description}
                    </p>

                    <div className="flex items-center gap-2 text-sage-green group-hover:gap-3 transition-all">
                      Read Article
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-card border-t border-sage-green/10 py-20 px-4"
      >
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Prepare Your <span className="text-sage-green">Property?</span>
          </h2>
          <p className="text-textPrimary/80 mb-8">
            Whether you need land clearing, grading, solar system consultation, or complete off-grid property development, Cochise Land Management is here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/#contact"
              className="bg-sage-green text-bg font-semibold px-6 py-3 rounded-lg transition-all hover:shadow-lg hover:shadow-sage-green/30 inline-flex items-center justify-center gap-2"
            >
              Contact CLM for a Consultation
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-bg/50 border-t border-sage-green/10 py-8 px-4">
        <div className="max-w-7xl mx-auto text-center text-textPrimary/60 text-sm">
          <p>&copy; 2026 Cochise Land Management. All rights reserved. | <Link href="/privacy" className="hover:text-sage-green">Privacy</Link> | <Link href="/terms" className="hover:text-sage-green">Terms</Link></p>
        </div>
      </footer>
    </div>
  )
}
