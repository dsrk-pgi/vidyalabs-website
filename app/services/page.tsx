'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  Code, Cloud, Brain, Building2, Shield, Network, 
  Zap, DollarSign, GraduationCap, Globe, Smartphone, Users,
  CheckCircle, ArrowRight
} from 'lucide-react'

const services = [
  {
    id: 'software-dev',
    icon: Code,
    title: 'Software Development',
    description: 'Custom software solutions tailored to your business needs with cutting-edge technologies.',
    details: 'We build scalable, secure, and high-performance software applications using modern frameworks and best practices.',
    useCases: ['Enterprise Applications', 'SaaS Platforms', 'Legacy System Modernization', 'API Development'],
    technologies: ['React', 'Node.js', 'Python', 'Java', '.NET', 'PostgreSQL', 'MongoDB'],
    benefits: ['Faster Time to Market', 'Scalable Architecture', 'Cost-Effective Solutions', '24/7 Support']
  },
  {
    id: 'cloud',
    icon: Cloud,
    title: 'Cloud Services',
    description: 'Scalable cloud infrastructure, migration, and management for modern applications.',
    details: 'Expert cloud consulting, migration, and managed services across AWS, Azure, and Google Cloud Platform.',
    useCases: ['Cloud Migration', 'Infrastructure as Code', 'DevOps Implementation', 'Cloud Security'],
    technologies: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'Terraform', 'Jenkins'],
    benefits: ['99.9% Uptime', 'Auto-Scaling', 'Cost Optimization', 'Enhanced Security']
  },
  {
    id: 'industry',
    icon: Building2,
    title: 'Industry-Specific Solutions',
    description: 'Specialized software for education, healthcare, retail, and manufacturing sectors.',
    details: 'Domain-specific solutions designed to address unique challenges in various industries.',
    useCases: ['Education Management', 'Healthcare Systems', 'Retail POS', 'Manufacturing ERP'],
    technologies: ['Custom Frameworks', 'Industry Standards', 'Compliance Tools', 'Integration APIs'],
    benefits: ['Industry Expertise', 'Regulatory Compliance', 'Proven Track Record', 'Quick Implementation']
  },
  {
    id: 'niche',
    icon: Brain,
    title: 'Niche Software Ecosystems',
    description: 'Complete software ecosystems for hostels, restaurants, and specialized businesses.',
    details: 'End-to-end solutions for specific business verticals with all necessary features and integrations.',
    useCases: ['Hostel Management', 'Restaurant POS', 'Salon Management', 'Gym Management'],
    technologies: ['Full-Stack Solutions', 'Mobile Apps', 'Payment Gateways', 'Analytics'],
    benefits: ['All-in-One Solution', 'Easy to Use', 'Mobile Ready', 'Affordable Pricing']
  },
  {
    id: 'security',
    icon: Shield,
    title: 'Advanced Tech & Security',
    description: 'Blockchain, cybersecurity, and advanced technology implementations.',
    details: 'Cutting-edge security solutions and emerging technology implementations for future-ready businesses.',
    useCases: ['Blockchain Development', 'Cybersecurity Audits', 'Penetration Testing', 'IoT Security'],
    technologies: ['Blockchain', 'Ethereum', 'Smart Contracts', 'Security Tools', 'Encryption'],
    benefits: ['Enhanced Security', 'Future-Proof', 'Compliance Ready', 'Expert Team']
  },
  {
    id: 'ai',
    icon: Brain,
    title: 'Data Science & AI',
    description: 'Machine learning, predictive analytics, and AI-powered solutions.',
    details: 'Transform your data into actionable insights with advanced AI and machine learning solutions.',
    useCases: ['Predictive Analytics', 'Natural Language Processing', 'Computer Vision', 'Recommendation Systems'],
    technologies: ['Python', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'Pandas', 'OpenAI'],
    benefits: ['Data-Driven Decisions', 'Automation', 'Improved Accuracy', 'Competitive Advantage']
  },
  {
    id: 'networking',
    icon: Network,
    title: 'Networking Solutions',
    description: 'Enterprise networking, infrastructure setup, and network security.',
    details: 'Design, implement, and manage robust network infrastructure for businesses of all sizes.',
    useCases: ['Network Design', 'Infrastructure Setup', 'Network Security', 'VPN Solutions'],
    technologies: ['Cisco', 'Juniper', 'Firewall Systems', 'VPN', 'SD-WAN'],
    benefits: ['Reliable Connectivity', 'Secure Networks', 'Scalable Infrastructure', 'Expert Support']
  },
  {
    id: 'automation',
    icon: Zap,
    title: 'Automation',
    description: 'Business process automation and workflow optimization solutions.',
    details: 'Streamline operations and reduce manual work with intelligent automation solutions.',
    useCases: ['Workflow Automation', 'RPA Implementation', 'Integration Services', 'Process Optimization'],
    technologies: ['UiPath', 'Automation Anywhere', 'Zapier', 'Custom Scripts', 'APIs'],
    benefits: ['Increased Efficiency', 'Cost Reduction', 'Error Minimization', 'Faster Processing']
  },
  {
    id: 'finance',
    icon: DollarSign,
    title: 'Finance & Bookkeeping',
    description: 'Digital bookkeeping, accounting software, and financial management systems.',
    details: 'Comprehensive financial management solutions for businesses of all sizes.',
    useCases: ['Accounting Software', 'Invoice Management', 'Expense Tracking', 'Financial Reporting'],
    technologies: ['QuickBooks Integration', 'Custom Solutions', 'Payment Gateways', 'Tax Software'],
    benefits: ['Accurate Records', 'Tax Compliance', 'Real-time Reports', 'Easy Reconciliation']
  },
  {
    id: 'elearning',
    icon: GraduationCap,
    title: 'E-Learning',
    description: 'Interactive learning platforms, LMS, and educational technology solutions.',
    details: 'Create engaging online learning experiences with our comprehensive e-learning solutions.',
    useCases: ['Learning Management Systems', 'Online Courses', 'Virtual Classrooms', 'Assessment Tools'],
    technologies: ['Moodle', 'Custom LMS', 'Video Streaming', 'Interactive Tools'],
    benefits: ['Engaging Content', 'Progress Tracking', 'Scalable Platform', 'Mobile Access']
  },
  {
    id: 'websites',
    icon: Globe,
    title: 'Websites',
    description: 'Modern, responsive, and SEO-optimized websites for businesses of all sizes.',
    details: 'Beautiful, fast, and conversion-focused websites that drive results.',
    useCases: ['Corporate Websites', 'E-commerce', 'Landing Pages', 'Portfolio Sites'],
    technologies: ['Next.js', 'React', 'WordPress', 'Shopify', 'Tailwind CSS'],
    benefits: ['SEO Optimized', 'Mobile Responsive', 'Fast Loading', 'Modern Design']
  },
  {
    id: 'apps',
    icon: Smartphone,
    title: 'Custom Apps',
    description: 'Native and cross-platform mobile applications for iOS and Android.',
    details: 'Build powerful mobile applications that users love with our expert development team.',
    useCases: ['Business Apps', 'E-commerce Apps', 'Social Apps', 'Utility Apps'],
    technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase'],
    benefits: ['Cross-Platform', 'Native Performance', 'Offline Support', 'Push Notifications']
  },
  {
    id: 'mentorship',
    icon: Users,
    title: 'Mentorship',
    description: 'Technical mentorship, training programs, and skill development services.',
    details: 'Upskill your team with expert-led training and mentorship programs.',
    useCases: ['Corporate Training', 'One-on-One Mentorship', 'Bootcamps', 'Skill Development'],
    technologies: ['Latest Tech Stack', 'Best Practices', 'Industry Standards', 'Hands-on Projects'],
    benefits: ['Expert Instructors', 'Practical Learning', 'Certification', 'Career Growth']
  },
]

export default function ServicesPage() {
  return (
    <div className="pt-20">
      <section className="section-padding bg-gradient-to-br from-primary-50 via-purple-50 to-pink-50 dark:from-gray-950 dark:via-primary-950 dark:to-purple-950">
        <div className="container-custom mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold mb-6">
              Our <span className="gradient-text">Services</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Comprehensive software solutions designed to transform your business and drive innovation
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-white dark:bg-gray-950">
        <div className="container-custom mx-auto">
          <div className="space-y-24">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="scroll-mt-24"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="glass-card p-8">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
                        <service.icon className="w-8 h-8 text-white" />
                      </div>
                      <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                        {service.title}
                      </h2>
                      <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                        {service.details}
                      </p>
                      <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
                        Get Started
                        <ArrowRight className="w-5 h-5" />
                      </Link>
                    </div>
                  </div>

                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Use Cases</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {service.useCases.map((useCase) => (
                            <div key={useCase} className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                              <CheckCircle className="w-5 h-5 text-primary-500 flex-shrink-0" />
                              <span>{useCase}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Technologies</h3>
                        <div className="flex flex-wrap gap-2">
                          {service.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-lg text-sm font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Benefits</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {service.benefits.map((benefit) => (
                            <div key={benefit} className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                              <span>{benefit}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-br from-primary-600 via-purple-600 to-pink-600">
        <div className="container-custom mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Let's discuss how our services can help transform your business
            </p>
            <Link href="/contact" className="btn-primary bg-white text-primary-600 hover:bg-gray-100">
              Contact Us Today
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
