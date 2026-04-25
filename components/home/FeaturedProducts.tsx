'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { School, Home, Utensils, ShoppingBag, ArrowRight } from 'lucide-react'

const products = [
  {
    icon: School,
    title: 'eVidyalya',
    description: 'Complete campus management solution with student portal, attendance, fees, and academic management.',
    features: ['Student Management', 'Attendance Tracking', 'Fee Management', 'Academic Portal'],
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop',
    link: '/products#smart-campus',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Home,
    title: 'eChatravas',
    description: 'Advanced hostel management system with room allocation, mess management, and student tracking.',
    features: ['Room Management', 'Mess Billing', 'Visitor Tracking', 'Complaint System'],
    image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=800&h=600&fit=crop',
    link: '/products#echatravas',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: Utensils,
    title: 'eAathithya',
    description: 'Restaurant management system with POS, inventory, table management, and online ordering.',
    features: ['POS System', 'Inventory Control', 'Table Booking', 'Online Orders'],
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop',
    link: '/products#eaathithya',
    color: 'from-orange-500 to-red-500'
  },
  {
    icon: ShoppingBag,
    title: 'DesiDera',
    description: 'E-commerce platform for traditional Indian products with multi-vendor support and payment integration.',
    features: ['Multi-vendor', 'Payment Gateway', 'Order Tracking', 'Analytics Dashboard'],
    image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&h=600&fit=crop',
    link: '/products#desidera',
    color: 'from-green-500 to-emerald-500'
  },
]

export default function FeaturedProducts() {
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
            Featured <span className="gradient-text">Products</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Powerful, ready-to-deploy solutions designed for specific industries
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card group hover:scale-[1.02] transition-all duration-300 overflow-hidden"
            >
              <div className="relative h-48 overflow-hidden rounded-lg mb-6">
                <div className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-90`} />
                <div className="absolute inset-0 flex items-center justify-center">
                  <product.icon className="w-20 h-20 text-white" />
                </div>
              </div>
              
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">
                {product.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                {product.description}
              </p>
              
              <div className="grid grid-cols-2 gap-3 mb-6">
                {product.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                    <div className="w-1.5 h-1.5 bg-primary-500 rounded-full" />
                    {feature}
                  </div>
                ))}
              </div>
              
              <Link 
                href={product.link}
                className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 font-semibold group-hover:gap-3 transition-all"
              >
                View Demo
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link href="/products" className="btn-primary">
            View All Products
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
