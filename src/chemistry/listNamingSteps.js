/**
 * The naming of a molecule, step by step: which group gives the suffix, which chain or ring
 * is the parent, how it is numbered, what each prefix is, and so on. Each step says which
 * Blue Book rules it follows, why it was decided that way (as a message, see
 * src/languages/translate.js), which atoms and bonds of the drawing it is about, and which
 * characters of the name it gave.
 *
 *   listNamingSteps(skeleton) ->
 *   [
 *     {
 *       stepKind: 'parent',
 *       blueBookRules: ['P-44.3', 'P-21.2.1'],
 *       title: message('namingSteps.parent.title', { stem: 'pent' }),
 *       explanation: message('namingSteps.parent.longestChain', { carbonCount: 5, stem: 'pent' }),
 *       atomIds: [1, 2, 3, 4, 5],                       // carbons
 *       bonds: [{ firstAtomId: 1, secondAtomId: 2 }, ...],
 *       groups: [{ carbonAtomId: 2, symbol: 'Cl' }],    // groups on a carbon (Cl, OH, O, NH2 ...)
 *       nameRanges: [{ start: 9, end: 13 }],            // as in String.prototype.slice
 *       atomLocants: [{ atomId: 1, locant: 1 }, ...],   // only for the numbering step
 *       notes: [],                                      // more messages, for side remarks
 *       moreInfo: { title, introduction, rankedItems: [{ label, isThisMolecule }], hereLabel, notes, breakdown },
 *                                                       // only on some steps: more to read. hereLabel: what
 *                                                       // marks the items of this molecule; breakdown: for the
 *                                                       // E and Z step, [{ heading, lines: [message, ...] }]
 *     },
 *     ...
 *   ]
 * The steps come in this order, each only when it applies:
 *   principalGroup        the suffix (P-41)
 *   parent                the main chain or ring, and its stem
 *   chainChoice           why this chain, when others are just as long
 *   unsaturation          "ane", or "ene" with the double bonds' locants
 *   numbering             which end (or which ring carbon) is carbon 1, and why
 *   prefix                one for each different prefix, in the order they are written
 *   alphanumericalOrder   the order of the prefixes
 *   locantsLeftOut        when the name needs no locants
 *   stereo                the E and Z of the double bonds, in the main chain and in groups (prefixes,
 *                         the ester's group, the N's group)
 *   esterGroup            the group R' written in front of an ester's name
 * A molecule that can't be named has no steps.
 *
 * When the preferred IUPAC name (PIN) uses a retained name, such as acetic acid for ethanoic
 * acid (see retainedNames.js), the steps can explain either name, chosen by options.explain:
 *   'preferredName'   (the default) the PIN, "chloroacetic acid": one step, retainedName, takes
 *                     the place of principalGroup, parent and unsaturation, saying why the PIN
 *                     doesn't follow the systematic rules for its parent. The steps for the
 *                     prefixes, numbering and so on are the same as in the systematic name.
 *   'systematicName'  the systematic name, "chloroethanoic acid", with every usual step, and
 *                     a last one, notPreferredName, saying it is accepted but isn't the PIN.
 * For any other molecule the two are the same.
 */

import { countRings, hasTripleBond, listGroupsOnCarbon, listNeighbourCarbonIds } from './carbonSkeleton.js';
import { chooseParent } from './chooseMainChainAndNumbering.js';
import { listCarbonIdsInBranch, listPrefixSubstituents, listSuffixSubstituents } from './findSubstituentsOnChain.js';
import {
  NUMBERING_RULES,
  compareNumberingCandidates,
  findIndexOfDecidingNumberingRule,
  listNumberingCandidatesOfParent,
} from './chooseMainChainAndNumbering.js';
import { findSpanOfParts, listRangesOfParts } from './nameParts.js';
import { NITROGEN_LOCANT, nameCarbonSkeleton } from './nameCarbonSkeleton.js';
import { RETAINED_NAME_GROUP } from './retainedNames.js';
import { bondKey, describeEveryDoubleBond, explainDoubleBondConfiguration } from './doubleBondConfiguration.js';
import { message } from '../languages/translate.js';

/** The names the steps can explain (see the top of this file). */
export const EXPLAINED_NAMES = { preferredName: 'preferredName', systematicName: 'systematicName' };

/**
 * The steps of naming the molecule drawn in skeleton (see the top of this file).
 * namingResult: what nameCarbonSkeleton gives for it, if already worked out.
 * options.explain: which name to explain, when the PIN uses a retained name (EXPLAINED_NAMES).
 */
export function listNamingSteps(skeleton, namingResult = nameCarbonSkeleton(skeleton), { explain = EXPLAINED_NAMES.preferredName } = {}) {
  if (!namingResult.isNameable) return [];
  const explainsRetainedName = Boolean(namingResult.retainedName) && explain === EXPLAINED_NAMES.preferredName;
  const context = describeContext(skeleton, namingResult, explain);
  const stepsOfParent = explainsRetainedName
    ? [describeRetainedName(context), describeChainChoice(context)]
    : [describePrincipalGroup(context), describeParent(context), describeChainChoice(context), describeUnsaturation(context)];
  return [
    ...stepsOfParent,
    describeNumbering(context),
    ...describePrefixes(context),
    describeAlphanumericalOrder(context),
    describeLocantsLeftOut(context),
    describeStereo(context),
    describeEsterGroup(context),
    describeNotPreferredName(context),
  ].filter(Boolean);
}

/**
 * The name being explained, and its parts: the PIN, or the systematic name (see the top of
 * this file). They are the same unless the PIN uses a retained name.
 */
function describeContext(skeleton, namingResult, explain) {
  const { namedSkeleton, mainChainAtomIds, isRing, substituents } = namingResult;
  const isSystematic = explain === EXPLAINED_NAMES.systematicName && Boolean(namingResult.retainedName);
  return {
    skeleton,
    namingResult,
    namedSkeleton,
    chain: mainChainAtomIds,
    isRing,
    isSystematic,
    parts: isSystematic ? namingResult.systematicNameParts : namingResult.nameParts,
    name: isSystematic ? namingResult.systematicName : namingResult.iupacName,
    suffixSubstituents: listSuffixSubstituents(substituents),
    prefixSubstituents: listPrefixSubstituents(substituents),
    // Worked out the first time a step needs them (see listOtherNumberings).
    numberings: undefined,
  };
}

function makeStep(stepKind, blueBookRules, title, explanation, { atomIds = [], bonds = [], groups = [] } = {}, nameRanges = [], extra = {}) {
  return { stepKind, blueBookRules, title, explanation, atomIds: [...new Set(atomIds)], bonds, groups, nameRanges: nameRanges.filter(Boolean), notes: [], ...extra };
}

function bondBetween(firstAtomId, secondAtomId) {
  return { firstAtomId, secondAtomId };
}

/** The bonds of the skeleton with both their carbons among atomIds. */
function listBondsAmong(skeleton, atomIds) {
  const wanted = new Set(atomIds);
  return skeleton.carbonCarbonBonds
    .filter(({ firstAtomId, secondAtomId }) => wanted.has(firstAtomId) && wanted.has(secondAtomId))
    .map(({ firstAtomId, secondAtomId }) => bondBetween(firstAtomId, secondAtomId));
}

/** The bonds along the main chain, and round to carbon 1 again for a ring. */
function listChainBonds({ chain, isRing }) {
  const bonds = chain.slice(1).map((atomId, index) => bondBetween(chain[index], atomId));
  if (isRing && chain.length > 2) bonds.push(bondBetween(chain[chain.length - 1], chain[0]));
  return bonds;
}

function chainAtomAt({ chain }, locant) {
  return chain[locant - 1];
}

/** The text of the name between the first and last part matching. */
function textOfParts(context, isWanted) {
  const span = findSpanOfParts(context.parts, isWanted);
  return span ? context.name.slice(span.start, span.end) : '';
}

const isInGroup = (group) => (part) => part.group === group;
const isPrefixPart = (part) => part.group?.startsWith('prefix:') ?? false;
const isLocantsIn = (isWanted) => (part) => part.kind === 'locants' && isWanted(part);

/** True for a -COOH or -CHO group joined to a ring parent, whose carbon isn't one of the ring's. */
function hangsOffRing(context, substituent) {
  return context.isRing && substituent.branchStartAtomId !== undefined;
}

/** Where a substituent named by a group on a carbon (Cl, OH, =O, NH2, -COOH ...) is on the drawing. */
function highlightGroupSubstituent(context, substituent, symbols) {
  const chainAtomId = chainAtomAt(context, substituent.locant);
  if (hangsOffRing(context, substituent)) {
    const carbonAtomId = substituent.branchStartAtomId;
    return { atomIds: [carbonAtomId], bonds: [bondBetween(chainAtomId, carbonAtomId)], groups: symbols.map((symbol) => ({ carbonAtomId, symbol })) };
  }
  return { atomIds: [chainAtomId], bonds: [], groups: symbols.map((symbol) => ({ carbonAtomId: chainAtomId, symbol })) };
}

/** The group beyond an O or NH (an ether's, an amine's, an ester's or an amide's), with the bond the O or NH sits in. */
function highlightLinkedGroup(context, { atomIds, linkBond }) {
  return { atomIds, bonds: [linkBond, ...listBondsAmong(context.skeleton, atomIds)], groups: [] };
}

function combineHighlights(highlights) {
  return {
    atomIds: highlights.flatMap(({ atomIds }) => atomIds),
    bonds: highlights.flatMap(({ bonds }) => bonds),
    groups: highlights.flatMap(({ groups }) => groups),
  };
}

// ---------------------------------------------------------------- the suffix

const PRINCIPAL_GROUPS = {
  carboxylicAcid: { blueBookRules: ['P-41', 'P-65.1.2.1'], explain: (values) => message('namingSteps.principalGroup.carboxylicAcid', values) },
  ringCarboxylicAcid: { blueBookRules: ['P-41', 'P-65.1.2.2'], explain: (values) => message('namingSteps.principalGroup.ringCarboxylicAcid', values) },
  ester: { blueBookRules: ['P-41', 'P-65.6.3.2.1', 'P-65.6.3.3.1'], explain: (values) => message('namingSteps.principalGroup.ester', values) },
  amide: { blueBookRules: ['P-41', 'P-66.1.1.1.1.1'], explain: (values) => message('namingSteps.principalGroup.amide', values) },
  ringAmide: { blueBookRules: ['P-41', 'P-66.1.1.1.1.3'], explain: (values) => message('namingSteps.principalGroup.amide', values) },
  aldehyde: { blueBookRules: ['P-41', 'P-66.6.1.1.1'], explain: (values) => message('namingSteps.principalGroup.aldehyde', values) },
  ringAldehyde: { blueBookRules: ['P-41', 'P-66.6.1.1.3'], explain: (values) => message('namingSteps.principalGroup.ringAldehyde', values) },
  ketone: { blueBookRules: ['P-41', 'P-64.2.2.1'], explain: (values) => message('namingSteps.principalGroup.ketone', values) },
  alcohol: { blueBookRules: ['P-41', 'P-63.1.2'], explain: (values) => message('namingSteps.principalGroup.alcohol', values) },
  amine: { blueBookRules: ['P-41', 'P-62.2.1.2'], explain: (values) => message('namingSteps.principalGroup.amine', values) },
  secondaryAmine: { blueBookRules: ['P-41', 'P-62.2.1.2', 'P-62.2.2'], explain: (values) => message('namingSteps.principalGroup.secondaryAmine', values) },
};

/**
 * The classes that can give the suffix, in decreasing seniority (P-41, Table 4.1). Only the
 * ones met most often are listed; the others (hydrazides, imides, hydroperoxides, imines ...)
 * sit in between without changing this order.
 */
const SUFFIX_CLASSES_IN_ORDER_OF_SENIORITY = ['carboxylicAcid', 'anhydride', 'ester', 'acidHalide', 'amide', 'nitrile', 'aldehyde', 'ketone', 'alcohol', 'amine'];

const SUFFIX_CLASS_OF_PRINCIPAL_GROUP = {
  carboxylicAcid: 'carboxylicAcid',
  ringCarboxylicAcid: 'carboxylicAcid',
  ester: 'ester',
  amide: 'amide',
  ringAmide: 'amide',
  aldehyde: 'aldehyde',
  ringAldehyde: 'aldehyde',
  ketone: 'ketone',
  alcohol: 'alcohol',
  amine: 'amine',
  secondaryAmine: 'amine',
};

/** The order of seniority of the classes, with the one giving this molecule's suffix marked. */
function describeSeniorityOfClasses(kind) {
  const classHere = SUFFIX_CLASS_OF_PRINCIPAL_GROUP[kind];
  return {
    title: message('namingSteps.seniorityOfClasses.title'),
    introduction: message('namingSteps.seniorityOfClasses.introduction'),
    rankedItems: SUFFIX_CLASSES_IN_ORDER_OF_SENIORITY.map((suffixClass) => ({
      label: message(`namingSteps.seniorityOfClasses.classes.${suffixClass}`),
      isThisMolecule: suffixClass === classHere,
    })),
    hereLabel: message('namingSteps.seniorityOfClasses.here'),
    notes: [message('namingSteps.seniorityOfClasses.alwaysPrefixes')],
    breakdown: [],
  };
}

function choosePrincipalGroupKind(context, [first]) {
  const { namingResult } = context;
  const onRing = hangsOffRing(context, first);
  if (namingResult.isEster) return 'ester';
  if (namingResult.isAmide) return context.isRing ? 'ringAmide' : 'amide';
  if (first.isCarboxylicAcid) return onRing ? 'ringCarboxylicAcid' : 'carboxylicAcid';
  if (first.isAldehyde) return onRing ? 'ringAldehyde' : 'aldehyde';
  if (first.isKetone) return 'ketone';
  if (first.isHydroxy) return 'alcohol';
  return namingResult.nitrogenGroup ? 'secondaryAmine' : 'amine';
}

/** The groups on the drawing that make up each suffix group: =O and OH for -COOH, =O and NH2 for -CONH2 ... */
function symbolsOfPrincipalGroup(kind, hasNitrogenGroup) {
  if (kind === 'carboxylicAcid' || kind === 'ringCarboxylicAcid') return ['O', 'OH'];
  // An amide with a group on its N has an NH in a bond, not an NH2 group (that bond is highlighted instead).
  if (kind === 'amide' || kind === 'ringAmide') return hasNitrogenGroup ? ['O'] : ['O', 'NH2'];
  if (kind === 'alcohol') return ['OH'];
  if (kind === 'amine') return ['NH2'];
  if (kind === 'secondaryAmine') return [];
  return ['O'];
}

function describePrincipalGroup(context) {
  const { suffixSubstituents, namingResult } = context;
  if (suffixSubstituents.length === 0) return null;
  const kind = choosePrincipalGroupKind(context, suffixSubstituents);
  const suffix = textOfParts(context, (part) => part.group === 'suffix' && part.kind === 'ending');
  const values = { suffix, count: suffixSubstituents.length };
  const symbols = symbolsOfPrincipalGroup(kind, Boolean(namingResult.nitrogenGroup));
  const highlights = suffixSubstituents.map((substituent) => highlightGroupSubstituent(context, substituent, symbols));
  const linked = namingResult.esterGroup ?? namingResult.nitrogenGroup;
  if (linked) highlights.push({ atomIds: [], bonds: [linked.linkBond], groups: [] });
  const { blueBookRules, explain } = PRINCIPAL_GROUPS[kind];
  return makeStep(
    'principalGroup',
    blueBookRules,
    message('namingSteps.principalGroup.title', { suffix }),
    explain(values),
    combineHighlights(highlights),
    [findSpanOfParts(context.parts, isInGroup('suffix'))],
    { moreInfo: describeSeniorityOfClasses(kind) },
  );
}

// ---------------------------------------------------------------- a retained name

/**
 * The PIN's retained parent, such as "acetic acid": the chain and the groups that would give
 * the systematic suffix, and why the PIN uses the retained name instead.
 */
function describeRetainedName(context) {
  const { suffixSubstituents, namingResult } = context;
  const { retainedName } = namingResult;
  // Acetylene is a hydrocarbon: it has no group named by a suffix, and so no seniority of classes to show.
  const kind = suffixSubstituents.length > 0 ? choosePrincipalGroupKind(context, suffixSubstituents) : null;
  const symbols = symbolsOfPrincipalGroup(kind, Boolean(namingResult.nitrogenGroup));
  const highlights = [
    { atomIds: context.chain, bonds: listChainBonds(context), groups: [] },
    ...suffixSubstituents.map((substituent) => highlightGroupSubstituent(context, substituent, symbols)),
  ];
  const linked = namingResult.esterGroup ?? namingResult.nitrogenGroup;
  if (linked) highlights.push({ atomIds: [], bonds: [linked.linkBond], groups: [] });
  return makeStep(
    'retainedName',
    retainedName.blueBookRules,
    message('namingSteps.retainedName.title', { retainedParent: retainedName.retainedParent }),
    retainedName.explanation,
    combineHighlights(highlights),
    [findSpanOfParts(context.parts, isInGroup(RETAINED_NAME_GROUP))],
    {
      notes: [message('namingSteps.retainedName.systematicAlsoAccepted', { systematicName: retainedName.systematicName })],
      ...(kind ? { moreInfo: describeSeniorityOfClasses(kind) } : {}),
    },
  );
}

/** When the systematic name is explained, but the PIN uses a retained name: the last step says so. */
function describeNotPreferredName(context) {
  const { retainedName, iupacName } = context.namingResult;
  if (!context.isSystematic) return null;
  const values = { systematicName: context.name, systematicParent: retainedName.systematicParent, retainedParent: retainedName.retainedParent, preferredName: iupacName };
  return makeStep(
    'notPreferredName',
    retainedName.blueBookRules,
    message('namingSteps.notPreferredName.title'),
    message('namingSteps.notPreferredName.explanation', values),
    {},
    [findSpanOfParts(context.parts, (part) => ['parent', 'unsaturation', 'suffix'].includes(part.group))],
  );
}

// ---------------------------------------------------------------- the parent

function describeParent(context) {
  const { chain, isRing, namedSkeleton, suffixSubstituents } = context;
  const stem = textOfParts(context, isInGroup('parent'));
  const values = { count: chain.length, stem };
  const highlight = { atomIds: chain, bonds: listChainBonds(context), groups: [] };
  const ranges = [findSpanOfParts(context.parts, isInGroup('parent'))];
  const title = message('namingSteps.parent.title', { stem });
  if (isRing) {
    // With more rings, what chose this one: more of the group that gives the ending (P-44.1.1),
    // or with as many, more carbons (P-44.2.1.6).
    const { ruleName } = chooseParent(namedSkeleton);
    if (ruleName === 'mostPrincipalGroups') {
      return makeStep('parent', ['P-22.1.1', 'P-44.1.1', 'P-44.1.2.2'], title, message('namingSteps.parent.ringWithMostSuffixGroups', values), highlight, ranges);
    }
    if (ruleName === 'mostRingCarbons') {
      return makeStep('parent', ['P-22.1.1', 'P-44.1.2.2', 'P-44.2.1.6'], title, message('namingSteps.parent.largestRing', values), highlight, ranges);
    }
    return makeStep('parent', ['P-22.1.1', 'P-44.1.2.2'], title, message('namingSteps.parent.ring', values), highlight, ranges);
  }
  if (countRings(namedSkeleton) > 0) {
    const key = countRings(namedSkeleton) > 1 ? 'namingSteps.parent.chainNotRings' : 'namingSteps.parent.chainNotRing';
    return makeStep('parent', ['P-44.1.2.2', 'P-44.1.1', 'P-21.2.1'], title, message(key, values), highlight, ranges);
  }
  if (chain.length === 1) return makeStep('parent', ['P-21.2.1'], title, message('namingSteps.parent.oneCarbon', values), highlight, ranges);
  if (suffixSubstituents.length > 0) {
    return makeStep('parent', ['P-44.1.1', 'P-44.3', 'P-21.2.1'], title, message('namingSteps.parent.chainWithSuffixGroups', values), highlight, ranges);
  }
  return makeStep('parent', ['P-44.3', 'P-21.2.1'], title, message('namingSteps.parent.longestChain', values), highlight, ranges);
}

// ---------------------------------------------------------------- choosing between chains, and numbering

/**
 * Every numbering the rules considered, split into those of the chosen chain or ring
 * (sameChain), and the best numbering of each other chain (otherChains).
 */
function listOtherNumberings(context) {
  if (context.numberings === undefined) context.numberings = compareWithOtherNumberings(context);
  return context.numberings;
}

function compareWithOtherNumberings(context) {
  const candidates = listNumberingCandidatesOfParent(context.namedSkeleton);
  const sameOrder = (candidate) => candidate.orderedChainAtomIds.every((atomId, index) => atomId === context.chain[index]);
  const chosen = candidates.find((candidate) => candidate.orderedChainAtomIds.length === context.chain.length && sameOrder(candidate));
  if (!chosen) return null;
  const chainAtomIds = new Set(context.chain);
  const isSameChain = (candidate) => candidate.orderedChainAtomIds.length === chainAtomIds.size && candidate.orderedChainAtomIds.every((atomId) => chainAtomIds.has(atomId));
  const bestOfEachOtherChain = new Map();
  for (const candidate of candidates.filter((candidate) => !isSameChain(candidate))) {
    const chainKey = [...candidate.orderedChainAtomIds].sort((first, second) => first - second).join(',');
    const best = bestOfEachOtherChain.get(chainKey);
    if (!best || compareNumberingCandidates(candidate, best) < 0) bestOfEachOtherChain.set(chainKey, candidate);
  }
  return {
    chosen,
    sameChain: candidates.filter((candidate) => candidate !== chosen && isSameChain(candidate)),
    otherChains: [...bestOfEachOtherChain.values()],
  };
}

/** The last of NUMBERING_RULES needed to rule out every other candidate, or -1 if none tells them apart. */
function findDecidingRuleIndex(chosen, others) {
  return others.reduce((latest, other) => Math.max(latest, findIndexOfDecidingNumberingRule(chosen, other)), -1);
}

/**
 * Without triple bonds in the molecule, the rules for multiple bonds are the rules for double
 * bonds, and are explained as those.
 */
const RULE_NAME_WITHOUT_TRIPLE_BONDS = { mostMultipleBonds: 'mostDoubleBonds', lowestMultipleBondLocants: 'lowestDoubleBondLocants' };

function explainedRuleName(ruleName, context) {
  return hasTripleBond(context.namedSkeleton) ? ruleName : (RULE_NAME_WITHOUT_TRIPLE_BONDS[ruleName] ?? ruleName);
}

const CHAIN_CHOICE_EXPLANATIONS = {
  mostMultipleBonds: (values) => message('namingSteps.chainChoice.mostMultipleBonds', values),
  lowestMultipleBondLocants: (values) => message('namingSteps.chainChoice.lowestMultipleBondLocants', values),
  mostDoubleBonds: (values) => message('namingSteps.chainChoice.mostDoubleBonds', values),
  lowestSuffixLocants: (values) => message('namingSteps.chainChoice.lowestSuffixLocants', values),
  lowestDoubleBondLocants: (values) => message('namingSteps.chainChoice.lowestDoubleBondLocants', values),
  mostPrefixes: (values) => message('namingSteps.chainChoice.mostPrefixes', values),
  lowestPrefixLocants: (values) => message('namingSteps.chainChoice.lowestPrefixLocants', values),
  lowestLocantsInOrderOfCitation: (values) => message('namingSteps.chainChoice.lowestLocantsInOrderOfCitation', values),
};

function describeChainChoice(context) {
  const numberings = listOtherNumberings(context);
  if (!numberings || numberings.otherChains.length === 0) return null;
  const ruleIndex = findDecidingRuleIndex(numberings.chosen, numberings.otherChains);
  if (ruleIndex < 0) return null;
  const { ruleName, blueBookRules } = NUMBERING_RULES[ruleIndex];
  return makeStep(
    'chainChoice',
    blueBookRules,
    message('namingSteps.chainChoice.title'),
    CHAIN_CHOICE_EXPLANATIONS[explainedRuleName(ruleName, context)]({ carbonCount: context.chain.length }),
    { atomIds: context.chain, bonds: listChainBonds(context), groups: [] },
  );
}

function describeUnsaturation(context) {
  const { namingResult, isRing, chain } = context;
  const { doubleBondLocants, tripleBondLocants = [] } = namingResult;
  // The last of the endings: "diene" in buta-1,3-diene, whose "a" is an ending part too.
  const ending = context.parts.filter((part) => part.group === 'unsaturation' && part.kind === 'ending').at(-1)?.text ?? '';
  const ranges = [findSpanOfParts(context.parts, isInGroup('unsaturation'))];
  const title = message('namingSteps.unsaturation.title', { ending });
  // The "e" of "ane" or "ene" is dropped before a suffix beginning with a vowel: butan-2-ol, pent-1-en-3-one.
  const isEDropped = !ending.endsWith('e');
  const extra = isEDropped ? { notes: [message('namingSteps.unsaturation.finalEDropped')] } : {};
  const elisionRules = isEDropped ? ['P-16.7.1 (a)'] : [];
  if (doubleBondLocants.length === 0 && tripleBondLocants.length === 0) {
    const highlight = { atomIds: chain, bonds: listChainBonds(context), groups: [] };
    return makeStep('unsaturation', [isRing ? 'P-22.1.1' : 'P-21.2.1', ...elisionRules], title, message('namingSteps.unsaturation.none'), highlight, ranges, extra);
  }
  const bonds = [...doubleBondLocants, ...tripleBondLocants].map((locant) => bondBetween(chain[locant - 1], chain[locant % chain.length]));
  const highlight = { atomIds: bonds.flatMap(({ firstAtomId, secondAtomId }) => [firstAtomId, secondAtomId]), bonds, groups: [] };
  const values = { count: doubleBondLocants.length, locants: doubleBondLocants.join(','), ending };
  const locantsWritten = context.parts.some(isLocantsIn(isInGroup('unsaturation')));
  const blueBookRules = isRing ? ['P-31.1.1', 'P-31.1.3.1'] : ['P-31.1.1'];
  if (tripleBondLocants.length > 0) {
    const tripleValues = { ...values, tripleBondCount: tripleBondLocants.length, tripleBondLocants: tripleBondLocants.join(',') };
    if (!locantsWritten) return makeStep('unsaturation', [...blueBookRules, 'P-14.3.4.2', ...elisionRules], title, message('namingSteps.unsaturation.tripleBondWithoutLocant', tripleValues), highlight, ranges, extra);
    const key = doubleBondLocants.length > 0 ? 'namingSteps.unsaturation.doubleAndTripleBonds' : 'namingSteps.unsaturation.tripleBonds';
    // tripleBonds has a form for one bond and one for several, chosen by count.
    if (doubleBondLocants.length === 0) tripleValues.count = tripleBondLocants.length;
    const tripleBondRules = doubleBondLocants.length > 0 ? ['P-31.1.1.1', 'P-31.1.1.2'] : [];
    return makeStep('unsaturation', [...blueBookRules, ...tripleBondRules, ...elisionRules], title, message(key, tripleValues), highlight, ranges, extra);
  }
  if (locantsWritten) return makeStep('unsaturation', [...blueBookRules, ...elisionRules], title, message('namingSteps.unsaturation.doubleBonds', values), highlight, ranges, extra);
  return makeStep('unsaturation', [...blueBookRules, 'P-14.3.4.2', ...elisionRules], title, message('namingSteps.unsaturation.doubleBondWithoutLocant', values), highlight, ranges, extra);
}

function describeNumbering(context) {
  const { chain, parts, namingResult, suffixSubstituents, prefixSubstituents } = context;
  if (chain.length < 2 || !parts.some((part) => part.kind === 'locants')) return null;
  const numberings = listOtherNumberings(context);
  if (!numberings) return null;
  const ruleIndex = findDecidingRuleIndex(numberings.chosen, numberings.sameChain);
  const highlight = { atomIds: [chain[0]], bonds: [], groups: [] };
  const extra = { atomLocants: chain.map((atomId, index) => ({ atomId, locant: index + 1 })) };
  const title = message('namingSteps.numbering.title');
  const sortedLocants = (substituents) => substituents.map(({ locant }) => locant).sort((first, second) => first - second).join(',');

  if (ruleIndex < 0) {
    const descriptors = namingResult.stereoDescriptors.map(({ descriptor }) => descriptor);
    if (descriptors.includes('Z') && descriptors.includes('E')) {
      const zLocants = namingResult.stereoDescriptors.filter(({ descriptor }) => descriptor === 'Z').map(({ locant }) => locant).join(',');
      return makeStep('numbering', ['P-14.4 (j)', 'P-44.4.1.12.1'], title, message('namingSteps.numbering.zFirst', { locants: zLocants }), highlight, listRangesOfParts(parts, (part) => part.kind === 'stereo'), extra);
    }
    return makeStep('numbering', ['P-14.4'], title, message('namingSteps.numbering.eitherWay'), highlight, listRangesOfParts(parts, (part) => part.kind === 'locants'), extra);
  }

  const { blueBookRules } = NUMBERING_RULES[ruleIndex];
  const ruleName = explainedRuleName(NUMBERING_RULES[ruleIndex].ruleName, context);
  if (ruleName === 'lowestSuffixLocants') {
    const [first] = suffixSubstituents;
    const atChainEnd = !context.isRing && (first.isCarboxylicAcid || first.isAldehyde);
    const explanation = atChainEnd
      ? message('namingSteps.numbering.carbonylCarbonIsOne')
      : message('namingSteps.numbering.lowestSuffixLocants', { locants: sortedLocants(suffixSubstituents), count: suffixSubstituents.length });
    return makeStep('numbering', blueBookRules, title, explanation, highlight, listRangesOfParts(parts, isLocantsIn(isInGroup('suffix'))), extra);
  }
  const unsaturationRanges = () => listRangesOfParts(parts, isLocantsIn(isInGroup('unsaturation')));
  if (ruleName === 'lowestMultipleBondLocants') {
    const locants = [...namingResult.doubleBondLocants, ...namingResult.tripleBondLocants].sort((first, second) => first - second);
    const values = { locants: locants.join(','), count: locants.length };
    return makeStep('numbering', blueBookRules, title, message('namingSteps.numbering.lowestMultipleBondLocants', values), highlight, unsaturationRanges(), extra);
  }
  if (ruleName === 'lowestDoubleBondLocants') {
    const values = { locants: namingResult.doubleBondLocants.join(','), count: namingResult.doubleBondLocants.length };
    // With triple bonds too, the double bonds only decide when both ways give the multiple bonds the same numbers (P-31.1.1.1).
    const key = hasTripleBond(context.namedSkeleton) ? 'namingSteps.numbering.doubleBondsBeforeTripleBonds' : 'namingSteps.numbering.lowestDoubleBondLocants';
    return makeStep('numbering', blueBookRules, title, message(key, values), highlight, unsaturationRanges(), extra);
  }
  const prefixRanges = listRangesOfParts(parts, isLocantsIn(isPrefixPart));
  if (ruleName === 'lowestPrefixLocants') {
    return makeStep('numbering', blueBookRules, title, message('namingSteps.numbering.lowestPrefixLocants', { locants: sortedLocants(prefixSubstituents) }), highlight, prefixRanges, extra);
  }
  const firstPrefix = parts.find((part) => part.kind === 'prefix');
  const values = { locants: sortedLocants(prefixSubstituents), prefix: firstPrefix?.substituentName ?? '' };
  return makeStep('numbering', blueBookRules, title, message('namingSteps.numbering.firstCitedPrefix', values), highlight, prefixRanges.slice(0, 1), extra);
}

// ---------------------------------------------------------------- the prefixes

/** What kind of prefix a substituent is, for choosing its explanation and rules. */
function choosePrefixKind(substituent) {
  if (substituent.sideChain) return SIDE_CHAIN_PREFIX_KINDS[substituent.sideChain.kind];
  if (substituent.halogen) return 'halogen';
  if (substituent.isHydroxy) return 'hydroxy';
  if (substituent.isKetone) return 'oxoKetone';
  if (substituent.isAldehyde) return substituent.substituentName === 'formyl' ? 'formyl' : 'oxoAldehyde';
  if (substituent.isEther) return 'alkoxy';
  if (substituent.isAmine) return substituent.linkedGroup ? 'alkylamino' : 'amino';
  if (substituent.isRing) return 'cycloalkyl';
  if (substituent.isJoinedByDoubleBond) return 'alkylidene';
  if (substituent.tripleBondLocants?.length > 0) return 'alkynyl';
  if (substituent.doubleBondLocants?.length > 0) return 'alkenyl';
  return 'alkyl';
}

/** The prefix kind for each kind of side chain with groups on it (see nameSideChain.js), or that branches (see nameBranchedSideChain.js). */
const SIDE_CHAIN_PREFIX_KINDS = { substituted: 'substitutedSideChain', branched: 'branchedSideChain', tertButyl: 'tertButyl', acyl: 'acyl', formyl: 'formyl', carboxy: 'carboxy', oxalo: 'oxalo' };

/** The explanation of a side chain with groups on it, and whether its own prefixes have locants. */
function explainSubstitutedSideChain(values) {
  return message(values.locantsLeftOut ? 'namingSteps.prefix.substitutedSideChainWithoutLocants' : 'namingSteps.prefix.substitutedSideChain', values);
}

const PREFIXES = {
  substitutedSideChain: { blueBookRules: ['P-29.2', 'P-16.5.1.2', 'P-14.5.2'], explain: explainSubstitutedSideChain },
  // propan-2-yl, butan-2-yl (P-29.2), or 2-methylpropyl, 1-hydroxypropan-2-yl, with its principal chain chosen by P-46.1.
  branchedSideChain: {
    blueBookRules: ['P-29.2', 'P-46.1', 'P-16.5.1.2', 'P-14.5.2'],
    explain: (values) => message(values.hasOwnPrefixes ? 'namingSteps.prefix.branchedSideChain' : 'namingSteps.prefix.alkanyl', values),
  },
  tertButyl: { blueBookRules: ['P-29.6.1', 'P-14.5.3'], explain: (values) => message('namingSteps.prefix.tertButyl', values) },
  acyl: {
    blueBookRules: ['P-65.1.7.3.1', 'P-65.1.7.2.1'],
    explain: (values) => {
      if (values.parentName !== values.substituentName) return message('namingSteps.prefix.substitutedAcyl', values);
      return message(values.parentName === 'acetyl' ? 'namingSteps.prefix.acetyl' : 'namingSteps.prefix.acyl', values);
    },
  },
  carboxy: { blueBookRules: ['P-65.1.2.2.3'], explain: (values) => message('namingSteps.prefix.carboxy', values) },
  oxalo: { blueBookRules: ['P-65.1.7.2.1'], explain: (values) => message('namingSteps.prefix.oxalo', values) },
  halogen: { blueBookRules: ['P-61.3.1'], explain: (values) => message('namingSteps.prefix.halogen', values) },
  hydroxy: { blueBookRules: ['P-63.1.2', 'P-41'], explain: (values) => message('namingSteps.prefix.hydroxy', values) },
  oxoKetone: { blueBookRules: ['P-64.5', 'P-41'], explain: (values) => message('namingSteps.prefix.oxoKetone', values) },
  oxoAldehyde: { blueBookRules: ['P-66.6.1.3', 'P-65.1.6.3'], explain: (values) => message('namingSteps.prefix.oxoAldehyde', values) },
  formyl: { blueBookRules: ['P-66.6.1.3'], explain: (values) => message('namingSteps.prefix.formyl', values) },
  amino: { blueBookRules: ['P-62.2.3', 'P-41'], explain: (values) => message('namingSteps.prefix.amino', values) },
  alkylamino: { blueBookRules: ['P-62.2.3'], explain: (values) => message('namingSteps.prefix.alkylamino', values) },
  alkoxy: { blueBookRules: ['P-63.2.2.1.1', 'P-63.2.2.2'], explain: (values) => message('namingSteps.prefix.alkoxy', values) },
  cycloalkyl: { blueBookRules: ['P-29.2', 'P-44.1.2.2'], explain: (values) => message('namingSteps.prefix.cycloalkyl', values) },
  alkylidene: { blueBookRules: ['P-29.2'], explain: (values) => message('namingSteps.prefix.alkylidene', values) },
  alkenyl: { blueBookRules: ['P-32.1'], explain: (values) => message('namingSteps.prefix.alkenyl', values) },
  alkynyl: { blueBookRules: ['P-32.1.1'], explain: (values) => message('namingSteps.prefix.alkynyl', values) },
  alkyl: { blueBookRules: ['P-29.2'], explain: (values) => message('namingSteps.prefix.alkyl', values) },
};

function highlightPrefixSubstituent(context, substituent, kind) {
  if (substituent.linkedAtomIds) {
    const chainAtomId = chainAtomAt(context, substituent.locant);
    return combineHighlights([{ atomIds: [chainAtomId], bonds: [], groups: [] }, highlightLinkedGroup(context, { atomIds: substituent.linkedAtomIds, linkBond: substituent.linkBond })]);
  }
  if (substituent.sideChain) {
    // The side chain's carbons, its groups, and any group beyond an O or NH on it.
    const chainAtomId = chainAtomAt(context, substituent.locant);
    const atomIds = listCarbonIdsInBranch(context.skeleton, substituent.branchStartAtomId, chainAtomId);
    const atomsById = new Map(context.skeleton.carbonAtoms.map((carbonAtom) => [carbonAtom.atomId, carbonAtom]));
    const groups = atomIds.flatMap((carbonAtomId) => listGroupsOnCarbon(atomsById.get(carbonAtomId)).map(({ symbol }) => ({ carbonAtomId, symbol })));
    return { atomIds, bonds: [bondBetween(chainAtomId, substituent.branchStartAtomId), ...listBondsAmong(context.skeleton, atomIds)], groups };
  }
  if (substituent.branchStartAtomId !== undefined && kind !== 'formyl') {
    const chainAtomId = chainAtomAt(context, substituent.locant);
    const atomIds = listCarbonIdsInBranch(context.namedSkeleton, substituent.branchStartAtomId, chainAtomId);
    return { atomIds, bonds: [bondBetween(chainAtomId, substituent.branchStartAtomId), ...listBondsAmong(context.skeleton, atomIds)], groups: [] };
  }
  return highlightGroupSubstituent(context, substituent, [substituent.groupSymbol ?? 'O']);
}

function describePrefixes(context) {
  const { parts, prefixSubstituents, namingResult } = context;
  const { nitrogenGroup } = namingResult;
  return parts
    .filter((part) => part.kind === 'prefix')
    .map((part) => {
      const { substituentName } = part;
      const onCarbons = prefixSubstituents.filter((substituent) => substituent.substituentName === substituentName);
      const onNitrogen = nitrogenGroup && nitrogenGroup.groupName === substituentName;
      const prefixText = textOfParts(context, isInGroup(part.group));
      const locantTexts = [...(onNitrogen ? [NITROGEN_LOCANT] : []), ...onCarbons.map(({ locant }) => locant).sort((first, second) => first - second)];
      const count = locantTexts.length;
      const range = [findSpanOfParts(parts, isInGroup(part.group))];
      const highlights = onNitrogen ? [highlightLinkedGroup(context, nitrogenGroup)] : [];
      const title = message('namingSteps.prefix.title', { prefix: prefixText });
      const multiplyingRules = count > 1 ? ['P-14.2.1'] : [];

      if (onCarbons.length === 0) {
        const values = { prefix: prefixText, groupName: substituentName };
        const blueBookRules = namingResult.isAmide ? ['P-66.1.1.3.1.1'] : ['P-62.2.2'];
        return makeStep('prefix', blueBookRules, title, message('namingSteps.prefix.nitrogenGroup', values), combineHighlights(highlights), range);
      }
      const kind = choosePrefixKind(onCarbons[0]);
      highlights.push(...onCarbons.map((substituent) => highlightPrefixSubstituent(context, substituent, kind)));
      const first = onCarbons[0];
      const values = {
        prefix: prefixText,
        substituentName,
        locants: locantTexts.join(','),
        count,
        symbol: first.halogen ?? '',
        carbonCount: first.substituentCarbonCount ?? 0,
        groupName: first.linkedGroupName ?? '',
        parentName: first.sideChain?.parentName ?? '',
        locantsLeftOut: first.sideChain?.locantsLeftOut ?? false,
        hasOwnPrefixes: (first.sideChain?.prefixes.length ?? 0) > 0,
      };
      const { blueBookRules: kindRules, explain } = PREFIXES[kind];
      // A side chain whose own prefixes have no locants (P-14.3.4), or have them (P-14.3.4 is about leaving them out).
      const blueBookRules = first.sideChain?.prefixes.length > 0 ? [...kindRules, ...(first.sideChain.locantsLeftOut ? ['P-14.3.4'] : [])] : kindRules;
      const nitrogenRules = onNitrogen ? (namingResult.isAmide ? ['P-66.1.1.3.1.1'] : ['P-62.2.2']) : [];
      const explanation = onNitrogen ? message('namingSteps.prefix.alsoOnNitrogen', values) : explain(values);
      return makeStep('prefix', [...blueBookRules, ...nitrogenRules, ...multiplyingRules], title, explanation, combineHighlights(highlights), range);
    });
}

function describeAlphanumericalOrder(context) {
  const prefixes = context.parts.filter((part) => part.kind === 'prefix');
  if (prefixes.length < 2) return null;
  const order = prefixes.map(({ substituentName }) => substituentName).join(', ');
  const hasMultiplied = prefixes.some(({ text, substituentName }) => text.replace(/[()[\]{}]/g, '') !== substituentName);
  const explanation = hasMultiplied
    ? message('namingSteps.alphanumericalOrder.ignoringMultipliers', { order })
    : message('namingSteps.alphanumericalOrder.explanation', { order });
  return makeStep('alphanumericalOrder', ['P-14.5.1', 'P-14.5.2'], message('namingSteps.alphanumericalOrder.title'), explanation, {}, [
    findSpanOfParts(context.parts, isPrefixPart),
  ]);
}

// ---------------------------------------------------------------- the rest

function describeLocantsLeftOut(context) {
  if (!context.namingResult.locantsLeftOut) return null;
  return makeStep('locantsLeftOut', ['P-14.3.4'], message('namingSteps.locantsLeftOut.title'), message('namingSteps.locantsLeftOut.explanation'));
}

/** The C=C a stereodescriptor is for: in the main chain, or joining a side chain to it at that locant. */
function findBondOfDescriptor(context, locant) {
  const { chain, namingResult } = context;
  if (namingResult.doubleBondLocants.includes(locant)) return bondBetween(chain[locant - 1], chain[locant % chain.length]);
  const sideChain = context.prefixSubstituents.find((substituent) => substituent.locant === locant && substituent.isJoinedByDoubleBond);
  return sideChain ? bondBetween(chain[locant - 1], sideChain.branchStartAtomId) : null;
}

/** Every set of E and Z in a name, with the hyphen after it: "(2E)-", "(1E,3Z)-", "(E)-". */
const STEREO_DESCRIPTORS_IN_NAME = /\((?:\d*[EZ])(?:,\d*[EZ])*\)-/g;

/** True when a name (of a group) has this E or Z, such as "1E", in its descriptors. */
function hasStereoDescriptor(name, descriptor) {
  return [...name.matchAll(STEREO_DESCRIPTORS_IN_NAME)].some(([text]) => text.slice(1, -2).split(',').includes(descriptor));
}

/** A group's name without its E and Z: "(1E)-prop-1-en-1-yl" -> "prop-1-en-1-yl". */
function stripStereoDescriptors(name) {
  return name.replace(STEREO_DESCRIPTORS_IN_NAME, '');
}

/**
 * The groups named as a prefix, or as the ester's or the N's group, that have E or Z double
 * bonds of their own, written at the front of their names (P-91.3):
 *   [{ groupName, atomIds, startAtomId, where }]
 * startAtomId: the group's carbon 1, the one joined to the rest of the molecule. where: a
 * message saying which group it is, for the heading of each of its double bonds.
 */
function listGroupsWithOwnStereo(context) {
  const { prefixSubstituents, namingResult, skeleton, namedSkeleton } = context;
  const groups = [];
  const startOfLinkedGroup = (atomIds, { firstAtomId, secondAtomId }) => (atomIds.includes(firstAtomId) ? firstAtomId : secondAtomId);
  for (const substituent of prefixSubstituents) {
    const { substituentName, locant, linkedAtomIds, linkedGroupName, linkBond, branchStartAtomId, sideChain, isAmine } = substituent;
    if (linkedAtomIds && linkedGroupName) {
      const values = { groupName: stripStereoDescriptors(linkedGroupName), locant };
      const where = message(isAmine ? 'namingSteps.cipPriority.beyondNitrogenOnCarbon' : 'namingSteps.cipPriority.beyondOxygenOnCarbon', values);
      groups.push({ groupName: linkedGroupName, atomIds: linkedAtomIds, startAtomId: startOfLinkedGroup(linkedAtomIds, linkBond), where });
    } else if (branchStartAtomId !== undefined && substituentName) {
      const atomIds = listCarbonIdsInBranch(sideChain ? skeleton : namedSkeleton, branchStartAtomId, chainAtomAt(context, locant));
      const where = message('namingSteps.cipPriority.inPrefix', { groupName: stripStereoDescriptors(substituentName), locant });
      groups.push({ groupName: substituentName, atomIds, startAtomId: branchStartAtomId, where });
    }
  }
  const { nitrogenGroup, esterGroup, esterGroupName } = namingResult;
  if (nitrogenGroup?.groupName) {
    const { groupName, atomIds, linkBond } = nitrogenGroup;
    groups.push({ groupName, atomIds, startAtomId: startOfLinkedGroup(atomIds, linkBond), where: message('namingSteps.cipPriority.inNitrogenGroup', { groupName: stripStereoDescriptors(groupName) }) });
  }
  if (esterGroup && esterGroupName) {
    const { atomIds, linkBond } = esterGroup;
    groups.push({ groupName: esterGroupName, atomIds, startAtomId: startOfLinkedGroup(atomIds, linkBond), where: message('namingSteps.cipPriority.inEsterGroup', { groupName: stripStereoDescriptors(esterGroupName) }) });
  }
  return groups.filter(({ groupName }) => stripStereoDescriptors(groupName) !== groupName);
}

/** The locant of each carbon of a group in its own numbering: how many bonds it is from the group's carbon 1, plus 1. */
function numberGroupCarbons(skeleton, atomIds, startAtomId) {
  const inGroup = new Set(atomIds);
  const locants = new Map([[startAtomId, 1]]);
  const queue = [startAtomId];
  while (queue.length > 0) {
    const atomId = queue.shift();
    for (const neighbourId of listNeighbourCarbonIds(skeleton, atomId)) {
      if (!inGroup.has(neighbourId) || locants.has(neighbourId)) continue;
      locants.set(neighbourId, locants.get(atomId) + 1);
      queue.push(neighbourId);
    }
  }
  return locants;
}

/**
 * Every E or Z double bond the name gives, each with what is needed to explain it:
 *   [{ firstAtomId, secondAtomId, heading, locantsOfCarbons, groupName }]
 * The main chain's first, then those in groups, each numbered as its group is (P-91.3).
 * locantsOfCarbons: Map from atom id to locant, in the numbering its descriptor uses;
 * groupName: the group's name without its E and Z, or null for the main chain's.
 */
function listExplainedDoubleBonds(context, configurations) {
  const { skeleton, chain } = context;
  const mainChainLocants = new Map(chain.map((atomId, index) => [atomId, index + 1]));
  const explained = [];
  for (const { locant, descriptor } of context.namingResult.stereoDescriptors) {
    const bond = findBondOfDescriptor(context, locant);
    if (!bond) continue;
    const heading = message('namingSteps.cipPriority.bondHeading', { descriptor: `${locant}${descriptor}` });
    explained.push({ ...bond, heading, locantsOfCarbons: mainChainLocants, groupName: null });
  }
  for (const { groupName, atomIds, startAtomId, where } of listGroupsWithOwnStereo(context)) {
    const locants = numberGroupCarbons(skeleton, atomIds, startAtomId);
    for (const { firstAtomId, secondAtomId } of listBondsAmong(skeleton, atomIds)) {
      const configuration = configurations.get(bondKey(firstAtomId, secondAtomId));
      if (configuration !== 'E' && configuration !== 'Z') continue;
      const descriptor = `${Math.min(locants.get(firstAtomId), locants.get(secondAtomId))}${configuration}`;
      // Only a descriptor the group's name really has, so a numbering worked out wrongly here shows nothing rather than a wrong locant.
      if (!hasStereoDescriptor(groupName, descriptor)) continue;
      const heading = message('namingSteps.cipPriority.bondHeadingInGroup', { descriptor, where });
      explained.push({ firstAtomId, secondAtomId, heading, locantsOfCarbons: locants, groupName: stripStereoDescriptors(groupName) });
    }
  }
  return explained;
}

function describeStereo(context) {
  const configurations = describeEveryDoubleBond(context.skeleton);
  const explainedBonds = listExplainedDoubleBonds(context, configurations);
  const descriptorTexts = [...context.name.matchAll(STEREO_DESCRIPTORS_IN_NAME)];
  if (explainedBonds.length === 0 || descriptorTexts.length === 0) return null;
  const descriptors = descriptorTexts.map(([text]) => text.slice(0, -1)).join(', ');
  const bonds = explainedBonds.map(({ firstAtomId, secondAtomId }) => bondBetween(firstAtomId, secondAtomId));
  const highlight = { atomIds: bonds.flatMap(({ firstAtomId, secondAtomId }) => [firstAtomId, secondAtomId]), bonds, groups: [] };
  const hasGroupDescriptors = explainedBonds.some(({ groupName }) => groupName !== null);
  return makeStep(
    'stereo',
    ['P-93.4.2.1', 'P-91.3', 'P-92.2.1.1'],
    message('namingSteps.stereo.title', { descriptors }),
    message('namingSteps.stereo.explanation', { descriptors, count: explainedBonds.length }),
    highlight,
    descriptorTexts.map((match) => ({ start: match.index, end: match.index + match[0].length })),
    {
      moreInfo: describeCipPriorities(context, explainedBonds, configurations),
      notes: hasGroupDescriptors ? [message('namingSteps.stereo.inGroup')] : [],
    },
  );
}

/** The atoms the CIP rules rank, highest atomic number first: every one a group on a C=C carbon can start with here. */
const ELEMENTS_BY_CIP_PRIORITY = ['I', 'Br', 'Cl', 'F', 'O', 'N', 'C', 'H'];
const ATOMIC_NUMBERS = { I: 53, Br: 35, Cl: 17, F: 9, O: 8, N: 7, C: 6, H: 1 };

/** A set of atoms compared by the CIP rules, as "{O, H, H}", with a duplicate atom in brackets: "{C, (C), H}". */
function writeSetOfAtoms(atoms) {
  return `{${atoms.map(({ element, isDuplicate }) => (isDuplicate ? `(${element})` : element)).join(', ')}}`;
}

/**
 * The (?) of the E and Z step: the order the CIP rules rank atoms in, and for each C=C, which
 * group on each of its carbons ranks higher and why, and so whether it is E or Z.
 */
function describeCipPriorities(context, explainedBonds, configurations) {
  const { skeleton, chain } = context;
  const mainChainLocants = new Map(chain.map((atomId, index) => [atomId, index + 1]));
  // A carbon of a group with its own E or Z is numbered as the group is; any other, as the main chain is.
  const nameCarbon = (atomId, { locantsOfCarbons, groupName }, capitalised) => {
    const inGroup = groupName !== null && locantsOfCarbons.has(atomId);
    const locant = inGroup ? locantsOfCarbons.get(atomId) : mainChainLocants.get(atomId);
    if (locant === undefined) return capitalised ? message('namingSteps.cipPriority.sideChainCarbon') : null;
    if (inGroup) return message(capitalised ? 'namingSteps.cipPriority.carbonOfGroup' : 'namingSteps.cipPriority.carbonOfGroupLower', { locant, groupName });
    return message(capitalised ? 'namingSteps.cipPriority.carbon' : 'namingSteps.cipPriority.carbonLower', { locant });
  };
  // Two groups with the same formula (told apart only by Sequence Rule 3) also say which carbon they go through.
  const labelOfGroup = ({ formula, firstCarbonId }, bond, isFormulaShared = false) => {
    const carbon = firstCarbonId === null ? null : nameCarbon(firstCarbonId, bond, false);
    if (formula !== null) return isFormulaShared && carbon !== null ? message('namingSteps.cipPriority.groupThrough', { formula, carbon }) : formula;
    return carbon === null ? message('namingSteps.cipPriority.ringGroup') : message('namingSteps.cipPriority.ringGroupThrough', { carbon });
  };
  const labelsOfCarbon = ({ higher, lower }, bond) => {
    const isFormulaShared = higher.formula !== null && higher.formula === lower.formula;
    return { higher: labelOfGroup(higher, bond, isFormulaShared), lower: labelOfGroup(lower, bond, isFormulaShared) };
  };
  const elementsCompared = new Set();
  let hasDuplicates = false;
  const breakdown = [];
  for (const bond of explainedBonds) {
    const explained = explainDoubleBondConfiguration(skeleton, bond.firstAtomId, bond.secondAtomId, configurations);
    if (!explained) continue;
    const lines = explained.carbons.map((carbon) => {
      const { atomId, higher, lower, decidedBy, sphere, higherAtoms, lowerAtoms } = carbon;
      elementsCompared.add(higher.firstElement).add(lower.firstElement);
      const values = { carbon: nameCarbon(atomId, bond, true), ...labelsOfCarbon(carbon, bond) };
      if (decidedBy === 'sequenceRule3') return message('namingSteps.cipPriority.bySequenceRule3', values);
      if (sphere === 0) {
        const [higherElement, lowerElement] = [higher.firstElement, lower.firstElement];
        return message('namingSteps.cipPriority.byFirstAtom', {
          ...values,
          higherElement,
          lowerElement,
          higherNumber: ATOMIC_NUMBERS[higherElement],
          lowerNumber: ATOMIC_NUMBERS[lowerElement],
        });
      }
      if ([...higherAtoms, ...lowerAtoms].some(({ isDuplicate }) => isDuplicate)) hasDuplicates = true;
      const sets = { element: higher.firstElement, higherSet: writeSetOfAtoms(higherAtoms), lowerSet: writeSetOfAtoms(lowerAtoms) };
      if (sphere === 1) return message('namingSteps.cipPriority.byNextAtoms', { ...values, ...sets });
      return message('namingSteps.cipPriority.byAtomsFurtherOut', { ...values, ...sets, count: sphere });
    });
    const [first, second] = explained.carbons;
    lines.push(
      message(explained.configuration === 'Z' ? 'namingSteps.cipPriority.sameSide' : 'namingSteps.cipPriority.oppositeSides', {
        first: labelsOfCarbon(first, bond).higher,
        second: labelsOfCarbon(second, bond).higher,
        descriptor: explained.configuration,
      }),
    );
    breakdown.push({ heading: bond.heading, lines });
  }
  return {
    title: message('namingSteps.cipPriority.title'),
    introduction: message('namingSteps.cipPriority.introduction'),
    rankedItems: ELEMENTS_BY_CIP_PRIORITY.map((element) => ({
      label: message('namingSteps.cipPriority.element', { element, atomicNumber: ATOMIC_NUMBERS[element] }),
      isThisMolecule: elementsCompared.has(element),
    })),
    hereLabel: message('namingSteps.cipPriority.here'),
    notes: [message('namingSteps.cipPriority.ties'), ...(hasDuplicates ? [message('namingSteps.cipPriority.duplicates')] : [])],
    breakdown,
  };
}

function describeEsterGroup(context) {
  const { esterGroup, esterGroupName } = context.namingResult;
  if (!esterGroup) return null;
  return makeStep(
    'esterGroup',
    ['P-65.6.3.2.1', 'P-65.6.3.3.1'],
    message('namingSteps.esterGroup.title', { groupName: esterGroupName }),
    message('namingSteps.esterGroup.explanation', { groupName: esterGroupName }),
    highlightLinkedGroup(context, esterGroup),
    [findSpanOfParts(context.parts, isInGroup('esterGroup'))],
  );
}

/** The groups on the drawn carbons that a step is about, as positions in each carbon's list of groups. */
export function listHighlightedGroupIndexes(skeleton, step) {
  const indexes = [];
  for (const carbonAtom of skeleton.carbonAtoms) {
    listGroupsOnCarbon(carbonAtom).forEach(({ symbol }, groupIndex) => {
      if (step.groups.some((group) => group.carbonAtomId === carbonAtom.atomId && group.symbol === symbol)) indexes.push({ carbonAtomId: carbonAtom.atomId, groupIndex });
    });
  }
  return indexes;
}
