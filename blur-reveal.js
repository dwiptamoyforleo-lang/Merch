window.addEventListener('scroll', function reveal(){
  document.body.classList.add('revealed');
  window.removeEventListener('scroll', reveal);
}, { once: true });
