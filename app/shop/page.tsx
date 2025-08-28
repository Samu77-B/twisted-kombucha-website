import Products from '@/components/Products'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function ShopPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/images/home page/taste-kombucha3.png)'
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative h-full flex items-center justify-center">
            <div className="text-center text-white px-4 sm:px-6 lg:px-8">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-script font-bold mb-6 text-kombucha-green">
                Shop Kombucha
              </h1>
              <p className="text-xl sm:text-2xl text-white/90 max-w-2xl mx-auto">
                Discover our range of handcrafted, probiotic-rich kombucha
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Bar */}
      <section className="bg-kombucha-green text-white py-4">
        <div className="container-max">
          <div className="flex flex-wrap justify-center items-center space-x-8 text-sm font-medium">
            <span className="flex items-center space-x-2">
              <span>✓</span>
              <span>Free UK Delivery on orders over £50</span>
            </span>
            <span className="flex items-center space-x-2">
              <span>✓</span>
              <span>Live Probiotics</span>
            </span>
            <span className="flex items-center space-x-2">
              <span>✓</span>
              <span>Raw & Unpasteurized</span>
            </span>
            <span className="flex items-center space-x-2">
              <span>✓</span>
              <span>Low Sugar</span>
            </span>
          </div>
        </div>
      </section>
      
      <Products />
      
      {/* Trust Indicators */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center">
            <h2 className="text-3xl font-serif font-bold text-brand-dark mb-8">
              Why Choose Twisted Kombucha?
            </h2>
            
            <div className="grid md:grid-cols-4 gap-8 mb-12">
              <div className="text-center">
                <img 
                  src="/images/home page/backed-by-science-300x300.png" 
                  alt="Backed by Science"
                  className="w-20 h-20 mx-auto mb-4"
                />
                <h3 className="text-lg font-bold text-brand-dark mb-2">
                  Backed by Science
                </h3>
                <p className="text-gray-600 text-sm">
                  Developed during Masters in Food Science
                </p>
              </div>
              
              <div className="text-center">
                <img 
                  src="/images/home page/hand-crafted-300x300.png" 
                  alt="Hand Crafted"
                  className="w-20 h-20 mx-auto mb-4"
                />
                <h3 className="text-lg font-bold text-brand-dark mb-2">
                  Hand Crafted
                </h3>
                <p className="text-gray-600 text-sm">
                  Small batch fermentation process
                </p>
              </div>
              
              <div className="text-center">
                <img 
                  src="/images/home page/probiotic-300x300.png" 
                  alt="Probiotic Rich"
                  className="w-20 h-20 mx-auto mb-4"
                />
                <h3 className="text-lg font-bold text-brand-dark mb-2">
                  Probiotic Rich
                </h3>
                <p className="text-gray-600 text-sm">
                  Living cultures for gut health
                </p>
              </div>
              
              <div className="text-center">
                <img 
                  src="/images/home page/great-taste-300x300.png" 
                  alt="Great Taste"
                  className="w-20 h-20 mx-auto mb-4"
                />
                <h3 className="text-lg font-bold text-brand-dark mb-2">
                  Great Taste
                </h3>
                <p className="text-gray-600 text-sm">
                  Delicious and refreshing flavors
                </p>
              </div>
            </div>
            
            <div className="flex justify-center">
              <img 
                src="/images/home page/trustpilot2.png" 
                alt="Trustpilot Reviews"
                className="h-16 w-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
