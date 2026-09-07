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
      navLinks.style.background = 'rgba(7,8,10,0.97)';
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
    let label = parts.join(' · ');
    if(total > 1) label = '⧉ ' + label;
    return label;
  }

  CATEGORIES.forEach((cat, idx) => {
    const card = document.createElement('article');
    card.className = 'p-card';
    if(cat.type === 'snap' || cat.type === 'logo') card.classList.add('p-card-contain');
    card.dataset.type = cat.type;
    card.dataset.hasVideo = cat.videos.length ? '1' : '0';
    card.dataset.slug = cat.slug;
    if(cat.type === 'snap') card.dataset.snapItem = '1';
    card.style.transitionDelay = (idx % 6) * 60 + 'ms';

    card.appendChild(cardCoverEl(cat));

    const tag = document.createElement('span');
    tag.className = 'p-card-tag ' + cat.type;
    const tagLabels = { event:'Événement', brand:'Marque', logo:'Logo', snap:'Filtre Snapchat' };
    tag.textContent = tagLabels[cat.type] || cat.type;
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

  /* ---------- Snap filters: one grouped card in "Tout", exploded only under "Filtres Snapchat" ---------- */
  const snapCats = CATEGORIES.filter(c => c.type === 'snap');
  if(snapCats.length){
    const groupCard = document.createElement('article');
    groupCard.className = 'p-card p-card-contain';
    groupCard.dataset.type = 'snap';
    groupCard.dataset.hasVideo = '0';
    groupCard.dataset.snapGroup = '1';

    const img = document.createElement('img');
    img.src = IMG_BASE + snapCats[0].slug + '/' + snapCats[0].images[0];
    img.alt = 'Filtres Snapchat';
    img.loading = 'lazy';
    groupCard.appendChild(img);

    const tag = document.createElement('span');
    tag.className = 'p-card-tag snap';
    tag.textContent = 'Filtre Snapchat';
    groupCard.appendChild(tag);

    const count = document.createElement('span');
    count.className = 'p-card-count';
    count.textContent = '⧉ ' + snapCats.length + ' photos';
    groupCard.appendChild(count);

    const overlay = document.createElement('div');
    overlay.className = 'p-card-overlay';
    overlay.innerHTML = '<h3>Filtres Snapchat</h3><p>Filtres personnalisés pour événements et marques</p>';
    groupCard.appendChild(overlay);

    const snapAggregate = {
      title: 'Filtres Snapchat',
      sub: 'Filtres personnalisés pour événements et marques',
      slug: 'filtres-snapchat-groupe',
      images: [], videos: [],
      mediaOverride: snapCats.map(c => ({ type:'image', src: IMG_BASE + c.slug + '/' + c.images[0] }))
    };
    groupCard.addEventListener('click', () => openLightbox(snapAggregate));

    const firstSnapCard = grid.querySelector('.p-card[data-snap-item="1"]');
    if(firstSnapCard) grid.insertBefore(groupCard, firstSnapCard);
    else grid.appendChild(groupCard);

    const groupObserver = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if(e.isIntersecting){ e.target.classList.add('in'); groupObserver.unobserve(e.target); }
      });
    }, { threshold:0.1 });
    groupObserver.observe(groupCard);
  }

  /* ---------- Filters ---------- */
  const filterBtns = document.querySelectorAll('.filter-btn');
  const portfolioEmpty = document.getElementById('portfolioEmpty');

  /* Ordre personnalisé par filtre : ces slugs passent en premier (ou en dernier),
     sans jamais toucher à l'ordre de la vue "Tout" (géré par data.js). */
  const FILTER_ORDER_FRONT = {
    event: ['wistem', 'evenement-la-position', 'university-showdown'],
    brand: ['grandma-huile', 'production-keva', 'nkwa', 'kh-beauty'],
    logo: ['manuea-logo', 'dorva-cosmetics', 'ahmad-jamil'],
    snap: ['snap-octobre-rose', 'snap-altis-amadou', 'snap-eid-al-adha']
  };
  const FILTER_ORDER_BACK = {
    video: ['global-services-video']
  };

  function applyFilter(f){
    filterBtns.forEach(b => b.classList.toggle('active', b.dataset.filter === f));
    let visibleCount = 0;
    document.querySelectorAll('.p-card').forEach(card => {
      let show;
      if(card.dataset.snapItem === '1'){
        show = (f === 'snap');
      } else if(card.dataset.snapGroup === '1'){
        show = (f === 'all');
      } else if(f === 'all') show = true;
      else if(f === 'video') show = card.dataset.hasVideo === '1';
      else show = card.dataset.type === f;
      card.classList.toggle('hide', !show);
      card.style.order = '';
      if(show) visibleCount++;
    });
    portfolioEmpty.classList.toggle('show', visibleCount === 0);

    const front = FILTER_ORDER_FRONT[f];
    if(front){
      front.forEach((slug, i) => {
        const el = grid.querySelector('.p-card[data-slug="' + slug + '"]');
        if(el) el.style.order = String(i - 1000);
      });
    }
    const back = FILTER_ORDER_BACK[f];
    if(back){
      back.forEach((slug, i) => {
        const el = grid.querySelector('.p-card[data-slug="' + slug + '"]');
        if(el) el.style.order = String(1000 + i);
      });
    }
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
  const lbFullscreen = document.getElementById('lbFullscreen');
  const lbDots = document.getElementById('lbDots');
  const lbThumbs = document.getElementById('lbThumbs');
  const lbSwipeHint = document.getElementById('lbSwipeHint');

  let currentCat = null;
  let currentIndex = 0;
  let currentMedia = [];

  function buildMediaList(cat){
    if(cat.mediaOverride) return cat.mediaOverride.slice();
    const media = [];
    // Le type de média le plus représenté ouvre le défilement,
    // l'autre type suit ensuite (ex: onglet à dominante vidéo -> vidéos puis affiches,
    // onglet à dominante affiches -> affiches puis vidéos).
    const videoFirst = cat.videos.length >= cat.images.length;
    const pushVideos = () => cat.videos.forEach(f => media.push({ type:'video', src: VID_BASE + cat.slug + '/' + f }));
    const pushImages = () => cat.images.forEach(f => media.push({ type:'image', src: IMG_BASE + cat.slug + '/' + f }));
    if(videoFirst){ pushVideos(); pushImages(); }
    else { pushImages(); pushVideos(); }
    return media;
  }

  function renderLbMedia(){
    lbContent.innerHTML = '';
    const item = currentMedia[currentIndex];
    if(!item) return;
    let mediaEl;
    if(item.type === 'image'){
      mediaEl = document.createElement('img');
      mediaEl.src = item.src;
      mediaEl.alt = currentCat.title;
      mediaEl.className = 'lb-zoomable';
      setupZoom(mediaEl);
      lbFullscreen.style.display = 'none';
    } else {
      mediaEl = document.createElement('video');
      mediaEl.src = item.src;
      mediaEl.controls = true;
      mediaEl.autoplay = true;
      mediaEl.playsInline = true;
      mediaEl.preload = 'auto';
      lbFullscreen.style.display = 'flex';
    }
    lbContent.appendChild(mediaEl);
    lbTitle.textContent = currentCat.title;
    lbSub.textContent = currentCat.sub;
    lbCount.textContent = (currentIndex + 1) + ' / ' + currentMedia.length;
    renderLbThumbs();
  }

  function renderLbThumbs(){
    if(currentMedia.length <= 1){
      lbThumbs.innerHTML = '';
      lbThumbs.style.display = 'none';
      lbSwipeHint.classList.remove('show');
      return;
    }
    lbThumbs.style.display = 'flex';
    lbThumbs.innerHTML = '';
    currentMedia.forEach((item, i) => {
      const thumb = document.createElement('div');
      thumb.className = 'lb-thumb' + (i === currentIndex ? ' active' : '');
      if(item.type === 'image'){
        const img = document.createElement('img');
        img.src = item.src;
        img.alt = '';
        thumb.appendChild(img);
      } else {
        const vid = document.createElement('video');
        vid.src = item.src + '#t=0.5';
        vid.muted = true;
        vid.preload = 'metadata';
        thumb.appendChild(vid);
        const play = document.createElement('span');
        play.className = 'lb-thumb-play';
        play.textContent = '\u25B6';
        thumb.appendChild(play);
      }
      thumb.addEventListener('click', () => {
        if(i === currentIndex) return;
        currentIndex = i;
        renderLbMedia();
      });
      lbThumbs.appendChild(thumb);
    });
    const activeThumb = lbThumbs.querySelector('.lb-thumb.active');
    if(activeThumb) activeThumb.scrollIntoView({ behavior:'smooth', inline:'center', block:'nearest' });
  }

  /* ---------- Zoom (wheel / pinch) + pan on desktop ---------- */
  const lbZoomHint = document.getElementById('lbZoomHint');
  function setupZoom(el){
    let scale = 1, originX = 0, originY = 0, posX = 0, posY = 0;
    let isPanning = false, startX = 0, startY = 0;

    function applyTransform(){
      el.style.transform = `translate(${posX}px, ${posY}px) scale(${scale})`;
    }

    el.addEventListener('wheel', (e) => {
      e.preventDefault();
      const rect = el.getBoundingClientRect();
      const cx = e.clientX - rect.left - rect.width / 2;
      const cy = e.clientY - rect.top - rect.height / 2;
      const prevScale = scale;
      const delta = -e.deltaY * 0.0025;
      scale = Math.min(4, Math.max(1, scale + delta * scale));
      if(scale === 1){
        posX = 0; posY = 0;
      } else {
        const factor = scale / prevScale - 1;
        posX -= cx * factor;
        posY -= cy * factor;
      }
      el.classList.toggle('zoomed', scale > 1.02);
      applyTransform();
    }, { passive:false });

    el.addEventListener('mousedown', (e) => {
      if(scale <= 1) return;
      isPanning = true;
      el.classList.add('panning');
      startX = e.clientX - posX;
      startY = e.clientY - posY;
    });
    window.addEventListener('mousemove', (e) => {
      if(!isPanning) return;
      posX = e.clientX - startX;
      posY = e.clientY - startY;
      applyTransform();
    });
    window.addEventListener('mouseup', () => {
      isPanning = false;
      el.classList.remove('panning');
    });
    el.addEventListener('dblclick', () => {
      scale = scale > 1 ? 1 : 2;
      posX = 0; posY = 0;
      el.classList.toggle('zoomed', scale > 1);
      applyTransform();
    });

    if(window.matchMedia('(hover: hover) and (pointer: fine)').matches){
      lbZoomHint.classList.add('show');
    }
  }

  function openLightbox(cat){
    currentCat = cat;
    currentMedia = buildMediaList(cat);
    currentIndex = 0;
    renderLbMedia();
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
    if(currentMedia.length > 1){
      lbSwipeHint.classList.add('show');
      setTimeout(() => lbSwipeHint.classList.remove('show'), 3200);
    }
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
    lbSwipeHint.classList.remove('show');
  }

  lbClose.addEventListener('click', closeLightbox);
  lbPrev.addEventListener('click', () => navLightbox(-1));
  lbNext.addEventListener('click', () => navLightbox(1));
  lbFullscreen.addEventListener('click', () => {
    const videoEl = lbContent.querySelector('video');
    if(!videoEl) return;
    if(videoEl.requestFullscreen) videoEl.requestFullscreen();
    else if(videoEl.webkitEnterFullscreen) videoEl.webkitEnterFullscreen(); // iOS Safari
    else if(videoEl.webkitRequestFullscreen) videoEl.webkitRequestFullscreen();
  });
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
  document.getElementById('whatsappBtn').href = 'https://wa.me/237672093243';
  document.getElementById('emailBtn').href = 'mailto:alphacommunicationagency@gmail.com';

})();
