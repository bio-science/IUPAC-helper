/**
 * A name built as a list of parts, so each part can say what it is and which step of the
 * naming it came from. Joining the parts' texts gives the name:
 *
 *   3-ethyl-2-methylpentane
 *   [{ text: '3', kind: 'locants', group: 'prefix:ethyl' }, { text: '-', kind: 'punctuation', group: 'prefix:ethyl' },
 *    { text: 'ethyl', kind: 'prefix', group: 'prefix:ethyl', substituentName: 'ethyl' },
 *    { text: '-', kind: 'punctuation', group: null },
 *    { text: '2', kind: 'locants', group: 'prefix:methyl' }, ...,
 *    { text: 'pent', kind: 'stem', group: 'parent' }, { text: 'ane', kind: 'ending', group: 'unsaturation' }]
 *
 * kind is what the text is:
 *   'locants'      numbers or N, such as "2,3"
 *   'punctuation'  a hyphen, or the space between the words of an ester's name
 *   'prefix'       a substituent prefix with any di, tri ... such as "dimethyl"
 *   'ringPrefix'   "cyclo"
 *   'stem'         the parent's stem, such as "pent" or "hex"
 *   'ending'       "ane", "ene", "diene", or a suffix such as "ol", "dioic acid", "carboxylate"
 *   'stereo'       E and Z descriptors with their brackets and hyphen, such as "(2E)-"
 *   'word'         the group written before an ester's name, such as "methyl"
 * group is the naming step the part belongs to (or null for a hyphen between steps):
 *   'parent', 'unsaturation', 'suffix', 'stereo', 'esterGroup', or 'prefix:<substituent name>'.
 */

export function namePart(text, kind, group = null, extra = {}) {
  return { text, kind, group, ...extra };
}

/** The name the parts spell. */
export function joinNameParts(parts) {
  return parts.map(({ text }) => text).join('');
}

/** The group a prefix's parts belong to: 'prefix:methyl'. */
export function prefixGroup(substituentName) {
  return `prefix:${substituentName}`;
}

/**
 * Where each part starts and ends in the name: the parts with start and end added
 * (end is one past the last character, as in String.prototype.slice).
 */
export function listPartPositions(parts) {
  let start = 0;
  return parts.map((part) => {
    const positioned = { ...part, start, end: start + part.text.length };
    start += part.text.length;
    return positioned;
  });
}

/**
 * The stretch of the name from the first part matching to the last one, as one range
 * { start, end }, or null when no part matches.
 */
export function findSpanOfParts(parts, isWanted) {
  const matching = listPartPositions(parts).filter(isWanted);
  if (matching.length === 0) return null;
  return { start: matching[0].start, end: matching[matching.length - 1].end };
}

/** Every part matching, as ranges { start, end }, in order. */
export function listRangesOfParts(parts, isWanted) {
  return listPartPositions(parts)
    .filter(isWanted)
    .filter(({ text }) => text.length > 0)
    .map(({ start, end }) => ({ start, end }));
}
