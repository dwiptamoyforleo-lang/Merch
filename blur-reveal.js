document.addEventListener('DOMContentLoaded', function(){
  var blur = document.createElement('div');
  blur.className = 'bottom-blur';
  document.body.appendChild(blur);

  function checkBottom(){
    var atBottom = window.innerHeight + window.scrollY >= document.body.scrollHeight - 4;
    blur.classList.toggle('hidden', atBottom);
  }

  window.addEventListener('scroll', checkBottom);
  checkBottom();
});
