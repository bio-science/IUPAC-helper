/**
 * Reading a structural formula, such as CH3CH(CH3)CH2CH3, and building the exact molecule
 * it describes. (A molecular formula such as C5H12 only gives the number of each atom, so
 * it is read by molecularFormula.js instead and shown as a list of isomers.)
 *
 * Structural formulae are one of the ways of writing organic compounds in the AQA A-level
 * specification (7405, section 3.3.1.1). They are written the way A-level textbooks write them:
 *
 *   CH3CH2CH3         one carbon at a time, each with its hydrogens
 *   CH3CH(CH3)CH3     a side chain in brackets, after the carbon it is joined to
 *   CH3C(CH3)2CH3     a number after the bracket for more than one of the same side chain
 *   (CH3)2CHCH3       side chains in brackets at the start are joined to the first carbon
 *   CH3(CH2)4CH3      a repeated part of the chain in brackets, with how many times it repeats
 *   CH3CH(C2H5)CH3    an unbranched group written by its formula: C2H5 is CH2CH3, C3H7 is CH2CH2CH3
 *   H3CCH2CH3         hydrogens may come before their carbon
 *   CH3-CH2-CH3       bonds may be written as dashes; spaces, lower case and [ ] are fine too
 *   CH2=CHCH3         a double bond is written as =
 *   HC≡CCH3           a triple bond is written as ≡ (or #, as in SMILES): CH3C≡CCH3
 *   CH3C(=CH2)CH3     a side chain joined by a double bond has the = inside its bracket
 *   CH3CHClCH3        a halogen (F, Cl, Br, I) after the carbon it is joined to
 *   CH3CCl2CH3        a number after it for more than one: CCl3 is a carbon with three chlorines
 *   CH3CH(Cl)CH3      a halogen may also be written in brackets, like a side chain
 *   ClCH2CH2Cl        a halogen at the start is joined to the first carbon
 *   CH3CH2OH          an OH group after its carbon, like a halogen: CH3CH(OH)CH3, CH2OHCH2OH
 *   HOCH2CH2OH        an OH group at the start may be written HO
 *   CH3CHO            an O after a carbon is joined to it by a double bond, C=O: the CHO of an
 *                     aldehyde. It may also be written CH3CH=O or CH3CH(=O)
 *   OHCCH2CHO         a CHO group at the start may be written OHC
 *
 *   CH3COCH3          the same O after a carbon in the middle of the chain is the C=O of a
 *                     ketone. It may also be written CH3C(=O)CH3 or CH3C(O)CH3
 *   CH3COOH           an O and an OH after the same carbon are the COOH of a carboxylic acid.
 *                     It may also be written CH3CO2H or CH3C(=O)OH
 *   HOOCCH2COOH       a COOH group at the start may be written HOOC or HO2C
 *   CH3COOCH3         an ester: the COO joins the next carbon through its second O. It may
 *                     also be written CH3CO2CH3 or CH3C(=O)OCH3
 *   CH3CONH2          an NH2 group after its carbon, like OH: the CONH2 of an amide
 *   CH3CONHCH3        an NH between two carbons joins them, as in an N-substituted amide
 *
 *   CH3OCH3           an O after a carbon that has no room left for a C=O joins it to the
 *                     next carbon, as in an ether: CH3CH2OCH2CH3, CH3OCH2CH2OCH3
 *   CH3NHCH3          the same for an NH, as in a secondary amine: CH3CH2NHCH3
 *   CH3CH2NH2         an NH2 group after its carbon, as in a primary amine; H2NCH2CH2NH2
 *   CH3CH(OCH3)2      an O at the start of a bracket joins the group in it through that O, as
 *                     in an ether: (OCH3) is a methoxy group. An O at the end of a bracket does
 *                     the same, (CH3O)2CHCH3, unless its carbon has room for a C=O, as in (CH2CHO)
 *   CH3(OCH2CH2)3OCH3 the same O in a repeated part of the chain joins it to the carbon before
 *                     it (or, at the end of the bracket, the carbon after it)
 *
 * The IUPAC Blue Book writes structural formulae with a dash for every bond, as in CH3-CH2-OH,
 * Cl-CH2-OH or CH3-CH2-CH(O-CH3)2, so these are read too.
 *
 * Brackets mean a side chain when what is inside has one spare bond (CH3, CH2CH3), and a
 * repeated part of the chain when it has two (CH2, CH2CH2).
 *
 * The letters are read in capitals, so "Cl" and "CL" are both chlorine; L and R only ever
 * come in CL and BR, so they can't be mistaken for anything else.
 *
 * Every carbon must end up with exactly 4 bonds, counting its hydrogens. If one doesn't,
 * the student is told which carbon, rather than the formula being quietly corrected.
 */

import {
  AMIDE_LINK_NITROGEN,
  AMINO_GROUP,
  BONDS_MADE_BY_EVERY_CARBON_ATOM,
  CARBONYL_OXYGEN,
  ESTER_LINK_OXYGEN,
  HYDROXYL_GROUP,
  MOST_CARBONS_IN_A_TYPED_MOLECULE,
  bondOrderOf,
  bondsUsedByGroup,
  isSkeletonOneMoleculeWithoutRings,
} from './carbonSkeleton.js';
import { layOutDisplayedFormula } from '../geometry/layOutDisplayedFormula.js';
import { formatMolecularFormula } from './molecularFormula.js';
import { message } from '../languages/translate.js';
import { writeSubscriptDigitsAsOrdinaryDigits } from './subscriptDigits.js';

/** The halogens as they appear in the tidied (capital letters) text, longest first so CL isn't read as C. */
const HALOGEN_IN_CAPITALS = /^(CL|BR|F|I)/;
const SYMBOL_BY_CAPITALS = { CL: 'Cl', BR: 'Br', F: 'F', I: 'I' };

/**
 * Upper case, ordinary digits for subscripts (CH₃ -> CH3), round brackets for square or
 * curly ones, and no spaces or bond dashes. Double bonds (=) are kept, and triple bonds (≡) are
 * written #.
 */
function tidyFormulaText(text) {
  return writeSubscriptDigitsAsOrdinaryDigits(text)
    .toUpperCase()
    .replace(/[[{]/g, '(')
    .replace(/[\]}]/g, ')')
    .replace(/[\s\-–—]/g, '')
    .replace(/≡/g, '#');
}

/**
 * Splits the text into a list of parts, each either
 *   { kind: 'carbon', hydrogenCount, writtenAs, carbonNumber }   e.g. CH3, the carbonNumber-th carbon written
 *   { kind: 'carbonGroup', carbonCount, hydrogenCount, ... }     e.g. C2H5
 *   { kind: 'brackets', parts, repeatCount }                      e.g. (CH3)2
 *   { kind: 'group', symbol, count }                              e.g. Cl2, or OH (always count 1)
 *   { kind: 'oxygen' }                                            an O that isn't part of OH: the O of C=O,
 *                                                                 or of an ether (decided while building)
 * (the O2H of CO2H, and HOOC or HO2C at the start, are read as the same parts as COOH)
 *   { kind: 'link', linkAtom }                                    the O of an ester after COO or CO2,
 *                                                                 or NH not followed by 2, between two carbons
 * (NH2, or H2N at the start, is a group, like OH)
 *   { kind: 'multipleBond', bondOrder }                           = (bondOrder 2) or # (bondOrder 3)
 * Returns null if the text isn't written that way.
 * With readOHCAsAldehyde, OHC at the start (and not followed by H) is a CHO group, as in
 * OHCCH2CHO, rather than an OH group joined to a carbon with no hydrogens.
 */
function splitIntoParts(text, readOHCAsAldehyde) {
  let readingPosition = 0;
  let carbonsWrittenSoFar = 0;

  function readNumber() {
    const digits = /^\d*/.exec(text.slice(readingPosition))[0];
    readingPosition += digits.length;
    return digits === '' ? null : Number(digits);
  }

  function readPartsUntilClosingBracket(isInsideBrackets) {
    const parts = [];
    while (readingPosition < text.length) {
      const character = text[readingPosition];
      const startPosition = readingPosition;
      const halogenMatch = HALOGEN_IN_CAPITALS.exec(text.slice(readingPosition));
      if (readOHCAsAldehyde && readingPosition === 0 && /^OHC(?!H)/.test(text)) {
        readingPosition += 3;
        carbonsWrittenSoFar += 1;
        parts.push({ kind: 'carbon', hydrogenCount: 1, writtenAs: 'CH', carbonNumber: carbonsWrittenSoFar }, { kind: 'oxygen' });
      } else if (readingPosition === 0 && /^HO(OC|2C)(?!H)/.test(text)) {
        // A COOH group written backwards at the start: HOOCCH2COOH, HO2CCH2CO2H.
        readingPosition += 4;
        carbonsWrittenSoFar += 1;
        parts.push(
          { kind: 'carbon', hydrogenCount: 0, writtenAs: text.slice(0, 4), carbonNumber: carbonsWrittenSoFar },
          { kind: 'oxygen' },
          { kind: 'group', symbol: HYDROXYL_GROUP, count: 1 },
        );
      } else if (readingPosition === 0 && /^H2N/.test(text)) {
        readingPosition += 3;
        parts.push({ kind: 'group', symbol: AMINO_GROUP, count: 1 });
      } else if (/^NH2(?!\d)/.test(text.slice(readingPosition))) {
        readingPosition += 3;
        parts.push({ kind: 'group', symbol: AMINO_GROUP, count: 1 });
      } else if (/^NH(?!\d)/.test(text.slice(readingPosition))) {
        readingPosition += 2;
        parts.push({ kind: 'link', linkAtom: AMIDE_LINK_NITROGEN });
      } else if (/^O(O|2)(?=[C(])/.test(text.slice(readingPosition))) {
        // The COO or CO2 of an ester, as in CH3COOCH3: the O of C=O, then the O joined to the next carbon.
        readingPosition += 2;
        parts.push({ kind: 'oxygen' }, { kind: 'link', linkAtom: ESTER_LINK_OXYGEN });
      } else if (/^O2H(?!\d)/.test(text.slice(readingPosition))) {
        // The O2H of CO2H: the =O and OH of a COOH group.
        readingPosition += 3;
        parts.push({ kind: 'oxygen' }, { kind: 'group', symbol: HYDROXYL_GROUP, count: 1 });
      } else if (halogenMatch) {
        readingPosition += halogenMatch[0].length;
        const count = readNumber() ?? 1;
        if (count === 0) return null;
        parts.push({ kind: 'group', symbol: SYMBOL_BY_CAPITALS[halogenMatch[0]], count });
      } else if (text.startsWith('OH', readingPosition) || text.startsWith('HO', readingPosition)) {
        // An OH group: more than one is written in brackets, (OH)2, never OH2.
        readingPosition += 2;
        if (/\d/.test(text[readingPosition] ?? '')) return null;
        parts.push({ kind: 'group', symbol: HYDROXYL_GROUP, count: 1 });
      } else if (character === 'O') {
        readingPosition += 1;
        parts.push({ kind: 'oxygen' });
      } else if (character === 'H') {
        // Hydrogens written first, as in H3CCH2CH3.
        readingPosition += 1;
        const hydrogenCount = readNumber() ?? 1;
        if (text[readingPosition] !== 'C' || /[HL\d]/.test(text[readingPosition + 1] ?? '')) return null;
        readingPosition += 1;
        carbonsWrittenSoFar += 1;
        parts.push({ kind: 'carbon', hydrogenCount, writtenAs: text.slice(startPosition, readingPosition), carbonNumber: carbonsWrittenSoFar });
      } else if (character === 'C') {
        readingPosition += 1;
        const carbonCount = readNumber();
        let hydrogenCount = 0;
        if (text[readingPosition] === 'H') {
          readingPosition += 1;
          hydrogenCount = readNumber() ?? 1;
        } else if (carbonCount !== null) {
          return null;
        }
        const writtenAs = text.slice(startPosition, readingPosition);
        const firstCarbonNumber = carbonsWrittenSoFar + 1;
        if (carbonCount === null) {
          carbonsWrittenSoFar += 1;
          parts.push({ kind: 'carbon', hydrogenCount, writtenAs, carbonNumber: firstCarbonNumber });
        } else {
          if (carbonCount === 0) return null;
          carbonsWrittenSoFar += carbonCount;
          parts.push({ kind: 'carbonGroup', carbonCount, hydrogenCount, writtenAs, firstCarbonNumber });
        }
      } else if (character === '(') {
        readingPosition += 1;
        const partsInBrackets = readPartsUntilClosingBracket(true);
        if (partsInBrackets === null || text[readingPosition] !== ')') return null;
        readingPosition += 1;
        const repeatCount = readNumber() ?? 1;
        if (repeatCount === 0) return null;
        parts.push({ kind: 'brackets', parts: partsInBrackets, repeatCount });
      } else if (character === '=' || character === '#') {
        readingPosition += 1;
        parts.push({ kind: 'multipleBond', bondOrder: character === '=' ? 2 : 3 });
      } else if (character === ')' && isInsideBrackets) {
        break;
      } else {
        return null;
      }
    }
    return parts.length > 0 ? parts : null;
  }

  const parts = readPartsUntilClosingBracket(false);
  return readingPosition === text.length ? parts : null;
}

/** True for an O in brackets after its carbon, as in CH3CH(=O) or CH3C(=O)CH3. */
function isCarbonylOxygenInBrackets(part) {
  if (part.kind !== 'brackets' || part.repeatCount !== 1) return false;
  const kinds = part.parts.map(({ kind }) => kind).join(' ');
  return (kinds === 'multipleBond oxygen' && part.parts[0].bondOrder === 2) || kinds === 'oxygen';
}

/**
 * The O of an ester written after a C=O in brackets, as in CH3C(=O)OCH3 or CH3C(O)OCH3: an O
 * with a carbon after it is the link to that carbon, not a second C=O.
 */
function readEsterOxygenAfterBrackets(parts) {
  return parts.map((part, index) => {
    const previous = parts[index - 1];
    const next = parts[index + 1];
    const isBetweenCarbonylAndCarbon =
      part.kind === 'oxygen' && previous && isCarbonylOxygenInBrackets(previous) && next && (next.kind === 'carbon' || next.kind === 'carbonGroup');
    return isBetweenCarbonylAndCarbon ? { kind: 'link', linkAtom: ESTER_LINK_OXYGEN } : part;
  });
}

/**
 * True for an O that is an ether's, joining the carbon before it to the one after it, as in
 * CH3OCH3 or CH3CH2OCH2CH3, rather than the O of a C=O: the carbon before it has only one
 * bond left (CH3 at the start, or CH2 in the middle of a chain), too few for a C=O, and a
 * carbon comes next. (In CH3COCH3 the C has three bonds left, so its O is a ketone's.)
 */
function isEtherOxygen(molecule, previousCarbonAtomId, nextPart) {
  if (previousCarbonAtomId === undefined || nextPart === undefined) return false;
  const isCarbonNext = nextPart.kind === 'carbon' || nextPart.kind === 'carbonGroup' || (nextPart.kind === 'brackets' && !isCarbonylOxygenInBrackets(nextPart));
  return isCarbonNext && molecule.countSpareBonds(previousCarbonAtomId) < 2;
}

const isCarbonPart = (part) => part !== undefined && (part.kind === 'carbon' || part.kind === 'carbonGroup' || part.kind === 'brackets');

/**
 * The O at the start of a bracket, before a carbon, as in (OCH3) or (OCH2CH2), joins the group in
 * the bracket to the carbon outside it, as in an ether. So may an O at the end, as in (CH3O), but
 * that one may also be the O of a C=O, as in (CH2CHO), which is only known once the carbons in
 * the bracket are built: hasTrailingOxygen says it was taken off to be decided then.
 * (An O written as =O stays where it is: (CH2CH=O) is the C=O of an aldehyde.)
 */
function splitOffEtherOxygensInBrackets(parts) {
  const hasLeadingEtherOxygen = parts.length > 1 && parts[0].kind === 'oxygen' && isCarbonPart(parts[1]);
  const withoutLeading = hasLeadingEtherOxygen ? parts.slice(1) : parts;
  const last = withoutLeading[withoutLeading.length - 1];
  const beforeLast = withoutLeading[withoutLeading.length - 2];
  const hasTrailingOxygen = withoutLeading.length > 1 && last.kind === 'oxygen' && beforeLast.kind !== 'multipleBond' && beforeLast.kind !== 'oxygen';
  return {
    partsBetweenEtherOxygens: hasTrailingOxygen ? withoutLeading.slice(0, -1) : withoutLeading,
    hasLeadingEtherOxygen,
    hasTrailingOxygen,
  };
}

function countCarbonsInParts(parts) {
  return parts.reduce((total, part) => {
    if (part.kind === 'carbon') return total + 1;
    if (part.kind === 'carbonGroup') return total + part.carbonCount;
    if (part.kind !== 'brackets') return total;
    return total + part.repeatCount * countCarbonsInParts(part.parts);
  }, 0);
}

/**
 * A group such as C2H5 is an unbranched chain of carbons. It can only be part of an alkane
 * with 2n+1 hydrogens (an alkyl group such as C2H5, joined at one end), 2n (a piece of chain
 * such as C2H4, joined at both ends) or 2n+2 (a whole alkane, such as C2H6, on its own).
 * Returns the first group that is none of these, or null.
 */
function findImpossibleCarbonGroup(parts) {
  for (const part of parts) {
    if (part.kind === 'carbonGroup') {
      const { carbonCount, hydrogenCount } = part;
      if (hydrogenCount < 2 * carbonCount || hydrogenCount > 2 * carbonCount + 2) return part;
    }
    if (part.kind === 'brackets') {
      const impossibleGroup = findImpossibleCarbonGroup(part.parts);
      if (impossibleGroup) return impossibleGroup;
    }
  }
  return null;
}

/**
 * The carbons of a group such as C2H5, one by one, each with its own hydrogens.
 * An alkyl group's spare bond is on the end that joins the rest of the formula: the start
 * if something comes before it (CH3CH2C2H5 -> ...CH2CH3), otherwise the end (C2H5CH3 -> CH3CH2...).
 */
function splitCarbonGroupIntoCarbons({ carbonCount, hydrogenCount, writtenAs, firstCarbonNumber }, isJoinedAtItsStart) {
  const hydrogensOnEachCarbon = Array.from({ length: carbonCount }, () => 2);
  const extraHydrogens = hydrogenCount - 2 * carbonCount;
  if (carbonCount === 1) {
    hydrogensOnEachCarbon[0] += extraHydrogens;
  } else if (extraHydrogens === 2) {
    hydrogensOnEachCarbon[0] = 3;
    hydrogensOnEachCarbon[carbonCount - 1] = 3;
  } else if (extraHydrogens === 1) {
    hydrogensOnEachCarbon[isJoinedAtItsStart ? carbonCount - 1 : 0] = 3;
  }
  return hydrogensOnEachCarbon.map((carbonHydrogenCount, index) => ({
    kind: 'carbon',
    hydrogenCount: carbonHydrogenCount,
    writtenAs,
    carbonNumber: firstCarbonNumber + index,
  }));
}

/**
 * The molecule as it is built: carbons (each remembering how it was written) and bonds.
 * Turned into a carbon skeleton at the end.
 */
function createMoleculeUnderConstruction() {
  const carbons = [];
  const bonds = [];
  return {
    carbons,
    bonds,
    addCarbon(part) {
      carbons.push({ atomId: carbons.length + 1, ...part, groups: [] });
      return carbons.length;
    },
    /** Joins halogens, OH groups or the O of C=O to a carbon, and adds them to how the carbon was written (for messages): CH -> CHCl2. */
    addGroups(atomId, { symbol, count }) {
      const carbon = carbons[atomId - 1];
      for (let added = 0; added < count; added++) carbon.groups.push({ symbol });
      carbon.writtenAs += count === 1 ? symbol : `${symbol}${count}`;
    },
    /** bondOrder 2 or 3 for a double or triple bond; null (or 1) for a single bond. */
    bond(firstAtomId, secondAtomId, bondOrder = null, linkAtom = null) {
      if (bondOrder > 1) bonds.push({ firstAtomId, secondAtomId, bondOrder });
      else bonds.push(linkAtom ? { firstAtomId, secondAtomId, linkAtom } : { firstAtomId, secondAtomId });
    },
    countSpareBonds(atomId) {
      const carbonBondCount = bonds
        .filter((bond) => bond.firstAtomId === atomId || bond.secondAtomId === atomId)
        .reduce((total, bond) => total + bondOrderOf(bond), 0);
      const carbon = carbons[atomId - 1];
      const groupBondCount = carbon.groups.reduce((total, { symbol }) => total + bondsUsedByGroup(symbol), 0);
      return BONDS_MADE_BY_EVERY_CARBON_ATOM - carbon.hydrogenCount - groupBondCount - carbonBondCount;
    },
  };
}

/**
 * Builds one run of parts: the whole formula, or what is inside one pair of brackets.
 * Returns {
 *   chainAtomIds      the carbons written one after another, in order
 *   chainBefore       a side chain written at the start, as in (CH3)2CH..., from its far end
 *                     up to the carbon it joins; drawn as the start of the main chain
 *   allAtomIds        every carbon in this run, including side chains
 *   startingBondOrder 2 for a side chain such as (=CH2), joined by a double bond, 3 for one
 *                     such as (#CH), joined by a triple bond, and null otherwise
 *   isComplete        false if a side chain at the start had no carbon after it to join,
 *                     or an = has no carbon on one side of it
 * }
 */
function buildParts(parts, molecule) {
  const chainAtomIds = [];
  const allAtomIds = [];
  let chainBefore = [];
  let sideChainsWaitingForACarbon = [];
  /** Halogens and OH groups written before any carbon, as in ClCH2CH2Cl or HOCH2CH3: they join the first carbon. */
  let groupsWaitingForACarbon = [];
  let startingBondOrder = null;
  /** 2 just after an =, or 3 after a #, until the carbon it joins on to is added; null otherwise. */
  let nextBondOrder = null;
  /** The O or NH just read between two carbons, until the carbon after it is added. */
  let nextLinkAtom = null;
  const lastChainAtomId = () => chainAtomIds[chainAtomIds.length - 1];
  const incomplete = { isComplete: false };

  function addCarbonToChain(carbonPart) {
    const atomId = molecule.addCarbon(carbonPart);
    allAtomIds.push(atomId);
    if (chainAtomIds.length > 0) molecule.bond(lastChainAtomId(), atomId, nextBondOrder, nextLinkAtom);
    nextBondOrder = null;
    nextLinkAtom = null;
    if (chainAtomIds.length === 0 && sideChainsWaitingForACarbon.length > 0) {
      chainBefore = sideChainsWaitingForACarbon[0].pathFromFarEnd;
    }
    for (const sideChain of sideChainsWaitingForACarbon) molecule.bond(atomId, sideChain.joiningAtomId, sideChain.joiningBondOrder, sideChain.linkAtom);
    sideChainsWaitingForACarbon = [];
    for (const groupPart of groupsWaitingForACarbon) molecule.addGroups(atomId, groupPart);
    groupsWaitingForACarbon = [];
    chainAtomIds.push(atomId);
  }

  /** A halogen or OH group joins the carbon written just before it, or the first carbon if none has been yet. */
  function addGroup(groupPart) {
    if (chainAtomIds.length > 0) molecule.addGroups(lastChainAtomId(), groupPart);
    else groupsWaitingForACarbon.push(groupPart);
  }

  const partsWithEsterOxygens = readEsterOxygenAfterBrackets(parts);
  for (const [index, part] of partsWithEsterOxygens.entries()) {
    if (part.kind === 'oxygen' && isEtherOxygen(molecule, lastChainAtomId(), partsWithEsterOxygens[index + 1])) {
      // An O after a carbon with no room left for a C=O, and before another carbon, joins the two: CH3OCH3, CH3CH2OCH3.
      if (nextBondOrder || nextLinkAtom) return incomplete;
      nextLinkAtom = ESTER_LINK_OXYGEN;
      continue;
    }
    if (part.kind === 'link') {
      // An O or NH joins the carbon before it to the one after it, by single bonds.
      if (chainAtomIds.length === 0 || nextBondOrder || nextLinkAtom) return incomplete;
      nextLinkAtom = part.linkAtom;
      continue;
    }
    if (nextLinkAtom && part.kind !== 'carbon' && part.kind !== 'carbonGroup' && part.kind !== 'brackets') return incomplete;
    if (part.kind === 'multipleBond') {
      const isAtStartOfRun = allAtomIds.length === 0;
      if (nextBondOrder || startingBondOrder) return incomplete;
      if (isAtStartOfRun) {
        startingBondOrder = part.bondOrder;
      } else if (chainAtomIds.length === 0) {
        return incomplete;
      } else {
        nextBondOrder = part.bondOrder;
      }
      continue;
    }
    if (part.kind === 'carbon') {
      addCarbonToChain(part);
      continue;
    }
    if (part.kind === 'oxygen' || isCarbonylOxygenInBrackets(part)) {
      // The O of C=O joins the carbon written just before it: CH3CHO, CH3CH=O, CH3CH(=O).
      // An O can't be joined by a triple bond: CH3C≡O.
      if (chainAtomIds.length === 0 || (part.kind === 'brackets' && nextBondOrder) || nextBondOrder === 3) return incomplete;
      nextBondOrder = null;
      molecule.addGroups(lastChainAtomId(), { symbol: CARBONYL_OXYGEN, count: 1 });
      continue;
    }
    if (part.kind === 'group') {
      // A halogen or OH can't be joined by a double bond: Cl=, or =Cl.
      if (nextBondOrder || (startingBondOrder && allAtomIds.length === 0)) return incomplete;
      addGroup(part);
      continue;
    }
    if (part.kind === 'brackets' && part.parts.every((partInBrackets) => partInBrackets.kind === 'group')) {
      // Halogens or OH groups in brackets, as in CH3CH(Cl)CH3, CH3C(Cl)2CH3 or CH3CH(OH)CH3.
      if (nextBondOrder) return incomplete;
      for (let copy = 0; copy < part.repeatCount; copy++) part.parts.forEach(addGroup);
      continue;
    }
    if (part.kind === 'carbonGroup') {
      const isJoinedAtItsStart = chainAtomIds.length > 0 || sideChainsWaitingForACarbon.length > 0;
      splitCarbonGroupIntoCarbons(part, isJoinedAtItsStart).forEach(addCarbonToChain);
      continue;
    }

    const { partsBetweenEtherOxygens, hasLeadingEtherOxygen, hasTrailingOxygen } = splitOffEtherOxygensInBrackets(part.parts);
    for (let copy = 0; copy < part.repeatCount; copy++) {
      const inside = buildParts(partsBetweenEtherOxygens, molecule);
      if (!inside.isComplete || inside.allAtomIds.length === 0) return incomplete;
      allAtomIds.push(...inside.allAtomIds);
      // An O at the end of the bracket is an ether's when its carbon has only one bond left, as in
      // (CH3O) or (CH2CH2O), too few for a C=O; otherwise it is the O of a C=O, as in (CH2CHO).
      const lastInsideAtomId = inside.chainAtomIds[inside.chainAtomIds.length - 1];
      let hasTrailingEtherOxygen = false;
      if (hasTrailingOxygen) {
        if (lastInsideAtomId === undefined) return incomplete;
        if (molecule.countSpareBonds(lastInsideAtomId) === 1) hasTrailingEtherOxygen = true;
        else molecule.addGroups(lastInsideAtomId, { symbol: CARBONYL_OXYGEN, count: 1 });
      }
      if (hasLeadingEtherOxygen && hasTrailingEtherOxygen) return incomplete;
      const spareBondCount = inside.allAtomIds.reduce((total, atomId) => total + molecule.countSpareBonds(atomId), 0);

      if (spareBondCount === 2 && !inside.startingBondOrder) {
        // A repeated part of the chain, such as (CH2)4 or (OCH2CH2)3: it carries the chain on.
        if (hasLeadingEtherOxygen && (nextLinkAtom || nextBondOrder || chainAtomIds.length === 0)) return incomplete;
        const linkAtom = hasLeadingEtherOxygen ? ESTER_LINK_OXYGEN : nextLinkAtom;
        if (chainAtomIds.length > 0) molecule.bond(lastChainAtomId(), inside.chainAtomIds[0], nextBondOrder, linkAtom);
        nextBondOrder = null;
        nextLinkAtom = hasTrailingEtherOxygen ? ESTER_LINK_OXYGEN : null;
        chainAtomIds.push(...inside.chainAtomIds);
        continue;
      }

      // A side chain, such as (CH3), (CH2CH3), (=CH2) or (C#CH). It joins at its carbon with a spare bond,
      // or through the O at the start or end of the bracket, as in (OCH3) or (CH3O).
      // (If it has the wrong number of spare bonds, the 4-bond check at the end says so.)
      if (nextLinkAtom) return incomplete;
      if (inside.startingBondOrder && nextBondOrder) return incomplete;
      const joiningBondOrder = inside.startingBondOrder ?? nextBondOrder;
      const linkAtom = hasLeadingEtherOxygen || hasTrailingEtherOxygen ? ESTER_LINK_OXYGEN : null;
      if (linkAtom && joiningBondOrder) return incomplete;
      nextBondOrder = null;
      const joiningAtomId = hasLeadingEtherOxygen
        ? inside.chainAtomIds[0]
        : hasTrailingEtherOxygen
          ? lastInsideAtomId
          : (inside.allAtomIds.find((atomId) => molecule.countSpareBonds(atomId) > 0) ?? inside.chainAtomIds[0]);
      if (joiningAtomId === undefined) return incomplete;
      const insideChain = [...inside.chainBefore, ...inside.chainAtomIds];
      const pathFromFarEnd =
        joiningAtomId === insideChain[0] ? [...insideChain].reverse() : joiningAtomId === insideChain[insideChain.length - 1] ? insideChain : [];
      if (chainAtomIds.length > 0) {
        molecule.bond(lastChainAtomId(), joiningAtomId, joiningBondOrder, linkAtom);
      } else {
        sideChainsWaitingForACarbon.push({ joiningAtomId, pathFromFarEnd, joiningBondOrder, linkAtom });
      }
    }
  }

  if (nextBondOrder || nextLinkAtom) return incomplete;
  return {
    chainAtomIds,
    chainBefore,
    allAtomIds,
    startingBondOrder,
    isComplete: sideChainsWaitingForACarbon.length === 0 && groupsWaitingForACarbon.length === 0,
  };
}

/**
 * Returns
 *   null                                  if the text isn't a structural formula (it may be a
 *                                         molecular formula such as C5H12, or a name)
 *   { errorMessage }                      if it is one, but not a molecule that can exist
 *   { carbonSkeleton, mainChainAtomIds }  otherwise, laid out with the chain as written
 *                                         running left to right
 * A single carbon with its groups (CH4, CH3-OH, Cl-CH2-OH, HCOOH) can only be one molecule, so
 * it is read too, but only when it makes a molecule that can exist: on its own, "C" or "CH3"
 * is more likely the start of something longer, so it gives null rather than an error. (The
 * omnibox still lists CH4 or CH3OH as a molecular formula, see interpretOmniboxText.js.)
 * One group of several carbons with no brackets, such as C5H12, C3H8O or C2H5OH, is a
 * molecular formula, so it gives null and is left to molecularFormula.js.
 */
export function readStructuralFormula(typedText) {
  const text = tidyFormulaText(typedText);
  if (!/^[CHLBRFION\d()=#]+$/.test(text)) return null;
  // Two O atoms together with no C on either side are an O-O bond, as in HOO-CO-CH3, not the
  // COO of an acid or ester: without this, the dashes taken out would make it read as HOOC-O-CH3.
  if (/(?<!C)OO(?!C)/.test(writeSubscriptDigitsAsOrdinaryDigits(typedText).toUpperCase().replace(/[\s\d]/g, ''))) return { errorMessage: message('omnibox.peroxideNotCovered') };
  // OHC at the start is usually a CHO group (OHCCH2CHO), but may be an OH group (OHC(CH3)2CH3).
  const reading = readStructuralFormulaText(text, true);
  if (reading?.errorMessage && text.startsWith('OHC')) {
    const otherReading = readStructuralFormulaText(text, false);
    if (otherReading && !otherReading.errorMessage) return otherReading;
  }
  return reading;
}

function readStructuralFormulaText(text, readOHCAsAldehyde) {
  const hasBrackets = text.includes('(');

  const howToWriteIt = { errorMessage: message('omnibox.howToWriteStructuralFormula') };
  const parts = splitIntoParts(text, readOHCAsAldehyde);
  if (parts === null) return hasBrackets ? howToWriteIt : null;
  const partsThatAreNotGroups = parts.filter((part) => part.kind !== 'group' && part.kind !== 'oxygen');
  // A single group of carbons with no brackets, such as C5H12, C3H7Br, C3H8O or C2H5OH, is a molecular formula.
  if (!hasBrackets && partsThatAreNotGroups.length === 1 && partsThatAreNotGroups[0].kind !== 'carbon') return null;
  const reading = buildMoleculeFromParts(parts, howToWriteIt);
  // A single carbon, such as CH4, CH3-OH or HCOOH, is read only when it makes a molecule.
  const isOneCarbonWithoutBrackets = !hasBrackets && partsThatAreNotGroups.length === 1;
  return isOneCarbonWithoutBrackets && reading.errorMessage ? null : reading;
}

function buildMoleculeFromParts(parts, howToWriteIt) {

  const impossibleGroup = findImpossibleCarbonGroup(parts);
  if (impossibleGroup) {
    const { carbonCount, writtenAs } = impossibleGroup;
    const alkylHydrogenCount = 2 * carbonCount + 1;
    return {
      errorMessage: message('omnibox.groupCannotBeInAnAlkane', {
        group: writtenAs,
        count: carbonCount,
        hydrogenCount: alkylHydrogenCount,
        alkylGroup: formatMolecularFormula({ carbonCount, hydrogenCount: alkylHydrogenCount }),
      }),
    };
  }

  if (countCarbonsInParts(parts) > MOST_CARBONS_IN_A_TYPED_MOLECULE) {
    return { errorMessage: message('omnibox.tooManyCarbons', { maxCarbons: MOST_CARBONS_IN_A_TYPED_MOLECULE }) };
  }

  const molecule = createMoleculeUnderConstruction();
  const built = buildParts(parts, molecule);
  if (!built.isComplete || built.startingBondOrder) return howToWriteIt;

  // Two carbons each one bond short, such as the ends of CH2CH2CH2CH2CH2CH2, would be joined in a ring,
  // which a structural formula written on one line can't show.
  // (Two that are already bonded, as in CH2CHCH3, are a double bond written without its =.)
  const carbonsOneBondShort = molecule.carbons.filter((carbon) => molecule.countSpareBonds(carbon.atomId) === 1).map(({ atomId }) => atomId);
  const everyOtherCarbonIsFull = molecule.carbons.every((carbon) => molecule.countSpareBonds(carbon.atomId) <= 1);
  const areBonded = ([first, second]) =>
    molecule.bonds.some((bond) => (bond.firstAtomId === first && bond.secondAtomId === second) || (bond.firstAtomId === second && bond.secondAtomId === first));
  if (carbonsOneBondShort.length === 2 && everyOtherCarbonIsFull && !areBonded(carbonsOneBondShort)) {
    return { errorMessage: message('omnibox.ringInStructuralFormula') };
  }

  for (const carbon of molecule.carbons) {
    const spareBondCount = molecule.countSpareBonds(carbon.atomId);
    if (spareBondCount !== 0) {
      // An O that leaves its carbon with too many bonds, but wasn't read as an ether's, as in CH3CHOCH3.
      if (spareBondCount < 0 && carbon.groups.some(({ symbol }) => symbol === CARBONYL_OXYGEN)) {
        return { errorMessage: message('omnibox.oxygenWithTooManyBonds') };
      }
      // Too few bonds is often a double bond written without its =, as in CH2CHCH3.
      const neighbourAlsoHasASpareBond = molecule.bonds.some(
        (bond) =>
          (bond.firstAtomId === carbon.atomId && molecule.countSpareBonds(bond.secondAtomId) > 0) ||
          (bond.secondAtomId === carbon.atomId && molecule.countSpareBonds(bond.firstAtomId) > 0),
      );
      const values = { group: carbon.writtenAs, carbonNumber: carbon.carbonNumber, count: BONDS_MADE_BY_EVERY_CARBON_ATOM - spareBondCount };
      return {
        errorMessage:
          spareBondCount > 0 && neighbourAlsoHasASpareBond
            ? message('omnibox.carbonNeedsFourBondsMissingDoubleBond', values)
            : message('omnibox.carbonNeedsFourBonds', values),
      };
    }
  }

  const skeleton = {
    carbonAtoms: molecule.carbons.map(({ atomId, groups }) =>
      groups.length > 0 ? { atomId, positionX: 0, positionY: 0, groups } : { atomId, positionX: 0, positionY: 0 },
    ),
    carbonCarbonBonds: molecule.bonds,
  };
  if (!isSkeletonOneMoleculeWithoutRings(skeleton)) return howToWriteIt;

  const mainChainAtomIds = [...built.chainBefore, ...built.chainAtomIds];
  return { carbonSkeleton: layOutDisplayedFormula(skeleton, mainChainAtomIds), mainChainAtomIds };
}
