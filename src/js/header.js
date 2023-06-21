document.querySelector('.burger-menu').addEventListener('click', function () {
  this.classList.toggle('active');
  document.querySelector('.btn-login').classList.toggle('active');
  document.querySelector('.burger-wraper').classList.toggle('open');
  document.querySelector('.btn-logout').classList.toggle('active');
  document.querySelector('.header-nav').classList.toggle('open');
});

document.querySelector('.header-home').addEventListener('click', function () {
  this.classList.toggle('.visit');
});
document
  .querySelector('.header-shopping-list')
  .addEventListener('click', function () {
    this.classList.toggle('.visit');
  });
