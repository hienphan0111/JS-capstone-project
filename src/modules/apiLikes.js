const appId = 'CADKJQ2LFa6qH5nunRws';
const urlLikesId = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/likes/`;
// -- get likes from the API to use it in the next task
const getLikes = async () => {
  const data = await fetch(`${urlLikesId}`).then((response) => response.json());
  return data;
};

const postLike = async (id) => {
  const data = await fetch(`${urlLikesId}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ item_id: id }),
  });
  const like = document.querySelector(`.likes-counter-${id}`)
  const likesN = parseInt(like.innerHTML)
  like.textContent = likesN + 1;
  }

const addLike = async () => {
  const likesCounter = document.querySelectorAll('.like-btn')
  likesCounter.forEach((like) => {
    like.addEventListener('click', (e) => {
      const { id } = e.target;
      postLike(parseInt(id))
     
    })
  })
}

export {
  addLike,
  postLike,
  getLikes
}