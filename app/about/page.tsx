'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Target, Eye, Award, Users, Zap, Shield, TrendingUp, Heart, Code, Cloud, Brain, Wrench, GraduationCap, Smartphone } from 'lucide-react'

const services = [
  { name: 'Software Development', icon: Code },
  { name: 'Data Science & AI', icon: Brain },
  { name: 'Cloud Services', icon: Cloud },
  { name: 'Automation Systems', icon: Zap },
  { name: 'Networking Solutions', icon: Wrench },
  { name: 'E-Learning Platforms', icon: GraduationCap },
  { name: 'Mobile Applications', icon: Smartphone },
  { name: 'Custom Applications', icon: Code }
]

const values = [
  {
    icon: Zap,
    title: 'Innovation-Driven',
    description: 'We stay ahead of technology trends and continuously innovate to deliver cutting-edge solutions.'
  },
  {
    icon: Heart,
    title: 'Customer-Centric',
    description: 'Your success is our priority. We build solutions tailored to your specific needs and challenges.'
  },
  {
    icon: Shield,
    title: 'Quality & Security',
    description: 'We maintain the highest standards of code quality, security, and data protection.'
  },
  {
    icon: TrendingUp,
    title: 'Scalable Solutions',
    description: 'Our systems grow with your business, ensuring long-term value and adaptability.'
  }
]

const stats = [
  { number: '500+', label: 'Projects Delivered' },
  { number: '200+', label: 'Happy Clients' },
  { number: '15+', label: 'Years Experience' },
  { number: '50+', label: 'Team Members' }
]

export default function AboutPage() {
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
              About VidyaLabs
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 mb-8">
              Innovating the future with intelligent software solutions
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="section-padding bg-white dark:bg-gray-950">
        <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Who We Are
              </h2>
              <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                <p>
                  <strong className="text-gray-900 dark:text-white">VidyaLabs</strong> is a modern software solutions company dedicated to transforming businesses through innovative technology. We specialize in creating intelligent, scalable, and user-friendly software that drives real business value.
                </p>
                <p>
                  Founded with a vision to bridge the gap between complex technology and practical business needs, we have grown into a trusted partner for organizations across education, hospitality, healthcare, and enterprise sectors.
                </p>
                <p>
                  Our team of experienced developers, data scientists, and technology consultants work collaboratively to deliver solutions that not only meet current requirements but also anticipate future needs.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-6"
            >
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="glass-card text-center p-6 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="text-4xl font-bold gradient-text mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 dark:text-gray-400 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900">
        <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card p-8 hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Our Mission
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                To deliver scalable, impactful, and innovative digital solutions that empower businesses to achieve their goals efficiently. We are committed to excellence, customer satisfaction, and continuous improvement in everything we do.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="glass-card p-8 hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Our Vision
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                To become a leading AI-driven technology provider, recognized globally for innovation, quality, and customer success. We envision a future where intelligent software seamlessly integrates into every aspect of business operations.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Summary */}
      <section className="section-padding bg-white dark:bg-gray-950">
        <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              What We Do
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              We offer a comprehensive range of technology services to help businesses thrive in the digital age
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="glass-card p-6 text-center hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    {service.name}
                  </h3>
                </motion.div>
              )
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mt-12"
          >
            <Link 
              href="/services" 
              className="btn-primary inline-flex items-center gap-2"
            >
              View All Services
              <Award className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900">
        <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose VidyaLabs?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              We combine technical excellence with business understanding to deliver exceptional results
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="glass-card p-8 hover:shadow-2xl transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                        {value.title}
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Team Highlight */}
      <section className="section-padding bg-white dark:bg-gray-950">
        <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <Users className="w-16 h-16 mx-auto mb-6 text-primary-500" />
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
              Our talented team of developers, designers, and technology experts are passionate about creating solutions that make a difference.
            </p>
            <Link 
              href="/team" 
              className="btn-primary inline-flex items-center gap-2"
            >
              View Our Team
              <Users className="w-5 h-5" />
            </Link>
          </motion.div>
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
              Ready to Work Together?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Let&apos;s discuss how we can help transform your business with innovative technology solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/contact" 
                className="btn-primary bg-white text-primary-600 hover:bg-gray-100"
              >
                Get in Touch
              </Link>
              <Link 
                href="/products" 
                className="px-6 py-3 bg-white/10 backdrop-blur-sm text-white rounded-lg font-semibold border-2 border-white/30 hover:bg-white/20 transition-all duration-300"
              >
                View Our Products
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
