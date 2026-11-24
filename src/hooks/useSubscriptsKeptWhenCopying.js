import { useEffect } from 'react';
import { writeDigitsAsSubscripts } from '../chemistry/subscriptDigits.js';

/**
 * Keeps the subscripts of a formula, such as the 2 and 6 of C₂H₆O, when it is copied.
 *
 * Formulae on the page are written with <sub> elements. Copied as plain text, they would lose
 * their subscripts and become C2H6O, so while the copied text is read, each digit in a <sub>
 * is swapped for its Unicode subscript digit (₀ to ₉), then put back. A program that takes
 * formatted text gets the <sub> elements, as usual. Either way, the omnibox reads it back.
 */
export function useSubscriptsKeptWhenCopying() {
  useEffect(() => {
    function keepSubscripts(event) {
      const selection = document.getSelection();
      // Text copied from a text box, such as the omnibox, has no <sub> elements in it.
      if (event.target instanceof HTMLInputElement || event.target instanceof HTMLTextAreaElement) return;
      if (!selection || selection.isCollapsed || !event.clipboardData) return;
      const digitsInSubscripts = [...document.querySelectorAll('sub')]
        .filter((subscript) => selection.containsNode(subscript, true))
        .flatMap((subscript) => listTextNodes(subscript))
        .filter((textNode) => /\d/.test(textNode.data));
      if (digitsInSubscripts.length === 0) return;

      const formattedText = document.createElement('div');
      for (let index = 0; index < selection.rangeCount; index++) formattedText.append(selection.getRangeAt(index).cloneContents());

      // Each subscript digit is one character, like the digit it stands in for, so the selection still covers the same text.
      const ordinaryDigits = digitsInSubscripts.map((textNode) => textNode.data);
      digitsInSubscripts.forEach((textNode) => {
        textNode.data = writeDigitsAsSubscripts(textNode.data);
      });
      const plainText = selection.toString();
      digitsInSubscripts.forEach((textNode, index) => {
        textNode.data = ordinaryDigits[index];
      });

      event.clipboardData.setData('text/plain', plainText);
      event.clipboardData.setData('text/html', formattedText.innerHTML);
      event.preventDefault();
    }

    document.addEventListener('copy', keepSubscripts);
    return () => document.removeEventListener('copy', keepSubscripts);
  }, []);
}

/** Every text node inside the element. */
function listTextNodes(element) {
  const walker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT);
  const textNodes = [];
  while (walker.nextNode()) textNodes.push(walker.currentNode);
  return textNodes;
}
