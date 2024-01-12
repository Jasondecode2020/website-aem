import { createOptimizedPicture } from '../../scripts/aem.js';

export default function decorate(block) {
  /* change to ul, li */
  const div = document.createElement('div');
  [...block.children].forEach((row) => {
    const subDiv = document.createElement('div');
    while (row.firstElementChild) li.append(row.firstElementChild);
    [...subDiv.children].forEach((div) => {
      if (div.children.length === 1 && div.querySelector('picture')) div.className = 'cards-card-image';
      else div.className = 'cards-card-body';
    });
    ul.append(subDiv);
  });
  div.querySelectorAll('img').forEach((img) => img.closest('picture').replaceWith(createOptimizedPicture(img.src, img.alt, false, [{ width: '750' }])));
  block.textContent = '';
  block.append(div);
}
