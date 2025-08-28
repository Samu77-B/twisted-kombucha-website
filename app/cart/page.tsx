'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useCart } from '@/contexts/CartContext'
import { Trash2, Minus, Plus, ShoppingBag } from 'lucide-react'
import Link from 'next/link'

export default function CartPage() {
  const { state: cartState, removeItem, updateQuantity, clearCart } = useCart()
  const [isLoading, setIsLoading] = useState(false)

  const handleCheckout = async () => {
    setIsLoading(true)
    // Here you would integrate with Shopify's checkout
    // For now, we'll just simulate a redirect
    setTimeout(() => {
      alert('Redirecting to Shopify checkout...')
      setIsLoading(false)
    }, 1000)
  }

  if (cartState.items.length === 0) {
    return (
      <main className="min-h-screen">
        <Header />
        <div className="pt-16 section-padding">
          <div className="container-max text-center">
            <ShoppingBag className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h1 className="text-3xl font-serif font-bold text-brand-dark mb-4">
              Your cart is empty
            </h1>
            <p className="text-gray-600 mb-8">
              Looks like you haven't added any kombucha to your cart yet.
            </p>
            <Link href="/shop" className="btn-primary">
              Start Shopping
            </Link>
          </div>
        </div>
        <Footer />
      </main>
    )
  }

  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-16 section-padding">
        <div className="container-max">
          <h1 className="text-4xl font-serif font-bold text-brand-dark mb-8">
            Shopping Cart
          </h1>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-xl font-bold text-brand-dark mb-6">
                  Cart Items ({cartState.itemCount})
                </h2>
                
                <div className="space-y-4">
                  {cartState.items.map((item) => (
                    <div key={item.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className="w-16 h-16 bg-kombucha-green rounded-lg flex items-center justify-center">
                          <span className="text-white font-bold text-sm">TK</span>
                        </div>
                        <div>
                          <h3 className="font-bold text-brand-dark">{item.title}</h3>
                          {item.variant && (
                            <p className="text-sm text-gray-600">{item.variant}</p>
                          )}
                          <p className="text-lg font-bold text-primary-600">
                            £{item.price.toFixed(2)}
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-1 rounded-full hover:bg-gray-100"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="h-4 w-4" />
                          </button>
                          <span className="w-8 text-center font-medium">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-1 rounded-full hover:bg-gray-100"
                            aria-label="Increase quantity"
                          >
                            <Plus className="h-4 w-4" />
                          </button>
                        </div>
                        
                        <button
                          onClick={() => removeItem(item.id)}
                          className="p-2 text-red-500 hover:bg-red-50 rounded-full"
                          aria-label="Remove item"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <button
                    onClick={clearCart}
                    className="text-red-600 hover:text-red-800 font-medium"
                  >
                    Clear Cart
                  </button>
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-lg p-6 sticky top-24">
                <h2 className="text-xl font-bold text-brand-dark mb-6">
                  Order Summary
                </h2>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>£{cartState.total.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span>Free</span>
                  </div>
                  <div className="border-t border-gray-200 pt-4">
                    <div className="flex justify-between font-bold text-lg">
                      <span>Total</span>
                      <span>£{cartState.total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
                
                <button
                  onClick={handleCheckout}
                  disabled={isLoading}
                  className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? 'Processing...' : 'Proceed to Checkout'}
                </button>
                
                <p className="text-xs text-gray-500 mt-4 text-center">
                  Secure checkout powered by Shopify
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
