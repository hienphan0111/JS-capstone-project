const  countItems  = require('../src/modules/counter.js');

describe('countItems', () => {
  let photoTxt;
  let counterTxt;

  beforeEach(() => {
    photoTxt = { style: { display: 'block' } };
    counterTxt = { textContent: '' };
    document.querySelectorAll = jest.fn().mockReturnValue([1, 2, 3]);
  });

  it('should display the correct number of items', () => {
    countItems();
    expect(counterTxt.textContent).toBe(3);
    expect(photoTxt.style.display).toBe('block');
  });

  it('should handle the case where no items are found', () => {
    document.querySelectorAll = jest.fn().mockReturnValue([]);
    countItems();
    expect(counterTxt.textContent).toBe('No items found');
    expect(photoTxt.style.display).toBe('none');
  });
});
