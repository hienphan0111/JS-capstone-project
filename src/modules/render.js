import getData from './api.js';
import showPopup from '../popup_module/renderPopup.js';
import {
  addLike,
  getLikes,
}
from './apiLikes.js';

import updateCounter from './updatecounter.js';
// -- function that renders the information coming from the API.
const cards = document.querySelector('.cards');
const displayPhotos = async () => {
  const photos = await getData();
  const likes = await getLikes();
  for (let i = 0; i < photos.length; i += 1) {
    const item = likes.find((e) => e.item_id === Number(photos[i].id));
    let likesCounter = 0;
    if (item) {
      likesCounter = item.likes;
    }
    cards.innerHTML += `<div class="photo-card">
   <p id="${photos[i].id}">${photos[i].id}</p>
   <div class="img-container">
     <img class="photo" src="${photos[i].download_url}" alt="photo">
   </div>
   <div class="img-footer">
     <p class="photo-author">${photos[i].author}</p>
     <div class="likes-container">
     <button class="like-btn-container">
     <i class="fa-regular fa-heart like-btn" id="${photos[i].id}"></i>
     </button>
     <p id="${photos[i].id}" class="likes-counter-${photos[i].id}">${likesCounter}</p>
     </div>
   </div>
   <div class="buttons">
     <button class="card-btn comments-btn">Comments
     <i class="fa-regular fa-comment-dots"></i></button>
   </div>
 </div>`;
  }
  showPopup();
  addLike();
  updateCounter();
};
export default displayPhotos;