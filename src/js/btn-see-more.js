import {
  renderBooksByCategory,
  renderBestSellersList,
  clearMarkup,
} from './best-sellers';
import { fetchBooksByCategory, fetchTopBooks } from './serviceApi.js';

fetchTopBooks();

const container = document.querySelector('#container-best');
const seeMoreBtn = document.querySelector('.see-more-btn');
console.log(seeMoreBtn);

async function fetchAndRenderBooks() {
  try {
    const data = await fetchTopBooks();
    const markup = renderBestSellersList(data);
    container.insertAdjacentHTML('beforeend', markup);
  } catch (err) {
    console.log(err);
  }
}

export async function loadBooksByCategory(category) {
  try {
    clearMarkup();
    const data = await fetchBooksByCategory(category);
    const markup = renderBooksByCategory(data);
    container.insertAdjacentHTML('beforeend', markup);
  } catch (err) {
    console.log(err);
  }
}

container.addEventListener('click', event => {
  if (event.target.nodeName === 'BUTTON') {
    console.log(event.target.parentNode.firstChild.textContent);
    const category = event.target.parentNode.firstChild.textContent;
    clearMarkup();
    loadBooksByCategory(category);
  }
});
// seeMoreBtn.addEventListener('click', (event) => {
//   if (event.target.classList.contains('.see-more-btn')) {
//     const categoryElement = event.target.closest('.book-list-wrapper');
//     console.log(categoryElement);
//     const category = categoryElement.dataset.category;
//     loadBooksByCategory(category);
//   }
// });

fetchAndRenderBooks();
console.log(seeMoreBtn);
