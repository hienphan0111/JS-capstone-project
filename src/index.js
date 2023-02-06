import './styles.css'
import Photo from './modules/photo.js'


const cards = document.querySelector('.cards');
// class Data {
  const getData = async () => {
    const response = await fetch('https://picsum.photos/v2/list')
    const data = await response.json();
    console.log(data);
    // data.forEach(element => {
    //   const { id, author, width, heigth, url, download_url } = element;
    // const newPhoto = new Photo(id, author, width, heigth, url, download_url )
   
   displayPhotos(data)
    
    
  } 

  getData();
  
  
function displayPhotos(photos) {
  for(let i= 0; i < photos.length ; i+= 1){
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
 </div>`
  }
  }

  