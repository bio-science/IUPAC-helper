/**
 * The word parts that alkane, alkene, haloalkane, alcohol, aldehyde, ketone, carboxylic acid,
 * amine and ether names are built from.
 *
 * Sources (IUPAC 2013 Recommendations, the "Blue Book"):
 *   - P-21.2.1   names of unbranched alkanes: methane, ethane, propane and butane are
 *                retained names; after that, a numerical term with its final "a" removed,
 *                then "ane" (pentane, undecane, icosane, henicosane ...)
 *   - P-29.2     substituent names: the ending "ane" is replaced by "yl" (methane -> methyl),
 *                or by "ylidene" for a substituent joined by a double bond (methylidene)
 *   - P-31.1.1   alkenes: "ane" becomes "ene", with locants (but-1-ene, buta-1,3-diene)
 *   - P-32.1     substituents with double bonds: ethenyl, prop-2-en-1-yl ...
 *   - P-14.3     when locants are written and when they are left out (ethene, propene)
 *   - P-14.5     the alphanumerical order substituents are written in
 *   - P-14.2.1   numerical terms, which are also the multiplying prefixes (di, tri ... undeca ...)
 *   - P-16.3.4   a multiplied substituent goes in brackets when it begins with "dec", so
 *     (d)        tri(decyl) (three C10 groups) can't be confused with tridecyl (one C13 group)
 *   - P-16.3.6   brackets are also used wherever else they avoid that kind of confusion
 *   - P-61.3.1   halogens are named only as prefixes: fluoro, chloro, bromo, iodo
 *   - P-63.1.2   alcohols: the suffix "ol" (propan-1-ol, butane-1,3-diol), or the prefix
 *                "hydroxy" when OH can't be the suffix
 *   - P-66.6.1.1.1  aldehydes: the suffix "al" (propanal, butanedial), whose carbon is
 *                carbon 1 of the chain
 *   - P-14.3.4.1 the locants of "al" are never written, as it can only be at the end of the
 *                chain: butanedial, not butane-1,4-dial
 *   - P-64.2.2.1 ketones: the suffix "one" (propan-2-one, pentane-2,4-dione)
 *   - P-64.5     the prefix "oxo" for a ketone's O when it can't be the suffix: 3-oxobutanoic acid
 *   - P-65.1.2.1 carboxylic acids: the suffix "oic acid" (ethanoic acid, butanedioic acid),
 *                whose carbon is carbon 1 of the chain; like "al", its locants are never
 *                written (P-14.3.4.1)
 *   - P-65.1.6.3 in an acid, the O of a CHO group at the end of the chain is the prefix "oxo":
 *                4-oxobutanoic acid
 *   - P-41       the order of seniority of classes, which decides the suffix: carboxylic acids
 *                come before aldehydes, aldehydes before ketones, and ketones before alcohols.
 *                So when a molecule has more than one, the senior one is the suffix and the
 *                others are the prefixes "oxo" and "hydroxy": 3-hydroxybutanal, 3-oxobutanal,
 *                4-hydroxybutan-2-one, 2-hydroxypropanoic acid, 4-oxobutanoic acid
 *   - P-22.1.1   rings: "cyclo" before the name of the chain with the same number of carbons
 *                (cyclopropane, cyclohexane), and P-31.1.3.1 for their double bonds: one is
 *                always at carbon 1, and alone its locant is left out (cyclohexene,
 *                cyclohexa-1,3-diene)
 *   - P-65.1.2.2 a -COOH group joined to a ring: the suffix "carboxylic acid", added to the
 *                whole name of the ring (cyclohexanecarboxylic acid,
 *                cyclohexane-1,2-dicarboxylic acid, cyclohex-3-ene-1-carboxylic acid)
 *   - P-66.6.1.1.3  a -CHO group joined to a ring: the suffix "carbaldehyde", in the same way
 *                (cyclohexanecarbaldehyde), and the prefix "formyl" when it can't be the
 *                suffix (4-formylcyclohexane-1-carboxylic acid, P-65.1.7.2.1)
 *   - P-62.2.1.2 primary amines: the suffix "amine" (methanamine, propan-2-amine,
 *                ethane-1,2-diamine), which ranks below "ol" (P-41)
 *   - P-62.2.3   the prefix "amino" when NH2 can't be the suffix (2-aminoethan-1-ol,
 *                2-aminopropanoic acid), and "methylamino" and the like for -NH-R
 *   - P-63.2.2   ethers: the group R'-O- is a prefix on the parent, "oxy" after the name of
 *                R' (pentyloxy, ethenyloxy), with the retained contracted names methoxy, ethoxy,
 *                propoxy and butoxy (P-63.2.2.2): methoxyethane, 1,2-dimethoxyethane
 *   - P-16.5.1   a compound prefix such as methylamino or pentyloxy goes in brackets,
 *                2-(methylamino)ethan-1-ol, with ( ) inside [ ] inside { } when they are
 *                nested (P-16.5.4): 1-[(prop-2-en-1-yl)oxy]propane
 *   - P-16.3.6   several of a compound prefix take bis, tris, tetrakis ...: bis(methylamino),
 *                where methoxy and the other contracted names take di: dimethoxy (P-63.2.2.2)
 *   - P-16.7.1   the final "e" of a parent name is dropped before a suffix beginning with a
 *                vowel (propan-1-ol, but-3-en-2-ol, propanal, propan-2-one, propanoic acid), and
 *                kept before a consonant (propane-1,2-diol, butanedial, pentane-2,4-dione,
 *                butanedioic acid)
 */

import { joinNameParts, namePart } from './nameParts.js';

/** The prefix for each halogen (P-61.3.1): chloromethane, 1-bromo-2-iodoethane. */
export const PREFIX_BY_HALOGEN = { F: 'fluoro', Cl: 'chloro', Br: 'bromo', I: 'iodo' };

/** The prefix for OH when it isn't the suffix -ol (P-63.1.2). */
export const HYDROXY_PREFIX = 'hydroxy';

/** The prefix for NH2 when it isn't the suffix -amine (P-62.2.3): 2-aminoethan-1-ol. */
export const AMINO_PREFIX = 'amino';

/** The R-O- groups with contracted names (P-63.2.2.2), which are simple prefixes taking di, tri ... */
export const CONTRACTED_ALKOXY_PREFIXES = new Map([
  ['methyl', 'methoxy'],
  ['ethyl', 'ethoxy'],
  ['propyl', 'propoxy'],
  ['butyl', 'butoxy'],
]);

/** The group's name, in brackets if it has locants of its own: "prop-2-en-1-yl" -> "(prop-2-en-1-yl)", "(1E)-prop-1-en-1-yl" -> "[(1E)-prop-1-en-1-yl]". */
function groupNameInsideCompoundPrefix(groupName) {
  return /\d/.test(groupName) ? enclose(groupName) : groupName;
}

/**
 * The prefix for an ether's group R-O- (P-63.2.2): "methyl" -> "methoxy", "butyl" -> "butoxy",
 * "pentyl" -> "pentyloxy", "ethenyl" -> "ethenyloxy", "prop-2-en-1-yl" -> "(prop-2-en-1-yl)oxy".
 */
export function alkoxyPrefix(groupName) {
  return CONTRACTED_ALKOXY_PREFIXES.get(groupName) ?? `${groupNameInsideCompoundPrefix(groupName)}oxy`;
}

/** The prefix for a secondary amine's group R-NH- when NH can't be the suffix (P-62.2.3): "methyl" -> "methylamino". */
export function alkylaminoPrefix(groupName) {
  return `${groupNameInsideCompoundPrefix(groupName)}${AMINO_PREFIX}`;
}

/**
 * True for a compound prefix, made of a group's name and another prefix, such as methylamino or
 * pentyloxy (but not methoxy and the other contracted names, P-63.2.2.2), or of a side chain's
 * name with prefixes of its own, such as chloromethyl, 2-hydroxyethyl or (methylamino)methyl
 * (see isSubstitutedSideChainName).
 */
export function isCompoundPrefix(substituentName) {
  if (isSubstitutedSideChainName(substituentName)) return true;
  if (substituentName.endsWith(AMINO_PREFIX)) return substituentName !== AMINO_PREFIX;
  return substituentName.endsWith('yloxy') || /[)\]]oxy$/.test(substituentName);
}

/**
 * The prefixes a side chain's own prefixes can begin with (see nameSideChain.js): the halogens,
 * hydroxy, amino, oxo, carboxy and the contracted alkoxy names.
 */
const PREFIXES_ON_SIDE_CHAINS = () => [...Object.values(PREFIX_BY_HALOGEN), HYDROXY_PREFIX, AMINO_PREFIX, OXO_PREFIX, CARBOXY_PREFIX, ...CONTRACTED_ALKOXY_PREFIXES.values()];

/**
 * A name that starts with an alkyl-type prefix such as methyl or ethylidene, followed by more of
 * the name: methylpropyl, ethyl-7-methylnonan-3-yl, methylidenebutyl. Not methyl, ethylidene,
 * prop-2-en-1-yl or propan-2-yl on their own.
 */
const STARTS_WITH_AN_ALKYL_PREFIX = /^[a-z]+?yl(?:idene)?(?=[a-z([{]|-\d)(?!idene)/;

/** Multiplying prefixes a side chain's own prefixes can have: di, tri ... and bis, tris ... */
const MULTIPLYING_PREFIX_AT_START = /^(?:bis|tris|tetrakis|di|tri|tetra|penta|hexa|hepta|octa|nona|deca|undeca|dodeca)/;

/**
 * True for the name of a side chain with prefixes of its own (a substituted substituent,
 * P-29.6, P-16.5.1.2): chloromethyl, dichloromethyl, 2-chloroethyl, (1E)-3-chloroprop-1-en-1-yl,
 * carboxymethyl, chloroacetyl, (methylamino)methyl, methoxymethyl, and of a branched side chain
 * (see nameBranchedSideChain.js), whose branches are prefixes on its principal chain:
 * 2-methylpropyl, 2,4-dimethylpentyl, 5-ethyl-7-methylnonan-3-yl, 2-methylpropanoyl. Not for
 * methyl, prop-2-en-1-yl, propan-2-yl, tert-butyl, acetyl, or prefixes such as chloro and
 * methoxy themselves.
 */
export function isSubstitutedSideChainName(substituentName) {
  const rest = substituentName.replace(STEREODESCRIPTORS, '').replace(/^[\d,]+-/, '');
  if (/^[([{]/.test(rest)) return true;
  const withoutMultiplier = rest.replace(MULTIPLYING_PREFIX_AT_START, '');
  if (STARTS_WITH_AN_ALKYL_PREFIX.test(withoutMultiplier)) return true;
  return [rest, withoutMultiplier].some((text) => PREFIXES_ON_SIDE_CHAINS().some((prefix) => text.startsWith(prefix) && text.length > prefix.length && /^[a-z([]/.test(text.slice(prefix.length))));
}

/** A prefix in brackets, using [ ] round ( ) and { } round [ ] (P-16.5.4): "(methylamino)", "[(prop-2-en-1-yl)oxy]". */
function enclose(text) {
  if (text.includes('[')) return `{${text}}`;
  return text.includes('(') ? `[${text}]` : `(${text})`;
}

/** The multiplying prefix for compound prefixes (P-16.3.6): 2 -> "bis", 3 -> "tris", 4 -> "tetrakis". */
function multiplyingPrefixForCompoundPrefix(count) {
  if (count === 1) return '';
  if (count === 2) return 'bis';
  if (count === 3) return 'tris';
  return `${numericalTerm(count)}kis`;
}

/**
 * The prefix for the O of C=O when it isn't the suffix (P-64.5, P-65.1.6.3): a ketone's O in a
 * molecule that is also an aldehyde, as in 3-oxobutanal, or the O of a ketone or of a CHO group
 * in a carboxylic acid, as in 3-oxobutanoic acid and 4-oxobutanoic acid.
 */
export const OXO_PREFIX = 'oxo';

/**
 * The prefix for -COOH when it isn't the suffix (P-65.1.2.2.3). An acid in an open chain is
 * always at the end of the main chain, and the most senior group, so this app only uses it as
 * the substituent's name internally, never in a name.
 */
export const CARBOXY_PREFIX = 'carboxy';

/**
 * The prefix for -CHO on a ring when it isn't the suffix -carbaldehyde (P-66.6.1.1.3,
 * P-65.1.7.2.1): 4-formylcyclohexane-1-carboxylic acid. (At the end of a chain, a CHO
 * group's O is the prefix oxo instead, as its carbon is part of the chain.)
 */
export const FORMYL_PREFIX = 'formyl';

/**
 * The prefix for a -CO-NH2 group that is a whole side chain, with its carbon not part of any chain
 * (P-65.2.1.5, P-66.1.1.4.1.1 (2)). On the end of a longer side chain it is amino and oxo
 * instead (P-66.1.1.4.1.1 (1)): 2-amino-2-oxoethyl, not carbamoylmethyl.
 */
export const CARBAMOYL_PREFIX = 'carbamoyl';

/** The acyl group CH3-CO- (P-65.1.7.2.1): the preferred prefix, rather than ethanoyl or 1-oxoethyl. */
export const ACETYL_PREFIX = 'acetyl';

/** The group HOOC-CO- (P-65.1.7.2.1, P-65.1.2.2.3): the preferred prefix, rather than carboxycarbonyl. */
export const OXALO_PREFIX = 'oxalo';

/** The group H2N-CO-CO- (P-65.5.1, P-66.1.1.4.1.2): a retained preferred prefix, rather than amino(oxo)acetyl. */
export const OXAMOYL_PREFIX = 'oxamoyl';

/** The preferred prefix for an unsubstituted -C(CH3)3, 2-methylpropan-2-yl, which can't be substituted (P-29.4.1, P-29.6.1). */
export const TERT_BUTYL_PREFIX = 'tert-butyl';

/**
 * Older prefixes for branched side chains, each with the preferred prefix for the same group.
 * None of them can have groups of their own on them.
 *   'generalNomenclature'  kept by IUPAC, but only outside preferred IUPAC names (P-29.6.2.2)
 *   'notRecommended'       in the 1993 recommendations, but no longer recommended (P-29.6.3)
 * The iso of isopropyl is sorted under i, but sec is italic and left out, like tert (P-14.5.3).
 */
export const OLDER_SIDE_CHAIN_PREFIXES = new Map([
  ['isopropyl', { preferredPrefix: 'propan-2-yl', kind: 'generalNomenclature' }],
  ['isopropylidene', { preferredPrefix: 'propan-2-ylidene', kind: 'generalNomenclature' }],
  ['isobutyl', { preferredPrefix: '2-methylpropyl', kind: 'notRecommended' }],
  ['sec-butyl', { preferredPrefix: 'butan-2-yl', kind: 'notRecommended' }],
  ['isopentyl', { preferredPrefix: '3-methylbutyl', kind: 'notRecommended' }],
  ['tert-pentyl', { preferredPrefix: '2-methylbutan-2-yl', kind: 'notRecommended' }],
  ['neopentyl', { preferredPrefix: '2,2-dimethylpropyl', kind: 'notRecommended' }],
]);

/**
 * The name of an acyl group R-CO- whose C=O carbon is joined to the main chain, from the name
 * of its acid with "oic acid" changed to "oyl" (P-65.1.7.3.1): 2 -> "acetyl" (P-65.1.7.2.1),
 * 3 -> "propanoyl", (3, [2]) -> "prop-2-enoyl", (4, [2]) -> "but-2-enoyl",
 * (3, [], [2]) -> "prop-2-ynoyl". The C=O carbon is carbon 1, and the multiple bonds' locants
 * are always written, as in the acid (prop-2-enoic acid, prop-2-ynoic acid: P-14.3.4.4).
 */
export function acylSubstituentName(carbonCount, doubleBondLocants = [], tripleBondLocants = []) {
  if (carbonCount === 2 && tripleBondLocants.length === 0) return ACETYL_PREFIX;
  return `${mainChainName(carbonCount, doubleBondLocants, true, [], { tripleBondLocants }).slice(0, -1)}oyl`;
}

/**
 * A side chain's own prefixes, written in front of its name (see nameSideChain.js):
 * [{ locant: 2, substituentName: 'chloro' }] -> "2-chloro",
 * [{ locant: 2, substituentName: 'bromo' }, { locant: 1, substituentName: 'fluoro' }] -> "2-bromo-1-fluoro".
 * In alphanumerical order (P-14.5), each with its multiplying prefix (P-14.2.1). With
 * leaveOutLocants they run straight on, and with bracketsAfterFirst every simple prefix after the
 * first goes in brackets, as on a parent with one carbon (P-16.5.1.3): "bromo(chloro)", "chloro(difluoro)".
 */
export function writeSideChainPrefixes(prefixes, { leaveOutLocants = false, bracketsAfterFirst = false } = {}) {
  const locantsByName = new Map();
  for (const { locant, substituentName } of prefixes) {
    if (!locantsByName.has(substituentName)) locantsByName.set(substituentName, []);
    locantsByName.get(substituentName).push(locant);
  }
  const written = [...locantsByName.keys()].sort(compareSubstituentNamesAlphanumerically).map((substituentName, position) => {
    const locants = locantsByName.get(substituentName).sort((first, second) => first - second);
    if (leaveOutLocants) {
      return bracketsAfterFirst && position > 0 && !isCompoundPrefix(substituentName)
        ? `${multiplyingPrefixForCount(locants.length)}(${substituentName})`
        : writeMultipliedSubstituent(locants.length, substituentName);
    }
    return `${locants.join(',')}-${writeMultipliedSubstituent(locants.length, substituentName)}`;
  });
  return written.join(leaveOutLocants ? '' : '-');
}

/** The start of a ring's name (P-22.1.1): cyclopropane, cyclohexane, cyclohexyl. */
export const RING_PREFIX = 'cyclo';

/** The smallest ring there is: three carbons, in cyclopropane. */
export const SMALLEST_RING_SIZE = 3;

/** The reverse look-up: "chloro" -> "Cl". */
export const HALOGEN_BY_PREFIX = Object.fromEntries(Object.entries(PREFIX_BY_HALOGEN).map(([elementSymbol, prefix]) => [prefix, elementSymbol]));

/**
 * Numerical terms, from Table 1.4 of P-14.2.1. A number is written units first, then tens,
 * hundreds and thousands: 486 is hexa + octaconta + tetracta. Inside a longer term, 1 is
 * "hen" and 2 is "do" (henicosa = 21, docosa = 22), except that 11 is "undeca".
 */
const UNITS = ['', 'hen', 'do', 'tri', 'tetra', 'penta', 'hexa', 'hepta', 'octa', 'nona'];
const TENS = ['', 'deca', 'icosa', 'triaconta', 'tetraconta', 'pentaconta', 'hexaconta', 'heptaconta', 'octaconta', 'nonaconta'];
const HUNDREDS = ['', 'hecta', 'dicta', 'tricta', 'tetracta', 'pentacta', 'hexacta', 'heptacta', 'octacta', 'nonacta'];
const THOUSANDS = ['', 'kilia', 'dilia', 'trilia', 'tetralia', 'pentalia', 'hexalia', 'heptalia', 'octalia', 'nonalia'];

/** Table 1.4 stops at the thousands, so this is the largest number with a numerical term. */
export const LARGEST_NUMBER_WITH_A_NUMERICAL_TERM = 9999;

/** 2 -> "di", 14 -> "tetradeca", 21 -> "henicosa", 22 -> "docosa", 486 -> "hexaoctacontatetracta". */
export function numericalTerm(number) {
  if (number === 1) return 'mono';
  if (number === 2) return 'di';

  const units = number % 10;
  const tens = Math.floor(number / 10) % 10;
  const hundreds = Math.floor(number / 100) % 10;
  const thousands = Math.floor(number / 1000) % 10;

  let unitsAndTens;
  if (tens === 1 && units === 1) {
    unitsAndTens = 'undeca';
  } else if (tens === 2 && /[aeiou]$/.test(UNITS[units])) {
    // The "i" of "icosa" is dropped after a vowel: do + icosa -> docosa.
    unitsAndTens = UNITS[units] + 'cosa';
  } else if (tens === 0 && hundreds === 0 && thousands === 0) {
    // On their own, the units are the plain terms: tri, tetra ... nona.
    unitsAndTens = UNITS[units];
  } else {
    unitsAndTens = UNITS[units] + TENS[tens];
  }
  return unitsAndTens + HUNDREDS[hundreds] + THOUSANDS[thousands];
}

const RETAINED_ALKANE_STEMS = { 1: 'meth', 2: 'eth', 3: 'prop', 4: 'but' };

/** The stem of an alkane name: 5 -> "pent", 20 -> "icos". */
function alkaneStemForCarbonCount(carbonCount) {
  return RETAINED_ALKANE_STEMS[carbonCount] ?? numericalTerm(carbonCount).slice(0, -1);
}

/** Every alkane stem and multiplying prefix, both ways round, worked out once. */
const STEM_BY_CARBON_COUNT = new Map();
const CARBON_COUNT_BY_STEM = new Map();
const COUNT_BY_MULTIPLYING_PREFIX = new Map([['', 1]]);
for (let number = 1; number <= LARGEST_NUMBER_WITH_A_NUMERICAL_TERM; number++) {
  const stem = alkaneStemForCarbonCount(number);
  STEM_BY_CARBON_COUNT.set(number, stem);
  CARBON_COUNT_BY_STEM.set(stem, number);
  if (number >= 2) COUNT_BY_MULTIPLYING_PREFIX.set(numericalTerm(number), number);
}

/** This tool names chains of up to this many carbons: as far as the numerical terms go. */
export const LONGEST_SUPPORTED_CHAIN_LENGTH = LARGEST_NUMBER_WITH_A_NUMERICAL_TERM;

export const LARGEST_SUPPORTED_COUNT_OF_ONE_SUBSTITUENT = LARGEST_NUMBER_WITH_A_NUMERICAL_TERM;

/** "pentane" for 5 carbons. */
export function alkaneNameForCarbonCount(carbonCount) {
  return STEM_BY_CARBON_COUNT.get(carbonCount) + 'ane';
}

/** 1 -> "" (a single substituent has no prefix; "mono" isn't used), 2 -> "di", 3 -> "tri" ... */
export function multiplyingPrefixForCount(count) {
  if (count === 1) return '';
  return count >= 2 && count <= LARGEST_NUMBER_WITH_A_NUMERICAL_TERM ? numericalTerm(count) : undefined;
}

/**
 * The reverse look-up: "pent" -> 5. Returns undefined for an unknown stem.
 * The older spelling "eicos" (still used by CAS) is understood as "icos".
 */
export function carbonCountForAlkaneStem(stem) {
  return CARBON_COUNT_BY_STEM.get(stem.replace('eicos', 'icos'));
}

/** The reverse look-up: "tri" -> 3, "" -> 1. Returns undefined for an unknown prefix. */
export function countForMultiplyingPrefix(prefix) {
  return COUNT_BY_MULTIPLYING_PREFIX.get(prefix);
}

/** True for a suffix before which the final "a" of tetra, penta ... is left out (P-16.7.1 (c)). */
const startsWithAOrO = (suffixEnding) => /^[ao]/.test(suffixEnding);

/**
 * A suffix with the multiplying prefix for count, leaving out the final "a" of tetra, penta ...
 * before a suffix beginning with "a" or "o" (P-16.7.1 (c)), but not before "ene" or a consonant
 * (P-31.1.1.2):
 *   (2, "ol") -> "diol", (4, "ol") -> "tetrol", (4, "one") -> "tetrone", (4, "amine") -> "tetramine",
 *   (4, "ene") -> "tetraene", (4, "carboxylic acid") -> "tetracarboxylic acid"
 */
export function writeMultipliedSuffix(count, suffixEnding) {
  const prefix = multiplyingPrefixForCount(count);
  return (startsWithAOrO(suffixEnding) && prefix.endsWith('a') ? prefix.slice(0, -1) : prefix) + suffixEnding;
}

/**
 * The reverse look-up for the multiplying prefix of a suffix (see writeMultipliedSuffix):
 * ("tetr", "ol") -> 4, ("di", "ol") -> 2. The "a" kept, as in "tetraol", is read too, so the
 * molecule can still be drawn: ("tetra", "ol") -> 4.
 */
export function countForMultiplyingPrefixOfSuffix(prefix, suffixEnding) {
  return countForMultiplyingPrefix(prefix) ?? (startsWithAOrO(suffixEnding) ? countForMultiplyingPrefix(`${prefix}a`) : undefined);
}

/**
 * A substituent with its multiplying prefix, as written in a name:
 *   (1, "methyl") -> "methyl", (2, "methyl") -> "dimethyl", (3, "decyl") -> "tri(decyl)".
 * Brackets go round the substituent when it begins with "dec" (P-16.3.4 (d)), or when
 * prefix and substituent together would read as a different substituent (P-16.3.6).
 * A substituent name that has its own locants always goes in brackets, with di, tri ...
 * rather than bis, tris (P-16.3.4 (a) and (b)):
 *   (1, "prop-2-en-1-yl") -> "(prop-2-en-1-yl)", (2, "prop-1-en-2-yl") -> "di(prop-1-en-2-yl)",
 * with [ ] round a name that has ( ) in it already (P-16.5.4): (1, "(1E)-prop-1-en-1-yl") -> "[(1E)-prop-1-en-1-yl]".
 * A compound prefix always goes in brackets, with bis, tris ... (P-16.5.1, P-16.3.6):
 *   (1, "methylamino") -> "(methylamino)", (2, "methylamino") -> "bis(methylamino)",
 *   (1, "(prop-2-en-1-yl)oxy") -> "[(prop-2-en-1-yl)oxy]".
 */
export function writeMultipliedSubstituent(count, substituentName) {
  if (isCompoundPrefix(substituentName)) return multiplyingPrefixForCompoundPrefix(count) + enclose(substituentName);
  const prefix = multiplyingPrefixForCount(count);
  if (/\d/.test(substituentName)) return prefix + enclose(substituentName);
  if (prefix === '') return substituentName;
  // An italic prefix keeps its hyphen: di-tert-butyl (P-16.3.4, P-14.5.3).
  if (ITALIC_PREFIX_AT_START.test(substituentName)) return `${prefix}-${substituentName}`;
  const stemOfSubstituent = substituentName.replace(/yl(idene)?$/, '');
  const needsBrackets = substituentName.startsWith('dec') || carbonCountForAlkaneStem(prefix + stemOfSubstituent) !== undefined;
  return needsBrackets ? `${prefix}(${substituentName})` : prefix + substituentName;
}

/**
 * The italic prefixes tert- (P-29.6.1) and sec-, left out of alphanumerical order (P-14.5.3):
 * tert-butyl is sorted under b, as in 1-(butan-2-yl)-3-tert-butylbenzene.
 */
const ITALIC_PREFIX_AT_START = /^(?:tert|sec)-/;
const ITALIC_PREFIXES = /(^|[^a-z])(?:tert|sec)-/g;

/** E and Z stereodescriptors in a name, with their brackets and hyphen: "(2E,4Z)-", "(E)-". */
const STEREODESCRIPTORS = /\((?:\d*[EZ],)*\d*[EZ]\)-/g;

/**
 * The order substituent names are written in (P-14.5): alphabetical order of their letters,
 * ignoring locants, hyphens and brackets (P-14.5.1, P-14.5.2). If the letters are the same,
 * the one with the lower locant at the first point of difference comes first (P-14.5.4).
 *   "bromo" < "chloro" < "ethenyl" < "ethyl" < "ethylidene" < "methyl" < "prop-2-en-1-yl" < "propyl"
 *   "but-2-en-1-yl" < "but-3-en-1-yl"
 * Italic letters are left out too (P-14.5.3): tert-butyl is sorted under b, after butan-2-yl.
 * They only count when everything else is the same, with the name without them first:
 * 4-butyl-4-tert-butylcyclohexan-1-ol. For stereodescriptors such as (1E), the order then
 * makes no difference.
 * Returns a negative number when the first name is written first.
 */
export function compareSubstituentNamesAlphanumerically(firstNameWithStereo, secondNameWithStereo) {
  const withoutStereo = (name) => name.replace(STEREODESCRIPTORS, '');
  const firstName = withoutStereo(firstNameWithStereo);
  const secondName = withoutStereo(secondNameWithStereo);
  const lettersOf = (name) => name.replace(ITALIC_PREFIXES, '$1').replace(/[^a-z]/g, '');
  if (lettersOf(firstName) !== lettersOf(secondName)) return lettersOf(firstName) < lettersOf(secondName) ? -1 : 1;
  const locantsOf = (name) => (name.match(/\d+/g) ?? []).map(Number);
  const firstLocants = locantsOf(firstName);
  const secondLocants = locantsOf(secondName);
  for (let index = 0; index < Math.min(firstLocants.length, secondLocants.length); index++) {
    if (firstLocants[index] !== secondLocants[index]) return firstLocants[index] - secondLocants[index];
  }
  const hasItalicPrefix = (name) => (name.replace(ITALIC_PREFIXES, '$1') === name ? 0 : 1);
  return hasItalicPrefix(firstName) - hasItalicPrefix(secondName);
}

/**
 * The "ene" and "yne" endings of an unsaturated stem, with their locants, as name parts (P-31.1.1):
 *   ([2], [])     -> "-2-ene"
 *   ([1, 3], [])  -> "a-1,3-diene"
 *   ([], [1])     -> "-1-yne"
 *   ([1], [4])    -> "-1-en-4-yne"
 *   ([1, 3], [5]) -> "a-1,3-dien-5-yne"
 *   ([1], [3, 5]) -> "-1-ene-3,5-diyne"
 * Each multiple bond is given the lower of its two locants (P-31.1.1.1). "ene" is always cited
 * before "yne", and loses its final "e" before it, but not before "diyne", "triyne" ... :
 * cyclododeca-1,3,7-triene-5,11-diyne (P-31.1.1.1, P-16.7.1). The stem gets back an "a" for
 * easier saying before a multiplied first ending (P-31.1.1.2): "buta-1,3-diene",
 * "hexa-1,3-dien-5-yne", "buta-1,3-diyne", but "but-1-ene", "hept-1-ene-4,6-diyne".
 */
function unsaturationEndingParts(doubleBondLocants, tripleBondLocants) {
  const ending = (text) => namePart(text, 'ending', 'unsaturation');
  const parts = [];
  const firstCount = doubleBondLocants.length > 0 ? doubleBondLocants.length : tripleBondLocants.length;
  if (firstCount > 1) parts.push(ending('a'));
  const writeOne = (locants, endingText) => {
    parts.push(namePart('-', 'punctuation'));
    parts.push(namePart(locants.join(','), 'locants', 'unsaturation'));
    parts.push(namePart('-', 'punctuation', 'unsaturation'));
    parts.push(ending(`${multiplyingPrefixForCount(locants.length)}${endingText}`));
  };
  if (doubleBondLocants.length > 0) writeOne(doubleBondLocants, tripleBondLocants.length === 1 ? 'en' : 'ene');
  if (tripleBondLocants.length > 0) writeOne(tripleBondLocants, 'yne');
  return parts;
}

/** The "ene" and "yne" endings as text (see unsaturationEndingParts): ([1], [4]) -> "-1-en-4-yne". */
function writeUnsaturationEnding(doubleBondLocants, tripleBondLocants = []) {
  return joinNameParts(unsaturationEndingParts(doubleBondLocants, tripleBondLocants));
}

/**
 * The name of the main chain, from its length and the locants of its double bonds
 * (IUPAC 2013, P-31.1.1):
 *   (5, [])     -> "pentane"
 *   (4, [1])    -> "but-1-ene"
 *   (4, [1, 3]) -> "buta-1,3-diene"
 *   (3, [1, 2]) -> "propa-1,2-diene"
 * and of its triple bonds, given as the option tripleBondLocants (see unsaturationEndingParts):
 *   (4, [], false, [], { tripleBondLocants: [1] })     -> "but-1-yne"
 *   (5, [1], false, [], { tripleBondLocants: [4] })    -> "pent-1-en-4-yne"
 *   (6, [1, 3], false, [], { tripleBondLocants: [5] }) -> "hexa-1,3-dien-5-yne"
 * Ethene and ethyne, and propene and propyne with nothing attached, are written without
 * locants because there is only one place the multiple bond can be (P-14.3.4.2 (d)).
 * Otherwise, as soon as any locant is needed, every locant is written (P-14.3.3):
 * "2-methylprop-1-ene", "3-chloroprop-1-yne".
 *
 * hydroxyLocants, if any, add the suffix -ol (P-63.1.2), losing the final "e" of the
 * parent name before a vowel (P-16.7.1):
 *   (3, [], true, [1])       -> "propan-1-ol"
 *   (3, [], true, [1, 2])    -> "propane-1,2-diol"
 *   (4, [3], true, [2])      -> "but-3-en-2-ol"
 *   (4, [1, 3], true, [1])   -> "buta-1,3-dien-1-ol"
 * With leaveOutLocants, the suffix has no locants: "methanol", "ethanol", "methanediol".
 *
 * aldehydeCount, if given, adds the suffix -al instead (P-66.6.1.1.1), which never has
 * locants, as an aldehyde's carbon can only be at the end of the chain (P-14.3.4.1):
 *   (3, [], false, [], { aldehydeCount: 1 })  -> "propanal"
 *   (4, [], false, [], { aldehydeCount: 2 })  -> "butanedial"
 *   (4, [2], true, [], { aldehydeCount: 1 })  -> "but-2-enal"
 *
 * carboxylicAcidCount, if given, adds the suffix "oic acid" in the same way (P-65.1.2.1):
 *   (2, [], false, [], { carboxylicAcidCount: 1 })  -> "ethanoic acid"
 *   (4, [], false, [], { carboxylicAcidCount: 2 })  -> "butanedioic acid"
 *   (3, [2], true, [], { carboxylicAcidCount: 1 })  -> "prop-2-enoic acid"
 *   (3, [], true, [], { carboxylicAcidCount: 1, tripleBondLocants: [2] })  -> "prop-2-ynoic acid"
 *
 * ketoneLocants, if given, add the suffix -one instead of -ol (P-64.2.2.1), with its locants
 * written like those of -ol:
 *   (3, [], true, [], { ketoneLocants: [2] })     -> "propan-2-one"
 *   (5, [], true, [], { ketoneLocants: [2, 4] })  -> "pentane-2,4-dione"
 *   (4, [3], true, [], { ketoneLocants: [2] })    -> "but-3-en-2-one"
 *
 * isRing names a ring instead, with "cyclo" in front. A single double or triple bond on a ring
 * with nothing else on it has no locant: cyclohexene, cyclooctyne. The ring's -COOH and -CHO groups are given by their
 * locants, and are the suffixes "carboxylic acid" and "carbaldehyde", written with their
 * locants like -ol:
 *   (6, [], false, [], { isRing: true })                          -> "cyclohexane"
 *   (6, [1], false, [], { isRing: true })                         -> "cyclohexene"
 *   (6, [1, 3], false, [], { isRing: true })                      -> "cyclohexa-1,3-diene"
 *   (6, [], false, [1], { isRing: true, leaveOutLocants: true })  -> "cyclohexanol"
 *   (6, [], true, [], { isRing: true, carboxylicAcidLocants: [1, 2] })  -> "cyclohexane-1,2-dicarboxylic acid"
 *   (6, [], false, [], { isRing: true, aldehydeLocants: [1], leaveOutLocants: true })  -> "cyclohexanecarbaldehyde"
 *
 * aminoLocants, if given, add the suffix -amine (P-62.2.1.2) when there is no -ol, written
 * like -ol:
 *   (3, [], true, [], { aminoLocants: [2] })                          -> "propan-2-amine"
 *   (2, [], true, [], { aminoLocants: [1, 2] })                       -> "ethane-1,2-diamine"
 *   (2, [], false, [], { aminoLocants: [1], leaveOutLocants: true })  -> "ethanamine"
 */
export function mainChainName(...nameArguments) {
  return joinNameParts(mainChainNameParts(...nameArguments));
}

/**
 * mainChainName as a list of parts (see nameParts.js): the stem ("but") is in the group
 * 'parent', with "cyclo" for a ring; "ane", "ene" or "a-1,3-diene" in 'unsaturation'; and the
 * suffix with its locants in 'suffix'. "but-3-en-2-ol" is
 *   but | - | 3 | - | en | - | 2 | - | ol
 * Hyphens between the steps belong to none of them.
 */
export function mainChainNameParts(
  carbonCount,
  doubleBondLocants,
  hasSubstituents,
  hydroxyLocants = [],
  {
    leaveOutLocants = false,
    aldehydeCount = 0,
    ketoneLocants = [],
    carboxylicAcidCount = 0,
    isRing = false,
    aldehydeLocants = [],
    carboxylicAcidLocants = [],
    aminoLocants = [],
    tripleBondLocants = [],
  } = {},
) {
  const stem = (text) => namePart(text, 'stem', 'parent');
  const ending = (text) => namePart(text, 'ending', 'unsaturation');
  const parts = [];
  if (isRing) parts.push(namePart(RING_PREFIX, 'ringPrefix', 'parent'));
  const stemText = STEM_BY_CARBON_COUNT.get(carbonCount);
  const multipleBondCount = doubleBondLocants.length + tripleBondLocants.length;
  // One multiple bond written without a locant: "ene" or "yne".
  const onlyEnding = doubleBondLocants.length === 1 ? 'ene' : 'yne';
  if (multipleBondCount === 0) parts.push(stem(stemText), ending('ane'));
  else if (isRing && multipleBondCount === 1 && !hasSubstituents) parts.push(stem(stemText), ending(onlyEnding));
  else if (!isRing && carbonCount === 2) parts.push(stem(stemText), ending(onlyEnding));
  else if (!isRing && carbonCount === 3 && multipleBondCount === 1 && !hasSubstituents) parts.push(stem(stemText), ending(onlyEnding));
  else parts.push(stem(stemText), ...unsaturationEndingParts(doubleBondLocants, tripleBondLocants));

  // The final "e" of the parent is dropped before a suffix beginning with a vowel (P-16.7.1).
  const addSuffix = (suffix, locants = null) => {
    if (/^[aeiou]/.test(suffix)) {
      const last = parts[parts.length - 1];
      parts[parts.length - 1] = { ...last, text: last.text.slice(0, -1) };
    }
    if (locants !== null) {
      parts.push(namePart('-', 'punctuation'));
      parts.push(namePart(locants.join(','), 'locants', 'suffix'));
      parts.push(namePart('-', 'punctuation', 'suffix'));
    }
    parts.push(namePart(suffix, 'ending', 'suffix'));
    return parts;
  };

  let suffixLocants;
  let suffixEnding;
  if (isRing && carboxylicAcidLocants.length > 0) [suffixLocants, suffixEnding] = [carboxylicAcidLocants, 'carboxylic acid'];
  else if (carboxylicAcidCount > 0) return addSuffix(writeMultipliedSuffix(carboxylicAcidCount, 'oic acid'));
  else if (isRing && aldehydeLocants.length > 0) [suffixLocants, suffixEnding] = [aldehydeLocants, 'carbaldehyde'];
  else if (aldehydeCount > 0) return addSuffix(writeMultipliedSuffix(aldehydeCount, 'al'));
  else if (ketoneLocants.length > 0) [suffixLocants, suffixEnding] = [ketoneLocants, 'one'];
  else [suffixLocants, suffixEnding] = hydroxyLocants.length > 0 || aminoLocants.length === 0 ? [hydroxyLocants, 'ol'] : [aminoLocants, 'amine'];
  if (suffixLocants.length === 0) return parts;

  const suffix = writeMultipliedSuffix(suffixLocants.length, suffixEnding);
  if (leaveOutLocants) return addSuffix(suffix);
  return addSuffix(suffix, [...suffixLocants].sort((first, second) => first - second));
}

/** A ring as a substituent (P-29.2): 3 -> "cyclopropyl", 6 -> "cyclohexyl". */
export function cycloalkylSubstituentName(carbonCount) {
  return RING_PREFIX + STEM_BY_CARBON_COUNT.get(carbonCount) + 'yl';
}

/**
 * The name of an unbranched substituent, joined to the main chain by its carbon 1
 * (IUPAC 2013, P-29.2 and P-32.1):
 *   joined by a single bond: "yl"       methyl, ethyl, propyl ...
 *   joined by a double bond: "ylidene"  methylidene, ethylidene, propylidene ...
 * With double or triple bonds of its own, it is named from the alkene or alkyne, and the
 * joining carbon is always carbon 1, because free valences come before multiple bonds for low
 * locants (P-29.2, P-32.1.1):
 *   ethenyl (CH2=CH-), ethenylidene (CH2=C=), prop-2-en-1-yl (CH2=CH-CH2-),
 *   prop-2-en-1-ylidene (CH2=CH-CH=), buta-1,3-dien-1-yl (CH2=CH-CH=CH-),
 *   ethynyl (HC≡C-), prop-2-yn-1-yl (HC≡C-CH2-), but-3-yn-1-yl, but-1-en-3-yn-1-yl
 * The final "e" of "ene" or "yne" is dropped before "yl" (en-1-yl, yn-1-yl). Ethenyl and
 * ethynyl have no locants, as there is only one of each (P-14.3.4.4).
 *
 * doubleBondLocants, tripleBondLocants: multiple bonds inside the substituent, numbered from
 * the joining carbon.
 */
export function unbranchedSubstituentName(carbonCount, isJoinedByDoubleBond, doubleBondLocants = [], tripleBondLocants = []) {
  const ending = isJoinedByDoubleBond ? 'ylidene' : 'yl';
  if (doubleBondLocants.length === 0 && tripleBondLocants.length === 0) return STEM_BY_CARBON_COUNT.get(carbonCount) + ending;
  if (carbonCount === 2) return (doubleBondLocants.length === 1 ? 'ethen' : 'ethyn') + ending;
  return `${STEM_BY_CARBON_COUNT.get(carbonCount)}${writeUnsaturationEnding(doubleBondLocants, tripleBondLocants).slice(0, -1)}-1-${ending}`;
}
