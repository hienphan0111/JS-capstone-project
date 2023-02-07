import { getImageData } from './utils.js';
import './popStyle.css';

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
    `;
  const imgPop = document.createElement('div');
  const overlay = document.createElement('div');
  imgPop.classList.add('img-pop');
  imgPop.classList.add('show');
  imgPop.innerHTML = container;
  overlay.classList.add('overlay');
  const body = document.querySelector('body');
  const header = document.querySelector('header');

  body.insertBefore(imgPop, header);
  body.insertBefore(overlay, header);
  imgPop.classList.remove('hidden');
  
  const closeBtn = document.getElementById(`c-${id}`);
  closeBtn.addEventListener('click', () => {
    imgPop.classList.add('hidden');
    overlay.classList.add('hidden');
  });
};

const showPopup = () => {
  const commentBtn = document.querySelectorAll('.comments-btn');
  commentBtn.forEach((item, index) => {
    item.addEventListener('click', () => {
      renderPopup(index);
    });
  });
};

export default showPopup;