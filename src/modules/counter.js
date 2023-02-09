// -- Function that counts all the DOM cards in the home page
const countItems = () => {
  const card = document.querySelectorAll('.photo-card').length;
  return card;
};

export default countItems;