'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, Linkedin, Download, Users } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const teamMembers = [
  {
    id: 1,
    name: 'Priyanka Kumari',
    designation: 'Founder & Director',
    phone: '+91 9140189586',
    email: 'priynaka.rolireeshik@gmail.com',
    image: '/team/priyanka.jpg',
    bio: 'A visionary leader driving VidyaLabs with innovation and dedication. Focused on building scalable digital solutions and empowering businesses with modern technology.',
    linkedin: '#',
  },
  {
    id: 2,
    name: 'Rajesh Kumar',
    designation: 'Principal Developer & Chief Technical Mentor',
    phone: ['+91 9140878191', '+91 8004901175'],
    email: 'rkrajesh.pgi@gmail.com',
    image: '/team/rajesh.jpg',
    bio: 'An experienced technology architect specializing in Data Architecture, System Integrity, and Full-Stack Development. With strong expertise in Cloud Computing, Health Informatics, Data Science, Data Engineering, and Analytics, he mentors teams and leads the development of robust, scalable, and secure software systems. Passionate about innovation, automation, and real-world problem solving.',
    linkedin: '#',
  },
  {
    id: 3,
    name: 'Anand Merchant',
    designation: 'Sales Officer',
    phone: '+91 7318582007',
    email: 'anand.ahmadpur@gmail.com',
    image: '/team/anand.jpg',
    bio: 'A dedicated sales professional managing client relationships and business growth. Focused on delivering value-driven solutions and ensuring client satisfaction.',
    linkedin: '#',
  },
]

export default function TeamPage() {
  const handleDownloadVCard = (member: typeof teamMembers[0]) => {
    const phones = Array.isArray(member.phone) ? member.phone : [member.phone]
    const vcard = `BEGIN:VCARD
VERSION:3.0
FN:${member.name}
TITLE:${member.designation}
ORG:VidyaLabs Software Solutions
${phones.map((p, i) => `TEL;TYPE=WORK,VOICE${i > 0 ? `,pref` : ''}:${p}`).join('\n')}
EMAIL:${member.email}
END:VCARD`
    
    const blob = new Blob([vcard], { type: 'text/vcard' })
    const url = window.URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = `${member.name.replace(' ', '_')}.vcf`
    link.click()
    window.URL.revokeObjectURL(url)
  }

  return (
    <div className="pt-20">
      {/* Header Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 via-purple-50 to-pink-50 dark:from-gray-950 dark:via-primary-950 dark:to-purple-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-400 rounded-full mix-blend-multiply filter blur-3xl animate-float" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        </div>
        
        <div className="container-custom mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full mb-6">
              <Users className="w-5 h-5 text-primary-600 dark:text-primary-400" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Our Amazing Team</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold mb-6">
              Meet Our <span className="gradient-text">Team</span>
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
              The minds behind VidyaLabs innovation and excellence
            </p>

            <div className="flex flex-wrap justify-center gap-8 mt-12">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="text-center"
              >
                <div className="text-4xl font-bold gradient-text mb-2">3+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Team Members</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="text-center"
              >
                <div className="text-4xl font-bold gradient-text mb-2">15+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Years Combined Experience</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                className="text-center"
              >
                <div className="text-4xl font-bold gradient-text mb-2">500+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Projects Delivered</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Members Grid */}
      <section className="section-padding bg-white dark:bg-gray-950">
        <div className="container-custom mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group"
              >
                <div className="glass-card p-6 h-full flex flex-col relative overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-primary-500/20 dark:hover:shadow-primary-500/10">
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500/0 to-purple-500/0 group-hover:from-primary-500/5 group-hover:to-purple-500/5 transition-all duration-300 pointer-events-none" />
                  
                  {/* Profile Image */}
                  <div className="relative mb-6">
                    <div className="relative w-32 h-32 mx-auto">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-purple-600 rounded-full animate-pulse opacity-20 group-hover:opacity-40 transition-opacity" />
                      <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl">
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          className="object-cover"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement
                            target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&size=200&background=0ea5e9&color=fff&bold=true`
                          }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Member Info */}
                  <div className="text-center mb-4 relative z-10">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {member.name}
                    </h3>
                    <div className="inline-block px-4 py-1.5 bg-gradient-to-r from-primary-500 to-purple-600 rounded-full mb-4">
                      <p className="text-sm font-medium text-white">
                        {member.designation}
                      </p>
                    </div>
                  </div>

                  {/* Bio */}
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6 flex-grow relative z-10">
                    {member.bio}
                  </p>

                  {/* Contact Info */}
                  <div className="space-y-3 relative z-10">
                    {/* Phone */}
                    <div className="space-y-2">
                      {Array.isArray(member.phone) ? (
                        member.phone.map((phone, idx) => (
                          <a
                            key={idx}
                            href={`tel:${phone}`}
                            className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-800/50 hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all group/phone"
                          >
                            <div className="w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center group-hover/phone:bg-primary-500 transition-colors">
                              <Phone className="w-5 h-5 text-primary-600 dark:text-primary-400 group-hover/phone:text-white" />
                            </div>
                            <span className="text-sm text-gray-700 dark:text-gray-300 group-hover/phone:text-primary-600 dark:group-hover/phone:text-primary-400 font-medium">
                              {phone}
                            </span>
                          </a>
                        ))
                      ) : (
                        <a
                          href={`tel:${member.phone}`}
                          className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-800/50 hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all group/phone"
                        >
                          <div className="w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center group-hover/phone:bg-primary-500 transition-colors">
                            <Phone className="w-5 h-5 text-primary-600 dark:text-primary-400 group-hover/phone:text-white" />
                          </div>
                          <span className="text-sm text-gray-700 dark:text-gray-300 group-hover/phone:text-primary-600 dark:group-hover/phone:text-primary-400 font-medium">
                            {member.phone}
                          </span>
                        </a>
                      )}
                    </div>

                    {/* Email */}
                    <a
                      href={`mailto:${member.email}`}
                      className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-800/50 hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all group/email"
                    >
                      <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center group-hover/email:bg-purple-500 transition-colors">
                        <Mail className="w-5 h-5 text-purple-600 dark:text-purple-400 group-hover/email:text-white" />
                      </div>
                      <span className="text-sm text-gray-700 dark:text-gray-300 group-hover/email:text-purple-600 dark:group-hover/email:text-purple-400 font-medium truncate">
                        {member.email}
                      </span>
                    </a>

                    {/* Action Buttons */}
                    <div className="flex gap-2 pt-2">
                      <button
                        onClick={() => handleDownloadVCard(member)}
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-primary-500 to-purple-600 text-white rounded-lg hover:shadow-lg hover:shadow-primary-500/50 transition-all text-sm font-medium"
                      >
                        <Download className="w-4 h-4" />
                        Save Contact
                      </button>
                      {member.linkedin && (
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-11 h-11 flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-blue-500 hover:text-white transition-all"
                        >
                          <Linkedin className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team CTA */}
      <section className="section-padding bg-gradient-to-br from-primary-600 via-purple-600 to-pink-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>
        
        <div className="container-custom mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Want to Join Our Team?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              We're always looking for talented individuals who are passionate about technology and innovation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/contact" 
                className="btn-primary bg-white text-primary-600 hover:bg-gray-100 hover:shadow-xl"
              >
                Get in Touch
              </Link>
              <Link 
                href="/contact" 
                className="px-8 py-3 bg-white/10 backdrop-blur-sm text-white rounded-lg hover:bg-white/20 transition-all border border-white/20 font-medium"
              >
                Send Your Resume
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mobile Sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-t border-gray-200 dark:border-gray-800 lg:hidden z-50">
        <Link 
          href="/contact" 
          className="btn-primary w-full text-center"
        >
          Contact Our Team
        </Link>
      </div>
    </div>
  )
}
