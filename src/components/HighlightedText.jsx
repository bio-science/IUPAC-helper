/**
 * A text with some stretches of it marked, such as the part of a name that a naming step
 * gave. ranges are { start, end } as in String.prototype.slice, in order, not overlapping.
 */
export default function HighlightedText({ text, ranges = [] }) {
  const pieces = [];
  let position = 0;
  for (const { start, end } of ranges) {
    if (start > position) pieces.push(text.slice(position, start));
    pieces.push(
      <mark key={start} className="highlighted-text__mark">
        {text.slice(start, end)}
      </mark>,
    );
    position = end;
  }
  if (position < text.length) pieces.push(text.slice(position));
  return pieces;
}
