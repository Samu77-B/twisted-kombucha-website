import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { MapPin, Clock, Phone, Mail } from 'lucide-react'

export default function WhereToBuyPage() {
  const stockists = [
    {
      name: "Waitrose",
      type: "Supermarket Chain",
      locations: "Select London stores",
      description: "Available in the health drink section",
      website: "waitrose.com",
      image: "/images/stockists/waitrose.png" // You may want to add actual logos
    },
    {
      name: "Planet Organic",
      type: "Organic Retailer",
      locations: "Multiple London locations",
      description: "Premium organic and health food stores",
      website: "planetorganic.com",
      image: "/images/stockists/planet-organic.png"
    },
    {
      name: "Whole Foods Market",
      type: "Natural Foods",
      locations: "London & surrounding areas",
      description: "In the refrigerated beverage section",
      website: "wholefoodsmarket.co.uk",
      image: "/images/stockists/whole-foods.png"
    }
  ]

  const markets = [
    {
      name: "Borough Market",
      day: "Saturday",
      time: "8:00 AM - 5:00 PM",
      location: "8 Southwark St, London SE1 1TL",
      description: "Find us at our regular stall for fresh kombucha and samples"
    },
    {
      name: "Broadway Market",
      day: "Saturday", 
      time: "9:00 AM - 5:00 PM",
      location: "Broadway Market, London E8 4QJ",
      description: "Weekly market appearance with full product range"
    },
    {
      name: "Brockley Market",
      day: "Saturday",
      time: "10:00 AM - 2:00 PM", 
      location: "Coulgate St, London SE4 2RW",
      description: "Local community market with special offers"
    }
  ]

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/images/home page/kombucha2.png)'
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative h-full flex items-center justify-center">
            <div className="text-center text-white px-4 sm:px-6 lg:px-8">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-script font-bold mb-6 text-kombucha-green">
                Where to Buy
              </h1>
              <p className="text-xl sm:text-2xl text-white/90 max-w-2xl mx-auto">
                Find Twisted Kombucha at these fine retailers and markets
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Retail Stockists */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-brand-dark mb-4">
              Retail Stockists
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              You can find our kombucha at these trusted retailers across London and the UK
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stockists.map((stockist, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 text-center">
                <div className="mb-4">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="h-8 w-8 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-bold text-brand-dark mb-2">
                    {stockist.name}
                  </h3>
                  <p className="text-sm text-primary-600 font-medium mb-2">
                    {stockist.type}
                  </p>
                  <p className="text-gray-600 mb-2">
                    {stockist.locations}
                  </p>
                  <p className="text-sm text-gray-500 mb-4">
                    {stockist.description}
                  </p>
                  <a 
                    href={`https://${stockist.website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 hover:underline text-sm"
                  >
                    Visit {stockist.website}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Markets */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-brand-dark mb-4">
              Find Us at Local Markets
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Visit us at these weekly markets for the freshest kombucha and to meet our team
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {markets.map((market, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-start mb-4">
                  <Clock className="h-5 w-5 text-primary-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-brand-dark mb-1">
                      {market.name}
                    </h3>
                    <p className="text-primary-600 font-medium">
                      {market.day} • {market.time}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start mb-4">
                  <MapPin className="h-5 w-5 text-gray-400 mt-1 mr-3 flex-shrink-0" />
                  <p className="text-gray-600 text-sm">
                    {market.location}
                  </p>
                </div>
                
                <p className="text-gray-600 text-sm">
                  {market.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Become a Stockist */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-serif font-bold text-brand-dark mb-6">
              Become a Stockist
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Interested in stocking Twisted Kombucha in your store? We'd love to work with retailers who share our passion for healthy, sustainable products.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-gray-50 rounded-lg p-6">
                <Phone className="h-8 w-8 text-primary-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-brand-dark mb-2">
                  Call Us
                </h3>
                <p className="text-gray-600 mb-4">
                  Speak directly with our team about wholesale opportunities
                </p>
                <a 
                  href="tel:07731609598"
                  className="text-primary-600 hover:underline font-medium"
                >
                  07731 609 598
                </a>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <Mail className="h-8 w-8 text-primary-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-brand-dark mb-2">
                  Email Us
                </h3>
                <p className="text-gray-600 mb-4">
                  Send us your enquiry and we'll get back to you within 24 hours
                </p>
                <a 
                  href="mailto:Lou@twistedkombucha.co.uk"
                  className="text-primary-600 hover:underline font-medium"
                >
                  Lou@twistedkombucha.co.uk
                </a>
              </div>
            </div>
            
            <div className="bg-primary-50 rounded-lg p-8">
              <h3 className="text-xl font-bold text-brand-dark mb-4">
                Why Stock Twisted Kombucha?
              </h3>
              <div className="grid md:grid-cols-3 gap-6 text-left">
                <div>
                  <h4 className="font-bold text-brand-dark mb-2">Premium Quality</h4>
                  <p className="text-gray-600 text-sm">Scientifically crafted with live probiotics and natural ingredients</p>
                </div>
                <div>
                  <h4 className="font-bold text-brand-dark mb-2">Strong Brand</h4>
                  <p className="text-gray-600 text-sm">Growing customer base and excellent Trustpilot reviews</p>
                </div>
                <div>
                  <h4 className="font-bold text-brand-dark mb-2">Support Included</h4>
                  <p className="text-gray-600 text-sm">Marketing materials, training, and ongoing support provided</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

