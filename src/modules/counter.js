// const counterTxt = document.querySelector('.photographies-n');
// const photoTxt = document.querySelector('.photographies-txt');
// // -- Function that updates the number of cards in the home page
// const updateCounter = () => {
//     counterTxt.textContent = `${countItems()}`;

// };
// -- Function that counts all the DOM cards in the home page
const countItems = () => {
 const card =  document.querySelectorAll('.photo-card').length;
 return card;
};

export default countItems;