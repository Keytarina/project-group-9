
There are a few issues with the code you provided. Here's the corrected version:

javascript
Copy code
const apiUrl = 'https://books-backend.p.goit.global/books/';
const category = document.querySelector('.categories-item');
const list = document.querySelector('.categories-list');
const gallery = document.querySelector('.categories');
const seeMoreBtn = document.querySelector('.seeMoreBtn');

const booksPerPage = 5;
const bookListElement = document.getElementById('container-best');
let currentIndex = 0;

async function fetchBooksByCategory(category) {
  try {
    const { data } = await axios.get(apiUrl, {
      params: {
        category,
      },
    });
    return data;
  } catch (error) {
    console.log('Error fetching books:', error);
    return [];
  }
}

function displayBooks(books) {
  books.slice(currentIndex, currentIndex + booksPerPage).forEach((book) => {
    const bookElement = document.createElement('div');
    bookElement.textContent = book.title;
    bookListElement.appendChild(bookElement);
  });

  currentIndex += booksPerPage;

  if (currentIndex >= books.length) {
    seeMoreBtn.style.display = 'none';
  }
}

async function loadMoreBooks(category) {
  const books = await fetchBooksByCategory(category);
  displayBooks(books);
}

seeMoreBtn.addEventListener('click', () => {
  const selectedCategory = category.value;
  loadMoreBooks(selectedCategory);
});

loadMoreBooks(category.value);