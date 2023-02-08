const counterTxt = document.querySelector('.photographies-n');
const photoTxt = document.querySelector('.photographies-txt');
const updateCounter = (counter) => {
  if (counter === 0) {
    photoTxt.style.display = 'none';
    counterTxt.textContent = 'No items found';
  } else {
    counterTxt.textContent = counter;
  }
};

const countItems = () => {
  let counter = 0;
  const cards = document.querySelectorAll('.photo-card');
  cards.forEach(() => {
    counter += 1;
  });
  updateCounter(counter);
};

export default countItems;