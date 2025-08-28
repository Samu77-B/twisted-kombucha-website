'use client'

import { motion } from 'framer-motion'

export default function LiveBanner() {
  return (
    <section className="bg-gradient-to-r from-kombucha-green via-kombucha-purple to-kombucha-pink py-4 overflow-hidden">
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: '-100%' }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        className="whitespace-nowrap text-white font-bold text-lg sm:text-xl"
      >
        <span className="inline-block px-8">
          LIVE HEALTHY LIVE HAPPY LIVE RAW LIVE HEALTHY LIVE HAPPY LIVE RAW LIVE HEALTHY LIVE HAPPY LIVE RAW LIVE HEALTHY LIVE HAPPY LIVE RAW LIVE HEALTHY LIVE HAPPY LIVE RAW LIVE HEALTHY LIVE HAPPY LIVE RAW
        </span>
      </motion.div>
    </section>
  )
}
