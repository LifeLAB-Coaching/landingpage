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
    const header = document.querySelector('.header');

    if (mobileMenuToggle && nav) {
        mobileMenuToggle.addEventListener('click', () => {
            mobileMenuToggle.classList.toggle('nav-open');
            nav.classList.toggle('nav-open');
            if (header) {
                header.classList.toggle('nav-open');
            }
            document.body.style.overflow = nav.classList.contains('nav-open') ? 'hidden' : '';
        });

        nav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenuToggle.classList.remove('nav-open');
                nav.classList.remove('nav-open');
                if (header) {
                    header.classList.remove('nav-open');
                }
                document.body.style.overflow = '';
            });
        });
    }

    // Header scroll effect
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

    // Google Analytics - Form Start Tracking
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        let formStarted = false;
        const trackStart = () => {
            if (!formStarted) {
                formStarted = true;
                const formId = form.getAttribute('id') || 'unknown-form';
                const formName = form.querySelector('input[name="Form Submitted"]')?.value || formId;
                if (typeof gtag === 'function') {
                    gtag('event', 'form_start', {
                        'form_id': formId,
                        'form_name': formName
                    });
                }
            }
        };
        // Trigger on any input focus or interaction
        form.querySelectorAll('input, textarea, select').forEach(input => {
            input.addEventListener('focus', trackStart, { once: true });
            input.addEventListener('input', trackStart, { once: true });
        });
    });
});
