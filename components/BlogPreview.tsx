'use client';

import Link from 'next/link';
import { BookOpen, ArrowRight } from 'lucide-react';

export default function BlogPreview() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <BookOpen className="w-6 h-6 text-sage-green" />
            <h2 className="text-3xl sm:text-4xl font-bold">
              From the <span className="text-sage-green">Blog</span>
            </h2>
          </div>
          <p className="text-textSecondary text-lg max-w-2xl mx-auto">
            Expert guides on off-grid solar systems, land clearing, water management, and sustainable rural property development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <article
            className="bg-bgCard border border-sage-green/20 rounded-xl p-6 hover:border-sage-green/40 transition-all duration-300 group cursor-pointer hover:shadow-lg hover:shadow-sage-green/10"
          >
            <Link href="/blog/off-grid-solar-sizing-guide" className="block h-full">
              <div className="flex flex-col h-full">
                <span className="text-xs font-semibold text-sage-green uppercase tracking-wider">
                  Off-Grid Living
                </span>
                <h3 className="text-2xl font-bold mt-3 mb-3 group-hover:text-sage-green transition-colors">
                  Off-Grid Solar System Sizing Guide for Cochise County
                </h3>
                <p className="text-textSecondary mb-6 flex-grow">
                  Learn how to size a solar system for off-grid living in Arizona, including sun hours, battery calculations, and cost estimates.
                </p>
                <div className="flex items-center gap-2 text-sage-green group-hover:gap-3 transition-all">
                  Read Article
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          </article>

          <article
            className="bg-bgCard border border-sage-green/20 rounded-xl p-6 hover:border-sage-green/40 transition-all duration-300 group cursor-pointer hover:shadow-lg hover:shadow-sage-green/10"
          >
            <Link href="/blog/off-grid-land-clearing-checklist" className="block h-full">
              <div className="flex flex-col h-full">
                <span className="text-xs font-semibold text-sage-green uppercase tracking-wider">
                  Land Preparation
                </span>
                <h3 className="text-2xl font-bold mt-3 mb-3 group-hover:text-sage-green transition-colors">
                  Preparing Your Off-Grid Property: Land Clearing Checklist
                </h3>
                <p className="text-textSecondary mb-6 flex-grow">
                  Complete step-by-step checklist for preparing off-grid land, from site survey through final grading and utilities.
                </p>
                <div className="flex items-center gap-2 text-sage-green group-hover:gap-3 transition-all">
                  Read Article
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          </article>
        </div>

        <div
          className="text-center"
        >
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sage-green hover:gap-3 transition-all font-semibold"
          >
            View all articles
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
