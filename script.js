// Slider functionality
    function scrollSlider(direction) {
        const container = document.querySelector('.slider-container');
        const isMobile = window.innerWidth <= 768;
        
        if (isMobile) {
            // Mobile: scroll one card at a time
            const cardWidth = container.querySelector('.service-card').offsetWidth + 15; // including margin
            container.scrollBy({
                left: direction * cardWidth,
                behavior: 'smooth'
            });
        } else {
            // Desktop: scroll multiple cards
            container.scrollBy({
                left: direction * 300,
                behavior: 'smooth'
            });
        }
    }

    // Auto scroll functionality
    let autoScrollInterval;

    function startAutoScroll() {
        autoScrollInterval = setInterval(() => {
            const container = document.querySelector('.slider-container');
            const maxScroll = container.scrollWidth - container.clientWidth;
            const isMobile = window.innerWidth <= 768;
            
            if (container.scrollLeft >= maxScroll) {
                container.scrollTo({ left: 0, behavior: 'smooth' });
            } else {
                if (isMobile) {
                    const cardWidth = container.querySelector('.service-card').offsetWidth + 15;
                    container.scrollBy({ left: cardWidth, behavior: 'smooth' });
                } else {
                    container.scrollBy({ left: 300, behavior: 'smooth' });
                }
            }
        }, 3000);
    }

    function stopAutoScroll() {
        clearInterval(autoScrollInterval);
    }

    // Start auto scroll when page loads
    document.addEventListener('DOMContentLoaded', startAutoScroll);

    // Pause auto scroll on hover
    document.querySelector('.slider-container').addEventListener('mouseenter', stopAutoScroll);
    document.querySelector('.slider-container').addEventListener('mouseleave', startAutoScroll);

    // Restart auto scroll on window resize
    window.addEventListener('resize', () => {
        stopAutoScroll();
        startAutoScroll();
    });
    
    // Carousel caption animation on page load
    window.addEventListener("load", function() {

    document.querySelector(".carousel-item.active .carousel-caption")
            .classList.add("show-animate");
    });

    // buttons active state
        const buttons = document.querySelectorAll(".btn-portfolio");

    buttons.forEach(btn => {
        btn.addEventListener("click", () => {
        buttons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        });

        // FOCUS state
        btn.addEventListener("focus", () => {
        buttons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        });
    });

    
// ==================== FAQ Functionality ====================
function toggleFaq(element) {
    const faqItem = element.parentElement;  // الـ faq-item الأساسي
    const isActive = faqItem.classList.contains('active');
    
    // أقفل كل الأسئلة المفتوحة في نفس التاب
    const currentTab = faqItem.closest('.tab-content'); 
    currentTab.querySelectorAll('.faq-item').forEach(item => {
        item.classList.remove('active');
        const icon = item.querySelector('.faq-toggle i');
        if (icon) icon.className = 'fas fa-plus';
    });
    
    // افتح السؤال اللي اضغط عليه لو مش مفتوح
    if (!isActive) {
        faqItem.classList.add('active');
        const icon = faqItem.querySelector('.faq-toggle i');
        if (icon) icon.className = 'fas fa-minus';
    }
}

// ==================== Tabs Switching ====================
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('.faq-tab').forEach(tab => {
        tab.addEventListener('click', function() {
            // شيل active من كل الأزرار
            document.querySelectorAll('.faq-tab').forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            
            // اخفي كل التابات
            document.querySelectorAll('.tab-content').forEach(content => {
                content.style.display = 'none';
            });
            
            // اعرض التاب المطلوب
            const targetTab = this.getAttribute('data-tab');
            document.getElementById(targetTab).style.display = 'block';
            
            // رجع الأيقونات كلها لحالة + في التاب
            document.querySelectorAll(`#${targetTab} .faq-item`).forEach(item => {
                item.classList.remove('active');
                const icon = item.querySelector('.faq-toggle i');
                if (icon) icon.className = 'fas fa-plus';
            });
        });
    });
});

// Back to top functionality
    window.addEventListener('scroll', function() {
    const backToTopBtn = document.getElementById('backToTop');
    if (window.pageYOffset > 300) {
        backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    });

    document.getElementById('backToTop').addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Newsletter form functionality
    document.querySelector('.newsletter-form').addEventListener('submit', function(e) {
        e.preventDefault();
        const email = document.querySelector('.newsletter-input').value;
        if (email) {
            alert('Thank you for subscribing!');
            document.querySelector('.newsletter-input').value = '';
        }
    });

    

// ِAnimation carsousel Caption
    document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector('#carouselExampleDark'); 
    const captions = carousel.querySelectorAll('.carousel-caption');

    
    captions[0].classList.add("show-animate");

    
        carousel.addEventListener('slid.bs.carousel', function () {
        
        captions.forEach(caption => caption.classList.remove("show-animate"));

        const activeItem = carousel.querySelector('.carousel-item.active .carousel-caption');
        if (activeItem) {
        activeItem.classList.add("show-animate");
        }
    });
    });

    // Animation About 
    document.addEventListener("DOMContentLoaded", function () {
    const aboutSection = document.querySelector(".about");

    const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
        aboutSection.classList.add("show-animate");
        } else {
        aboutSection.classList.remove("show-animate");
        }
    });
    }, { threshold: 0.2 }); 

    observer.observe(aboutSection);
    });

// Animation service cards
    document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll('.services');

    function checkVisibility() {
        sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100 && rect.bottom > 0) {
            section.classList.add("show-animate");
        } else {
            section.classList.remove("show-animate"); 
        }
        });
    }

    checkVisibility();
        
    window.addEventListener("scroll", checkVisibility);
    });

// Animation Info cards
document.addEventListener("DOMContentLoaded", function () {
    const items = document.querySelectorAll('.info'); 

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show-animate");
            }
            else {
                entry.target.classList.remove("show-animate");
            }
        });
    }, {
        threshold: 0.2 
    });

    items.forEach(item => {
        observer.observe(item);
    });
});


// Animation Info Services Section
document.addEventListener("DOMContentLoaded", function () {
    const infoServices = document.querySelector(".info-services");

    function checkVisibility() {
        if (!infoServices) return;
        const rect = infoServices.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100 && rect.bottom > 0) {
            infoServices.classList.add("show-animate");
        } else {
            infoServices.classList.remove("show-animate");
        }
    }

    checkVisibility();
    window.addEventListener("scroll", checkVisibility);
});


document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(
        ".portfolio-card-1, .portfolio-card-2, .portfolio-card-3, .portfolio-card-4, .portfolio-card-5, .portfolio-card-6, .btn-view"
    );
    const filterButtons = document.querySelectorAll(".btn-portfolio");
    const portfolioCards = document.querySelectorAll("[data-category]");

    // ====== Animation on scroll ======
    function checkVisibility() {
        cards.forEach((card) => {
            const rect = card.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100 && rect.bottom > 0) {
                card.classList.add("show");
            } else {
                card.classList.remove("show");
            }
        });
    }

    checkVisibility();
    window.addEventListener("scroll", checkVisibility);

    // ====== Filtering ======
    filterButtons.forEach((button) => {
        button.addEventListener("click", () => {
            // شيل active من كل الازرار
            filterButtons.forEach((btn) => btn.classList.remove("active"));
            button.classList.add("active");

            const category = button.textContent.toLowerCase();

            portfolioCards.forEach((card) => {
                const cardCategory = card.getAttribute("data-category");

                if (category === "all" || cardCategory === category) {
                    card.style.display = "block";

                    // reset animation
                    card.classList.remove("show");
                    setTimeout(() => {
                        card.classList.add("show");
                    }, 100); 
                } else {
                    card.style.display = "none";
                }
            });
        });
    });
});

// Animation pricing section
    document.addEventListener("DOMContentLoaded", function () {
        const cards = document.querySelectorAll(".pricing-card");

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show-animate");
                } else {
                    entry.target.classList.remove("show-animate"); 
                }
            });
        }, {
            threshold: 0.2
        });

        cards.forEach(card => {
            observer.observe(card);
        });
    });

// Animation FAQ section
document.addEventListener("DOMContentLoaded", function () {
        
    const elements = document.querySelectorAll(
        ".faq-tabs, .faq-item-1, .faq-item-2, .faq-item-3, .faq-footer"
    );

    function checkVisibility() {
        elements.forEach((el) => {
        const rect = el.getBoundingClientRect();

        if (rect.top < window.innerHeight - 50 && rect.bottom > 0) {
            el.classList.add("show");
        } else {
            el.classList.remove("show");
        }
        });
    }

    checkVisibility();

    window.addEventListener("scroll", checkVisibility);
});
    
// Animation Team Members
    document.addEventListener("DOMContentLoaded", function () {
    const teamCards = document.querySelectorAll(
        ".card-team-1, .card-team-2, .card-team-3, .card-team-4, .card-team-5, .card-team-6, .card-team-7, .card-team-8"
    );

    function checkVisibility() {
        teamCards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100 && rect.bottom > 0) {
            card.classList.add("show");
        } else {
            card.classList.remove("show"); 
        }
        });
    }

    window.addEventListener("scroll", checkVisibility);
    window.addEventListener("load", checkVisibility);
    });

// Animation Blog Posts Section

    document.addEventListener("DOMContentLoaded", function () {
    const sideItems = document.querySelectorAll(
        ".side-left-1, .side-left-2, .side-right-1, .side-right-2, .side-right-3, .side-right-4"
    );

    function checkVisibility() {
        sideItems.forEach((item) => {
        const rect = item.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100 && rect.bottom > 0) {
            item.classList.add("show"); 
        } else {
            item.classList.remove("show"); 
        }
        });
    }

    window.addEventListener("scroll", checkVisibility);
    window.addEventListener("load", checkVisibility);
    });
// Animation Contact Section
    document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(
        ".card-contact-form, .card-contact-info, .card-map"
    );

    function checkVisibility() {
        cards.forEach((card) => {
            const rect = card.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100 && rect.bottom > 0) {
                card.classList.add("show"); // يظهر
            } else {
                card.classList.remove("show"); // يختفي
            }
        });
    }

    window.addEventListener("scroll", checkVisibility);
    // checkVisibility(); 
    });

// Animation Services Section Cards
    
    document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".service-card");

    function checkVisibility() {
        cards.forEach((card, index) => {
            const rect = card.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100 && rect.bottom > 0) {
                card.classList.add("show");
                card.style.transitionDelay = `${index * 0.2}s`; 
            } else {
                card.classList.remove("show"); 
            }
        });
    }

    window.addEventListener("scroll", checkVisibility);
    checkVisibility(); 
});




// end javascript file






