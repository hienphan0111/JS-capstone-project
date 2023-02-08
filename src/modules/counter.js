const counterTxt = document.querySelector('.photographies-n');
const photoTxt = document.querySelector('.photographies-txt')
const countItems = () => {
  let counter = 0;
  const cards = document.querySelectorAll('.photo-card');
  cards.forEach(() => {
    counter += 1;
    return counter;
  });
  if (counter === 0) {
    photoTxt.style.display = 'none';
    counterTxt.textContent = 'No items found';
  } else {
    counterTxt.textContent = counter;
  }
};

export default countItems;