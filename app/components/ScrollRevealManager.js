'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

export default function ScrollRevealManager() {
  const pathname = usePathname();
  const observerRef = useRef(null);

  useEffect(() => {
    // 1. Accessibility & Feature Support Check
    if (typeof window === 'undefined') return;
    const prefersReducedMotion =
      window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      // Content remains completely visible with zero animation for reduced motion users
      return;
    }

    // Enable reveal styling
    document.documentElement.classList.add('ws-reveal-ready');

    // 2. Setup IntersectionObserver
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target;
            observer.unobserve(el);
            el.classList.add('is-revealed');

            // Stagger-based cleanup delay so hover states are 100% pristine afterwards
            const delayStr = el.style.getPropertyValue('--reveal-index') || '0';
            const idx = parseInt(delayStr, 10) || 0;
            const cleanupMs = Math.min(1800, 950 + idx * 110);

            setTimeout(() => {
              el.classList.add('reveal-complete');
            }, cleanupMs);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px 0px -65px 0px',
        threshold: 0.08,
      }
    );
    observerRef.current = observer;

    // 3. Scan & Register Elements
    const scanAndObserve = () => {
      if (!observerRef.current) return;
      const obs = observerRef.current;

      // Helper to register an element with a class
      const register = (el, className, index = 0) => {
        if (!el || el.hasAttribute('data-reveal-init')) return;
        el.setAttribute('data-reveal-init', 'true');
        if (index > 0 || (el.parentElement && el.parentElement.children.length > 1)) {
          el.style.setProperty('--reveal-index', index);
        }
        el.classList.add(className);
        obs.observe(el);
      };

      // Helper for grouped children with stagger
      const registerGroup = (containerSelector, itemSelector, className) => {
        const containers = document.querySelectorAll(containerSelector);
        containers.forEach((container) => {
          const items = container.querySelectorAll(itemSelector);
          items.forEach((item, idx) => {
            register(item, className, idx);
          });
        });
      };

      // 1. Homepage Hero Content
      const heroContent = document.querySelector('.hero-content');
      if (heroContent) {
        register(heroContent, 'ws-reveal-hero');
      }

      // 2. Heading Blocks & Coordinated Text Groups (Cascading Eyebrow -> Title -> Desc -> Action)
      const headingBlockSelectors = [
        '.ws-heading',
        '.ws-subhead',
        '.ws-showcase-head .ws-heading',
        '.ws-expertise-header',
        '.ws-planning-head',
        '.ws-faq-head',
        '.ws-gallery-header',
        '.ws-section-top',
        '.ws-cta-left',
        '.ws-intro-grid > div:first-child',
        '.ws-inquiry > div:first-child',
        '.ws-pricing > .ws-wrap > .ws-heading',
        '.ws-cleaning-guides-head',
        '.ws-related-head',
        '.ws-shelf-guide-left',
      ];
      document.querySelectorAll(headingBlockSelectors.join(', ')).forEach((el) => {
        register(el, 'ws-reveal-heading-block');
      });

      // 3. Service Cards (Staggered Fade-Up with 110ms cascade delay)
      registerGroup('.ws-areas', ':scope > .ws-area', 'ws-reveal-service-card');
      registerGroup('.ws-expertise-list', ':scope > .ws-expertise-card', 'ws-reveal-service-card');
      registerGroup('.ws-directory-links', ':scope > a', 'ws-reveal-service-card');
      registerGroup('.ws-blocks', ':scope > article', 'ws-reveal-service-card');
      registerGroup('.ws-reads', ':scope > a', 'ws-reveal-service-card');
      registerGroup('.ws-related-grid', ':scope > a', 'ws-reveal-service-card');
      registerGroup('.ws-shelf-guides-grid', ':scope > .ws-shelf-guide-card', 'ws-reveal-service-card');

      // 4. Feature & Benefit Cards (Staggered 95ms delay)
      registerGroup('.ws-trust-grid', ':scope > .ws-trust-item', 'ws-reveal-card');
      registerGroup('.ws-benefits-grid', ':scope > .ws-benefit-card', 'ws-reveal-card');
      registerGroup('.ws-planning-list', ':scope > .ws-planning-card', 'ws-reveal-card');
      registerGroup('.ws-faq', ':scope > .ws-faq-item', 'ws-reveal-card');
      registerGroup('.ws-cta-cards', ':scope > .ws-cta-card', 'ws-reveal-card');
      registerGroup('.ws-price-notes', ':scope > div', 'ws-reveal-card');
      registerGroup('.ws-cleaning-stacked-col', ':scope > .ws-cleaning-stacked-card', 'ws-reveal-card');

      // Standalone Cards
      document.querySelectorAll('.ws-contact-card, .ws-person, .ws-cleaning-featured-card, .ws-total').forEach((el) => {
        register(el, 'ws-reveal-card');
      });

      // 5. Gallery Images (Staggered 85ms reveal with gentle scaling)
      registerGroup('.ws-gallery-grid', ':scope > .ws-gallery-card', 'ws-reveal-gallery');

      // 6. Process Steps, Client Badges, Ticks & Pills
      registerGroup('.ws-process ol', ':scope > li', 'ws-reveal-item');
      registerGroup('.ws-clients div', ':scope > strong', 'ws-reveal-item');
      registerGroup('.ws-ticks', ':scope > li', 'ws-reveal-item');
      registerGroup('.ws-pills', ':scope > li', 'ws-reveal-item');
      registerGroup('.ws-article aside ol', ':scope > li', 'ws-reveal-item');

      // 7. Major Visual Images (Fade-in with Subtle Scale & Upward Motion)
      const imageSelectors = [
        '.ws-story-photo',
        '.ws-green-art',
        '.ws-person-pic',
        '.ws-page-intro figure',
        '.ws-article figure',
      ];
      document.querySelectorAll(imageSelectors.join(', ')).forEach((el) => {
        register(el, 'ws-reveal-image');
      });

      // 8. Standalone Content Sections (Smooth Fade-Up)
      const sectionSelectors = [
        '.ws-trust-highlights',
        '.ws-clients',
        '.ws-story',
        '.ws-about .ws-introduction',
        '.ws-green-grid',
        '.ws-company-section > .ws-wrap',
        '.ws-contact-page .ws-inquiry',
        '.ws-article > aside',
        '.ws-article > div > article',
        '.ws-legal',
        '.ws-calc',
        '.ws-guide-tools',
        '.ws-shelf-guides-section',
      ];
      document.querySelectorAll(sectionSelectors.join(', ')).forEach((el) => {
        register(el, 'ws-reveal-section');
      });

      // 9. Footer Content (Staggered Column Reveal & Bar)
      registerGroup('.ws-foot-cols', ':scope > .ws-foot-col', 'ws-reveal-footer-col');
      const footerBar = document.querySelector('.ws-foot-bar');
      if (footerBar) {
        register(footerBar, 'ws-reveal-footer-bar');
      }
    };

    // Run scan on initial mount and after layout paints
    const rafId = requestAnimationFrame(() => {
      scanAndObserve();
    });
    const timerId1 = setTimeout(scanAndObserve, 120);
    const timerId2 = setTimeout(scanAndObserve, 400);

    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(timerId1);
      clearTimeout(timerId2);
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [pathname]);

  return null;
}
