/**
 * Reading a typed alkane, alkene, haloalkane, alcohol, aldehyde, ketone, carboxylic acid,
 * ester, amide, amine or ether name, such as "3-ethyl-2,2-dimethylpentane", "2-methylbut-2-ene",
 * "1,2-dichloropropane", "2-methylpropan-2-ol", "3-hydroxybutanal", "pentane-2,4-dione",
 * "2-methylpropanoic acid", "propan-2-amine" or "methoxyethane", into its parts.
 *
 * A name is a series of substituent groups followed by the parent chain:
 *
 *     3-ethyl  -  2,2-dimethyl  pentane          2-methyl  but-2-ene
 *     |           |             |                |         |
 *     locant-     locants-      parent:          locant-   parent: stem, locants of the
 *     name        prefix+name   stem + "ane"     name      double bonds, "ene"
 *
 * Parents:      pentane, but-2-ene, buta-1,3-diene, ethene and propene (no locants needed),
 *               and with triple bonds (P-31.1.1): but-2-yne, buta-1,3-diyne, pent-1-en-4-yne,
 *               hept-1-ene-4,6-diyne, ethyne and propyne, cyclooctyne. Acetylene, the PIN
 *               for HC≡CH (P-31.1.2.1), is read as ethyne.
 * Alcohols:     the parent with the suffix -ol: propan-2-ol, propane-1,2-diol, but-3-en-2-ol,
 *               but-2-ene-1,4-diol; and without locants, methanol and ethanol, which are
 *               checked like halogens without locants (below)
 * Aldehydes:    the parent with the suffix -al: propanal, butanedial, but-2-enal. The CHO group
 *               is always at the end of the chain, carbon 1 (and the last carbon for -dial), so
 *               its locants are not written (P-14.3.4.1), but propan-1-al is still read.
 *               Retained names (see retainedNames.js), which are the preferred IUPAC names,
 *               are read as the systematic names: formaldehyde and acetaldehyde as methanal and
 *               ethanal, chloroacetaldehyde as chloroethanal, and glyoxal (kept only outside
 *               preferred names) as ethanedial.
 * Ketones:      the parent with the suffix -one, like -ol: propan-2-one, pentane-2,4-dione,
 *               but-3-en-2-one, and the older style 2-butanone. The locants are needed, except
 *               in the names propanone and butanone that A-level courses use, which are read
 *               as propan-2-one and butan-2-one, as is acetone.
 * Acids:        the parent with the suffix "oic acid", like -al: ethanoic acid, butanedioic
 *               acid, prop-2-enoic acid. Its carbon is always at the end of the chain, so its
 *               locants are not written (P-14.3.4.1), but ethan-1-oic acid is still read. The
 *               retained names formic acid, acetic acid (chloroacetic acid ...) and oxalic acid
 *               are read as methanoic acid, ethanoic acid and ethanedioic acid.
 * Side chains:  methyl, ethyl ... (joined by a single bond)
 *               methylidene, ethylidene ... (joined by a double bond)
 *               ethenyl, ethenylidene, and in brackets (prop-2-en-1-yl), (buta-1,3-dien-1-yl) ...
 *               ethynyl, and (prop-2-yn-1-yl), (but-1-en-3-yn-1-yl), (pent-1-yn-3-yl) (P-32.1.1)
 *               With groups on them, in brackets, numbered from the carbon joined to the main
 *               chain (P-29.2): (chloromethyl), (2-hydroxyethyl), [bromo(chloro)methyl],
 *               (2,2,2-trifluoroethyl), (2-oxopropyl), [(methylamino)methyl], bis(chloromethyl),
 *               and carboxy for a COOH at the end of one: (carboxymethyl), (2-carboxyethyl).
 *               Acyl groups, with the C=O on carbon 1 (P-65.1.7): acetyl, propanoyl,
 *               (prop-2-enoyl), (chloroacetyl), and oxalo, formyl and carboxy, which are a whole
 *               group in one word (see readSubstitutedSideChain).
 * Rings:        "cyclo" before the parent: cyclohexane, cyclohex-2-en-1-ol, cyclohexanone, and
 *               cyclohexene with no locant (P-31.1.3.1), and the older style
 *               "1,3-cyclohexadiene". A -COOH or -CHO group joined to a ring is the suffix
 *               "carboxylic acid" or "carbaldehyde": cyclohexanecarboxylic acid,
 *               cyclohexane-1,2-dicarboxylic acid, cyclohexanecarbaldehyde, and the prefix
 *               formyl (4-formylcyclohexane-1-carboxylic acid). A ring as a side chain is
 *               cyclopropyl, cyclohexyl ...
 *               On a ring, and on methane, side chains can be written without locants too:
 *               methylcyclohexane, cyclohexylmethanol.
 * Esters:      the group on the O as a word of its own, then the acid's name with "oate" for
 *               "oic acid", or "carboxylate" for "carboxylic acid": methyl ethanoate, ethyl
 *               2-hydroxypropanoate, prop-2-en-1-yl methanoate, methyl cyclohexanecarboxylate.
 *               Methyl acetate, methyl formate and dimethyl oxalate are read as methyl
 *               ethanoate, methyl methanoate and dimethyl ethanedioate.
 * Amides:       the acid's name with "amide" for "oic acid", or "carboxamide" for "carboxylic
 *               acid": ethanamide, butanediamide, cyclohexanecarboxamide. A group on the N is a
 *               prefix with the locant N: N-methylethanamide, 2-hydroxy-N-methylpropanamide,
 *               N,2-dimethylpropanamide, N-(prop-2-en-1-yl)ethanamide. Acetamide, formamide
 *               and oxamide are read as ethanamide, methanamide and ethanediamide.
 * Amines:       the parent with the suffix -amine, like -ol: methanamine, propan-2-amine,
 *               ethane-1,2-diamine, cyclohexanamine. A group on the N is a prefix with the
 *               locant N, as in an amide: N-methylethanamine, N,2-dimethylpropan-1-amine.
 *               The older names methylamine, ethylamine, dimethylamine and ethylmethylamine
 *               are read too, as methanamine, ethanamine, N-methylmethanamine and
 *               N-methylethanamine (P-62.2.1.2 accepts the first kind outside preferred names;
 *               the second, P-62.2.2, it no longer does).
 * Ethers:       the group on the far side of the O as a prefix: methoxy, ethoxy, propoxy and
 *               butoxy (methoxyethane, 1,2-dimethoxyethane), or "oxy" after any other group
 *               (1-(pentyloxy)hexane, (cyclohexyloxy)methane, 1-[(prop-2-en-1-yl)oxy]propane).
 *               The older names dimethyl ether, diethyl ether and ethyl methyl ether are read
 *               as methoxymethane, ethoxyethane and methoxyethane (P-63.2.4.1).
 * Prefixes:     fluoro, chloro, bromo, iodo, hydroxy for OH, oxo for a ketone's O
 *               (3-oxobutanal), or for a CHO group's O in an acid (4-oxobutanoic acid), amino
 *               for NH2 (2-aminopropanoic acid), and methylamino and the like for -NH-CH3,
 *               written in brackets (2-(methylamino)ethan-1-ol), as are ones such as
 *               (pentyloxy). Brackets can be ( ), [ ] or { }.
 *               All but oxo can be written without locants, as in
 *               chloroethane, trichloroethene, trichloro(fluoro)methane and chloroethanal; the
 *               locants are then filled in from carbon 1 (see convertParsedNameToDescription), and
 *               interpretOmniboxText.js checks that the name really needs none.
 *
 * E and Z:     in brackets at the front of the name, each after the locant of its double bond,
 *               with a hyphen after them: (2E)-but-2-ene, (2Z,4E)-hexa-2,4-diene, and without
 *               locants in a name that has none, (E)-cyclooctene (P-93.4.2.1). Those of a side
 *               chain go inside its brackets: 3-[(1E)-prop-1-en-1-yl]; in an ester, those of the
 *               acid go in front of its word, and those of the group on the O in front of
 *               that: (2E)-but-2-en-1-yl (2Z)-but-2-enoate. They are taken out before the rest is
 *               read (see takeOutStereodescriptors). Also read: E or Z without brackets
 *               ("2E-but-2-ene"), without the hyphen ("(2E)but-2-ene"), without locants where
 *               they are needed, and cis and trans, which name the same thing as Z and E when
 *               each carbon of the double bond has one hydrogen.
 *
 * The parser is deliberately forgiving about what it accepts, so that the molecule can still
 * be drawn and the student can be shown the correct name. It reads names that are not
 * correct IUPAC names, such as "2-ethylbutane", "2-methyl-3-ethylpentane" or
 * "but-1,3-diene" or "propan-1,2-diol", and the older style many books still use, with the
 * locants in front: "2-pentene", "2-methyl-2-butene", "1,3-butadiene", "2-propanol",
 * "1,2-ethanediol".
 */

import {
  AMINO_PREFIX,
  CONTRACTED_ALKOXY_PREFIXES,
  HALOGEN_BY_PREFIX,
  HYDROXY_PREFIX,
  OXO_PREFIX,
  CARBOXY_PREFIX,
  FORMYL_PREFIX,
  ACETYL_PREFIX,
  OXALO_PREFIX,
  RING_PREFIX,
  TERT_BUTYL_PREFIX,
  OLDER_SIDE_CHAIN_PREFIXES,
  alkoxyPrefix,
  alkylaminoPrefix,
  carbonCountForAlkaneStem,
  cycloalkylSubstituentName,
  countForMultiplyingPrefix,
  countForMultiplyingPrefixOfSuffix,
  mainChainName,
  multiplyingPrefixForCount,
  unbranchedSubstituentName,
  writeMultipliedSubstituent,
  writeMultipliedSuffix,
} from './alkaneNamingVocabulary.js';
import { bondsUsedBySubstituent, countFreeBondsByLocant, findProblemWithMultipleBondLocants } from './buildCarbonSkeletonFromDescription.js';
import { RETAINED_NAME_ENDINGS } from './retainedNames.js';
import { message } from '../languages/translate.js';

const LOCANTS = String.raw`\d+(?:,\d+)*`;

/**
 * e.g. "2,2-dimethyl", "3-methylidene", "2,3-di(decyl)" or "4-(prop-2-en-1-yl)": locants, a
 * hyphen, then either letters ending in "yl" or "ylidene", or a prefix and a substituent in
 * brackets. Which letters are the prefix and which the substituent is worked out afterwards
 * (see splitPrefixFromSubstituent).
 */
const SUBSTITUENT_GROUP_AT_START_OF_TEXT = new RegExp(String.raw`^(${LOCANTS})-(?:([a-z]*)\(([^()]+)\)|([a-z]+?)yl(idene)?)`);

/**
 * The same without locants, as on a ring or methane: "methyl" in "methylcyclohexane", or
 * "(prop-2-en-1-yl)". A plain side chain is tried first, so "methyl(methylidene)" is methyl,
 * then (methylidene).
 */
const SUBSTITUENT_GROUP_WITHOUT_LOCANTS_AT_START_OF_TEXT = /^(?:([a-z]+?)yl(idene)?|([a-z]*)\(([^()]+)\))/;

/** The prefixes made of one word that hang a group (not a side chain) on the main chain. */
const SIMPLE_PREFIXES = String.raw`fluoro|chloro|bromo|iodo|hydroxy|oxo|formyl|amino|methoxy|ethoxy|propoxy|butoxy`;

/**
 * e.g. "2,2-dichloro", "bromo", "di(fluoro)", "(chloro)", "2-hydroxy", "3-oxo", "4-formyl",
 * "2-amino" or "1,2-dimethoxy": locants and a hyphen (which may be left out), letters for the
 * multiplying prefix, then a halogen, hydroxy, oxo, formyl, amino or one of the contracted
 * alkoxy prefixes (P-63.2.2.2), which may be in brackets.
 */
const HALOGEN_GROUP_AT_START_OF_TEXT = new RegExp(String.raw`^(?:(${LOCANTS})-)?([a-z]*?)(?:\((${SIMPLE_PREFIXES})\)|(${SIMPLE_PREFIXES}))`);

/** The simple prefixes that can be on a side chain: those of a main chain but formyl, and carboxy for a COOH at its end (P-65.1.2.2.3). */
const SIDE_CHAIN_SIMPLE_PREFIXES = String.raw`fluoro|chloro|bromo|iodo|hydroxy|oxo|carboxy|amino|methoxy|ethoxy|propoxy|butoxy`;

/** Like HALOGEN_GROUP_AT_START_OF_TEXT, for a group on a side chain: the "2-bromo" of "2-bromo-1-hydroxyethyl". */
const SIDE_CHAIN_GROUP_AT_START_OF_TEXT = new RegExp(String.raw`^(?:(${LOCANTS})-)?([a-z]*?)(?:\((${SIDE_CHAIN_SIMPLE_PREFIXES})\)|(${SIDE_CHAIN_SIMPLE_PREFIXES}))`);

/** An acyl group named from its acid (P-65.1.7.3.1): "propanoyl", "butanoyl", and "ethanoyl" for acetyl. */
const ALKANOYL_SUBSTITUENT = /^([a-z]+?)anoyl$/;

/**
 * The stem of a chain with double or triple bonds, and the ending that says where they are, as in
 * "prop-2-en", "buta-1,3-dien", "prop-2-yn" and "hex-1-en-5-yn" (P-31.1.1). The "a" after
 * the stem is optional, and so is the "e" of "ene" before the "-" (pent-1-ene-4-yne is read too).
 * Groups: stem, double bond locants, their multiplying prefix, triple bond locants, theirs.
 * readUnsaturatedStem makes sense of them.
 */
const UNSATURATED_STEM = String.raw`([a-z]+?)a?(?:-(${LOCANTS})-([a-z]*?)ene?)?(?:-(${LOCANTS})-([a-z]*?)yn)?`;

/** An acyl group with double or triple bonds of its own: "prop-2-enoyl", "buta-2,3-dienoyl", "prop-2-ynoyl". */
const ALKENOYL_SUBSTITUENT = new RegExp(String.raw`^${UNSATURATED_STEM}oyl$`);

/**
 * The endings of the side chains that are written as one word without brackets: "acetyl",
 * "oxalo", "carboxy", "propanoyl", "tert-butyl", and the older prefixes such as "isopropyl".
 */
const ONE_WORD_SIDE_CHAIN_ENDING = new RegExp(
  ['acetyl', 'oxalo', 'carboxy', 'anoyl', 'tert-butyl', ...[...OLDER_SIDE_CHAIN_PREFIXES.keys()].sort((a, b) => b.length - a.length)].join('|'),
);

/** Locants and a hyphen at the start of the text, if there are any. */
const LOCANTS_AND_HYPHEN_AT_START_OF_TEXT = new RegExp(String.raw`^(?:(${LOCANTS})-)?`);

/** A compound prefix not in brackets: "methylamino", "pentyloxy", "dipentyloxy" (a group's letters, then amino or oxy). */
const COMPOUND_PREFIX_WITHOUT_BRACKETS = /^([a-z]+?yl)(amino|oxy)/;

/** What is inside the brackets of a compound prefix: "methylamino", "pentyloxy", "(prop-2-en-1-yl)oxy". */
const COMPOUND_PREFIX_IN_BRACKETS = /^(\(.+\)|[a-z]+?yl)(amino|oxy)$/;

const CLOSING_BRACKET_FOR = { '(': ')', '[': ']', '{': '}' };

/**
 * A suffix written with its locants before it: "propan-2-ol", "but-2-ene-1,4-diol",
 * "propan-2-one", "pentane-2,4-dione", and "propan-1-al" and "ethan-1-oic acid", whose
 * locants are usually left out.
 */
const suffixWithLocants = (suffix) => new RegExp(String.raw`^(.*[a-z])-(${LOCANTS})-([a-z]*)${suffix}$`);

/** The older style, with the locants in front: "2-propanol", "1,2-ethanediol", "2-butanone". */
const olderStyleSuffix = (suffix) => new RegExp(String.raw`^(${LOCANTS})-([a-z]+)${suffix}$`);

/**
 * Whole names that are read as another name, though neither is a preferred IUPAC name:
 *   - acetone, which IUPAC keeps for propan-2-one only in general nomenclature (P-64.2.1.2)
 *   - propanone and butanone, as A-level courses often write them. Each can only mean one
 *     molecule, but IUPAC keeps their locants (P-14.3.4.4): propan-2-one, butan-2-one.
 * kind says which, for the note when such a name is given as an answer (see checkStudentAnswer.js).
 */
const OTHER_WHOLE_NAMES = new Map([
  ['acetone', { name: 'propan-2-one', kind: 'generalNomenclature' }],
  ['propanone', { name: 'propan-2-one', kind: 'locantLeftOut' }],
  ['butanone', { name: 'butan-2-one', kind: 'locantLeftOut' }],
]);

/**
 * Reads a name that is accepted, but is written differently from the systematic name the
 * parser reads, as that systematic name. Returns { name, kind }, where kind is:
 *   null                    nothing was swapped
 *   'retained'              a retained name that is the PIN, such as acetic acid (see retainedNames.js)
 *   'generalNomenclature'   a name IUPAC keeps only outside preferred names: acetone, glyoxal
 *   'locantLeftOut'         propanone or butanone
 *   readOtherAcceptedName('chloroacetaldehyde') -> { name: 'chloroethanal', kind: 'retained' }
 *   readOtherAcceptedName('acetone')            -> { name: 'propan-2-one', kind: 'generalNomenclature' }
 * Runs of spaces count as one: "ethanoic  acid" -> "ethanoic acid". The locant N of an amide,
 * typed as a small n, is put back as a capital: "n-methylethanamide" -> "N-methylethanamide".
 */
export function readOtherAcceptedName(typedText) {
  const text = typedText.replace(/\s+/g, ' ').replace(/(^|[-,(])n(?=[-,])/g, '$1N');
  if (OTHER_WHOLE_NAMES.has(text)) return OTHER_WHOLE_NAMES.get(text);
  for (const { retained, systematic, mayFollowALetter, isPreferred } of RETAINED_NAME_ENDINGS) {
    if (!text.endsWith(retained)) continue;
    // "methyl formate", but not "cyclohexanecarboxamide" for oxamide.
    const before = text.slice(0, -retained.length);
    if (!mayFollowALetter && before !== '' && !before.endsWith(' ')) continue;
    return { name: before + systematic, kind: isPreferred ? 'retained' : 'generalNomenclature' };
  }
  return { name: text, kind: null };
}

/**
 * readOtherAcceptedName's name alone: "chloroacetaldehyde" -> "chloroethanal", "propanone" ->
 * "propan-2-one", "acetic acid" -> "ethanoic acid".
 */
export function replaceOtherAcceptedName(typedText) {
  return readOtherAcceptedName(typedText).name;
}

/** The older style of ring name, with the locants in front: "1,3-cyclohexadiene". */
const OLDER_STYLE_RING_PARENT = new RegExp(String.raw`^(${LOCANTS})-${RING_PREFIX}([a-z]+)$`);

/** e.g. "pentane", and nothing after it. */
const ALKANE_PARENT_FILLING_WHOLE_TEXT = /^([a-z]+)ane$/;

/** e.g. "but-2-ene" or "buta-1,3-diene" (the "a" is optional, so "but-1,3-diene" is read too). */
const ALKENE_PARENT_FILLING_WHOLE_TEXT = new RegExp(String.raw`^([a-z]+?)a?-(${LOCANTS})-([a-z]*)ene$`);

/** e.g. "ethene" or "propene", or "butene" (which needs a locant). */
const ALKENE_PARENT_WITHOUT_LOCANTS = /^([a-z]+)ene$/;

/** The older style, with the locants in front: "2-pentene", "1,3-butadiene". */
const OLDER_STYLE_ALKENE_PARENT = new RegExp(String.raw`^(${LOCANTS})-([a-z]+)ene$`);

/**
 * A side chain with double or triple bonds of its own, written in brackets: "prop-2-en-1-yl",
 * "buta-1,3-dien-1-ylidene", "prop-2-yn-1-yl", "but-1-en-3-yn-1-yl".
 */
const ALKENYL_SUBSTITUENT = new RegExp(String.raw`^${UNSATURATED_STEM}-1-yl(idene)?$`);

/** An open-chain parent with one or more triple bonds: "but-2-yne", "buta-1,3-diyne", "pent-1-en-4-yne", "hept-1-ene-4,6-diyne". */
const ALKYNE_PARENT_FILLING_WHOLE_TEXT = new RegExp(String.raw`^([a-z]+?)a?(?:-(${LOCANTS})-([a-z]*?)ene?)?-(${LOCANTS})-([a-z]*)yne$`);

/** e.g. "ethyne" or "propyne", or "butyne" (which needs a locant). */
const ALKYNE_PARENT_WITHOUT_LOCANTS = /^([a-z]+)yne$/;

/** The older style, with the locants in front: "2-butyne", "1,3-butadiyne". */
const OLDER_STYLE_ALKYNE_PARENT = new RegExp(String.raw`^(${LOCANTS})-([a-z]+)yne$`);

/**
 * A side chain joined by any of its carbons (alkanyl type, P-29.2): "propan-2-yl",
 * "pentan-3-ylidene", and "propan-1-yl", which is read as propyl.
 */
const ALKANYL_SUBSTITUENT = /^([a-z]+?)an-(\d+)-yl(idene)?$/;

/** The same with double or triple bonds of its own: "but-3-en-2-yl", "hexa-1,5-dien-3-yl", "prop-1-en-2-yl", "pent-1-yn-3-yl", "hept-1-en-6-yn-4-yl". */
const ALKENYL_SUBSTITUENT_JOINED_ANYWHERE = new RegExp(String.raw`^${UNSATURATED_STEM}-(\d+)-yl(idene)?$`);

/** A side chain named from its stem alone: "decyl", "ethenyl", "methylidene". */
const PLAIN_SUBSTITUENT = /^([a-z]+?)yl(idene)?$/;

const GENERAL_NOT_RECOGNISED_MESSAGE = message('readingNames.notRecognised');

/** The group's name for each contracted alkoxy prefix: "methoxy" -> "methyl". */
const GROUP_NAME_BY_CONTRACTED_ALKOXY_PREFIX = new Map([...CONTRACTED_ALKOXY_PREFIXES].map(([groupName, prefix]) => [prefix, groupName]));

const parseLocants = (locantsText) => locantsText.split(',').map(Number);

/**
 * The groups matched by UNSATURATED_STEM, as { carbonCount, doubleBondLocants, tripleBondLocants },
 * or null if the stem isn't an alkane's, a multiplying prefix doesn't match its locants, or there
 * are no multiple bonds at all.
 */
function readUnsaturatedStem([stem, doubleBondLocantsText, doubleBondPrefix, tripleBondLocantsText, tripleBondPrefix]) {
  const carbonCount = carbonCountForAlkaneStem(stem);
  if (carbonCount === undefined || (doubleBondLocantsText === undefined && tripleBondLocantsText === undefined)) return null;
  const readLocants = (locantsText, multiplyingPrefix) => {
    if (locantsText === undefined) return [];
    const locants = parseLocants(locantsText);
    return countForMultiplyingPrefix(multiplyingPrefix) === locants.length ? locants : null;
  };
  const doubleBondLocants = readLocants(doubleBondLocantsText, doubleBondPrefix);
  const tripleBondLocants = readLocants(tripleBondLocantsText, tripleBondPrefix);
  if (doubleBondLocants === null || tripleBondLocants === null) return null;
  return { carbonCount, doubleBondLocants, tripleBondLocants };
}

/** "bis", "tris", "tetrakis" ... are also accepted in front of a bracketed substituent. */
function countForPrefixBeforeBrackets(prefix) {
  if (prefix === 'bis') return 2;
  if (prefix === 'tris') return 3;
  if (prefix.endsWith('kis')) return countForMultiplyingPrefix(prefix.slice(0, -3));
  return countForMultiplyingPrefix(prefix);
}

/**
 * The letters of a side chain before "yl" or "ylidene": an alkane stem ("meth", "dec"),
 * "ethen" (ethenyl, ethenylidene), or a ring ("cyclohex", with isRing).
 * Returns { carbonCount, doubleBondLocants, isRing } or undefined.
 */
function readSubstituentStem(stem) {
  if (stem === 'ethen') return { carbonCount: 2, doubleBondLocants: [1] };
  if (stem === 'ethyn') return { carbonCount: 2, doubleBondLocants: [], tripleBondLocants: [1] };
  if (stem.startsWith(RING_PREFIX)) {
    const ringSize = carbonCountForAlkaneStem(stem.slice(RING_PREFIX.length));
    return ringSize === undefined ? undefined : { carbonCount: ringSize, doubleBondLocants: [], isRing: true };
  }
  const carbonCount = carbonCountForAlkaneStem(stem);
  return carbonCount === undefined ? undefined : { carbonCount, doubleBondLocants: [] };
}

/**
 * Splits letters such as "tetradec" into a multiplying prefix and a substituent stem.
 * Some can be read two ways ("tetradec" is one C14 group, or four C10 groups), so the
 * reading whose prefix matches the number of locants is chosen; failing that, the
 * reading with the shortest prefix.
 * Returns { multiplyingPrefix, count, stem, carbonCount, doubleBondLocants } or null.
 */
function splitPrefixFromSubstituent(letters, numberOfLocants) {
  const readings = [];
  for (let prefixLength = 0; prefixLength < letters.length; prefixLength++) {
    const multiplyingPrefix = letters.slice(0, prefixLength);
    const stem = letters.slice(prefixLength);
    const count = countForMultiplyingPrefix(multiplyingPrefix);
    const substituent = readSubstituentStem(stem);
    if (count !== undefined && substituent !== undefined) readings.push({ multiplyingPrefix, count, stem, ...substituent });
  }
  return readings.find((reading) => reading.count === numberOfLocants) ?? readings[0] ?? null;
}

/**
 * Reads a side chain written in brackets: "decyl", "prop-2-en-1-yl", "buta-1,3-dien-1-yl".
 * Returns { carbonCount, doubleBondLocants, isJoinedByDoubleBond } or null.
 */
function readBracketedSubstituent(text) {
  const alkenylMatch = text.match(ALKENYL_SUBSTITUENT);
  if (alkenylMatch) {
    const reading = readUnsaturatedStem(alkenylMatch.slice(1, 6));
    if (reading !== null) return { ...withoutEmptyTripleBonds(reading), isJoinedByDoubleBond: alkenylMatch[6] !== undefined };
  }
  const plainMatch = text.match(PLAIN_SUBSTITUENT);
  const substituent = plainMatch ? readSubstituentStem(plainMatch[1]) : undefined;
  return substituent === undefined ? null : { ...substituent, isJoinedByDoubleBond: plainMatch[2] !== undefined };
}

/**
 * Splits letters such as "penta", "butadi" or "hexatri" (from "pentene", "1,3-butadiene",
 * "hexatriene") into an alkane stem and the number of double bonds.
 * Returns { carbonCount, doubleBondCount } or null.
 */
function readStemAndDoubleBondCount(letters) {
  for (let stemLength = 1; stemLength <= letters.length; stemLength++) {
    const carbonCount = carbonCountForAlkaneStem(letters.slice(0, stemLength));
    if (carbonCount === undefined) continue;
    const rest = letters.slice(stemLength);
    if (rest === '') return { carbonCount, doubleBondCount: 1 };
    const doubleBondCount = rest.startsWith('a') ? countForMultiplyingPrefix(rest.slice(1)) : undefined;
    if (doubleBondCount !== undefined && doubleBondCount >= 2) return { carbonCount, doubleBondCount };
  }
  return null;
}

/**
 * Reads the parent chain, if it fills the whole of the text.
 * Returns { parentChainCarbonCount, mainChainDoubleBondLocants, doubleBondCountSaidByName, writtenAs },
 * with hydroxyGroup: { locants, countSaidByName } for an alcohol, or aldehydeGroup,
 * ketoneGroup, carboxylicAcidGroup or amineGroup (the same) for an aldehyde, a ketone, an acid
 * or an amine (locants
 * null if left out), and ringCarboxylicAcidGroup or ringAldehydeGroup for "carboxylic acid"
 * and "carbaldehyde". A ring has isRing: true.
 * or { errorMessage, isSpecificNamingMistake }, or null if the text isn't a parent chain.
 */
function readParentChain(text) {
  if (text.endsWith('amine')) return readParentChainWithSuffix(text, 'amine', 'amineGroup');
  if (text.endsWith('carboxylic acid')) return readParentChainWithSuffix(text, 'carboxylic acid', 'ringCarboxylicAcidGroup');
  if (text.endsWith('carbaldehyde')) return readParentChainWithSuffix(text, 'carbaldehyde', 'ringAldehydeGroup');
  if (text.endsWith('ol')) return readParentChainWithSuffix(text, 'ol', 'hydroxyGroup');
  if (text.endsWith('one')) return readParentChainWithSuffix(text, 'one', 'ketoneGroup');
  if (text.endsWith('al')) return readChainEndParentChain(text, 'al', 'aldehydeGroup');
  if (text.endsWith('oic acid')) return readChainEndParentChain(text, 'oic acid', 'carboxylicAcidGroup');
  return readHydrocarbonParentChain(text);
}

/**
 * The hydrocarbon a parent name is built on, written with or without the "e" that is
 * dropped before "ol": "propan" and "propane" are both propane, "but-3-en" is but-3-ene.
 */
function readHydrocarbonBeforeSuffix(text) {
  if (text === '') return null;
  return readHydrocarbonParentChain(text.endsWith('e') ? text : `${text}e`);
}

/**
 * Letters such as "ethan", "methanedi", "propanetri" or "butanetetr" (from "ethanol",
 * "methanediol", "1,2,3-propanetriol", "1,2,3,4-butanetetrol") split into the hydrocarbon and
 * the multiplying prefix of the suffix (here "ol").
 * Returns the hydrocarbon's reading with countSaidByName, an error message, or null.
 */
function readHydrocarbonAndMultiplyingPrefix(letters, suffix) {
  let firstError = null;
  for (let prefixStart = letters.length; prefixStart > 0; prefixStart--) {
    const count = countForMultiplyingPrefixOfSuffix(letters.slice(prefixStart), suffix);
    if (count === undefined) continue;
    const hydrocarbon = readHydrocarbonBeforeSuffix(letters.slice(0, prefixStart));
    if (hydrocarbon?.errorMessage) firstError ??= hydrocarbon;
    else if (hydrocarbon) return { ...hydrocarbon, countSaidByName: count };
  }
  return firstError;
}

/**
 * Reads the parent of an alcohol (the suffix "ol", read as hydroxyGroup), a ketone ("one",
 * read as ketoneGroup) or an amine ("amine", read as amineGroup): "propan-2-ol",
 * "propane-1,2-diol", "but-3-en-2-ol", "pentane-2,4-dione", "propan-2-amine",
 * "ethane-1,2-diamine", the older "2-propanol", "1,2-ethanediol" and "2-butanone", or
 * "ethanol", "propanol", "pentanone" and "ethanamine" without locants.
 */
function readParentChainWithSuffix(text, suffix, groupKey) {
  const withGroup = (hydrocarbon, locants, countSaidByName) =>
    hydrocarbon?.errorMessage ? hydrocarbon : { ...hydrocarbon, writtenAs: text, [groupKey]: { locants, countSaidByName } };

  const currentStyleMatch = text.match(suffixWithLocants(suffix));
  if (currentStyleMatch) {
    const [, hydrocarbonText, locantsText, multiplyingPrefix] = currentStyleMatch;
    const hydrocarbon = readHydrocarbonBeforeSuffix(hydrocarbonText);
    const count = countForMultiplyingPrefixOfSuffix(multiplyingPrefix, suffix);
    if (hydrocarbon && count !== undefined) return withGroup(hydrocarbon, parseLocants(locantsText), count);
  }

  const olderStyleMatch = text.match(olderStyleSuffix(suffix));
  if (olderStyleMatch) {
    const reading = readHydrocarbonAndMultiplyingPrefix(olderStyleMatch[2], suffix);
    if (reading) return withGroup(reading, parseLocants(olderStyleMatch[1]), reading.countSaidByName);
  }

  const reading = readHydrocarbonAndMultiplyingPrefix(text.slice(0, -suffix.length), suffix);
  return reading ? withGroup(reading, null, reading.countSaidByName) : null;
}

/**
 * Reads the parent of an aldehyde (the suffix "al", read as aldehydeGroup) or an acid ("oic
 * acid", read as carboxylicAcidGroup), whose groups are at the ends of the chain: "propanal",
 * "butanedial", "but-2-enal", "ethanoic acid", "butanedioic acid", or with the locants that are
 * usually left out, "propan-1-al", "butane-1,4-dial" and "ethan-1-oic acid".
 */
function readChainEndParentChain(text, suffix, groupKey) {
  const withGroup = (hydrocarbon, locants, countSaidByName) =>
    hydrocarbon?.errorMessage ? hydrocarbon : { ...hydrocarbon, writtenAs: text, [groupKey]: { locants, countSaidByName } };

  const withLocantsMatch = text.match(suffixWithLocants(suffix));
  if (withLocantsMatch) {
    const [, hydrocarbonText, locantsText, multiplyingPrefix] = withLocantsMatch;
    const hydrocarbon = readHydrocarbonBeforeSuffix(hydrocarbonText);
    const count = countForMultiplyingPrefixOfSuffix(multiplyingPrefix, suffix);
    if (hydrocarbon && count !== undefined) return withGroup(hydrocarbon, parseLocants(locantsText), count);
  }

  const reading = readHydrocarbonAndMultiplyingPrefix(text.slice(0, -suffix.length), suffix);
  return reading ? withGroup(reading, null, reading.countSaidByName) : null;
}

/** The groups that are always at the ends of the chain: CHO (-al) and COOH (-oic acid). */
const CHAIN_END_GROUPS = {
  aldehydeGroup: {
    suffix: 'al',
    kind: { isAldehyde: true, substituentName: OXO_PREFIX },
    countOption: 'aldehydeCount',
    tooManyMessageKey: 'readingNames.tooManyAldehydeGroups',
    notAtChainEndMessageKey: 'readingNames.aldehydeAtChainEnd',
  },
  carboxylicAcidGroup: {
    suffix: 'oic acid',
    kind: { isCarboxylicAcid: true, substituentName: CARBOXY_PREFIX },
    countOption: 'carboxylicAcidCount',
    tooManyMessageKey: 'readingNames.tooManyAcidGroups',
    notAtChainEndMessageKey: 'readingNames.acidAtChainEnd',
  },
};

/**
 * The aldehyde or carboxyl groups of a parsed parent (groupKey 'aldehydeGroup' or
 * 'carboxylicAcidGroup'), as a substituent group at the ends of the chain, or { errorMessage }
 * if they can't be there.
 */
function placeChainEndGroups(parent, groupKey) {
  const { suffix, kind, countOption, tooManyMessageKey, notAtChainEndMessageKey } = CHAIN_END_GROUPS[groupKey];
  const { parentChainCarbonCount, mainChainDoubleBondLocants, writtenAs } = parent;
  const { locants, countSaidByName } = parent[groupKey];
  // A chain has only two ends, and methane only one.
  if (countSaidByName > Math.min(2, parentChainCarbonCount)) {
    return { errorMessage: message(tooManyMessageKey, { group: writtenAs }), isSpecificNamingMistake: true };
  }
  if (locants !== null && locants.length !== countSaidByName) {
    const correctedParent = mainChainName(parentChainCarbonCount, mainChainDoubleBondLocants, true, [], { [countOption]: locants.length });
    return explainWrongMultiplyingPrefix(writtenAs, locants.length, correctedParent);
  }
  const chainEnds = countSaidByName === 1 ? [1] : [1, parentChainCarbonCount];
  const locantsAreChainEnds = locants === null || locants.every((locant, index) => locant === chainEnds[index]);
  if (!locantsAreChainEnds) {
    return { errorMessage: message(notAtChainEndMessageKey, { group: writtenAs }), isSpecificNamingMistake: true };
  }
  return {
    locants: chainEnds,
    locantsWritten: locants !== null,
    multiplyingPrefix: multiplyingPrefixForCount(countSaidByName),
    countSaidByPrefix: countSaidByName,
    writtenAs: writeMultipliedSuffix(countSaidByName, suffix),
    ...kind,
    substituentCarbonCount: 0,
    isJoinedByDoubleBond: false,
    doubleBondLocants: [],
  };
}

/**
 * Reads a hydrocarbon parent chain (an alkane or alkene), or a ring ("cyclohexane",
 * "cyclohex-2-ene", "cyclohexene", "1,3-cyclohexadiene"), if it fills the whole of the text.
 */
function readHydrocarbonParentChain(text) {
  const olderStyleRingMatch = text.match(OLDER_STYLE_RING_PARENT);
  const ringText = text.startsWith(RING_PREFIX)
    ? text.slice(RING_PREFIX.length)
    : olderStyleRingMatch
      ? `${olderStyleRingMatch[1]}-${olderStyleRingMatch[2]}`
      : null;
  if (ringText !== null) {
    // A ring's one double bond is at carbon 1, so "cyclohexene" needs no locant (P-31.1.3.1),
    // and nor does its one triple bond: cyclooctyne.
    const withoutLocantsMatch = ringText.match(ALKENE_PARENT_WITHOUT_LOCANTS);
    const withoutLocantsReading = withoutLocantsMatch ? readStemAndDoubleBondCount(withoutLocantsMatch[1]) : null;
    if (withoutLocantsReading?.doubleBondCount === 1) {
      return { parentChainCarbonCount: withoutLocantsReading.carbonCount, mainChainDoubleBondLocants: [1], doubleBondCountSaidByName: 1, writtenAs: text, doubleBondLocantLeftOut: true, isRing: true };
    }
    const alkyneWithoutLocantsMatch = ringText.match(ALKYNE_PARENT_WITHOUT_LOCANTS);
    const alkyneWithoutLocantsReading = alkyneWithoutLocantsMatch ? readStemAndDoubleBondCount(alkyneWithoutLocantsMatch[1]) : null;
    if (alkyneWithoutLocantsReading?.doubleBondCount === 1) {
      return {
        parentChainCarbonCount: alkyneWithoutLocantsReading.carbonCount,
        mainChainDoubleBondLocants: [],
        doubleBondCountSaidByName: 0,
        mainChainTripleBondLocants: [1],
        tripleBondCountSaidByName: 1,
        writtenAs: text,
        tripleBondLocantLeftOut: true,
        isRing: true,
      };
    }
    const reading = readChainParentChain(ringText);
    return reading?.errorMessage || !reading ? reading : { ...reading, writtenAs: text, isRing: true };
  }
  return readChainParentChain(text);
}

/** Reads the hydrocarbon parent chain of an open chain (an alkane or alkene), if it fills the whole of the text. */
function readChainParentChain(text) {
  const alkaneMatch = text.match(ALKANE_PARENT_FILLING_WHOLE_TEXT);
  const alkaneCarbonCount = alkaneMatch ? carbonCountForAlkaneStem(alkaneMatch[1]) : undefined;
  if (alkaneCarbonCount !== undefined) {
    return { parentChainCarbonCount: alkaneCarbonCount, mainChainDoubleBondLocants: [], doubleBondCountSaidByName: 0, writtenAs: text };
  }

  const alkeneMatch = text.match(ALKENE_PARENT_FILLING_WHOLE_TEXT);
  const alkeneCarbonCount = alkeneMatch ? carbonCountForAlkaneStem(alkeneMatch[1]) : undefined;
  if (alkeneCarbonCount !== undefined) {
    const [, , locantsText, multiplyingPrefix] = alkeneMatch;
    const doubleBondCountSaidByName = countForMultiplyingPrefix(multiplyingPrefix);
    if (doubleBondCountSaidByName !== undefined) {
      return { parentChainCarbonCount: alkeneCarbonCount, mainChainDoubleBondLocants: parseLocants(locantsText), doubleBondCountSaidByName, writtenAs: text };
    }
  }

  const alkyneReading = readAlkyneParentChain(text);
  if (alkyneReading) return alkyneReading;

  const olderStyleMatch = text.match(OLDER_STYLE_ALKENE_PARENT);
  const olderStyleReading = olderStyleMatch ? readStemAndDoubleBondCount(olderStyleMatch[2]) : null;
  if (olderStyleReading) {
    return {
      parentChainCarbonCount: olderStyleReading.carbonCount,
      mainChainDoubleBondLocants: parseLocants(olderStyleMatch[1]),
      doubleBondCountSaidByName: olderStyleReading.doubleBondCount,
      writtenAs: text,
    };
  }

  const withoutLocantsMatch = text.match(ALKENE_PARENT_WITHOUT_LOCANTS);
  const withoutLocantsReading = withoutLocantsMatch ? readStemAndDoubleBondCount(withoutLocantsMatch[1]) : null;
  if (withoutLocantsReading && withoutLocantsReading.carbonCount >= 2) {
    // Ethene and propene have only one place for their double bond, so need no locant (P-14.3.4.2).
    const { carbonCount, doubleBondCount } = withoutLocantsReading;
    if (doubleBondCount === 1 && carbonCount <= 3) {
      return { parentChainCarbonCount: carbonCount, mainChainDoubleBondLocants: [1], doubleBondCountSaidByName: 1, writtenAs: text, doubleBondLocantLeftOut: true };
    }
    return { errorMessage: message('readingNames.doubleBondNeedsLocant'), isSpecificNamingMistake: true };
  }

  return null;
}

/**
 * Reads an open-chain parent with triple bonds (P-31.1.1): "but-2-yne", "buta-1,3-diyne",
 * "pent-1-en-4-yne", "hexa-1,3-dien-5-yne", the older style "2-butyne", and "ethyne" and
 * "propyne", which need no locant. Like readChainParentChain, with mainChainTripleBondLocants
 * and tripleBondCountSaidByName as well, or null.
 */
function readAlkyneParentChain(text) {
  const reading = (carbonCount, doubleBondLocants, doubleBondCountSaidByName, tripleBondLocants, tripleBondCountSaidByName, extra = {}) => ({
    parentChainCarbonCount: carbonCount,
    mainChainDoubleBondLocants: doubleBondLocants,
    doubleBondCountSaidByName,
    mainChainTripleBondLocants: tripleBondLocants,
    tripleBondCountSaidByName,
    writtenAs: text,
    ...extra,
  });
  const match = text.match(ALKYNE_PARENT_FILLING_WHOLE_TEXT);
  const carbonCount = match ? carbonCountForAlkaneStem(match[1]) : undefined;
  if (carbonCount !== undefined) {
    const [, , doubleBondLocantsText, doubleBondPrefix, tripleBondLocantsText, tripleBondPrefix] = match;
    const doubleBondCount = doubleBondLocantsText === undefined ? 0 : countForMultiplyingPrefix(doubleBondPrefix);
    const tripleBondCount = countForMultiplyingPrefix(tripleBondPrefix);
    if (doubleBondCount !== undefined && tripleBondCount !== undefined) {
      return reading(carbonCount, doubleBondLocantsText === undefined ? [] : parseLocants(doubleBondLocantsText), doubleBondCount, parseLocants(tripleBondLocantsText), tripleBondCount);
    }
  }

  const olderStyleMatch = text.match(OLDER_STYLE_ALKYNE_PARENT);
  const olderStyleReading = olderStyleMatch ? readStemAndDoubleBondCount(olderStyleMatch[2]) : null;
  if (olderStyleReading) return reading(olderStyleReading.carbonCount, [], 0, parseLocants(olderStyleMatch[1]), olderStyleReading.doubleBondCount);

  const withoutLocantsMatch = text.match(ALKYNE_PARENT_WITHOUT_LOCANTS);
  const withoutLocantsReading = withoutLocantsMatch ? readStemAndDoubleBondCount(withoutLocantsMatch[1]) : null;
  if (withoutLocantsReading && withoutLocantsReading.carbonCount >= 2) {
    // Ethyne and propyne have only one place for their triple bond, so need no locant (P-14.3.4.2).
    const { carbonCount: count, doubleBondCount: tripleBondCount } = withoutLocantsReading;
    if (tripleBondCount === 1 && count <= 3) return reading(count, [], 0, [1], 1, { tripleBondLocantLeftOut: true });
    return { errorMessage: message('readingNames.tripleBondNeedsLocant'), isSpecificNamingMistake: true };
  }
  return null;
}

/**
 * Reads a halogen group at the start of the text, such as "1,2-dichloro" or "bromo", or one of
 * the other simple prefixes: hydroxy, oxo, formyl, amino, methoxy ...
 * Returns { wholeGroupText, locantsText, locants (null if left out), multiplyingPrefix, count, halogenPrefix }, or null.
 */
function readHalogenGroup(text, pattern = HALOGEN_GROUP_AT_START_OF_TEXT) {
  const match = text.match(pattern);
  if (!match) return null;
  const [wholeGroupText, locantsText, multiplyingPrefix, halogenInBrackets, halogenWithoutBrackets] = match;
  const count = countForMultiplyingPrefix(multiplyingPrefix);
  if (count === undefined) return null;
  return {
    wholeGroupText,
    locantsText,
    locants: locantsText === undefined ? null : parseLocants(locantsText),
    multiplyingPrefix,
    count,
    halogenPrefix: halogenInBrackets ?? halogenWithoutBrackets,
  };
}

/** What a simple prefix stands for, as a substituent group: "chloro" -> { halogen: 'Cl' }, "methoxy" -> an ether's O with a methyl group. */
function describeSimplePrefix(prefix) {
  if (prefix === HYDROXY_PREFIX) return { isHydroxy: true };
  if (prefix === OXO_PREFIX) return { isKetone: true };
  if (prefix === FORMYL_PREFIX) return { isAldehyde: true };
  if (prefix === AMINO_PREFIX) return { isAmine: true };
  if (prefix === CARBOXY_PREFIX) return { isCarboxylicAcid: true };
  if (GROUP_NAME_BY_CONTRACTED_ALKOXY_PREFIX.has(prefix)) return { isEther: true, linkedGroup: readLinkedGroupName(GROUP_NAME_BY_CONTRACTED_ALKOXY_PREFIX.get(prefix)) };
  return { halogen: HALOGEN_BY_PREFIX[prefix] };
}

/**
 * The text from an opening bracket at openingIndex to its matching closing bracket, and the
 * text inside: ("(methylamino)ethanol", 0) -> { wholeText: "(methylamino)", innerText: "methylamino" }.
 * null if the bracket isn't closed, or is closed by the wrong kind.
 */
function readBracketedText(text, openingIndex) {
  const expectedClosings = [];
  for (let index = openingIndex; index < text.length; index++) {
    const character = text[index];
    if (CLOSING_BRACKET_FOR[character]) expectedClosings.push(CLOSING_BRACKET_FOR[character]);
    else if (')]}'.includes(character)) {
      if (expectedClosings.pop() !== character) return null;
      if (expectedClosings.length === 0) return { wholeText: text.slice(openingIndex, index + 1), innerText: text.slice(openingIndex + 1, index) };
    }
  }
  return null;
}

/**
 * Reads a group's name followed by amino or oxy: "methylamino", "pentyloxy",
 * "(prop-2-en-1-yl)oxy". Returns { isAmine or isEther, linkedGroup, substituentName },
 * { errorMessage } for a tertiary amine's group such as dimethylamino, or null.
 */
function readCompoundPrefixText(groupText, ending) {
  const linkedGroup = readLinkedGroupName(groupText);
  const groupName = linkedGroup === null ? null : linkedGroupName(linkedGroup);
  if (groupName === null) {
    // "dimethylamino" is (CH3)2N-, with two groups on the one N.
    const isTwoGroupsOnNitrogen = ending === AMINO_PREFIX && /^(di|bis)/.test(groupText) && readLinkedGroupName(groupText.replace(/^(di|bis)/, '')) !== null;
    return isTwoGroupsOnNitrogen ? { errorMessage: message('readingNames.tertiaryAmineNotCovered'), isSpecificNamingMistake: true } : null;
  }
  return ending === AMINO_PREFIX
    ? { isAmine: true, linkedGroup, substituentName: alkylaminoPrefix(groupName) }
    : { isEther: true, linkedGroup, substituentName: alkoxyPrefix(groupName) };
}

/** The name of a group read by readLinkedGroupName: { carbonCount: 2 } -> "ethyl". */
function linkedGroupName({ carbonCount, doubleBondLocants = [], tripleBondLocants = [], isRing = false }) {
  return isRing ? cycloalkylSubstituentName(carbonCount) : unbranchedSubstituentName(carbonCount, false, doubleBondLocants, tripleBondLocants);
}

/**
 * Reads a compound prefix at the start of the text: a group joined through an NH or O, such as
 * "2-(methylamino)", "1,3-bis(methylamino)", "1-(pentyloxy)", "1-[(prop-2-en-1-yl)oxy]", or
 * without the brackets, "2-methylamino" or "1-pentyloxy".
 * Returns { wholeGroupText, locantsText, locants, multiplyingPrefix, count, isAmine or isEther,
 * linkedGroup, substituentName }, { errorMessage }, or null if the text doesn't start with one.
 */
function readCompoundPrefix(text) {
  const [locantsAndHyphen, locantsText] = text.match(LOCANTS_AND_HYPHEN_AT_START_OF_TEXT);
  const rest = text.slice(locantsAndHyphen.length);
  const locants = locantsText === undefined ? null : parseLocants(locantsText);

  const bracketMatch = rest.match(/^([a-z]*?)[([{]/);
  if (bracketMatch) {
    const multiplyingPrefix = bracketMatch[1];
    const bracketed = readBracketedText(rest, multiplyingPrefix.length);
    const innerMatch = bracketed?.innerText.match(COMPOUND_PREFIX_IN_BRACKETS);
    if (!innerMatch) return null;
    const count = countForPrefixBeforeBrackets(multiplyingPrefix);
    const reading = readCompoundPrefixText(innerMatch[1], innerMatch[2]);
    if (count === undefined || reading === null || reading.errorMessage) return reading?.errorMessage ? reading : null;
    return { wholeGroupText: locantsAndHyphen + multiplyingPrefix + bracketed.wholeText, locantsText, locants, multiplyingPrefix, count, ...reading };
  }

  const match = rest.match(COMPOUND_PREFIX_WITHOUT_BRACKETS);
  if (!match) return null;
  const [wholeMatch, letters, ending] = match;
  for (let prefixLength = 0; prefixLength < letters.length; prefixLength++) {
    const multiplyingPrefix = letters.slice(0, prefixLength);
    const count = countForMultiplyingPrefix(multiplyingPrefix);
    if (count === undefined) continue;
    // "dimethylamino" is read as one group on an N with two methyls, not two methylamino groups.
    const reading = readCompoundPrefixText(ending === AMINO_PREFIX ? letters : letters.slice(prefixLength), ending);
    if (reading?.errorMessage) return reading;
    if (reading !== null) return { wholeGroupText: locantsAndHyphen + wholeMatch, locantsText, locants, multiplyingPrefix: ending === AMINO_PREFIX ? '' : multiplyingPrefix, count: ending === AMINO_PREFIX ? 1 : count, ...reading };
    if (ending === AMINO_PREFIX) return null;
  }
  return null;
}

/**
 * Reads a group prefix at the start of the text, not a side chain: a halogen, hydroxy, oxo,
 * formyl, amino, an alkoxy group or a compound prefix such as (methylamino) (or, with
 * SIDE_CHAIN_GROUP_AT_START_OF_TEXT as the pattern, the ones that can be on a side chain).
 * Returns { wholeGroupText, group } with group as in parseTypedName's substituentGroups,
 * { errorMessage }, or null.
 */
function readGroupPrefix(text, pattern = HALOGEN_GROUP_AT_START_OF_TEXT) {
  const compoundPrefix = readCompoundPrefix(text);
  if (compoundPrefix?.errorMessage) return compoundPrefix;
  const prefixGroup = compoundPrefix ?? readHalogenGroup(text, pattern);
  if (!prefixGroup) return null;
  const { wholeGroupText, locantsText, locants, multiplyingPrefix, count, halogenPrefix } = prefixGroup;
  const kind = compoundPrefix
    ? { isAmine: compoundPrefix.isAmine, isEther: compoundPrefix.isEther, linkedGroup: compoundPrefix.linkedGroup }
    : describeSimplePrefix(halogenPrefix);
  return {
    wholeGroupText,
    group: {
      locants,
      multiplyingPrefix,
      countSaidByPrefix: count,
      writtenAs: locantsText === undefined ? wholeGroupText : wholeGroupText.slice(locantsText.length + 1),
      substituentName: compoundPrefix ? compoundPrefix.substituentName : halogenPrefix,
      ...Object.fromEntries(Object.entries(kind).filter(([, value]) => value !== undefined)),
      substituentCarbonCount: 0,
      isJoinedByDoubleBond: false,
      doubleBondLocants: [],
    },
  };
}

/** The keys of a parsed group that say what kind of group it is, for a group on a side chain. */
const GROUP_KIND_KEYS = ['halogen', 'isHydroxy', 'isKetone', 'isAmine', 'isEther', 'isCarboxylicAcid', 'linkedGroup'];

/** How many of a carbon's bonds a group on a side chain uses: 2 for the =O of oxo, 3 for the =O and OH of -COOH, otherwise 1. */
const bondsUsedBySideChainGroup = (group) => (group.isCarboxylicAcid ? 3 : group.isKetone ? 2 : 1);

/**
 * The side chain a name is built on, once its own prefixes are taken off: a side chain read by
 * readBracketedSubstituent (ethyl, prop-2-en-1-yl, methylidene ...), an acyl group (acetyl,
 * propanoyl, prop-2-enoyl, and the A-level ethanoyl and methanoyl), or one of the groups named
 * by one word: formyl, carboxy and oxalo (P-65.1.7.2.1, P-66.6.1.3, P-65.1.2.2.3). Also one
 * joined by a carbon other than carbon 1 (P-29.2): propan-2-yl, but-3-en-2-yl,
 * propan-2-ylidene, and tert-butyl (P-29.6.1).
 * Returns { carbonCount, doubleBondLocants, isJoinedByDoubleBond, ownGroups (the groups its
 * name brings, numbered along the side chain), ownBranches (likewise, the side chains it
 * brings: tert-butyl's methyl), freeValenceLocant (if not 1), isAcyl, isWholeGroup } or null.
 */
function readSideChainParent(text) {
  const ketoneAt = (locant) => ({ locant, isKetone: true });
  const acidAt = (locant) => ({ locant, isCarboxylicAcid: true });
  const sideChain = (carbonCount, ownGroups, extra = {}) => ({ carbonCount, doubleBondLocants: [], isJoinedByDoubleBond: false, ownGroups, ...extra });
  if (text === ACETYL_PREFIX) return sideChain(2, [ketoneAt(1)], { isAcyl: true });
  if (text === FORMYL_PREFIX) return sideChain(1, [ketoneAt(1)], { isAcyl: true, isWholeGroup: true });
  if (text === CARBOXY_PREFIX) return sideChain(1, [acidAt(1)], { isWholeGroup: true });
  if (text === OXALO_PREFIX) return sideChain(2, [ketoneAt(1), acidAt(2)], { isAcyl: true, isWholeGroup: true });
  const alkanoylMatch = text.match(ALKANOYL_SUBSTITUENT);
  const alkanoylCarbonCount = alkanoylMatch ? carbonCountForAlkaneStem(alkanoylMatch[1]) : undefined;
  if (alkanoylCarbonCount !== undefined) return sideChain(alkanoylCarbonCount, [ketoneAt(1)], { isAcyl: true });
  const alkenoylMatch = text.match(ALKENOYL_SUBSTITUENT);
  if (alkenoylMatch) {
    const reading = readUnsaturatedStem(alkenoylMatch.slice(1, 6));
    if (reading === null) return null;
    return { ...sideChain(reading.carbonCount, [ketoneAt(1)], { isAcyl: true }), ...withoutEmptyTripleBonds(reading) };
  }
  // tert-butyl is 2-methylpropan-2-yl, and can't have prefixes (P-29.6.1).
  if (text === TERT_BUTYL_PREFIX) return sideChain(3, [], { freeValenceLocant: 2, ownBranches: [{ locant: 2, substituentCarbonCount: 1 }], isWholeGroup: true, isTertButyl: true });
  const joinedAt = (freeValenceLocant) => (freeValenceLocant === 1 ? {} : { freeValenceLocant });
  const alkanylMatch = text.match(ALKANYL_SUBSTITUENT);
  const alkanylCarbonCount = alkanylMatch ? carbonCountForAlkaneStem(alkanylMatch[1]) : undefined;
  if (alkanylCarbonCount !== undefined) {
    return sideChain(alkanylCarbonCount, [], { ...joinedAt(Number(alkanylMatch[2])), isJoinedByDoubleBond: alkanylMatch[3] !== undefined });
  }
  const alkenylMatch = text.match(ALKENYL_SUBSTITUENT_JOINED_ANYWHERE);
  if (alkenylMatch) {
    const reading = readUnsaturatedStem(alkenylMatch.slice(1, 6));
    if (reading === null) return null;
    const [freeValenceText, ylideneEnding] = alkenylMatch.slice(6);
    return { ...sideChain(reading.carbonCount, [], { ...joinedAt(Number(freeValenceText)), isJoinedByDoubleBond: ylideneEnding !== undefined }), ...withoutEmptyTripleBonds(reading) };
  }
  const plain = readBracketedSubstituent(text);
  if (plain === null || plain.isRing) return null;
  return { carbonCount: plain.carbonCount, doubleBondLocants: plain.doubleBondLocants, ...tripleBondsOf(plain), isJoinedByDoubleBond: plain.isJoinedByDoubleBond, ownGroups: [] };
}

/**
 * Reads the name of a side chain with groups or side chains of its own on it, as written inside
 * its brackets (or as one word, such as "acetyl"): "2-bromo-1-hydroxyethyl",
 * "bromo(chloro)methyl", "pentafluoroethyl", "3-chloroprop-2-en-1-yl", "carboxymethyl",
 * "chloroacetyl", and branched ones (P-29.2, P-29.6): "2-methylpropyl", "propan-2-yl",
 * "1-hydroxypropan-2-yl", "5-ethyl-7-methylnonan-3-yl", "3-(chloromethyl)pentyl", "tert-butyl".
 * Returns { carbonCount, doubleBondLocants, isJoinedByDoubleBond, sideChainGroups,
 * sideChainBranches, freeValenceLocant }, where carbonCount is the length of its principal
 * chain, sideChainGroups are the groups along it, each { locant, and halogen, isHydroxy,
 * isKetone, isAmine, isEther (with linkedGroup) or isCarboxylicAcid }, sideChainBranches the side
 * chains on it, each with its locant and described as for buildCarbonSkeletonFromDescription.js,
 * and freeValenceLocant (only if not 1) the carbon joined to the main chain. Locants are
 * numbered along the principal chain. A carboxy prefix on its last carbon brings a carbon of its
 * own, which carbonCount counts. Or { errorMessage, isSpecificNamingMistake }, or null if the
 * text isn't such a name.
 */
function readSubstitutedSideChain(text) {
  const prefixGroups = [];
  const branchGroups = [];
  let rest = text;
  for (;;) {
    const older = OLDER_SIDE_CHAIN_PREFIXES.get(rest);
    if (older) return readOlderSideChainPrefix(rest, older, prefixGroups.length + branchGroups.length > 0);
    const parent = readSideChainParent(rest);
    if (parent) return withOlderPrefixesOf(branchGroups, placeSideChainGroups(parent, prefixGroups, branchGroups));
    const prefix = readGroupPrefix(rest, SIDE_CHAIN_GROUP_AT_START_OF_TEXT);
    if (prefix?.errorMessage) return prefix;
    // A side chain on the side chain: the "2-methyl" of "2-methylpropyl", the "(chloromethyl)" of "3-(chloromethyl)pentyl".
    const branch = prefix ? null : (readSideChainWithGroups(rest) ?? readPlainSideChainPrefix(rest));
    if (branch?.errorMessage) return branch;
    if (!prefix && !branch) return null;
    (prefix ? prefixGroups : branchGroups).push((prefix ?? branch).group);
    rest = rest.slice((prefix ?? branch).wholeGroupText.length).replace(/^-/, '');
    if (rest === '') return null;
  }
}

/**
 * Reads an older prefix such as "isopropyl" or "isobutyl" as its preferred prefix (see
 * OLDER_SIDE_CHAIN_PREFIXES), noting it in olderPrefixes: [{ prefix, preferredPrefix, kind }].
 * None of them can have groups on them (P-29.6.2.2, P-29.6.3).
 */
function readOlderSideChainPrefix(prefix, { preferredPrefix, kind }, hasGroupsOnIt) {
  if (hasGroupsOnIt) {
    return { errorMessage: message('readingNames.olderPrefixCannotBeSubstituted', { prefix, preferredPrefix }), isSpecificNamingMistake: true };
  }
  return { ...readSubstitutedSideChain(preferredPrefix), olderPrefixes: [{ prefix, preferredPrefix, kind }] };
}

/** Adds the older prefixes used in a side chain's own side chains to it, as in 3-(2-isopropylpentyl). */
function withOlderPrefixesOf(branchGroups, sideChain) {
  const olderPrefixes = branchGroups.flatMap((group) => group.olderPrefixes ?? []);
  if (olderPrefixes.length === 0 || sideChain === null || sideChain.errorMessage) return sideChain;
  return { ...sideChain, olderPrefixes };
}

/** A reading's tripleBondLocants, left out when there are none, so a chain without them is described as before. */
const tripleBondsOf = (reading) => (reading.tripleBondLocants?.length > 0 ? { tripleBondLocants: reading.tripleBondLocants } : {});

/** The reading, without tripleBondLocants if there are none. */
function withoutEmptyTripleBonds({ tripleBondLocants, ...reading }) {
  return { ...reading, ...tripleBondsOf({ tripleBondLocants }) };
}

/** What the builder needs to make a side chain read as a prefix (see buildCarbonSkeletonFromDescription.js). */
function describeSideChainForBuilding(group) {
  return {
    substituentCarbonCount: group.substituentCarbonCount,
    isJoinedByDoubleBond: group.isJoinedByDoubleBond,
    doubleBondLocants: group.doubleBondLocants,
    ...tripleBondsOf(group),
    ...(group.isRing ? { isRing: true } : {}),
    ...(group.freeValenceLocant ? { freeValenceLocant: group.freeValenceLocant } : {}),
    ...(group.sideChainGroups ? { sideChainGroups: group.sideChainGroups } : {}),
    ...(group.sideChainBranches ? { sideChainBranches: group.sideChainBranches } : {}),
  };
}

/**
 * Puts the groups and side chains read from a side chain's prefixes on its carbons (see
 * readSubstitutedSideChain). Groups written without locants go on the lowest-numbered carbons
 * that still have room, as in trichloromethyl and pentafluoroethyl (P-14.3.4.5). Carboxy on the
 * last carbon makes the side chain one carbon longer, with the COOH at its end; anywhere else
 * it is a branch of one carbon, as in 1-carboxyethyl (P-65.1.2.2.3). A side chain on the side
 * chain needs its locant, unless there is only one carbon it can go on.
 */
function placeSideChainGroups(parent, prefixGroups, branchGroups = []) {
  const { carbonCount, doubleBondLocants, tripleBondLocants = [], isJoinedByDoubleBond, ownGroups, ownBranches = [], isWholeGroup, isTertButyl, freeValenceLocant = 1 } = parent;
  if (isWholeGroup && prefixGroups.length + branchGroups.length > 0) {
    return isTertButyl ? { errorMessage: message('readingNames.tertButylCannotBeSubstituted'), isSpecificNamingMistake: true } : null;
  }
  const sideChainGroups = [...ownGroups];
  const sideChainBranches = [...ownBranches];
  let totalCarbonCount = carbonCount;
  // The bonds each carbon has left for groups: less those along the side chain, and one to the
  // main chain at the free valence (two if joined by a double bond).
  const freeBonds = Array.from(
    { length: carbonCount },
    (_, index) => 4 - (index > 0 ? 1 : 0) - (index < carbonCount - 1 ? 1 : 0) - (index === freeValenceLocant - 1 ? (isJoinedByDoubleBond ? 2 : 1) : 0),
  );
  for (const locant of doubleBondLocants) {
    freeBonds[locant - 1] -= 1;
    freeBonds[locant] -= 1;
  }
  for (const locant of tripleBondLocants) {
    freeBonds[locant - 1] -= 2;
    freeBonds[locant] -= 2;
  }
  const useBonds = (group, bondsUsed = bondsUsedBySideChainGroup(group)) => {
    if (group.locant >= 1 && group.locant <= carbonCount) freeBonds[group.locant - 1] -= bondsUsed;
  };
  ownGroups.forEach((group) => useBonds(group));
  ownBranches.forEach((branch) => useBonds(branch, 1));
  // Locants can only be left out where there is one carbon the groups can go on, as in
  // chloromethyl and chloroacetyl, or where every hydrogen is swapped for the same group, as in
  // pentafluoroethyl (P-14.3.4.2, P-14.3.4.5).
  const placesForGroups = freeBonds.filter((free) => free > 0).length;
  const groupsWithoutLocants = prefixGroups.filter(({ locants }) => locants === null);
  const needsLocants = () =>
    groupsWithoutLocants.length > 0 &&
    placesForGroups > 1 &&
    !(new Set(prefixGroups.map(({ substituentName }) => substituentName)).size === 1 && freeBonds.every((free) => free === 0));
  const kindOf = (group) => Object.fromEntries(GROUP_KIND_KEYS.filter((key) => group[key] !== undefined).map((key) => [key, group[key]]));

  for (const group of [...prefixGroups, ...branchGroups]) {
    if (group.locants !== null && group.locants.length !== group.countSaidByPrefix) {
      const writtenGroup = `${group.locants.join(',')}-${group.writtenAs}`;
      return explainWrongMultiplyingPrefix(writtenGroup, group.locants.length, `${group.locants.join(',')}-${writeMultipliedSubstituent(group.locants.length, group.substituentName)}`);
    }
    for (const locant of group.locants ?? []) {
      if (locant < 1 || locant > carbonCount) return { errorMessage: message('readingNames.locantNotOnChain', { locant, chainLength: carbonCount }), isSpecificNamingMistake: true };
    }
  }
  const carboxyBranch = (locant) => ({ locant, substituentCarbonCount: 1, sideChainGroups: [{ locant: 1, isCarboxylicAcid: true }] });
  for (const group of prefixGroups.filter(({ isCarboxylicAcid }) => isCarboxylicAcid)) {
    const locants = group.locants ?? Array.from({ length: group.countSaidByPrefix }, () => carbonCount);
    for (const locant of locants) {
      if (locant === carbonCount && totalCarbonCount === carbonCount) {
        freeBonds[carbonCount - 1] -= 1;
        totalCarbonCount = carbonCount + 1;
        sideChainGroups.push({ locant: totalCarbonCount, isCarboxylicAcid: true });
      } else {
        useBonds({ locant }, 1);
        sideChainBranches.push(carboxyBranch(locant));
      }
    }
  }
  for (const group of prefixGroups.filter(({ locants, isCarboxylicAcid }) => locants !== null && !isCarboxylicAcid)) {
    for (const locant of group.locants) {
      const placed = { locant, ...kindOf(group) };
      useBonds(placed);
      sideChainGroups.push(placed);
    }
  }
  for (const group of prefixGroups.filter(({ locants, isCarboxylicAcid }) => locants === null && !isCarboxylicAcid)) {
    for (let added = 0; added < group.countSaidByPrefix; added++) {
      const freeIndex = freeBonds.findIndex((free) => free >= bondsUsedBySideChainGroup(group));
      // If no carbon has room, the last one is overloaded, and building the molecule says so.
      const placed = { locant: freeIndex === -1 ? carbonCount : freeIndex + 1, ...kindOf(group) };
      useBonds(placed);
      sideChainGroups.push(placed);
    }
  }
  for (const group of branchGroups) {
    if (group.locants === null && placesForGroups > 1) return { errorMessage: message('readingNames.groupOnSideChainNeedsLocant'), isSpecificNamingMistake: true };
    const onlyPlace = freeBonds.findIndex((free) => free > 0) + 1 || carbonCount;
    const locants = group.locants ?? Array.from({ length: group.countSaidByPrefix }, () => onlyPlace);
    for (const locant of locants) {
      const branch = { locant, ...describeSideChainForBuilding(group) };
      useBonds(branch, group.isJoinedByDoubleBond ? 2 : 1);
      sideChainBranches.push(branch);
    }
  }
  if (sideChainGroups.length === 0 && sideChainBranches.length === 0 && freeValenceLocant === 1) return null;
  if (needsLocants()) return { errorMessage: message('readingNames.groupOnSideChainNeedsLocant'), isSpecificNamingMistake: true };
  return {
    carbonCount: totalCarbonCount,
    doubleBondLocants,
    ...tripleBondsOf(parent),
    isJoinedByDoubleBond,
    sideChainGroups,
    ...(sideChainBranches.length > 0 ? { sideChainBranches } : {}),
    ...(freeValenceLocant === 1 ? {} : { freeValenceLocant }),
  };
}

/**
 * Reads a side chain with groups on it at the start of the text, with its locants and
 * multiplying prefix: "3-(chloromethyl)", "1,2-bis(2-chloroethyl)", "2-[bromo(chloro)methyl]",
 * "5-acetyl", "3-propanoyl", "2-carboxy". A plain side chain such as "(prop-2-en-1-yl)" is
 * left for the main loop of parseNameWithoutStereodescriptors.
 * Returns { wholeGroupText, group }, { errorMessage }, or null.
 */
function readSideChainWithGroups(text) {
  const [locantsAndHyphen, locantsText] = text.match(LOCANTS_AND_HYPHEN_AT_START_OF_TEXT);
  const rest = text.slice(locantsAndHyphen.length);
  let multiplyingPrefix;
  let nameText;
  let groupText;
  let count;
  const bracketMatch = rest.match(/^([a-z]*?)[([{]/);
  if (bracketMatch) {
    multiplyingPrefix = bracketMatch[1];
    const bracketed = readBracketedText(rest, multiplyingPrefix.length);
    if (bracketed === null || readBracketedSubstituent(bracketed.innerText) !== null) return null;
    count = countForPrefixBeforeBrackets(multiplyingPrefix);
    nameText = bracketed.innerText;
    groupText = multiplyingPrefix + bracketed.wholeText;
  } else {
    // A one-word side chain such as "acetyl" in "5-acetylnonane-4,6-dione", or "dipropanoyl",
    // and "tert-butyl", which keeps its hyphen after a multiplying prefix: "di-tert-butyl".
    const endingMatch = rest.match(ONE_WORD_SIDE_CHAIN_ENDING);
    if (!endingMatch) return null;
    const word = rest.slice(0, endingMatch.index + endingMatch[0].length);
    const sideChainTextAfter = (length) => word.slice(length).replace(/^-(?=(?:tert|sec)-)/, '');
    const isSideChainWord = (sideChainText) => readSideChainParent(sideChainText) !== null || OLDER_SIDE_CHAIN_PREFIXES.has(sideChainText);
    const prefixLength = [...word].findIndex(
      (_, length) => countForMultiplyingPrefix(word.slice(0, length)) !== undefined && isSideChainWord(sideChainTextAfter(length)),
    );
    if (prefixLength === -1) return null;
    multiplyingPrefix = word.slice(0, prefixLength);
    count = countForMultiplyingPrefix(multiplyingPrefix);
    nameText = sideChainTextAfter(prefixLength);
    groupText = word;
  }
  if (count === undefined) return null;
  const sideChain = readSubstitutedSideChain(nameText);
  if (sideChain === null || sideChain.errorMessage) return sideChain;
  return {
    wholeGroupText: locantsAndHyphen + groupText,
    group: {
      locants: locantsText === undefined ? null : parseLocants(locantsText),
      multiplyingPrefix,
      countSaidByPrefix: count,
      writtenAs: groupText,
      substituentName: nameText,
      substituentCarbonCount: sideChain.carbonCount,
      isJoinedByDoubleBond: sideChain.isJoinedByDoubleBond,
      doubleBondLocants: sideChain.doubleBondLocants,
      ...tripleBondsOf(sideChain),
      sideChainGroups: sideChain.sideChainGroups,
      ...(sideChain.sideChainBranches ? { sideChainBranches: sideChain.sideChainBranches } : {}),
      ...(sideChain.freeValenceLocant ? { freeValenceLocant: sideChain.freeValenceLocant } : {}),
      ...(sideChain.olderPrefixes ? { olderPrefixes: sideChain.olderPrefixes } : {}),
    },
  };
}

/** True if the text contains something that reads as a substituent name, such as "methyl". */
function mentionsASubstituent(text) {
  for (const [, letters] of text.matchAll(/([a-z]+?)yl/g)) {
    for (let start = 0; start < letters.length; start++) {
      if (readSubstituentStem(letters.slice(start)) !== undefined) return true;
    }
  }
  return false;
}

/**
 * Returns, for "3-ethyl-2,2-dimethylpent-1-ene":
 *   {
 *     parentChainCarbonCount: 5,
 *     mainChainDoubleBondLocants: [1],
 *     substituentGroups: [
 *       { locants: [3],    multiplyingPrefix: '',   countSaidByPrefix: 1, writtenAs: 'ethyl',
 *         substituentName: 'ethyl',  substituentCarbonCount: 2, isJoinedByDoubleBond: false, doubleBondLocants: [] },
 *       { locants: [2, 2], multiplyingPrefix: 'di', countSaidByPrefix: 2, writtenAs: 'dimethyl',
 *         substituentName: 'methyl', substituentCarbonCount: 1, isJoinedByDoubleBond: false, doubleBondLocants: [] },
 *     ],
 *   }
 * A halogen group also has its element symbol, e.g. halogen: 'Cl' for "chloro", and
 * substituentCarbonCount 0. Its locants are null if the name leaves them out ("chloroethane").
 * The OH groups of an alcohol, from the suffix -ol or the prefix hydroxy, are a group with
 * isHydroxy: true and substituentName 'hydroxy' ("propan-2-ol" has one at locant 2).
 * The CHO groups of an aldehyde, from the suffix -al, are a group with isAldehyde: true at
 * the ends of the chain ("butanedial" has them at locants 1 and 4), and locantsWritten
 * saying whether the name gave those locants ("butane-1,4-dial"). doubleBondLocantLeftOut is
 * true for "ethene" and "propene", and for "propenal", which is read as prop-2-enal.
 * The C=O groups of a ketone, from the suffix -one or the prefix oxo, are a group with
 * isKetone: true and substituentName 'oxo' ("propan-2-one" has one at locant 2). (In an acid,
 * oxo can also be the O of a CHO group at the end of the chain, as in "4-oxobutanoic acid".)
 * The carboxyl groups of an acid, from the suffix "oic acid", are a group with
 * isCarboxylicAcid: true at the ends of the chain, with locantsWritten, like those of -al.
 * (A side chain's double bond locants are numbered from the carbon joined to the main chain.)
 * Or, if the text can't be read:
 *   { errorMessage, isSpecificNamingMistake: true | false }
 *
 * errorMessage is to be put into words by src/languages/translate.js.
 * isSpecificNamingMistake is true when we know exactly what is wrong (useful as a hint
 * for the student), and false when the text simply isn't a name we understand
 * (for example because the student is still typing it).
 */
/** Ethenyl with its locant written, as it is when it has prefixes (2-chloroethen-1-yl, P-14.3.4.4): the same group as ethenyl. */
const ETHENYL_WITH_LOCANT = /ethen-1-yl/g;

export function parseTypedName(typedText) {
  const { text, mainChainStereo, linkedGroupStereo, groupStereo, writtenAs } = takeOutStereodescriptors(
    replaceOtherAcceptedName(typedText.trim().toLowerCase()).replace(ETHENYL_WITH_LOCANT, 'ethenyl'),
  );
  const parsedName = parseNameWithoutStereodescriptors(text);
  if (parsedName.errorMessage || (mainChainStereo.length === 0 && linkedGroupStereo.length === 0 && groupStereo.length === 0)) return parsedName;
  return addStereodescriptorsToParsedName(parsedName, { mainChainStereo, linkedGroupStereo, groupStereo, writtenAs });
}

/** E or Z, with or without a locant, and a list of them: "2E", "Z", "2Z,4E". */
const STEREODESCRIPTOR_LIST = String.raw`(?:\d+)?[ez](?:,(?:\d+)?[ez])*`;

/** E and Z in brackets, followed by a hyphen (which may be left out): "(2e)-", "(e)". */
const STEREODESCRIPTORS_IN_BRACKETS = new RegExp(String.raw`^\((${STEREODESCRIPTOR_LIST})\)(-?)`);

/** E and Z without brackets: "2e-", "e-". */
const STEREODESCRIPTORS_WITHOUT_BRACKETS = new RegExp(String.raw`^(${STEREODESCRIPTOR_LIST})-`);

/** cis or trans, and a list of them with locants: "cis-", "trans-", "2-cis,4-trans-" (P-93.4.2.1.1). */
const CIS_OR_TRANS = /^((?:\d+-)?(?:cis|trans)(?:,(?:\d+-)?(?:cis|trans))*)-/;

/** An opening bracket with E and Z at the start of what is inside it: "[(1e)-prop-1-en-1-yl]". */
const BRACKET_STARTING_WITH_STEREODESCRIPTORS = new RegExp(String.raw`[([{](?=\(${STEREODESCRIPTOR_LIST}\)-?)`);

/** "2e,4z" -> [{ locant: 2, descriptor: 'E' }, { locant: 4, descriptor: 'Z' }]; a descriptor without a locant has locant null. */
function readStereodescriptorList(listText) {
  return listText.split(',').map((item) => ({
    locant: item.length > 1 ? Number(item.slice(0, -1)) : null,
    descriptor: item.slice(-1).toUpperCase(),
  }));
}

/**
 * Takes the E and Z at the start of one word of a name, if there are any.
 * Returns { rest, descriptors, writtenAs } (writtenAs lists anything not written the IUPAC way), or null.
 */
function takeOutLeadingStereodescriptors(word) {
  const inBrackets = word.match(STEREODESCRIPTORS_IN_BRACKETS);
  if (inBrackets) {
    return { rest: word.slice(inBrackets[0].length), descriptors: readStereodescriptorList(inBrackets[1]), writtenAs: inBrackets[2] === '' ? ['withoutHyphen'] : [] };
  }
  const withoutBrackets = word.match(STEREODESCRIPTORS_WITHOUT_BRACKETS);
  if (withoutBrackets) return { rest: word.slice(withoutBrackets[0].length), descriptors: readStereodescriptorList(withoutBrackets[1]), writtenAs: ['withoutBrackets'] };
  const cisOrTrans = word.match(CIS_OR_TRANS);
  if (cisOrTrans) {
    const descriptors = cisOrTrans[1].split(',').map((item) => {
      const [, locant, cisOrTransWord] = item.match(/^(?:(\d+)-)?(cis|trans)$/);
      return { locant: locant === undefined ? null : Number(locant), descriptor: cisOrTransWord === 'cis' ? 'Z' : 'E' };
    });
    return { rest: word.slice(cisOrTrans[0].length), descriptors, writtenAs: ['cisOrTrans'] };
  }
  return null;
}

/**
 * Writes the brackets the way IUPAC nests them, ( ) inside [ ] inside { } (P-16.5.4), for when
 * taking out E and Z has taken out the innermost brackets: "3-[prop-1-en-1-yl]" -> "3-(prop-1-en-1-yl)".
 */
function nestBracketsTheIupacWay(text) {
  const characters = [...text];
  const openings = [];
  for (let index = 0; index < characters.length; index++) {
    if ('([{'.includes(characters[index])) openings.push({ index, height: 1 });
    else if (')]}'.includes(characters[index]) && openings.length > 0) {
      const { index: openingIndex, height } = openings.pop();
      const [opening, closing] = ['()', '[]', '{}'][(height - 1) % 3];
      characters[openingIndex] = opening;
      characters[index] = closing;
      if (openings.length > 0) openings[openings.length - 1].height = Math.max(openings[openings.length - 1].height, height + 1);
    }
  }
  return characters.join('');
}

/**
 * Takes every E and Z out of a name (already in lower case), noting what each belongs to:
 *   "methyl (2e)-but-2-enoate"           -> mainChainStereo [{ locant: 2, descriptor: 'E' }]
 *   "(2e)-but-2-en-1-yl ethanoate"       -> linkedGroupStereo (the group on an ester's O)
 *   "3-[(1e)-prop-1-en-1-yl]hex-1-ene"   -> groupStereo [{ groupText: 'prop-1-en-1-yl', descriptors }]
 * Returns { text (the name without them), mainChainStereo, linkedGroupStereo, groupStereo, writtenAs }.
 */
export function takeOutStereodescriptors(nameText) {
  const words = nameText.split(' ');
  const isEster = words.length === 2 && /(oate|carboxylate)$/.test(words[1]);
  const writtenAs = new Set();
  const stereoByWord = words.map(() => []);
  const groupStereo = [];
  let anyTakenOut = false;
  const wordsWithout = words.map((word, wordIndex) => {
    let rest = word;
    const leading = takeOutLeadingStereodescriptors(rest);
    if (leading) {
      rest = leading.rest;
      stereoByWord[wordIndex] = leading.descriptors;
      leading.writtenAs.forEach((way) => writtenAs.add(way));
      anyTakenOut = true;
    }
    for (let match = rest.match(BRACKET_STARTING_WITH_STEREODESCRIPTORS); match; match = rest.match(BRACKET_STARTING_WITH_STEREODESCRIPTORS)) {
      const afterBracket = match.index + 1;
      const inner = takeOutLeadingStereodescriptors(rest.slice(afterBracket));
      inner.writtenAs.forEach((way) => writtenAs.add(way));
      const closing = readBracketedText(rest.slice(0, afterBracket) + inner.rest, match.index);
      const groupText = closing === null ? inner.rest : closing.innerText;
      groupStereo.push({ groupText: nestBracketsTheIupacWay(groupText), descriptors: inner.descriptors });
      rest = rest.slice(0, afterBracket) + inner.rest;
      anyTakenOut = true;
    }
    return rest;
  });
  const text = anyTakenOut ? nestBracketsTheIupacWay(wordsWithout.join(' ')) : nameText;
  return {
    text,
    mainChainStereo: isEster ? stereoByWord[1] : stereoByWord[0],
    linkedGroupStereo: isEster ? stereoByWord[0] : [],
    groupStereo,
    writtenAs: [...writtenAs],
  };
}

/**
 * Gives each E or Z written without a locant the locant of its double bond, in order: only
 * possible when there is one for each double bond. doubleBondLocants: those of the chain.
 * Returns the descriptors, or null if they can't be matched up.
 */
function fillInStereoLocants(descriptors, doubleBondLocants, ylideneCountWithoutLocants = 0) {
  const withoutLocants = descriptors.filter(({ locant }) => locant === null);
  if (withoutLocants.length === 0) return descriptors;
  if (withoutLocants.length !== descriptors.length) return null;
  // "(E)-ethylidene(methyl)cyclopropane": the ethylidene's locant is only known once the groups
  // are placed, so the locant is left null for convertParsedNameToDescription to fill in.
  if (ylideneCountWithoutLocants > 0) return doubleBondLocants.length === 0 && descriptors.length === ylideneCountWithoutLocants ? descriptors : null;
  if (descriptors.length !== doubleBondLocants.length) return null;
  const inOrder = [...doubleBondLocants].sort((first, second) => first - second);
  return descriptors.map(({ descriptor }, index) => ({ locant: inOrder[index], descriptor }));
}

/**
 * Puts the E and Z taken out by takeOutStereodescriptors back into the parsed name:
 * mainChainStereo on the name, stereo on each side chain group and linked group they belong to,
 * and stereoWrittenAs if any were written in a way that IUPAC names don't use.
 */
function addStereodescriptorsToParsedName(parsedName, { mainChainStereo, linkedGroupStereo, groupStereo, writtenAs }) {
  const needsLocants = { errorMessage: message('readingNames.stereoNeedsLocants'), isSpecificNamingMistake: true };
  const ylideneLocants = parsedName.substituentGroups.filter((group) => group.isJoinedByDoubleBond && group.locants).flatMap((group) => group.locants);
  const ylideneCountWithoutLocants = parsedName.substituentGroups
    .filter((group) => group.isJoinedByDoubleBond && group.locants === null)
    .reduce((total, group) => total + group.countSaidByPrefix, 0);
  const mainChainDescriptors = fillInStereoLocants(mainChainStereo, [...parsedName.mainChainDoubleBondLocants, ...ylideneLocants], ylideneCountWithoutLocants);
  if (mainChainDescriptors === null) return needsLocants;

  // Each side chain's E and Z go to the first group, in the order they are written, with the same name.
  const substituentGroups = parsedName.substituentGroups.map((group) => ({ ...group }));
  let linkedGroup = parsedName.linkedGroup ? { ...parsedName.linkedGroup } : undefined;
  const candidates = [
    ...substituentGroups.map((group) =>
      group.linkedGroup
        ? { name: linkedGroupName(group.linkedGroup), give: (stereo) => (group.linkedGroup = { ...group.linkedGroup, stereo }), doubleBondLocants: group.linkedGroup.doubleBondLocants ?? [] }
        : {
            name: group.substituentName,
            give: (stereo) => (group.stereo = stereo),
            doubleBondLocants: group.doubleBondLocants ?? [],
            // A group joined by a double bond, with none of its own: "2-[(E)-ethylidene]".
            ylideneLocants: group.isJoinedByDoubleBond && !group.doubleBondLocants?.length ? group.locants : null,
          },
    ),
    ...(linkedGroup ? [{ name: linkedGroupName(linkedGroup), give: (stereo) => (linkedGroup = { ...linkedGroup, stereo }), doubleBondLocants: linkedGroup.doubleBondLocants ?? [] }] : []),
  ];
  const used = new Set();
  // E and Z in an ylidene group's brackets, "1,4-di[(Z)-ethylidene]", are for the double bond
  // joining it, so they go with the main chain's at the group's locants (P-93.5.1.4.2 allows
  // this in general names; preferred names put them at the front).
  const ylideneDescriptors = [];
  for (const { groupText, descriptors } of groupStereo) {
    const candidate = candidates.find((someCandidate) => !used.has(someCandidate) && someCandidate.name === groupText);
    if (candidate === undefined) return { errorMessage: GENERAL_NOT_RECOGNISED_MESSAGE, isSpecificNamingMistake: false };
    const hasNoLocants = descriptors.every(({ locant }) => locant === null);
    if (candidate.ylideneLocants && hasNoLocants && (descriptors.length === 1 || descriptors.length === candidate.ylideneLocants.length)) {
      used.add(candidate);
      candidate.ylideneLocants.forEach((locant, index) => ylideneDescriptors.push({ locant, descriptor: descriptors[Math.min(index, descriptors.length - 1)].descriptor }));
      continue;
    }
    const filledIn = fillInStereoLocants(descriptors, candidate.doubleBondLocants);
    if (filledIn === null) return needsLocants;
    used.add(candidate);
    candidate.give(filledIn);
  }
  if (linkedGroupStereo.length > 0) {
    if (!linkedGroup) return { errorMessage: GENERAL_NOT_RECOGNISED_MESSAGE, isSpecificNamingMistake: false };
    const filledIn = fillInStereoLocants(linkedGroupStereo, linkedGroup.doubleBondLocants ?? []);
    if (filledIn === null) return needsLocants;
    linkedGroup = { ...linkedGroup, stereo: filledIn };
  }
  return {
    ...parsedName,
    substituentGroups,
    ...(linkedGroup ? { linkedGroup } : {}),
    ...(mainChainDescriptors.length + ylideneDescriptors.length > 0
      ? { mainChainStereo: [...mainChainDescriptors, ...ylideneDescriptors].sort((first, second) => first.locant - second.locant) }
      : {}),
    ...(writtenAs.length > 0 ? { stereoWrittenAs: writtenAs } : {}),
  };
}

/** parseTypedName, for a name with its E and Z already taken out. */
function parseNameWithoutStereodescriptors(nameText) {
  const text = replaceOtherAcceptedName(nameText.trim().toLowerCase()).replace(ETHENYL_WITH_LOCANT, 'ethenyl');
  const olderName = readOlderAmineOrEtherName(text);
  if (olderName) return olderName;
  const esterOrAmide = readEsterOrAmideName(text);
  if (esterOrAmide) return esterOrAmide;
  const secondaryAmine = readSecondaryAmineName(text);
  if (secondaryAmine) return secondaryAmine;
  let remainingText = text;
  const substituentGroups = [];
  /** True just after a prefix such as "3-chloro" that runs straight on into the next word. */
  let previousWasPrefixWithoutHyphen = false;

  for (;;) {
    const parent = readParentChain(remainingText);
    if (parent?.errorMessage) return parent;
    if (parent) return checkParsedNameMakesSense(parent, substituentGroups);

    const groupPrefix = readGroupPrefix(remainingText);
    if (groupPrefix?.errorMessage) return groupPrefix;
    const sideChain = groupPrefix ? null : readSideChainWithGroups(remainingText);
    if (sideChain?.errorMessage) return sideChain;
    if (groupPrefix || sideChain) {
      const { wholeGroupText, group } = groupPrefix ?? sideChain;
      substituentGroups.push(group);
      remainingText = remainingText.slice(wholeGroupText.length);
      previousWasPrefixWithoutHyphen = Boolean(groupPrefix) && !remainingText.startsWith('-');
      if (remainingText.startsWith('-')) remainingText = remainingText.slice(1);
      continue;
    }

    const plainSideChain = readPlainSideChainPrefix(remainingText);
    if (plainSideChain === null) return explainWhyTextIsNotAName(text);
    const { wholeGroupText, group } = plainSideChain;
    substituentGroups.push({ ...group, ...(previousWasPrefixWithoutHyphen && group.locants === null ? { followsPrefixWithoutHyphen: true } : {}) });
    previousWasPrefixWithoutHyphen = false;

    remainingText = remainingText.slice(wholeGroupText.length);
    if (remainingText.startsWith('-')) remainingText = remainingText.slice(1);
  }
}

/**
 * Reads a side chain with nothing on it at the start of the text, with its locants and
 * multiplying prefix: "2,2-dimethyl", "3-ethylidene", "4-(prop-2-en-1-yl)", "cyclohexyl".
 * Returns { wholeGroupText, group } (group as in parseTypedName's substituentGroups) or null.
 */
function readPlainSideChainPrefix(text) {
  const groupMatch = text.match(SUBSTITUENT_GROUP_AT_START_OF_TEXT);
  const groupWithoutLocantsMatch = groupMatch ? null : text.match(SUBSTITUENT_GROUP_WITHOUT_LOCANTS_AT_START_OF_TEXT);
  if (!groupMatch && !groupWithoutLocantsMatch) return null;

  const [wholeGroupText, locantsText, prefixBeforeBrackets, textInBrackets, lettersWithoutBrackets, ylideneEnding] = groupMatch ?? [
    groupWithoutLocantsMatch[0],
    undefined,
    groupWithoutLocantsMatch[3],
    groupWithoutLocantsMatch[4],
    groupWithoutLocantsMatch[1],
    groupWithoutLocantsMatch[2],
  ];
  const locants = locantsText === undefined ? null : parseLocants(locantsText);
  let reading = null;
  if (textInBrackets !== undefined) {
    const count = countForPrefixBeforeBrackets(prefixBeforeBrackets);
    const substituent = readBracketedSubstituent(textInBrackets);
    if (count !== undefined && substituent !== null) reading = { multiplyingPrefix: prefixBeforeBrackets, count, ...substituent };
  } else {
    const split = splitPrefixFromSubstituent(lettersWithoutBrackets, locants?.length);
    if (split !== null) reading = { ...split, isJoinedByDoubleBond: ylideneEnding !== undefined };
  }
  if (reading === null) return null;

  return {
    wholeGroupText,
    group: {
      locants,
      multiplyingPrefix: reading.multiplyingPrefix,
      countSaidByPrefix: reading.count,
      writtenAs: locantsText === undefined ? wholeGroupText : wholeGroupText.slice(locantsText.length + 1),
      substituentName: reading.isRing
        ? cycloalkylSubstituentName(reading.carbonCount)
        : unbranchedSubstituentName(reading.carbonCount, reading.isJoinedByDoubleBond, reading.doubleBondLocants, reading.tripleBondLocants),
      substituentCarbonCount: reading.carbonCount,
      isJoinedByDoubleBond: reading.isJoinedByDoubleBond,
      doubleBondLocants: reading.doubleBondLocants,
      ...tripleBondsOf(reading),
      ...(reading.isRing ? { isRing: true } : {}),
    },
  };
}

/** An ester's name: the group on the O, a space, and the acid part, "...oate" or "...carboxylate". */
const ESTER_NAME = /^(\S+) (\S+?)(oate|carboxylate)$/;

/** An amide's name: "...amide", or "...carboxamide" on a ring. */
const AMIDE_NAME = /^(.*?)(carboxamide|amide)$/;

/** A group on the N of an amide: "N-methyl", "N-(prop-2-en-1-yl)", followed by the rest of the name. */
const NITROGEN_GROUP = /(^|-)N-(\([^()]+\)|[a-z]+?yl)(?![a-z]*idene)/;

/** A group on the N and on numbered carbons: "N,2-dimethyl". */
const NITROGEN_AND_CARBON_GROUP = new RegExp(String.raw`(^|-)N,(${LOCANTS})-([a-z]+?yl)(?![a-z]*idene)`);

/**
 * Reads the name of the group joined to the O of an ester or the N of an amide: "methyl",
 * "ethenyl", "cyclohexyl", "prop-2-en-1-yl" or "(prop-2-en-1-yl)".
 * Returns { carbonCount, doubleBondLocants, isRing } or null.
 */
function readLinkedGroupName(text) {
  const withoutBrackets = text.startsWith('(') && text.endsWith(')') ? text.slice(1, -1) : text;
  const group = readBracketedSubstituent(withoutBrackets);
  if (group === null || group.isJoinedByDoubleBond) return null;
  return { carbonCount: group.carbonCount, doubleBondLocants: group.doubleBondLocants, ...tripleBondsOf(group), ...(group.isRing ? { isRing: true } : {}) };
}

/**
 * Reads an ester or amide name as the acid it comes from, with the group on the O or N:
 * the result is parseTypedName's for the acid, with isEsterName or isAmideName, and
 * linkedGroup (see readLinkedGroupName) for the group on the O, or on the N if there is one.
 * null if the text is not an ester or amide name.
 */
function readEsterOrAmideName(text) {
  const esterMatch = text.match(ESTER_NAME);
  if (esterMatch) {
    const [, groupText, acidStem, ending] = esterMatch;
    const linkedGroup = readLinkedGroupName(groupText);
    if (linkedGroup === null) return { errorMessage: GENERAL_NOT_RECOGNISED_MESSAGE, isSpecificNamingMistake: false };
    const acid = parseTypedName(acidStem + (ending === 'oate' ? 'oic acid' : 'carboxylic acid'));
    return acid.errorMessage ? acid : { ...acid, isEsterName: true, linkedGroup };
  }
  if (/^\S+(oate|carboxylate)$/.test(text)) return { errorMessage: message('readingNames.esterNeedsGroup'), isSpecificNamingMistake: true };

  const amideMatch = text.match(AMIDE_NAME);
  if (!amideMatch) return null;
  const [, textBeforeEnding, ending] = amideMatch;
  if (/(^|[-,])N,N-/.test(textBeforeEnding)) return { errorMessage: message('readingNames.twoGroupsOnAmideNitrogenNotCovered'), isSpecificNamingMistake: true };
  const { remainingText: acidText, linkedGroup, errorMessage } = takeOutGroupOnNitrogen(textBeforeEnding);
  if (errorMessage) return { errorMessage, isSpecificNamingMistake: false };
  const acid = parseTypedName(acidText + (ending === 'amide' ? 'oic acid' : 'carboxylic acid'));
  return acid.errorMessage ? acid : { ...acid, isAmideName: true, ...(linkedGroup ? { linkedGroup } : {}) };
}

/**
 * Takes the group on the N out of the start of an amide or amine name, for the rest to be read
 * as the acid or primary amine: "N-methylethan" -> { remainingText: "ethan", linkedGroup:
 * { carbonCount: 1, ... } }, "N,2-dimethylpropan" -> "2-methylpropan", and
 * "2-chloro-N-methylpropan" -> "2-chloropropan". With no group on the N, the text is unchanged;
 * if the group can't be read, returns { errorMessage }.
 */
function takeOutGroupOnNitrogen(text) {
  const notRecognised = { errorMessage: GENERAL_NOT_RECOGNISED_MESSAGE };
  let remainingText = text;
  let linkedGroup;
  const nitrogenAndCarbonMatch = text.match(NITROGEN_AND_CARBON_GROUP);
  const nitrogenMatch = nitrogenAndCarbonMatch ? null : text.match(NITROGEN_GROUP);
  if (nitrogenAndCarbonMatch) {
    // "N,2-dimethyl": one methyl on the N, and "2-methyl" left for the carbons.
    const [wholeMatch, separator, locantsText, multipliedGroup] = nitrogenAndCarbonMatch;
    const carbonLocantCount = parseLocants(locantsText).length;
    const prefix = multiplyingPrefixForCount(carbonLocantCount + 1);
    const groupName = multipliedGroup.startsWith(prefix) ? multipliedGroup.slice(prefix.length) : null;
    linkedGroup = groupName === null ? null : readLinkedGroupName(groupName);
    if (linkedGroup === null) return notRecognised;
    remainingText = text.replace(wholeMatch, `${separator}${locantsText}-${writeMultipliedSubstituent(carbonLocantCount, groupName)}`);
  } else if (nitrogenMatch) {
    const [wholeMatch, separator, groupText] = nitrogenMatch;
    linkedGroup = readLinkedGroupName(groupText);
    if (linkedGroup === null) return notRecognised;
    remainingText = text.replace(wholeMatch, separator).replace(/^-/, '').replace(/--/, '-');
  }
  if (remainingText === '' || remainingText.endsWith('-')) return notRecognised;
  return { remainingText, ...(linkedGroup ? { linkedGroup } : {}) };
}

/**
 * Reads a secondary amine's name, with a group on the N (P-62.2.2): "N-methylethanamine",
 * "N,2-dimethylpropan-1-amine", "N-ethenylbutan-1-amine". The result is parseTypedName's for
 * the primary amine, with the group on the N as the linkedGroup of its -amine group.
 * null if the text is not such a name.
 */
function readSecondaryAmineName(text) {
  if (!text.endsWith('amine') || !/(^|-)N[-,]/.test(text)) return null;
  if (/(^|-)N,N-|(^|-)N-[a-z()-]+-N-/.test(text)) return { errorMessage: message('readingNames.tertiaryAmineNotCovered'), isSpecificNamingMistake: true };
  const { remainingText, linkedGroup, errorMessage } = takeOutGroupOnNitrogen(text);
  if (errorMessage || !linkedGroup) return { errorMessage: errorMessage ?? GENERAL_NOT_RECOGNISED_MESSAGE, isSpecificNamingMistake: false };
  const primaryAmine = parseTypedName(remainingText);
  if (primaryAmine.errorMessage) return primaryAmine;
  const amineSuffixGroup = primaryAmine.substituentGroups.find((group) => group.isAmine && group.writtenAs.endsWith('amine'));
  if (!amineSuffixGroup) return { errorMessage: GENERAL_NOT_RECOGNISED_MESSAGE, isSpecificNamingMistake: false };
  // With two or more amine groups, the name would have to say which N the group is on (N1, N2 ...).
  if (amineSuffixGroup.countSaidByPrefix > 1) return { errorMessage: message('naming.nitrogenGroupOnPolyamineNotCovered'), isSpecificNamingMistake: true };
  return {
    ...primaryAmine,
    substituentGroups: primaryAmine.substituentGroups.map((group) => (group === amineSuffixGroup ? { ...group, linkedGroup } : group)),
  };
}

/** An older amine name: "methylamine", "dimethylamine", "ethylmethylamine". */
const OLDER_AMINE_NAME = /^([a-z]+yl)amine$/;

/** An older ether name: "dimethyl ether", "diethyl ether", "ethyl methyl ether". */
const OLDER_ETHER_NAME = /^(?:di([a-z]+yl)|([a-z]+yl) ([a-z]+yl)) ether$/;

/**
 * Splits the letters of an older amine name into one or two groups: "methyl" -> [methyl],
 * "dimethyl" -> [methyl, methyl], "ethylmethyl" -> [ethyl, methyl]. null if it can't.
 */
function readGroupsOfOlderAmineName(letters) {
  const oneGroup = readLinkedGroupName(letters);
  if (oneGroup) return [oneGroup];
  if (letters.startsWith('di') && readLinkedGroupName(letters.slice(2))) return [readLinkedGroupName(letters.slice(2)), readLinkedGroupName(letters.slice(2))];
  for (let splitAt = 1; splitAt < letters.length; splitAt++) {
    const first = readLinkedGroupName(letters.slice(0, splitAt));
    const second = readLinkedGroupName(letters.slice(splitAt));
    if (first && second) return [first, second];
  }
  return null;
}

/**
 * Reads the older names for amines and ethers, built from the names of the groups on the N or
 * O: "methylamine", "ethylamine", "dimethylamine", "ethylmethylamine", "dimethyl ether",
 * "diethyl ether", "ethyl methyl ether". The first group is taken as the parent, as the
 * naming code works out the right one. The result is like parseTypedName's.
 * null if the text is not such a name.
 */
function readOlderAmineOrEtherName(text) {
  const amineMatch = text.match(OLDER_AMINE_NAME);
  const etherMatch = amineMatch ? null : text.match(OLDER_ETHER_NAME);
  let groups = null;
  // "trimethylamine" is (CH3)3N, with three groups on the one N.
  if (amineMatch && amineMatch[1].startsWith('tri') && readLinkedGroupName(amineMatch[1].slice(3))) {
    return { errorMessage: message('readingNames.tertiaryAmineNotCovered'), isSpecificNamingMistake: true };
  }
  if (amineMatch) groups = readGroupsOfOlderAmineName(amineMatch[1]);
  else if (etherMatch) {
    const [, repeatedGroupText, firstGroupText, secondGroupText] = etherMatch;
    const groupTexts = repeatedGroupText ? [repeatedGroupText, repeatedGroupText] : [firstGroupText, secondGroupText];
    groups = groupTexts.map(readLinkedGroupName);
    if (groups.includes(null)) groups = null;
  }
  if (groups === null) return null;

  const [parentGroup, otherGroup] = groups;
  const linkedGroupText = otherGroup ? linkedGroupName(otherGroup) : null;
  const group = amineMatch
    ? { isAmine: true, substituentName: linkedGroupText ? alkylaminoPrefix(linkedGroupText) : AMINO_PREFIX, writtenAs: 'amine' }
    : { isEther: true, substituentName: alkoxyPrefix(linkedGroupText), writtenAs: 'ether' };
  return {
    parentChainCarbonCount: parentGroup.carbonCount,
    mainChainDoubleBondLocants: parentGroup.doubleBondLocants ?? [],
    ...(parentGroup.tripleBondLocants ? { mainChainTripleBondLocants: parentGroup.tripleBondLocants } : {}),
    substituentGroups: [
      {
        locants: [1],
        multiplyingPrefix: '',
        countSaidByPrefix: 1,
        ...group,
        ...(otherGroup ? { linkedGroup: otherGroup } : {}),
        substituentCarbonCount: 0,
        isJoinedByDoubleBond: false,
        doubleBondLocants: [],
      },
    ],
    ...(parentGroup.isRing ? { isRing: true } : {}),
  };
}

/** A message saying the multiplying prefix doesn't match the number of locants, with the corrected text. */
function explainWrongMultiplyingPrefix(writtenGroup, numberOfLocants, correctedGroup) {
  return {
    errorMessage:
      multiplyingPrefixForCount(numberOfLocants) === undefined
        ? message('readingNames.tooManyLocants', { group: writtenGroup })
        : message('readingNames.wrongMultiplyingPrefix', { group: writtenGroup, count: numberOfLocants, correctedGroup }),
    isSpecificNamingMistake: true,
  };
}

/**
 * The C=O groups of a ketone's parent, from the suffix -one, as a substituent group, or
 * { errorMessage } if they can't be where the name puts them.
 */
function placeKetoneGroups(parent, groupsBeforeParent) {
  const { parentChainCarbonCount, mainChainDoubleBondLocants, writtenAs, isRing = false } = parent;
  const { locants, countSaidByName } = parent.ketoneGroup;
  // "pentanone" could be pentan-2-one or pentan-3-one. (Propanone and butanone are read before
  // this.) In a ring every carbon is alike, so "cyclohexanone" is fine, and methane has only one
  // carbon, so "dicyclohexylmethanone" is too (P-14.3.4.2 (a)).
  if (locants === null && !isRing && parentChainCarbonCount !== 1) return { errorMessage: message('readingNames.ketoneNeedsLocant'), isSpecificNamingMistake: true };
  if (locants !== null && locants.length !== countSaidByName) {
    const correctedParent = mainChainName(parentChainCarbonCount, mainChainDoubleBondLocants, true, [], { ketoneLocants: locants, isRing });
    return explainWrongMultiplyingPrefix(writtenAs, locants.length, correctedParent);
  }
  // A C=O on an end carbon has a hydrogen on it (or two, on methane): it is an aldehyde, -CHO.
  // Unless a side chain such as cyclohexyl is joined there too, as in 1-cyclohexylethan-1-one.
  // On methane a side chain without a locant is on its only carbon: dicyclohexylmethan-1-one.
  const isAt = (group, locant) => group.locants?.includes(locant) || (group.locants === null && parentChainCarbonCount === 1);
  const hasSideChainAt = (locant) => groupsBeforeParent.some((group) => group.substituentCarbonCount > 0 && isAt(group, locant));
  const isEndCarbon = (locant) => !isRing && (locant === 1 || locant === parentChainCarbonCount);
  if (locants !== null && locants.some((locant) => isEndCarbon(locant) && !hasSideChainAt(locant))) {
    return { errorMessage: message('readingNames.ketoneAtChainEnd', { group: writtenAs }), isSpecificNamingMistake: true };
  }
  return {
    locants,
    multiplyingPrefix: multiplyingPrefixForCount(countSaidByName),
    countSaidByPrefix: countSaidByName,
    writtenAs: writeMultipliedSuffix(countSaidByName, 'one'),
    substituentName: OXO_PREFIX,
    isKetone: true,
    substituentCarbonCount: 0,
    isJoinedByDoubleBond: false,
    doubleBondLocants: [],
  };
}

/** A ring's -COOH or -CHO groups, from the suffix "carboxylic acid" or "carbaldehyde", as a substituent group. */
function placeRingCarbonylGroups(parent, groupKey) {
  const { parentChainCarbonCount, mainChainDoubleBondLocants, writtenAs } = parent;
  const { locants, countSaidByName } = parent[groupKey];
  const isAcid = groupKey === 'ringCarboxylicAcidGroup';
  if (locants !== null && locants.length !== countSaidByName) {
    const correctedParent = mainChainName(parentChainCarbonCount, mainChainDoubleBondLocants, true, [], {
      isRing: true,
      [isAcid ? 'carboxylicAcidLocants' : 'aldehydeLocants']: locants,
    });
    return explainWrongMultiplyingPrefix(writtenAs, locants.length, correctedParent);
  }
  return {
    locants,
    multiplyingPrefix: multiplyingPrefixForCount(countSaidByName),
    countSaidByPrefix: countSaidByName,
    writtenAs: `${multiplyingPrefixForCount(countSaidByName)}${isAcid ? 'carboxylic acid' : 'carbaldehyde'}`,
    ...(isAcid ? { isCarboxylicAcid: true, substituentName: CARBOXY_PREFIX } : { isAldehyde: true, substituentName: FORMYL_PREFIX }),
    substituentCarbonCount: 0,
    isJoinedByDoubleBond: false,
    doubleBondLocants: [],
  };
}

function checkParsedNameMakesSense(parent, writtenGroupsBeforeParent) {
  const { parentChainCarbonCount, doubleBondCountSaidByName, writtenAs, hydroxyGroup, aldehydeGroup, ketoneGroup, carboxylicAcidGroup, amineGroup, isRing = false } = parent;
  let { mainChainDoubleBondLocants } = parent;
  // In a ring, the carbon of -CHO or -COOH can't be one of the ring's: "cyclohexanal" is cyclohexanecarbaldehyde.
  if (isRing && (aldehydeGroup || carboxylicAcidGroup)) {
    return { errorMessage: message('readingNames.ringNeedsCarbaldehydeOrCarboxylicAcid'), isSpecificNamingMistake: true };
  }
  // And on a chain, the carbon is part of the chain: "ethanecarboxylic acid" is propanoic acid.
  // Formyl can still be on a chain where it can't be the chain's end, as in 3-formylpentanoic
  // acid (P-66.6.1.3), and is then read as a side chain of one carbon with its =O.
  const isChainEnd = (locant) => locant === 1 || locant === parentChainCarbonCount;
  const isFormylOnChainEnd = (group) => group.substituentName === FORMYL_PREFIX && (group.locants === null || group.locants.some(isChainEnd));
  if (!isRing && (parent.ringCarboxylicAcidGroup || parent.ringAldehydeGroup || writtenGroupsBeforeParent.some(isFormylOnChainEnd))) {
    return { errorMessage: message('readingNames.carbaldehydeAndCarboxylicAcidOnlyOnRings'), isSpecificNamingMistake: true };
  }
  const groupsBeforeParent = isRing
    ? writtenGroupsBeforeParent
    : writtenGroupsBeforeParent.map(({ isAldehyde, ...group }) =>
        isAldehyde ? { ...group, substituentCarbonCount: 1, sideChainGroups: [{ locant: 1, isKetone: true }] } : group,
      );
  // A side chain can be written without a locant only where it could go on any carbon: on a
  // ring, on methane, or on a chain with only one carbon that isn't a CHO or COOH carbon, as in
  // cyclopentylacetic acid (P-14.3.4.6). Whether the name really needs none is checked once
  // the molecule is named (an amide's always has them: 2-cyclopentylacetamide).
  const endGroupCount = (carboxylicAcidGroup ?? aldehydeGroup)?.countSaidByName ?? 0;
  const hasOneCarbonForGroups = parentChainCarbonCount - endGroupCount === 1;
  const sideChainWithoutLocant =
    isRing || parentChainCarbonCount === 1 || hasOneCarbonForGroups ? undefined : groupsBeforeParent.find((group) => group.locants === null && group.substituentCarbonCount > 0);
  if (sideChainWithoutLocant) {
    // "3-chloromethylhexane": the student meant 3-(chloromethyl)hexane.
    const key = sideChainWithoutLocant.followsPrefixWithoutHyphen ? 'readingNames.substitutedSideChainNeedsBrackets' : 'readingNames.sideChainNeedsLocant';
    return { errorMessage: message(key), isSpecificNamingMistake: true };
  }
  // "propenal" can only be CH2=CH-CHO, as carbon 1 is the CHO, so its double bond is read as
  // prop-2-enal, and "propenoic acid" the same way as prop-2-enoic acid.
  const hasChainEndGroup = aldehydeGroup || carboxylicAcidGroup;
  if (hasChainEndGroup && parent.doubleBondLocantLeftOut && parentChainCarbonCount === 3) mainChainDoubleBondLocants = [2];
  // "propynal" and "propynoic acid" likewise, as prop-2-ynal and prop-2-ynoic acid.
  const { tripleBondCountSaidByName = 0 } = parent;
  let { mainChainTripleBondLocants = [] } = parent;
  if (hasChainEndGroup && parent.tripleBondLocantLeftOut && parentChainCarbonCount === 3) mainChainTripleBondLocants = [2];
  const substituentGroups = [...groupsBeforeParent];
  for (const groupKey of Object.keys(CHAIN_END_GROUPS)) {
    if (!parent[groupKey]) continue;
    const placedGroup = placeChainEndGroups(parent, groupKey);
    if (placedGroup.errorMessage) return placedGroup;
    substituentGroups.push(placedGroup);
  }
  for (const groupKey of ['ringCarboxylicAcidGroup', 'ringAldehydeGroup']) {
    if (!parent[groupKey]) continue;
    const placedGroup = placeRingCarbonylGroups(parent, groupKey);
    if (placedGroup.errorMessage) return placedGroup;
    substituentGroups.push(placedGroup);
  }
  if (ketoneGroup) {
    const placedGroup = placeKetoneGroups(parent, groupsBeforeParent);
    if (placedGroup.errorMessage) return placedGroup;
    substituentGroups.push(placedGroup);
  }
  if (hydroxyGroup) {
    const { locants, countSaidByName } = hydroxyGroup;
    if (locants !== null && locants.length !== countSaidByName) {
      const correctedParent = mainChainName(parentChainCarbonCount, mainChainDoubleBondLocants, true, locants, { isRing });
      return explainWrongMultiplyingPrefix(writtenAs, locants.length, correctedParent);
    }
    substituentGroups.push({
      locants,
      multiplyingPrefix: multiplyingPrefixForCount(countSaidByName),
      countSaidByPrefix: countSaidByName,
      writtenAs: writeMultipliedSuffix(countSaidByName, 'ol'),
      substituentName: HYDROXY_PREFIX,
      isHydroxy: true,
      substituentCarbonCount: 0,
      isJoinedByDoubleBond: false,
      doubleBondLocants: [],
    });
  }
  if (amineGroup) {
    const { locants, countSaidByName } = amineGroup;
    if (locants !== null && locants.length !== countSaidByName) {
      const correctedParent = mainChainName(parentChainCarbonCount, mainChainDoubleBondLocants, true, [], { aminoLocants: locants, isRing });
      return explainWrongMultiplyingPrefix(writtenAs, locants.length, correctedParent);
    }
    substituentGroups.push({
      locants,
      multiplyingPrefix: multiplyingPrefixForCount(countSaidByName),
      countSaidByPrefix: countSaidByName,
      writtenAs: writeMultipliedSuffix(countSaidByName, 'amine'),
      substituentName: AMINO_PREFIX,
      isAmine: true,
      substituentCarbonCount: 0,
      isJoinedByDoubleBond: false,
      doubleBondLocants: [],
    });
  }

  // A single carbon can't have a double bond, so "meth-1-ene" isn't a name.
  if (parentChainCarbonCount === 1 && mainChainDoubleBondLocants.length + mainChainTripleBondLocants.length > 0) {
    return { errorMessage: GENERAL_NOT_RECOGNISED_MESSAGE, isSpecificNamingMistake: false };
  }
  if (mainChainDoubleBondLocants.length !== doubleBondCountSaidByName) {
    const correctedParent = mainChainName(parentChainCarbonCount, mainChainDoubleBondLocants, true, hydroxyGroup?.locants ?? [], {
      aldehydeCount: aldehydeGroup?.countSaidByName ?? 0,
      ketoneLocants: ketoneGroup?.locants ?? [],
      carboxylicAcidCount: carboxylicAcidGroup?.countSaidByName ?? 0,
      isRing,
      carboxylicAcidLocants: parent.ringCarboxylicAcidGroup?.locants ?? [],
      aldehydeLocants: parent.ringAldehydeGroup?.locants ?? [],
      aminoLocants: amineGroup?.locants ?? [],
    });
    return explainWrongMultiplyingPrefix(writtenAs, mainChainDoubleBondLocants.length, correctedParent);
  }
  if (mainChainTripleBondLocants.length !== tripleBondCountSaidByName) {
    const correctedParent = mainChainName(parentChainCarbonCount, mainChainDoubleBondLocants, true, [], { isRing, tripleBondLocants: mainChainTripleBondLocants });
    return explainWrongMultiplyingPrefix(writtenAs, mainChainTripleBondLocants.length, correctedParent);
  }
  const problemWithDoubleBonds = findProblemWithMultipleBondLocants(mainChainDoubleBondLocants, mainChainTripleBondLocants, parentChainCarbonCount, isRing);
  if (problemWithDoubleBonds) return { errorMessage: problemWithDoubleBonds, isSpecificNamingMistake: true };

  for (const group of substituentGroups) {
    // A group written without locants ("trichloroethene", "methylcyclohexane"): its locants are filled in later.
    if (group.locants === null) continue;
    const numberOfLocants = group.locants.length;
    if (numberOfLocants !== group.countSaidByPrefix) {
      const writtenGroup = `${group.locants.join(',')}-${group.writtenAs}`;
      const correctedGroup = `${group.locants.join(',')}-${writeMultipliedSubstituent(numberOfLocants, group.substituentName)}`;
      return explainWrongMultiplyingPrefix(writtenGroup, numberOfLocants, correctedGroup);
    }

    for (const locant of group.locants) {
      if (locant < 1 || locant > parentChainCarbonCount) {
        return {
          errorMessage: message('readingNames.locantNotOnChain', { locant, chainLength: parentChainCarbonCount }),
          isSpecificNamingMistake: true,
        };
      }
    }

    const problemInSideChain = findProblemWithMultipleBondLocants(group.doubleBondLocants, group.tripleBondLocants ?? [], group.substituentCarbonCount);
    if (problemInSideChain) return { errorMessage: problemInSideChain, isSpecificNamingMistake: true };
  }
  return {
    parentChainCarbonCount,
    mainChainDoubleBondLocants,
    ...(mainChainTripleBondLocants.length > 0 ? { mainChainTripleBondLocants } : {}),
    substituentGroups,
    ...(parent.doubleBondLocantLeftOut ? { doubleBondLocantLeftOut: true } : {}),
    ...(parent.tripleBondLocantLeftOut ? { tripleBondLocantLeftOut: true } : {}),
    ...(isRing ? { isRing: true } : {}),
  };
}

function explainWhyTextIsNotAName(text) {
  const hasNoNumbers = !/\d/.test(text);
  // "chlorine", "chloride" or "2-chlormethane": as a prefix, a halogen ends in "o".
  if (/(fluor|chlor|brom|iod)(?!o)[a-z]/.test(text)) {
    return { errorMessage: message('readingNames.halogenPrefixes'), isSpecificNamingMistake: true };
  }
  // "ethanoic" or "ethanoicacid": the name of an acid ends in the separate word "acid".
  if (/oic(acid)?$/.test(text)) {
    return { errorMessage: message('readingNames.acidNeedsTheWordAcid'), isSpecificNamingMistake: true };
  }
  if (mentionsASubstituent(text) && hasNoNumbers) {
    return {
      errorMessage: message('readingNames.sideChainNeedsLocant'),
      isSpecificNamingMistake: true,
    };
  }
  return { errorMessage: GENERAL_NOT_RECOGNISED_MESSAGE, isSpecificNamingMistake: false };
}

/** One description entry for a substituent group at one locant. */
function substituentAtLocant(group, locant) {
  return {
    locant,
    substituentName: group.substituentName,
    substituentCarbonCount: group.substituentCarbonCount,
    isJoinedByDoubleBond: group.isJoinedByDoubleBond,
    doubleBondLocants: group.doubleBondLocants,
    ...tripleBondsOf(group),
    ...(group.halogen ? { halogen: group.halogen } : {}),
    ...(group.isHydroxy ? { isHydroxy: true } : {}),
    ...(group.isAldehyde ? { isAldehyde: true } : {}),
    ...(group.isKetone ? { isKetone: true } : {}),
    ...(group.isCarboxylicAcid ? { isCarboxylicAcid: true } : {}),
    ...(group.isAmine ? { isAmine: true } : {}),
    ...(group.isEther ? { isEther: true } : {}),
    ...(group.linkedGroup ? { linkedGroup: group.linkedGroup } : {}),
    ...(group.isRing ? { isRing: true } : {}),
    ...(group.stereo ? { stereo: group.stereo } : {}),
    ...(group.sideChainGroups ? { sideChainGroups: group.sideChainGroups } : {}),
    ...(group.sideChainBranches ? { sideChainBranches: group.sideChainBranches } : {}),
    ...(group.freeValenceLocant ? { freeValenceLocant: group.freeValenceLocant } : {}),
  };
}

/** True if any group in the parsed name was written without locants, as in "chloroethane" or "ethanol". */
export function hasGroupsWithoutLocants(parsedName) {
  return parsedName.substituentGroups.some((group) => group.locants === null);
}

/** True if the name gave locants for its CHO groups, which are never written, as in "propan-1-al". */
export function hasAldehydeLocantsWritten(parsedName) {
  return parsedName.substituentGroups.some((group) => group.isAldehyde && group.locantsWritten);
}

/** True if the name gave locants for its COOH groups, which are never written, as in "ethan-1-oic acid". */
export function hasCarboxylicAcidLocantsWritten(parsedName) {
  return parsedName.substituentGroups.some((group) => group.isCarboxylicAcid && group.locantsWritten);
}

/** True if the name's ketone C=O was written without locants, as the prefix in "oxobutanal". */
export function hasKetoneGroupsWithoutLocants(parsedName) {
  return parsedName.substituentGroups.some((group) => group.locants === null && group.isKetone);
}

/**
 * The message for a name whose groups without locants could go on more than one carbon, as in
 * "propanol", "pentanone", "chloropropane", "dimethylcyclohexane", "cyclohexanedicarboxylic acid",
 * "propanamine" or "methoxypropane".
 */
export function messageKeyForGroupsWithoutLocants(parsedName) {
  // The N of an amide can have groups too, so its name always has locants: 2-chloroacetamide (P-16.5.1.3.2).
  if (parsedName.isAmideName && !parsedName.isRing) return 'readingNames.amideNeedsLocants';
  const withoutLocants = parsedName.substituentGroups.filter((group) => group.locants === null);
  if (withoutLocants.some((group) => group.substituentCarbonCount > 0)) return 'readingNames.sideChainNeedsLocant';
  if (withoutLocants.some((group) => group.isKetone)) return 'readingNames.ketoneNeedsLocant';
  if (withoutLocants.some((group) => group.isHydroxy)) return 'readingNames.hydroxyNeedsLocant';
  if (withoutLocants.some((group) => group.isAmine)) return 'readingNames.amineNeedsLocant';
  if (withoutLocants.some((group) => group.isEther)) return 'readingNames.etherNeedsLocant';
  if (withoutLocants.some((group) => group.isAldehyde || group.isCarboxylicAcid)) return 'readingNames.ringGroupNeedsLocant';
  return 'readingNames.halogenNeedsLocant';
}

/** True if the name's OH groups were written without locants, as in "ethanol" or "propanol". */
export function hasHydroxyGroupsWithoutLocants(parsedName) {
  return parsedName.substituentGroups.some((group) => group.locants === null && group.isHydroxy);
}

/**
 * Turns a parsed name into the description used by buildCarbonSkeletonFromDescription:
 * one entry per side chain, so "2,2-dimethyl" becomes two separate methyl entries.
 * Halogens, OH groups and oxo written without locants are put on the lowest-numbered carbons that
 * still have a hydrogen to swap, in the order they are written: "trichloroethene" ->
 * 1,1,2-trichloroethene, "ethanol" -> ethan-1-ol. The hydrogen of a CHO group is never swapped
 * (P-14.3.4.5), so "chloroethanal" -> 2-chloroethanal, and a ketone's C=O never goes on an
 * end carbon, where it would make an aldehyde. In an acid, though, oxo may be the O of a CHO
 * group, so "oxoethanoic acid" -> 2-oxoethanoic acid, OHC-COOH.
 * An ester or amide name gives the acid's description, with its -COOH groups made into
 * ester groups (only the first, as the name has the one group for the O) or amide groups,
 * the first with the group on the O or N (see buildCarbonSkeletonFromDescription.js).
 */
export function convertParsedNameToDescription(parsedName) {
  const isRing = parsedName.isRing === true;
  const description = {
    mainChainCarbonCount: parsedName.parentChainCarbonCount,
    mainChainDoubleBondLocants: parsedName.mainChainDoubleBondLocants,
    ...(parsedName.mainChainTripleBondLocants ? { mainChainTripleBondLocants: parsedName.mainChainTripleBondLocants } : {}),
    ...(parsedName.mainChainStereo ? { mainChainStereo: parsedName.mainChainStereo } : {}),
    substituents: parsedName.substituentGroups.flatMap((group) =>
      group.locants === null ? [] : group.locants.map((locant) => substituentAtLocant(group, locant)),
    ),
    ...(isRing ? { isRing } : {}),
  };
  const freeBonds = countFreeBondsByLocant(description);
  // Nothing more goes on a CHO or COOH carbon, where it would make a different kind of compound.
  // (On a ring, the CHO or COOH has a carbon of its own.)
  for (const { locant } of description.substituents.filter(({ isAldehyde, isCarboxylicAcid }) => !isRing && (isAldehyde || isCarboxylicAcid))) freeBonds[locant - 1] = 0;
  const isAcid = description.substituents.some(({ isCarboxylicAcid }) => isCarboxylicAcid);
  for (const group of parsedName.substituentGroups) {
    if (group.locants !== null) continue;
    for (let added = 0; added < group.countSaidByPrefix; added++) {
      const substituent = substituentAtLocant(group, 1);
      // A ketone's C=O can't be on an end carbon, where it would make an aldehyde (except in an acid, where that is named oxo too).
      const isEndCarbonForKetone = (index) => group.isKetone && !isAcid && !isRing && (index === 0 || index === description.mainChainCarbonCount - 1);
      const freeIndex = freeBonds.findIndex((free, index) => free >= bondsUsedBySubstituent(substituent, isRing) && !isEndCarbonForKetone(index));
      // If no carbon has room, the last one is overloaded, and building the molecule says so.
      substituent.locant = freeIndex === -1 ? description.mainChainCarbonCount : freeIndex + 1;
      freeBonds[substituent.locant - 1] -= bondsUsedBySubstituent(substituent, isRing);
      description.substituents.push(substituent);
    }
  }
  // E and Z for a side chain joined by a double bond whose locant was left out go to where it was put.
  if (description.mainChainStereo?.some(({ locant }) => locant === null)) {
    const ylideneLocants = description.substituents
      .filter(({ isJoinedByDoubleBond }) => isJoinedByDoubleBond)
      .map(({ locant }) => locant)
      .sort((first, second) => first - second);
    description.mainChainStereo = description.mainChainStereo.map(({ descriptor }, index) => ({ locant: ylideneLocants[index], descriptor }));
  }
  if (parsedName.isEsterName || parsedName.isAmideName) {
    let isFirst = true;
    description.substituents = description.substituents.map((substituent) => {
      if (!substituent.isCarboxylicAcid || (parsedName.isEsterName && !isFirst)) return substituent;
      const { isCarboxylicAcid, ...rest } = substituent;
      const withGroup = isFirst && parsedName.linkedGroup ? { linkedGroup: parsedName.linkedGroup } : {};
      isFirst = false;
      return { ...rest, ...(parsedName.isEsterName ? { isEster: true } : { isAmide: true }), ...withGroup };
    });
  }
  return description;
}
