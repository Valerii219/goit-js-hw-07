import { galleryItems } from './gallery-items.js';

// Change code below this line

console.log(galleryItems);
const galleryEl = document.querySelector('.gallery')

function createGallery(galleryItems){
    
    return galleryItems.map(({preview, original, description} ) =>
    `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img class="gallery__image" src="${preview}" alt="" title="${description}" />
    </a>
 </li>`).join('')
 }

 const itemesCard = createGallery(galleryItems);
galleryEl.insertAdjacentHTML('beforeend', itemesCard )
new SimpleLightbox('.gallery', { animationSlide });

