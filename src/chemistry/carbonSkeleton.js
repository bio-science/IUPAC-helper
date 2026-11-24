/**
 * The carbon skeleton: the data structure behind every molecule in the app.
 *
 * Every carbon makes exactly 4 bonds. A double bond counts as 2 of them. That means once we
 * know which carbons are bonded to which, and how, the hydrogens are fixed: a carbon with
 * 1 single bond to carbon has 3 hydrogens, one with 2 single bonds has 2, one with a double
 * bond has at most 2, and so on. So we store only the carbons and the carbon-carbon bonds,
 * and the hydrogens are added automatically whenever they are needed (for drawing, or for
 * the molecular formula).
 *
 * A halogen atom (F, Cl, Br or I) makes just one bond, so it can only sit at the end of a
 * bond to a carbon, in the place of one of that carbon's hydrogens. A hydroxyl group (OH,
 * the group that makes a molecule an alcohol) is the same from the carbon's point of view:
 * one bond to the carbon, and nothing else joined to it. So these "groups" are stored with
 * the carbon they are joined to, rather than as atoms of the skeleton, and each one leaves
 * its carbon with one hydrogen fewer.
 *
 * An oxygen joined to a carbon by a double bond, C=O (the "carbonyl" group), is stored the
 * same way, as a group with the symbol O. It sits in one place round its carbon, like the
 * other groups, but makes two bonds, so it leaves its carbon with two hydrogens fewer. On the
 * end carbon of a chain, as in CH3-CHO, it makes the molecule an aldehyde, and on a carbon in
 * the middle of a chain, as in CH3-CO-CH3, a ketone. With an OH group on the same carbon, as in
 * CH3-COOH, it makes the carboxyl group of a carboxylic acid: so -COOH is stored as two groups,
 * O and OH, on the one carbon.
 *
 * An amino group, -NH2, is a group too: on a C=O carbon, as in CH3-CONH2, it makes the
 * molecule an amide, and anywhere else, as in CH3-CH2-NH2, an amine.
 *
 * The O in the middle of an ester, CH3-CO-O-CH3, and the NH in the middle of an amide such as
 * CH3-CO-NH-CH3, each join two carbons with a single bond on either side. So they are stored
 * as part of the bond between those two carbons, with its linkAtom: 'O' or 'NH'. The bond
 * still uses up one bond on each carbon, just like a carbon-carbon bond. With no C=O next to
 * it, the O makes an ether, as in CH3-O-CH2-CH3, and the NH a secondary amine, as in
 * CH3-NH-CH2-CH3.
 *
 * Shape of a skeleton:
 *   {
 *     carbonAtoms:       [{ atomId: 1, positionX: 120, positionY: 200 },
 *                         { atomId: 2, positionX: 230, positionY: 200, groups: [{ symbol: 'Cl', place: 2 }, { symbol: 'OH' }] }, ...],
 *     carbonCarbonBonds: [{ firstAtomId: 1, secondAtomId: 2 }, { firstAtomId: 2, secondAtomId: 3, bondOrder: 2 }, ...],
 *   }
 * A bond without a bondOrder is a single bond. bondOrder 2 is a double bond, and 3 a triple
 * bond (C≡C). A bond with a
 * linkAtom ('O' or 'NH') has that atom in the middle: { firstAtomId: 2, secondAtomId: 3, linkAtom: 'O' }.
 * A carbon without groups has no groups list. A group's place says which of the carbon's
 * hydrogen positions it is drawn in (see placeAtomsAroundCarbons.js); a group without one
 * takes the first free position.
 *
 * Positions are for drawing. The naming code uses them only to tell whether a double bond
 * is drawn E, Z or neither (see doubleBondConfiguration.js).
 *
 * Every function here returns a new skeleton instead of changing the one it was given,
 * which is what React expects.
 */

export const BONDS_MADE_BY_EVERY_CARBON_ATOM = 4;

/** The halogens, in the order of the periodic table (group 17). */
export const HALOGEN_SYMBOLS = ['F', 'Cl', 'Br', 'I'];

/** The hydroxyl group, -OH, found in every alcohol. */
export const HYDROXYL_GROUP = 'OH';

/** The oxygen of a C=O group, joined to its carbon by a double bond: the O of an aldehyde's -CHO, of a ketone, or the C=O of an acid's -COOH. */
export const CARBONYL_OXYGEN = 'O';

/** The amino group, -NH2: on a C=O carbon, the NH2 of an amide's -CONH2. */
export const AMINO_GROUP = 'NH2';

/** Every group that can take the place of hydrogens on a carbon. */
export const GROUP_SYMBOLS = [...HALOGEN_SYMBOLS, HYDROXYL_GROUP, CARBONYL_OXYGEN, AMINO_GROUP];

/**
 * The O of an ether, -O-R, as a group on its carbon. Used only while naming, once the group R
 * on the far side of the O has been taken off and stored with it as its linkedGroup (see
 * splitAtEthersAndAmines.js). The NH of a secondary amine, -NH-R, is stored the same way, as an
 * NH2 group (AMINO_GROUP) with a linkedGroup.
 */
export const ETHER_OXYGEN_GROUP = 'OR';

/** The O in the middle of an ester's -CO-O-, stored on the bond it sits in. */
export const ESTER_LINK_OXYGEN = 'O';

/** The NH in the middle of an N-substituted amide's -CO-NH-, stored on the bond it sits in. */
export const AMIDE_LINK_NITROGEN = 'NH';

/** 'O' or 'NH' for a bond with an atom in the middle, otherwise null. */
export function linkAtomOf(bond) {
  return bond.linkAtom ?? null;
}

/** True when the bond has an O or NH in the middle, rather than joining its carbons directly. */
export function isLinkBond(bond) {
  return linkAtomOf(bond) !== null;
}

/** True when the skeleton has any O or NH in the middle of a bond. */
export function hasLinkBond(skeleton) {
  return skeleton.carbonCarbonBonds.some(isLinkBond);
}

/** The bonds joined to a carbon. */
export function listBondsOfCarbon(skeleton, atomId) {
  return skeleton.carbonCarbonBonds.filter((bond) => bond.firstAtomId === atomId || bond.secondAtomId === atomId);
}

/** The carbon at the other end of a bond. */
export function otherAtomIdOfBond(bond, atomId) {
  return bond.firstAtomId === atomId ? bond.secondAtomId : bond.firstAtomId;
}

/** How many of its carbon's bonds a group uses: 2 for the double bond of C=O, 1 for the others. */
export function bondsUsedByGroup(symbol) {
  return symbol === CARBONYL_OXYGEN ? 2 : 1;
}

export function isHalogenSymbol(symbol) {
  return HALOGEN_SYMBOLS.includes(symbol);
}

/**
 * The biggest molecule built from a typed name or structural formula. The work of naming
 * and drawing grows with the square of the size (1000 carbons take about a fifth of a
 * second on a laptop, 10000 take over 10 seconds), and it is redone at every key press.
 */
export const MOST_CARBONS_IN_A_TYPED_MOLECULE = 500;

export function createEmptyCarbonSkeleton() {
  return { carbonAtoms: [], carbonCarbonBonds: [] };
}

export function isSkeletonEmpty(skeleton) {
  return skeleton.carbonAtoms.length === 0;
}

export function findCarbonAtomById(skeleton, atomId) {
  return skeleton.carbonAtoms.find((carbonAtom) => carbonAtom.atomId === atomId);
}

/** The ids of every carbon directly bonded to the given carbon. */
export function listNeighbourCarbonIds(skeleton, atomId) {
  const neighbourCarbonIds = [];
  for (const bond of skeleton.carbonCarbonBonds) {
    if (bond.firstAtomId === atomId) neighbourCarbonIds.push(bond.secondAtomId);
    if (bond.secondAtomId === atomId) neighbourCarbonIds.push(bond.firstAtomId);
  }
  return neighbourCarbonIds;
}

/** 1 for a single bond, 2 for a double bond, 3 for a triple bond. */
export function bondOrderOf(bond) {
  return bond.bondOrder ?? 1;
}

export function isDoubleBond(bond) {
  return bondOrderOf(bond) === 2;
}

export function isTripleBond(bond) {
  return bondOrderOf(bond) === 3;
}

/** A double or a triple bond: the "multiple bonds" of P-31.1.1 and P-44.4.1.1. */
export function isMultipleBond(bond) {
  return bondOrderOf(bond) > 1;
}

/** The bond joining two carbons, whichever way round it was stored, or undefined if they aren't bonded. */
export function findBondBetween(skeleton, firstAtomId, secondAtomId) {
  return skeleton.carbonCarbonBonds.find(
    (bond) =>
      (bond.firstAtomId === firstAtomId && bond.secondAtomId === secondAtomId) ||
      (bond.firstAtomId === secondAtomId && bond.secondAtomId === firstAtomId),
  );
}

/** True when the skeleton has at least one carbon-carbon double bond, so it is an alkene. */
export function hasDoubleBond(skeleton) {
  return skeleton.carbonCarbonBonds.some(isDoubleBond);
}

/** True when the skeleton has at least one carbon-carbon triple bond, so it is an alkyne. */
export function hasTripleBond(skeleton) {
  return skeleton.carbonCarbonBonds.some(isTripleBond);
}

/** The halogens and hydroxyl groups joined to a carbon: [{ symbol: 'Cl', place }, { symbol: 'OH' }, ...], or an empty list. */
export function listGroupsOnCarbon(carbonAtom) {
  return carbonAtom.groups ?? [];
}

/** How many hydroxyl groups a carbon has. */
export function countHydroxylGroupsOnCarbon(carbonAtom) {
  return listGroupsOnCarbon(carbonAtom).filter(({ symbol }) => symbol === HYDROXYL_GROUP).length;
}

/** How many NH2 groups a carbon has. */
export function countAminoGroupsOnCarbon(carbonAtom) {
  return listGroupsOnCarbon(carbonAtom).filter(({ symbol }) => symbol === AMINO_GROUP).length;
}

/** How many C=O oxygens a carbon has. */
export function countCarbonylOxygensOnCarbon(carbonAtom) {
  return listGroupsOnCarbon(carbonAtom).filter(({ symbol }) => symbol === CARBONYL_OXYGEN).length;
}

/** True when any carbon has a halogen joined to it. */
export function hasHalogen(skeleton) {
  return skeleton.carbonAtoms.some((carbonAtom) => listGroupsOnCarbon(carbonAtom).some(({ symbol }) => isHalogenSymbol(symbol)));
}

/** True when any carbon has a hydroxyl group, so the molecule is an alcohol. */
export function hasHydroxylGroup(skeleton) {
  return skeleton.carbonAtoms.some((carbonAtom) => countHydroxylGroupsOnCarbon(carbonAtom) > 0);
}

/**
 * What a carbon with C=O on it is:
 *   'aldehyde'  -CHO: the C=O carbon has a hydrogen, no other group and at most one carbon
 *               joined to it, as in acetaldehyde, CH3-CHO, and formaldehyde, H-CHO
 *   'ketone'    the C=O carbon is joined to two carbons, as in propan-2-one, CH3-CO-CH3
 *   'carboxylicAcid'  -COOH: the C=O carbon also has one OH group, and nothing else but a
 *               hydrogen or one carbon, as in acetic acid, CH3-COOH, and formic acid, H-COOH
 *   'ester'     -CO-O-: the C=O carbon is joined through an O to another carbon (one without a
 *               C=O of its own), and to nothing else but a hydrogen or one carbon, as in methyl
 *               acetate, CH3-CO-O-CH3
 *   'amide'     -CONH2 or -CO-NH-: the C=O carbon also has an NH2 group, or is joined through an
 *               NH to another carbon (one without a C=O), and to nothing else but a hydrogen or
 *               one carbon, as in acetamide, CH3-CONH2, and N-methylacetamide, CH3-CO-NH-CH3
 *   'other'     anything else: with a halogen it is an acyl halide (CH3-COCl), and with a C=C
 *               double bond or a second C=O, other compounds
 * null for a carbon with no C=O.
 */
export function describeCarbonylCarbon(skeleton, carbonAtom) {
  const carbonylCount = countCarbonylOxygensOnCarbon(carbonAtom);
  if (carbonylCount === 0) return null;
  if (carbonylCount > 1) return 'other';
  const groupCount = listGroupsOnCarbon(carbonAtom).length;
  const bonds = listBondsOfCarbon(skeleton, carbonAtom.atomId);
  if (bonds.some(isMultipleBond)) return 'other';
  const linkBonds = bonds.filter(isLinkBond);
  // Besides the C=O, and the OH, NH2 or link that makes it an acid, amide or ester, the carbon
  // has one bond left: to a hydrogen or to a single carbon.
  const hasOneBondLeft = bonds.length - linkBonds.length <= 1;
  if (groupCount === 2 && linkBonds.length === 0 && hasOneBondLeft) {
    if (countHydroxylGroupsOnCarbon(carbonAtom) === 1) return 'carboxylicAcid';
    if (countAminoGroupsOnCarbon(carbonAtom) === 1) return 'amide';
  }
  if (groupCount === 1 && linkBonds.length === 1 && hasOneBondLeft) {
    const farCarbon = findCarbonAtomById(skeleton, otherAtomIdOfBond(linkBonds[0], carbonAtom.atomId));
    if (countCarbonylOxygensOnCarbon(farCarbon) > 0) return 'other';
    return linkAtomOf(linkBonds[0]) === ESTER_LINK_OXYGEN ? 'ester' : 'amide';
  }
  if (groupCount !== 1 || linkBonds.length > 0) return 'other';
  if (countHydrogensOnCarbon(skeleton, carbonAtom.atomId) >= 1) return 'aldehyde';
  return bonds.length === 2 ? 'ketone' : 'other';
}

/** True when a carbon is the C of an aldehyde group, -CHO. */
export function isAldehydeCarbon(skeleton, carbonAtom) {
  return describeCarbonylCarbon(skeleton, carbonAtom) === 'aldehyde';
}

/** True when the molecule has at least one aldehyde group, -CHO. */
export function hasAldehydeGroup(skeleton) {
  return skeleton.carbonAtoms.some((carbonAtom) => isAldehydeCarbon(skeleton, carbonAtom));
}

/** True when a carbon is the C of a ketone's C=O, joined to two other carbons, as in CH3-CO-CH3. */
export function isKetoneCarbon(skeleton, carbonAtom) {
  return describeCarbonylCarbon(skeleton, carbonAtom) === 'ketone';
}

/** True when the molecule has at least one ketone C=O. */
export function hasKetoneGroup(skeleton) {
  return skeleton.carbonAtoms.some((carbonAtom) => isKetoneCarbon(skeleton, carbonAtom));
}

/** True when a carbon is the C of a carboxyl group, -COOH. */
export function isCarboxylicAcidCarbon(skeleton, carbonAtom) {
  return describeCarbonylCarbon(skeleton, carbonAtom) === 'carboxylicAcid';
}

/** True when the molecule has at least one carboxyl group, -COOH, so it is a carboxylic acid. */
export function hasCarboxylicAcidGroup(skeleton) {
  return skeleton.carbonAtoms.some((carbonAtom) => isCarboxylicAcidCarbon(skeleton, carbonAtom));
}

/** True when every C=O in the molecule is part of an aldehyde, a ketone, a carboxylic acid, an ester or an amide (or there is none), so none is an acyl halide or the like. */
export function everyCarbonylIsInAnAldehydeKetoneOrAcid(skeleton) {
  return skeleton.carbonAtoms.every((carbonAtom) => describeCarbonylCarbon(skeleton, carbonAtom) !== 'other');
}

/**
 * What the O or NH in the middle of a bond makes:
 *   'ester' or 'amide'  next to the C=O carbon of an ester or amide (see describeCarbonylCarbon),
 *                       as in CH3-CO-O-CH3 and CH3-CO-NH-CH3
 *   'ether'             an O with no C=O next to it, as in CH3-O-CH2-CH3
 *   'amine'             an NH with no C=O next to it: a secondary amine, as in CH3-NH-CH2-CH3
 * null for a bond with nothing in the middle.
 */
export function describeLinkBond(skeleton, bond) {
  if (!isLinkBond(bond)) return null;
  const kinds = [bond.firstAtomId, bond.secondAtomId].map((atomId) => describeCarbonylCarbon(skeleton, findCarbonAtomById(skeleton, atomId)));
  if (kinds.includes('ester')) return 'ester';
  if (kinds.includes('amide')) return 'amide';
  return linkAtomOf(bond) === ESTER_LINK_OXYGEN ? 'ether' : 'amine';
}

/** True when a carbon has an NH2 group that makes an amine rather than an amide, as in CH3-CH2-NH2. */
export function hasAmineGroup(skeleton, carbonAtom) {
  return countAminoGroupsOnCarbon(carbonAtom) > 0 && describeCarbonylCarbon(skeleton, carbonAtom) !== 'amide';
}

/** True when any carbon has a halogen, a hydroxyl group or a C=O. */
export function hasGroups(skeleton) {
  return skeleton.carbonAtoms.some((carbonAtom) => listGroupsOnCarbon(carbonAtom).length > 0);
}

/**
 * Each carbon's 4 bonds are shared between carbons, groups (halogens, OH and C=O) and hydrogens.
 * A double bond, to another carbon or to the O of C=O, uses up 2 of them.
 */
export function countHydrogensOnCarbon(skeleton, atomId) {
  let bondsToCarbon = 0;
  for (const bond of skeleton.carbonCarbonBonds) {
    if (bond.firstAtomId === atomId || bond.secondAtomId === atomId) bondsToCarbon += bondOrderOf(bond);
  }
  const bondsToGroups = listGroupsOnCarbon(findCarbonAtomById(skeleton, atomId)).reduce((total, { symbol }) => total + bondsUsedByGroup(symbol), 0);
  return BONDS_MADE_BY_EVERY_CARBON_ATOM - bondsToCarbon - bondsToGroups;
}

/** A carbon can take another carbon only while it still has a hydrogen to swap out. */
export function carbonHasRoomForAnotherCarbon(skeleton, atomId) {
  return countHydrogensOnCarbon(skeleton, atomId) > 0;
}

/** A group needs a hydrogen to swap out for each bond it makes, so C=O needs two. */
export function carbonHasRoomForGroup(skeleton, atomId, symbol) {
  return countHydrogensOnCarbon(skeleton, atomId) >= bondsUsedByGroup(symbol);
}

/** Changing a group into one that makes more bonds (Cl into C=O) needs a spare hydrogen. */
export function groupCanBeChanged(skeleton, atomId, groupIndex, symbol) {
  const oldSymbol = listGroupsOnCarbon(findCarbonAtomById(skeleton, atomId))[groupIndex].symbol;
  return countHydrogensOnCarbon(skeleton, atomId) >= bondsUsedByGroup(symbol) - bondsUsedByGroup(oldSymbol);
}

/**
 * Adds one carbon atom, optionally bonded to an existing carbon.
 * Returns { updatedSkeleton, newAtomId }.
 */
export function addCarbonAtom(skeleton, { positionX, positionY, bondToAtomId = null }) {
  if (bondToAtomId !== null && !carbonHasRoomForAnotherCarbon(skeleton, bondToAtomId)) {
    throw new Error(`Carbon ${bondToAtomId} already has 4 bonds, so nothing more can bond to it.`);
  }

  const largestExistingAtomId = Math.max(0, ...skeleton.carbonAtoms.map((carbonAtom) => carbonAtom.atomId));
  const newAtomId = largestExistingAtomId + 1;

  const updatedCarbonAtoms = [...skeleton.carbonAtoms, { atomId: newAtomId, positionX, positionY }];
  const updatedCarbonCarbonBonds =
    bondToAtomId === null
      ? skeleton.carbonCarbonBonds
      : [...skeleton.carbonCarbonBonds, { firstAtomId: bondToAtomId, secondAtomId: newAtomId }];

  return {
    updatedSkeleton: { carbonAtoms: updatedCarbonAtoms, carbonCarbonBonds: updatedCarbonCarbonBonds },
    newAtomId,
  };
}

/**
 * A single bond can become a double bond only if each of its carbons still has a hydrogen
 * to give up, because the second bond takes the place of one hydrogen on each carbon.
 */
export function bondCanBecomeDouble(skeleton, firstAtomId, secondAtomId) {
  const bond = findBondBetween(skeleton, firstAtomId, secondAtomId);
  return (
    bond !== undefined &&
    !isDoubleBond(bond) &&
    !isLinkBond(bond) &&
    countHydrogensOnCarbon(skeleton, firstAtomId) > 0 &&
    countHydrogensOnCarbon(skeleton, secondAtomId) > 0
  );
}

/**
 * Turns a single bond into a double bond, or a double bond back into a single bond.
 * Throws if a single bond can't become double (see bondCanBecomeDouble).
 */
export function toggleDoubleBond(skeleton, firstAtomId, secondAtomId) {
  const bondToChange = findBondBetween(skeleton, firstAtomId, secondAtomId);
  if (bondToChange === undefined) {
    throw new Error(`Carbons ${firstAtomId} and ${secondAtomId} are not bonded to each other.`);
  }
  if (!isDoubleBond(bondToChange) && !bondCanBecomeDouble(skeleton, firstAtomId, secondAtomId)) {
    throw new Error(`The bond between carbons ${firstAtomId} and ${secondAtomId} can't become double: a carbon would have more than 4 bonds.`);
  }

  const changedBond = isDoubleBond(bondToChange)
    ? { firstAtomId: bondToChange.firstAtomId, secondAtomId: bondToChange.secondAtomId }
    : { ...bondToChange, bondOrder: 2 };
  return {
    carbonAtoms: skeleton.carbonAtoms,
    carbonCarbonBonds: skeleton.carbonCarbonBonds.map((bond) => (bond === bondToChange ? changedBond : bond)),
  };
}

/**
 * What making the bond from a carbon to one of its groups double (or single again) would do:
 *   'makeDouble'        an OH becomes the O of C=O, which takes the place of one more hydrogen
 *   'makeSingle'        the O of C=O becomes an OH again, giving the carbon its hydrogen back
 *   'cannotMakeDouble'  an OH on a carbon with no hydrogen left to give up
 *   'notOxygen'         a halogen or NH2: only a bond to O can be double here
 */
export function chooseGroupBondChange(skeleton, atomId, groupIndex) {
  const group = listGroupsOnCarbon(findCarbonAtomById(skeleton, atomId))[groupIndex];
  if (group?.symbol === CARBONYL_OXYGEN) return 'makeSingle';
  if (group?.symbol !== HYDROXYL_GROUP) return 'notOxygen';
  return groupCanBeChanged(skeleton, atomId, groupIndex, CARBONYL_OXYGEN) ? 'makeDouble' : 'cannotMakeDouble';
}

/**
 * Makes the bond from a carbon to its OH double, giving C=O, or the bond of C=O single again,
 * giving OH. Throws for any other group, or when the carbon has no hydrogen to give up.
 */
export function toggleGroupDoubleBond(skeleton, atomId, groupIndex) {
  const change = chooseGroupBondChange(skeleton, atomId, groupIndex);
  if (change !== 'makeDouble' && change !== 'makeSingle') {
    throw new Error(`The bond from carbon ${atomId} to its group ${groupIndex} can't be made double or single (${change}).`);
  }
  return changeGroupOnCarbon(skeleton, atomId, groupIndex, change === 'makeDouble' ? CARBONYL_OXYGEN : HYDROXYL_GROUP);
}

/** The skeleton with one carbon's groups replaced by a new list (none if it is empty). */
function withGroupsOnCarbon(skeleton, atomId, groups) {
  return {
    carbonAtoms: skeleton.carbonAtoms.map((carbonAtom) => {
      if (carbonAtom.atomId !== atomId) return carbonAtom;
      const { groups: oldGroups, ...carbonWithoutGroups } = carbonAtom;
      return groups.length > 0 ? { ...carbonWithoutGroups, groups } : carbonWithoutGroups;
    }),
    carbonCarbonBonds: skeleton.carbonCarbonBonds,
  };
}

/**
 * Puts an O or NH (linkAtom) into the middle of a single bond, or, given null, takes it out
 * again so the carbons are joined directly. Throws for a double bond.
 */
export function setLinkAtomOfBond(skeleton, firstAtomId, secondAtomId, linkAtom) {
  const bondToChange = findBondBetween(skeleton, firstAtomId, secondAtomId);
  if (bondToChange === undefined || isDoubleBond(bondToChange)) {
    throw new Error(`Carbons ${firstAtomId} and ${secondAtomId} have no single bond for ${linkAtom} to go in.`);
  }
  const { firstAtomId: bondFirstAtomId, secondAtomId: bondSecondAtomId } = bondToChange;
  const changedBond = linkAtom === null ? { firstAtomId: bondFirstAtomId, secondAtomId: bondSecondAtomId } : { firstAtomId: bondFirstAtomId, secondAtomId: bondSecondAtomId, linkAtom };
  return {
    carbonAtoms: skeleton.carbonAtoms,
    carbonCarbonBonds: skeleton.carbonCarbonBonds.map((bond) => (bond === bondToChange ? changedBond : bond)),
  };
}

/**
 * Swaps one of a carbon's hydrogens for a group (a halogen or OH), or two of them for the O
 * of C=O, drawn in the given place (see placeAtomsAroundCarbons.js). Throws if the carbon
 * doesn't have enough hydrogens left.
 */
export function addGroupToCarbon(skeleton, atomId, symbol, place) {
  if (!carbonHasRoomForGroup(skeleton, atomId, symbol)) {
    throw new Error(`Carbon ${atomId} doesn't have enough hydrogens left for ${symbol} to replace.`);
  }
  const groups = listGroupsOnCarbon(findCarbonAtomById(skeleton, atomId));
  return withGroupsOnCarbon(skeleton, atomId, [...groups, place === undefined ? { symbol } : { symbol, place }]);
}

/**
 * Swaps a carbon's group (given by its position in the carbon's list) for a different group, in
 * the same place. Throws if the new group makes more bonds and the carbon has no hydrogen to give up.
 */
export function changeGroupOnCarbon(skeleton, atomId, groupIndex, symbol) {
  if (!groupCanBeChanged(skeleton, atomId, groupIndex, symbol)) {
    throw new Error(`Carbon ${atomId} has no hydrogen left for ${symbol} to replace.`);
  }
  const groups = listGroupsOnCarbon(findCarbonAtomById(skeleton, atomId));
  return withGroupsOnCarbon(
    skeleton,
    atomId,
    groups.map((group, index) => (index === groupIndex ? { ...group, symbol } : group)),
  );
}

/** Takes a group off a carbon: a hydrogen goes back in its place (two for the O of C=O). */
export function removeGroupFromCarbon(skeleton, atomId, groupIndex) {
  const groups = listGroupsOnCarbon(findCarbonAtomById(skeleton, atomId));
  return withGroupsOnCarbon(
    skeleton,
    atomId,
    groups.filter((_, index) => index !== groupIndex),
  );
}

/**
 * The ids of every carbon reached from farAtomId without going back through nearAtomId:
 * the carbon at the far end of the bond, and everything attached beyond it.
 */
export function listCarbonIdsBeyondBond(skeleton, nearAtomId, farAtomId) {
  const reachedAtomIds = new Set([farAtomId]);
  const atomIdsToVisit = [farAtomId];
  while (atomIdsToVisit.length > 0) {
    const currentAtomId = atomIdsToVisit.pop();
    for (const neighbourId of listNeighbourCarbonIds(skeleton, currentAtomId)) {
      if (neighbourId !== nearAtomId && !reachedAtomIds.has(neighbourId)) {
        reachedAtomIds.add(neighbourId);
        atomIdsToVisit.push(neighbourId);
      }
    }
  }
  return reachedAtomIds;
}

function removeCarbonAtoms(skeleton, atomIdsToRemove) {
  return {
    carbonAtoms: skeleton.carbonAtoms.filter((carbonAtom) => !atomIdsToRemove.has(carbonAtom.atomId)),
    carbonCarbonBonds: skeleton.carbonCarbonBonds.filter(
      (bond) => !atomIdsToRemove.has(bond.firstAtomId) && !atomIdsToRemove.has(bond.secondAtomId),
    ),
  };
}

/**
 * Removes one carbon. Anything that would be left hanging on its own is removed too:
 * of the branches attached to the carbon, only the one with the most carbons is kept,
 * so what is left is still a single molecule. (A carbon at the end of a chain has just
 * one branch, so only that carbon goes.)
 */
export function removeCarbonAndItsSmallerBranches(skeleton, atomId) {
  return removeCarbonAtoms(skeleton, listCarbonIdsRemovedWithCarbon(skeleton, atomId));
}

/** The ids of the carbons removeCarbonAndItsSmallerBranches takes away: the carbon, and every branch on it but the largest. */
export function listCarbonIdsRemovedWithCarbon(skeleton, atomId) {
  const branches = listNeighbourCarbonIds(skeleton, atomId).map((neighbourId) => listCarbonIdsBeyondBond(skeleton, atomId, neighbourId));
  const largestBranch = branches.reduce((largestSoFar, branch) => (branch.size > largestSoFar.size ? branch : largestSoFar), new Set());

  const atomIdsToRemove = new Set(skeleton.carbonAtoms.map((carbonAtom) => carbonAtom.atomId));
  for (const keptAtomId of largestBranch) atomIdsToRemove.delete(keptAtomId);
  return atomIdsToRemove;
}

/**
 * Cuts a bond and removes the side with fewer carbons.
 * If both sides are the same size, the side of atomIdToRemoveIfEven goes.
 * A bond in a ring has no sides, as the ring holds the molecule together without it, so
 * only the bond goes and the ring is opened.
 */
export function removeSmallerSideOfBond(skeleton, firstAtomId, secondAtomId, atomIdToRemoveIfEven) {
  if (isRingBond(skeleton, firstAtomId, secondAtomId)) return removeBond(skeleton, firstAtomId, secondAtomId);
  return removeCarbonAtoms(skeleton, listCarbonIdsRemovedWithBond(skeleton, firstAtomId, secondAtomId, atomIdToRemoveIfEven));
}

/** The ids of the carbons removeSmallerSideOfBond takes away: none for a bond in a ring, which only opens the ring. */
export function listCarbonIdsRemovedWithBond(skeleton, firstAtomId, secondAtomId, atomIdToRemoveIfEven) {
  if (isRingBond(skeleton, firstAtomId, secondAtomId)) return new Set();
  const firstSide = listCarbonIdsBeyondBond(skeleton, secondAtomId, firstAtomId);
  const secondSide = listCarbonIdsBeyondBond(skeleton, firstAtomId, secondAtomId);
  if (firstSide.size < secondSide.size) return firstSide;
  if (secondSide.size < firstSide.size) return secondSide;
  return firstSide.has(atomIdToRemoveIfEven) ? firstSide : secondSide;
}

/**
 * Everything erasing one part of the molecule would take away, so it can be shown before it
 * happens. The part is one of:
 *   { kind: 'carbon', atomId }       removeCarbonAndItsSmallerBranches
 *   { kind: 'bond', firstAtomId, secondAtomId, atomIdToRemoveIfEven }   removeSmallerSideOfBond
 *   { kind: 'group', atomId, groupIndex }   removeGroupFromCarbon (a hydrogen goes back in its place)
 *   { kind: 'linkAtom', firstAtomId, secondAtomId }   the O or NH taken out of a bond (setLinkAtomOfBond with null)
 * Returns { carbonAtomIds, bonds, groups, linkAtoms }:
 *   carbonAtomIds  the carbons removed, with the hydrogens on them
 *   bonds          [{ firstAtomId, secondAtomId }] the bonds removed, with any O or NH in them
 *   groups         [{ atomId, groupIndex }] the groups removed, including every group on a removed carbon
 *   linkAtoms      [{ firstAtomId, secondAtomId }] the bonds that stay but lose their O or NH
 * or null when the part isn't in the skeleton (for example, it has just been erased).
 */
export function listWhatErasingRemoves(skeleton, part) {
  const removal = { carbonAtomIds: [], bonds: [], groups: [], linkAtoms: [] };
  if (part.kind === 'group') {
    const carbonAtom = findCarbonAtomById(skeleton, part.atomId);
    if (carbonAtom === undefined || listGroupsOnCarbon(carbonAtom)[part.groupIndex] === undefined) return null;
    return { ...removal, groups: [{ atomId: part.atomId, groupIndex: part.groupIndex }] };
  }
  if (part.kind === 'linkAtom') {
    const bond = findBondBetween(skeleton, part.firstAtomId, part.secondAtomId);
    if (bond === undefined || !isLinkBond(bond)) return null;
    return { ...removal, linkAtoms: [{ firstAtomId: bond.firstAtomId, secondAtomId: bond.secondAtomId }] };
  }

  let removedAtomIds;
  let cutBond = null;
  if (part.kind === 'carbon') {
    if (findCarbonAtomById(skeleton, part.atomId) === undefined) return null;
    removedAtomIds = listCarbonIdsRemovedWithCarbon(skeleton, part.atomId);
  } else if (part.kind === 'bond') {
    cutBond = findBondBetween(skeleton, part.firstAtomId, part.secondAtomId);
    if (cutBond === undefined) return null;
    removedAtomIds = listCarbonIdsRemovedWithBond(skeleton, part.firstAtomId, part.secondAtomId, part.atomIdToRemoveIfEven);
  } else {
    throw new Error(`Nothing of kind ${part.kind} can be erased.`);
  }

  const removedBonds = skeleton.carbonCarbonBonds.filter(
    (bond) => bond === cutBond || removedAtomIds.has(bond.firstAtomId) || removedAtomIds.has(bond.secondAtomId),
  );
  const removedCarbons = skeleton.carbonAtoms.filter((carbonAtom) => removedAtomIds.has(carbonAtom.atomId));
  return {
    ...removal,
    carbonAtomIds: removedCarbons.map(({ atomId }) => atomId),
    bonds: removedBonds.map(({ firstAtomId, secondAtomId }) => ({ firstAtomId, secondAtomId })),
    groups: removedCarbons.flatMap((carbonAtom) => listGroupsOnCarbon(carbonAtom).map((_, groupIndex) => ({ atomId: carbonAtom.atomId, groupIndex }))),
  };
}

/**
 * Totals for the molecular formula, with the hydrogens worked out from the skeleton. Each OH
 * group adds an oxygen and a hydrogen, each C=O an oxygen, each NH2 a nitrogen and two
 * hydrogens, and each O or NH in the middle of a bond an oxygen, or a nitrogen and a hydrogen.
 * For 2-chloroethan-1-ol:
 *   { carbonCount: 2, hydrogenCount: 5, oxygenCount: 1, nitrogenCount: 0, halogenCounts: { F: 0, Cl: 1, Br: 0, I: 0 } }
 */
export function countAtomsInMolecule(skeleton) {
  let hydrogenCount = 0;
  let oxygenCount = 0;
  let nitrogenCount = 0;
  for (const bond of skeleton.carbonCarbonBonds) {
    if (linkAtomOf(bond) === ESTER_LINK_OXYGEN) oxygenCount += 1;
    if (linkAtomOf(bond) === AMIDE_LINK_NITROGEN) {
      nitrogenCount += 1;
      hydrogenCount += 1;
    }
  }
  const halogenCounts = Object.fromEntries(HALOGEN_SYMBOLS.map((elementSymbol) => [elementSymbol, 0]));
  for (const carbonAtom of skeleton.carbonAtoms) {
    hydrogenCount += countHydrogensOnCarbon(skeleton, carbonAtom.atomId);
    for (const { symbol } of listGroupsOnCarbon(carbonAtom)) {
      if (symbol === HYDROXYL_GROUP) {
        oxygenCount += 1;
        hydrogenCount += 1;
      } else if (symbol === CARBONYL_OXYGEN) {
        oxygenCount += 1;
      } else if (symbol === AMINO_GROUP) {
        nitrogenCount += 1;
        hydrogenCount += 2;
      } else {
        halogenCounts[symbol] += 1;
      }
    }
  }
  return { carbonCount: skeleton.carbonAtoms.length, hydrogenCount, oxygenCount, nitrogenCount, halogenCounts };
}

/** True when every carbon is joined, through other carbons, to every other: one molecule, not separate pieces. */
export function isSkeletonOneMolecule(skeleton) {
  if (isSkeletonEmpty(skeleton)) return false;
  const firstAtomId = skeleton.carbonAtoms[0].atomId;
  return listCarbonIdsBeyondBond(skeleton, null, firstAtomId).size === skeleton.carbonAtoms.length;
}

/**
 * How many rings one molecule has. A molecule with no rings always has exactly one fewer
 * bond than atoms, and each bond more than that closes a ring: cyclohexane has 6 carbons
 * and 6 bonds, so 1 ring.
 */
export function countRings(skeleton) {
  return skeleton.carbonCarbonBonds.length - skeleton.carbonAtoms.length + 1;
}

/** True when every carbon is joined into a single molecule with no rings. */
export function isSkeletonOneMoleculeWithoutRings(skeleton) {
  return isSkeletonOneMolecule(skeleton) && countRings(skeleton) === 0;
}

/**
 * The bonds that are in a ring: those whose two carbons stay joined when the bond is cut.
 * Found in one pass (a depth-first search that notes, for each carbon, the earliest carbon
 * reachable from below it without going back up the bond it came by; a bond is in no ring
 * when nothing below it reaches back above it).
 */
export function listRingBonds(skeleton) {
  const neighboursById = new Map(skeleton.carbonAtoms.map(({ atomId }) => [atomId, []]));
  for (const bond of skeleton.carbonCarbonBonds) {
    neighboursById.get(bond.firstAtomId).push({ neighbourId: bond.secondAtomId, bond });
    neighboursById.get(bond.secondAtomId).push({ neighbourId: bond.firstAtomId, bond });
  }
  const orderReached = new Map();
  const earliestReachable = new Map();
  const bondsInNoRing = new Set();
  for (const { atomId: startAtomId } of skeleton.carbonAtoms) {
    if (orderReached.has(startAtomId)) continue;
    orderReached.set(startAtomId, orderReached.size);
    earliestReachable.set(startAtomId, orderReached.get(startAtomId));
    const stack = [{ atomId: startAtomId, cameBy: null, nextIndex: 0 }];
    while (stack.length > 0) {
      const top = stack[stack.length - 1];
      const neighbours = neighboursById.get(top.atomId);
      if (top.nextIndex < neighbours.length) {
        const { neighbourId, bond } = neighbours[top.nextIndex++];
        if (bond === top.cameBy) continue;
        if (orderReached.has(neighbourId)) {
          earliestReachable.set(top.atomId, Math.min(earliestReachable.get(top.atomId), orderReached.get(neighbourId)));
          continue;
        }
        orderReached.set(neighbourId, orderReached.size);
        earliestReachable.set(neighbourId, orderReached.get(neighbourId));
        stack.push({ atomId: neighbourId, cameBy: bond, nextIndex: 0 });
        continue;
      }
      stack.pop();
      if (top.cameBy === null) continue;
      const parentAtomId = stack[stack.length - 1].atomId;
      earliestReachable.set(parentAtomId, Math.min(earliestReachable.get(parentAtomId), earliestReachable.get(top.atomId)));
      if (earliestReachable.get(top.atomId) > orderReached.get(parentAtomId)) bondsInNoRing.add(top.cameBy);
    }
  }
  return skeleton.carbonCarbonBonds.filter((bond) => !bondsInNoRing.has(bond));
}

/**
 * The carbons in rings: those with a bond in a ring. A carbon on a chain between two rings is
 * not one of them. An empty set when there is no ring.
 */
export function listAtomIdsInRings(skeleton) {
  return new Set(listRingBonds(skeleton).flatMap(({ firstAtomId, secondAtomId }) => [firstAtomId, secondAtomId]));
}

/**
 * The rings of the molecule, each as its carbons in order round the ring, when every ring is
 * on its own: no carbon is in two rings, as it would be in a fused, bridged or spiro system
 * (bicyclo[2.2.2]octane, spiro[4.5]decane, decalin). Then each ring carbon has exactly two
 * ring bonds.
 *   { rings: [[atomId, ...], ...], hasRingsSharingCarbons: false }
 * When some rings share carbons, rings is empty and hasRingsSharingCarbons is true.
 */
export function listSeparateRings(skeleton) {
  const ringNeighboursById = new Map();
  for (const { firstAtomId, secondAtomId } of listRingBonds(skeleton)) {
    for (const [atomId, neighbourId] of [[firstAtomId, secondAtomId], [secondAtomId, firstAtomId]]) {
      if (!ringNeighboursById.has(atomId)) ringNeighboursById.set(atomId, []);
      ringNeighboursById.get(atomId).push(neighbourId);
    }
  }
  if ([...ringNeighboursById.values()].some((neighbourIds) => neighbourIds.length !== 2)) return { rings: [], hasRingsSharingCarbons: true };
  const rings = [];
  const placed = new Set();
  for (const atomId of ringNeighboursById.keys()) {
    if (placed.has(atomId)) continue;
    const ring = [atomId];
    placed.add(atomId);
    for (;;) {
      const nextAtomId = ringNeighboursById.get(ring[ring.length - 1]).find((neighbourId) => !placed.has(neighbourId));
      if (nextAtomId === undefined) break;
      ring.push(nextAtomId);
      placed.add(nextAtomId);
    }
    rings.push(ring);
  }
  return { rings, hasRingsSharingCarbons: false };
}

/**
 * The carbons of the ring of a molecule with exactly one ring, in order round the ring.
 * Returns an empty list for a molecule without a ring. (For more rings, see listSeparateRings.)
 */
export function listRingAtomIdsInOrder(skeleton) {
  const ringAtomIds = listAtomIdsInRings(skeleton);
  if (ringAtomIds.size === 0) return [];

  const [firstAtomId] = ringAtomIds;
  const orderedAtomIds = [firstAtomId];
  for (;;) {
    const currentAtomId = orderedAtomIds[orderedAtomIds.length - 1];
    const previousAtomId = orderedAtomIds[orderedAtomIds.length - 2];
    const nextAtomId = listNeighbourCarbonIds(skeleton, currentAtomId).find(
      (neighbourId) => ringAtomIds.has(neighbourId) && neighbourId !== previousAtomId && neighbourId !== firstAtomId,
    );
    if (nextAtomId === undefined) return orderedAtomIds;
    orderedAtomIds.push(nextAtomId);
  }
}

/** True when the bond is part of a ring: cutting it leaves the molecule in one piece. */
export function isRingBond(skeleton, firstAtomId, secondAtomId) {
  const reachedAtomIds = new Set([secondAtomId]);
  const atomIdsToVisit = [secondAtomId];
  while (atomIdsToVisit.length > 0) {
    const currentAtomId = atomIdsToVisit.pop();
    for (const neighbourId of listNeighbourCarbonIds(skeleton, currentAtomId)) {
      const isTheBondItself = currentAtomId === secondAtomId && neighbourId === firstAtomId;
      if (isTheBondItself || reachedAtomIds.has(neighbourId)) continue;
      if (neighbourId === firstAtomId) return true;
      reachedAtomIds.add(neighbourId);
      atomIdsToVisit.push(neighbourId);
    }
  }
  return false;
}

/**
 * Joins two carbons already in the drawing with a new single bond. When they are already
 * part of the same molecule, this closes a ring. Throws if they are already bonded, or one
 * of them has no hydrogen left to give up.
 */
export function bondTwoCarbons(skeleton, firstAtomId, secondAtomId) {
  if (firstAtomId === secondAtomId || findBondBetween(skeleton, firstAtomId, secondAtomId) !== undefined) {
    throw new Error(`Carbons ${firstAtomId} and ${secondAtomId} can't be given a new bond to each other.`);
  }
  if (!carbonHasRoomForAnotherCarbon(skeleton, firstAtomId) || !carbonHasRoomForAnotherCarbon(skeleton, secondAtomId)) {
    throw new Error(`Carbon ${firstAtomId} or ${secondAtomId} already has 4 bonds.`);
  }
  return { carbonAtoms: skeleton.carbonAtoms, carbonCarbonBonds: [...skeleton.carbonCarbonBonds, { firstAtomId, secondAtomId }] };
}

/** Takes away one bond, leaving both carbons in place. Used to open a ring, as the molecule stays in one piece. */
export function removeBond(skeleton, firstAtomId, secondAtomId) {
  const bondToRemove = findBondBetween(skeleton, firstAtomId, secondAtomId);
  return { carbonAtoms: skeleton.carbonAtoms, carbonCarbonBonds: skeleton.carbonCarbonBonds.filter((bond) => bond !== bondToRemove) };
}

/**
 * True for an alcohol that doesn't last: one with two OH groups on the same carbon (it loses
 * water to give an aldehyde or ketone, as methanediol gives formaldehyde), or with an OH group on
 * a C=C carbon (an "enol", which turns into an aldehyde or ketone, as ethenol gives
 * acetaldehyde), or on a C≡C carbon (an "ynol", which turns into a ketene). They are not
 * listed as isomers here.
 */
export function isUnstableAlcohol(skeleton) {
  const carbonsInDoubleBonds = new Set(
    skeleton.carbonCarbonBonds.filter(isMultipleBond).flatMap(({ firstAtomId, secondAtomId }) => [firstAtomId, secondAtomId]),
  );
  return skeleton.carbonAtoms.some((carbonAtom) => {
    const hydroxylCount = countHydroxylGroupsOnCarbon(carbonAtom);
    return hydroxylCount >= 2 || (hydroxylCount === 1 && carbonsInDoubleBonds.has(carbonAtom.atomId));
  });
}
