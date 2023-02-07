// -- function that renders the information coming from the API.
const cards = document.querySelector('.cards');
const displayPhotos = async (photos) => {
  for (let i = 0; i < photos.length; i += 1) {
    cards.innerHTML += `<div class="photo-card">
   <p id="${photos[i].id}">${photos[i].id}</p>
   <div class="img-container">
     <img class="photo" src="${photos[i].download_url}" alt="photo">
   </div>
   <div class="img-footer">
     <p class="photo-author">${photos[i].author}</p>
     <div class="likes-container">
     <button class="like-btn">&#10084;</button>
     <p class="likes-counter">7 likes</p>
     </div>
   </div>
   <div class="buttons">
     <button class="card-btn comments-btn">Comments</button>
     <button class="card-btn reserve-btn">Reserve</button>
   </div>
 </div>`;
  }
};
export default displayPhotos;