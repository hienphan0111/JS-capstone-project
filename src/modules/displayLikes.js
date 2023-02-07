const urlLikes =  'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/updbKuFlcIcEqTpMeu3Z/likes/'

const getData = () => {
  fetch(urlLikes, {
    method: 'GET'
  })
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.error(error);
    });
};

getData();

