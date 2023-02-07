import getData from './api.js';
import getLikes from './apiLikes'
// -- function that renders the information coming from the API.
const cards = document.querySelector('.cards');
const displayPhotos = async () => {
  const photos = await getData();
  const likes = await getLikes();
  let id = 1;
  for (let i = 1; i < photos.length; i += 1) {
      const item = likes.find((e) => e.item_id === Number(photos[i].id));
     let likeCount = 0;
    if (item) {
      likeCount = item.likes;
    }
    cards.innerHTML += `<div class="photo-card">
   <p id="${id}">${photos[i].id}</p>
   <div class="img-container">
     <img class="photo" src="${photos[i].download_url}" alt="photo">
   </div>
   <div class="img-footer">
     <p class="photo-author">${photos[i].author}</p>
     <div class="likes-container">
     <button class="like-btn">
     <i class="fa-regular fa-heart"></i>
     </button>
     <p id="${photos[i].id}" class="likes-counter">${likeCount}</p>
     </div>
   </div>
   <div class="buttons">
     <button class="card-btn comments-btn">Comments</button>
     <button class="card-btn reserve-btn">Reserve</button>
   </div>
 </div>`;
  id += 1;
  }

};

export default displayPhotos;