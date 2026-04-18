'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import Image from 'next/image'

const testimonials = [
  {
    name: 'Dr. Rajesh Kumar',
    role: 'Principal, ABC International School',
    company: 'ABC International School',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
    content: 'VidyaLabs transformed our campus management completely. The Smart Campus System has streamlined all our operations and improved efficiency by 60%.',
    rating: 5
  },
  {
    name: 'Priya Sharma',
    role: 'Owner, Spice Garden Restaurant',
    company: 'Spice Garden',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
    content: 'eAathithya has revolutionized how we manage our restaurant. The POS system is intuitive and the inventory management has saved us thousands.',
    rating: 5
  },
  {
    name: 'Amit Patel',
    role: 'CTO, TechCorp Solutions',
    company: 'TechCorp Solutions',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
    content: 'Outstanding custom software development. The team understood our requirements perfectly and delivered a scalable solution ahead of schedule.',
    rating: 5
  },
  {
    name: 'Sarah Johnson',
    role: 'Hostel Warden, University Hostel',
    company: 'State University',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
    content: 'eChatravas has made hostel management so much easier. From room allocation to mess billing, everything is automated and efficient.',
    rating: 5
  },
  {
    name: 'Mohammed Ali',
    role: 'CEO, Digital Ventures',
    company: 'Digital Ventures',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
    content: 'The AI-powered solutions from VidyaLabs have given us a competitive edge. Their expertise in machine learning is truly impressive.',
    rating: 5
  },
  {
    name: 'Lakshmi Reddy',
    role: 'Director, EduTech Institute',
    company: 'EduTech Institute',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop',
    content: 'Excellent support and innovative solutions. VidyaLabs is our trusted technology partner for all our software needs.',
    rating: 5
  },
]

export default function Testimonials() {
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
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Trusted by hundreds of businesses and institutions across India
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card group hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                  <Image 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {testimonial.role}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-500">
                    {testimonial.company}
                  </p>
                </div>
                <Quote className="w-8 h-8 text-primary-500/20" />
              </div>
              
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                &ldquo;{testimonial.content}&rdquo;
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
