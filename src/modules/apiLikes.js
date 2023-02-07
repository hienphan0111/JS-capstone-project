const appId = 'CADKJQ2LFa6qH5nunRws';
const urlLikesId = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/likes/`;
// -- get likes from the API to use it in the next task
const getLikes = async () => {
  const data = await fetch(`${urlLikesId}`).then((response) => response.json());
  return data;
};

export default getLikes;