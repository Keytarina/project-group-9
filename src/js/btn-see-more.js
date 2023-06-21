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
    const { data } = await axios('category', {
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
  books.slice(currentIndex, currentIndex + booksPerPage).forEach(book => {
    const bookElement = document.createElement('div');
    bookElement.textContent = book.title;
    bookListElement.appendChild(bookElement);
  });

  currentIndex += booksPerPage;

  if (currentIndex >= books.length) {
    loadMoreBtn.style.display = 'none';
  }
}

async function loadMoreBooks(caregory) {
  const books = await fetchBooksByCategory(category);
  displayBooks(books);
}

loadMoreBtn.addEventListener('click', () => {
  const category = '$(category)';

  loadMoreBooks(category);
});


