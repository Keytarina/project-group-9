document.querySelector('.burger-menu').addEventListener('click', function () {
  this.classList.toggle('active');
  document.querySelector('.btn-login').classList.toggle('active');
  document.querySelector('.burger-wraper').classList.toggle('open');
  document.querySelector('.btn-logout').classList.toggle('active');
  document.querySelector('.header-nav').classList.toggle('open');
});

const headerHome = document.querySelector('.header-home');
const headerShoppingList = document.querySelector('.header-shopping-list');
const logoType = document.querySelector('.header-logo');

localStorage.visit = 'home';

logoType.addEventListener('click', function () {
  localStorage.visit = 'home';
});

headerHome.addEventListener('click', function () {
  localStorage.visit = 'home';
});

headerShoppingList.addEventListener('click', function () {
  localStorage.visit = 'shopping';
});

if (localStorage.visit === 'shopping') {
  headerShoppingList.classList.add('visit');
  headerHome.classList.remove('visit');
} else {
  headerHome.classList.add('visit');
  headerShoppingList.classList.remove('visit');
}
