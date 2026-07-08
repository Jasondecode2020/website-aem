/*
 * Accordion Block
 * Recreate an accordion
 * https://www.hlx.live/developer/block-collection/accordion
 */

function hasWrapper(el) {
  return !!el.firstElementChild && window.getComputedStyle(el.firstElementChild).display === 'block';
}

export default function decorate(block) {
  [...block.children].forEach((row) => {
    // decorate accordion item label
    const label = row.children[0];
    const summary = document.createElement('summary');
    summary.className = 'accordion-item-label';
    summary.append(...label.childNodes);
    if (!hasWrapper(summary)) {
      summary.innerHTML = `<p>${summary.innerHTML}</p>`;
    }
    // decorate accordion item body
    const body = row.children[1];
    body.className = 'accordion-item-body';
    if (!hasWrapper(body)) {
      body.innerHTML = `<p>${body.innerHTML}</p>`;
    }
    // decorate accordion item
    const details = document.createElement('details');
    details.className = 'accordion-item';
    details.append(summary, body);
    row.replaceWith(details);
  });
}

function decorateAccordion(el) {
  const titles = el.querySelectorAll(':scope > div:nth-child(odd)');
  titles.forEach((title) => {
    title.classList.add('item-title');

    // Read title text before removing the inner div
    const innerDiv = title.querySelector(':scope > div');
    const titleText = innerDiv?.textContent?.trim() || '';

    // Replace inner content with just the text
    title.innerHTML = titleText;

    title.nextElementSibling.classList.add('item-content');
    title.addEventListener('click', () => {
      title.classList.toggle('open');
    });
  });
}

const els = document.querySelectorAll('.accordion-image');
els.forEach((el) => {
  decorateAccordion(el);
});