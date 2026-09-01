(function(){
  "use strict";

  /* ---------- NAV scroll state + mobile burger ---------- */
  const nav = document.getElementById('nav');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive:true });

  const burger = document.getElementById('navBurger');
  const navLinks = document.querySelector('.nav-links');
  burger.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    if(open){
      navLinks.style.display = 'flex';
      navLinks.style.position = 'fixed';
      navLinks.style.top = '68px';
      navLinks.style.right = '20px';
      navLinks.style.left = '20px';
      navLinks.style.flexDirection = 'column';
      navLinks.style.background = 'rgba(11,14,20,0.97)';
      navLinks.style.border = '1px solid rgba(243,239,230,0.12)';
      navLinks.style.borderRadius = '14px';
      navLinks.style.padding = '20px';
      navLinks.style.gap = '18px';
    } else {
      navLinks.removeAttribute('style');
    }
  });
  navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navLinks.removeAttribute('style');
  }));

  /* ---------- Reveal on scroll ---------- */
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if(e.isIntersecting){
        e.target.classList.add('in');
        revealObserver.unobserve(e.target);
      }
    });
  }, { threshold:0.15 });
  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

  /* ---------- Stat counters ---------- */
  const statObserver = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if(!e.isIntersecting) return;
      const el = e.target;
      const target = parseInt(el.dataset.count, 10);
      let current = 0;
      const step = Math.max(1, Math.round(target / 40));
      const tick = () => {
        current += step;
        if(current >= target){ el.textContent = target; return; }
        el.textContent = current;
        requestAnimationFrame(tick);
      };
      tick();
      statObserver.unobserve(el);
    });
  }, { threshold:0.5 });
  document.querySelectorAll('.stat-num').forEach(el => statObserver.observe(el));

  /* ---------- Portfolio rendering ---------- */
  const grid = document.getElementById('portfolioGrid');
  const IMG_BASE = 'assets/img/';
  const VID_BASE = 'assets/video/';
  const POSTER_BASE = 'assets/poster/';

  function cardCoverEl(cat){
    if(cat.images.length){
      const img = document.createElement('img');
      img.src = IMG_BASE + cat.slug + '/' + cat.images[0];
      img.alt = cat.title;
      img.loading = 'lazy';
      return img;
    }
    if(cat.videos.length){
      const posterFile = cat.videos[0].replace(/\.[^.]+$/, '.jpg');
      const img = document.createElement('img');
      img.src = POSTER_BASE + cat.slug + '/' + posterFile;
      img.alt = cat.title;
      img.loading = 'lazy';
      return img;
    }
    return document.createElement('div');
  }

  function countLabel(cat){
    const total = cat.images.length + cat.videos.length;
    const parts = [];
    if(cat.images.length) parts.push(cat.images.length + ' photo' + (cat.images.length>1?'s':''));
    if(cat.videos.length) parts.push(cat.videos.length + ' vidéo' + (cat.videos.length>1?'s':''));
    return parts.join(' · ');
  }

  CATEGORIES.forEach((cat, idx) => {
    const card = document.createElement('article');
    card.className = 'p-card';
    card.dataset.type = cat.type;
    card.dataset.hasVideo = cat.videos.length ? '1' : '0';
    card.style.transitionDelay = (idx % 6) * 60 + 'ms';

    card.appendChild(cardCoverEl(cat));

    const tag = document.createElement('span');
    tag.className = 'p-card-tag ' + cat.type;
    tag.textContent = cat.type === 'event' ? 'Événement' : 'Marque';
    card.appendChild(tag);

    const count = document.createElement('span');
    count.className = 'p-card-count';
    count.textContent = countLabel(cat);
    card.appendChild(count);

    const overlay = document.createElement('div');
    overlay.className = 'p-card-overlay';
    overlay.innerHTML = `<h3>${cat.title}</h3><p>${cat.sub}</p>`;
    card.appendChild(overlay);

    card.addEventListener('click', () => openLightbox(cat));
    grid.appendChild(card);

    const cardObserver = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if(e.isIntersecting){ e.target.classList.add('in'); cardObserver.unobserve(e.target); }
      });
    }, { threshold:0.1 });
    cardObserver.observe(card);
  });

  /* ---------- Filters ---------- */
  const filterBtns = document.querySelectorAll('.filter-btn');
  function applyFilter(f){
    filterBtns.forEach(b => b.classList.toggle('active', b.dataset.filter === f));
    document.querySelectorAll('.p-card').forEach(card => {
      let show;
      if(f === 'all') show = true;
      else if(f === 'video') show = card.dataset.hasVideo === '1';
      else show = card.dataset.type === f;
      card.classList.toggle('hide', !show);
    });
  }
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => applyFilter(btn.dataset.filter));
  });

  /* ---------- Service cards -> filter + scroll to portfolio ---------- */
  function goToPortfolio(filter){
    applyFilter(filter);
    document.getElementById('portfolio').scrollIntoView({ behavior:'smooth', block:'start' });
  }
  const svcDesign = document.getElementById('serviceDesign');
  const svcVideo = document.getElementById('serviceVideo');
  const svcSocial = document.getElementById('serviceSocial');
  if(svcDesign) svcDesign.addEventListener('click', () => goToPortfolio('all'));
  if(svcVideo) svcVideo.addEventListener('click', () => goToPortfolio('video'));
  if(svcSocial) svcSocial.addEventListener('click', () => goToPortfolio('all'));

  /* ---------- Lightbox ---------- */
  const lightbox = document.getElementById('lightbox');
  const lbContent = document.getElementById('lbContent');
  const lbTitle = document.getElementById('lbTitle');
  const lbSub = document.getElementById('lbSub');
  const lbCount = document.getElementById('lbCount');
  const lbClose = document.getElementById('lbClose');
  const lbPrev = document.getElementById('lbPrev');
  const lbNext = document.getElementById('lbNext');

  let currentCat = null;
  let currentIndex = 0;
  let currentMedia = [];

  function buildMediaList(cat){
    const media = [];
    cat.images.forEach(f => media.push({ type:'image', src: IMG_BASE + cat.slug + '/' + f }));
    cat.videos.forEach(f => media.push({ type:'video', src: VID_BASE + cat.slug + '/' + f }));
    return media;
  }

  function renderLbMedia(){
    lbContent.innerHTML = '';
    const item = currentMedia[currentIndex];
    if(!item) return;
    if(item.type === 'image'){
      const img = document.createElement('img');
      img.src = item.src;
      img.alt = currentCat.title;
      lbContent.appendChild(img);
    } else {
      const video = document.createElement('video');
      video.src = item.src;
      video.controls = true;
      video.autoplay = true;
      video.playsInline = true;
      lbContent.appendChild(video);
    }
    lbTitle.textContent = currentCat.title;
    lbSub.textContent = currentCat.sub;
    lbCount.textContent = (currentIndex + 1) + ' / ' + currentMedia.length;
  }

  function openLightbox(cat){
    currentCat = cat;
    currentMedia = buildMediaList(cat);
    currentIndex = 0;
    renderLbMedia();
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox(){
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
    lbContent.innerHTML = '';
  }

  function navLightbox(dir){
    if(!currentMedia.length) return;
    currentIndex = (currentIndex + dir + currentMedia.length) % currentMedia.length;
    renderLbMedia();
  }

  lbClose.addEventListener('click', closeLightbox);
  lbPrev.addEventListener('click', () => navLightbox(-1));
  lbNext.addEventListener('click', () => navLightbox(1));
  lightbox.addEventListener('click', (e) => { if(e.target === lightbox) closeLightbox(); });
  document.addEventListener('keydown', (e) => {
    if(!lightbox.classList.contains('open')) return;
    if(e.key === 'Escape') closeLightbox();
    if(e.key === 'ArrowLeft') navLightbox(-1);
    if(e.key === 'ArrowRight') navLightbox(1);
  });

  /* ---------- Swipe navigation (touch) ---------- */
  let touchStartX = 0, touchStartY = 0, touchDeltaX = 0, isSwiping = false;
  lbContent.addEventListener('touchstart', (e) => {
    if(e.touches.length !== 1) return;
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
    touchDeltaX = 0;
    isSwiping = true;
    lbContent.classList.add('dragging');
  }, { passive:true });

  lbContent.addEventListener('touchmove', (e) => {
    if(!isSwiping || e.touches.length !== 1) return;
    touchDeltaX = e.touches[0].clientX - touchStartX;
    const deltaY = e.touches[0].clientY - touchStartY;
    if(Math.abs(touchDeltaX) > Math.abs(deltaY)){
      lbContent.style.transform = `translateX(${touchDeltaX * 0.5}px)`;
      lbContent.style.opacity = String(1 - Math.min(Math.abs(touchDeltaX) / 400, 0.5));
    }
  }, { passive:true });

  lbContent.addEventListener('touchend', () => {
    if(!isSwiping) return;
    isSwiping = false;
    lbContent.classList.remove('dragging');
    lbContent.style.transform = '';
    lbContent.style.opacity = '';
    const threshold = 55;
    if(touchDeltaX > threshold) navLightbox(-1);
    else if(touchDeltaX < -threshold) navLightbox(1);
    touchDeltaX = 0;
  });

  /* ---------- Contact links (placeholder — edit these) ---------- */
  document.getElementById('whatsappBtn').href = 'https://wa.me/237000000000';
  document.getElementById('emailBtn').href = 'mailto:contact@alphacommunication.com';

})();
