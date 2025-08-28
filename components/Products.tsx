'use client'

import { motion } from 'framer-motion'
import { ShoppingCart, Heart } from 'lucide-react'
import { useState } from 'react'
import { useCart } from '@/contexts/CartContext'

const products = [
  {
    id: 1,
    name: 'Ginger, Pineapple & Cascade Hops Kombucha',
    price: 24.85,
    subscriptionPrice: 22.37,
    image: '/images/product/prod-Ginger-Pineapple-Cascade-Hops.jpg',
    color: 'bg-kombucha-orange',
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
    color: 'bg-kombucha-purple',
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
    color: 'bg-kombucha-pink',
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
    color: 'bg-kombucha-green',
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

  const backgroundColors = [
    'bg-kombucha-pink',
    'bg-kombucha-green', 
    'bg-kombucha-orange',
    'bg-gray-900'
  ]

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
            Our Products
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Choose Your
            <span className="block text-kombucha-green">Flavor</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Each bottle is carefully crafted with live cultures and organic ingredients for the perfect balance of taste and wellness.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              {/* Product Card with Colored Background */}
              <div className={`${backgroundColors[index]} rounded-3xl p-8 text-white relative overflow-hidden mb-4 aspect-square flex flex-col justify-between`}>
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-4 right-4 w-20 h-20 border-2 border-white rounded-full"></div>
                  <div className="absolute bottom-4 left-4 w-12 h-12 border-2 border-white rounded-full"></div>
                </div>
                
                {/* Product Image */}
                <div className="relative z-10 flex-1 flex items-center justify-center">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-32 h-40 object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                
                {/* Price Badge */}
                <div className="relative z-10 flex justify-between items-end">
                  <div>
                    <div className="text-2xl font-bold">£{product.price}</div>
                    <div className="text-white/80 text-sm">per bottle</div>
                  </div>
                  <button 
                    onClick={() => handleAddToCart(product.id, selectedProducts[product.id] || 0)}
                    className="w-12 h-12 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-200"
                    aria-label="Add to cart"
                  >
                    <ShoppingCart className="h-5 w-5" />
                  </button>
                </div>
              </div>

              {/* Product Info */}
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-gray-900 leading-tight">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {product.description}
                </p>
                
                {/* Quick Actions */}
                <div className="flex items-center gap-2">
                  <button className="flex-1 bg-gray-900 text-white py-2.5 px-4 rounded-xl text-sm font-medium hover:bg-gray-800 transition-colors">
                    Add to Cart
                  </button>
                  <button 
                    className="p-2.5 border border-gray-200 rounded-xl hover:border-gray-300 transition-colors"
                    aria-label="Add to wishlist"
                  >
                    <Heart className="h-4 w-4 text-gray-600" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Product Grid - Alternative Layout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16"
        >
          {products.map((product, index) => (
            <div key={`alt-${product.id}`} className="group cursor-pointer">
              <div className="bg-gray-50 rounded-2xl p-6 hover:bg-gray-100 transition-colors aspect-square flex flex-col items-center justify-center">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-20 h-24 object-contain mb-4 group-hover:scale-110 transition-transform duration-300"
                />
                <h4 className="text-sm font-medium text-gray-900 text-center leading-tight">
                  {product.name.split(' ').slice(0, 2).join(' ')}
                </h4>
              </div>
            </div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gray-50 rounded-3xl p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Want to Try All Flavors?
            </h3>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Get our mixed case and discover your favorite kombucha flavor with our variety pack.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gray-900 text-white px-8 py-4 rounded-xl font-medium text-lg hover:bg-gray-800 transition-colors">
                Shop Mixed Case
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-medium text-lg hover:border-gray-900 hover:text-gray-900 transition-all">
                Subscribe & Save 10%
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
