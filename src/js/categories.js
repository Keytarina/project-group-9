import {fetchBooksCategoryList,
  fetchTopBooks,
  fetchBooksByCategory,
  fetchBookById,} from './serviceApi.js'

const category = document.querySelector(".categories-item");


category.addEventListener('click', () => {
  fetchBooksCategoryList().then(data => {
    const markupCategoriesList = data.map(({list_name }) => {
      return `<li class="categories-list" id="${list_name}">${list_name}</li>`;
    }).join('')
    category.insertAdjacentHTML('beforeend', markupCategoriesList);
  }).catch((error) => console.log(error))
});

fetchBooksCategoryList();

// async function fetchBooksCategoryList(list_name) {
//   try {
//     console.log(123456);
//     const response = await axios.get(
      
//     );
//     return `<li class="" id="${list_name}">${list_name}</li>`;;
//   }
//   catch (error) {
//       console.log(error);
//   }
// };















// const loading = document.querySelector("")

// let query = '';
// let page = 1;

// axios.interceptors.response.use(
//   response => {
//     return response;
//   },
//   error => {
//     Notiflix.Notify.failure('Something went wrong. Please try again later.');
//     return Promise.reject(error);
//   },
// );

// async function fetchImages(query, page, per_page) {
//   try {
//     const response = await axios.get(
//       `?key=${API}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${per_page}`,
//     );
//     return response.data;
//   }
//   catch (error) {
//       console.log(error);
//   }
// }

// function render(images) {
//   if (!gallery) {
//     return;
//   } 
//     const markup =  images
//     .map(image => {
//       const {_id,author,book_image,title
//       } = image;
//       return `
//       <div class="book-card">
//         <img src="${book_image}" alt="${name}" loading="lazy" />
//         <div class="info">
//           <h3 class="book-item">${title}</h3>
//           <p class="book-author">${author}</p>
//         </div>
//       </div>`;
//     })
//       .join('');
//     gallery.insertAdjacentHTML('beforeend', markup);
  
//   const { height: imageHeight } = document
//     .querySelector('.gallery')
//     .firstElementChild.getBoundingClientRect();
    
//     window.scrollBy({
//     top: imageHeight * 2,
//     behavior: 'smooth',
//   });
// }

// function onSearchForm(e) {
//   e.preventDefault();
//   page = 1;
//   query = e.currentTarget.elements.searchQuery.value.trim();
//   gallery.innerHTML = '';
//   loading.classList.remove('unvisible');
//   if (query === '') {
//     Notiflix.Notify.failure(
//       'The search string cannot be empty. Please specify your search query.',
//     );
//     loading.classList.add('unvisible')
//     return;
//   }

//   fetchImages(query, page, per_page)
//     .then(data => {
//       page += 1;
//       if (data.totalHits === 0) {
//         Notiflix.Notify.failure(
//           'Sorry, there are no images matching your search query. Please try again.',
//         );
//       } else {
//         render(data.hits);
//         simpleLightBox = new SimpleLightbox('.gallery a').refresh();
//         Notiflix.Notify.success(`Hooray! We found ${data.totalHits} images.`);
//       }
//     })
//     .catch(error => console.log(error))
//     .finally(() => {
//       form.reset();
//     });
// };

// loading.addEventListener('click', () => {
//   simpleLightBox.destroy();
//   fetchImages(query, page, per_page)
//     .then((data) => {
//       render(data.hits);
//       page += 1;
//       simpleLightBox = new SimpleLightbox('.gallery a').refresh();
//       const totalPages = Math.ceil(data.totalHits / per_page);
//       if (page > totalPages) {
//         Notiflix.Notify.failure(
//           "We're sorry, but you've reached the end of search results.",
//         );
//       loading.classList.add('unvisible')
//       }
//     })
//     .catch((error) => console.log(error));
// });