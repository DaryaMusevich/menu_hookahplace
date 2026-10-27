/* Общие утилиты для трёх вариантов меню */
(function () {
  'use strict';

  const nbsp = '\u202F';
  const fmt = n => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, nbsp) + nbsp + '₽';

  const prices = item => (item.variants && item.variants.length ? item.variants : [{ vol: item.vol, price: item.price }]);

  function toast(msg) {
    let t = document.querySelector('.toast');
    if (!t) {
      t = document.createElement('div');
      t.className = 'toast';
      document.body.appendChild(t);
    }
    t.textContent = msg;
    requestAnimationFrame(() => t.classList.add('is-on'));
    clearTimeout(t._h);
    t._h = setTimeout(() => t.classList.remove('is-on'), 2200);
  }

  async function share(data) {
    const url = location.href;
    const payload = { title: data.title || 'Меню HookahPlace', text: data.text || '', url };
    try {
      if (navigator.share) { await navigator.share(payload); return; }
      await navigator.clipboard.writeText(url);
      toast('Ссылка скопирована');
    } catch (e) {
      if (e && e.name === 'AbortError') return;
      toast('Скопируйте адрес из строки браузера');
    }
  }

  /* Нижняя шторка */
  let sheetEl = null;
  function sheet(html, cls) {
    if (!sheetEl) {
      sheetEl = document.createElement('div');
      sheetEl.className = 'sheet';
      sheetEl.innerHTML = '<div class="sheet__panel" role="dialog" aria-modal="true">' +
        '<div class="sheet__grip"></div>' +
        '<button class="sheet__close" aria-label="Закрыть">✕</button>' +
        '<div class="sheet__body"></div></div>';
      document.body.appendChild(sheetEl);
      sheetEl.addEventListener('click', e => {
        if (e.target === sheetEl || e.target.closest('.sheet__close')) closeSheet();
      });
      document.addEventListener('keydown', e => { if (e.key === 'Escape') closeSheet(); });
    }
    const panel = sheetEl.querySelector('.sheet__panel');
    panel.className = 'sheet__panel' + (cls ? ' ' + cls : '');
    sheetEl.querySelector('.sheet__body').innerHTML = html;
    sheetEl.querySelector('.sheet__body').scrollTop = 0;
    requestAnimationFrame(() => {
      sheetEl.classList.add('is-open');
      document.body.style.overflow = 'hidden';
    });
    return sheetEl;
  }
  function closeSheet() {
    if (!sheetEl) return;
    sheetEl.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  /* Подсветка активного раздела в навигации */
  function scrollSpy(sections, links) {
    if (!('IntersectionObserver' in window)) return;
    const map = new Map();
    sections.forEach(s => {
      const a = links.find(l => l.getAttribute('href') === '#' + s.id);
      if (a) map.set(s, a);
    });
    const io = new IntersectionObserver(entries => {
      entries.forEach(en => {
        if (!en.isIntersecting) return;
        links.forEach(l => l.classList.remove('is-active'));
        map.get(en.target)?.classList.add('is-active');
      });
    }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });
    map.forEach((_, s) => io.observe(s));

    // на самом верху страницы активен первый раздел
    const atTop = () => {
      if (window.scrollY > 240) return;
      links.forEach(l => l.classList.remove('is-active'));
      if (links[0]) links[0].classList.add('is-active');
    };
    window.addEventListener('scroll', atTop, { passive: true });
    atTop();
  }

  /* Появление блоков */
  function reveal(scope) {
    const items = (scope || document).querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window)) { items.forEach(i => i.classList.add('is-in')); return; }
    const io = new IntersectionObserver(entries => {
      entries.forEach(en => {
        if (en.isIntersecting) { en.target.classList.add('is-in'); io.unobserve(en.target); }
      });
    }, { rootMargin: '0px 0px -8% 0px' });
    items.forEach(i => io.observe(i));
  }

  /* QR на canvas (библиотека qrcode-generator) */
  function drawQR(canvas, text, opts) {
    if (typeof qrcode !== 'function') return false;
    const o = Object.assign({ dark: '#16120f', light: '#ffffff', margin: 4, radius: 0 }, opts || {});
    const qr = qrcode(0, 'M');
    qr.addData(text);
    qr.make();
    const n = qr.getModuleCount();
    const total = n + o.margin * 2;
    const dpr = window.devicePixelRatio || 1;
    const size = canvas.clientWidth || canvas.width || 160;
    canvas.width = size * dpr;
    canvas.height = size * dpr;
    const ctx = canvas.getContext('2d');
    ctx.scale(dpr, dpr);
    ctx.fillStyle = o.light;
    ctx.fillRect(0, 0, size, size);
    const cell = size / total;
    ctx.fillStyle = o.dark;
    for (let r = 0; r < n; r++) {
      for (let c = 0; c < n; c++) {
        if (!qr.isDark(r, c)) continue;
        if (o.radius) {
          const x = (c + o.margin) * cell, y = (r + o.margin) * cell;
          const rr = Math.min(o.radius, cell / 2);
          ctx.beginPath();
          ctx.roundRect ? ctx.roundRect(x, y, cell + .4, cell + .4, rr) : ctx.rect(x, y, cell + .4, cell + .4);
          ctx.fill();
        } else {
          ctx.fillRect((c + o.margin) * cell, (r + o.margin) * cell, cell + .4, cell + .4);
        }
      }
    }
    return true;
  }

  window.UI = { fmt, prices, toast, share, sheet, closeSheet, scrollSpy, reveal, drawQR, nbsp };
})();
