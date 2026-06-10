/* main.js — Shared across all pages */

/* =============================================
   Hamburger Menu
   ============================================= */
(function () {
  const hamburger = document.querySelector('.nav__hamburger');
  const mobileMenu = document.querySelector('.nav__mobile');
  const body = document.body;

  if (!hamburger || !mobileMenu) return;

  hamburger.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('is-open');
    hamburger.classList.toggle('is-open', isOpen);
    hamburger.setAttribute('aria-expanded', isOpen);
    body.style.overflow = isOpen ? 'hidden' : '';
  });

  // Close on outside click
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav') && mobileMenu.classList.contains('is-open')) {
      mobileMenu.classList.remove('is-open');
      hamburger.classList.remove('is-open');
      hamburger.setAttribute('aria-expanded', 'false');
      body.style.overflow = '';
    }
  });

  // Close on link click
  mobileMenu.querySelectorAll('.nav__mobile-link').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('is-open');
      hamburger.classList.remove('is-open');
      hamburger.setAttribute('aria-expanded', 'false');
      body.style.overflow = '';
    });
  });
})();

/* =============================================
   Active Nav Link Highlight
   ============================================= */
(function () {
  const current = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav__link, .nav__mobile-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === current || (current === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
})();

/* =============================================
   Scroll Shadow on Nav
   ============================================= */
(function () {
  const nav = document.querySelector('.nav');
  if (!nav) return;
  const onScroll = () => {
    nav.style.boxShadow = window.scrollY > 10
      ? '0 2px 16px rgba(0,0,0,0.08)'
      : 'none';
  };
  window.addEventListener('scroll', onScroll, { passive: true });
})();

/* =============================================
   Filter Buttons (magazine & calendar pages)
   ============================================= */
(function () {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('[data-category]');

  if (!filterBtns.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const cat = btn.dataset.filter;
      cards.forEach(card => {
        if (cat === 'all' || card.dataset.category === cat) {
          card.style.display = '';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
})();

/* =============================================
   Scroll Reveal (subtle fade-in)
   ============================================= */
(function () {
  if (!('IntersectionObserver' in window)) return;

  const targets = document.querySelectorAll('.card, .feature-item, .section-header');
  targets.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(16px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  targets.forEach(el => observer.observe(el));
})();