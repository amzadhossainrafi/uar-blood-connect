// Mobile Navigation Functionality
class MobileNavigation {
    constructor() {
        this.hamburger = document.getElementById('hamburger');
        this.navMenu = document.getElementById('navMenu');
        this.navLinks = document.querySelectorAll('.nav-link');
        this.logoLink = document.querySelector('.logo-link');
        this.isOpen = false;
        
        this.init();
    }
    
    init() {
        // Hamburger click event
        if (this.hamburger) {
            this.hamburger.addEventListener('click', () => this.toggleMenu());
        }
        
        // Logo click event - close menu if open
        if (this.logoLink) {
            this.logoLink.addEventListener('click', () => {
                if (this.isOpen) {
                    this.closeMenu();
                }
                // Allow default link behavior to proceed
            });
        }
        
        // Nav link click events
        this.navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                // Special handling for logout button
                if (link.id === 'logoutBtn') {
                    e.preventDefault();
                    this.handleLogout();
                }
                this.closeMenu();
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', (e) => this.handleClickOutside(e));
        
        // Close menu on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') this.closeMenu();
        });
        
        // Update active link based on current page
        this.updateActiveLink();
    }
    
    toggleMenu() {
        this.isOpen = !this.isOpen;
        this.navMenu.classList.toggle('active');
        this.hamburger.classList.toggle('active');
        
        // Prevent body scroll when menu is open
        document.body.style.overflow = this.isOpen ? 'hidden' : '';
    }
    
    closeMenu() {
        this.isOpen = false;
        this.navMenu.classList.remove('active');
        this.hamburger.classList.remove('active');
        document.body.style.overflow = '';
    }
    
    handleClickOutside(event) {
        if (this.isOpen && 
            !this.navMenu.contains(event.target) && 
            !this.hamburger.contains(event.target) &&
            !this.logoLink.contains(event.target)) {
            this.closeMenu();
        }
    }
    
    handleLogout() {
        if (confirm('Are you sure you want to logout?')) {
            sessionStorage.removeItem('adminLoggedIn');
            sessionStorage.removeItem('loginTime');
            window.location.href = 'admin-login.html';
        }
    }
    
    updateActiveLink() {
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        
        this.navLinks.forEach(link => {
            const linkPage = link.getAttribute('href');
            if (currentPage === linkPage || (currentPage === '' && linkPage === 'index.html')) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }
}

// Initialize mobile navigation when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new MobileNavigation();
});

// Handle page resize
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        const hamburger = document.getElementById('hamburger');
        const navMenu = document.getElementById('navMenu');
        
        if (hamburger && navMenu) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    }
});

// Add smooth scrolling for anchor links
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