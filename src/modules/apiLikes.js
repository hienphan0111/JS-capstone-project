const appId = 'CADKJQ2LFa6qH5nunRws';
const urlLikesId = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/likes/`;
// -- get likes from the API to use it when we render the tasks.
const getLikes = async () => {
  const response = await fetch(urlLikesId);
  const data = await response.json();
  return data;
};
// -- Function to update the likes counter.
const updateLikes = (id) => {
  const likeCounter = document.querySelector(`.likes-counter-${id}`);
  const currentLikes = parseInt(likeCounter.innerHTML, 10);
  likeCounter.textContent = currentLikes + 1;
};
// -- Function that POST the like into the API data.
const postLike = async (id) => {
  try {
    const response = await fetch(urlLikesId, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ item_id: id }),

    });
    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }
    updateLikes(id);
  } catch (error) {
    console.error(error);
  }
};
// -- Functions that handles the like button and
// takes the Id of the btn to pass it to the postLike function from above.
const addLike = async () => {
  const likesCounter = document.querySelectorAll('.like-btn');
  likesCounter.forEach((like) => {
    like.addEventListener('click', (e) => {
      const { id } = e.target;
      postLike(parseInt(id, 10));
    });
  });
};

export {
  addLike,
  getLikes,
};