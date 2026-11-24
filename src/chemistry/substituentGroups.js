/**
 * Substituent groups on their own: reading a group's formula or prefix, and naming a group
 * with its preferred prefix, such as CH3-CH2-O– (ethoxy) or –CH(CH3)2 (propan-2-yl).
 *
 * A substituent group is what is left of a molecule when one or more of its hydrogens have
 * been taken away, leaving "free valences": the bonds by which it is joined to the rest of a
 * molecule (P-29.1). The Blue Book writes them as dashes at the end of the formula:
 *   CH3–        methyl          one free valence, a single bond
 *   CH2=        methylidene     a double bond
 *   CH3-C≡      ethylidyne      a triple bond
 *   –CH2-CH2–   ethane-1,2-diyl two free valences
 *
 * Shape of a group:
 *   {
 *     carbonSkeleton: { carbonAtoms: [...], carbonCarbonBonds: [...] },
 *     standInAtomIds: [7],
 *   }
 * The group is stored as a skeleton (see carbonSkeleton.js) with one extra carbon for each free
 * valence: a "stand-in" for the rest of the molecule the group is joined to. The bond from a
 * stand-in to the group is the free valence: a single bond for "yl", a double bond for
 * "ylidene", a triple bond for "ylidyne", or a bond with an O or NH in it for ethoxy, methylamino and the like. A group with
 * no carbon of its own, such as –OH or =O, is stored as a group on its stand-in. A stand-in has
 * nothing else on it, and isn't part of the group: it only shows where the group is joined.
 * This lets a group be named by the same code that names the side chains of a whole molecule.
 *
 * The prefixes (P-29, P-61 to P-66):
 *   - fluoro, chloro, bromo, iodo, hydroxy, amino, oxo for a group of one atom (P-61.3, P-63.1.2,
 *     P-62.1.1, P-64.6)
 *   - a carbon chain is named by nameAnySideChain (see nameBranchedSideChain.js): methyl,
 *     propan-2-yl, 2-methylpropyl, tert-butyl, but-2-en-1-ylidene, chloromethyl, acetyl,
 *     propanoyl, formyl, carboxy, 2-carboxyethyl, ethynyl, prop-2-yn-1-yl ... (P-29.2, P-29.6,
 *     P-32.1.1, P-46, P-65.1.7, P-66.6.1.3)
 *   - joined by a triple bond, the same name with "yl" changed to "ylidyne": methylidyne,
 *     ethylidyne, butylidyne, 2-chloroethylidyne (P-29.2). The carbon with the free valence is
 *     always the end of the chain, so it is always carbon 1 and its locant is left out.
 *   - a saturated ring with nothing on it: cyclopropyl, cyclohexyl (P-29.2)
 *   - a chain or ring joined through an O: methoxy, ethoxy, propoxy, butoxy and tert-butoxy, which
 *     are contracted names that can still have prefixes (2-methylpropoxy), and otherwise the
 *     group's name and "oxy": pentyloxy, (propan-2-yl)oxy, acetyloxy (P-63.2.2.2, P-65.6.3.2.3)
 *   - joined through an NH: methylamino, (propan-2-yl)amino (P-62.2.1.1.1)
 *   - two free valences on the ends of an unbranched chain: methylene for –CH2– (P-29.6.2.3),
 *     ethane-1,2-diyl, propane-1,3-diyl, 1,2-dichloroethane-1,2-diyl, ethyne-1,2-diyl (P-29.2,
 *     P-32.1.1), and with a C=O at
 *     each end, carbonyl for –CO– (P-65.2.1.5), oxalyl for –CO-CO–, propanedioyl, butanedioyl ...
 *     (P-65.1.7.2.1, P-65.1.7.3.1)
 *
 * Not covered yet (the functions here say so with a message rather than giving a wrong name):
 * rings with anything on them or joined into a chain, two free
 * valences anywhere but the two ends of an unbranched chain, and any element other than C, H,
 * O, N and the halogens, as the skeleton can't hold them.
 */

import {
  AMINO_GROUP,
  CARBONYL_OXYGEN,
  HYDROXYL_GROUP,
  bondOrderOf,
  countCarbonylOxygensOnCarbon,
  countHydrogensOnCarbon,
  describeCarbonylCarbon,
  findBondBetween,
  findCarbonAtomById,
  isDoubleBond,
  isHalogenSymbol,
  isTripleBond,
  linkAtomOf,
  listAtomIdsInRings,
  listBondsOfCarbon,
  listCarbonIdsBeyondBond,
  listGroupsOnCarbon,
  listNeighbourCarbonIds,
  otherAtomIdOfBond,
} from './carbonSkeleton.js';
import {
  AMINO_PREFIX,
  HYDROXY_PREFIX,
  OXO_PREFIX,
  PREFIX_BY_HALOGEN,
  alkylaminoPrefix,
  compareSubstituentNamesAlphanumerically,
  cycloalkylSubstituentName,
  mainChainName,
  writeSideChainPrefixes,
} from './alkaneNamingVocabulary.js';
import { nameAnySideChain } from './nameBranchedSideChain.js';
import { prefixForGroupOnSideChain } from './nameSideChain.js';
import { describeEveryDoubleBond } from './doubleBondConfiguration.js';
import { readStructuralFormula } from './readStructuralFormula.js';
import { interpretOmniboxText } from './interpretOmniboxText.js';
import { message } from '../languages/translate.js';

/** The contracted R-O– prefixes (P-63.2.2.2), by the name of R. Unlike the others, tert-butoxy can't have prefixes. */
const CONTRACTED_OXY_PREFIXES = new Map([
  ['methyl', 'methoxy'],
  ['ethyl', 'ethoxy'],
  ['propyl', 'propoxy'],
  ['butyl', 'butoxy'],
  ['tert-butyl', 'tert-butoxy'],
]);

/** The group's name, in brackets when it has locants or brackets of its own: "(propan-2-yl)oxy", but "pentyloxy". */
function enclosedIfNeeded(groupName) {
  if (!/[\d(]/.test(groupName)) return groupName;
  if (!groupName.includes('(')) return `(${groupName})`;
  return groupName.includes('[') ? `{${groupName}}` : `[${groupName}]`;
}

/**
 * The prefix for R-O– (P-63.2.2.2), from the naming of R as a side chain: "methyl" -> "methoxy",
 * "2-methylpropyl" -> "2-methylpropoxy", "pentyl" -> "pentyloxy", "propan-2-yl" -> "(propan-2-yl)oxy",
 * "acetyl" -> "acetyloxy".
 */
export function oxyPrefixForGroup({ substituentName, sideChain }) {
  const contracted = CONTRACTED_OXY_PREFIXES.get(substituentName);
  if (contracted) return contracted;
  // methoxy, ethoxy, propoxy and butoxy can have prefixes of their own: 2-chloroethoxy, 2-methylpropoxy.
  const parentName = sideChain?.parentName;
  if (parentName && parentName !== 'tert-butyl' && CONTRACTED_OXY_PREFIXES.has(parentName) && ['substituted', 'branched'].includes(sideChain.kind)) {
    return substituentName.slice(0, -parentName.length) + CONTRACTED_OXY_PREFIXES.get(parentName);
  }
  return `${enclosedIfNeeded(substituentName)}oxy`;
}

/** The prefix for a group of one atom on its stand-in: chloro, hydroxy, amino, oxo. */
function prefixForOneAtomGroup({ symbol }) {
  if (symbol === CARBONYL_OXYGEN) return OXO_PREFIX;
  if (symbol === HYDROXYL_GROUP) return HYDROXY_PREFIX;
  if (symbol === AMINO_GROUP) return AMINO_PREFIX;
  if (isHalogenSymbol(symbol)) return PREFIX_BY_HALOGEN[symbol];
  return prefixForGroupOnSideChain({ symbol });
}

const notNameable = (key, values) => ({ isNameable: false, reasonNotNameable: message(key, values) });

/** What hangs off a stand-in: its one group, or its one bond. null when there isn't exactly one. */
function describeAttachment(skeleton, standInAtomId) {
  const groups = listGroupsOnCarbon(findCarbonAtomById(skeleton, standInAtomId));
  const bonds = listBondsOfCarbon(skeleton, standInAtomId);
  if (groups.length + bonds.length !== 1) return null;
  if (groups.length === 1) return { group: groups[0] };
  return { bond: bonds[0], atomId: otherAtomIdOfBond(bonds[0], standInAtomId) };
}

/** Names the carbons beyond a bond from a stand-in (or from an O or NH): a ring or a chain. */
function nameCarbonsBeyond(skeleton, atomId, fromAtomId, isJoinedByDoubleBond, configurations) {
  const ringAtomIds = listAtomIdsInRings(skeleton);
  const beyond = listCarbonIdsBeyondBond(skeleton, fromAtomId, atomId);
  if ([...beyond].some((id) => ringAtomIds.has(id))) {
    const isPlainRing =
      !isJoinedByDoubleBond &&
      ringAtomIds.has(atomId) &&
      [...beyond].every((id) => ringAtomIds.has(id) && listGroupsOnCarbon(findCarbonAtomById(skeleton, id)).length === 0) &&
      !skeleton.carbonCarbonBonds.some((bond) => (isDoubleBond(bond) || isTripleBond(bond) || linkAtomOf(bond)) && beyond.has(bond.firstAtomId) && beyond.has(bond.secondAtomId));
    if (!isPlainRing) return notNameable('substituentGroups.ringNotCovered');
    return { substituentName: cycloalkylSubstituentName(beyond.size) };
  }
  if (skeleton.carbonCarbonBonds.some((bond) => linkAtomOf(bond) && beyond.has(bond.firstAtomId) && beyond.has(bond.secondAtomId))) {
    return notNameable('substituentGroups.linkInsideGroupNotCovered');
  }
  // A C=O that isn't in an aldehyde, ketone, acid or amide group, as in Cl-CO– (carbonochloridoyl).
  if ([...beyond].some((id) => describeCarbonylCarbon(skeleton, findCarbonAtomById(skeleton, id)) === 'other')) {
    return notNameable('substituentGroups.carbonylNotCovered');
  }
  return nameAnySideChain(skeleton, atomId, fromAtomId, isJoinedByDoubleBond, configurations);
}

/** A group with one free valence. */
function nameGroupWithOneFreeValence(skeleton, standInAtomId) {
  const attachment = describeAttachment(skeleton, standInAtomId);
  if (!attachment) return notNameable('substituentGroups.notOneGroup');
  if (attachment.group) {
    const prefix = prefixForOneAtomGroup(attachment.group);
    return prefix ? { isNameable: true, prefix } : notNameable('substituentGroups.groupNotCovered');
  }
  const { bond, atomId } = attachment;
  const linkAtom = linkAtomOf(bond);
  // Joined by a triple bond: the carbon is the end of its chain, so the group is named as if it
  // were joined by a single bond, with "yl" made "ylidyne" (P-29.2): ethyl, ethylidyne.
  if (linkAtom === null && isTripleBond(bond)) {
    const named = nameCarbonsBeyond(skeleton, atomId, standInAtomId, false, describeEveryDoubleBond(skeleton));
    if (named.reasonNotNameable) return { isNameable: false, reasonNotNameable: named.reasonNotNameable };
    if (!named.substituentName.endsWith('yl')) return notNameable('substituentGroups.freeValencesNotCovered');
    return { isNameable: true, prefix: `${named.substituentName}idyne` };
  }
  // Through an O or NH, the group beyond is named as if it were joined straight to the stand-in,
  // so a C=O next to the O is an acyl group (acetyloxy, formyloxy) rather than part of an ester.
  const { linkAtom: _linkAtom, ...plainBond } = bond;
  const named = nameCarbonsBeyond(
    linkAtom === null ? skeleton : { ...skeleton, carbonCarbonBonds: skeleton.carbonCarbonBonds.map((other) => (other === bond ? plainBond : other)) },
    atomId,
    standInAtomId,
    linkAtom === null && bondOrderOf(bond) === 2,
    describeEveryDoubleBond(skeleton),
  );
  if (named.reasonNotNameable) return { isNameable: false, reasonNotNameable: named.reasonNotNameable };
  if (linkAtom === 'O') return { isNameable: true, prefix: oxyPrefixForGroup(named) };
  if (linkAtom === 'NH') return { isNameable: true, prefix: alkylaminoPrefix(named.substituentName) };
  return { isNameable: true, prefix: named.substituentName };
}

/**
 * A group with two free valences, one at each end of an unbranched chain: methylene,
 * ethane-1,2-diyl, carbonyl, oxalyl, butanedioyl ...
 */
function nameGroupWithTwoFreeValences(skeleton, [firstStandInId, secondStandInId]) {
  const first = describeAttachment(skeleton, firstStandInId);
  const second = describeAttachment(skeleton, secondStandInId);
  if (!first?.bond || !second?.bond) return notNameable('substituentGroups.freeValencesNotCovered');
  if ([first, second].some(({ bond }) => linkAtomOf(bond) || isDoubleBond(bond) || isTripleBond(bond))) return notNameable('substituentGroups.freeValencesNotCovered');

  // The chain from one end to the other, which must be every carbon of the group.
  const chain = [first.atomId];
  let previous = firstStandInId;
  while (chain[chain.length - 1] !== second.atomId) {
    const current = chain[chain.length - 1];
    const next = listNeighbourCarbonIds(skeleton, current).filter((id) => id !== previous && id !== firstStandInId && id !== secondStandInId);
    if (next.length !== 1) return notNameable('substituentGroups.freeValencesNotCovered');
    previous = current;
    chain.push(next[0]);
  }
  const standIns = new Set([firstStandInId, secondStandInId]);
  if (skeleton.carbonAtoms.length !== chain.length + 2 || skeleton.carbonCarbonBonds.some((bond) => linkAtomOf(bond) && !standIns.has(bond.firstAtomId) && !standIns.has(bond.secondAtomId))) {
    return notNameable('substituentGroups.freeValencesNotCovered');
  }
  if (listAtomIdsInRings(skeleton).size > 0) return notNameable('substituentGroups.ringNotCovered');

  const carbonAtoms = chain.map((atomId) => findCarbonAtomById(skeleton, atomId));
  const isAcylEnd = (carbonAtom) => countCarbonylOxygensOnCarbon(carbonAtom) === 1;
  const isDiacyl = isAcylEnd(carbonAtoms[0]) && isAcylEnd(carbonAtoms[carbonAtoms.length - 1]);

  // Each way round the chain, with what the rules for low locants compare (P-31.1.4): the
  // multiple bonds first, then the double bonds among them, then the prefixes, then the prefix
  // cited first.
  const candidates = [chain, [...chain].reverse()].map((ordered) => {
    const doubleBondLocants = [];
    const tripleBondLocants = [];
    for (let index = 0; index + 1 < ordered.length; index++) {
      const bond = findBondBetween(skeleton, ordered[index], ordered[index + 1]);
      if (isDoubleBond(bond)) doubleBondLocants.push(index + 1);
      if (isTripleBond(bond)) tripleBondLocants.push(index + 1);
    }
    const multipleBondLocants = [...doubleBondLocants, ...tripleBondLocants].sort((a, b) => a - b);
    const prefixes = [];
    ordered.forEach((atomId, index) => {
      const isEndOfDiacyl = isDiacyl && (index === 0 || index === ordered.length - 1);
      for (const group of listGroupsOnCarbon(findCarbonAtomById(skeleton, atomId))) {
        if (group.symbol === CARBONYL_OXYGEN && isEndOfDiacyl) continue;
        prefixes.push({ locant: index + 1, substituentName: prefixForOneAtomGroup(group) });
      }
    });
    const prefixLocants = prefixes.map(({ locant }) => locant).sort((a, b) => a - b);
    const citedLocants = [...prefixes]
      .sort((a, b) => compareSubstituentNamesAlphanumerically(a.substituentName, b.substituentName) || a.locant - b.locant)
      .map(({ locant }) => locant);
    return { ordered, doubleBondLocants, tripleBondLocants, multipleBondLocants, prefixes, prefixLocants, citedLocants };
  });
  const compareLists = (a, b) => {
    for (let index = 0; index < Math.min(a.length, b.length); index++) if (a[index] !== b[index]) return a[index] - b[index];
    return 0;
  };
  candidates.sort(
    (a, b) =>
      compareLists(a.multipleBondLocants, b.multipleBondLocants) ||
      compareLists(a.doubleBondLocants, b.doubleBondLocants) ||
      compareLists(a.prefixLocants, b.prefixLocants) ||
      compareLists(a.citedLocants, b.citedLocants),
  );
  const { doubleBondLocants, tripleBondLocants, prefixes } = candidates[0];
  const chainName = () => mainChainName(carbonCount, doubleBondLocants, true, [], { tripleBondLocants });
  if (prefixes.some(({ substituentName }) => !substituentName)) return notNameable('substituentGroups.groupNotCovered');
  const carbonCount = chain.length;

  if (isDiacyl) {
    if (prefixes.length > 0 && carbonCount <= 2) return notNameable('substituentGroups.freeValencesNotCovered');
    if (carbonCount === 1) return { isNameable: true, prefix: 'carbonyl' };
    if (carbonCount === 2) return { isNameable: true, prefix: 'oxalyl' };
    // The acid's name, with "dioic acid" changed to "dioyl" (P-65.1.7.3.1): butanedioyl, but-2-enedioyl.
    return { isNameable: true, prefix: writeSideChainPrefixes(prefixes) + chainName() + 'dioyl' };
  }
  if (carbonCount === 1) {
    if (prefixes.length > 0) return notNameable('substituentGroups.freeValencesNotCovered');
    return { isNameable: true, prefix: 'methylene' };
  }
  // The chain's name with its locants for the free valences (P-29.2 (2)): ethane-1,2-diyl, ethene-1,2-diyl.
  return { isNameable: true, prefix: `${writeSideChainPrefixes(prefixes)}${chainName()}-1,${carbonCount}-diyl` };
}

/**
 * The preferred prefix of a substituent group (see the top of this file). Returns
 *   { isNameable: true, prefix: 'propan-2-yl' }
 * or { isNameable: false, reasonNotNameable }, a message saying what isn't covered yet.
 */
export function nameSubstituentGroup({ carbonSkeleton, standInAtomIds }) {
  if (standInAtomIds.length === 1) return nameGroupWithOneFreeValence(carbonSkeleton, standInAtomIds[0]);
  if (standInAtomIds.length === 2) return nameGroupWithTwoFreeValences(carbonSkeleton, standInAtomIds);
  return notNameable('substituentGroups.freeValencesNotCovered');
}

const MARKER_HALOGENS = [
  { symbol: 'I', prefix: 'iodo', inFormula: /I/, inPrefix: /iod/ },
  { symbol: 'Br', prefix: 'bromo', inFormula: /Br/i, inPrefix: /brom/ },
  { symbol: 'Cl', prefix: 'chloro', inFormula: /Cl/i, inPrefix: /chlor/ },
  { symbol: 'F', prefix: 'fluoro', inFormula: /F/, inPrefix: /fluor/ },
];

/** A halogen that isn't in the formula or prefix, to mark the stand-ins with while reading it (null if it has all four). */
function chooseMarkerHalogen(text, isFormula) {
  return MARKER_HALOGENS.find((halogen) => !(isFormula ? halogen.inFormula : halogen.inPrefix).test(text)) ?? null;
}

/**
 * Turns the stand-ins of a skeleton read with marked carbons back into plain stand-ins: every
 * carbon with `count` of the marker halogen loses them. Returns null unless there are exactly
 * `expected` of them.
 */
function takeOffMarkers(skeleton, markerSymbol, markerCounts) {
  const standInAtomIds = [];
  const carbonAtoms = skeleton.carbonAtoms.map((carbonAtom) => {
    const groups = listGroupsOnCarbon(carbonAtom);
    const markers = groups.filter(({ symbol }) => symbol === markerSymbol).length;
    if (!markerCounts.includes(markers)) return carbonAtom;
    standInAtomIds.push(carbonAtom.atomId);
    const otherGroups = groups.filter(({ symbol }) => symbol !== markerSymbol);
    const { groups: _groups, ...rest } = carbonAtom;
    return otherGroups.length > 0 ? { ...rest, groups: otherGroups } : rest;
  });
  if (standInAtomIds.length !== markerCounts.length) return null;
  return { carbonSkeleton: { ...skeleton, carbonAtoms }, standInAtomIds };
}

/** The free valence marks the Blue Book writes at the ends of a group's formula. */
const FREE_VALENCE_AT_START = /^\s*([–—−-]|=|≡)\s*/;
const FREE_VALENCE_AT_END = /\s*([–—−-]|=|≡)\s*$/;
const MARK_ORDER = { '–': 1, '—': 1, '−': 1, '-': 1, '=': 2, '≡': 3 };

/**
 * Reads the formula of a substituent group, written with its free valences as dashes the way
 * the Blue Book writes them: "CH3-CH2–", "–CH2-Cl", "CH2=", "(CH3)2CH-O–", "–CH2-CH2–", "–OH".
 * Returns { group } (see the top of this file), or { errorMessage } when it can't be read.
 */
export function readSubstituentGroupFormula(formulaText) {
  const text = formulaText.trim();
  const atStart = FREE_VALENCE_AT_START.exec(text);
  const afterStart = atStart ? text.slice(atStart[0].length) : text;
  const atEnd = FREE_VALENCE_AT_END.exec(afterStart);
  const writtenCore = atEnd ? afterStart.slice(0, afterStart.length - atEnd[0].length) : afterStart;
  const marks = [atStart?.[1], atEnd?.[1]].filter(Boolean);
  if (marks.length === 0 || writtenCore === '') return { errorMessage: message('substituentGroups.noFreeValence') };
  if (/[<>•]/.test(text)) return { errorMessage: message('substituentGroups.freeValencesNotCovered') };
  if (/[⁺⁻+]/.test(text)) return { errorMessage: message('substituentGroups.chargeNotCovered') };

  // Each free valence becomes a bond to a carbon marked with a halogen the formula doesn't
  // have: CH3-CH2– is read as CH3-CH2-CI3, and CH2= as CH2=CI2. The marked carbons are the stand-ins.
  // –OC-CH2-CO– is written from the other side: its OC is a C=O carbon.
  const core = atStart && /^OC(?=[-([]|$)/.test(writtenCore) ? `C(=O)${writtenCore.slice(2)}` : writtenCore;
  const marker = chooseMarkerHalogen(core, true);
  if (!marker) return { errorMessage: message('substituentGroups.formulaNotRead', { formula: formulaText }) };
  const markerCarbon = (order) => `C${marker.symbol}${4 - order}`;
  const bondText = (order) => ({ 2: '=', 3: '≡' })[order] ?? '-';
  let probe = core;
  const markerCounts = [];
  if (atStart) {
    const order = MARK_ORDER[atStart[1]];
    probe = `${markerCarbon(order)}${bondText(order)}${probe}`;
    markerCounts.push(4 - order);
  }
  if (atEnd) {
    const order = MARK_ORDER[atEnd[1]];
    probe = `${probe}${bondText(order)}${markerCarbon(order)}`;
    markerCounts.push(4 - order);
  }
  const reading = readStructuralFormula(probe);
  if (reading?.errorMessage?.key === 'omnibox.peroxideNotCovered') return { errorMessage: reading.errorMessage };
  if (!reading || reading.errorMessage) return { errorMessage: message('substituentGroups.formulaNotRead', { formula: formulaText }) };
  const group = takeOffMarkers(reading.carbonSkeleton, marker.symbol, markerCounts);
  if (!group) return { errorMessage: message('substituentGroups.formulaNotRead', { formula: formulaText }) };
  return { group };
}

/**
 * Reads an ylidyne prefix, such as "ethylidyne" or "2-chloroethylidyne", as its yl group
 * (ethyl) with the single bond to its stand-in made a triple bond. Its carbon 1 needs two
 * hydrogens that the triple bond can take: there is no "propan-2-ylidyne".
 */
function readYlidynePrefix(prefixText, prefix) {
  const notRead = { errorMessage: message('substituentGroups.prefixNotRead', { prefix: prefixText }) };
  const yl = readSubstituentPrefix(prefix.slice(0, -'idyne'.length));
  if (!yl.group) return notRead;
  const { carbonSkeleton, standInAtomIds } = yl.group;
  const [standInAtomId] = standInAtomIds;
  const bond = carbonSkeleton.carbonCarbonBonds.find((candidate) => candidate.firstAtomId === standInAtomId || candidate.secondAtomId === standInAtomId);
  if (!bond || bond.linkAtom || bond.bondOrder > 1) return notRead;
  const carbonOneId = otherAtomIdOfBond(bond, standInAtomId);
  if (countHydrogensOnCarbon(carbonSkeleton, carbonOneId) < 2) return notRead;
  const carbonCarbonBonds = carbonSkeleton.carbonCarbonBonds.map((other) => (other === bond ? { ...bond, bondOrder: 3 } : other));
  return { group: { carbonSkeleton: { ...carbonSkeleton, carbonCarbonBonds }, standInAtomIds } };
}

/**
 * Reads a substituent prefix, such as "propan-2-yl", "2-methylpropoxy", "chloromethyl" or
 * "methylidene", as a group with one free valence. Returns { group }, or { errorMessage } when it
 * can't be read. (Prefixes with two or more free valences, such as ethane-1,2-diyl, aren't read yet.)
 */
export function readSubstituentPrefix(prefixText) {
  const prefix = prefixText.trim();
  if (prefix === '' || /\s/.test(prefix)) return { errorMessage: message('substituentGroups.prefixNotRead', { prefix: prefixText }) };
  if (/(diyl|triyl|diylidene)$/.test(prefix) || /^(methylene|carbonyl|oxalyl)$/.test(prefix) || /dioyl$/.test(prefix)) {
    return { errorMessage: message('substituentGroups.prefixWithSeveralFreeValencesNotRead', { prefix: prefixText }) };
  }
  if (prefix.endsWith('ylidyne')) return readYlidynePrefix(prefixText, prefix);
  // The prefix is read on a carbon marked with a halogen the prefix doesn't have, which is then the
  // stand-in: propan-2-yl is read as 1,1,1-triiodo-1-(propan-2-yl)methane.
  const marker = chooseMarkerHalogen(prefix, false);
  if (!marker) return { errorMessage: message('substituentGroups.prefixNotRead', { prefix: prefixText }) };
  const isDouble = /ylidene$/.test(prefix) || prefix === OXO_PREFIX;
  const count = isDouble ? 2 : 3;
  const markerPrefix = `${count === 2 ? 'di' : 'tri'}${marker.prefix}`;
  const locants = count === 2 ? '1,1' : '1,1,1';
  const enclosed = /[([]/.test(prefix) ? `[${prefix}]` : `(${prefix})`;
  const ways = /^[a-z]+$/.test(prefix) ? [prefix, enclosed] : [enclosed];
  for (const written of ways) {
    const reading = interpretOmniboxText(`${locants}-${markerPrefix}-1-${written}methane`);
    if (reading?.kind !== 'name' || !reading.carbonSkeleton) continue;
    const group = takeOffMarkers(reading.carbonSkeleton, marker.symbol, [count]);
    if (group) return { group };
  }
  return { errorMessage: message('substituentGroups.prefixNotRead', { prefix: prefixText }) };
}
