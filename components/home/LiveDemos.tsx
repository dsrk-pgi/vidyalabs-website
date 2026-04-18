'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Play, ExternalLink } from 'lucide-react'

const demos = [
  {
    category: 'Education',
    title: 'Smart Campus Demo',
    description: 'Experience our complete campus management system',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=400&fit=crop',
    link: '/demos/smart-campus',
    color: 'from-blue-600 to-cyan-600'
  },
  {
    category: 'Restaurant',
    title: 'eAathithya POS',
    description: 'Try our restaurant management and POS system',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop',
    link: '/demos/eaathithya',
    color: 'from-orange-600 to-red-600'
  },
  {
    category: 'Business Automation',
    title: 'ERP System',
    description: 'Explore our enterprise resource planning solution',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
    link: '/demos/erp',
    color: 'from-purple-600 to-pink-600'
  },
]

export default function LiveDemos() {
  return (
    <section className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="container-custom mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-display font-bold mb-4">
            Try Our <span className="gradient-text">Live Demos</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Experience our solutions firsthand with interactive demos
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {demos.map((demo, index) => (
            <motion.div
              key={demo.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card group overflow-hidden hover:scale-105 transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden rounded-lg mb-4">
                <div className={`absolute inset-0 bg-gradient-to-br ${demo.color} opacity-80`} />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="w-8 h-8 text-white fill-white" />
                  </div>
                </div>
                <span className="absolute top-4 left-4 px-3 py-1 bg-white/90 dark:bg-gray-900/90 rounded-full text-xs font-semibold">
                  {demo.category}
                </span>
              </div>
              
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                {demo.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {demo.description}
              </p>
              
              <Link 
                href={demo.link}
                className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 font-semibold group-hover:gap-3 transition-all"
              >
                Try Now
                <ExternalLink className="w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
