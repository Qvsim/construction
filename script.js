// script.js
document.addEventListener('DOMContentLoaded', () => {
  // Hero carousel
  const slides = document.querySelectorAll('.slide');
  let idx = 0;
  setInterval(() => {
    slides[idx].classList.remove('active');
    idx = (idx + 1) % slides.length;
    slides[idx].classList.add('active');
  }, 5000);

  // Scroll reveal
  const reveals = document.querySelectorAll('.reveal');
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) e.target.classList.add('active');
    });
  }, { threshold: 0.2 });
  reveals.forEach(el => obs.observe(el));

  // Project filter
  const filterBtns = document.querySelectorAll('.filter button');
  const cards = document.querySelectorAll('.proj-card');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
      const type = btn.dataset.type;
      cards.forEach(c => {
        c.style.display = (type==='all'||c.dataset.type===type) ? 'block' : 'none';
      });
    });
  });

  // Testimonial slider
  const tests = document.querySelectorAll('.testimonial');
  let tIdx = 0;
  setInterval(() => {
    tests[tIdx].classList.remove('active');
    tIdx = (tIdx + 1) % tests.length;
    tests[tIdx].classList.add('active');
  }, 7000);
});
