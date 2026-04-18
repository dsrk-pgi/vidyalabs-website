'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Sparkles, Zap } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-gray-950 dark:via-blue-950 dark:to-purple-950">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-primary-500/20 to-purple-500/20 rounded-full blur-3xl animate-float" />
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8 py-32 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm rounded-full text-sm font-medium text-primary-600 dark:text-primary-400 border border-primary-200 dark:border-primary-800">
              <Sparkles className="w-4 h-4" />
              AI-Powered Software Solutions
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold mb-6 leading-tight"
          >
            Transforming Ideas into{' '}
            <span className="gradient-text">Intelligent Digital Solutions</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto"
          >
            AI-powered, scalable, future-ready software solutions for schools, businesses, startups, and enterprises
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link href="/services" className="btn-primary group">
              Explore Services
              <ArrowRight className="w-5 h-5 ml-2 inline-block group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/products" className="btn-secondary group">
              <Zap className="w-5 h-5 mr-2 inline-block" />
              View Live Demos
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-20"
          >
            <div className="relative glass-card p-8 max-w-4xl mx-auto">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-primary-500 to-purple-600 rounded-2xl blur-2xl opacity-50" />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl blur-2xl opacity-50" />
              
              <div className="relative grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold gradient-text mb-2">500+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Projects Delivered</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold gradient-text mb-2">200+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold gradient-text mb-2">50+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Team Members</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold gradient-text mb-2">99%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Client Satisfaction</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full p-1">
          <div className="w-1.5 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mx-auto animate-pulse" />
        </div>
      </div>
    </section>
  )
}
