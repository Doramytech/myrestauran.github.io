(function() {
  'use strict';

  // ===== DOM READY =====
  document.addEventListener('DOMContentLoaded', init);

  function init() {
    initMobileMenu();
    initDropdown();
    initMenuTabs();
    initVideoModal();
    initReadMore();
    initReservationForm();
    initSmoothScroll();
    initGSAPAnimations();
  }

  window.addEventListener("resize", () => {
    ScrollTrigger.refresh();
});
  // ===== GSAP ANIMATIONS =====
  function initGSAPAnimations() {
    gsap.registerPlugin(ScrollTrigger);

   
    // Nav links stagger in
    gsap.from('.header-content .nav-link, .header-content #link, .btn-book', {
      y: -20,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
      delay: 0.5,
      ease: 'power2.out'
    });

    // HERO SECTION
    const heroTl = gsap.timeline();

    heroTl.from('.hero .text h1', {
      x: -100,
      opacity: 0,
      duration: 1.2,
      ease: 'power3.out'
    })
    .from('.hero .text p', {
      x: -80,
      opacity: 0,
      duration: 1,
      ease: 'power2.out'
    }, '-=0.7')
    .from('.hero .hero-btn', {
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: 'back.out(1.7)'
    }, '-=0.5')
    .from('.hero .image img', {
      scale: 0,
      rotation: -180,
      opacity: 0,
      duration: 1.5,
      ease: 'elastic.out(1, 0.5)'
    }, '-=1');

    // Hero parallax on scroll
    gsap.to('.hero .image img', {
      y: -80,
      scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        scrub: 1
      }
    });

    gsap.to('.hero .text', {
      y: -40,
      opacity: 0.3,
      scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        scrub: 1
      }
    });

    //SERVICES
    gsap.from('#services .box1', {
      y: 80,
      opacity: 0,
      rotationX: 15,
      duration: 1,
      stagger: 0.2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '#services',
        start: 'top 75%',
        toggleActions: 'play none none none'
      }
    });

    gsap.from('#services .box1 span', {
      scale: 0,
      rotation: 360,
      duration: 0.8,
      stagger: 0.2,
      delay: 0.3,
      ease: 'back.out(2)',
      scrollTrigger: {
        trigger: '#services',
        start: 'top 70%',
        toggleActions: 'play none none none'
      }
    });

    // ABOUT SECTION
    gsap.from('#about .page1 img', {
      // x: -60,
      opacity: 0,
      scale: 0.9,
      duration: 1,
      stagger: 0.15,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '#about',
        start: 'top 70%',
        toggleActions: 'play none none none'
      }
    });

    gsap.from('#about .page2 > *', {
      x: 60,
      opacity: 0,
      duration: 0.8,
      stagger: 0.12,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '#about',
        start: 'top 65%',
        toggleActions: 'play none none none'
      }
    });

    // Experience numbers count up animation
    const expNumbers = document.querySelectorAll('.experience h1');
    expNumbers.forEach(num => {
      const target = parseInt(num.textContent);
      gsap.from(num, {
        textContent: 0,
        duration: 2,
        ease: 'power1.out',
        snap: { textContent: 1 },
        scrollTrigger: {
          trigger: num,
          start: 'top 80%',
          toggleActions: 'play none none none'
        },
        onUpdate: function() {
          num.textContent = Math.ceil(this.targets()[0].textContent);
        }
      });
    });

    // FOOD MENU TABS
    gsap.from('#menuss .mm', {
      y: 40,
      opacity: 0,
      duration: 0.8,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '#menuss',
        start: 'top 80%',
        toggleActions: 'play none none none'
      }
    });

    gsap.from('#menuss .label', {
      y: 30,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '#menuss',
        start: 'top 75%',
        toggleActions: 'play none none none'
      }
    });

    // MENU ITEMS - Cards cascade in
    const menuContainers = document.querySelectorAll('.chicken-container');
    menuContainers.forEach(container => {
      gsap.from(container.querySelectorAll('.chicken'), {
        // y: 60,
        opacity: 0,
        // x: (index) => index % 2 === 0 ? -30 : 30,
        duration: 0.7,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: container,
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      });
    });


    // VIDEO SECTION
    gsap.from('#mymenu .video', {
      scale: 0.9,
      opacity: 0,
      duration: 1.2,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '#mymenu',
        start: 'top 75%',
        toggleActions: 'play none none none'
      }
    });

    gsap.from('#playBtn', {
      scale: 0,
      rotation: -180,
      opacity: 0,
      duration: 1,
      delay: 0.3,
      ease: 'elastic.out(1, 0.5)',
      scrollTrigger: {
        trigger: '#mymenu',
        start: 'top 70%',
        toggleActions: 'play none none none'
      }
    });

    gsap.to('#playBtn', {
      scale: 1.1,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    });

    // ORDER SECTION
    gsap.from('#order .text1 > *', {
      x: -50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '#order',
        start: 'top 70%',
        toggleActions: 'play none none none'
      }
    });

    gsap.from('#order .imgg img', {
      x: 80,
      opacity: 0,
      rotation: 10,
      scale: 0.8,
      duration: 1.2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '#order',
        start: 'top 65%',
        toggleActions: 'play none none none'
      }
    });

    gsap.to('#order .imgg img', {
      y: -20,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    });

    // CONTACT / RESERVATION SECTION 
    gsap.from('#contact1 .form-container', {
      x: -60,
      opacity: 0,
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '#contact1',
        start: 'top 70%',
        toggleActions: 'play none none none'
      }
    });

    gsap.from('#contact1 .map-wrapper', {
      x: 60,
      opacity: 0,
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '#contact1',
        start: 'top 70%',
        toggleActions: 'play none none none'
      }
    });

    // Form inputs stagger in
    gsap.from('#contact1 form input, #contact1 form button', {
      y: 30,
      opacity: 0,
      duration: 0.5,
      stagger: 0.08,
      delay: 0.3,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '#contact1',
        start: 'top 65%',
        toggleActions: 'play none none none'
      }
    });

    // Form input focus animations
    document.querySelectorAll('#contact1 form input').forEach(input => {
      input.addEventListener('focus', () => {
        gsap.to(input, { 
          scale: 1.02, 
          borderColor: '#ff9800',
          duration: 0.3, 
          ease: 'power2.out' 
        });
      });
      input.addEventListener('blur', () => {
        gsap.to(input, { 
          scale: 1, 
          borderColor: '#ddd',
          duration: 0.3, 
          ease: 'power2.out' 
        });
      });
    });

    const bookBtn = document.getElementById('book');
    if (bookBtn) {
      bookBtn.addEventListener('mouseenter', () => {
        gsap.to(bookBtn, { 
          scale: 1.05, 
          duration: 0.3, 
          ease: 'power2.out' 
        });
      });
      bookBtn.addEventListener('mouseleave', () => {
        gsap.to(bookBtn, { 
          scale: 1, 
          duration: 0.3, 
          ease: 'power2.out' 
        });
      });
    }

    // FOOTER
    gsap.from('.footer', {
      y: 60,
      opacity: 0,
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.footer',
        start: 'top 90%',
        toggleActions: 'play none none none'
      }
    });

    gsap.from('.footer .he > div', {
      y: 40,
      opacity: 0,
      duration: 0.7,
      stagger: 0.15,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.footer',
        start: 'top 85%',
        toggleActions: 'play none none none'
      }
    });

    gsap.from('.footer .follow a', {
      scale: 0,
      opacity: 0,
      duration: 0.5,
      stagger: 0.1,
      delay: 0.5,
      ease: 'back.out(2)',
    });

    document.querySelectorAll('.footer .follow a').forEach(icon => {
      icon.addEventListener('mouseenter', () => {
        gsap.to(icon, { 
          y: -5, 
          scale: 1.2, 
          color: '#ff9800',
          duration: 0.3, 
          ease: 'back.out(2)' 
        });
      });
      icon.addEventListener('mouseleave', () => {
        gsap.to(icon, { 
          y: 0, 
          scale: 1, 
          color: 'rgba(255,255,255,0.7)',
          duration: 0.3, 
          ease: 'power2.out' 
        });
      });
    });

    // SCROLL-BASED HEADER EFFECT
    ScrollTrigger.create({
      start: 'top -80',
      end: 99999,
      toggleClass: { className: 'header-scrolled', targets: '.header' }
    });

    // Add header scrolled styles dynamically
    const style = document.createElement('style');
    style.textContent = `
      .header-scrolled {
        height: 55px !important;
        background: rgba(0, 0, 34, 0.95) !important;
        backdrop-filter: blur(10px);
        box-shadow: 0 4px 20px rgba(0,0,0,0.4) !important;
      }
      .header-scrolled .logo h1 {
        font-size: 1.3rem !important;
      }
    `;
    document.head.appendChild(style);

    // PARALLAX BACKGROUND on hero
    gsap.to('.hero', {
      backgroundPosition: '50% 30%',
      scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        scrub: 1
      }
    });

    // GENERAL SECTION REVEALS
    const allSections = document.querySelectorAll('section');
    allSections.forEach(section => {
      if (!section.id) return;

      // Skip sections already animated above
      const animatedIds = ['hero', 'services', 'about', 'menuss', 'menu6', 'mymenu', 'order', 'contact1'];
      if (animatedIds.includes(section.id)) return;

      gsap.from(section, {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 85%',
          toggleActions: 'play none none none'
        }
      });
    });

    // BUTTON HOVER 
    document.querySelectorAll('.hero-btn, .read-more, #readMoreBtn').forEach(btn => {
      btn.addEventListener('mouseenter', () => {
        gsap.to(btn, { 
          scale: 1.05, 
          duration: 0.3, 
          ease: 'power2.out' 
        });
      });
      btn.addEventListener('mouseleave', () => {
        gsap.to(btn, { 
          scale: 1, 
          duration: 0.3, 
          ease: 'power2.out' 
        });
      });
    });

    // DROPDOWN ANIMATION
    const dropdownLink = document.getElementById('link');
    const dropdownContent = document.querySelector('.dropdown-content');
    if (dropdownLink && dropdownContent) {
      dropdownLink.addEventListener('mouseenter', () => {
        gsap.to(dropdownContent, { 
          opacity: 1, 
          y: 0, 
          duration: 0.3, 
          ease: 'power2.out',
          display: 'block'
        });
      });
    }

    // Refresh ScrollTrigger after all images load
    window.addEventListener('load', () => {
      ScrollTrigger.refresh();
    });
  }

  // ===== MOBILE MENU =====
  function initMobileMenu() {
    const menuBtn = document.getElementById('menu');
    const closeBtn = document.getElementById('closes');
    const nav = document.getElementById('header');

    if (!menuBtn || !closeBtn || !nav) return;

    menuBtn.addEventListener('click', () => {
      nav.classList.add('open');
      document.body.style.overflow = 'hidden';
      // Animate menu items in
      gsap.from('#header a, #header .btn-book', {
        x: 50,
        opacity: 0,
        duration: 0.5,
        stagger: 0.08,
        delay: 0.2,
        ease: 'power2.out'
      });
    });

    closeBtn.addEventListener('click', () => {
      nav.classList.remove('open');
      document.body.style.overflow = '';
      gsap.reverse();
    });

    nav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('open');
        document.body.style.overflow = '';
      });
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && nav.classList.contains('open')) {
        nav.classList.remove('open');
        document.body.style.overflow = '';
      }
    });

    document.addEventListener('click', (e) => {
      if (nav.classList.contains('open') &&
          !nav.contains(e.target) &&
          !menuBtn.contains(e.target)) {
        nav.classList.remove('open');
        document.body.style.overflow = '';
      }
    });
  }

  // ===== DROPDOWN MENU =====
  function initDropdown() {
    const dropdownLink = document.getElementById('link');
    const dropdownContent = document.querySelector('.dropdown-content');

    if (!dropdownLink || !dropdownContent) return;

    dropdownLink.addEventListener('click', (e) => {
      e.preventDefault();
      dropdownContent.classList.toggle('show');
    });

    document.addEventListener('click', (e) => {
      if (!dropdownLink.contains(e.target) && !dropdownContent.contains(e.target)) {
        dropdownContent.classList.remove('show');
      }
    });
  }

  // ===== MENU TABS =====
  function initMenuTabs() {
    const labels = document.querySelectorAll('.label');
    const containers = document.querySelectorAll('.chicken-container');

    if (!labels.length || !containers.length) return;

    showMenu('breakfast');

    labels.forEach(label => {
      label.addEventListener('click', (e) => {
        e.preventDefault();

        const target = label.dataset.target;
        if (!target) return;

        labels.forEach(l => l.classList.remove('active'));
        label.classList.add('active');

        // Animate tab switch
        containers.forEach(container => {
          const menuType = container.dataset.menu;
          if (menuType === target) {
            gsap.fromTo(container, 
              { opacity: 0, y: 30 },
              { opacity: 1, y: 0, duration: 0.5, display: 'flex', ease: 'power2.out' }
            );
            container.classList.add('active');
          } else {
            container.classList.remove('active');
          }
        });
      });
    });

    function showMenu(target) {
      containers.forEach(container => {
        const menuType = container.dataset.menu;
        if (menuType === target) {
          container.classList.add('active');
        } else {
          container.classList.remove('active');
        }
      });
    }
  }

  // ===== VIDEO MODAL =====
  function initVideoModal() {
    const playBtn = document.getElementById('playBtn');
    const modal = document.getElementById('ytModal');
    const closeBtn = document.querySelector('.close');
    const iframe = document.getElementById('ytVideo');

    if (!playBtn || !modal || !iframe) return;

    const videoID = 'xPPLbEFbCAo';
    const embedUrl = `https://www.youtube.com/embed/${videoID}?autoplay=1&rel=0`;

    playBtn.addEventListener('click', () => {
      iframe.src = embedUrl;
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
      // Animate modal in
      gsap.from('.yt-box', {
        scale: 0.8,
        opacity: 0,
        duration: 0.4,
        ease: 'back.out(1.7)'
      });
    });

    playBtn.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        playBtn.click();
      }
    });

    function closeVideo() {
      gsap.to('.yt-box', {
        scale: 0.8,
        opacity: 0,
        duration: 0.3,
        ease: 'power2.in',
        onComplete: () => {
          modal.classList.remove('active');
          setTimeout(() => {
            iframe.src = '';
          }, 300);
          document.body.style.overflow = '';
        }
      });
    }

    if (closeBtn) {
      closeBtn.addEventListener('click', closeVideo);
      closeBtn.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          closeVideo();
        }
      });
    }

    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeVideo();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeVideo();
      }
    });
  }

  // ===== READ MORE BUTTON =====
  function initReadMore() {
    const btn = document.getElementById('readMoreBtn');
    const span = document.querySelector('.span');

    if (!btn || !span) return;

    btn.addEventListener('click', () => {
      span.classList.toggle('show');
      const isShowing = span.classList.contains('show');

      // Animate the text reveal
      if (isShowing) {
        gsap.from(span, {
          height: 0,
          opacity: 0,
          duration: 0.5,
          ease: 'power2.out'
        });
      }

      btn.innerHTML = isShowing
        ? 'Read less <i class="ri-arrow-left-line"></i>'
        : 'Read more <i class="ri-arrow-right-line"></i>';
    });
  }

  // ===== RESERVATION FORM =====
  function initReservationForm() {
    const form = document.getElementById('formReservation');
    const result = document.getElementById('result');

    if (!form) return;

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const reservation = {
        name: document.getElementById('name')?.value.trim(),
        number: document.getElementById('number')?.value.trim(),
        email: document.getElementById('email')?.value.trim(),
        guests: document.getElementById('number1')?.value,
        time: document.getElementById('time')?.value,
        date: document.getElementById('date')?.value,
        id: Date.now()
      };

      if (!reservation.name || !reservation.email || !reservation.date) {
        if (result) {
          result.textContent = 'Please fill in all required fields.';
          result.style.color = '#f44336';
          gsap.from(result, { x: -10, duration: 0.3, repeat: 3, yoyo: true });
        }
        return;
      }

      try {
        let reservations = JSON.parse(localStorage.getItem('reservations')) || [];
        reservations.push(reservation);
        localStorage.setItem('reservations', JSON.stringify(reservations));

        if (result) {
          result.textContent = 'Reservation saved successfully!';
          result.style.color = '#4caf50';
          gsap.from(result, { 
            scale: 0.8, 
            opacity: 0, 
            duration: 0.5, 
            ease: 'back.out(1.7)' 
          });
        }

        form.reset();

        setTimeout(() => {
          if (result) result.textContent = '';
        }, 3000);
      } catch (err) {
        console.error('Failed to save reservation:', err);
        if (result) {
          result.textContent = 'Something went wrong. Please try again.';
          result.style.color = '#f44336';
        }
      }
    });
  }

  // ===== SMOOTH SCROLL FOR ANCHOR LINKS =====
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href === '#') return;

        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          const headerOffset = 70;
          const elementPosition = target.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      });
    });
  }

  // ===== GOOGLE MAPS =====
  window.initMap = function() {
    const mapEl = document.getElementById('map');
    if (!mapEl || typeof google === 'undefined') return;

    const location = { lat: 6.440343, lng: 3.463797 };

    const map = new google.maps.Map(mapEl, {
      zoom: 14,
      center: location,
      mapTypeControl: false,
      streetViewControl: false,
      fullscreenControl: false,
      styles: [
        { featureType: 'poi', stylers: [{ visibility: 'off' }] }
      ]
    });

    const marker = new google.maps.Marker({
      position: location,
      map: map,
      icon: {
        url: 'https://img.icons8.com/fluent/48/000000/marker-storm.png',
        scaledSize: new google.maps.Size(40, 40)
      },
      animation: google.maps.Animation.DROP
    });

    marker.addListener('click', () => {
      const url = `https://www.google.com/maps?q=${location.lat},${location.lng}`;
      window.open(url, '_blank');
    });
  };

})();