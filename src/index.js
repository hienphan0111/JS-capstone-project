import Photo from './modules/photo.js'
// class Data {
  const getData = async () => {
    const response = await fetch('https://picsum.photos/v2/list')
    const data = await response.json();
    console.log(data)
    data.forEach(element => {
      const { id, author, width, heigth, url, download_url } = element;
    const newPhoto = new Photo(id, author, width, heigth, url, download_url )
   const cards = document.querySelector('.cards');
    displayPhoto(data)
    });
    
  } 
  
  // }
  getData();
  

  
  async function displayPhoto(photos) {
  photos.forEach((photo => {
   cards.innerHTML += ``
  })
  }
  