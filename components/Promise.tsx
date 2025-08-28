'use client'

import { motion } from 'framer-motion'
import { Heart, Leaf, Star } from 'lucide-react'

const promises = [
  {
    icon: Heart,
    title: 'Making Healthier Lifestyle',
    description: 'To support you in making healthier lifestyle choices by crafting a beverage to nourish your body while still feeling like a wholesome indulgence.',
    color: 'text-kombucha-pink'
  },
  {
    icon: Leaf,
    title: 'Handcrafted Kombucha',
    description: 'Our handcrafted kombucha is brewed with scientific excellence and integrity with an emphasis on health and tradition.',
    color: 'text-kombucha-green'
  },
  {
    icon: Star,
    title: 'Finest Natural Ingredients',
    description: 'We use only the finest natural ingredients, sustainable practices and good vibes poured into every small batch',
    color: 'text-kombucha-orange'
  }
]

export default function Promise() {
  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-brand-dark mb-4">
            Our Promise
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {promises.map((promise, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="mb-6">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 ${promise.color}`}>
                  <promise.icon className="h-8 w-8" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-4">
                {promise.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {promise.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="flex items-center justify-center space-x-6 text-sm font-medium text-gray-600">
            <span>Handmade</span>
            <span className="text-2xl">∘</span>
            <span>Vegan</span>
            <span className="text-2xl">∘</span>
            <span>Low sugar</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
