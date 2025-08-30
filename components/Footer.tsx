import Link from 'next/link'
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone } from 'lucide-react'

const footerLinks = {
  other: [
    { name: 'Privacy policy', href: '/privacy' },
    { name: 'Delivery and Return policy', href: '/delivery-returns' },
    { name: 'Terms and Conditions', href: '/terms' },
    { name: 'Sign up newsletter', href: '/newsletter' },
    { name: "FAQ's", href: '/faqs' },
  ],
  brewery: [
    { name: 'Unit 23, Crawley Road Studios', href: '#' },
    { name: '38 Crawley Road', href: '#' },
    { name: 'N226AG', href: '#' },
  ],
  hours: [
    { name: 'M-F: 9am - 5pm', href: '#' },
    { name: 'Sat: Closed', href: '#' },
    { name: 'Sun: Various markets', href: '#' },
  ],
  contact: [
    { name: '07731 609 598', href: 'tel:07731609598', icon: Phone },
    { name: 'Lou@twistedkombucha.co.uk', href: 'mailto:Lou@twistedkombucha.co.uk', icon: Mail },
  ]
}

const socialLinks = [
  { name: 'Twitter', href: '#', icon: Twitter },
  { name: 'Facebook', href: '#', icon: Facebook },
  { name: 'LinkedIn', href: '#', icon: Linkedin },
  { name: 'Instagram', href: '#', icon: Instagram },
]

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white">
      <div className="container-max">
        <div className="py-12 sm:py-16">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {/* OTHER */}
            <div>
              <h3 className="text-lg font-bold mb-4">OTHER</h3>
              <ul className="space-y-2">
                {footerLinks.other.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* BREWERY */}
            <div>
              <h3 className="text-lg font-bold mb-4">BREWERY</h3>
              <ul className="space-y-2">
                {footerLinks.brewery.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* OPEN HOURS */}
            <div>
              <h3 className="text-lg font-bold mb-4">OPEN HOURS</h3>
              <ul className="space-y-2">
                {footerLinks.hours.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* CONTACT US */}
            <div>
              <h3 className="text-lg font-bold mb-4">CONTACT US</h3>
              <ul className="space-y-2">
                {footerLinks.contact.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center space-x-2"
                    >
                      {link.icon && <link.icon className="h-4 w-4" />}
                      <span>{link.name}</span>
                    </Link>
                  </li>
                ))}
                <li className="mt-4">
                  <img 
                    src="/images/home%20page/trustpilot2.png" 
                    alt="Trustpilot"
                    className="h-8 w-auto"
                  />
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-700 mt-12 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <div className="flex flex-col items-center md:items-start space-y-2">
                <p className="text-gray-300">
                  © 2025 Twisted Kombucha.
                </p>
                <p className="text-gray-400 text-sm">
                  Designed and Built by{' '}
                  <Link 
                    href="https://paul-banning.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition-colors duration-200 underline"
                  >
                    Paul Banning
                  </Link>
                </p>
              </div>
              
              <div className="flex items-center space-x-4">
                {socialLinks.map((social) => (
                  <Link
                    key={social.name}
                    href={social.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                    aria-label={social.name}
                  >
                    <social.icon className="h-5 w-5" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
