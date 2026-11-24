/**
 * Listing every structural isomer with a given number of carbons, C=C double bonds, halogen
 * atoms, OH groups, C=O groups, NH2 groups, and O and NH atoms between two carbons: the alkanes
 * (no double bonds), the alkenes (one), the dienes (two) ..., and the haloalkanes, alcohols,
 * aldehydes, ketones, carboxylic acids, esters, ethers, amines and amides made from them, as
 * open chains or with one ring. (A ring, like a double bond, has two hydrogens
 * fewer than the alkane: cyclohexane and hex-1-ene are both C6H12.)
 * (Structural isomers have the same molecular formula but a different arrangement of atoms.)
 * E and Z isomers are listed separately, as they are different compounds with different
 * names: C4H8 lists (2E)-but-2-ene and (2Z)-but-2-ene. Mirror-image isomers count as one, as
 * a flat drawing can't show them apart.
 *
 * How it works:
 *   1. Start from methane (one carbon).
 *   2. Make every possible molecule with one more carbon, by adding a carbon to each
 *      carbon that still has room, in each molecule found so far.
 *   3. Throw away duplicates: the same molecule can be grown in many different ways.
 *   4. Repeat until we reach the wanted number of carbons. That gives every alkane.
 *      For rings, join two carbons of each alkane that aren't already bonded, in every
 *      possible way, and again throw away duplicates. That gives every molecule with one ring.
 *   5. For alkenes and dienes, make every possible choice of bonds in each alkane to turn
 *      into double bonds (each carbon still needing 4 bonds), and again throw away duplicates.
 *   6. For ethers, secondary amines, esters and N-substituted amides, put an O or an NH into the
 *      middle of a single C-C bond, one at a time, in every possible way (but not into a ring's
 *      bond, as rings with an O or N in them aren't covered), and again throw away duplicates.
 *   7. For haloalkanes, alcohols and amines, swap hydrogens for the halogens, OH and NH2 groups, one at a
 *      time, in every possible way, and again throw away duplicates. For aldehydes, ketones
 *      and acids, swap two hydrogens for the O of C=O in the same way, and keep only the
 *      molecules where it makes a CHO group, a ketone, or with an OH on the same carbon, a
 *      COOH group (not an acyl halide or the like).
 *   8. Each one is drawn the textbook way, and each double bond with E and Z forms is drawn
 *      both ways (see arrangeDoubleBonds.js), giving one isomer for each different name.
 *
 * Spotting duplicates uses a "fingerprint" (canonical code) that is the same for any
 * two drawings of the same molecule, however the atoms happen to be numbered.
 */

import {
  AMIDE_LINK_NITROGEN,
  AMINO_GROUP,
  ESTER_LINK_OXYGEN,
  addCarbonAtom,
  addGroupToCarbon,
  bondCanBecomeDouble,
  bondTwoCarbons,
  carbonHasRoomForAnotherCarbon,
  carbonHasRoomForGroup,
  CARBONYL_OXYGEN,
  countHydrogensOnCarbon,
  countRings,
  createEmptyCarbonSkeleton,
  findBondBetween,
  isDoubleBond,
  listAtomIdsInRings,
  everyCarbonylIsInAnAldehydeKetoneOrAcid,
  GROUP_SYMBOLS,
  HYDROXYL_GROUP,
  isLinkBond,
  isUnstableAlcohol,
  linkAtomOf,
  listBondsOfCarbon,
  listGroupsOnCarbon,
  setLinkAtomOfBond,
  toggleDoubleBond,
} from './carbonSkeleton.js';
import { bondKey, describeEveryDoubleBond } from './doubleBondConfiguration.js';
import { arrangeDoubleBonds } from '../geometry/arrangeDoubleBonds.js';
import { layOutDisplayedFormula, moveSkeletonToCentreOfDrawingArea } from '../geometry/layOutDisplayedFormula.js';
import { canonicalFingerprintOfSkeleton } from './canonicalFingerprint.js';
import { nameCarbonSkeleton } from './nameCarbonSkeleton.js';
import { SMALLEST_RING_SIZE } from './alkaneNamingVocabulary.js';

/** Keeps the first skeleton with each fingerprint. */
function removeDuplicates(skeletons) {
  const skeletonByFingerprint = new Map();
  for (const skeleton of skeletons) {
    const fingerprint = canonicalFingerprintOfSkeleton(skeleton);
    if (!skeletonByFingerprint.has(fingerprint)) skeletonByFingerprint.set(fingerprint, skeleton);
  }
  return [...skeletonByFingerprint.values()];
}

/** Every different alkane carbon skeleton with this many carbons (positions not set). */
export function listEveryAlkaneSkeletonWithCarbonCount(carbonCount) {
  let skeletonsOfCurrentSize = [addCarbonAtom(createEmptyCarbonSkeleton(), { positionX: 0, positionY: 0 }).updatedSkeleton];

  for (let currentSize = 1; currentSize < carbonCount; currentSize++) {
    const skeletonByFingerprint = new Map();
    for (const skeleton of skeletonsOfCurrentSize) {
      for (const carbonAtom of skeleton.carbonAtoms) {
        if (!carbonHasRoomForAnotherCarbon(skeleton, carbonAtom.atomId)) continue;
        const { updatedSkeleton } = addCarbonAtom(skeleton, { positionX: 0, positionY: 0, bondToAtomId: carbonAtom.atomId });
        const fingerprint = canonicalFingerprintOfSkeleton(updatedSkeleton);
        if (!skeletonByFingerprint.has(fingerprint)) skeletonByFingerprint.set(fingerprint, updatedSkeleton);
      }
    }
    skeletonsOfCurrentSize = [...skeletonByFingerprint.values()];
  }
  return skeletonsOfCurrentSize;
}

/** Every different saturated skeleton with this many carbons and one ring, e.g. cyclobutane and methylcyclopropane for 4. */
export function listEveryOneRingSkeletonWithCarbonCount(carbonCount) {
  if (carbonCount < SMALLEST_RING_SIZE) return [];
  const skeletons = [];
  for (const alkaneSkeleton of listEveryAlkaneSkeletonWithCarbonCount(carbonCount)) {
    const { carbonAtoms } = alkaneSkeleton;
    for (let first = 0; first < carbonAtoms.length; first++) {
      for (let second = first + 1; second < carbonAtoms.length; second++) {
        const [firstAtomId, secondAtomId] = [carbonAtoms[first].atomId, carbonAtoms[second].atomId];
        const canJoin =
          findBondBetween(alkaneSkeleton, firstAtomId, secondAtomId) === undefined &&
          countHydrogensOnCarbon(alkaneSkeleton, firstAtomId) > 0 &&
          countHydrogensOnCarbon(alkaneSkeleton, secondAtomId) > 0;
        if (canJoin) skeletons.push(bondTwoCarbons(alkaneSkeleton, firstAtomId, secondAtomId));
      }
    }
  }
  return removeDuplicates(skeletons);
}

/** Every different open-chain skeleton with this many carbons and double bonds (positions not set). */
export function listEveryOpenChainSkeleton(carbonCount, doubleBondCount) {
  return addDoubleBondsInEveryWay(listEveryAlkaneSkeletonWithCarbonCount(carbonCount), doubleBondCount);
}

/** Every different skeleton with this many carbons, one ring, and this many double bonds (positions not set). */
export function listEveryOneRingSkeleton(carbonCount, doubleBondCount) {
  return addDoubleBondsInEveryWay(listEveryOneRingSkeletonWithCarbonCount(carbonCount), doubleBondCount);
}

/**
 * Every different way of turning this many single bonds of these skeletons into double bonds.
 * The double bonds are chosen in the order the bonds are listed, so each set of bonds is tried once.
 */
function addDoubleBondsInEveryWay(skeletons, doubleBondCount) {
  const skeletonByFingerprint = new Map();

  function chooseDoubleBonds(skeleton, doubleBondsStillToChoose, firstBondIndexToTry) {
    if (doubleBondsStillToChoose === 0) {
      const fingerprint = canonicalFingerprintOfSkeleton(skeleton);
      if (!skeletonByFingerprint.has(fingerprint)) skeletonByFingerprint.set(fingerprint, skeleton);
      return;
    }
    for (let bondIndex = firstBondIndexToTry; bondIndex < skeleton.carbonCarbonBonds.length; bondIndex++) {
      const { firstAtomId, secondAtomId } = skeleton.carbonCarbonBonds[bondIndex];
      if (!bondCanBecomeDouble(skeleton, firstAtomId, secondAtomId)) continue;
      chooseDoubleBonds(toggleDoubleBond(skeleton, firstAtomId, secondAtomId), doubleBondsStillToChoose - 1, bondIndex + 1);
    }
  }

  for (const skeleton of skeletons) chooseDoubleBonds(skeleton, doubleBondCount, 0);
  return [...skeletonByFingerprint.values()];
}

/**
 * Every different way of swapping hydrogens on these skeletons for the given groups, e.g.
 * { Cl: 2 } for two chlorine atoms, { OH: 1 } for one hydroxyl group or { O: 1 } for the O
 * of one C=O. The groups are added
 * one at a time, and the duplicates thrown away after each one, so the list never grows much
 * bigger than the answer.
 */
export function addGroupsInEveryWay(skeletons, groupCounts) {
  let skeletonsSoFar = skeletons;
  for (const symbol of GROUP_SYMBOLS) {
    for (let added = 0; added < (groupCounts[symbol] ?? 0); added++) {
      skeletonsSoFar = removeDuplicates(
        skeletonsSoFar.flatMap((skeleton) =>
          skeleton.carbonAtoms
            .filter((carbonAtom) => carbonHasRoomForGroup(skeleton, carbonAtom.atomId, symbol))
            .map((carbonAtom) => addGroupToCarbon(skeleton, carbonAtom.atomId, symbol)),
        ),
      );
    }
  }
  return skeletonsSoFar;
}

/**
 * Every different way of putting O and NH atoms into the middle of single C-C bonds of these
 * skeletons, e.g. { O: 1 } for the ethers (and esters) of one O, or { NH: 1 } for the secondary
 * amines. Each bond takes at most one, and a ring's bonds none. The atoms are put in one at a
 * time, with the duplicates thrown away after each one, as in addGroupsInEveryWay.
 */
export function addLinkAtomsInEveryWay(skeletons, linkAtomCounts) {
  let skeletonsSoFar = skeletons;
  for (const linkAtom of [ESTER_LINK_OXYGEN, AMIDE_LINK_NITROGEN]) {
    for (let added = 0; added < (linkAtomCounts[linkAtom] ?? 0); added++) {
      skeletonsSoFar = removeDuplicates(
        skeletonsSoFar.flatMap((skeleton) => {
          const ringAtomIds = listAtomIdsInRings(skeleton);
          return skeleton.carbonCarbonBonds
            .filter((bond) => !isDoubleBond(bond) && !isLinkBond(bond) && !(ringAtomIds.has(bond.firstAtomId) && ringAtomIds.has(bond.secondAtomId)))
            .map((bond) => setLinkAtomOfBond(skeleton, bond.firstAtomId, bond.secondAtomId, linkAtom));
        }),
      );
    }
  }
  return skeletonsSoFar;
}

/**
 * True if a carbon has an N, or an O and something else besides, that would make the molecule
 * unstable, so that it falls apart or changes into another isomer:
 *   - two of OH, NH2, an ether's O and an amine's NH on one carbon, as in CH3CH(OH)OCH3 (a
 *     hemiacetal) or CH2(NH2)2, except two ethers' O atoms (an acetal, CH3OCH2OCH3, is stable)
 *   - an NH2 or an amine's NH on a C=C carbon (an enamine, which turns into an imine)
 * A C=O carbon is left to everyCarbonylIsInAnAldehydeKetoneOrAcid: its OH, NH2, O or NH makes
 * an acid, an amide or an ester.
 * (Alcohols with two OH groups on one carbon, or an OH on a C=C carbon, are left out by
 * isUnstableAlcohol.)
 */
function hasUnstableAmineOrEtherCarbon(skeleton) {
  return skeleton.carbonAtoms.some((carbonAtom) => {
    const groups = listGroupsOnCarbon(carbonAtom);
    if (groups.some(({ symbol }) => symbol === CARBONYL_OXYGEN)) return false;
    const bonds = listBondsOfCarbon(skeleton, carbonAtom.atomId);
    const etherOxygenCount = bonds.filter((bond) => linkAtomOf(bond) === ESTER_LINK_OXYGEN).length;
    const nitrogenCount = groups.filter(({ symbol }) => symbol === AMINO_GROUP).length + bonds.filter((bond) => linkAtomOf(bond) === AMIDE_LINK_NITROGEN).length;
    const hydroxylCount = groups.filter(({ symbol }) => symbol === HYDROXYL_GROUP).length;
    const isInDoubleBond = bonds.some(isDoubleBond);
    if (nitrogenCount > 0 && isInDoubleBond) return true;
    return hydroxylCount + nitrogenCount > 0 && hydroxylCount + nitrogenCount + etherOxygenCount >= 2;
  });
}

/**
 * The isomers this tool can name, ready to draw, plus a count of the ones it can't
 * name yet (those with branched side chains, which first appear at 10 carbons in alkanes,
 * and those with a halogen or OH group on a side chain):
 *   {
 *     nameableIsomers: [{ iupacName, mainChainCarbonCount, hasRing, carbonSkeleton }, ...],
 *                      open chains first, then rings, each with the longest main chain first
 *     countOfIsomersNotYetSupported: 0,
 *   }
 * groupCounts: how many of each halogen, of OH and of C=O, e.g. { Cl: 1 } for C4H9Cl,
 * { OH: 1 } for the alcohols C4H9OH, or { O: 1 } for the aldehydes and ketones C4H8O. Unstable
 * alcohols are left out (see isUnstableAlcohol), and so are acyl halides and the like, which
 * can't be named yet.
 */
export function listOpenChainIsomers(carbonCount, doubleBondCount = 0, groupCounts = {}) {
  return nameAndSortIsomers(addGroupsInEveryWay(listEveryOpenChainSkeleton(carbonCount, doubleBondCount), groupCounts));
}

/**
 * The alcohols, aldehydes, ketones, acids, esters and ethers, and with nitrogen the amines and
 * amides (and plain hydrocarbons and haloalkanes, with neither) of a molecular formula,
 * open-chain or with one ring, named and sorted as listOpenChainIsomers does.
 * unsaturationCount: how many pairs of hydrogens fewer than the alkane (or haloalkane) the
 * formula has. Each C=C double bond takes away one pair, and so does each C=O and a ring, so
 * C3H6O (one pair fewer than C3H8O) is prop-2-en-1-ol, with a C=C, propanal and propan-2-one,
 * with a C=O, and cyclopropanol, with a ring.
 * groupCounts: how many of each halogen, of O and of N, e.g. { Cl: 1, O: 1 } for C3H5ClO, or
 * { O: 1, NH2: 1 } for C2H7NO. Each O is in an OH group, a C=O, or between two carbons; each N
 * is in an NH2 group or between two carbons. (An N joined to three carbons, a tertiary amine,
 * isn't covered yet.)
 * Open chains come first in the list, then rings.
 */
export function listIsomersOfFormula(carbonCount, unsaturationCount, groupCounts) {
  const { [CARBONYL_OXYGEN]: oxygenCount = 0, [AMINO_GROUP]: nitrogenCount = 0, ...halogenCounts } = groupCounts;
  // Each carbon can have at most one C=O that is part of an aldehyde, a ketone or an acid.
  const mostCarbonylGroups = Math.min(oxygenCount, unsaturationCount, carbonCount);
  const skeletons = [];
  for (let carbonylCount = 0; carbonylCount <= mostCarbonylGroups; carbonylCount++) {
    const doubleBondCount = unsaturationCount - carbonylCount;
    if (doubleBondCount > carbonCount) continue;
    const openChains = listEveryOpenChainSkeleton(carbonCount, doubleBondCount);
    // A ring takes away one pair of hydrogens itself.
    const rings = doubleBondCount >= 1 ? listEveryOneRingSkeleton(carbonCount, doubleBondCount - 1) : [];
    for (let linkOxygenCount = 0; linkOxygenCount <= oxygenCount - carbonylCount; linkOxygenCount++) {
      for (let linkNitrogenCount = 0; linkNitrogenCount <= nitrogenCount; linkNitrogenCount++) {
        const linkAtomCounts = { [ESTER_LINK_OXYGEN]: linkOxygenCount, [AMIDE_LINK_NITROGEN]: linkNitrogenCount };
        const counts = {
          ...halogenCounts,
          [HYDROXYL_GROUP]: oxygenCount - carbonylCount - linkOxygenCount,
          [CARBONYL_OXYGEN]: carbonylCount,
          [AMINO_GROUP]: nitrogenCount - linkNitrogenCount,
        };
        for (const skeletonsWithoutGroups of [openChains, rings]) {
          skeletons.push(...addGroupsInEveryWay(addLinkAtomsInEveryWay(skeletonsWithoutGroups, linkAtomCounts), counts));
        }
      }
    }
  }
  return nameAndSortIsomers(skeletons);
}

/**
 * True if a carbon in a ring has two double bonds, as in cyclohexa-1,2-diene. Such ring allenes
 * are too strained to be made except in rings much bigger than those listed here, so they are
 * left out of the lists, like the unstable alcohols.
 */
function hasRingAllene(skeleton) {
  const ringAtomIds = listAtomIdsInRings(skeleton);
  return [...ringAtomIds].some(
    (atomId) =>
      skeleton.carbonCarbonBonds.filter((bond) => isDoubleBond(bond) && (bond.firstAtomId === atomId || bond.secondAtomId === atomId)).length >= 2,
  );
}

/**
 * Lists the skeleton drawn with each of its double bonds that has E and Z forms drawn E and
 * drawn Z, in every combination: [{ carbonSkeleton, isDrawnAsAsked }]. isDrawnAsAsked is false
 * for a combination the layout couldn't draw. A combination where a double bond turns out to
 * have no E and Z forms (as can happen by Sequence Rule 3, P-92.4.2) is left out.
 */
function drawEveryEAndZ(skeleton, requests = [], drawn = skeleton) {
  const configurations = describeEveryDoubleBond(drawn);
  const requestedKeys = new Set(requests.map(({ firstAtomId, secondAtomId }) => bondKey(firstAtomId, secondAtomId)));
  const nextKey = [...configurations.keys()].find((key) => !requestedKeys.has(key));
  if (nextKey === undefined) return [{ carbonSkeleton: drawn, isDrawnAsAsked: true }];

  const [firstAtomId, secondAtomId] = nextKey.split('-').map(Number);
  return ['E', 'Z'].flatMap((descriptor) => {
    const allRequests = [...requests, { firstAtomId, secondAtomId, descriptor }];
    const arranged = arrangeDoubleBonds(skeleton, allRequests);
    const arrangedConfigurations = describeEveryDoubleBond(arranged);
    const configurationOf = (request) => arrangedConfigurations.get(bondKey(request.firstAtomId, request.secondAtomId));
    if (allRequests.some((request) => configurationOf(request) === undefined)) return [];
    if (allRequests.some((request) => configurationOf(request) !== request.descriptor)) return [{ carbonSkeleton: arranged, isDrawnAsAsked: false }];
    return drawEveryEAndZ(skeleton, allRequests, arranged);
  });
}

/** A name without its E and Z, to sort by: "(2E)-but-2-ene" sorts as "but-2-ene". */
const withoutStereodescriptors = (name) => name.replace(/\((?:\d+)?[EZ](?:,(?:\d+)?[EZ])*\)-/g, '');

function nameAndSortIsomers(skeletons) {
  const nameableIsomers = [];
  let countOfIsomersNotYetSupported = 0;

  for (const skeleton of skeletons) {
    if (isUnstableAlcohol(skeleton) || hasUnstableAmineOrEtherCarbon(skeleton) || !everyCarbonylIsInAnAldehydeKetoneOrAcid(skeleton) || hasRingAllene(skeleton)) {
      continue;
    }
    const namingResult = nameCarbonSkeleton(skeleton);
    if (!namingResult.isNameable) {
      countOfIsomersNotYetSupported++;
      continue;
    }
    // Drawn the textbook way: main chain straight, side chains up and down.
    const carbonSkeleton = layOutDisplayedFormula(skeleton, namingResult.mainChainAtomIds);
    const namesListed = new Set();
    for (const { carbonSkeleton: stereoisomer, isDrawnAsAsked } of drawEveryEAndZ(carbonSkeleton)) {
      const stereoisomerName = isDrawnAsAsked ? nameCarbonSkeleton(stereoisomer).iupacName : null;
      if (stereoisomerName === null) {
        countOfIsomersNotYetSupported++;
        continue;
      }
      if (namesListed.has(stereoisomerName)) continue;
      namesListed.add(stereoisomerName);
      nameableIsomers.push({
        iupacName: stereoisomerName,
        mainChainCarbonCount: namingResult.mainChainCarbonCount,
        hasRing: countRings(skeleton) > 0,
        carbonSkeleton: moveSkeletonToCentreOfDrawingArea(stereoisomer),
      });
    }
  }

  nameableIsomers.sort((first, second) => {
    if (first.hasRing !== second.hasRing) return first.hasRing ? 1 : -1;
    if (first.mainChainCarbonCount !== second.mainChainCarbonCount) {
      return second.mainChainCarbonCount - first.mainChainCarbonCount;
    }
    const [firstName, secondName] = [first.iupacName, second.iupacName].map(withoutStereodescriptors);
    if (firstName !== secondName) return firstName < secondName ? -1 : 1;
    return first.iupacName < second.iupacName ? -1 : 1;
  });

  return { nameableIsomers, countOfIsomersNotYetSupported };
}
