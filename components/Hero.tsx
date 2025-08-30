'use client'

import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { useState, useRef, useEffect } from 'react'

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const carouselRef = useRef<HTMLDivElement>(null)

  const heroProducts = [
    {
      id: 1,
      name: "Ginger Pineapple Cascade Hops",
      description: "A refreshing blend of ginger, pineapple, and cascade hops for a unique taste experience.",
      bgImage: "/images/Ginger%20Pineapple%20Cascade%20Hops.png",
      price: "£24.85"
    },
    {
      id: 2,
      name: "Natural Original Raw Kombucha",
      description: "Our classic original kombucha with pure, natural fermentation.",
      bgImage: "/images/Natural.jpg",
      price: "£24.85"
    },
    {
      id: 3,
      name: "Strawberry Hibiscus & Ginger",
      description: "A sweet and tangy blend of strawberry, hibiscus, and ginger.",
      bgImage: "/images/Strawberry%20Hibiscus%20%26%20Ginger.jpg",
      price: "£24.85"
    }
  ]

  // Auto-advance carousel every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isTransitioning) {
        nextSlide()
      }
    }, 5000)
    return () => clearInterval(interval)
  }, [currentSlide, isTransitioning])

  const goToSlide = (index: number) => {
    if (index === currentSlide || isTransitioning) return
    
    setIsTransitioning(true)
    setCurrentSlide(index)
    
    if (carouselRef.current) {
      const slideWidth = carouselRef.current.offsetWidth
      carouselRef.current.scrollTo({
        left: slideWidth * index,
        behavior: 'smooth'
      })
    }
    
    // Reset transition state after animation completes
    setTimeout(() => setIsTransitioning(false), 800)
  }

  const nextSlide = () => {
    const next = (currentSlide + 1) % heroProducts.length
    goToSlide(next)
  }

  const prevSlide = () => {
    const prev = (currentSlide - 1 + heroProducts.length) % heroProducts.length
    goToSlide(prev)
  }

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  }

  const contentVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  return (
    <section className="relative bg-white overflow-hidden -mt-28">
      {/* Hero Product Carousel - Full Width */}
      <div className="relative w-full">
        <div 
          ref={carouselRef}
          className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide"
          onScroll={(e) => {
            const target = e.target as HTMLDivElement
            const slideWidth = target.offsetWidth
            const currentIndex = Math.round(target.scrollLeft / slideWidth)
            if (currentIndex !== currentSlide) {
              setCurrentSlide(currentIndex)
            }
          }}
        >
          {heroProducts.map((product, index) => (
            <motion.div
              key={product.id}
              custom={index - currentSlide}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.4 }
              }}
              className="flex-shrink-0 w-full snap-center"
            >
              <div className="min-h-screen relative overflow-hidden flex items-center pt-28">
                {/* Full Size Background Image with Parallax Effect */}
                <motion.div 
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                  style={{
                    backgroundImage: `url(${product.bgImage})`,
                  }}
                  animate={{
                    scale: isTransitioning ? 1.05 : 1
                  }}
                  transition={{
                    duration: 0.8,
                    ease: "easeInOut"
                  }}
                >
                  {/* Dynamic overlay for better text readability */}
                  <motion.div 
                    className="absolute inset-0 bg-black/30"
                    animate={{
                      backgroundColor: isTransitioning ? "rgba(0,0,0,0.4)" : "rgba(0,0,0,0.3)"
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
                
                {/* Content Container with Staggered Animation */}
                <motion.div 
                  className="relative z-10 w-full max-w-4xl mx-auto px-8 md:px-16"
                  variants={contentVariants}
                  initial="hidden"
                  animate="visible"
                  key={`content-${currentSlide}`}
                >
                  <div className="text-center text-white space-y-8">
                    <motion.h2 
                      className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
                      variants={itemVariants}
                    >
                      {product.name}
                    </motion.h2>
                    <motion.p 
                      className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed"
                      variants={itemVariants}
                    >
                      {product.description}
                    </motion.p>
                    <motion.div 
                      className="text-4xl md:text-5xl font-bold"
                      variants={itemVariants}
                    >
                      {product.price}
                    </motion.div>
                    
                    {/* CTA Button with Enhanced Hover Effects */}
                    <motion.div 
                      className="pt-6"
                      variants={itemVariants}
                    >
                      <Link 
                        href="/shop"
                        className="inline-flex items-center justify-center gap-3 bg-white/20 backdrop-blur-sm border-2 border-white/30 text-white px-10 py-4 rounded-xl font-semibold text-xl hover:bg-white/30 hover:border-white/50 transition-all duration-300 group transform hover:scale-105 hover:shadow-2xl"
                      >
                        Shop Now
                        <ArrowRight className="h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
                      </Link>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Enhanced Carousel Navigation Arrows */}
        <motion.button
          onClick={prevSlide}
          className="absolute left-8 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm border border-white/30 text-white p-4 rounded-full hover:bg-white/30 transition-all duration-300 z-10 group"
          aria-label="Previous slide"
          whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.3)" }}
          whileTap={{ scale: 0.95 }}
        >
          <ChevronLeft className="h-8 w-8 group-hover:-translate-x-1 transition-transform duration-200" />
        </motion.button>
        
        <motion.button
          onClick={nextSlide}
          className="absolute right-8 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm border border-white/30 text-white p-4 rounded-full hover:bg-white/30 transition-all duration-300 z-10 group"
          aria-label="Next slide"
          whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.3)" }}
          whileTap={{ scale: 0.95 }}
        >
          <ChevronRight className="h-8 w-8 group-hover:translate-x-1 transition-transform duration-200" />
        </motion.button>

        {/* Enhanced Carousel Navigation Dots */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex space-x-4">
          {heroProducts.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white' : 'bg-white/50 hover:bg-white/80'
              }`}
              aria-label={`Go to slide ${index + 1}`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              animate={{
                scale: index === currentSlide ? 1.2 : 1,
                backgroundColor: index === currentSlide ? "rgba(255,255,255,1)" : "rgba(255,255,255,0.5)"
              }}
              transition={{ duration: 0.2 }}
            />
          ))}
        </div>

        {/* Progress Bar */}
        <motion.div 
          className="absolute bottom-0 left-0 h-1 bg-white/30"
          initial={{ width: 0 }}
          animate={{ width: `${((currentSlide + 1) / heroProducts.length) * 100}%` }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        />
      </div>
    </section>
  )
}
