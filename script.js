const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');

toggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
});

document.querySelectorAll('.site-nav a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  toggle.setAttribute('aria-expanded', 'false');
}));

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));


// Protected demo gate and basic copy deterrence.
const demoGate = document.getElementById('demoGate');
const enterDemo = document.getElementById('enterDemo');
if (enterDemo && demoGate) {
  enterDemo.addEventListener('click', () => demoGate.classList.add('is-hidden'));
}
document.addEventListener('contextmenu', (event) => event.preventDefault());
document.addEventListener('dragstart', (event) => event.preventDefault());
document.addEventListener('keydown', (event) => {
  const key = event.key.toLowerCase();
  if ((event.ctrlKey || event.metaKey) && ['s','u','c'].includes(key)) event.preventDefault();
  if (event.key === 'F12') event.preventDefault();
});
