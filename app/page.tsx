import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Products from '@/components/Products'
import CTABanner from '@/components/CTABanner'
import Promise from '@/components/Promise'
import Testimonials from '@/components/Testimonials'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Products />
      <CTABanner />
      <Promise />
      <Testimonials />
      <Footer />
    </main>
  )
}
