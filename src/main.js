import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { getImageList } from './js/pixabay-api'

const searchInput = document.querySelector('#searchInput');
const secrhButton = document.querySelector('#secrhButton');
const galleryList = document.querySelector('.gallery');

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
});

secrhButton.addEventListener('click', () => {
    const q = searchInput.value.replace(' ', '+');

    galleryList.innerHTML = '';
    for (let i = 0; i < 20; i++) {
        galleryList.innerHTML += `
            <li class="gallery-item gallery-item-loader">
                <div class="loader"></div>
            </li>
        `;
    }

    getImageList(q)
        .then(res => {
            galleryList.innerHTML = '';

            const galleryMarkup = res.data.hits
                .map(({ previewURL, largeImageURL, likes, views, comments, downloads}) =>`
                    <li class="gallery-item">
                        <a class="gallery-link" href="${largeImageURL}">
                            <img
                                class="gallery-image"
                                src="${previewURL}"
                            />
                        </a>
                        <div class="gallery-image-panel">
                            <div class="gallery-image-panel_item">
                                <div class="gallery-image-panel_item-field">Likes</div>
                                <div class="gallery-image-panel_item-value">${likes}</div>
                            </div>
                            <div class="gallery-image-panel_item">
                                <div class="gallery-image-panel_item-field">Views</div>
                                <div class="gallery-image-panel_item-value">${views}</div>
                            </div>
                            <div class="gallery-image-panel_item">
                                <div class="gallery-image-panel_item-field">Comments</div>
                                <div class="gallery-image-panel_item-value">${comments}</div>
                            </div>
                            <div class="gallery-image-panel_item">
                                <div class="gallery-image-panel_item-field">Downloads</div>
                                <div class="gallery-image-panel_item-value">${downloads}</div>
                            </div>
                        </div>
                    </li>
                `)
                .join('');
            
            galleryList.insertAdjacentHTML('beforeend', galleryMarkup);
            lightbox.refresh();
        })
        .catch(() => {
            iziToast.error({
                title: 'Error',
                message: 'Sorry, there are no images matching your search query. Please try again!',
            });
        });
});
