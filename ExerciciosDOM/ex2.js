const btn = document.getElementById('toggleBtn');
btn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  btn.textContent = document.body.classList.contains('dark') ? '🌞' : '🌙';
});
