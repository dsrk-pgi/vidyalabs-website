'use client'

import { motion } from 'framer-motion'
import { Lightbulb, Wrench, TrendingUp, HeadphonesIcon, DollarSign } from 'lucide-react'

const reasons = [
  {
    icon: Lightbulb,
    title: 'Innovation-Driven',
    description: 'We leverage cutting-edge technologies and innovative approaches to solve complex business challenges.',
  },
  {
    icon: Wrench,
    title: 'Custom-Built Solutions',
    description: 'Every solution is tailored to your specific needs, ensuring perfect alignment with your business goals.',
  },
  {
    icon: TrendingUp,
    title: 'Scalable Architecture',
    description: 'Our solutions grow with your business, built on robust and scalable architecture.',
  },
  {
    icon: HeadphonesIcon,
    title: 'Strong Support System',
    description: '24/7 dedicated support team ensuring your systems run smoothly at all times.',
  },
  {
    icon: DollarSign,
    title: 'Affordable Pricing',
    description: 'Enterprise-grade solutions at competitive prices, delivering exceptional value for your investment.',
  },
]

export default function WhyVidyaLabs() {
  return (
    <section className="section-padding bg-white dark:bg-gray-950 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-500 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl" />
      </div>

      <div className="container-custom mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-display font-bold mb-4">
            Why Choose <span className="gradient-text">VidyaLabs</span>?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            We combine expertise, innovation, and dedication to deliver exceptional software solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card group hover:shadow-2xl transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <reason.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                {reason.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
