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

const appId = '01g8zOGHAMdlxh7XvGhS'
const urlLikesId = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/likes/`

const getLikes= async () => {
  const data = await fetch(`${urlLikesId}`).then((response) => response.json());
  return data;
};
 
export default getLikes;