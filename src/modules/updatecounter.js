import countItems from './counter';

const counterTxt = document.querySelector('.photographies-n');
// -- Function that updates the number of cards in the home page
const updateCounter = () => {
  counterTxt.textContent = `${countItems()}`;
};
export default updateCounter;