/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom/';
import commentCounter from './commentCounter.js';
import {expect, jest, test} from '@jest/globals';

const mockFn = jest.fn();

describe('Testing how many comment in a particular image', () => {
  test('expected return 5 when 5 comments in the DOM', () => {
    mockFn.mockReset();
    document.body.innerHTML = `
    <ul>
      <li class="comment-i"></li>
      <li class="comment-i"></li>
      <li class="comment-i"></li>
      <li class="comment-i"></li>
      <li class="comment-i"></li>
    </ul>`;

    const items = document.querySelectorAll('.comment-i');
    
    const count = commentCounter(Array.from(items));
    expect(count).toEqual(5);
  });

  test('expected return 0 when we do not have any comments in the DOM', () => {
    mockFn.mockReset();
    document.body.innerHTML = `
    <ul>
      
    </ul>`;

    const items = document.querySelectorAll('.comment-i');
    
    const count = commentCounter(Array.from(items));
    expect(count).toEqual(0);
  });

  test('expected return 1000 when we have 1000 comments in the DOM', () => {
    mockFn.mockReset();
    document.body.innerHTML = `
    <ul>
    </ul>`;
    const ul = document.querySelector('ul');
    for(let i=0; i < 1000; i += 1) {
      const li = document.createElement('li');
      li.classList.add('comment-i');
      ul.appendChild(li);
    }
    const items = document.querySelectorAll('.comment-i');
    
    const count = commentCounter(Array.from(items));
    expect(count).toEqual(1000);
  });
})