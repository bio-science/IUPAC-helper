/**
 * Rings: naming, reading typed names, listing isomers and checking answers.
 *
 * The rules come from the IUPAC 2013 Recommendations (the Blue Book):
 *   P-22.1.1    a ring is named "cyclo" + the name of the chain with as many carbons
 *   P-31.1.3.1  one double bond of a ring is always at carbon 1, and alone its locant is left
 *               out: cyclohexene (PIN), cyclohexa-1,4-diene (PIN)
 *   P-14.3.4.2  (c) a ring with one substituent needs no locant: cyclohexanol, bromobenzene
 *   P-52.2.8    the ring is the parent when it has as many of the principal group as the
 *               chain, or more: decylcyclohexane (PIN), ethenylcyclohexane (PIN)
 *   P-65.1.2.2  -COOH on a ring is "carboxylic acid": cyclohexanecarboxylic acid (PIN),
 *               3-(2-iminopropyl)cyclohexane-1-carboxylic acid (PIN)
 *   P-66.6.1.1.3  -CHO on a ring is "carbaldehyde": cyclohexanecarbaldehyde (PIN), and the
 *               prefix formyl: 4-formylcyclohexane-1-carboxylic acid (PIN)
 *   P-29.2      a ring as a substituent: cyclohexylmethanol (PIN), 2-cyclohexylethan-1-ol (PIN)
 *   P-13.5.2    and with no locant where it can only go on one carbon: cyclopentylacetic acid (PIN)
 *   P-44.2.1.6  of several rings, the one with more carbons is the parent: cyclopentylcyclohexane
 *   P-28.1      rings of the same size joined straight to each other are a ring assembly,
 *               1,1'-bi(cyclohexane) (PIN), not named yet
 */
import { describe, expect, it } from 'vitest';
import { nameCarbonSkeleton } from '../../../src/chemistry/nameCarbonSkeleton.js';
import { canonicalFingerprintOfSkeleton } from '../../../src/chemistry/canonicalFingerprint.js';
import { bondTwoCarbons, listSeparateRings, removeSmallerSideOfBond } from '../../../src/chemistry/carbonSkeleton.js';
import { interpretOmniboxText } from '../../../src/chemistry/interpretOmniboxText.js';
import { listEveryOneRingSkeletonWithCarbonCount } from '../../../src/chemistry/listIsomers.js';
import { ANSWER_HINTS, checkStudentAnswer } from '../../../src/chemistry/checkStudentAnswer.js';
import { buildCarbonSkeletonFromDescription, connectCarbonSkeletonFromDescription } from '../../../src/chemistry/buildCarbonSkeletonFromDescription.js';
import { convertParsedNameToDescription, parseTypedName } from '../../../src/chemistry/parseTypedName.js';

const methyl = (locant) => ({ locant, substituentCarbonCount: 1 });
const ethyl = (locant) => ({ locant, substituentCarbonCount: 2 });
const decyl = (locant) => ({ locant, substituentCarbonCount: 10 });
const ethenyl = (locant) => ({ locant, substituentCarbonCount: 2, doubleBondLocants: [1] });
const chloro = (locant) => ({ locant, halogen: 'Cl' });
const bromo = (locant) => ({ locant, halogen: 'Br' });
const hydroxy = (locant) => ({ locant, isHydroxy: true });
const ketone = (locant) => ({ locant, isKetone: true });
const acid = (locant) => ({ locant, isCarboxylicAcid: true });
const aldehyde = (locant) => ({ locant, isAldehyde: true });
const cyclohexyl = (locant) => ({ locant, substituentCarbonCount: 6, isRing: true });

function skeletonOf(description) {
  const { carbonSkeleton, errorMessage } = connectCarbonSkeletonFromDescription(description);
  expect(errorMessage).toBeUndefined();
  return carbonSkeleton;
}

const ring = (size, substituents = [], doubleBondLocants = []) => ({ mainChainCarbonCount: size, isRing: true, substituents, mainChainDoubleBondLocants: doubleBondLocants });
const chain = (size, substituents = [], doubleBondLocants = []) => ({ mainChainCarbonCount: size, substituents, mainChainDoubleBondLocants: doubleBondLocants });
const nameOf = (description) => nameCarbonSkeleton(skeletonOf(description)).iupacName;

describe('naming rings', () => {
  it.each([
    [ring(3), 'cyclopropane'],
    [ring(4), 'cyclobutane'],
    [ring(5), 'cyclopentane'],
    [ring(6), 'cyclohexane'],
    [ring(10), 'cyclodecane'],
    [ring(6, [methyl(1)]), 'methylcyclohexane'],
    [ring(6, [methyl(4)]), 'methylcyclohexane'],
    [ring(6, [methyl(1), methyl(2)]), '1,2-dimethylcyclohexane'],
    [ring(6, [methyl(1), methyl(4)]), '1,4-dimethylcyclohexane'],
    [ring(6, [methyl(1), methyl(1)]), '1,1-dimethylcyclohexane'],
    [ring(6, [methyl(1), methyl(5)]), '1,3-dimethylcyclohexane'],
    [ring(6, [ethyl(1), methyl(3)]), '1-ethyl-3-methylcyclohexane'],
    [ring(6, [methyl(1), ethyl(3)]), '1-ethyl-3-methylcyclohexane'],
    [ring(5, [chloro(1)]), 'chlorocyclopentane'],
    [ring(6, [chloro(1), bromo(2)]), '1-bromo-2-chlorocyclohexane'],
    [ring(6, [decyl(1)]), 'decylcyclohexane'],
    [ring(6, [ethenyl(1)]), 'ethenylcyclohexane'],
  ])('names %j as %s', (description, expectedName) => {
    expect(nameOf(description)).toBe(expectedName);
  });

  it.each([
    [ring(6, [], [1]), 'cyclohexene'],
    [ring(6, [], [3]), 'cyclohexene'],
    [ring(6, [], [6]), 'cyclohexene'],
    [ring(3, [], [1]), 'cyclopropene'],
    [ring(6, [], [1, 3]), 'cyclohexa-1,3-diene'],
    [ring(6, [], [1, 4]), 'cyclohexa-1,4-diene'],
    [ring(6, [], [2, 5]), 'cyclohexa-1,4-diene'],
    [ring(8, [], [1, 3, 5, 7]), 'cycloocta-1,3,5,7-tetraene'],
    [ring(6, [methyl(1)], [1]), '1-methylcyclohex-1-ene'],
    [ring(6, [methyl(3)], [1]), '3-methylcyclohex-1-ene'],
    [ring(6, [methyl(1)], [3]), '4-methylcyclohex-1-ene'],
  ])('names the ring with double bonds %j as %s (P-31.1.3.1)', (description, expectedName) => {
    expect(nameOf(description)).toBe(expectedName);
  });

  it.each([
    [ring(6, [hydroxy(1)]), 'cyclohexanol'],
    [ring(6, [hydroxy(1), hydroxy(2)]), 'cyclohexane-1,2-diol'],
    [ring(6, [hydroxy(1), methyl(2)]), '2-methylcyclohexan-1-ol'],
    [ring(6, [hydroxy(3)], [1]), 'cyclohex-2-en-1-ol'],
    [ring(6, [ketone(1)]), 'cyclohexanone'],
    [ring(5, [ketone(1)]), 'cyclopentanone'],
    [ring(6, [ketone(1), ketone(3)]), 'cyclohexane-1,3-dione'],
    [ring(6, [ketone(1), methyl(2)]), '2-methylcyclohexan-1-one'],
    [ring(6, [ketone(1)], [2]), 'cyclohex-2-en-1-one'],
    [ring(6, [ketone(1), hydroxy(4)]), '4-hydroxycyclohexan-1-one'],
    [ring(6, [acid(1)]), 'cyclohexanecarboxylic acid'],
    [ring(6, [acid(1), acid(2)]), 'cyclohexane-1,2-dicarboxylic acid'],
    [ring(6, [acid(4)], [1]), 'cyclohex-3-ene-1-carboxylic acid'],
    [ring(6, [acid(1), chloro(4)]), '4-chlorocyclohexane-1-carboxylic acid'],
    [ring(6, [aldehyde(1)]), 'cyclohexanecarbaldehyde'],
    [ring(5, [aldehyde(1), aldehyde(3)]), 'cyclopentane-1,3-dicarbaldehyde'],
    [ring(6, [acid(1), aldehyde(4)]), '4-formylcyclohexane-1-carboxylic acid'],
    [ring(6, [acid(1), ketone(2)]), '2-oxocyclohexane-1-carboxylic acid'],
    [ring(6, [aldehyde(1), hydroxy(2)]), '2-hydroxycyclohexane-1-carbaldehyde'],
  ])('names %j as %s', (description, expectedName) => {
    expect(nameOf(description)).toBe(expectedName);
  });

  it.each([
    [chain(1, [hydroxy(1), cyclohexyl(1)]), 'cyclohexylmethanol'],
    [chain(2, [hydroxy(1), cyclohexyl(2)]), '2-cyclohexylethan-1-ol'],
    [chain(2, [ketone(1), cyclohexyl(1)]), '1-cyclohexylethan-1-one'],
    [chain(2, [acid(1), cyclohexyl(2)]), 'cyclohexylacetic acid'],
    [chain(3, [hydroxy(1), hydroxy(3), cyclohexyl(2)]), '2-cyclohexylpropane-1,3-diol'],
  ])('names a chain with more of the principal group than the ring, %j, as %s (P-52.2.8)', (description, expectedName) => {
    expect(nameOf(description)).toBe(expectedName);
  });

  it('picks the ring when it has as many of the principal group as the chain (P-52.2.8)', () => {
    // 1-cyclohexylpropan-1-ol has one OH on the chain and none on the ring, but OH on the ring wins a tie.
    expect(nameOf(ring(6, [hydroxy(1), { locant: 2, substituentCarbonCount: 2, isRing: false }]))).toBe('2-ethylcyclohexan-1-ol');
  });

  it('explains what it cannot name yet', () => {
    expect(nameCarbonSkeleton(skeletonOf(ring(6, [], [1, 3, 5]))).reasonNotNameable.key).toBe('naming.benzeneRingNotCovered');
    expect(nameCarbonSkeleton(skeletonOf(ring(6, [cyclohexyl(1)]))).reasonNotNameable.key).toBe('naming.ringAssemblyNotCovered');
    const ringWithChlorine = connectCarbonSkeletonFromDescription(chain(1, [hydroxy(1), cyclohexyl(1)])).carbonSkeleton;
    ringWithChlorine.carbonAtoms[3].groups = [{ symbol: 'Cl' }];
    expect(nameCarbonSkeleton(ringWithChlorine).reasonNotNameable.key).toBe('naming.ringSideChainNotCovered');
  });

  it('gives no ring smaller than three carbons', () => {
    expect(connectCarbonSkeletonFromDescription(ring(2)).errorMessage.key).toBe('readingNames.ringTooSmall');
  });
});

describe('ring fingerprints', () => {
  it('gives the same fingerprint however the ring is numbered, and a different one for a different molecule', () => {
    const fingerprint = (description) => canonicalFingerprintOfSkeleton(skeletonOf(description));
    expect(fingerprint(ring(6, [methyl(1), methyl(2)]))).toBe(fingerprint(ring(6, [methyl(3), methyl(4)])));
    expect(fingerprint(ring(6, [methyl(1), methyl(2)]))).not.toBe(fingerprint(ring(6, [methyl(1), methyl(3)])));
    expect(fingerprint(ring(6, [methyl(1)], [1]))).not.toBe(fingerprint(ring(6, [methyl(3)], [1])));
    expect(fingerprint(ring(6))).not.toBe(fingerprint(chain(6, [], [1])));
  });
});

describe('closing and opening rings by hand', () => {
  it('closes a chain into a ring, and erasing a ring bond opens it again', () => {
    const hexane = skeletonOf(chain(6));
    const cyclohexane = bondTwoCarbons(hexane, 1, 6);
    expect(nameCarbonSkeleton(cyclohexane).iupacName).toBe('cyclohexane');
    const opened = removeSmallerSideOfBond(cyclohexane, 3, 4, 4);
    expect(opened.carbonAtoms).toHaveLength(6);
    expect(nameCarbonSkeleton(opened).iupacName).toBe('hexane');
  });
});

describe('reading typed ring names', () => {
  const drawnName = (text) => {
    const result = interpretOmniboxText(text);
    expect(result.kind, JSON.stringify(result.message)).toBe('name');
    return result.correctIupacName;
  };
  const errorKey = (text) => interpretOmniboxText(text).message?.key;

  it.each([
    'cyclopropane',
    'cyclohexane',
    'cyclodecane',
    'methylcyclohexane',
    '1,2-dimethylcyclohexane',
    '1,1-dimethylcyclohexane',
    '1-ethyl-3-methylcyclohexane',
    'chlorocyclopentane',
    '1-bromo-2-chlorocyclohexane',
    'decylcyclohexane',
    'ethenylcyclohexane',
    'cyclohexene',
    'cyclopropene',
    'cyclohexa-1,3-diene',
    'cyclohexa-1,4-diene',
    'cycloocta-1,3,5,7-tetraene',
    '1-methylcyclohex-1-ene',
    '3-methylcyclohex-1-ene',
    'cyclohexanol',
    'cyclohexane-1,2-diol',
    '2-methylcyclohexan-1-ol',
    'cyclohex-2-en-1-ol',
    'cyclohexanone',
    'cyclohexane-1,3-dione',
    'cyclohex-2-en-1-one',
    '4-hydroxycyclohexan-1-one',
    'cyclohexanecarboxylic acid',
    'cyclohexane-1,2-dicarboxylic acid',
    'cyclohex-3-ene-1-carboxylic acid',
    '4-chlorocyclohexane-1-carboxylic acid',
    'cyclohexanecarbaldehyde',
    'cyclopentane-1,3-dicarbaldehyde',
    '4-formylcyclohexane-1-carboxylic acid',
    '2-oxocyclohexane-1-carboxylic acid',
    '2-hydroxycyclohexane-1-carbaldehyde',
    'cyclohexylmethanol',
    '2-cyclohexylethan-1-ol',
    '1-cyclohexylethan-1-one',
    'cyclohexylacetic acid',
    '2-cyclohexylpropane-1,3-diol',
    'cyclohexylmethane',
  ])('draws %s and names it back', (name) => {
    const expected = name === 'cyclohexylmethane' ? 'methylcyclohexane' : name;
    expect(drawnName(name)).toBe(expected);
  });

  it.each([
    ['1,3-cyclohexadiene', 'cyclohexa-1,3-diene'],
    ['cyclohex-1-ene', 'cyclohexene'],
    ['cyclohexan-1-ol', 'cyclohexanol'],
  ])('reads %s as %s', (typed, expected) => {
    expect(drawnName(typed)).toBe(expected);
  });

  it.each([
    ['cyclohexanal', 'readingNames.ringNeedsCarbaldehydeOrCarboxylicAcid'],
    ['cyclohexanoic acid', 'readingNames.ringNeedsCarbaldehydeOrCarboxylicAcid'],
    ['ethanecarboxylic acid', 'readingNames.carbaldehydeAndCarboxylicAcidOnlyOnRings'],
    ['propanecarbaldehyde', 'readingNames.carbaldehydeAndCarboxylicAcidOnlyOnRings'],
    ['methylpropane', 'readingNames.sideChainNeedsLocant'],
    ['dimethylcyclohexane', 'readingNames.sideChainNeedsLocant'],
    ['dichlorocyclohexane', 'readingNames.halogenNeedsLocant'],
    ['cyclohexanediol', 'readingNames.hydroxyNeedsLocant'],
    ['cyclohexanedione', 'readingNames.ketoneNeedsLocant'],
    ['cyclohexanedicarboxylic acid', 'readingNames.ringGroupNeedsLocant'],
    // With a side chain, the OH needs its locant too: 2-methylcyclohexan-1-ol.
    ['2-methylcyclohexanol', 'readingNames.hydroxyNeedsLocant'],
    ['cycloethane', 'readingNames.ringTooSmall'],
    ['cyclohex-7-ene', 'readingNames.doubleBondNotOnChain'],
  ])('explains what is wrong with %s', (typed, expectedKey) => {
    expect(errorKey(typed)).toBe(expectedKey);
  });

  it('gives hints for ring answers', () => {
    expect(checkStudentAnswer('cyclohexanol', 'cyclohexanol').verdict).toBe('correct');
    expect(checkStudentAnswer('cyclohexan-1-ol', 'cyclohexanol').hint).toBe(ANSWER_HINTS.leaveOutLocants);
    expect(checkStudentAnswer('dimethylcyclohexane', '1,2-dimethylcyclohexane').hint).toBe(ANSWER_HINTS.sideChainNeedsLocant);
    expect(checkStudentAnswer('1,6-dimethylcyclohexane', '1,2-dimethylcyclohexane').hint).toBe(ANSWER_HINTS.notLowestLocants);
  });
});

/** Rings of the sizes given, each carbon numbered on from the last ring's, joined by the extra bonds given. */
function separateRings(ringSizes, extraBonds) {
  const carbonAtoms = [];
  const carbonCarbonBonds = [];
  let nextAtomId = 1;
  for (const size of ringSizes) {
    const first = nextAtomId;
    for (let index = 0; index < size; index++) {
      carbonAtoms.push({ atomId: nextAtomId, positionX: 0, positionY: 0 });
      carbonCarbonBonds.push({ firstAtomId: nextAtomId, secondAtomId: index === size - 1 ? first : nextAtomId + 1, bondOrder: 1 });
      nextAtomId++;
    }
  }
  return { carbonAtoms, carbonCarbonBonds: [...carbonCarbonBonds, ...extraBonds] };
}

const singleBond = (firstAtomId, secondAtomId) => ({ firstAtomId, secondAtomId, bondOrder: 1 });

describe('molecules with several rings', () => {
  const drawnName = (text) => {
    const result = interpretOmniboxText(text);
    expect(result.kind, JSON.stringify(result.message)).toBe('name');
    return result.correctIupacName;
  };
  const reasonKey = (text) => {
    const result = interpretOmniboxText(text);
    return result.message?.key ?? nameCarbonSkeleton(result.carbonSkeleton).reasonNotNameable?.key;
  };

  it.each([
    // The larger ring is the parent (P-44.2.1.6), the other a substituent (P-29.2).
    'cyclopentylcyclohexane',
    '1,4-dicyclopentylcyclohexane',
    '1,1-dicyclopentylcyclohexane',
    // The ring with more of the principal group is the parent (P-44.1.1).
    '4-cyclopentylcyclohexan-1-ol',
    '3-cyclohexylcyclopentan-1-ol',
    // A chain with more of it is the parent, with the rings as substituents (P-44.1.2.2).
    '1,3-dicyclohexylpropan-2-one',
    'dicyclohexylmethanol',
    'dicyclohexylacetic acid',
    '2-cyclobutyl-1-cyclopentylethan-1-ol',
    // Methanone needs no locant (P-14.3.4.2 (a)): dicyclohexylmethanone (PIN).
    'dicyclohexylmethanone',
    'cyclohexyl(cyclopentyl)methanone',
  ])('draws %s and names it back', (name) => {
    expect(drawnName(name)).toBe(name);
  });

  it('hints at the locants left out of methanone', () => {
    expect(checkStudentAnswer('dicyclohexylmethan-1-one', 'dicyclohexylmethanone').hint).toBe(ANSWER_HINTS.leaveOutLocants);
    expect(checkStudentAnswer('1,1-dicyclohexylmethanone', 'dicyclohexylmethanone').hint).toBe(ANSWER_HINTS.leaveOutLocants);
  });

  it.each([
    // Rings of the same size joined straight to each other are a ring assembly (P-28.1), even with
    // a C=C or a group on one: [1,1'-bi(cyclohexan)]-1-ene, [1,1'-bi(cyclopropane)]-1-carboxylic acid.
    ['cyclohexylcyclohexane', 'naming.ringAssemblyNotCovered'],
    ['1-cyclohexylcyclohex-1-ene', 'naming.ringAssemblyNotCovered'],
    ['4-cyclohexylcyclohexan-1-ol', 'naming.ringAssemblyNotCovered'],
    ['1-cyclopropylcyclopropane-1-carboxylic acid', 'naming.ringAssemblyNotCovered'],
    // Rings of the same size joined through a chain: a multiplicative name, 1,1'-(ethane-1,2-diyl)dicyclohexane (P-51.3.1).
    ['1,2-dicyclohexylethane', 'naming.identicalRingsNotCovered'],
    ['1,1-dicyclopropylethane', 'naming.identicalRingsNotCovered'],
  ])('does not name %s yet', (typed, expectedKey) => {
    expect(reasonKey(typed)).toBe(expectedKey);
  });

  it("does not name two identical rings joined by an O yet: 1,1'-oxydi(cyclohexane) (P-51.3.1)", () => {
    const dicyclohexylEther = separateRings([6, 6], [{ ...singleBond(1, 7), linkAtom: 'O' }]);
    expect(nameCarbonSkeleton(dicyclohexylEther).reasonNotNameable.key).toBe('naming.identicalRingsNotCovered');
  });

  it('does not name rings that share carbons yet', () => {
    // spiro[4.4]nonane: carbon 1 is in both rings.
    const spiro = separateRings([5], [singleBond(1, 6), singleBond(6, 7), singleBond(7, 8), singleBond(8, 9), singleBond(9, 1)]);
    spiro.carbonAtoms.push(...[6, 7, 8, 9].map((atomId) => ({ atomId, positionX: 0, positionY: 0 })));
    expect(listSeparateRings(spiro).hasRingsSharingCarbons).toBe(true);
    expect(nameCarbonSkeleton(spiro).reasonNotNameable.key).toBe('naming.ringsSharingCarbonsNotCovered');
  });

  it('finds each ring, and leaves out a chain between rings', () => {
    const joinedThroughACarbon = separateRings([3, 4], [singleBond(1, 8), singleBond(8, 4)]);
    joinedThroughACarbon.carbonAtoms.push({ atomId: 8, positionX: 0, positionY: 0 });
    const { rings, hasRingsSharingCarbons } = listSeparateRings(joinedThroughACarbon);
    expect(hasRingsSharingCarbons).toBe(false);
    expect(rings.map((ring) => [...ring].sort((first, second) => first - second))).toEqual([[1, 2, 3], [4, 5, 6, 7]]);
  });

  it('gives the same fingerprint however the rings are numbered, and a different one for a different molecule', () => {
    const fingerprint = (bonds) => canonicalFingerprintOfSkeleton(separateRings([5, 6], bonds));
    expect(fingerprint([singleBond(1, 6)])).toBe(fingerprint([singleBond(3, 9)]));
    const withMethylOn = (ringAtomId) => {
      const skeleton = separateRings([5, 6], [singleBond(1, 6), singleBond(ringAtomId, 12)]);
      skeleton.carbonAtoms.push({ atomId: 12, positionX: 0, positionY: 0 });
      return canonicalFingerprintOfSkeleton(skeleton);
    };
    expect(withMethylOn(7)).toBe(withMethylOn(11));
    expect(withMethylOn(7)).not.toBe(withMethylOn(8));
    expect(withMethylOn(2)).not.toBe(withMethylOn(7));
  });

  it.each(['dicyclohexylmethanone', '1,3-dicyclohexylpropan-2-one', '1,4-dicyclopentylcyclohexane', '1,1-dicyclopentylcyclohexane', '2-cyclobutyl-1-cyclopentylethan-1-ol'])(
    'draws %s with every bond the same length and no carbons crowding',
    (name) => {
      const { carbonSkeleton } = buildCarbonSkeletonFromDescription(convertParsedNameToDescription(parseTypedName(name)));
      const positionOf = new Map(carbonSkeleton.carbonAtoms.map(({ atomId, positionX, positionY }) => [atomId, { x: positionX, y: positionY }]));
      const distance = (first, second) => Math.hypot(positionOf.get(first).x - positionOf.get(second).x, positionOf.get(first).y - positionOf.get(second).y);
      const bondLengths = carbonSkeleton.carbonCarbonBonds.map(({ firstAtomId, secondAtomId }) => distance(firstAtomId, secondAtomId));
      for (const length of bondLengths) expect(length).toBeCloseTo(bondLengths[0], 5);
      const bonded = new Set(carbonSkeleton.carbonCarbonBonds.flatMap(({ firstAtomId, secondAtomId }) => [`${firstAtomId}-${secondAtomId}`, `${secondAtomId}-${firstAtomId}`]));
      const atomIds = [...positionOf.keys()];
      for (const first of atomIds) {
        for (const second of atomIds) {
          if (first < second && !bonded.has(`${first}-${second}`)) expect(distance(first, second)).toBeGreaterThan(bondLengths[0]);
        }
      }
    },
  );
});

describe('isomers with a ring', () => {
  it.each([
    [3, 1],
    [4, 2],
    // cyclopentane, methylcyclobutane, 1,1- and 1,2-dimethylcyclopropane, ethylcyclopropane
    [5, 5],
    // cyclohexane, methylcyclopentane, three dimethylcyclobutanes, ethylcyclobutane, two
    // trimethylcyclopropanes, two ethylmethylcyclopropanes, propyl- and (propan-2-yl)cyclopropane
    [6, 12],
  ])('finds every saturated skeleton with one ring and %i carbons (%i)', (carbonCount, expectedCount) => {
    expect(listEveryOneRingSkeletonWithCarbonCount(carbonCount)).toHaveLength(expectedCount);
  });

  it('lists all 12 rings of C6H12 after the open chains, with (propan-2-yl)cyclopropane', () => {
    const { nameableIsomers, countOfIsomersNotYetSupported } = interpretOmniboxText('C6H12');
    const ringNames = nameableIsomers.filter((isomer) => isomer.hasRing).map((isomer) => isomer.iupacName);
    expect(nameableIsomers.findIndex((isomer) => isomer.hasRing)).toBe(nameableIsomers.length - ringNames.length);
    expect(ringNames).toEqual(expect.arrayContaining(['cyclohexane', 'methylcyclopentane', '1,3-dimethylcyclobutane', '1-ethyl-2-methylcyclopropane', '(propan-2-yl)cyclopropane']));
    expect(ringNames).toHaveLength(12);
    expect(countOfIsomersNotYetSupported).toBe(0);
  });

  it('lists cyclic alcohols, ketones, aldehydes and acids', () => {
    const names = interpretOmniboxText('C5H8O2').nameableIsomers.map((isomer) => isomer.iupacName);
    expect(names).toEqual(expect.arrayContaining(['cyclobutanecarboxylic acid', '2-hydroxycyclopentan-1-one', 'cyclopent-4-ene-1,3-diol', 'cyclopropylacetic acid']));
  });

  it('leaves out ring allenes, and counts benzene as not covered yet', () => {
    const { nameableIsomers, countOfIsomersNotYetSupported } = interpretOmniboxText('C6H6');
    expect(nameableIsomers.map((isomer) => isomer.iupacName)).toContain('5-methylidenecyclopenta-1,3-diene');
    expect(nameableIsomers.some((isomer) => /cyclo[a-z]+-1,2-/.test(isomer.iupacName))).toBe(false);
    expect(countOfIsomersNotYetSupported).toBe(1);
  });

  it('can type back every ring isomer it lists', () => {
    for (const formulaText of ['C5H10', 'C6H10', 'C4H6O2', 'C5H9Cl', 'C6H10O']) {
      for (const { iupacName } of interpretOmniboxText(formulaText).nameableIsomers) {
        expect(interpretOmniboxText(iupacName), iupacName).toMatchObject({ kind: 'name', typedNameIsCorrectIupacName: true });
      }
    }
  });
});

describe('rings in structural formulae', () => {
  it.each(['CH2CH2CH2CH2CH2CH2', '(CH2)6', 'CH2CH(CH3)CH2CH2'])('says %s looks like a ring, and to type its name', (formula) => {
    expect(interpretOmniboxText(formula).message.key).toBe('omnibox.ringInStructuralFormula');
  });

  it('still asks for the = of a double bond in CH2CHCH3', () => {
    expect(interpretOmniboxText('CH2CHCH3').message.key).toBe('omnibox.carbonNeedsFourBondsMissingDoubleBond');
  });
});
