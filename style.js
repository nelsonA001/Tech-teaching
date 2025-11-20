
// Navbar toggle
const navToggleBtn = document.getElementById('nav-toggle');
const container = document.querySelector('.container');
if (navToggleBtn && container) {
  navToggleBtn.addEventListener('click', () => {
    const isOpen = container.classList.toggle('nav-open');
    navToggleBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });
}

// FAQ click toggle
document.addEventListener('DOMContentLoaded', () => {
  const toggles = document.querySelectorAll('.faq-item .dropdown');
  toggles.forEach(btn => {
    btn.setAttribute('tabindex', '0');
    btn.setAttribute('role', 'button');
    btn.setAttribute('aria-expanded', 'false');

    const toggleHandler = () => {
      const item = btn.closest('.faq-item');
      if (!item) return;
      const isOpen = item.classList.toggle('open');
      btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    };

    btn.addEventListener('click', toggleHandler);
    btn.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleHandler();
      }
    });
  });
});
