document.addEventListener('DOMContentLoaded', () => {
    // FAQ Accordion
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(btn => {
        btn.addEventListener('click', () => {
            const answer = btn.nextElementSibling;
            const isOpen = answer.classList.contains('open');

            // close all
            document.querySelectorAll('.faq-answer').forEach(ans => ans.classList.remove('open'));
            document.querySelectorAll('.faq-question span').forEach(span => span.textContent = '+');

            if (!isOpen) {
                answer.classList.add('open');
                btn.querySelector('span').textContent = '−';
            }
        });
    });

    // Intersection Observer for fade-in animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0 });

    document.querySelectorAll('.fade-in-up').forEach(el => observer.observe(el));

    // Mobile Menu
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const nav = document.querySelector('.nav');

    if (mobileMenuToggle && nav) {
        mobileMenuToggle.addEventListener('click', () => {
            mobileMenuToggle.classList.toggle('nav-open');
            nav.classList.toggle('nav-open');
            document.body.style.overflow = nav.classList.contains('nav-open') ? 'hidden' : '';
        });

        nav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenuToggle.classList.remove('nav-open');
                nav.classList.remove('nav-open');
                document.body.style.overflow = '';
            });
        });
    }

    // Header scroll effect
    const header = document.querySelector('.header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

    // Back to top
    const backToTop = document.getElementById('back-to-top');
    if (backToTop) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 150) {
                backToTop.classList.add('visible');
            } else {
                backToTop.classList.remove('visible');
            }
        });
        backToTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
});
