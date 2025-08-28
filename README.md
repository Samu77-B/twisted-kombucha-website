# Twisted Kombucha - Shopify Ecommerce Website

A modern, responsive ecommerce website for Twisted Kombucha, built with Next.js and integrated with Shopify's Storefront API for a seamless shopping experience.

## 🚀 Features

- **Modern Design**: Clean, responsive design that matches the Twisted Kombucha brand
- **Shopify Integration**: Full ecommerce functionality powered by Shopify
- **Product Catalog**: Display products with variants, pricing, and subscription options
- **Shopping Cart**: Add to cart functionality with cart management
- **Responsive**: Mobile-first design that works on all devices
- **SEO Optimized**: Built with Next.js for excellent search engine optimization
- **Performance**: Fast loading times with optimized images and code splitting
- **Accessibility**: WCAG compliant with proper ARIA labels and semantic HTML

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Ecommerce**: Shopify Storefront API
- **Language**: TypeScript
- **Deployment**: Vercel (recommended)

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd twisted-kombucha-shopify
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp env.example .env.local
   ```
   
   Edit `.env.local` and add your Shopify credentials:
   ```env
   SHOPIFY_STORE_DOMAIN=your-store.myshopify.com
   SHOPIFY_STOREFRONT_ACCESS_TOKEN=your-storefront-access-token
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🔧 Shopify Setup

### 1. Create a Shopify Store
If you don't have a Shopify store yet:
1. Go to [shopify.com](https://shopify.com) and create a new store
2. Choose a plan (Basic Shopify or higher for API access)

### 2. Set up Storefront API
1. In your Shopify admin, go to **Settings > Apps and sales channels**
2. Click **Develop apps**
3. Create a new app
4. Go to **Configuration > Storefront API**
5. Enable the Storefront API
6. Create a new access token with the following scopes:
   - `unauthenticated_read_product_listings`
   - `unauthenticated_read_product_inventory`
   - `unauthenticated_read_product_tags`
   - `unauthenticated_read_selling_plans`
   - `unauthenticated_write_checkouts`
   - `unauthenticated_write_customers`
   - `unauthenticated_read_customer_tags`

### 3. Add Products
1. In your Shopify admin, go to **Products**
2. Add your kombucha products with:
   - Product titles and descriptions
   - Product images
   - Variants (Single Bottle, 4-Pack, etc.)
   - Pricing
   - Inventory tracking

### 4. Configure Shipping and Payment
1. Set up shipping zones and rates
2. Configure payment methods
3. Set up tax settings

## 🎨 Customization

### Colors and Branding
The color scheme is defined in `tailwind.config.js`:
```javascript
colors: {
  kombucha: {
    pink: '#ff6b9d',
    purple: '#8b5cf6',
    orange: '#f97316',
    green: '#10b981',
    blue: '#3b82f6',
  }
}
```

### Fonts
The website uses:
- **Inter** for body text
- **Playfair Display** for headings

### Components
All components are located in the `components/` directory and can be easily customized.

## 📱 Pages and Routes

- `/` - Homepage with hero, about, products, and testimonials
- `/shop` - Product catalog (to be implemented)
- `/subscribe` - Subscription management (to be implemented)
- `/where-to-buy` - Store locator (to be implemented)
- `/about` - About page (to be implemented)
- `/blog` - Blog section (to be implemented)
- `/contact` - Contact page (to be implemented)

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

### Other Platforms
The app can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- DigitalOcean App Platform
- Railway

## 🔍 SEO and Performance

- **Meta tags**: Optimized for search engines
- **Open Graph**: Social media sharing
- **Structured data**: Product schema markup
- **Image optimization**: Next.js Image component
- **Code splitting**: Automatic route-based splitting

## 🛡️ Security

- Environment variables for sensitive data
- Input validation and sanitization
- HTTPS enforcement in production
- Content Security Policy headers

## 📞 Support

For support or questions:
- Email: Lou@twistedkombucha.co.uk
- Phone: 07731 609 598

## 📄 License

This project is proprietary and confidential.

## 🎯 Next Steps

1. **Add Product Images**: Replace placeholder colors with actual product images
2. **Implement Cart Page**: Create a dedicated cart/checkout page
3. **Add User Accounts**: Customer login and order history
4. **Subscription Management**: Recurring order functionality
5. **Analytics**: Google Analytics and Shopify analytics integration
6. **Email Marketing**: Newsletter signup and abandoned cart emails
7. **Reviews System**: Product reviews and ratings
8. **Inventory Management**: Real-time stock updates

---

Built with ❤️ for Twisted Kombucha
