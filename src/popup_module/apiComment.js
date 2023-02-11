const appId = 'CADKJQ2LFa6qH5nunRws';

/* Get comments from the Involvement API */

const getComments = async (id) => {
  const urlInvComments = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/comments?item_id=${id}`;

  const res = await fetch(urlInvComments);
  const result = await res.json();
  return result;
};

/* Post comment to the Involvement API */

async function postComment(comment) {
  const urlInvPost = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/comments/`;

  try {
    const response = await fetch(urlInvPost, {
      method: 'POST',
      body: JSON.stringify(comment),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }
    return response.ok;
  } catch (e) {
    throw new Error('Some thing wrong! Try again');
  }
}

export { getComments, postComment };