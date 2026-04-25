'use client'

import Link from 'next/link'
import { blogPosts, BlogPost } from '../posts'
import { motion } from 'framer-motion'
import { ArrowLeft, BookOpen, Share2, Mountain } from 'lucide-react'

export default function BlogPostClient({ post }: { post: BlogPost }) {
  return (
    <div className="bg-bg text-textPrimary">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-bg/95 backdrop-blur-sm border-b border-accent/10" aria-label="Blog navigation">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition" aria-label="Sulfur Springs Land Management home">
            <Mountain className="w-8 h-8 text-accent" />
            <span className="text-lg font-bold">Sulfur Springs Land Management</span>
          </Link>
          <Link
            href="/blog"
            className="flex items-center gap-2 text-textPrimary hover:text-accent transition"
            aria-label="Back to blog"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </Link>
        </div>
      </nav>

      {/* Article */}
      <article className="pt-32 pb-20 px-4">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: post.title,
          description: post.description,
          image: `https://sulfurspringslandmanagement.com${post.featuredImage}`,
          datePublished: post.date,
          dateModified: post.date,
          author: { '@type': 'Person', name: post.author },
          publisher: { '@type': 'Organization', name: 'Sulfur Springs Land Management', url: 'https://sulfurspringslandmanagement.com', logo: { '@type': 'ImageObject', url: 'https://sulfurspringslandmanagement.com/logo.png' } },
          mainEntityOfPage: { '@type': 'WebPage', '@id': `https://sulfurspringslandmanagement.com/blog/${post.slug}` },
          keywords: post.keywords.join(', '),
        }) }} />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          {/* Header */}
          <div className="mb-12 pb-12 border-b border-accent/10">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xs font-semibold text-accent uppercase tracking-wider">
                {post.category}
              </span>
              <span className="text-xs text-textPrimary/60">•</span>
              <span className="text-xs text-textPrimary/60">{post.date}</span>
              <span className="text-xs text-textPrimary/60">•</span>
              <span className="text-xs text-textPrimary/60">{post.readTime}</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {post.title}
            </h1>

            {post.featuredImage && (
              <div className="mb-8 rounded-xl overflow-hidden border border-borderColor">
                <img src={post.featuredImage} alt={post.title} className="w-full h-64 md:h-80 object-cover" />
              </div>
            )}

            <p className="text-xl text-textPrimary/80 mb-6">
              {post.description}
            </p>

            <div className="flex items-center gap-4 text-sm text-textPrimary/60">
              <span>By {post.author}</span>
              <button className="flex items-center gap-2 text-accent hover:text-textPrimary transition" aria-label="Share this article">
                <Share2 className="w-4 h-4" />
                Share
              </button>
            </div>
          </div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="prose prose-invert max-w-none mb-12"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-bgCard border border-accent/20 rounded-xl p-8 my-12"
          >
            <div className="flex items-start gap-4">
              <BookOpen className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-2xl font-bold mb-3">
                  Ready to Develop Your Land?
                </h3>
                <p className="text-textPrimary/80 mb-6">
                  Sulfur Springs Land Management specializes in land clearing, grading, solar system consultation, and comprehensive off-grid property development. Let&apos;s turn your land into your dream off-grid property.
                </p>
                <a
                  href="/#contact"
                  className="bg-accent text-bg font-semibold px-6 py-3 rounded-lg transition-all hover:shadow-lg hover:shadow-accent/30 inline-block"
                >
                  Contact SSLM Today
                </a>
              </div>
            </div>
          </motion.div>

          {/* Related Posts */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-16 pt-12 border-t border-accent/10"
          >
            <h3 className="text-2xl font-bold mb-8">More from the Blog</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {blogPosts
                .filter((p) => p.id !== post.id)
                .map((relatedPost) => (
                  <Link
                    key={relatedPost.id}
                    href={`/blog/${relatedPost.slug}`}
                    className="bg-bgCard border border-accent/20 rounded-xl p-6 hover:border-accent/40 transition-all duration-300 group hover:shadow-lg hover:shadow-accent/10"
                  >
                    <span className="text-xs font-semibold text-accent uppercase tracking-wider">
                      {relatedPost.category}
                    </span>
                    <h4 className="text-lg font-bold mt-2 mb-2 group-hover:text-accent transition-colors">
                      {relatedPost.title}
                    </h4>
                    <p className="text-textPrimary/80 text-sm">
                      {relatedPost.description}
                    </p>
                  </Link>
                ))}
            </div>
          </motion.div>
        </motion.div>
      </article>

      {/* Footer */}
      <footer className="bg-bg/50 border-t border-accent/10 py-8 px-4">
        <div className="max-w-7xl mx-auto text-center text-textPrimary/60 text-sm">
          <p>&copy; 2026 Sulfur Springs Land Management. All rights reserved. | <Link href="/privacy" className="hover:text-accent">Privacy</Link> | <Link href="/terms" className="hover:text-accent">Terms</Link></p>
        </div>
      </footer>
    </div>
  )
}
