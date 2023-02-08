import getImageData from './utils.js';
import './popStyle.css';
import { getComments, postComment } from './apiComment.js';

const renderPopup = async (id) => {
  const image = await getImageData(id);
  
  const {
    author, width, height, url,
  } = image;
  const container = `
    <div class="pop-in">
      <i class="fa-solid fa-x close" id="c-${id}"></i>
      <div class="img">
        <img src="${image.download_url}" alt="Image">
      </div>
      <h3 class="img-title">${author}</h3>
      <div class="info">
        <ul>
          <li class="i-info">Width: ${width}</li>
          <li class="i-info">Height: ${height}</li>
          <li class="i-info"><a href="${url}"> Click here </a> view</li>
          <li class="i-info"><a href="${image.download_url}">Click here</a> to download</li>
        </ul>
      </div>
      <div class="comments">
        <h3 id="cm-h-${id}"></h3>
        <ul class="list-comment" id="comments-${id}">
        </ul>
      </div>
      <div class="comment-form">
        <h3>Add comment</h3>
        <form class="f-comment">
          <input type="text" id="name-${id}" class="i-cm" placeholder="Your name" size="30" required>
          <textarea id="cm-${id}" class="i-cm" placeholder="Your comment" rows="5" cols="40" required></textarea>
          <button id="btn-${id}" class="btn-cm">Comment</button> 
        </form>
      </div>
    </div>
    `;

  const imgPop = document.createElement('div');
  const overlay = document.createElement('div');
  imgPop.classList.add('img-pop');
  imgPop.innerHTML = container;
  overlay.classList.add('overlay');
  const body = document.querySelector('body');
  const header = document.querySelector('header');

  body.insertBefore(imgPop, header);
  body.insertBefore(overlay, header);
  imgPop.classList.remove('hidden');
  body.classList.add('disable-scroll');

  const closeBtn = document.getElementById(`c-${id}`);
  closeBtn.addEventListener('click', () => {
    imgPop.classList.add('hidden');
    overlay.classList.add('hidden');
    body.classList.remove('disable-scroll');
  });
  updateComment(id);
  addComment(id);
};

const updateComment = async (id) => {
  const comments = await getComments(id);
  const commentHeader = document.getElementById(`cm-h-${id}`);
  commentHeader.innerText = `Comment (${comments.length})`;
  const listCom = document.getElementById(`comments-${id}`);
  listCom.innerHTML = '';
  comments.forEach((comment) => {
    const li = document.createElement('li');
    li.innerHTML = `${comment.creation_date} ${comment.username}: ${comment.comment}`;
    listCom.append(li);
  });
};

function addComment(id) {
  const btnComment = document.getElementById(`btn-${id}`);
  const username = document.getElementById(`name-${id}`);
  const comment = document.getElementById(`cm-${id}`);

  btnComment.addEventListener('click', async (e) => {
    e.preventDefault();
    const item = {
      item_id: id,
      username: username.value,
      comment: comment.value,
    };
    await postComment(item);
    updateComment(id);
  });
}

const showPopup = () => {
  const commentBtn = document.querySelectorAll('.comments-btn');
  commentBtn.forEach((item, index) => {
    item.addEventListener('click', () => {
      renderPopup(index);
    });
  });
};

export default showPopup;