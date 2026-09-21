// Booking tabs
const tabs = document.querySelectorAll('[data-tab]');
tabs.forEach(t => t.addEventListener('click', () => {
  tabs.forEach(o => {
    const on = o === t;
    o.setAttribute('aria-selected', on);
    document.getElementById(o.getAttribute('aria-controls')).hidden = !on;
  });
}));

// Demo submit: open WhatsApp with the details filled in
document.getElementById('booker').addEventListener('submit', e => {
  e.preventDefault();
  const panel = [...document.querySelectorAll('.fields')].find(p => !p.hidden);
  const service = document.querySelector('[data-tab][aria-selected="true"]').textContent;
  const lines = [...panel.querySelectorAll('.field')].map(f => {
    const input = f.querySelector('input,select');
    return f.querySelector('label').textContent + ': ' + (input.value || '-');
  });
  const msg = 'Hi Wayne, I would like to book: ' + service + '\n' + lines.join('\n');
  window.open('https://wa.me/1473XXXXXXX?text=' + encodeURIComponent(msg), '_blank', 'noopener');
});

// Fleet filter
const filters = document.querySelectorAll('[data-filter]');
filters.forEach(b => b.addEventListener('click', () => {
  const f = b.dataset.filter;
  filters.forEach(o => o.setAttribute('aria-pressed', o === b));
  document.querySelectorAll('.car').forEach(c => { c.hidden = !(f === 'all' || c.dataset.kind === f); });
}));

// Mobile menu
const menuBtn = document.getElementById('menuBtn');
const links = document.getElementById('navlinks');
menuBtn.addEventListener('click', () => {
  const open = links.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', open);
  menuBtn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
});
links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  links.classList.remove('open'); menuBtn.setAttribute('aria-expanded', 'false');
}));
