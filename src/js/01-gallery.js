// Add imports above this line
import { galleryItems } from './gallery-items';
import simpleLightbox from 'simplelightbox';
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line

const container = document.querySelector('.gallery');
container.style.listStyleType = 'none';

container.insertAdjacentHTML('afterbegin', createMarkup(galleryItems));

function createMarkup(arr) {
    return arr.map(({ preview, original, description }) => `
    <li class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
    </li>`).join('');
}

const galleryBox = new simpleLightbox('.gallery a', {
    captionSelector: 'img',
    captionsData: 'alt',
    captionDelay: 250,
    captionPosition: 'bottom',
})
