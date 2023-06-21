import { Loading } from 'notiflix/build/notiflix-loading-aio';

//Опції для кастомізації лоадера
const loaderOptions = {
  svgColor: '#4f2ee8', // колір іконки лоадера
  backgroundColor: 'rgba(0,0,0,0.5)', //колір та прозорість фону
  svgSize: '80px', //розмір іконки лоадера
};

//Фукція старту лоадера
function startLoader() {
  Loading.circle('L o a d i n g', loaderOptions);
}

//Функція видалення лоадера
function stopLoader() {
  Loading.remove();
}

//Експорт функцій у зовнішній код
export { startLoader, stopLoader };
