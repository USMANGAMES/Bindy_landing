const form = document.querySelector('#signup-form');
const message = document.querySelector('#form-message');

form?.addEventListener('submit', (event) => {
  const contact = new FormData(form).get('contact')?.toString().trim();
  if (!contact) {
    event.preventDefault();
    message.textContent = 'Введите Telegram или email, чтобы попасть в альфа-тест.';
  }
});

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', () => {
    document.querySelector(link.getAttribute('href'))?.scrollIntoView({ behavior: 'smooth' });
  });
});
