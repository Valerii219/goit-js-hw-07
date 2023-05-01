import { galleryItems } from './gallery-items.js';

console.log(galleryItems);

const galleryEl = document.querySelector('.gallery')

function createGalleryItemesCard(galleryItems){
    
        return galleryItems.map((galleryItem ) => 
        `<li class="gallery__item">
        <a class="gallery__link" href="${galleryItem.original}">
        <img
            class="gallery__image"
            src="${galleryItem.preview}"
            data-source="${galleryItem.original}"
            alt=${galleryItem.description}
        />
        </a>
        </li>`
    ).join("")

} 
const itemesCard = createGalleryItemesCard(galleryItems);
galleryEl.insertAdjacentHTML('beforeend',itemesCard )

galleryEl.addEventListener('click', onGalleryElClick)

function onGalleryElClick(evt){
    evt.preventDefault();
    if(evt.target.nodeName !== 'IMG'){
        return;
    }
    const urlBigImage = evt.target.dataset.source;
    const instance = basicLightbox.create(`
        <img src="${urlBigImage}" width="800" height="600">
    `)
    instance.show()
    
    galleryEl.addEventListener("keydown", (evt) => {
    if(evt.code === "Escape"){
        instance.close();
    }
})
}