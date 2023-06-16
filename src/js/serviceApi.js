import axios from 'axios';

//Базовий URL для axios
axios.defaults.baseURL = 'https://books-backend.p.goit.global/books/';

//Функція, яка ферчить перелік категорій книг (використовуємо для створення списку категорій)
async function fetchBooksCategoryList() {
  try {
    const { data } = await axios('category-list');
    return data;
  } catch (error) {
    console.log(error);
  }
}

//Функція, яка ферчить популярні книги з усіх категорій
async function fetchTopBooks() {
  try {
    const { data } = await axios('top-books');
    return data;
  } catch (error) {
    console.log(error);
  }
}

//Функція, яка ферчить книги певної категорії
async function fetchBooksByCategory(category) {
  try {
    const { data } = await axios('category', {
      params: {
        category,
      },
    });
    return data;
  } catch (error) {
    console.log(error);
  }
}

//Функція, яка ферчить інформацію про конкретну книгу
async function fetchBookById(bookId) {
  try {
    const { data } = await axios(`${bookId}`);
    return data;
  } catch (error) {
    console.log(error);
  }
}

export {
  fetchBooksCategoryList,
  fetchTopBooks,
  fetchBooksByCategory,
  fetchBookById,
};
