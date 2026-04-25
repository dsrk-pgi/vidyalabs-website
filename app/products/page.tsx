'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { School, Building2, UtensilsCrossed, Store, Briefcase, ArrowRight, Check, ExternalLink } from 'lucide-react'

const products = [
  {
    id: 'smart-campus',
    name: 'Smart Campus System',
    tagline: 'Complete School & College Management',
    description: 'An all-in-one intelligent campus management system that streamlines every aspect of educational institution operations.',
    icon: School,
    color: 'from-blue-500 to-cyan-500',
    features: [
      'Student Attendance & Tracking',
      'Academic Results Management',
      'Fee Collection & Accounting',
      'Parent-Teacher Communication',
      'Timetable & Scheduling',
      'Library Management',
      'Transport Management',
      'Digital Report Cards'
    ],
    benefits: [
      '60% reduction in administrative work',
      'Real-time parent notifications',
      'Paperless operations',
      'Data-driven insights'
    ],
    demoUrl: '/contact',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop'
  },
  {
    id: 'echatravas',
    name: 'eChatravas',
    tagline: 'Smart Hostel Management System',
    description: 'Modern hostel management solution for educational institutions, providing seamless room allocation, student tracking, and fee management.',
    icon: Building2,
    color: 'from-purple-500 to-pink-500',
    features: [
      'Room Allocation & Management',
      'Student Check-in/Check-out',
      'Fee & Payment Tracking',
      'Visitor Management',
      'Complaint Management',
      'Mess Management',
      'Attendance Monitoring',
      'Parent Notifications'
    ],
    benefits: [
      'Automated room assignments',
      'Digital payment integration',
      'Real-time occupancy tracking',
      'Enhanced security'
    ],
    demoUrl: '/contact',
    image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=800&h=600&fit=crop'
  },
  {
    id: 'eaathithya',
    name: 'eAathithya',
    tagline: 'Restaurant Management System',
    description: 'Complete restaurant management solution with digital menu, order management, and integrated billing system.',
    icon: UtensilsCrossed,
    color: 'from-orange-500 to-red-500',
    features: [
      'Digital Menu Management',
      'Order Processing System',
      'Kitchen Display System (KDS)',
      'Table Management',
      'Billing & Invoicing',
      'Inventory Tracking',
      'Staff Management',
      'Customer Feedback'
    ],
    benefits: [
      'Faster order processing',
      'Reduced errors',
      'Better inventory control',
      'Improved customer experience'
    ],
    demoUrl: '/contact',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop'
  },
  {
    id: 'desidera',
    name: 'DesiDera',
    tagline: 'Smart Restaurant & Customer Experience Platform',
    description: 'Next-generation restaurant platform combining digital ordering, customer engagement, and business analytics.',
    icon: Store,
    color: 'from-green-500 to-emerald-500',
    features: [
      'QR Code Ordering',
      'Customer Loyalty Program',
      'Online Reservations',
      'Multi-location Support',
      'Analytics Dashboard',
      'Marketing Automation',
      'Review Management',
      'Delivery Integration'
    ],
    benefits: [
      'Increased customer retention',
      'Higher order values',
      'Data-driven decisions',
      'Seamless omnichannel experience'
    ],
    demoUrl: '/contact',
    image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?w=800&h=600&fit=crop'
  },
  {
    id: 'custom-erp-crm',
    name: 'Custom ERP/CRM Solutions',
    tagline: 'Tailored Business Management Software',
    description: 'Fully customized ERP and CRM systems designed specifically for your business needs and workflows.',
    icon: Briefcase,
    color: 'from-indigo-500 to-purple-500',
    features: [
      'Custom Workflow Automation',
      'Sales & Lead Management',
      'Inventory & Supply Chain',
      'HR & Payroll Management',
      'Financial Accounting',
      'Project Management',
      'Customer Relationship Management',
      'Business Intelligence & Reporting'
    ],
    benefits: [
      'Tailored to your processes',
      'Scalable architecture',
      'Integration with existing systems',
      'Ongoing support & updates'
    ],
    demoUrl: '/contact',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop'
  }
]

export default function ProductsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-primary-600 via-purple-600 to-pink-600">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        
        {/* Animated background blobs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold text-white mb-6">
              Our Products & Solutions
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 mb-8">
              Smart, scalable, and intelligent systems built for modern needs
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="#products" 
                className="btn-primary bg-white text-primary-600 hover:bg-gray-100"
              >
                Explore Products
              </Link>
              <Link 
                href="/contact" 
                className="px-6 py-3 bg-white/10 backdrop-blur-sm text-white rounded-lg font-semibold border-2 border-white/30 hover:bg-white/20 transition-all duration-300"
              >
                Request Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section id="products" className="section-padding bg-gray-50 dark:bg-gray-900">
        <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {products.map((product, index) => {
              const Icon = product.icon
              return (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`glass-card overflow-hidden ${index % 2 === 0 ? '' : ''}`}
                >
                  <div className={`grid lg:grid-cols-2 gap-8 ${index % 2 === 0 ? '' : 'lg:grid-flow-dense'}`}>
                    {/* Product Image */}
                    <div className={`relative h-64 lg:h-full min-h-[300px] overflow-hidden ${index % 2 === 0 ? '' : 'lg:col-start-2'}`}>
                      <div className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-20 z-10`}></div>
                      <Image 
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        priority={index === 0}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
                      <div className="absolute bottom-6 left-6 z-20">
                        <div className={`w-16 h-16 bg-gradient-to-br ${product.color} rounded-2xl flex items-center justify-center shadow-xl`}>
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                      </div>
                    </div>

                    {/* Product Details */}
                    <div className={`p-8 ${index % 2 === 0 ? '' : 'lg:col-start-1 lg:row-start-1'}`}>
                      <div className="mb-4">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                          {product.name}
                        </h2>
                        <p className={`text-lg font-semibold bg-gradient-to-r ${product.color} bg-clip-text text-transparent`}>
                          {product.tagline}
                        </p>
                      </div>

                      <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                        {product.description}
                      </p>

                      {/* Features */}
                      <div className="mb-6">
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Key Features:</h3>
                        <div className="grid sm:grid-cols-2 gap-2">
                          {product.features.map((feature, idx) => (
                            <div key={idx} className="flex items-start gap-2">
                              <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                              <span className="text-sm text-gray-600 dark:text-gray-400">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Benefits */}
                      <div className="mb-6">
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Benefits:</h3>
                        <div className="flex flex-wrap gap-2">
                          {product.benefits.map((benefit, idx) => (
                            <span 
                              key={idx}
                              className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm"
                            >
                              {benefit}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* CTA Buttons */}
                      <div className="flex flex-wrap gap-4">
                        <Link 
                          href={product.demoUrl}
                          className={`px-6 py-3 bg-gradient-to-r ${product.color} text-white rounded-lg font-semibold hover:shadow-xl transition-all duration-300 inline-flex items-center gap-2 group`}
                        >
                          Request Demo
                          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link 
                          href="/contact"
                          className="px-6 py-3 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg font-semibold hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 inline-flex items-center gap-2"
                        >
                          Learn More
                          <ExternalLink className="w-5 h-5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

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
              Get a personalized demo of our products and see how they can solve your specific challenges.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/contact" 
                className="btn-primary bg-white text-primary-600 hover:bg-gray-100"
              >
                Schedule a Demo
              </Link>
              <Link 
                href="/services" 
                className="px-6 py-3 bg-white/10 backdrop-blur-sm text-white rounded-lg font-semibold border-2 border-white/30 hover:bg-white/20 transition-all duration-300"
              >
                View All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
