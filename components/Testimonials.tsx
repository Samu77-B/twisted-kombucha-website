'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: 'Mo Jenabi',
    date: '3 months ago',
    rating: 5,
    text: 'The Twisted Booch has become an ever present in my fridge. What started as an order fuelled by curiosity has developed into a regular part of my weekly healthy eating and drinking schedule. I also use apple cider vinegar, but find Twisted Kombucha less aggressive both in flavour and acidity. The variety of flavours also keep things interesting and I\'ve tried to make various cocktails using booch. Having also become more interested in where food comes from and sustainability in general, its great to know these are made in small batches and using natural fermentation techniques. Super tasty, super healthy super beneficial Twisted Booch!'
  },
  {
    id: 2,
    name: 'Evie Stables',
    date: '2 months ago',
    rating: 5,
    text: 'Twisted kombucha is not only one of the best tasting kombucha\'s that I have tried, but it has been incredibly beneficial to my digestion. Would definitely recommend and will be purchasing again!'
  },
  {
    id: 3,
    name: 'Alma Botes',
    date: '20 days ago',
    rating: 5,
    text: 'discovered these tasty drinks at the vegan market in Epsom. they taste amazing and there are new exciting flavours each time'
  },
  {
    id: 4,
    name: 'Sadie Whitfield',
    date: '7 days ago',
    rating: 5,
    text: 'Twisted kombucha make really incredible kombucha! I love all the different flavours and highly recommend checking them out if you\'re ever at a Surrey Vegan Market!'
  },
  {
    id: 5,
    name: 'Adrian Brown',
    date: '1 months ago',
    rating: 5,
    text: 'This is definitely the best Kombucha I\'ve ever had and I tried many..! They come in 4 delicious flavors with each in another vibrant color. Taste and color is really good but knowing about the knowledge Lou has about the science behind this product, holding a degree as a Nutrition Specialist, all the hard work and pure products used in this Kombucha makes it even better.'
  },
  {
    id: 6,
    name: 'Debbie Hryb',
    date: '3 days ago',
    rating: 5,
    text: 'I\'ve watched Lou\'s Kombucha grow from a Master\'s in science nutrition project where I was often a guinea pig trying all kinds of creations over many months. At first I couldn\'t drink them as they brought back memories from my own culinary attempts years earlier. But Lou perfected her craft and has created a wonderful brand regularly producing new flavours. I now drink them all, Willingly! As they are wonderful. My personal favourite being Apple and Mango. Beautiful and delicious and refreshing. I Highly recommend giving them a try.'
  }
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-brand-dark mb-4">
            See what people say about us
          </h2>
          <h3 className="text-2xl font-serif font-bold text-brand-dark">
            Testimonials
          </h3>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Testimonial Card */}
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg shadow-lg p-8 md:p-12"
          >
            <div className="flex items-center mb-6">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
              ))}
            </div>
            
            <blockquote className="text-lg text-gray-700 mb-6 italic">
              "{testimonials[currentIndex].text}"
            </blockquote>
            
            <div className="flex items-center justify-between">
              <div>
                <p className="font-bold text-brand-dark">
                  {testimonials[currentIndex].name}
                </p>
                <p className="text-sm text-gray-500">
                  {testimonials[currentIndex].date}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-center space-x-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-white shadow-lg hover:shadow-xl transition-shadow duration-200"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-6 w-6 text-brand-dark" />
            </button>
            
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    index === currentIndex ? 'bg-primary-600' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-white shadow-lg hover:shadow-xl transition-shadow duration-200"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-6 w-6 text-brand-dark" />
            </button>
          </div>
        </div>

        {/* Additional Testimonials Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <div key={testimonial.id} className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-sm text-gray-700 mb-4 italic line-clamp-4">
                  "{testimonial.text}"
                </blockquote>
                <div>
                  <p className="font-bold text-brand-dark text-sm">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-gray-500">
                    {testimonial.date}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
