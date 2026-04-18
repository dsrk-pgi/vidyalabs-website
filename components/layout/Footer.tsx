import Link from 'next/link'
import { Facebook, Twitter, Linkedin, Instagram, Github, Mail, Phone, MapPin, MessageCircle } from 'lucide-react'

const footerLinks = {
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Our Team', href: '/team' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' },
  ],
  services: [
    { name: 'Software Development', href: '/services#software-dev' },
    { name: 'Cloud Services', href: '/services#cloud' },
    { name: 'AI & Data Science', href: '/services#ai' },
    { name: 'Industry Solutions', href: '/services#industry' },
  ],
  products: [
    { name: 'Smart Campus System', href: '/products#smart-campus' },
    { name: 'eChatravas', href: '/products#echatravas' },
    { name: 'eAathithya', href: '/products#eaathithya' },
    { name: 'DesiDera', href: '/products#desidera' },
  ],
  support: [
    { name: 'Help Center', href: '/support' },
    { name: 'Documentation', href: '/docs' },
    { name: 'API Reference', href: '/api-docs' },
    { name: 'System Status', href: '/status' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
    { name: 'GDPR', href: '/gdpr' },
  ],
}

const socialLinks = [
  { name: 'Facebook', icon: Facebook, href: '#' },
  { name: 'Twitter', icon: Twitter, href: '#' },
  { name: 'LinkedIn', icon: Linkedin, href: '#' },
  { name: 'Instagram', icon: Instagram, href: '#' },
  { name: 'GitHub', icon: Github, href: '#' },
]

export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">V</span>
              </div>
              <span className="font-display text-2xl font-bold gradient-text">
                VidyaLabs
              </span>
            </Link>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-sm">
              Transforming ideas into intelligent digital solutions. AI-powered, scalable, and future-ready software for modern businesses.
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-gray-600 dark:text-gray-400">
                <Mail className="w-5 h-5 text-primary-500 mt-0.5 flex-shrink-0" />
                <div className="flex flex-col gap-1">
                  <a href="mailto:rkrajesh.pgi@gmail.com" className="hover:text-primary-500 transition-colors">
                    rkrajesh.pgi@gmail.com
                  </a>
                  <a href="mailto:info@vidyalabs.com" className="hover:text-primary-500 transition-colors">
                    info@vidyalabs.com
                  </a>
                  <a href="mailto:support@vidyalabs.com" className="hover:text-primary-500 transition-colors">
                    support@vidyalabs.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3 text-gray-600 dark:text-gray-400">
                <Phone className="w-5 h-5 text-primary-500 mt-0.5 flex-shrink-0" />
                <div className="flex flex-col gap-1">
                  <a href="tel:+919140878191" className="hover:text-primary-500 transition-colors">
                    +91 9140878191
                  </a>
                  <a href="tel:+919140189586" className="hover:text-primary-500 transition-colors">
                    +91 9140189586
                  </a>
                  <a href="tel:+918004901175" className="hover:text-primary-500 transition-colors">
                    +91 8004901175
                  </a>
                  <a href="tel:+917318582007" className="hover:text-primary-500 transition-colors">
                    +91 7318582007
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                <MapPin className="w-5 h-5 text-primary-500 flex-shrink-0" />
                <span>Bangalore, India</span>
              </div>
              <div className="flex items-start gap-3 text-gray-600 dark:text-gray-400">
                <MessageCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <div className="flex flex-col gap-1">
                  <a href="https://wa.me/919140878191" target="_blank" rel="noopener noreferrer" className="hover:text-green-500 transition-colors">
                    WhatsApp: +91 9140878191
                  </a>
                  <a href="https://wa.me/917318582007" target="_blank" rel="noopener noreferrer" className="hover:text-green-500 transition-colors">
                    WhatsApp: +91 7318582007
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Products</h3>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Support</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 dark:text-gray-400">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="mt-6 text-center text-sm text-gray-600 dark:text-gray-400">
            <p>&copy; {new Date().getFullYear()} VidyaLabs. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
