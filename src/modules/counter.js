const counterTxt = document.querySelector('.photographies-n');
const photoTxt = document.querySelector('.photographies-txt');
// -- Function that updates the number of cards in the home page
const updateCounter = (counter) => {
  if (counter === 0) {
    photoTxt.style.display = 'none';
    counterTxt.textContent = 'No items found';
  } else {
    counterTxt.textContent = counter;
  }
};
// -- Function that counts all the DOM cards in the home page
const countItems = () => {
  let counter = 0;
  const cards = document.querySelectorAll('.photo-card');
  cards.forEach(() => {
    counter += 1;
  });
  updateCounter(counter);
};

export default countItems;