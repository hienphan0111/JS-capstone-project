/**
* @jest-environment jsdom
*/
import countItems from '../src/modules/counter.js';

describe('Test for elements counter', () => {
  test('should return the 3 when 3 cards in the DOM', () => {
    document.body.innerHTML = `
      <div class="photo-card"></div>
      <div class="photo-card"></div>
      <div class="photo-card"></div>
    `;

    const cards = countItems();
    expect(cards).toEqual(3);
  });
  test('should return 0 when no cards ', () => {
    document.body.innerHTML = `
    <div></div>
    `;
    const cards = countItems();
    expect(cards).toEqual(0);
  });
  test('should return 600 when 600 cards ', () => {
    document.body.innerHTML = `
    <section class="this-section"></section>
    `;
    const section = document.querySelector('.this-section');
    for (let i = 0; i < 600; i += 1) {
      const div = document.createElement('div');
      div.classList.add('photo-card');
      section.appendChild(div);
    }

    const cards = countItems();
    expect(cards).toBe(600);
  });
});
