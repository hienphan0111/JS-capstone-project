const appId = 'CADKJQ2LFa6qH5nunRws';
const urlLikesId = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/likes/`;
// -- get likes from the API to use it when we render the tasks.
const getLikes = async () => {
  const data = await fetch(`${urlLikesId}`).then((response) => response.json());
  return data;
};
// -- Function that POST the like into the API data.
const postLike = async (id) => {
  try {
    const response = await fetch(`${urlLikesId}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ item_id: id }),
    });

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    const like = document.querySelector(`.likes-counter-${id}`);
    const likesN = parseInt(like.innerHTML, 10);
    like.textContent = likesN + 1;
  } catch (error) {
    console.log('Request failed');
  }
};

// -- Functions that handles the like button and
// takes the Id of the btn to pass it to the postLike function from above.
const addLike = async () => {
  const likesCounter = document.querySelectorAll('.like-btn');
  likesCounter.forEach((like) => {
    like.addEventListener('click', (e) => {
      try {
        const { id } = e.target;
        postLike(parseInt(id, 10));
      } catch (error) {
        console.log('Request failed');
      }
    });
  });
};

export {
  addLike,
  getLikes,
};