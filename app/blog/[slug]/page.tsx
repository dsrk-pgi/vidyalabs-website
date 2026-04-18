'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { Calendar, Clock, User, ArrowLeft, Tag, Share2 } from 'lucide-react'
import { getBlogPost, getAllBlogPosts } from '../blogData'
import ReactMarkdown from 'react-markdown'

export default function BlogPostPage() {
  const params = useParams()
  const slug = params.slug as string
  const post = getBlogPost(slug)
  const allPosts = getAllBlogPosts()
  const relatedPosts = allPosts.filter(p => p.slug !== slug).slice(0, 3)

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Blog Post Not Found
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            The blog post you&apos;re looking for doesn&apos;t exist.
          </p>
          <Link href="/blog" className="btn-primary">
            Back to Blog
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-12 overflow-hidden bg-gradient-to-br from-primary-600 via-purple-600 to-pink-600">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        
        <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <Link 
              href="/blog"
              className="inline-flex items-center gap-2 text-white/90 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Blog
            </Link>

            <div className="mb-6">
              <span className="px-4 py-2 bg-white/20 backdrop-blur-sm text-white text-sm font-semibold rounded-full">
                {post.category}
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-white/90">
              <div className="flex items-center gap-2">
                <User className="w-5 h-5" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="relative -mt-20 mb-12">
        <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <div className="relative h-64 sm:h-96 rounded-2xl overflow-hidden shadow-2xl">
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${post.image})` }}
              ></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="section-padding bg-white dark:bg-gray-950">
        <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-4 gap-12">
              {/* Sidebar */}
              <aside className="lg:col-span-1">
                <div className="sticky top-24 space-y-6">
                  {/* Tags */}
                  <div className="glass-card p-6">
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                      <Tag className="w-5 h-5" />
                      Tags
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag, idx) => (
                        <span 
                          key={idx}
                          className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Share */}
                  <div className="glass-card p-6">
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                      <Share2 className="w-5 h-5" />
                      Share
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Share this article with your network
                    </p>
                  </div>
                </div>
              </aside>

              {/* Main Content */}
              <article className="lg:col-span-3">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="prose prose-lg dark:prose-invert max-w-none
                    prose-headings:font-bold prose-headings:text-gray-900 dark:prose-headings:text-white
                    prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-p:leading-relaxed
                    prose-a:text-primary-600 dark:prose-a:text-primary-400 prose-a:no-underline hover:prose-a:underline
                    prose-strong:text-gray-900 dark:prose-strong:text-white
                    prose-ul:text-gray-700 dark:prose-ul:text-gray-300
                    prose-ol:text-gray-700 dark:prose-ol:text-gray-300
                    prose-code:text-primary-600 dark:prose-code:text-primary-400
                    prose-pre:bg-gray-900 dark:prose-pre:bg-gray-800
                  "
                >
                  <ReactMarkdown>{post.content}</ReactMarkdown>
                </motion.div>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="section-padding bg-gray-50 dark:bg-gray-900">
          <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Related Articles
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {relatedPosts.map((relatedPost, index) => (
                <motion.article
                  key={relatedPost.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass-card overflow-hidden group hover:shadow-2xl transition-all duration-300"
                >
                  <div className="relative h-40 overflow-hidden">
                    <div 
                      className="absolute inset-0 bg-cover bg-center transform group-hover:scale-110 transition-transform duration-500"
                      style={{ backgroundImage: `url(${relatedPost.image})` }}
                    ></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                      {relatedPost.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                      {relatedPost.excerpt}
                    </p>
                    <Link 
                      href={`/blog/${relatedPost.slug}`}
                      className="text-primary-600 dark:text-primary-400 font-semibold text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all"
                    >
                      Read More
                      <ArrowLeft className="w-4 h-4 rotate-180" />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-primary-600 via-purple-600 to-pink-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Let&apos;s discuss how our solutions can help you achieve your goals.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/contact" 
                className="btn-primary bg-white text-primary-600 hover:bg-gray-100"
              >
                Get in Touch
              </Link>
              <Link 
                href="/blog" 
                className="px-6 py-3 bg-white/10 backdrop-blur-sm text-white rounded-lg font-semibold border-2 border-white/30 hover:bg-white/20 transition-all duration-300"
              >
                More Articles
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
