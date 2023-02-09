/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom/';
import commentCounter from './commentCounter.js';

describe('Testing how many comment in a particular image', () => {
  test('expected return 5 when 5 comments in the DOM', () => {
    const ul = document.createElement('ul');

    ul.innerHTML = 
      `<li class="comment-i"></li>
      <li class="comment-i"></li>
      <li class="comment-i"></li>
      <li class="comment-i"></li>
      <li class="comment-i"></li>`
    ;
    const items = document.querySelectorAll('.comment-i');

    console.log(items);
    const count = commentCounter(items);
    expect(count).toEqual(5);
  });

  test('creates an element with the specified tag name', () => {
    const el = createElement('div');
    expect(el.tagName).toBe('DIV');
  });

})