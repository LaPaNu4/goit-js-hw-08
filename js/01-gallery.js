// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from '../node_modules/simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

console.log(galleryItems);
const galleryEL = document.querySelector('.gallery');
const galleryItemEl = galleryItems
  .map(
    item => `<li class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      alt="${item.description}"
    />
  </a>
</li>`
  )
  .join('');
galleryEL.innerHTML = galleryItemEl;

const options = {
  captionsData: 'alt',
  captionDelay: 250,
};
const lightbox = new SimpleLightbox('.gallery a', options);
const listLi = document.querySelectorAll('.gallery__item');
listLi.forEach(element => {
    element.style.listStyle='none'
});