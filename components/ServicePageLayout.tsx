'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Mountain, ArrowRight, ArrowLeft, LucideIcon } from 'lucide-react'

interface ServiceFeature { title: string; description: string }
interface ServiceProcess { step: number; title: string; description: string }
interface ServiceDeliverable { item: string }

interface ServicePageLayoutProps {
  icon: LucideIcon
  title: string
  accentWord: string
  subtitle: string
  heroDescription: string
  overview: string[]
  features: ServiceFeature[]
  process: ServiceProcess[]
  deliverables: ServiceDeliverable[]
  equipment: string[]
  idealFor: string[]
  ctaTitle: string
  ctaDescription: string
}

export default function ServicePageLayout({ icon: Icon, title, accentWord, subtitle, heroDescription, overview, features, process, deliverables, equipment, idealFor, ctaTitle, ctaDescription }: ServicePageLayoutProps) {
  return (
    <div className="bg-bg text-textPrimary">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-bg/95 backdrop-blur-sm border-b border-borderColor">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition">
            <Mountain className="w-8 h-8 text-accent" />
            <span className="text-lg font-bold">Sulfur Springs Land Management</span>
          </Link>
          <Link href="/#services" className="text-textPrimary hover:text-accent transition flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" /> All Services
          </Link>
        </div>
      </nav>

      <section className="pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 border border-accent/30 mb-6">
              <Icon className="w-8 h-8 text-accent" />
            </div>
            <p className="text-accent font-semibold uppercase tracking-wider text-sm mb-3">{subtitle}</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">{title} <span className="text-accent">{accentWord}</span></h1>
            <p className="text-xl text-textPrimary/80 max-w-2xl mx-auto">{heroDescription}</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <h2 className="text-3xl font-bold mb-8">Overview</h2>
            <div className="space-y-4">{overview.map((p, i) => <p key={i} className="text-textPrimary/80 leading-relaxed text-lg">{p}</p>)}</div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-4 bg-bgCard border-y border-borderColor">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <h2 className="text-3xl font-bold mb-4 text-center">What We Deliver</h2>
            <p className="text-textSecondary text-center mb-12 max-w-2xl mx-auto">Every engagement is tailored to your property. Here is what you can expect.</p>
            <div className="grid md:grid-cols-2 gap-8">
              {features.map((f, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="bg-bg border border-borderColor rounded-lg p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-accent font-bold text-sm">{i + 1}</span>
                    </div>
                    <div><h3 className="text-xl font-bold mb-2">{f.title}</h3><p className="text-textPrimary/80">{f.description}</p></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <h2 className="text-3xl font-bold mb-4 text-center">Our Process</h2>
            <p className="text-textSecondary text-center mb-12 max-w-xl mx-auto">From consultation to final walkthrough, every project follows a proven workflow.</p>
            <div className="space-y-8">
              {process.map((s, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-accent text-bg font-bold flex items-center justify-center flex-shrink-0">{s.step}</div>
                    {i < process.length - 1 && <div className="w-px h-full bg-borderColor mt-2" />}
                  </div>
                  <div className="pb-8"><h3 className="text-xl font-bold mb-2">{s.title}</h3><p className="text-textPrimary/80">{s.description}</p></div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-4 bg-bgCard border-y border-borderColor">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="bg-bg border border-borderColor rounded-lg p-6">
              <h3 className="text-xl font-bold text-accent mb-4">Deliverables</h3>
              <ul className="space-y-3">{deliverables.map((d, i) => <li key={i} className="flex items-start gap-2 text-textPrimary/80"><span className="text-accent mt-1">&#10003;</span>{d.item}</li>)}</ul>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} className="bg-bg border border-borderColor rounded-lg p-6">
              <h3 className="text-xl font-bold text-accent mb-4">Equipment</h3>
              <ul className="space-y-3">{equipment.map((e, i) => <li key={i} className="flex items-start gap-2 text-textPrimary/80"><span className="text-accent mt-1">&#9670;</span>{e}</li>)}</ul>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }} className="bg-bg border border-borderColor rounded-lg p-6">
              <h3 className="text-xl font-bold text-accent mb-4">Ideal For</h3>
              <ul className="space-y-3">{idealFor.map((item, i) => <li key={i} className="flex items-start gap-2 text-textPrimary/80"><span className="text-accent mt-1">&#9654;</span>{item}</li>)}</ul>
            </motion.div>
          </div>
        </div>
      </section>

      <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">{ctaTitle}</h2>
          <p className="text-textPrimary/80 mb-8">{ctaDescription}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#contact" className="bg-accent text-bg font-semibold px-6 py-3 rounded-lg transition-all hover:shadow-lg hover:shadow-accent/30 inline-flex items-center justify-center gap-2">Request a Quote <ArrowRight className="w-4 h-4" /></Link>
            <Link href="/#services" className="border-2 border-accent text-accent font-semibold px-6 py-3 rounded-lg transition-all hover:bg-accent/10 inline-flex items-center justify-center gap-2">View All Services</Link>
          </div>
        </div>
      </motion.section>

      <footer className="bg-bgCard border-t border-borderColor py-8 px-4">
        <div className="max-w-7xl mx-auto text-center text-textPrimary/60 text-sm">
          <p>&copy; 2026 Sulfur Springs Land Management. All rights reserved. | <Link href="/privacy" className="hover:text-accent">Privacy</Link> | <Link href="/terms" className="hover:text-accent">Terms</Link></p>
        </div>
      </footer>
    </div>
  )
}