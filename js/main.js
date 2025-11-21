/**
 * AI Instructor Portfolio - Main JavaScript
 * Author: Dino
 * Description: Interactive functionality for portfolio website
 */

document.addEventListener('DOMContentLoaded', function () {
    // --- Mobile Menu Toggle ---
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', function () {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
            document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
            const expanded = navLinks.classList.contains('active');
            hamburger.setAttribute('aria-expanded', expanded ? 'true' : 'false');
            hamburger.setAttribute('aria-label', expanded ? '메뉴 닫기' : '메뉴 열기');
        });

        document.querySelectorAll('.nav-links a').forEach(function (link) {
            link.addEventListener('click', function () {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
                document.body.style.overflow = '';
                hamburger.setAttribute('aria-expanded', 'false');
                hamburger.setAttribute('aria-label', '메뉴 열기');
            });
        });
    }

    // --- Header Scroll Effect ---
    const header = document.getElementById('header');
    if (header) {
        window.addEventListener('scroll', function () {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

    // --- Tab Functionality ---
    const tabsContainer = document.querySelector('.tabs');
    if (tabsContainer) {
        const tabBtns = tabsContainer.querySelectorAll('.tab-btn');
        const tabContents = document.querySelectorAll('.tab-content');

        tabsContainer.addEventListener('click', function (e) {
            const clickedBtn = e.target.closest('.tab-btn');
            if (!clickedBtn) return;

            const tabId = clickedBtn.dataset.tab;

            tabBtns.forEach(function (btn) {
                btn.classList.remove('active');
                btn.setAttribute('aria-selected', 'false');
            });
            tabContents.forEach(function (content) {
                content.classList.remove('active');
                content.setAttribute('hidden', '');
            });

            clickedBtn.classList.add('active');
            clickedBtn.setAttribute('aria-selected', 'true');
            const targetContent = document.getElementById(tabId);
            if (targetContent) {
                targetContent.removeAttribute('hidden');
                setTimeout(() => targetContent.classList.add('active'), 50);
            }
        });
    }

    // --- Scroll Animations (IntersectionObserver) ---
    const animatedElements = document.querySelectorAll('.fade-in');
    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    animatedElements.forEach(function (el) {
        observer.observe(el);
    });

    // --- Active Nav Link on Scroll ---
    const sections = document.querySelectorAll('section[id]');
    const navLinksArray = document.querySelectorAll('nav .nav-links a[href^="#"]');

    let ticking = false;
    function updateActiveNavLink() {
        let currentSectionId = '';
        const scrollY = window.pageYOffset;

        sections.forEach(function (section) {
            const sectionTop = section.offsetTop - 100;
            if (scrollY >= sectionTop) {
                currentSectionId = section.getAttribute('id');
            }
        });

        navLinksArray.forEach(function (link) {
            link.classList.remove('active');
            link.removeAttribute('aria-current');
            if (link.getAttribute('href') === '#' + currentSectionId) {
                link.classList.add('active');
                link.setAttribute('aria-current', 'page');
            }
        });
        ticking = false;
    }

    window.addEventListener('scroll', function () {
        if (!ticking) {
            window.requestAnimationFrame(updateActiveNavLink);
            ticking = true;
        }
    });

    // --- Smooth Scrolling ---
    document.querySelectorAll('a[href^="#"]').forEach(function (link) {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // --- Initial animation trigger for Hero section ---
    document.querySelectorAll('#hero .fade-in').forEach(function (el) {
        el.classList.add('is-visible');
    });

    // --- History Filtering ---
    const filterBtns = document.querySelectorAll('.filter-btn');
    const historyCards = document.querySelectorAll('.showcase-card');

    if (filterBtns.length > 0) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Remove active class from all buttons
                filterBtns.forEach(b => { b.classList.remove('active'); b.setAttribute('aria-pressed', 'false'); });
                // Add active class to clicked button
                btn.classList.add('active');
                btn.setAttribute('aria-pressed', 'true');

                const filterValue = btn.getAttribute('data-filter');

                historyCards.forEach(card => {
                    if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                        card.style.display = 'flex';
                        // Re-trigger animation
                        card.classList.remove('is-visible');
                        setTimeout(() => card.classList.add('is-visible'), 50);
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
    }
});
