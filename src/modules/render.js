import getData from './api.js';
import showPopup from '../popup_module/renderPopup.js';
import {
  addLike,
getLikes,
postLike }
from './apiLikes'
// -- function that renders the information coming from the API.
const cards = document.querySelector('.cards');
const displayPhotos = async () => {
  const photos = await getData();
  for (let i = 0; i < photos.length; i += 1) {
    cards.innerHTML += `<div class="photo-card">
   <p id="${photos[i].id}">${photos[i].id}</p>
   <div class="img-container">
     <img class="photo" src="${photos[i].download_url}" alt="photo">
   </div>
   <div class="img-footer">
     <p class="photo-author">${photos[i].author}</p>
     <div class="likes-container">
     <button id="${photos[i].id}" class="like-btn">&#10084;</button>
     <p id="${photos[i].id}" class="likes-counter-${photos[i].id}">0</p>
     </div>
   </div>
   <div class="buttons">
     <button class="card-btn comments-btn">Comments</button>
     <button class="card-btn reserve-btn">Reserve</button>
   </div>
 </div>`;
  }
  showPopup();
  addLike();
};
export default displayPhotos;