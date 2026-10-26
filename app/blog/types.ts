export interface Source {
  label: string
  url: string
}

export interface BlogPost {
  id: string
  slug: string
  title: string
  /**
   * Optional SEO title. Falls back to `title`. Use this when the on-page H1
   * should read naturally but the <title> needs the query in it — a headline
   * and a title tag are not the same job.
   */
  seoTitle?: string
  description: string
  date: string
  updated?: string
  author: string
  readTime: string
  category: string
  keywords: string[]
  featuredImage: string
  /** Amazon product keys from app/lib/affiliate.ts, rendered as a gear block. */
  products?: string[]
  /**
   * Primary sources. Every factual claim in these posts should trace to one of
   * these, and publishing the list is the point — it is the difference between
   * this and the national cost-estimator pages we are competing with.
   */
  sources?: Source[]
  content: string
}
