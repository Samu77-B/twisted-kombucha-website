'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative bg-gray-50 overflow-hidden">
      {/* Main Content */}
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh] py-16 lg:py-24">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-kombucha-green/10 text-kombucha-green rounded-full text-sm font-medium">
                <span className="w-2 h-2 bg-kombucha-green rounded-full"></span>
                Artisan Crafted in London
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-[1.1]">
                Premium
                <span className="block text-kombucha-green">Kombucha</span>
                for Modern Life
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
                Scientifically crafted probiotic beverages that taste incredible and support your gut health. Made with live cultures, organic ingredients, and zero compromises.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/shop"
                className="inline-flex items-center justify-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-xl font-medium text-lg hover:bg-gray-800 transition-all duration-200 group"
              >
                Shop Now
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                href="/about"
                className="inline-flex items-center justify-center gap-2 border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-medium text-lg hover:border-gray-900 hover:text-gray-900 transition-all duration-200"
              >
                Our Story
              </Link>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-8 pt-8 border-t border-gray-200">
              <div>
                <div className="text-2xl font-bold text-gray-900">3g</div>
                <div className="text-sm text-gray-600">Sugar per 100ml</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">Live</div>
                <div className="text-sm text-gray-600">Probiotic Cultures</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">100%</div>
                <div className="text-sm text-gray-600">Natural Ingredients</div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Product Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              {/* Background Elements */}
              <div className="absolute -inset-4 bg-gradient-to-br from-kombucha-green/20 to-kombucha-blue/20 rounded-3xl blur-xl"></div>
              <div className="absolute inset-0 bg-white rounded-2xl shadow-2xl"></div>
              
              {/* Main Product Image */}
              <div className="relative p-8 lg:p-12">
                <Image
                  src="/images/home page/Twisted-Kombucha-Lou-bottle.jpg"
                  alt="Twisted Kombucha Bottles"
                  width={500}
                  height={600}
                  className="w-full h-auto object-contain rounded-xl"
                  priority
                />
              </div>

              {/* Floating Elements */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="absolute -top-4 -right-4 bg-kombucha-pink text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg"
              >
                Award Winning
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="absolute -bottom-4 -left-4 bg-white border border-gray-200 px-4 py-3 rounded-xl shadow-lg"
              >
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-kombucha-green rounded-full"></div>
                  <span className="text-sm font-medium text-gray-900">Live Cultures</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 fill-white">
          <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z"></path>
        </svg>
      </div>
    </section>
  )
}
