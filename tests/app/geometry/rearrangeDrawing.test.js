import { describe, expect, it } from 'vitest';
import { countOverlapsInDrawing } from '../../../src/geometry/countOverlapsInDrawing.js';
import {
  arrangeSkeletonForTurn,
  HELD_BACK_BY_DOUBLE_BOND_CONFIGURATION,
  HELD_BACK_BY_OVERLAP,
  findAtomPosition,
  letGoOfHeldOuterAtoms,
  moveAtom,
  moveAtomIfThereIsRoom,
  moveCarbonIfThereIsRoom,
  MOVED_GROUP_HYDROGEN,
  MOVED_LINK_ATOM,
  MOVED_LINK_HYDROGEN,
  MOVED_OUTER_ATOM,
  startMovingAtom,
  startTurningBond,
  turnBondTowards,
} from '../../../src/geometry/rearrangeDrawing.js';
import { forgetHandPlacedPositions, placeAtomsAroundCarbons } from '../../../src/geometry/placeAtomsAroundCarbons.js';
import { zigzagStraightChains } from '../../../src/geometry/zigzagStraightChains.js';
import { bendChainsAtRandom } from '../../../src/geometry/bendChainsAtRandom.js';
import { generateRandomGuessMolecule } from '../../../src/chemistry/generateRandomGuessMolecule.js';
import { planNewCarbonPlacement } from '../../../src/geometry/planNewCarbonPlacement.js';
import {
  listCarbonIdsBeyondBond,
  removeCarbonAndItsSmallerBranches,
  removeSmallerSideOfBond,
} from '../../../src/chemistry/carbonSkeleton.js';
import { interpretOmniboxText } from '../../../src/chemistry/interpretOmniboxText.js';
import { angleFromPointToPoint } from '../../../src/geometry/vectorMaths.js';
import { nameCarbonSkeleton } from '../../../src/chemistry/nameCarbonSkeleton.js';
import { describeEveryDoubleBond } from '../../../src/chemistry/doubleBondConfiguration.js';
import { layOutDisplayedFormula } from '../../../src/geometry/layOutDisplayedFormula.js';
import { drawDoubleBondsAsBefore } from '../../../src/geometry/arrangeDoubleBonds.js';
import { bondTwoCarbons } from '../../../src/chemistry/carbonSkeleton.js';

const BOND = 110;

/** Builds a skeleton from [atomId, x, y] carbons and [firstAtomId, secondAtomId] bonds. */
function buildSkeleton(carbons, bonds) {
  return {
    carbonAtoms: carbons.map(([atomId, positionX, positionY]) => ({ atomId, positionX, positionY })),
    carbonCarbonBonds: bonds.map(([firstAtomId, secondAtomId]) => ({ firstAtomId, secondAtomId })),
  };
}

function positionOf(skeleton, atomId) {
  const carbonAtom = skeleton.carbonAtoms.find((carbon) => carbon.atomId === atomId);
  return { x: carbonAtom.positionX, y: carbonAtom.positionY };
}

// C1 - C2 - C3 in a straight line.
const propane = buildSkeleton(
  [
    [1, 0, 0],
    [2, BOND, 0],
    [3, 2 * BOND, 0],
  ],
  [
    [1, 2],
    [2, 3],
  ],
);

// Propane with a fourth carbon straight up from the middle (methylpropane).
const methylpropane = buildSkeleton(
  [
    [1, 0, 0],
    [2, BOND, 0],
    [3, 2 * BOND, 0],
    [4, BOND, -BOND],
  ],
  [
    [1, 2],
    [2, 3],
    [2, 4],
  ],
);

describe('countOverlapsInDrawing', () => {
  it('finds no overlaps in the layouts made for typed names', () => {
    for (const name of ['butane', '2-methylbutane', '2,2-dimethylbutane', '3-ethyl-2-methylpentane', '2,2,3,3-tetramethylbutane']) {
      expect(countOverlapsInDrawing(interpretOmniboxText(name).carbonSkeleton), name).toBe(0);
    }
  });

  it('counts two carbons drawn on top of each other', () => {
    const squashed = buildSkeleton(
      [
        [1, 0, 0],
        [2, 20, 0],
      ],
      [[1, 2]],
    );
    expect(countOverlapsInDrawing(squashed)).toBeGreaterThan(0);
  });
});

describe('moveCarbonIfThereIsRoom', () => {
  it('moves a carbon into empty space', () => {
    const moved = moveCarbonIfThereIsRoom(propane, 3, { x: 2 * BOND, y: 60 }, 0);
    expect(positionOf(moved, 3)).toEqual({ x: 2 * BOND, y: 60 });
  });

  it('refuses to move a carbon on top of another one', () => {
    expect(moveCarbonIfThereIsRoom(propane, 3, { x: 5, y: 0 }, 0)).toBeNull();
  });
});

describe('listCarbonIdsBeyondBond', () => {
  it('lists the carbon at the far end of a bond and everything beyond it', () => {
    expect([...listCarbonIdsBeyondBond(propane, 1, 2)].sort()).toEqual([2, 3]);
    expect([...listCarbonIdsBeyondBond(propane, 2, 3)]).toEqual([3]);
  });
});

describe('turning a bond', () => {
  it('turns freely when nothing is in the way', () => {
    const turn = turnBondTowards(startTurningBond(propane, 2, 3), 60);
    const arranged = arrangeSkeletonForTurn(turn);
    expect(angleFromPointToPoint(positionOf(arranged, 2), positionOf(arranged, 3))).toBeCloseTo(60);
    expect(positionOf(arranged, 1)).toEqual({ x: 0, y: 0 });
  });

  it('stops before the swinging carbon runs into the other end of the chain', () => {
    const turn = turnBondTowards(startTurningBond(propane, 2, 3), 180);
    const arranged = arrangeSkeletonForTurn(turn);
    const reachedAngle = turn.turnByBranch.get(3);
    expect(reachedAngle).toBeGreaterThan(90);
    expect(reachedAngle).toBeLessThan(180);
    expect(countOverlapsInDrawing(arranged)).toBe(0);
  });

  it('pushes a side branch round to make room, but never moves the fixed branch', () => {
    // Swing C3 anticlockwise (up the screen) towards the side chain C4, and on towards C1.
    const turn = turnBondTowards(startTurningBond(methylpropane, 2, 3), -120);
    const arranged = arrangeSkeletonForTurn(turn);

    // C3 gets past where C4 used to block it, because C4 is pushed round ahead of it...
    expect(turn.turnByBranch.get(4)).toBeLessThan(0);
    expect(turn.turnByBranch.get(3)).toBeLessThan(turn.turnByBranch.get(4) - 30);
    // ...but C1 stays put, so the turn stops short of the full 120 degrees.
    expect(positionOf(arranged, 1)).toEqual(positionOf(methylpropane, 1));
    expect(turn.turnByBranch.get(3)).toBeGreaterThan(-120);
    expect(countOverlapsInDrawing(arranged)).toBe(0);
  });
});

describe('erasing', () => {
  const remainingIds = (skeleton) => skeleton.carbonAtoms.map((carbon) => carbon.atomId).sort();

  it('removes just a carbon at the end of a chain', () => {
    expect(remainingIds(removeCarbonAndItsSmallerBranches(propane, 1))).toEqual([2, 3]);
  });

  it('removes a middle carbon along with its smaller branches, keeping the largest', () => {
    // Butane C1-C2-C3-C4 with C5 on C2: removing C2 keeps C3-C4, the largest branch.
    const methylbutane = buildSkeleton(
      [
        [1, 0, 0],
        [2, BOND, 0],
        [3, 2 * BOND, 0],
        [4, 3 * BOND, 0],
        [5, BOND, -BOND],
      ],
      [
        [1, 2],
        [2, 3],
        [3, 4],
        [2, 5],
      ],
    );
    const afterRemoval = removeCarbonAndItsSmallerBranches(methylbutane, 2);
    expect(remainingIds(afterRemoval)).toEqual([3, 4]);
    expect(afterRemoval.carbonCarbonBonds).toEqual([{ firstAtomId: 3, secondAtomId: 4 }]);
  });

  it('removes the smaller side of a bond', () => {
    expect(remainingIds(removeSmallerSideOfBond(methylpropane, 2, 4, 2))).toEqual([1, 2, 3]);
  });

  it('removes the side nearer the pointer when both sides are the same size', () => {
    const ethane = buildSkeleton(
      [
        [1, 0, 0],
        [2, BOND, 0],
      ],
      [[1, 2]],
    );
    expect(remainingIds(removeSmallerSideOfBond(ethane, 1, 2, 2))).toEqual([1]);
  });
});

describe('zigzagStraightChains', () => {
  it('gives every carbon in a straight chain a corner, without overlaps', () => {
    const pentane = interpretOmniboxText('pentane').carbonSkeleton;
    const zigzagged = zigzagStraightChains(pentane);
    const positions = [1, 2, 3, 4, 5].map((atomId) => positionOf(zigzagged, atomId));
    for (let index = 1; index < 4; index++) {
      const angleIn = angleFromPointToPoint(positions[index], positions[index - 1]);
      const angleOut = angleFromPointToPoint(positions[index], positions[index + 1]);
      const bend = Math.abs(((angleIn - angleOut + 540) % 360) - 180);
      expect(bend).toBeGreaterThan(15);
    }
    expect(countOverlapsInDrawing(zigzagged)).toBe(0);
  });

  it('leaves a drawing with no straight runs alone', () => {
    const bent = zigzagStraightChains(zigzagStraightChains(propane));
    expect(zigzagStraightChains(bent)).toBe(bent);
  });

  it('only moves carbons in straight runs, never branch points', () => {
    const zigzagged = zigzagStraightChains(interpretOmniboxText('3-ethyl-2-methylpentane').carbonSkeleton);
    expect(countOverlapsInDrawing(zigzagged)).toBe(0);
  });
});

describe('bendChainsAtRandom', () => {
  /** A predictable stand-in for Math.random. */
  function makeRandomNumberGenerator(seed) {
    let state = seed;
    return () => {
      state = (state * 1103515245 + 12345) % 2147483648;
      return state / 2147483648;
    };
  }

  it('bends some molecules and leaves others, never adding overlaps or changing bonds', () => {
    let bentCount = 0;
    let unchangedCount = 0;
    for (let seed = 1; seed <= 60; seed++) {
      const randomNumberGenerator = makeRandomNumberGenerator(seed);
      const { carbonSkeleton } = generateRandomGuessMolecule({ randomNumberGenerator });
      const bent = bendChainsAtRandom(carbonSkeleton, randomNumberGenerator);

      expect(bent.carbonCarbonBonds).toEqual(carbonSkeleton.carbonCarbonBonds);
      expect(countOverlapsInDrawing(bent)).toBeLessThanOrEqual(countOverlapsInDrawing(carbonSkeleton));
      const furthestMove = Math.max(
        ...bent.carbonAtoms.map((carbon, index) =>
          Math.hypot(carbon.positionX - carbonSkeleton.carbonAtoms[index].positionX, carbon.positionY - carbonSkeleton.carbonAtoms[index].positionY),
        ),
      );
      if (bent === carbonSkeleton) unchangedCount++;
      else if (furthestMove > 30) bentCount++;
    }
    expect(bentCount).toBeGreaterThan(10);
    expect(unchangedCount).toBeGreaterThan(5);
  });
});

describe('planNewCarbonPlacement', () => {
  it('names the hydrogen the new carbon will replace', () => {
    const methane = buildSkeleton([[1, 0, 0]], []);
    // A lone carbon's hydrogens go up, down, right, left in that order, so the one on the right is number 3.
    expect(planNewCarbonPlacement(methane, { x: BOND, y: 5 }).hydrogenIdReplaced).toBe('H-on-C1-number-3');
    expect(planNewCarbonPlacement(methane, { x: 5, y: -BOND }).hydrogenIdReplaced).toBe('H-on-C1-number-1');
  });
});

describe('E and Z when the drawing is changed by hand', () => {
  /** Where the outer atoms of one carbon are drawn: [{ symbol, x, y }], in the order they are placed. */
  const outerAtomsOf = (skeleton, carbonAtomId) =>
    placeAtomsAroundCarbons(skeleton)
      .filter((outerAtom) => outerAtom.carbonAtomId === carbonAtomId)
      .map(({ symbol, positionX, positionY }) => ({ symbol, x: positionX, y: positionY }));

  it('stops turning a bond next to a C=C before it would swap E and Z, so the name stays the same', () => {
    const { carbonSkeleton } = interpretOmniboxText('(2E)-pent-2-ene');
    // C1 swings round C2 towards the line of the C=C.
    const turn = turnBondTowards(startTurningBond(carbonSkeleton, 2, 1), 120);
    expect(turn.heldBackBy).toBe(HELD_BACK_BY_DOUBLE_BOND_CONFIGURATION);
    expect(turn.turnByBranch.get(1)).toBeGreaterThan(30);
    expect(turn.turnByBranch.get(1)).toBeLessThan(120);
    const turned = letGoOfHeldOuterAtoms(arrangeSkeletonForTurn(turn));
    expect(nameCarbonSkeleton(turned).iupacName).toBe('(2E)-pent-2-ene');
    expect(countOverlapsInDrawing(turned)).toBe(0);
  });

  it('keeps the hydrogen on a carbon of the C=C where it was while turning, and lets it go afterwards', () => {
    const { carbonSkeleton } = interpretOmniboxText('(2E)-pent-2-ene');
    const arranged = arrangeSkeletonForTurn(turnBondTowards(startTurningBond(carbonSkeleton, 2, 1), 40));
    for (const carbonAtomId of [2, 3]) {
      outerAtomsOf(carbonSkeleton, carbonAtomId).forEach((outerAtom, index) => {
        expect(outerAtomsOf(arranged, carbonAtomId)[index].x).toBeCloseTo(outerAtom.x);
        expect(outerAtomsOf(arranged, carbonAtomId)[index].y).toBeCloseTo(outerAtom.y);
      });
    }
    const released = letGoOfHeldOuterAtoms(arranged);
    expect(released.carbonAtoms.every((carbonAtom) => carbonAtom.outerAtomLayout === undefined)).toBe(true);
    expect(nameCarbonSkeleton(released).iupacName).toBe('(2E)-pent-2-ene');
  });

  it('lets a straight C=C, neither E nor Z, be bent away from its hydrogen, which is in the way of bending it towards it', () => {
    // Pent-2-ene in a line: C2 has its H straight up, and C1 is straight to its left.
    const { carbonSkeleton } = interpretOmniboxText('pent-2-ene');
    const [hydrogenOnCarbon2] = outerAtomsOf(carbonSkeleton, 2);
    expect(hydrogenOnCarbon2.y).toBeLessThan(positionOf(carbonSkeleton, 2).y);

    const upwards = turnBondTowards(startTurningBond(carbonSkeleton, 2, 1), 90);
    expect(upwards.heldBackBy).toBe(HELD_BACK_BY_OVERLAP);
    expect(upwards.turnByBranch.get(1)).toBeLessThan(90);
    const downwards = turnBondTowards(startTurningBond(carbonSkeleton, 2, 1), -60);
    expect(downwards.heldBackBy).toBeNull();
    expect(downwards.turnByBranch.get(1)).toBeCloseTo(-60);
  });

  it('stops a carbon being moved across the line of a C=C', () => {
    const { carbonSkeleton } = interpretOmniboxText('(2E)-pent-2-ene');
    const carbon1 = positionOf(carbonSkeleton, 1);
    const carbon2 = positionOf(carbonSkeleton, 2);
    // Reflected in the line of the C=C (which runs across the page through C2 and C3).
    const acrossTheLine = { x: carbon1.x, y: 2 * carbon2.y - carbon1.y };
    expect(moveCarbonIfThereIsRoom(carbonSkeleton, 1, acrossTheLine)).toBeNull();
    const nudged = moveCarbonIfThereIsRoom(carbonSkeleton, 1, { x: carbon1.x - 10, y: carbon1.y + 5 });
    expect(nudged).not.toBeNull();
    expect(nameCarbonSkeleton(nudged).iupacName).toBe('(2E)-pent-2-ene');
  });
});

describe('moving any atom by hand', () => {
  const outerAtomsOfCarbon = (skeleton, carbonAtomId) => placeAtomsAroundCarbons(skeleton).filter((outerAtom) => outerAtom.carbonAtomId === carbonAtomId);
  const positionOfOuterAtom = (outerAtom) => ({ x: outerAtom.positionX, y: outerAtom.positionY });
  const nudge = (point, x, y) => ({ x: point.x + x, y: point.y + y });

  it('moves a hydrogen on a carbon to where it is put, longer bond and all, leaving the others where they were', () => {
    const { carbonSkeleton } = interpretOmniboxText('propane');
    const [hydrogen, otherHydrogen] = outerAtomsOfCarbon(carbonSkeleton, 2);
    const atom = { kind: MOVED_OUTER_ATOM, carbonAtomId: 2, place: hydrogen.place };
    const wanted = nudge(positionOfOuterAtom(hydrogen), 15, -20);
    const moved = moveAtomIfThereIsRoom(carbonSkeleton, atom, wanted);
    expect(findAtomPosition(moved, atom).x).toBeCloseTo(wanted.x);
    expect(findAtomPosition(moved, atom).y).toBeCloseTo(wanted.y);
    const otherAfter = outerAtomsOfCarbon(moved, 2).find((outerAtom) => outerAtom.place === otherHydrogen.place);
    expect(otherAfter.positionX).toBeCloseTo(otherHydrogen.positionX);
    expect(otherAfter.positionY).toBeCloseTo(otherHydrogen.positionY);
    expect(nameCarbonSkeleton(moved).iupacName).toBe('propane');
  });

  it('keeps a moved hydrogen where it was put when its carbon is moved, and in the way of other atoms', () => {
    const { carbonSkeleton } = interpretOmniboxText('propane');
    const [hydrogen] = outerAtomsOfCarbon(carbonSkeleton, 2);
    const atom = { kind: MOVED_OUTER_ATOM, carbonAtomId: 2, place: hydrogen.place };
    const moved = moveAtomIfThereIsRoom(carbonSkeleton, atom, nudge(positionOfOuterAtom(hydrogen), 0, -30));
    const hydrogenBefore = findAtomPosition(moved, atom);
    // Moving carbon 3 doesn't move the hydrogens of carbon 2, as it would if they were placed afresh.
    const carbon3 = positionOf(moved, 3);
    const movedAgain = moveCarbonIfThereIsRoom(moved, 3, nudge(carbon3, 0, -20));
    expect(findAtomPosition(movedAgain, atom).x).toBeCloseTo(hydrogenBefore.x);
    expect(findAtomPosition(movedAgain, atom).y).toBeCloseTo(hydrogenBefore.y);
    // And carbon 1 can't be put on top of it.
    expect(moveCarbonIfThereIsRoom(moved, 1, hydrogenBefore)).toBeNull();
  });

  it('won’t move a group on a C=C onto or across the line of the C=C, as that changes E or Z', () => {
    const { carbonSkeleton } = interpretOmniboxText('(1E)-1-chloroprop-1-ene');
    const chlorine = outerAtomsOfCarbon(carbonSkeleton, 1).find((outerAtom) => outerAtom.symbol === 'Cl');
    const move = startMovingAtom(carbonSkeleton, { kind: MOVED_OUTER_ATOM, carbonAtomId: 1, place: chlorine.place });
    // The Cl straight on from the line of the C=C, beyond carbon 1: neither side of it, so neither E nor Z.
    const carbon1 = positionOf(carbonSkeleton, 1);
    const carbon2 = positionOf(carbonSkeleton, 2);
    const scale = 52 / Math.hypot(carbon1.x - carbon2.x, carbon1.y - carbon2.y);
    const onTheLine = { x: carbon1.x + scale * (carbon1.x - carbon2.x), y: carbon1.y + scale * (carbon1.y - carbon2.y) };
    expect(moveAtom(move, onTheLine).heldBackBy).toBe(HELD_BACK_BY_DOUBLE_BOND_CONFIGURATION);
    const nudged = moveAtom(move, nudge(positionOfOuterAtom(chlorine), 5, 5));
    expect(nameCarbonSkeleton(letGoOfHeldOuterAtoms(nudged.skeleton)).iupacName).toBe('(1E)-1-chloroprop-1-ene');
  });

  it('moves the hydrogen of OH with its O, and lets it be moved on its own', () => {
    const { carbonSkeleton } = interpretOmniboxText('ethanol');
    const hydroxyl = placeAtomsAroundCarbons(carbonSkeleton).find((outerAtom) => outerAtom.symbol === 'OH');
    const oxygen = { kind: MOVED_OUTER_ATOM, carbonAtomId: hydroxyl.carbonAtomId, place: hydroxyl.place };
    const hydrogen = { kind: MOVED_GROUP_HYDROGEN, carbonAtomId: hydroxyl.carbonAtomId, groupIndex: hydroxyl.groupIndex, hydrogenIndex: 0 };

    const hydrogenMoved = moveAtomIfThereIsRoom(carbonSkeleton, hydrogen, nudge(findAtomPosition(carbonSkeleton, hydrogen), -10, 12));
    expect(hydrogenMoved).not.toBeNull();
    expect(findAtomPosition(hydrogenMoved, oxygen)).toEqual(findAtomPosition(carbonSkeleton, oxygen));

    const oxygenBefore = findAtomPosition(hydrogenMoved, oxygen);
    const hydrogenBefore = findAtomPosition(hydrogenMoved, hydrogen);
    const carbon = positionOf(carbonSkeleton, hydroxyl.carbonAtomId);
    // Moving the O straight out from its carbon takes the H out the same way.
    const outwards = { x: carbon.x + 1.3 * (oxygenBefore.x - carbon.x), y: carbon.y + 1.3 * (oxygenBefore.y - carbon.y) };
    const oxygenMoved = moveAtomIfThereIsRoom(hydrogenMoved, oxygen, outwards);
    expect(findAtomPosition(oxygenMoved, hydrogen).x).toBeCloseTo(hydrogenBefore.x + outwards.x - oxygenBefore.x);
    expect(findAtomPosition(oxygenMoved, hydrogen).y).toBeCloseTo(hydrogenBefore.y + outwards.y - oxygenBefore.y);
    expect(nameCarbonSkeleton(oxygenMoved).iupacName).toBe('ethanol');
  });

  it('moves the O in an ester bond and the H of an amide NH off the straight line, keeping the bonds', () => {
    for (const [name, linkSymbol] of [['methyl ethanoate', 'O'], ['N-methylethanamide', 'NH']]) {
      const { carbonSkeleton } = interpretOmniboxText(name);
      const bond = carbonSkeleton.carbonCarbonBonds.find((candidate) => candidate.linkAtom === linkSymbol);
      const linkAtom = { kind: MOVED_LINK_ATOM, firstAtomId: bond.firstAtomId, secondAtomId: bond.secondAtomId };
      const before = findAtomPosition(carbonSkeleton, linkAtom);
      const bent = moveAtomIfThereIsRoom(carbonSkeleton, linkAtom, nudge(before, 0, 12));
      expect(bent, name).not.toBeNull();
      expect(findAtomPosition(bent, linkAtom).y).toBeCloseTo(before.y + 12);
      expect(nameCarbonSkeleton(bent).iupacName).toBe(nameCarbonSkeleton(carbonSkeleton).iupacName);
      // The O or NH moves with its carbons: moving both the same way moves it the same way.
      const bothMoved = [bond.firstAtomId, bond.secondAtomId].reduce(
        (skeleton, atomId) => moveCarbonIfThereIsRoom(skeleton, atomId, nudge(positionOf(skeleton, atomId), 0, -15), Infinity),
        bent,
      );
      expect(findAtomPosition(bothMoved, linkAtom).x).toBeCloseTo(before.x);
      expect(findAtomPosition(bothMoved, linkAtom).y).toBeCloseTo(before.y + 12 - 15);
      if (linkSymbol === 'NH') {
        const linkHydrogen = { ...linkAtom, kind: MOVED_LINK_HYDROGEN };
        const hydrogenBefore = findAtomPosition(bent, linkHydrogen);
        const turned = moveAtomIfThereIsRoom(bent, linkHydrogen, nudge(hydrogenBefore, 8, 0));
        expect(turned).not.toBeNull();
        expect(findAtomPosition(turned, linkHydrogen).x).toBeCloseTo(hydrogenBefore.x + 8);
        expect(findAtomPosition(turned, linkAtom).y).toBeCloseTo(before.y + 12);
      }
    }
  });

  it('won’t move an atom through a bond', () => {
    const { carbonSkeleton } = interpretOmniboxText('propane');
    const [hydrogen] = outerAtomsOfCarbon(carbonSkeleton, 2);
    const atom = { kind: MOVED_OUTER_ATOM, carbonAtomId: 2, place: hydrogen.place };
    // Halfway along the bond from carbon 2 to carbon 3.
    const midBond = { x: (positionOf(carbonSkeleton, 2).x + positionOf(carbonSkeleton, 3).x) / 2, y: (positionOf(carbonSkeleton, 2).y + positionOf(carbonSkeleton, 3).y) / 2 };
    expect(moveAtom(startMovingAtom(carbonSkeleton, atom), midBond).heldBackBy).toBe(HELD_BACK_BY_OVERLAP);
  });

  it('puts every atom back in its usual place when the molecule is laid out again', () => {
    const { carbonSkeleton } = interpretOmniboxText('ethanol');
    const hydroxyl = placeAtomsAroundCarbons(carbonSkeleton).find((outerAtom) => outerAtom.symbol === 'OH');
    const oxygen = { kind: MOVED_OUTER_ATOM, carbonAtomId: hydroxyl.carbonAtomId, place: hydroxyl.place };
    const moved = moveAtomIfThereIsRoom(carbonSkeleton, oxygen, nudge(findAtomPosition(carbonSkeleton, oxygen), 10, 0));
    const forgotten = forgetHandPlacedPositions(moved);
    expect(forgotten.carbonAtoms.every((carbonAtom) => carbonAtom.outerAtomLayout === undefined)).toBe(true);
    expect(findAtomPosition(forgotten, oxygen)).toEqual(findAtomPosition(carbonSkeleton, oxygen));
  });
});

describe('laying out again', () => {
  it('keeps every C=C E or Z as drawn when closing a ring lays the molecule out again', () => {
    for (const [name, firstAtomId, secondAtomId, ringName] of [
      ['(2Z)-hept-2-ene', 4, 7, '[(1Z)-prop-1-en-1-yl]cyclobutane'],
      ['(2E)-hept-2-ene', 4, 7, '[(1E)-prop-1-en-1-yl]cyclobutane'],
      ['(2E)-oct-2-ene', 5, 8, '[(2E)-but-2-en-1-yl]cyclobutane'],
      ['(2Z)-non-2-ene', 4, 9, '[(1Z)-prop-1-en-1-yl]cyclohexane'],
    ]) {
      const joined = bondTwoCarbons(interpretOmniboxText(name).carbonSkeleton, firstAtomId, secondAtomId);
      const redrawn = drawDoubleBondsAsBefore(joined, layOutDisplayedFormula(joined));
      expect(nameCarbonSkeleton(redrawn).iupacName, name).toBe(ringName);
      expect(describeEveryDoubleBond(redrawn)).toEqual(describeEveryDoubleBond(joined));
      expect(countOverlapsInDrawing(redrawn)).toBe(0);
    }
  });
});
