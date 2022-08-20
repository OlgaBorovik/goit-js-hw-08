// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox"
// Change code below this line

console.log(galleryItems)

const galleryContainer = document.querySelector(".gallery")
const galleryMarkUp = createGalleryMarkup(galleryItems);

function createGalleryMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) =>
        `
  <a class="gallery__item" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>`
    ).join('')
};
galleryContainer.insertAdjacentHTML('beforeend', galleryMarkUp)

console.log(galleryMarkUp)
const lightbox = new SimpleLightbox(".gallery a", {
    captions: true,
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
    close: true,
    nav: true,
    navText: ['←', '→'],
    doubleTapZoom: 3,
});