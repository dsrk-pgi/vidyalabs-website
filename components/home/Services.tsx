'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  Code, Cloud, Brain, Building2, Shield, Network, 
  Zap, DollarSign, GraduationCap, Globe, Smartphone, Users 
} from 'lucide-react'

const services = [
  {
    icon: Code,
    title: 'Software Development',
    description: 'Custom software solutions tailored to your business needs with cutting-edge technologies.',
    link: '/services#software-dev'
  },
  {
    icon: Cloud,
    title: 'Cloud Services',
    description: 'Scalable cloud infrastructure, migration, and management for modern applications.',
    link: '/services#cloud'
  },
  {
    icon: Building2,
    title: 'Industry-Specific Solutions',
    description: 'Specialized software for education, healthcare, retail, and manufacturing sectors.',
    link: '/services#industry'
  },
  {
    icon: Brain,
    title: 'Niche Software Ecosystems',
    description: 'Complete software ecosystems for hostels, restaurants, and specialized businesses.',
    link: '/services#niche'
  },
  {
    icon: Shield,
    title: 'Advanced Tech & Security',
    description: 'Blockchain, cybersecurity, and advanced technology implementations.',
    link: '/services#security'
  },
  {
    icon: Brain,
    title: 'Data Science & AI',
    description: 'Machine learning, predictive analytics, and AI-powered solutions.',
    link: '/services#ai'
  },
  {
    icon: Network,
    title: 'Networking Solutions',
    description: 'Enterprise networking, infrastructure setup, and network security.',
    link: '/services#networking'
  },
  {
    icon: Zap,
    title: 'Automation',
    description: 'Business process automation and workflow optimization solutions.',
    link: '/services#automation'
  },
  {
    icon: DollarSign,
    title: 'Finance & Bookkeeping',
    description: 'Digital bookkeeping, accounting software, and financial management systems.',
    link: '/services#finance'
  },
  {
    icon: GraduationCap,
    title: 'E-Learning',
    description: 'Interactive learning platforms, LMS, and educational technology solutions.',
    link: '/services#elearning'
  },
  {
    icon: Globe,
    title: 'Websites',
    description: 'Modern, responsive, and SEO-optimized websites for businesses of all sizes.',
    link: '/services#websites'
  },
  {
    icon: Smartphone,
    title: 'Custom Apps',
    description: 'Native and cross-platform mobile applications for iOS and Android.',
    link: '/services#apps'
  },
  {
    icon: Users,
    title: 'Mentorship',
    description: 'Technical mentorship, training programs, and skill development services.',
    link: '/services#mentorship'
  },
]

export default function Services() {
  return (
    <section className="section-padding bg-white dark:bg-gray-950">
      <div className="container-custom mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-display font-bold mb-4">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Comprehensive software solutions designed to transform your business and drive innovation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <Link href={service.link}>
                <div className="glass-card group hover:scale-105 transition-all duration-300 h-full">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    {service.description}
                  </p>
                  <span className="text-primary-600 dark:text-primary-400 text-sm font-medium group-hover:underline">
                    Learn More →
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
