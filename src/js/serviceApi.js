import axios from 'axios';
import { startLoader, stopLoader } from './loader';

//Базовий URL для axios
axios.defaults.baseURL = 'https://books-backend.p.goit.global/books/';

//Функція, яка ферчить перелік категорій книг (використовуємо для створення списку категорій)
//У відповідь приходить масив з 18-ти об'ектів (18 категорій). У кожного об'єкта беремо значення властивості "list_name" - це і буде назва категорії.
async function fetchBooksCategoryList() {
  try {
    const { data } = await axios('category-list');
    return data;
  } catch (error) {
    console.log(error);
  }
}

//Функція, яка ферчить популярні книги з усіх категорій (використовується для створення Best Sellers Books List на головній сторінці).
//У відповідь приходить масив з 18 об'єктів (18 категорій). Кожен такий об'єкт містить властивість "list_name" (назва категорії) та масив "books", який містить 5 об'єктів (5 книжок). У кожного такого об'єкта беремо наступні властивості:
//"_id" - id книги (у верстці не потрібен, але треба зберегти для відкриття модального вікна з інформацією про книгу)
//"author" - автор книги
//"book_image" - лінк на картинку книги
//"title" - назва книги
async function fetchTopBooks() {
  try {
    startLoader();
    const { data } = await axios('top-books');
    stopLoader();
    return data;
  } catch (error) {
    console.log(error);
  }
}

//Функція, яка ферчить книги певної категорії (використовується для створення списку всіх книг певної категорії при натисканні кнопки "See more")
//У функцію передаємо параметр category - назву певну категорії. Назву категорії потрібно передавати без пробілів (замість пробілів ставимо "+" або "%20").
//У відповідь приходить масив з певною кількістью об'єктів (книг). Зазвичай це 10-15 книг. У кожному об'єкті беремо наступні властивості:
//"_id" - id книги (у верстці не потрібен, але треба зберегти для відкриття модального вікна з інформацією про книгу)
//"author" - автор книги
//"book_image" - лінк на картинку книги
//"title" - назва книги
async function fetchBooksByCategory(category) {
  try {
    startLoader();
    const { data } = await axios('category', {
      params: {
        category,
      },
    });
    stopLoader();
    return data;
  } catch (error) {
    console.log(error);
  }
}

//Функція, яка ферчить інформацію про конкретну книгу (використовується для створення модального вікна з інформацією про книгу)
//У функцію передаємо параметр bookId
//У відповідь приходить один об'єкт, у якого забираємо наступні властивості:
//"book_image" - лінк на картинку книги
//"author" - автор книги
//"title" - назва книги
//"description" - опис книги
// массив "buy_links" містить об'єкти з інформацією про кожен магазин, де продається книга. У кожному об'єкті забираємо "url" - лінк на сторінку продажу у відповідному магазині. Необхідно забрати 3 лінки - для Amazon, Apple Books та Bookshop.

async function fetchBookById(bookId) {
  try {
    startLoader();
    const { data } = await axios(`${bookId}`);
    stopLoader();
    return data;
  } catch (error) {
    console.log(error);
  }
}

//Експорт фукнцій у зовнішній код
export {
  fetchBooksCategoryList,
  fetchTopBooks,
  fetchBooksByCategory,
  fetchBookById,
};
