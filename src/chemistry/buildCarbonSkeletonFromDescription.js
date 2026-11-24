/**
 * Building a molecule from a description of its main chain and side chains.
 * Used for typed names, isomers of a formula, and guess-mode molecules.
 *
 * A description looks like (this one is 3-ethyl-2-methylpentane):
 *   {
 *     mainChainCarbonCount: 5,
 *     substituents: [
 *       { locant: 2, substituentCarbonCount: 1 },
 *       { locant: 3, substituentCarbonCount: 2 },
 *     ],
 *   }
 *
 * Double bonds are given by their locants (the lower of the two carbons they join), in the
 * main chain and inside a side chain. A side chain can also be joined to the main chain by a
 * double bond. This one is read from "4-(prop-2-en-1-yl)hept-2-ene" (its IUPAC name is
 * 4-propylhepta-1,5-diene, as the 7-carbon chain through the side chain has both double bonds):
 *   {
 *     mainChainCarbonCount: 7,
 *     mainChainDoubleBondLocants: [2],
 *     substituents: [
 *       { locant: 4, substituentCarbonCount: 3, isJoinedByDoubleBond: false, doubleBondLocants: [2] },
 *     ],
 *   }
 * Side chains are numbered from the carbon joined to the main chain, which is carbon 1.
 * Triple bonds are given the same way, as mainChainTripleBondLocants and, in a side chain or
 * linkedGroup, tripleBondLocants. This is pent-1-en-4-yne:
 *   { mainChainCarbonCount: 5, mainChainDoubleBondLocants: [1], mainChainTripleBondLocants: [4], substituents: [] }
 *
 * A halogen on the main chain is given by its element symbol. This is 1,2-dichloropropane:
 *   {
 *     mainChainCarbonCount: 3,
 *     substituents: [{ locant: 1, halogen: 'Cl' }, { locant: 2, halogen: 'Cl' }],
 *   }
 *
 * A hydroxyl group (OH) on the main chain is marked isHydroxy. This is propan-2-ol:
 *   {
 *     mainChainCarbonCount: 3,
 *     substituents: [{ locant: 2, isHydroxy: true }],
 *   }
 *
 * The O of an aldehyde group (-CHO), joined to its carbon by a double bond, is marked
 * isAldehyde. This is propanal:
 *   {
 *     mainChainCarbonCount: 3,
 *     substituents: [{ locant: 1, isAldehyde: true }],
 *   }
 *
 * The O of a ketone, joined by a double bond to a carbon in the middle of the chain, is marked
 * isKetone. This is propan-2-one:
 *   {
 *     mainChainCarbonCount: 3,
 *     substituents: [{ locant: 2, isKetone: true }],
 *   }
 *
 * The carboxyl group of a carboxylic acid, -COOH, at the end of the chain, is marked
 * isCarboxylicAcid: its carbon is the chain carbon, which gets both the =O and the OH. This
 * is acetic acid (ethanoic acid):
 *   {
 *     mainChainCarbonCount: 2,
 *     substituents: [{ locant: 1, isCarboxylicAcid: true }],
 *   }
 *
 * A ring as the main chain is marked isRing, with carbon 1 bonded to the last carbon to
 * close it, and its double bonds numbered round the ring (the last carbon's locant for one
 * from the last carbon back to carbon 1). A -COOH or -CHO group on a ring brings a carbon of
 * its own, joined to the ring carbon. This is cyclohex-3-ene-1-carboxylic acid:
 *   {
 *     mainChainCarbonCount: 6,
 *     isRing: true,
 *     mainChainDoubleBondLocants: [3],
 *     substituents: [{ locant: 1, isCarboxylicAcid: true }],
 *   }
 * An ester group, -CO-O-R, is marked isEster, and an amide group, -CO-NH2, isAmide: like
 * -COOH, its carbon is the chain carbon, with the =O. The group R joined through the O of an
 * ester, or through the NH of an amide such as CH3-CO-NH-CH3, is given as linkedGroup: its
 * carbon count, the double bonds inside it (numbered from the carbon joined to the O or NH),
 * and isRing for a ring. This is methyl acetate:
 *   {
 *     mainChainCarbonCount: 2,
 *     substituents: [{ locant: 1, isEster: true, linkedGroup: { carbonCount: 1 } }],
 *   }
 * and N-methylacetamide is the same with isAmide in place of isEster. Without a
 * linkedGroup, an amide has an NH2 group: acetamide.
 *
 * An NH2 group on the main chain, making an amine, is marked isAmine. This is propan-2-amine:
 *   {
 *     mainChainCarbonCount: 3,
 *     substituents: [{ locant: 2, isAmine: true }],
 *   }
 * With a linkedGroup, the group is joined through an NH instead, as in a secondary amine:
 * this is N-methylethanamine, CH3-CH2-NH-CH3:
 *   {
 *     mainChainCarbonCount: 2,
 *     substituents: [{ locant: 1, isAmine: true, linkedGroup: { carbonCount: 1 } }],
 *   }
 * and an ether's O, joining a linkedGroup to the main chain, is marked isEther. This is
 * methoxyethane, CH3-CH2-O-CH3:
 *   {
 *     mainChainCarbonCount: 2,
 *     substituents: [{ locant: 1, isEther: true, linkedGroup: { carbonCount: 1 } }],
 *   }
 *
 * A side chain with groups on it lists them as sideChainGroups, each with its locant along the
 * side chain and the same keys as above: halogen, isHydroxy, isKetone (the =O of a C=O on a
 * side chain carbon, including that of an acyl group or of a CHO at its end), isAmine and
 * isEther (with a linkedGroup), and isCarboxylicAcid (the =O and OH, on the side chain's last
 * carbon). This is 3-(chloromethyl)pentane:
 *   {
 *     mainChainCarbonCount: 5,
 *     substituents: [{ locant: 3, substituentCarbonCount: 1, sideChainGroups: [{ locant: 1, halogen: 'Cl' }] }],
 *   }
 *
 * A side chain that branches is described by its principal chain (see nameBranchedSideChain.js):
 * substituentCarbonCount is the length of that chain, freeValenceLocant the carbon of it joined
 * to the main chain (1 if not given), and sideChainBranches the side chains on it, each with
 * its locant along the principal chain and described in the same way, so they can branch too.
 * This is 3-(1-hydroxypropan-2-yl)hexane, with the (1-hydroxypropan-2-yl) on carbon 3:
 *   {
 *     mainChainCarbonCount: 6,
 *     substituents: [{ locant: 3, substituentCarbonCount: 3, freeValenceLocant: 2, sideChainGroups: [{ locant: 1, isHydroxy: true }] }],
 *   }
 * and 3-(2-methylpropyl)hexane:
 *   {
 *     mainChainCarbonCount: 6,
 *     substituents: [{ locant: 3, substituentCarbonCount: 3, sideChainBranches: [{ locant: 2, substituentCarbonCount: 1 }] }],
 *   }
 *
 * A ring as a side chain is marked isRing too, with substituentCarbonCount the size of the
 * ring. This is cyclohexylmethanol:
 *   {
 *     mainChainCarbonCount: 1,
 *     substituents: [{ locant: 1, isHydroxy: true }, { locant: 1, substituentCarbonCount: 6, isRing: true }],
 *   }
 *
 * Whether a double bond is E or Z is given by its locant, for the main chain as
 * mainChainStereo, and inside a side chain or linkedGroup as stereo, numbered the same way as
 * its double bonds. A main chain locant with no double bond along the chain is the double bond
 * from that carbon to a side chain (an ylidene group). This is (2E)-but-2-ene:
 *   {
 *     mainChainCarbonCount: 4,
 *     mainChainDoubleBondLocants: [2],
 *     mainChainStereo: [{ locant: 2, descriptor: 'E' }],
 *     substituents: [],
 *   }
 * The molecule is drawn that way (see arrangeDoubleBonds.js). A double bond without one is
 * drawn however the layout leaves it.
 *
 * The description doesn't have to be the correct IUPAC name: "2-ethylbutane" builds
 * the same molecule as 3-methylpentane, and the naming code then gives the correct name.
 */

import {
  AMIDE_LINK_NITROGEN,
  AMINO_GROUP,
  BONDS_MADE_BY_EVERY_CARBON_ATOM,
  CARBONYL_OXYGEN,
  countHydrogensOnCarbon,
  ESTER_LINK_OXYGEN,
  HYDROXYL_GROUP,
} from './carbonSkeleton.js';
import { SMALLEST_RING_SIZE } from './alkaneNamingVocabulary.js';
import { layOutDisplayedFormula, moveSkeletonToCentreOfDrawingArea } from '../geometry/layOutDisplayedFormula.js';
import { arrangeDoubleBonds } from '../geometry/arrangeDoubleBonds.js';
import { bondKey, describeEveryDoubleBond } from './doubleBondConfiguration.js';
import { message } from '../languages/translate.js';

/**
 * How many side chains a main chain carbon can hold: 4 bonds, minus the bonds
 * to its neighbours along the chain (all single). Every carbon of a ring has two.
 */
export function countSpacesForSideChainsOnChainCarbon(locant, mainChainCarbonCount, isRing = false) {
  if (isRing) return BONDS_MADE_BY_EVERY_CARBON_ATOM - 2;
  const isOnlyCarbon = mainChainCarbonCount === 1;
  const isEndCarbon = locant === 1 || locant === mainChainCarbonCount;
  const bondsAlongTheChain = isOnlyCarbon ? 0 : isEndCarbon ? 1 : 2;
  return BONDS_MADE_BY_EVERY_CARBON_ATOM - bondsAlongTheChain;
}

/**
 * True when cis and trans could say which way round each double bond given as E or Z is: when
 * each of its carbons has one H, so the chain carries on from each (P-93.4.2.1.1).
 * buildResult: what buildCarbonSkeletonFromDescription returned.
 */
export function canUseCisOrTrans({ carbonSkeleton, doubleBondRequests }) {
  return doubleBondRequests.every(({ firstAtomId, secondAtomId }) =>
    [firstAtomId, secondAtomId].every((atomId) => countHydrogensOnCarbon(carbonSkeleton, atomId) === 1),
  );
}

/** True for the groups that, on a ring, bring a carbon of their own: -COOH, -CHO, and esters and amides. */
export function bringsItsOwnCarbonOnARing(substituent) {
  return Boolean(substituent.isCarboxylicAcid || substituent.isAldehyde || substituent.isEster || substituent.isAmide);
}

/**
 * How many of a chain carbon's bonds a substituent uses: 3 for the =O and OH of -COOH (or of an
 * ester or amide), 2 for one joined by a double bond (=CH2, or the =O of CHO or a ketone),
 * otherwise 1. On a ring (isOnRing), -COOH, -CHO, and esters and amides are joined by their own
 * carbon, so they use 1.
 */
export function bondsUsedBySubstituent(substituent, isOnRing = false) {
  if (isOnRing && bringsItsOwnCarbonOnARing(substituent)) return 1;
  if (substituent.isCarboxylicAcid || substituent.isEster || substituent.isAmide) return 3;
  return substituent.isJoinedByDoubleBond || substituent.isAldehyde || substituent.isKetone ? 2 : 1;
}

/**
 * How many bonds each main chain carbon has left for more substituents, by locant
 * (index 0 is carbon 1). Negative if a carbon already has too many.
 */
export function countFreeBondsByLocant({ mainChainCarbonCount, mainChainDoubleBondLocants = [], mainChainTripleBondLocants = [], substituents, isRing = false }) {
  const freeBonds = Array.from({ length: mainChainCarbonCount }, (_, index) =>
    countSpacesForSideChainsOnChainCarbon(index + 1, mainChainCarbonCount, isRing),
  );
  const takeExtraBonds = (locant, extraBondCount) => {
    freeBonds[locant - 1] -= extraBondCount;
    // In a ring, the multiple bond with the last carbon's locant goes back to carbon 1.
    freeBonds[locant === mainChainCarbonCount ? 0 : locant] -= extraBondCount;
  };
  for (const locant of mainChainDoubleBondLocants) takeExtraBonds(locant, 1);
  for (const locant of mainChainTripleBondLocants) takeExtraBonds(locant, 2);
  for (const substituent of substituents) freeBonds[substituent.locant - 1] -= bondsUsedBySubstituent(substituent, isRing);
  return freeBonds;
}

/**
 * The symbols of the atoms a group puts on its carbon: OH, =O, NH2, a halogen, =O and OH for
 * -COOH, =O for an ester's carbon, =O (and NH2, with no group on the N) for an amide's.
 * [undefined] for a side chain, which has no symbols of its own.
 */
function symbolsForGroup({ halogen, isHydroxy, isAldehyde, isKetone, isCarboxylicAcid, isEster, isAmide, isAmine, linkedGroup }) {
  if (isCarboxylicAcid) return [CARBONYL_OXYGEN, HYDROXYL_GROUP];
  if (isEster) return [CARBONYL_OXYGEN];
  if (isAmide) return linkedGroup === undefined ? [CARBONYL_OXYGEN, AMINO_GROUP] : [CARBONYL_OXYGEN];
  return [isHydroxy ? HYDROXYL_GROUP : isAldehyde || isKetone ? CARBONYL_OXYGEN : isAmine ? AMINO_GROUP : halogen];
}

/** How many carbons a substituent brings, with those of its branches and of the group on its O or NH. */
export function countCarbonsInSubstituent({ substituentCarbonCount = 0, sideChainBranches = [], linkedGroup }) {
  return substituentCarbonCount + (linkedGroup?.carbonCount ?? 0) + sideChainBranches.reduce((total, branch) => total + countCarbonsInSubstituent(branch), 0);
}

/**
 * A message if a side chain's groups, double bonds and branches don't fit on it, looking inside
 * its branches too; otherwise null.
 */
function findProblemWithSideChain({ substituentCarbonCount = 0, doubleBondLocants = [], tripleBondLocants = [], sideChainGroups = [], sideChainBranches = [], freeValenceLocant = 1, isRing = false }) {
  if (isRing) {
    return substituentCarbonCount < SMALLEST_RING_SIZE ? message('readingNames.ringTooSmall', { carbonCount: substituentCarbonCount, smallestRingSize: SMALLEST_RING_SIZE }) : null;
  }
  const problemWithDoubleBonds = findProblemWithMultipleBondLocants(doubleBondLocants, tripleBondLocants, substituentCarbonCount);
  if (problemWithDoubleBonds) return problemWithDoubleBonds;
  const freeValence = substituentCarbonCount > 0 ? [{ locant: freeValenceLocant }] : [];
  const notOnSideChain = [...sideChainGroups, ...sideChainBranches, ...freeValence].find(({ locant }) => locant < 1 || locant > substituentCarbonCount);
  if (notOnSideChain) return message('readingNames.locantNotOnChain', { locant: notOnSideChain.locant, chainLength: substituentCarbonCount });
  for (const branch of sideChainBranches) {
    const problemWithBranch = findProblemWithSideChain(branch);
    if (problemWithBranch) return problemWithBranch;
  }
  return null;
}

/**
 * A message if any double bond locant doesn't fit a chain of this many carbons, or is
 * given twice; otherwise null. In a chain of n carbons the bonds are numbered 1 to n - 1,
 * and in a ring of n carbons 1 to n.
 */
export function findProblemWithDoubleBondLocants(doubleBondLocants, chainCarbonCount, isRing = false) {
  return findProblemWithMultipleBondLocants(doubleBondLocants, [], chainCarbonCount, isRing);
}

/**
 * The same for double and triple bonds together. A bond can't be both, as in but-1-en-1-yne.
 */
export function findProblemWithMultipleBondLocants(doubleBondLocants, tripleBondLocants, chainCarbonCount, isRing = false) {
  const seenLocants = new Set();
  const lastLocant = isRing ? chainCarbonCount : chainCarbonCount - 1;
  for (const [locants, notOnChainKey, repeatedKey] of [
    [doubleBondLocants, 'readingNames.doubleBondNotOnChain', 'readingNames.doubleBondLocantRepeated'],
    [tripleBondLocants, 'readingNames.tripleBondNotOnChain', 'readingNames.tripleBondLocantRepeated'],
  ]) {
    for (const locant of locants) {
      if (locant < 1 || locant > lastLocant) return message(notOnChainKey, { locant, chainLength: chainCarbonCount, lastLocant });
      if (seenLocants.has(locant)) return message(repeatedKey, { locant });
      seenLocants.add(locant);
    }
  }
  return null;
}

/**
 * Joins up the atoms the description asks for, without working out where to draw them
 * (every carbon is at 0, 0). Quicker than buildCarbonSkeletonFromDescription, for when
 * only the structure matters.
 * Returns { carbonSkeleton, mainChainAtomIds } on success,
 * or { errorMessage } if the description is impossible (put into words by src/languages/translate.js).
 */
export function connectCarbonSkeletonFromDescription({
  mainChainCarbonCount,
  mainChainDoubleBondLocants = [],
  mainChainTripleBondLocants = [],
  mainChainStereo = [],
  substituents,
  isRing = false,
}) {
  if (isRing && mainChainCarbonCount < SMALLEST_RING_SIZE) {
    return { errorMessage: message('readingNames.ringTooSmall', { carbonCount: mainChainCarbonCount, smallestRingSize: SMALLEST_RING_SIZE }) };
  }
  for (const { locant, isRing: isRingSideChain, substituentCarbonCount = 0 } of substituents) {
    if (locant < 1 || locant > mainChainCarbonCount) {
      return { errorMessage: message('readingNames.locantNotOnChain', { locant, chainLength: mainChainCarbonCount }) };
    }
    if (isRingSideChain && substituentCarbonCount < SMALLEST_RING_SIZE) {
      return { errorMessage: message('readingNames.ringTooSmall', { carbonCount: substituentCarbonCount, smallestRingSize: SMALLEST_RING_SIZE }) };
    }
  }
  const problemWithMainChain = findProblemWithMultipleBondLocants(mainChainDoubleBondLocants, mainChainTripleBondLocants, mainChainCarbonCount, isRing);
  if (problemWithMainChain) return { errorMessage: problemWithMainChain };
  for (const substituent of substituents) {
    if (substituent.isRing) continue;
    const problemWithSideChain = findProblemWithSideChain(substituent);
    if (problemWithSideChain) return { errorMessage: problemWithSideChain };
  }
  for (const { linkedGroup } of substituents) {
    if (linkedGroup === undefined) continue;
    const { carbonCount, doubleBondLocants = [], tripleBondLocants = [], isRing: isRingGroup = false } = linkedGroup;
    if (isRingGroup && carbonCount < SMALLEST_RING_SIZE) {
      return { errorMessage: message('readingNames.ringTooSmall', { carbonCount, smallestRingSize: SMALLEST_RING_SIZE }) };
    }
    const problemWithGroup = findProblemWithMultipleBondLocants(doubleBondLocants, tripleBondLocants, carbonCount);
    if (problemWithGroup) return { errorMessage: problemWithGroup };
  }

  const carbonAtoms = [];
  const carbonCarbonBonds = [];
  /** For each carbon, the main chain locant to blame if it ends up with too many bonds. */
  const locantByAtomId = new Map();
  function addCarbon(locant) {
    const atomId = carbonAtoms.length + 1;
    carbonAtoms.push({ atomId, positionX: 0, positionY: 0 });
    locantByAtomId.set(atomId, locant);
    return atomId;
  }
  /** bondOrder: true or 2 for a double bond, 3 for a triple bond; false or 1 for a single bond. */
  function bond(firstAtomId, secondAtomId, bondOrder) {
    const order = bondOrder === true ? 2 : bondOrder || 1;
    carbonCarbonBonds.push(order > 1 ? { firstAtomId, secondAtomId, bondOrder: order } : { firstAtomId, secondAtomId });
  }
  /** The order of the bond with this locant along a chain: 3, 2 or 1. */
  const bondOrderAt = (locant, doubleBondLocants, tripleBondLocants) => (tripleBondLocants.includes(locant) ? 3 : doubleBondLocants.includes(locant) ? 2 : 1);
  /** The E or Z asked for each double bond: [{ firstAtomId, secondAtomId, descriptor, locant }], with the locant as written. */
  const doubleBondRequests = [];
  /**
   * Adds the requests for the stereo of one chain. chainAtomIds: its carbons from its carbon 1.
   * ylideneAtomIdAt: for the main chain, the first carbon of a side chain joined at a locant by a double bond.
   * Returns the first locant with no double bond, or null.
   */
  function requestStereo(stereo, chainAtomIds, doubleBondLocants, closesRing = false, ylideneAtomIdAt = () => undefined) {
    for (const { locant, descriptor } of stereo) {
      const isAlongChain = doubleBondLocants.includes(locant) && (locant < chainAtomIds.length || closesRing);
      const secondAtomId = isAlongChain ? chainAtomIds[locant % chainAtomIds.length] : ylideneAtomIdAt(locant);
      if (secondAtomId === undefined) return locant;
      doubleBondRequests.push({ firstAtomId: chainAtomIds[locant - 1], secondAtomId, descriptor, locant });
    }
    return null;
  }
  /** Adds a chain (or ring) of carbons, the first joined to fromAtomId through an O or NH. */
  function addLinkedGroup(fromAtomId, linkAtom, { carbonCount, doubleBondLocants = [], tripleBondLocants = [], stereo = [], isRing: isRingGroup = false }, locant) {
    const groupAtomIds = Array.from({ length: carbonCount }, () => addCarbon(locant));
    carbonCarbonBonds.push({ firstAtomId: fromAtomId, secondAtomId: groupAtomIds[0], linkAtom });
    groupAtomIds.slice(1).forEach((atomId, index) => bond(groupAtomIds[index], atomId, bondOrderAt(index + 1, doubleBondLocants, tripleBondLocants)));
    if (isRingGroup) bond(groupAtomIds[carbonCount - 1], groupAtomIds[0], false);
    return requestStereo(stereo, groupAtomIds, doubleBondLocants, isRingGroup);
  }

  const mainChainAtomIds = [];
  for (let locant = 1; locant <= mainChainCarbonCount; locant++) {
    const atomId = addCarbon(locant);
    if (locant > 1) bond(mainChainAtomIds[locant - 2], atomId, bondOrderAt(locant - 1, mainChainDoubleBondLocants, mainChainTripleBondLocants));
    mainChainAtomIds.push(atomId);
  }
  if (isRing) bond(mainChainAtomIds[mainChainCarbonCount - 1], mainChainAtomIds[0], bondOrderAt(mainChainCarbonCount, mainChainDoubleBondLocants, mainChainTripleBondLocants));

  const linkedGroupsToAdd = [];
  for (const substituent of substituents) {
    const { locant, isEster, isAmide, isAmine, isEther, linkedGroup } = substituent;
    // An ether's O, or an amine's NH, joins its group straight to the chain carbon.
    if ((isEther || isAmine) && linkedGroup !== undefined) {
      linkedGroupsToAdd.push([mainChainAtomIds[locant - 1], isEther ? ESTER_LINK_OXYGEN : AMIDE_LINK_NITROGEN, linkedGroup, locant]);
      continue;
    }
    if (isEther) return { errorMessage: message('readingNames.etherNeedsGroup') };
    const symbols = symbolsForGroup(substituent);
    if (symbols[0] === undefined) continue;
    let groupCarbonId = mainChainAtomIds[locant - 1];
    // On a ring, -COOH, -CHO, and esters and amides bring their own carbon.
    if (isRing && bringsItsOwnCarbonOnARing(substituent)) {
      groupCarbonId = addCarbon(locant);
      bond(mainChainAtomIds[locant - 1], groupCarbonId, false);
    }
    const carbonAtom = carbonAtoms[groupCarbonId - 1];
    carbonAtom.groups = [...(carbonAtom.groups ?? []), ...symbols.map((symbol) => ({ symbol }))];
    if (isEster && linkedGroup === undefined) return { errorMessage: message('readingNames.esterNeedsGroup') };
    if ((isEster || isAmide) && linkedGroup !== undefined) {
      linkedGroupsToAdd.push([groupCarbonId, isEster ? ESTER_LINK_OXYGEN : AMIDE_LINK_NITROGEN, linkedGroup, locant]);
    }
  }
  // Added after the main chain's own groups, so the carbon ids of side chains stay in the same order as before.
  /** The first locant of an E or Z with no double bond to go on, or null. */
  let stereoLocantWithoutDoubleBond = null;
  const noteStereoLocantWithoutDoubleBond = (locant) => {
    stereoLocantWithoutDoubleBond ??= locant;
  };
  const addLinkedGroups = () => linkedGroupsToAdd.forEach((args) => noteStereoLocantWithoutDoubleBond(addLinkedGroup(...args)));

  /** The first carbon of each side chain joined to the main chain by a double bond, by its locant. */
  /**
   * Adds a side chain (see the top of this file) joined to the carbon fromAtomId, with its
   * groups and branches. locant: the main chain locant it hangs from, to blame for any carbon
   * with too many bonds. Returns the carbon joined to fromAtomId, or { errorMessage }.
   */
  function addSideChain(fromAtomId, sideChain, locant) {
    const { substituentCarbonCount = 0, isJoinedByDoubleBond = false, doubleBondLocants = [], tripleBondLocants = [], stereo = [], isRing: isRingSideChain = false, sideChainGroups = [], sideChainBranches = [], freeValenceLocant = 1 } = sideChain;
    if (isRingSideChain) {
      const ringAtomIds = Array.from({ length: substituentCarbonCount }, () => addCarbon(locant));
      bond(fromAtomId, ringAtomIds[0], isJoinedByDoubleBond);
      ringAtomIds.forEach((atomId, index) => bond(atomId, ringAtomIds[(index + 1) % substituentCarbonCount], false));
      return ringAtomIds[0];
    }
    // The principal chain, from its carbon 1, joined to fromAtomId at its free valence. Joined
    // at carbon 1, its carbons are added from the main chain outwards, as for an unbranched one.
    const sideChainAtomIds = [];
    for (let sideChainLocant = 1; sideChainLocant <= substituentCarbonCount; sideChainLocant++) {
      const atomId = addCarbon(locant);
      if (sideChainLocant === freeValenceLocant) bond(fromAtomId, atomId, isJoinedByDoubleBond);
      if (sideChainLocant > 1) bond(sideChainAtomIds[sideChainLocant - 2], atomId, bondOrderAt(sideChainLocant - 1, doubleBondLocants, tripleBondLocants));
      sideChainAtomIds.push(atomId);
    }
    for (const group of sideChainGroups) {
      const groupCarbonId = sideChainAtomIds[group.locant - 1];
      if ((group.isEther || group.isAmine) && group.linkedGroup !== undefined) {
        linkedGroupsToAdd.push([groupCarbonId, group.isEther ? ESTER_LINK_OXYGEN : AMIDE_LINK_NITROGEN, group.linkedGroup, locant]);
        continue;
      }
      if (group.isEther) return { errorMessage: message('readingNames.etherNeedsGroup') };
      const carbonAtom = carbonAtoms[groupCarbonId - 1];
      carbonAtom.groups = [...(carbonAtom.groups ?? []), ...symbolsForGroup(group).map((symbol) => ({ symbol }))];
    }
    for (const branch of sideChainBranches) {
      const added = addSideChain(sideChainAtomIds[branch.locant - 1], branch, locant);
      if (added?.errorMessage) return added;
    }
    noteStereoLocantWithoutDoubleBond(requestStereo(stereo, sideChainAtomIds, doubleBondLocants));
    return sideChainAtomIds[freeValenceLocant - 1];
  }

  const ylideneAtomIdByLocant = new Map();
  for (const substituent of substituents) {
    const { locant, substituentCarbonCount = 0, isJoinedByDoubleBond = false, isRing: isRingSideChain = false } = substituent;
    if (substituentCarbonCount === 0 && !isRingSideChain) continue;
    const joinedAtomId = addSideChain(mainChainAtomIds[locant - 1], substituent, locant);
    if (joinedAtomId?.errorMessage) return joinedAtomId;
    if (isJoinedByDoubleBond) ylideneAtomIdByLocant.set(locant, joinedAtomId);
  }

  addLinkedGroups();
  noteStereoLocantWithoutDoubleBond(
    requestStereo(mainChainStereo, mainChainAtomIds, mainChainDoubleBondLocants, isRing, (locant) => ylideneAtomIdByLocant.get(locant)),
  );
  if (stereoLocantWithoutDoubleBond !== null) {
    return { errorMessage: message('readingNames.stereoLocantHasNoDoubleBond', { locant: stereoLocantWithoutDoubleBond }) };
  }

  const skeleton = { carbonAtoms, carbonCarbonBonds };
  const overloadedCarbon = carbonAtoms.find(({ atomId }) => countHydrogensOnCarbon(skeleton, atomId) < 0);
  if (overloadedCarbon) {
    return { errorMessage: message('readingNames.carbonWouldHaveTooManyBonds', { locant: locantByAtomId.get(overloadedCarbon.atomId) }) };
  }

  return { carbonSkeleton: skeleton, mainChainAtomIds, doubleBondRequests };
}

/**
 * Builds the molecule and lays it out the textbook way: main chain straight, side chains
 * up and down, and each double bond given as E or Z drawn that way.
 * Returns { carbonSkeleton, mainChainAtomIds, doubleBondRequests } on success (doubleBondRequests:
 * the double bonds given as E or Z, [{ firstAtomId, secondAtomId, descriptor, locant }]),
 * or { errorMessage } if the description is impossible (put into words by src/languages/translate.js).
 */
export function buildCarbonSkeletonFromDescription(description) {
  const connected = connectCarbonSkeletonFromDescription(description);
  if (connected.errorMessage) return connected;
  const { carbonSkeleton, mainChainAtomIds, doubleBondRequests } = connected;
  const laidOut = layOutDisplayedFormula(carbonSkeleton, mainChainAtomIds);
  if (doubleBondRequests.length === 0) return { carbonSkeleton: laidOut, mainChainAtomIds, doubleBondRequests };

  const arranged = arrangeDoubleBonds(laidOut, doubleBondRequests);
  // A double bond that can't be E or Z, such as the one in but-1-ene, can't be given as either.
  const configurations = describeEveryDoubleBond(arranged);
  const bondWithoutEOrZ = doubleBondRequests.find(({ firstAtomId, secondAtomId }) => !configurations.has(bondKey(firstAtomId, secondAtomId)));
  if (bondWithoutEOrZ) return { errorMessage: message('readingNames.doubleBondHasNoEOrZ', { locant: bondWithoutEOrZ.locant }) };
  return { carbonSkeleton: moveSkeletonToCentreOfDrawingArea(arranged), mainChainAtomIds, doubleBondRequests };
}
