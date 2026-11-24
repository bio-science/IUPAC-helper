/**
 * Reading and writing molecular formulae such as "C5H12" or "C2H5Cl".
 *
 * This version deals with carbon (C), hydrogen (H), the halogens (F, Cl, Br, I), nitrogen (N)
 * and oxygen (O).
 *
 * Formulae are written in the Hill order, as in most data books: C first, then H, then
 * the other elements in alphabetical order of their symbols (Br, Cl, F, I, N, O): C2H4BrCl,
 * C2H5ClO, C2H5NO.
 */

import { HALOGEN_SYMBOLS } from './carbonSkeleton.js';

const HALOGENS_IN_ALPHABETICAL_ORDER = [...HALOGEN_SYMBOLS].sort();
// Nitrogen and oxygen come after every halogen in alphabetical order, so they are simply written last.

/** An element symbol with its count, as written in a formula: ('C', 1) -> "C", ('H', 4) -> "H4", ('Cl', 0) -> "". */
function writeElementCount(elementSymbol, count) {
  if (count === 0) return '';
  return count === 1 ? elementSymbol : `${elementSymbol}${count}`;
}

/**
 * { carbonCount: 5, hydrogenCount: 12 } -> "C5H12". A count of 1 is not written (CH4).
 * halogenCounts, if given, adds the halogens: { carbonCount: 1, hydrogenCount: 2,
 * halogenCounts: { Br: 1, Cl: 1 } } -> "CH2BrCl". oxygenCount adds the oxygens:
 * { carbonCount: 2, hydrogenCount: 6, oxygenCount: 1 } -> "C2H6O", and nitrogenCount the
 * nitrogens: { carbonCount: 2, hydrogenCount: 5, nitrogenCount: 1, oxygenCount: 1 } -> "C2H5NO".
 */
export function formatMolecularFormula({ carbonCount, hydrogenCount, halogenCounts = {}, oxygenCount = 0, nitrogenCount = 0 }) {
  const carbonPart = carbonCount === 1 ? 'C' : `C${carbonCount}`;
  const halogenPart = HALOGENS_IN_ALPHABETICAL_ORDER.map((elementSymbol) => writeElementCount(elementSymbol, halogenCounts[elementSymbol] ?? 0)).join('');
  return carbonPart + writeElementCount('H', hydrogenCount) + halogenPart + writeElementCount('N', nitrogenCount) + writeElementCount('O', oxygenCount);
}

/** An element symbol and its count, e.g. "Cl2". Two-letter symbols are tried first, so "Cl" isn't read as C then l. */
const ELEMENT_WITH_OPTIONAL_NUMBER = /(CL|BR|C|H|N|O|F|I)(\d*)/y;

/** The symbol as it is normally written: "CL" -> "Cl". */
const SYMBOL_BY_UPPER_CASE = { C: 'C', H: 'H', N: 'N', O: 'O', F: 'F', CL: 'Cl', BR: 'Br', I: 'I' };

/**
 * The elements in the text, in order, if it is written only as element symbols and
 * numbers: "C2H5Cl" -> [['C', 2], ['H', 5], ['Cl', 1]]. Otherwise null.
 * Lower case is accepted too ("c2h5cl"), because students often type it that way.
 */
function readElementsAndCounts(text) {
  const upperCaseText = text.trim().toUpperCase();
  const elementsAndCounts = [];
  ELEMENT_WITH_OPTIONAL_NUMBER.lastIndex = 0;
  while (ELEMENT_WITH_OPTIONAL_NUMBER.lastIndex < upperCaseText.length) {
    const match = ELEMENT_WITH_OPTIONAL_NUMBER.exec(upperCaseText);
    if (match === null) return null;
    const [, symbolInUpperCase, numberText] = match;
    elementsAndCounts.push([SYMBOL_BY_UPPER_CASE[symbolInUpperCase], numberText === '' ? 1 : Number(numberText)]);
  }
  return elementsAndCounts;
}

/**
 * True if the text could be a formula rather than a name: only the letters C, H, N and O and
 * digits (in any case), or a formula made of element symbols and numbers, such as C2H5Cl.
 * It must have a carbon in it.
 */
export function looksLikeMolecularFormula(text) {
  if (!/[Cc]/.test(text)) return false;
  return /^[CHNOchno0-9]+$/.test(text.trim()) || readElementsAndCounts(text) !== null;
}

/**
 * "C5H12" -> { carbonCount: 5, hydrogenCount: 12, oxygenCount: 0, nitrogenCount: 0, halogenCounts: { F: 0, Cl: 0, Br: 0, I: 0 } }
 * Each element may appear more than once, so "CH3CH2Cl" also works (C2H5Cl).
 * Lower case is accepted too ("c5h12"), because students often type it that way.
 * Returns null if the text is not a formula (a formula can't start with a number, e.g. "5C").
 */
export function parseMolecularFormula(text) {
  if (!looksLikeMolecularFormula(text)) return null;
  const elementsAndCounts = readElementsAndCounts(text);
  if (elementsAndCounts === null) return null;

  const elementCounts = { C: 0, H: 0, N: 0, O: 0, F: 0, Cl: 0, Br: 0, I: 0 };
  for (const [elementSymbol, count] of elementsAndCounts) elementCounts[elementSymbol] += count;
  return {
    carbonCount: elementCounts.C,
    hydrogenCount: elementCounts.H,
    oxygenCount: elementCounts.O,
    nitrogenCount: elementCounts.N,
    halogenCounts: Object.fromEntries(HALOGEN_SYMBOLS.map((elementSymbol) => [elementSymbol, elementCounts[elementSymbol]])),
  };
}

/** How many halogen atoms there are altogether: { F: 0, Cl: 2, Br: 1, I: 0 } -> 3. */
export function countHalogenAtoms(halogenCounts = {}) {
  return Object.values(halogenCounts).reduce((total, count) => total + count, 0);
}

/** Alkanes follow the general formula CnH2n+2. */
export function hydrogenCountForAlkaneWithCarbons(carbonCount) {
  return 2 * carbonCount + 2;
}
