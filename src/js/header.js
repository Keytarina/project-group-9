document.getElementById('burger').addEventListener('click', function () {
  this.classList.toggle('active');
  document.querySelector('.btn-login').classList.toggle('active');
  document.querySelector('.btn-logout').classList.toggle('active');
  document.getElementById('header-nav').classList.toggle('open');
});
