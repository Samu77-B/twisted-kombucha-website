'use client'

import { motion } from 'framer-motion'

export default function About() {
  return (
    <section className="py-20 bg-white">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-kombucha-green rounded-full"></span>
            Science Meets Flavor
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Crafted with
            <span className="block text-kombucha-green">Purpose</span>
          </h2>
           <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
             Developed during a Masters in Food Science to create the perfect balance of taste, health benefits, and quality you can trust.
           </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="w-16 h-16 bg-kombucha-green rounded-2xl flex items-center justify-center mx-auto mb-4">
              <img 
                src="/images/home page/backed-by-science-300x300.png" 
                alt="Science backed"
                className="w-10 h-10"
              />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Science Backed</h3>
            <p className="text-gray-600 text-sm">Developed during Masters in Food Science research</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="w-16 h-16 bg-kombucha-pink rounded-2xl flex items-center justify-center mx-auto mb-4">
              <img 
                src="/images/home page/probiotic-300x300.png" 
                alt="Live probiotics"
                className="w-10 h-10"
              />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Live Probiotics</h3>
            <p className="text-gray-600 text-sm">Gut-loving cultures for digestive health</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="w-16 h-16 bg-kombucha-orange rounded-2xl flex items-center justify-center mx-auto mb-4">
              <img 
                src="/images/home page/low-sugar-300x300.png" 
                alt="Low sugar"
                className="w-10 h-10"
              />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Low Sugar</h3>
            <p className="text-gray-600 text-sm">Only 3g per 100ml vs 11g in soft drinks</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="w-16 h-16 bg-gray-900 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <img 
                src="/images/home page/hand-crafted-300x300.png" 
                alt="Hand crafted"
                className="w-10 h-10"
              />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Hand Crafted</h3>
            <p className="text-gray-600 text-sm">Small batch traditional fermentation</p>
          </motion.div>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Column - Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                What Makes Our Kombucha Special?
              </h3>
              <div className="space-y-6">
                <p className="text-lg text-gray-600 leading-relaxed">
                  Twisted Kombucha was developed during my Masters in Food Science, where I conducted extensive microbiological, biochemical and analytical testing to understand the true benefits of fermentation.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  This research validated the physiological roles kombucha plays in supporting healthy digestive and immune function - turning science into delicious, functional beverages.
                </p>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-2xl">
              <p className="text-gray-700 italic mb-3">
                "Every batch is a perfect balance of traditional fermentation and modern food science."
              </p>
              <p className="text-sm font-medium text-gray-900">
                Lou Dillon – Founder, Food Scientist & Registered Nutritionist
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-gray-900">100%</div>
                <div className="text-sm text-gray-600">Natural</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">Raw</div>
                <div className="text-sm text-gray-600">Unpasteurized</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">Vegan</div>
                <div className="text-sm text-gray-600">Plant Based</div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-kombucha-green/20 to-kombucha-blue/20 rounded-3xl blur-xl"></div>
              <div className="relative bg-white rounded-2xl p-8 shadow-2xl">
                <img 
                  src="/images/home page/how-it-made.png" 
                  alt="How kombucha is made"
                  className="w-full h-auto rounded-xl"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center bg-gray-50 rounded-3xl p-12"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-8">
            Our Traditional Process
          </h3>
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="w-12 h-12 bg-kombucha-green text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Brew</h4>
              <p className="text-gray-600">Premium loose leaf tea brewed to perfection</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-kombucha-pink text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Ferment</h4>
              <p className="text-gray-600">SCOBY cultures work their magic for weeks</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-kombucha-orange text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Flavor</h4>
              <p className="text-gray-600">Natural ingredients create unique taste profiles</p>
            </div>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            The result? A tangy, refreshing beverage packed with living nutrition that invigorates your body and delights your senses.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
