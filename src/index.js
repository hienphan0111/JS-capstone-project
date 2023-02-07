import './styles.css';
import './modules/api.js';
import renderPopup from './popup_module/renderPopup.js';
import displayPhotos from './modules/render.js';
import './modules/displayLikes.js'
document.addEventListener('DOMContentLoaded', displayPhotos);
renderPopup(1);