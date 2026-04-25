'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Clock, Phone, Mail, MessageCircle } from 'lucide-react'

export default function SupportBanner() {
  return (
    <section className="py-12 bg-gradient-to-r from-primary-600 via-purple-600 to-pink-600 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-white rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-white rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container-custom mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="relative">
              <Clock className="w-12 h-12 text-white" />
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full animate-pulse border-2 border-white"></div>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-white">
              24x7 Support Available
            </h2>
          </div>
          
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Our dedicated support team is always here to help you. Get instant assistance anytime, anywhere.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <Phone className="w-8 h-8 text-white mb-3 mx-auto" />
              <h3 className="font-semibold text-white mb-2">Phone Support</h3>
              <p className="text-white/80 text-sm">Instant connection to our experts</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <Mail className="w-8 h-8 text-white mb-3 mx-auto" />
              <h3 className="font-semibold text-white mb-2">Email Support</h3>
              <p className="text-white/80 text-sm">Response within 2 hours</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <MessageCircle className="w-8 h-8 text-white mb-3 mx-auto" />
              <h3 className="font-semibold text-white mb-2">Live Chat</h3>
              <p className="text-white/80 text-sm">Real-time assistance online</p>
            </div>
          </div>

          <Link 
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary-600 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
          >
            <Phone className="w-5 h-5" />
            Get Support Now
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
