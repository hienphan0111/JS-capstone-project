/**
* @jest-environment jsdom
*/
import countItems  from '../src/modules/counter.js';

describe('countItems', () => {
  let cards;

  beforeEach(() => {
    cards = [{}, {}, {}];
    document.querySelectorAll = jest.fn(() => cards);
  });

  it('counts the number of photo-card elements', () => {
    const updateCounter = jest.fn();
    countItems();
    expect(updateCounter).toHaveBeenCalledWith(3);
  });
});
