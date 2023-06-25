// Burger-menu відкриваємо та закриваємо
document.querySelector('.burger-menu').addEventListener('click', function () {
  this.classList.toggle('active');
  document.querySelector('.burger-picture').classList.toggle('active');
  document.querySelector('.btn-login').classList.toggle('active');
  document.querySelector('.btn-signed').classList.toggle('active');
  document.querySelector('.burger-wraper').classList.toggle('open');
  document.querySelector('.btn-logout').classList.toggle('active');
  document.querySelector('.header-nav').classList.toggle('open');
  document.body.classList.toggle('overflowhiden');
});

// Відкриваємо та закриваємо кнопку виходу з реєстрації

document.querySelector('.btn-signed').addEventListener('click', function () {
  document.querySelector('.btn-logout').classList.toggle('close');
});

// Реалізація виділення поточної вкладки
const headerHome = document.querySelector('.header-home');
const headerShoppingList = document.querySelector('.header-shopping-list');

if (
  document.lastElementChild.baseURI ===
  'https://keytarina.github.io/project-group-9/'
) {
  headerShoppingList.classList.add('visit');
  headerHome.classList.remove('visit');
} else if (document.lastElementChild.baseURI ===
  'https://keytarina.github.io/project-group-9/shopping.html'){
  headerShoppingList.classList.add('visit');
  headerHome.classList.remove('visit');
}
