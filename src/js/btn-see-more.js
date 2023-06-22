import { renderBooksByCategory, renderBestSellersList, clearMarkup } from './best-sellers';
import { fetchBooksByCategory, fetchTopBooks } from './serviceApi.js'

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

const container = document.querySelector('#container-best');
const seeMoreBtn = document.querySelector('.see-more-btn');

async function  fetchAndRenderBooks () {
  try {
    const data = await fetchTopBooks();
    const markup = renderBestSellersList(data);
    container.insertAdjacentHTML('beforeend', markup);
  } catch (err) {
    console.log(err);
  }
};

export async function loadBooksByCategory  (category) {
  try {
    clearMarkup();
    const data = await fetchBooksByCategory(category);
    const markup = renderBooksByCategory(data);
    container.insertAdjacentHTML('beforeend', markup);
  } catch (err) {
    console.log(err);
  }
};

container.addEventListener('click', (event) => {
  if (event.target.nodeName === "BUTTON") {
    console.log(event.target.parentNode.firstChild.textContent);
    category = event.target.parentNode.firstChild.textContent;
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






