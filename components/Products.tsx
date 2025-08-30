'use client'

import { motion } from 'framer-motion'
import { ShoppingCart, Heart, Star } from 'lucide-react'
import { useState } from 'react'
import { useCart } from '@/contexts/CartContext'

const products = [
  {
    id: 1,
    name: 'Ginger, Pineapple & Cascade Hops Kombucha',
    price: 24.85,
    subscriptionPrice: 22.37,
    image: '/images/product/prod-Ginger-Pineapple-Cascade-Hops.jpg',
    color: 'bg-gradient-to-br from-pink-400 to-pink-600',
    description: 'A refreshing blend of ginger, pineapple, and cascade hops for a unique taste experience.',
    variants: [
      { name: 'Single Bottle', price: 24.85, subscriptionPrice: 22.37 },
      { name: '4-Pack', price: 73.44, subscriptionPrice: 66.10 },
    ]
  },
  {
    id: 2,
    name: 'Hibiscus & Lavender Kombucha',
    price: 24.85,
    subscriptionPrice: 22.37,
    image: '/images/product/prod-Hibiscus-Lavender.jpg',
    color: 'bg-gradient-to-br from-purple-400 to-purple-600',
    description: 'A floral and calming combination of hibiscus and lavender.',
    variants: [
      { name: 'Single Bottle', price: 24.85, subscriptionPrice: 22.37 },
      { name: '4-Pack', price: 73.44, subscriptionPrice: 66.10 },
    ]
  },
  {
    id: 3,
    name: 'Strawberry, Hibiscus & Ginger Kombucha',
    price: 24.85,
    subscriptionPrice: 22.37,
    image: '/images/product/prod-Strawberry-Hibiscus-Ginger.jpg',
    color: 'bg-gradient-to-br from-orange-400 to-orange-600',
    description: 'A sweet and tangy blend of strawberry, hibiscus, and ginger.',
    variants: [
      { name: 'Single Bottle', price: 24.85, subscriptionPrice: 22.37 },
      { name: '4-Pack', price: 73.44, subscriptionPrice: 66.10 },
    ]
  },
  {
    id: 4,
    name: 'Natural Original Raw Kombucha',
    price: 24.85,
    subscriptionPrice: 22.37,
    image: '/images/product/prod-Natural.jpg',
    color: 'bg-gradient-to-br from-green-400 to-green-600',
    description: 'Our classic original kombucha with pure, natural fermentation.',
    variants: [
      { name: 'Single Bottle', price: 24.85, subscriptionPrice: 22.37 },
      { name: '4-Pack', price: 73.44, subscriptionPrice: 66.10 },
    ]
  }
]

export default function Products() {
  const [selectedProducts, setSelectedProducts] = useState<{[key: number]: number}>({})
  const { addItem } = useCart()

  const handleAddToCart = (productId: number, variantIndex: number) => {
    const product = products[productId - 1]
    const variant = product.variants[variantIndex]
    
    addItem({
      id: `${productId}-${variantIndex}`,
      title: product.name,
      price: variant.price,
      quantity: 1,
      variant: variant.name,
    })
  }

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-6 border border-green-200">
            <span className="w-2 h-2 bg-green-600 rounded-full animate-pulse"></span>
            Premium Products
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Choose Your
            <span className="block bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Flavor
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Each bottle is carefully crafted with live cultures and organic ingredients for the perfect balance of taste and wellness.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              {/* Product Card */}
              <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                {/* Product Image - Full Width */}
                <div className="relative h-72 bg-gradient-to-br from-gray-100 to-gray-200">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                  
                  {/* Rating Badge */}
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1">
                    <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                    <span className="text-xs font-medium text-gray-900">4.9</span>
                  </div>
                  
                  {/* Price Badge */}
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-full px-4 py-2">
                    <div className="text-lg font-bold text-gray-900">£{product.price}</div>
                  </div>
                  
                  {/* Quick Add Button */}
                  <button 
                    onClick={() => handleAddToCart(product.id, selectedProducts[product.id] || 0)}
                    className="absolute bottom-4 right-4 w-12 h-12 bg-white/95 backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-200 opacity-0 group-hover:opacity-100"
                    aria-label="Quick add to cart"
                  >
                    <ShoppingCart className="h-5 w-5 text-gray-700" />
                  </button>
                </div>

                {/* Product Info with Gradient Background */}
                <div className={`${product.color} p-6 text-white relative overflow-hidden`}>
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-2 right-2 w-16 h-16 border-2 border-white rounded-full"></div>
                    <div className="absolute bottom-2 left-2 w-8 h-8 border-2 border-white rounded-full"></div>
                  </div>
                  
                  <div className="relative z-10">
                    <h3 className="text-lg font-bold leading-tight mb-2">
                      {product.name}
                    </h3>
                    <p className="text-white/90 text-sm leading-relaxed mb-4">
                      {product.description}
                    </p>
                    
                    {/* Quick Actions */}
                    <div className="flex items-center gap-3">
                      <button 
                        onClick={() => handleAddToCart(product.id, selectedProducts[product.id] || 0)}
                        className="flex-1 bg-white/20 backdrop-blur-sm border border-white/30 text-white py-3 px-4 rounded-xl text-sm font-semibold hover:bg-white/30 hover:border-white/50 transition-all duration-200 group/btn"
                      >
                        <span className="group-hover/btn:translate-x-1 transition-transform inline-block">Add to Cart</span>
                      </button>
                      <button 
                        className="p-3 border border-white/30 rounded-xl hover:bg-white/20 hover:border-white/50 transition-all duration-200 group/heart"
                        aria-label="Add to wishlist"
                      >
                        <Heart className="h-4 w-4 text-white group-hover/heart:scale-110 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-12 max-w-4xl mx-auto border border-gray-200 shadow-lg">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Want to Try All Flavors?
            </h3>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Get our mixed case and discover your favorite kombucha flavor with our variety pack.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-lg hover:scale-105 transition-all duration-200">
                Shop Mixed Case
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold text-lg hover:border-green-600 hover:text-green-600 transition-all duration-200">
                Subscribe & Save 10%
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
