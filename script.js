// Header scroll effect
const header = document.getElementById('header');
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
    
    lastScrollTop = scrollTop;
});

// Mobile menu toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    
    // Change icon
    const icon = mobileMenuBtn.querySelector('i');
    if (mobileMenu.classList.contains('active')) {
        icon.className = 'fas fa-times';
    } else {
        icon.className = 'fas fa-bars';
    }
});

// Close mobile menu when clicking on links
document.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        const icon = mobileMenuBtn.querySelector('i');
        icon.className = 'fas fa-bars';
    });
});

// Hero Carousel
class HeroCarousel {
    constructor() {
        this.currentSlide = 0;
        this.slides = document.querySelectorAll('.hero-slide');
        this.dots = document.querySelectorAll('.dot');
        this.prevBtn = document.getElementById('prevBtn');
        this.nextBtn = document.getElementById('nextBtn');
        this.progressBar = document.getElementById('carouselProgress');
        this.totalSlides = this.slides.length;
        this.autoPlayInterval = null;
        this.slideDuration = 5000; // 5 seconds
        
        this.init();
    }
    
    init() {
        this.setupEventListeners();
        this.startAutoPlay();
        this.updateProgressBar();
    }
    
    setupEventListeners() {
        // Previous button
        this.prevBtn.addEventListener('click', () => {
            this.prevSlide();
        });
        
        // Next button
        this.nextBtn.addEventListener('click', () => {
            this.nextSlide();
        });
        
        // Dot navigation
        this.dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                this.goToSlide(index);
            });
        });
        
        // Pause auto-play on hover
        const carousel = document.getElementById('heroCarousel');
        carousel.addEventListener('mouseenter', () => {
            this.stopAutoPlay();
        });
        
        carousel.addEventListener('mouseleave', () => {
            this.startAutoPlay();
        });
    }
    
    goToSlide(index) {
        // Remove active class from current slide and dot
        this.slides[this.currentSlide].classList.remove('active');
        this.dots[this.currentSlide].classList.remove('active');
        
        // Update current slide
        this.currentSlide = index;
        
        // Add active class to new slide and dot
        this.slides[this.currentSlide].classList.add('active');
        this.dots[this.currentSlide].classList.add('active');
        
        // Update progress bar
        this.updateProgressBar();
    }
    
    nextSlide() {
        const next = (this.currentSlide + 1) % this.totalSlides;
        this.goToSlide(next);
    }
    
    prevSlide() {
        const prev = (this.currentSlide - 1 + this.totalSlides) % this.totalSlides;
        this.goToSlide(prev);
    }
    
    startAutoPlay() {
        this.autoPlayInterval = setInterval(() => {
            this.nextSlide();
        }, this.slideDuration);
    }
    
    stopAutoPlay() {
        if (this.autoPlayInterval) {
            clearInterval(this.autoPlayInterval);
            this.autoPlayInterval = null;
        }
    }
    
    updateProgressBar() {
        const progress = ((this.currentSlide + 1) / this.totalSlides) * 100;
        this.progressBar.style.width = `${progress}%`;
    }
}

// Flavor Carousel
class FlavorCarousel {
    constructor() {
        this.currentSlide = 0;
        this.slides = document.querySelectorAll('.flavor-slide');
        this.dots = document.querySelectorAll('.flavor-dot');
        this.prevBtn = document.getElementById('flavorPrevBtn');
        this.nextBtn = document.getElementById('flavorNextBtn');
        this.totalSlides = this.slides.length;
        
        this.init();
    }
    
    init() {
        this.setupEventListeners();
    }
    
    setupEventListeners() {
        // Previous button
        this.prevBtn.addEventListener('click', () => {
            this.prevSlide();
        });
        
        // Next button
        this.nextBtn.addEventListener('click', () => {
            this.nextSlide();
        });
        
        // Dot navigation
        this.dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                this.goToSlide(index);
            });
        });
    }
    
    goToSlide(index) {
        // Remove active class from current slide and dot
        this.slides[this.currentSlide].classList.remove('active');
        this.dots[this.currentSlide].classList.remove('active');
        
        // Update current slide
        this.currentSlide = index;
        
        // Add active class to new slide and dot
        this.slides[this.currentSlide].classList.add('active');
        this.dots[this.currentSlide].classList.add('active');
    }
    
    nextSlide() {
        const next = (this.currentSlide + 1) % this.totalSlides;
        this.goToSlide(next);
    }
    
    prevSlide() {
        const prev = (this.currentSlide - 1 + this.totalSlides) % this.totalSlides;
        this.goToSlide(prev);
    }
}

// Testimonials Carousel
class TestimonialsCarousel {
    constructor() {
        this.currentSlide = 0;
        this.slides = document.querySelectorAll('.testimonial-slide');
        this.dots = document.querySelectorAll('.testimonial-dot');
        this.prevBtn = document.getElementById('testimonialPrevBtn');
        this.nextBtn = document.getElementById('testimonialNextBtn');
        this.totalSlides = this.slides.length;
        this.autoPlayInterval = null;
        this.slideDuration = 4000; // 4 seconds
        
        this.init();
    }
    
    init() {
        this.setupEventListeners();
        this.startAutoPlay();
    }
    
    setupEventListeners() {
        // Previous button
        this.prevBtn.addEventListener('click', () => {
            this.prevSlide();
        });
        
        // Next button
        this.nextBtn.addEventListener('click', () => {
            this.nextSlide();
        });
        
        // Dot navigation
        this.dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                this.goToSlide(index);
            });
        });
        
        // Pause auto-play on hover
        const carousel = document.getElementById('testimonialsCarousel');
        carousel.addEventListener('mouseenter', () => {
            this.stopAutoPlay();
        });
        
        carousel.addEventListener('mouseleave', () => {
            this.startAutoPlay();
        });
    }
    
    goToSlide(index) {
        // Remove active class from current slide and dot
        this.slides[this.currentSlide].classList.remove('active');
        this.dots[this.currentSlide].classList.remove('active');
        
        // Update current slide
        this.currentSlide = index;
        
        // Add active class to new slide and dot
        this.slides[this.currentSlide].classList.add('active');
        this.dots[this.currentSlide].classList.add('active');
    }
    
    nextSlide() {
        const next = (this.currentSlide + 1) % this.totalSlides;
        this.goToSlide(next);
    }
    
    prevSlide() {
        const prev = (this.currentSlide - 1 + this.totalSlides) % this.totalSlides;
        this.goToSlide(prev);
    }
    
    startAutoPlay() {
        this.autoPlayInterval = setInterval(() => {
            this.nextSlide();
        }, this.slideDuration);
    }
    
    stopAutoPlay() {
        if (this.autoPlayInterval) {
            clearInterval(this.autoPlayInterval);
            this.autoPlayInterval = null;
        }
    }
}

// Add to cart functionality
document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Get product info
        const card = btn.closest('.flavor-card') || btn.closest('.product-card');
        const productName = card.querySelector('h3').textContent;
        
        // Update cart count
        const cartCount = document.querySelector('.cart-count');
        const currentCount = parseInt(cartCount.textContent) || 0;
        cartCount.textContent = currentCount + 1;
        
        // Show success message
        showNotification(`${productName} added to cart!`);
    });
});

// Favorite button functionality
document.querySelectorAll('.favorite-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        
        const icon = btn.querySelector('i');
        if (icon.classList.contains('fas')) {
            icon.classList.remove('fas');
            icon.classList.add('far');
            showNotification('Removed from favorites');
        } else {
            icon.classList.remove('far');
            icon.classList.add('fas');
            showNotification('Added to favorites');
        }
    });
});

// Button click handlers
document.querySelectorAll('.btn-primary, .btn-secondary').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        const text = btn.textContent.trim();
        
        if (text.includes('Shop')) {
            showNotification('Redirecting to shop...');
        } else if (text.includes('Subscribe')) {
            showNotification('Subscription feature coming soon!');
        } else if (text.includes('Learn More')) {
            showNotification('Learn more feature coming soon!');
        }
    });
});

// Notification system
function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    
    // Style the notification
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #10b981;
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 0.5rem;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        font-weight: 500;
    `;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Initialize carousels when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new HeroCarousel();
    new FlavorCarousel();
    new TestimonialsCarousel();
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Add CSS for loading animation
const style = document.createElement('style');
style.textContent = `
    body {
        opacity: 0;
        transition: opacity 0.5s ease;
    }
    
    body.loaded {
        opacity: 1;
    }
    
    .notification {
        animation: slideIn 0.3s ease;
    }
    
    @keyframes slideIn {
        from {
            transform: translateX(100%);
        }
        to {
            transform: translateX(0);
        }
    }
    
    /* Add hover effects for feature cards */
    .feature-card {
        cursor: pointer;
    }
    
    .feature-card:hover .feature-icon {
        transform: scale(1.1);
        transition: transform 0.3s ease;
    }
    
    /* Add hover effects for promise cards */
    .promise-card {
        cursor: pointer;
    }
    
    .promise-card:hover .promise-icon {
        transform: scale(1.1);
        transition: transform 0.3s ease;
    }
    
    /* Add hover effects for process steps */
    .process-step {
        cursor: pointer;
    }
    
    .process-step:hover .step-icon {
        transform: scale(1.1);
        transition: transform 0.3s ease;
    }
`;
document.head.appendChild(style);
