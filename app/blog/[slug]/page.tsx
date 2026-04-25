import { notFound } from 'next/navigation'
import { blogPosts } from '../posts'
import BlogPostClient from './BlogPostClient'
import type { Metadata } from 'next'

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)
  if (!post) return {}

  return {
    title: `${post.title} | Sulfur Springs Land Management`,
    description: post.description,
    alternates: {
      canonical: `https://sulfurspringslandmanagement.com/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://sulfurspringslandmanagement.com/blog/${post.slug}`,
      type: 'article',
      images: [
        {
          url: `https://sulfurspringslandmanagement.com${post.featuredImage}`,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
    },
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) {
    notFound()
  }

  return <BlogPostClient post={post} />
}
