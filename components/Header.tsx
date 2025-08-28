'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ShoppingCart, Search, User, Menu, X } from 'lucide-react'
import { useCart } from '@/contexts/CartContext'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { state: cartState } = useCart()

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Contact', href: '/contact' },
    { name: 'Shop', href: '/shop' },
    { name: 'About', href: '/about' },
    { name: 'Where to buy', href: '/where-to-buy' },
  ]

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container-max">
                 <div className="flex items-center justify-between h-20 sm:h-24 md:h-28 px-4 sm:px-6 lg:px-8 relative">
                     {/* Logo */}
           <Link href="/" className="flex items-center px-2 sm:px-4">
             <Image 
               src="/images/01 logo.png" 
               alt="Twisted Kombucha Logo"
               width={120}
               height={48}
               className="h-16 sm:h-20 md:h-24 w-auto"
             />
           </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 absolute left-1/2 transform -translate-x-1/2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-brand-dark hover:text-primary-600 transition-colors duration-200 font-medium text-sm"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-6">
            <button 
              className="p-2 text-brand-dark hover:text-primary-600 transition-colors duration-200"
              aria-label="Search"
            >
              <Search className="h-5 w-5" />
            </button>
            <button 
              className="p-2 text-brand-dark hover:text-primary-600 transition-colors duration-200"
              aria-label="Account"
            >
              <User className="h-5 w-5" />
            </button>
            <Link 
              href="/cart"
              className="p-2 text-brand-dark hover:text-primary-600 transition-colors duration-200 relative"
              aria-label="Shopping cart"
            >
              <ShoppingCart className="h-5 w-5" />
              {cartState.itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartState.itemCount}
                </span>
              )}
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-brand-dark"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200">
            <nav className="px-4 py-4 space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block py-2 text-brand-dark hover:text-primary-600 transition-colors duration-200 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex items-center space-x-4 pt-4 border-t border-gray-200">
                <button 
                  className="p-2 text-brand-dark hover:text-primary-600 transition-colors duration-200"
                  aria-label="Search"
                >
                  <Search className="h-5 w-5" />
                </button>
                <button 
                  className="p-2 text-brand-dark hover:text-primary-600 transition-colors duration-200"
                  aria-label="Account"
                >
                  <User className="h-5 w-5" />
                </button>
                <Link 
                  href="/cart"
                  className="p-2 text-brand-dark hover:text-primary-600 transition-colors duration-200 relative"
                  aria-label="Shopping cart"
                >
                  <ShoppingCart className="h-5 w-5" />
                  {cartState.itemCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-primary-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                      {cartState.itemCount}
                    </span>
                  )}
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
