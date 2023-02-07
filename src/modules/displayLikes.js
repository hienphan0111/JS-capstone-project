const urlLikes =  'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/'

const urlApps = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/'

const createApp = () => {
  fetch(urlApps, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.text();
    })
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.error(error);
    });
};


const appId = 'iDR6FK5eZz5q30WcT2AB'
const urlLikesId = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/likes/`


// const fetchLikes = async () => {
//   const data = await fetch(`${urlLikesId}`).then((response) => response.json());
//   console.log(data);
// };

// // fetchLikes();
// const likesGet = () => {
 
//   fetch(urlLikesId, { method: 'GET' })
//     .then((res) => res.json())
//     .then((data) => {
//       return data;
//     });
// };
// const data = await likesGet()
// console.log(data)

const getLikes = () => {
  fetch(urlLikesId, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(response => {
      console.log(response)
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      console.log(response.text());
    })
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.error(error);
    });
};

getLikes();
