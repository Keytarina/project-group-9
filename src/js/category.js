// import {
//     fetchBooksCategoryList,
//     fetchTopBooks,
//     fetchBooksByCategory,
//     fetchBookById,
// } from serviceAPI.js;

// const selector = document.querySelector(body);


// function fetchCategory(evt) {
//     evt.preventDefault();
//     fetchBooksCategoryList();
//     const markupSelector = selector.map(() => ({
         
//      }))
// }





import Notiflix from 'notiflix';
import axios from 'axios';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector(".gallery");
const form = document.querySelector("#search-form");
const loading = document.querySelector("button.load-more")

axios.defaults.baseURL = "https://pixabay.com/api/";
const API = "37004988-b8739e344171d3632a1cd20a9";

let query = '';
let page = 1;
let simpleLightBox;
const per_page = 40;

form.addEventListener('submit', onSearchForm);
loading.classList.add('unvisible');

axios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    Notiflix.Notify.failure('Something went wrong. Please try again later.');
    return Promise.reject(error);
  },
);

async function fetchImages(query, page, per_page) {
  try {
    const response = await axios.get(
      `?key=${API}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${per_page}`,
    );
    return response.data;
  }
  catch (error) {
      console.log(error);
  }
}

function render(images) {
  if (!gallery) {
    return;
  } 
    const markup =  images
    .map(image => {
      const {
        tags,
        webformatURL,
        largeImageURL,
        likes,
        views,
        comments,
        downloads,
      } = image;
      return `
          <a class="gallery__link" href="${largeImageURL}"> 
      <div class="photo-card">
        <img src="${webformatURL}" alt="${tags}" loading="lazy" />
        <div class="info">
          <p class="info-item">
            <b>Likes</b>: ${likes}
          </p>
          <p class="info-item">
            <b>Views</b>: ${views}
          </p>
          <p class="info-item">
            <b>Comments</b>: ${comments}
          </p>
          <p class="info-item">
            <b>Downloads</b>: ${downloads}
          </p>
        </div>
      </div>`;
    })
      .join('');
    gallery.insertAdjacentHTML('beforeend', markup);
  
  const { height: imageHeight } = document
    .querySelector('.gallery')
    .firstElementChild.getBoundingClientRect();
    
    window.scrollBy({
    top: imageHeight * 2,
    behavior: 'smooth',
  });
}

function onSearchForm(e) {
  e.preventDefault();
  page = 1;
  query = e.currentTarget.elements.searchQuery.value.trim();
  gallery.innerHTML = '';
  loading.classList.remove('unvisible');
  if (query === '') {
    Notiflix.Notify.failure(
      'The search string cannot be empty. Please specify your search query.',
    );
    loading.classList.add('unvisible')
    return;
  }

  fetchImages(query, page, per_page)
    .then(data => {
      page += 1;
      if (data.totalHits === 0) {
        Notiflix.Notify.failure(
          'Sorry, there are no images matching your search query. Please try again.',
        );
      } else {
        render(data.hits);
        simpleLightBox = new SimpleLightbox('.gallery a').refresh();
        Notiflix.Notify.success(`Hooray! We found ${data.totalHits} images.`);
      }
    })
    .catch(error => console.log(error))
    .finally(() => {
      form.reset();
    });
};

loading.addEventListener('click', () => {
  simpleLightBox.destroy();
  fetchImages(query, page, per_page)
    .then((data) => {
      render(data.hits);
      page += 1;
      simpleLightBox = new SimpleLightbox('.gallery a').refresh();
      const totalPages = Math.ceil(data.totalHits / per_page);
      if (page > totalPages) {
        Notiflix.Notify.failure(
          "We're sorry, but you've reached the end of search results.",
        );
      loading.classList.add('unvisible')
      }
    })
    .catch((error) => console.log(error));
});