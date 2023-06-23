const scrollTop = document.querySelector('.scroll-up');

window.addEventListener('scroll', onScrollToTop);

//Функція ховання/показу кнопки при скроллі
function onScrollToTop() {
  window.onscroll = () => {
    if (window.scrollY > 700) {
      scrollTop.classList.remove('scroll-up_hide');
    } else if (window.scrollY < 700) {
      scrollTop.classList.add('scroll-up_hide');
    }
  };
}

//Функція повернення на початок сторінки по кліку
scrollTop.addEventListener('click', onScrollToTopClick);

function onScrollToTopClick() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}
