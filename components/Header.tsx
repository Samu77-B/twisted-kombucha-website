'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ShoppingCart, Search, User, Menu, X } from 'lucide-react'
import { useCart } from '@/contexts/CartContext'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { state: cartState } = useCart()

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Contact', href: '/contact' },
    { name: 'Shop', href: '/shop' },
    { name: 'About', href: '/about' },
    { name: 'Where to buy', href: '/where-to-buy' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsScrolled(scrollTop > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 sm:h-24 md:h-28">
          {/* Logo - Far Left */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image 
                src="/images/01%20logo.png" 
                alt="Twisted Kombucha Logo"
                width={120}
                height={48}
                className="h-16 sm:h-20 md:h-24 w-auto"
              />
            </Link>
          </div>

          {/* Navigation and Actions - Far Right */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Navigation Links */}
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`transition-colors duration-200 font-medium text-sm ${
                  isScrolled 
                    ? 'text-brand-dark hover:text-primary-600' 
                    : 'text-white hover:text-gray-200'
                }`}
              >
                {item.name}
              </Link>
            ))}

            {/* Action Icons */}
            <button 
              className={`p-2 transition-colors duration-200 ${
                isScrolled 
                  ? 'text-brand-dark hover:text-primary-600' 
                  : 'text-white hover:text-gray-200'
              }`}
              aria-label="Search"
            >
              <Search className="h-5 w-5" />
            </button>
            <button 
              className={`p-2 transition-colors duration-200 ${
                isScrolled 
                  ? 'text-brand-dark hover:text-primary-600' 
                  : 'text-white hover:text-gray-200'
              }`}
              aria-label="Account"
            >
              <User className="h-5 w-5" />
            </button>
            <Link 
              href="/cart"
              className={`p-2 transition-colors duration-200 relative ${
                isScrolled 
                  ? 'text-brand-dark hover:text-primary-600' 
                  : 'text-white hover:text-gray-200'
              }`}
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
          <div className="md:hidden">
            <button
              className={`p-2 transition-colors duration-200 ${
                isScrolled 
                  ? 'text-brand-dark' 
                  : 'text-white'
              }`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className={`md:hidden border-t transition-colors duration-300 ${
            isScrolled 
              ? 'border-gray-200 bg-white/95 backdrop-blur-md' 
              : 'border-white/20 bg-black/20 backdrop-blur-md'
          }`}>
            <nav className="px-4 py-4 space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block py-2 transition-colors duration-200 font-medium ${
                    isScrolled 
                      ? 'text-brand-dark hover:text-primary-600' 
                      : 'text-white hover:text-gray-200'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className={`flex items-center space-x-4 pt-4 border-t transition-colors duration-300 ${
                isScrolled 
                  ? 'border-gray-200' 
                  : 'border-white/20'
              }`}>
                <button 
                  className={`p-2 transition-colors duration-200 ${
                    isScrolled 
                      ? 'text-brand-dark hover:text-primary-600' 
                      : 'text-white hover:text-gray-200'
                  }`}
                  aria-label="Search"
                >
                  <Search className="h-5 w-5" />
                </button>
                <button 
                  className={`p-2 transition-colors duration-200 ${
                    isScrolled 
                      ? 'text-brand-dark hover:text-primary-600' 
                      : 'text-white hover:text-gray-200'
                  }`}
                  aria-label="Account"
                >
                  <User className="h-5 w-5" />
                </button>
                <Link 
                  href="/cart"
                  className={`p-2 transition-colors duration-200 relative ${
                    isScrolled 
                      ? 'text-brand-dark hover:text-primary-600' 
                      : 'text-white hover:text-gray-200'
                  }`}
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
