/**
* @jest-environment jsdom
*/
import countItems  from '../src/modules/counter.js';

describe('Test for elements counter', () => {
  it('should return the number of photo-card elements on the page', () => {
    document.body.innerHTML = `
      <div class="photo-card"></div>
      <div class="photo-card"></div>
      <div class="photo-card"></div>
    `;

    const cards= countItems();
    expect(cards).toEqual(3);
  });
});
