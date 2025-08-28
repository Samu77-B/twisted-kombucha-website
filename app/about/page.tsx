import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/images/home page/Twisted-Kombucha-Lou-bottle.jpg)'
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative h-full flex items-center justify-center">
            <div className="text-center text-white px-4 sm:px-6 lg:px-8">
                             <h1 className="text-4xl sm:text-5xl lg:text-6xl font-script font-bold mb-6 text-kombucha-green">
                 About Us
               </h1>
            </div>
          </div>
        </div>
      </section>



      {/* About Content */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column */}
            <div>
              <h2 className="text-3xl font-serif font-bold text-brand-dark mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Twisted Kombucha was developed during my Masters in Food Science, carrying out microbiological, biochemical and analytical testing.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                After critically analysing kombucha in the laboratory I discovered the functional health benefits of the magical microbes created during fermentation.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                This validated the physiological roles kombucha plays to aid in healthy digestive and immune function.
              </p>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-lg text-gray-700 italic mb-4">
                  "Lou Dillon – Founder, Food Scientist & Registered Nutritionist"
                </p>
              </div>
            </div>

            {/* Right Column */}
            <div>
              <img 
                src="/images/home page/Twisted-Kombucha-Lou-bottle.jpg" 
                alt="Lou Dillon with Twisted Kombucha"
                className="w-full h-96 object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Mission Section */}
          <div className="mt-16 text-center">
            <h2 className="text-3xl font-serif font-bold text-brand-dark mb-6">
              Our Mission
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              To support you in making healthier lifestyle choices by crafting a beverage to nourish your body while still feeling like a wholesome indulgence.
            </p>
          </div>

          {/* Values Section */}
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="mb-4">
                <img 
                  src="/images/home page/hand-crafted-300x300.png" 
                  alt="Handcrafted"
                  className="w-16 h-16 mx-auto"
                />
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-2">
                Handcrafted
              </h3>
              <p className="text-gray-600">
                Our handcrafted kombucha is brewed with scientific excellence and integrity.
              </p>
            </div>
            
            <div className="text-center">
              <div className="mb-4">
                <img 
                  src="/images/home page/healthy-1-300x300.png" 
                  alt="Healthy"
                  className="w-16 h-16 mx-auto"
                />
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-2">
                Healthy
              </h3>
              <p className="text-gray-600">
                Made with 100% natural ingredients and live probiotic cultures.
              </p>
            </div>
            
            <div className="text-center">
              <div className="mb-4">
                <img 
                  src="/images/home page/low-sugar-300x300.png" 
                  alt="Low Sugar"
                  className="w-16 h-16 mx-auto"
                />
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-2">
                Low Sugar
              </h3>
              <p className="text-gray-600">
                Only 3g of sugar per 100ml compared to 11g in soft drinks.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
