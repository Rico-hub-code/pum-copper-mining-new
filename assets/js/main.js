/* ===================================================
   PUM COPPER MINING – MAIN JS
=================================================== */

// ── WHATSAPP NUMBER ──
const WA_NUMBER = '260772786809';

// ── MINERALS DATA ──
const MINERALS = [
  { name:'Native Copper',  formula:'Cu',                    image:'public/minerals/copper.jpg',      description:'Pure elemental copper found naturally, displaying its characteristic reddish-brown metallic lustre. The primary ore sought in our mining operations.' },
  { name:'Malachite',      formula:'Cu₂CO₃(OH)₂',           image:'public/minerals/malachite.jpg',   description:'A copper carbonate hydroxide mineral with striking green banded patterns. Often found alongside copper deposits in Zambia.' },
  { name:'Azurite',        formula:'Cu₃(CO₃)₂(OH)₂',        image:'public/minerals/azurite.jpg',     description:'A soft, deep blue copper mineral produced by weathering of copper ore deposits. Prized for its intense vivid blue colour.' },
  { name:'Chalcopyrite',   formula:'CuFeS₂',                 image:'public/minerals/chalcopyrite.jpg',description:'The most important copper ore mineral, appearing as brass-yellow with iridescent tarnish. The primary source of copper worldwide.' },
  { name:'Bornite',        formula:'Cu₅FeS₄',                image:'public/minerals/bornite.jpg',     description:'Known as "peacock ore" for its iridescent purple-blue tarnish. An important copper iron sulfide mineral in our deposits.' },
  { name:'Chrysocolla',    formula:'Cu₂-xAlx(H₂-xSi₂O₅)(OH)₄',image:'public/minerals/chrysocolla.jpg',description:'A hydrated copper phyllosilicate mineral with a distinctive cyan colour. Found in the oxidation zones of copper deposits.' },
  { name:'Cuprite',        formula:'Cu₂O',                   image:'public/minerals/cuprite.jpg',     description:'A dark red copper oxide mineral with an adamantine lustre. An important ore of copper found in oxidised zones.' },
  { name:'Chalcocite',     formula:'Cu₂S',                   image:'public/minerals/chalcocite.jpg',  description:'A dark grey to black copper sulfide mineral. One of the most profitable copper ores due to its high copper content of 79.8%.' },
  { name:'Turquoise',      formula:'CuAl₆(PO₄)₄(OH)₈',      image:'public/minerals/turquoise.jpg',   description:'A striking blue-green copper aluminium phosphate mineral. Valued as a gemstone for thousands of years across many cultures.' },
  { name:'Covellite',      formula:'CuS',                    image:'public/minerals/covellite.jpg',   description:'A rare copper sulfide mineral with a distinctive indigo blue colour and iridescent brass-yellow sheen on freshly exposed surfaces.' },
];

// ── DOM READY ──
document.addEventListener('DOMContentLoaded', () => {
  initPreloader();
  initYear();
  initScrollProgress();
  initNavbar();
  initReveal();
  initSlideshow();
  initCounters();
  initDots();
  initTheme();
});

// ── PRELOADER ──
function initPreloader() {
  window.addEventListener('load', () => {
    const p = document.getElementById('preloader');
    if (p) { p.classList.add('hidden'); setTimeout(() => p.remove(), 600); }
  });
}

// ── YEAR ──
function initYear() {
  const el = document.getElementById('year');
  if (el) el.textContent = new Date().getFullYear();
}

// ── SCROLL PROGRESS ──
function initScrollProgress() {
  const bar = document.getElementById('progress-bar');
  if (!bar) return;
  window.addEventListener('scroll', () => {
    const doc  = document.documentElement;
    const pct  = (doc.scrollTop / (doc.scrollHeight - doc.clientHeight)) * 100;
    bar.style.width = pct + '%';
  }, { passive: true });
}

// ── NAVBAR ──
function initNavbar() {
  const nav = document.getElementById('navbar');
  if (!nav) return;
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });
}

// ── SCROLL TO ──
function scrollTo(hash) {
  const el = document.querySelector(hash);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

// ── MOBILE MENU ──
function toggleMobile() {
  const menu = document.getElementById('mobileMenu');
  if (menu) menu.classList.toggle('open');
}
function closeMobile() {
  const menu = document.getElementById('mobileMenu');
  if (menu) menu.classList.remove('open');
}

// ── THEME ──
function initTheme() {
  const saved = localStorage.getItem('pum-theme') || 'dark';
  applyTheme(saved);
}
function toggleTheme() {
  const current = document.documentElement.dataset.theme;
  const next    = current === 'dark' ? 'light' : 'dark';
  applyTheme(next);
  localStorage.setItem('pum-theme', next);
}
function applyTheme(t) {
  document.documentElement.dataset.theme = t;
}

// ── SCROLL REVEAL ──
function initReveal() {
  const els = document.querySelectorAll('.reveal');
  if (!els.length) return;
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
  }, { threshold: 0.12 });
  els.forEach(el => obs.observe(el));
}

// ── COUNTERS ──
function initCounters() {
  const nums = document.querySelectorAll('.stat-num[data-target]');
  if (!nums.length) return;
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el     = e.target;
      const target = +el.dataset.target;
      const dur    = 1200;
      const step   = Math.ceil(target / (dur / 16));
      let current  = 0;
      const timer  = setInterval(() => {
        current = Math.min(current + step, target);
        el.textContent = current;
        if (current >= target) clearInterval(timer);
      }, 16);
      obs.unobserve(el);
    });
  }, { threshold: 0.5 });
  nums.forEach(n => obs.observe(n));
}

// ═══════════════════════════════════════
// CONSULTATION MODAL
// ═══════════════════════════════════════
let currentStep = 1;

function openModal() {
  currentStep = 1;
  renderStep(1);
  document.getElementById('consultModal').classList.add('open');
  document.body.style.overflow = 'hidden';
  // reset payment checkbox
  const cb = document.getElementById('paymentConfirm');
  if (cb) cb.checked = false;
  const btn = document.getElementById('proceedBtn');
  if (btn) btn.disabled = true;
}

function closeModal() {
  document.getElementById('consultModal').classList.remove('open');
  document.body.style.overflow = '';
}

function goToStep(n) {
  renderStep(n);
}

function renderStep(n) {
  currentStep = n;
  // steps
  document.querySelectorAll('#consultModal .modal-step').forEach((s, i) => {
    s.classList.toggle('active', i + 1 === n);
  });
  // dots
  document.querySelectorAll('#consultModal .step-dot').forEach((d, i) => {
    d.classList.toggle('active', i + 1 === n);
    d.classList.toggle('done', i + 1 < n);
    d.textContent = i + 1 < n ? '✓' : '';
  });
  // lines
  document.querySelectorAll('#consultModal .step-line').forEach((l, i) => {
    l.classList.toggle('done', i + 1 < n);
  });
}

function checkPayment() {
  const cb  = document.getElementById('paymentConfirm');
  const btn = document.getElementById('proceedBtn');
  if (btn) btn.disabled = !cb.checked;
}

function submitForm(e) {
  e.preventDefault();
  const name    = document.getElementById('f-name').value.trim();
  const email   = document.getElementById('f-email').value.trim();
  const phone   = document.getElementById('f-phone').value.trim();
  const company = document.getElementById('f-company').value.trim();
  const project = document.getElementById('f-project').value;
  const details = document.getElementById('f-details').value.trim();

  const msg = `🔔 *New Consultation Request*

👤 *Full Name:* ${name}
📧 *Email:* ${email}
📱 *Phone:* ${phone}
🏢 *Company:* ${company || 'N/A'}
⛏ *Project Type:* ${project}
📋 *Project Details:*
${details}

---
_Sent via PUM Copper Mining website_`;

  const url = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
  window.open(url, '_blank');
  closeModal();
  document.getElementById('consultForm').reset();
}

// ── CLOSE MODALS ON ESC ──
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') { closeModal(); }
});

// ═══════════════════════════════════════
// MINERAL SLIDESHOW
// ═══════════════════════════════════════
let slideIdx    = 0;
let autoTimer   = null;
let isAutoPlay  = true;

function initSlideshow() {
  document.getElementById('slideTotal').textContent = String(MINERALS.length).padStart(2,'0');
  renderSlide(0);
  initDots();
  startAuto();
}

function renderSlide(i) {
  const m = MINERALS[i];
  const img = document.getElementById('slideImg');
  img.style.opacity = '0';
  setTimeout(() => {
    img.src = m.image;
    img.alt = m.name;
    img.style.opacity = '1';
  }, 200);
  document.getElementById('slideName').textContent    = m.name;
  document.getElementById('slideFormula').textContent  = m.formula;
  document.getElementById('slideDesc').textContent     = m.description;
  document.getElementById('slideNum').textContent      = String(i + 1).padStart(2,'0');
  document.getElementById('slideSpecimen').textContent = String(i + 1).padStart(2,'0');
  updateDots(i);
}

function initDots() {
  const wrap = document.getElementById('slideDots');
  if (!wrap) return;
  wrap.innerHTML = '';
  MINERALS.forEach((_, i) => {
    const d = document.createElement('button');
    d.className = 'dot' + (i === 0 ? ' active' : '');
    d.setAttribute('aria-label', `Mineral ${i + 1}`);
    d.onclick = () => { goToSlide(i); pauseAuto(); };
    wrap.appendChild(d);
  });
}

function updateDots(i) {
  document.querySelectorAll('.dot').forEach((d, idx) => {
    d.classList.toggle('active', idx === i);
  });
}

function nextSlide() {
  slideIdx = (slideIdx + 1) % MINERALS.length;
  renderSlide(slideIdx);
  pauseAuto();
  startAuto();
}
function prevSlide() {
  slideIdx = (slideIdx - 1 + MINERALS.length) % MINERALS.length;
  renderSlide(slideIdx);
  pauseAuto();
  startAuto();
}
function goToSlide(i) {
  slideIdx = i;
  renderSlide(i);
}

function startAuto() {
  clearInterval(autoTimer);
  isAutoPlay = true;
  const st = document.getElementById('autoStatus');
  if (st) st.textContent = 'Auto-rotating';
  autoTimer = setInterval(() => {
    slideIdx = (slideIdx + 1) % MINERALS.length;
    renderSlide(slideIdx);
  }, 5000);
}
function pauseAuto() {
  clearInterval(autoTimer);
  isAutoPlay = false;
  const st = document.getElementById('autoStatus');
  if (st) st.textContent = 'Paused';
}
