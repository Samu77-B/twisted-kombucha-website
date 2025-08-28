'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function CTABanner() {
  return (
    <section className="relative py-20 sm:py-24 lg:py-32 overflow-hidden">
      {/* Background with floating bottles */}
      <div className="absolute inset-0 bg-gradient-to-br from-kombucha-purple/10 via-kombucha-pink/5 to-kombucha-green/10">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-20 h-40 bg-gradient-to-b from-kombucha-orange/20 to-transparent rounded-full transform rotate-12 animate-pulse"></div>
          <div className="absolute top-32 right-32 w-16 h-32 bg-gradient-to-b from-kombucha-pink/20 to-transparent rounded-full transform -rotate-6 animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-32 left-1/3 w-24 h-48 bg-gradient-to-b from-kombucha-green/20 to-transparent rounded-full transform rotate-45 animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-20 right-1/4 w-12 h-24 bg-gradient-to-b from-kombucha-orange/20 to-transparent rounded-full transform -rotate-12 animate-pulse" style={{animationDelay: '3s'}}></div>
        </div>
      </div>

      <div className="container-max relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <span className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-white/80 backdrop-blur-sm rounded-full text-xs sm:text-sm font-medium text-gray-700 border border-white/20 shadow-lg">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-kombucha-green rounded-full mr-1.5 sm:mr-2"></span>
              Handmade
              <span className="mx-2 sm:mx-3 text-gray-400">•</span>
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-kombucha-green rounded-full mr-1.5 sm:mr-2"></span>
              Vegan
              <span className="mx-2 sm:mx-3 text-gray-400">•</span>
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-kombucha-green rounded-full mr-1.5 sm:mr-2"></span>
              Low sugar
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-script font-bold text-brand-dark mb-6 sm:mb-8 leading-tight"
          >
            Try Our Delicious Kombucha Today
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-lg sm:text-xl text-gray-600 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Experience the perfect blend of taste and health benefits with our handcrafted kombucha
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center"
          >
            <Link href="/shop" className="bg-primary-600 hover:bg-primary-700 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-xl transition-all duration-200 text-base sm:text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Shop Now
            </Link>
            <Link href="/about" className="border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-xl transition-all duration-200 text-base sm:text-lg">
              Learn More
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
