const refs = {
  openModalBtn: document.querySelectorAll('[data-modal-open]'),
  closeModalBtn: document.querySelector('[data-modal-close]'),
  modal: document.querySelector('[data-modal]'),
};

refs.openModalBtn.forEach(el => {
  el.addEventListener('click', toggleModal);
});
refs.closeModalBtn.addEventListener('click', toggleModal);

function toggleModal() {
  refs.modal.classList.toggle('is-hidden');
}

function imageClickHandler(event) {
  const id = event.currentTarget.id;
  if (event.target.nodeName === "IMG") {
    renderModalWindow(event.target.book_image);
  } 
}

function renderModalWindow(book_image) {
  const books = JSON.parse(localStorage.getItem('books'));
  const book = books.find(({ image }) => image === book_image);
  const markup = createModalWindow(book);
  modal.insertAdjacentHTML('beforeend', markup);
}

function createModalWindow({ title, author, book_image, description }) {
  return `<div class='modal'> 
    <div class="picture"><img src='${book_image}' alt='${description}'></div>
      <div class="info"><h1>${title}>
      <h2>${author}</h2>
      <p>${description}</p>
      <ul class="icons">
            <li class="icon-link"></li>
            <li class="icon-link"></li>
            <li class="icon-link"></li>
        </ul>
        </div>
    </div>`;
}
