/**
 * The drawing area. Shows the molecule and lets the student build and rearrange it.
 *
 * What a drag does depends on where it starts:
 *   on the background   slides the view around ("Reset view" brings the whole molecule back)
 *   on any atom         moves that atom: a carbon, a hydrogen (in the displayed formula), a
 *                       group (a halogen, OH, =O or NH2), a hydrogen of a group, or the O or
 *                       NH in a bond. Its bonds stay, getting longer or shorter. Dragging the
 *                       bond to a group moves the group too.
 *   on a bond           turns the bond: the end nearer the pointer swings round the other end,
 *                       taking everything attached on its side with it (a bond in a ring
 *                       can't be turned, as both ends are joined to the rest of the ring)
 * Moving and turning never push atoms on top of each other or through bonds, and never change
 * the name: a C=C that is E or Z stays that way, and the hydrogens on its carbons stay put while
 * dragging, in the way like any other atom (see src/geometry/rearrangeDrawing.js). When that is
 * what stops a drag, a hint beside the pointer says so.
 *
 * Adding a carbon: hold Ctrl, or switch on Carbon in the Add atom menu. A faded
 * preview carbon then follows the pointer, with a dashed line to the carbon it would bond to,
 * and the hydrogen it would replace is shown in red. The carbon is added when the button or
 * finger is released. The bond is chosen automatically (see planNewCarbonPlacement.js).
 *
 * Closing a ring: drag a carbon onto another carbon (or, while adding carbons, start on one
 * carbon and drag to another), then let go. A faded line shows the bond while the pointer is on
 * the other carbon. The two carbons are joined with a new bond, and when that closes a ring the
 * molecule is redrawn round it, as in cyclohexane. Erasing a bond in the ring opens it again.
 *
 * Double bonds: Ctrl + click a bond to make it a double bond, and again to make it single
 * (or, with Double bond switched on in the Add atom menu, just click it).
 * It can only become double if each of its carbons still has a hydrogen to give up. The bond
 * from a carbon to an OH works the same way: double, it is C=O, and single again, OH.
 *
 * O, N and the halogens: switch one on in the Add atom menu, then drag (or click) it where it
 * should go. What it becomes depends on where it is let go (see planAtomDrop.js): on a hydrogen
 * or carbon, O becomes OH and N becomes NH2; on a bond between two carbons, O goes in the middle
 * as -O- (an ether, or next to a C=O an ester) and N as -NH- (an amine, or next to a C=O an amide).
 * With O, the bond to an OH can also be clicked to make it C=O. While the pointer is over a
 * place, a faded preview shows what will be added there, with any hydrogen it replaces in red.
 *
 * Erasing: right-click a carbon to remove it, a bond to remove everything on its smaller
 * side, a group to put its hydrogens back, or the O or NH in a bond to take it out again. With Erase switched on in the Add atom menu, a
 * normal click does the same, and everything it would take away is marked in red while the pointer is over it (see ErasePreview.jsx).
 *
 * Groups keep pointing the same way while the carbons and groups around them are added, erased,
 * moved and turned (see keepGroupsPointingTheSameWay in placeAtomsAroundCarbons.js).
 *
 * The displayed and skeletal formulae are drawn from the same positions and the same view,
 * so switching between them never changes the shape.
 *
 * The whole molecule is shown in the part of the drawing that the menus at its sides don't
 * cover (coveredLeft and coveredRight, in pixels), as large as fits there (see computeViewBox.js).
 *
 * While a step of "How it was named" is picked (namingStep, see NamingSteps.jsx), the atoms
 * and bonds it is about are marked underneath the molecule.
 */
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import DisplayedFormulaDrawing, { LinkAtomDrawing, OuterAtomDrawing } from './DisplayedFormulaDrawing.jsx';
import SkeletalFormulaDrawing from './SkeletalFormulaDrawing.jsx';
import { NamingStepHighlight, NamingStepLocants } from './NamingStepHighlight.jsx';
import AtomCircle from './AtomCircle.jsx';
import ErasePreview from './ErasePreview.jsx';
import { DISPLAY_MODES } from './displayModes.js';
import {
  addCarbonAtom,
  addGroupToCarbon,
  bondCanBecomeDouble,
  bondTwoCarbons,
  changeGroupOnCarbon,
  chooseGroupBondChange,
  countHydrogensOnCarbon,
  countRings,
  findBondBetween,
  findCarbonAtomById,
  HYDROXYL_GROUP,
  isDoubleBond,
  isHalogenSymbol,
  isLinkBond,
  isRingBond,
  isSkeletonEmpty,
  isSkeletonOneMolecule,
  listGroupsOnCarbon,
  listWhatErasingRemoves,
  removeCarbonAndItsSmallerBranches,
  removeGroupFromCarbon,
  removeSmallerSideOfBond,
  setLinkAtomOfBond,
  toggleDoubleBond,
  toggleGroupDoubleBond,
  AMINO_GROUP,
  CARBONYL_OXYGEN,
} from '../chemistry/carbonSkeleton.js';
import { planNewCarbonPlacement } from '../geometry/planNewCarbonPlacement.js';
import { canBePlacedByDropping, findCarbonAtPoint, planAtomDrop } from '../geometry/planAtomDrop.js';
import { layOutDisplayedFormula } from '../geometry/layOutDisplayedFormula.js';
import { drawDoubleBondsAsBefore } from '../geometry/arrangeDoubleBonds.js';
import {
  bondLengthToOuterAtom,
  circleRadiusOfOuterAtom,
  keepGroupsPointingTheSameWay,
  placeAtomsAroundCarbons,
  placeHydrogenOfHydroxylGroup,
  placeLinkAtomOfBond,
  placeHydrogensOfAminoGroup,
} from '../geometry/placeAtomsAroundCarbons.js';
import {
  arrangeSkeletonForTurn,
  changeInPointerAngleAroundPivot,
  HELD_BACK_BY_DOUBLE_BOND_CONFIGURATION,
  findAtomPosition,
  letGoOfHeldOuterAtoms,
  moveAtom,
  MOVED_CARBON,
  MOVED_GROUP_HYDROGEN,
  MOVED_LINK_ATOM,
  MOVED_LINK_HYDROGEN,
  MOVED_OUTER_ATOM,
  startMovingAtom,
  startTurningBond,
  turnBondTowards,
} from '../geometry/rearrangeDrawing.js';
import { computeViewBoxFittingMolecule, formatViewBoxForSvg, slideViewBox } from '../geometry/computeViewBox.js';
import { angleFromPointToPoint, distanceBetweenPoints, pointAtAngleAndDistance } from '../geometry/vectorMaths.js';
import { CARBON_CIRCLE_RADIUS, HYDROGEN_CIRCLE_RADIUS, OXYGEN_CIRCLE_RADIUS } from '../geometry/drawingDimensions.js';
import { useTranslation } from '../languages/LanguageProvider.jsx';
import { useElementSize } from '../hooks/useElementSize.js';

/** Converts a pointer position on the screen into a position in the drawing's own units. */
function convertPointerPositionToDrawingPoint(svgElement, pointerEvent) {
  const screenPoint = svgElement.createSVGPoint();
  screenPoint.x = pointerEvent.clientX;
  screenPoint.y = pointerEvent.clientY;
  const drawingPoint = screenPoint.matrixTransform(svgElement.getScreenCTM().inverse());
  return { x: drawingPoint.x, y: drawingPoint.y };
}

/** Ctrl (or Cmd on a Mac) switches the pointer to adding carbons, or over a bond, to making it double or single. */
function isAddKeyDown(keyboardOrPointerEvent) {
  return keyboardOrPointerEvent.ctrlKey || keyboardOrPointerEvent.metaKey;
}

function isBondPart(part) {
  return part !== null && part !== undefined && part.nearerAtomId !== undefined;
}

function isGroupPart(part) {
  return part !== null && part !== undefined && part.groupIndex !== undefined;
}

/** The bond from a carbon to one of its groups: { bondGroupCarbonId, bondGroupIndex, bondGroupPlace }. */
function isGroupBondPart(part) {
  return part !== null && part !== undefined && part.bondGroupIndex !== undefined;
}

/** A hydrogen on a carbon: { hydrogenCarbonId, hydrogenPlace }. */
function isHydrogenPart(part) {
  return part !== null && part !== undefined && part.hydrogenCarbonId !== undefined;
}

/** The O or NH in a bond, or the H of that NH: { linkFirstAtomId, linkSecondAtomId, isLinkHydrogen }. */
function isLinkPart(part) {
  return part !== null && part !== undefined && part.linkFirstAtomId !== undefined;
}

/** The atom a drag starting on this part moves (see the list in rearrangeDrawing.js), or null if it turns a bond or slides the view. */
function findAtomToMove(part) {
  if (part === null || part === undefined) return null;
  if (part.carbonAtomId !== undefined) return { kind: MOVED_CARBON, atomId: part.carbonAtomId };
  if (isHydrogenPart(part)) return { kind: MOVED_OUTER_ATOM, carbonAtomId: part.hydrogenCarbonId, place: part.hydrogenPlace };
  if (isGroupPart(part) && part.hydrogenIndex !== undefined) {
    return { kind: MOVED_GROUP_HYDROGEN, carbonAtomId: part.groupCarbonId, groupIndex: part.groupIndex, hydrogenIndex: part.hydrogenIndex };
  }
  if (isGroupPart(part)) return { kind: MOVED_OUTER_ATOM, carbonAtomId: part.groupCarbonId, place: part.groupPlace };
  if (isGroupBondPart(part)) return { kind: MOVED_OUTER_ATOM, carbonAtomId: part.bondGroupCarbonId, place: part.bondGroupPlace };
  if (isLinkPart(part)) {
    return { kind: part.isLinkHydrogen ? MOVED_LINK_HYDROGEN : MOVED_LINK_ATOM, firstAtomId: part.linkFirstAtomId, secondAtomId: part.linkSecondAtomId };
  }
  return null;
}

/**
 * What erasing a part would erase, as listWhatErasingRemoves takes it, or null for a hydrogen
 * on a carbon (which can't be erased) or the background. A bond loses the side nearer the
 * pointer if its two sides are the same size.
 */
function findErasedPart(part) {
  if (part === null || part === undefined || isHydrogenPart(part)) return null;
  if (isLinkPart(part)) return { kind: 'linkAtom', firstAtomId: part.linkFirstAtomId, secondAtomId: part.linkSecondAtomId };
  if (isGroupPart(part)) return { kind: 'group', atomId: part.groupCarbonId, groupIndex: part.groupIndex };
  if (isGroupBondPart(part)) return { kind: 'group', atomId: part.bondGroupCarbonId, groupIndex: part.bondGroupIndex };
  if (part.carbonAtomId !== undefined) return { kind: 'carbon', atomId: part.carbonAtomId };
  return { kind: 'bond', firstAtomId: part.nearerAtomId, secondAtomId: part.fartherAtomId, atomIdToRemoveIfEven: part.nearerAtomId };
}

/** What kind of thing a part is, for the hint beside the pointer. */
function describeWhatPartIs(part) {
  if (part === null) return 'background';
  if (isGroupPart(part)) return 'group';
  if (isGroupBondPart(part)) return 'groupBond';
  if (isHydrogenPart(part)) return 'hydrogen';
  if (isLinkPart(part)) return 'link';
  return part.carbonAtomId !== undefined ? 'carbon' : 'bond';
}

/** The lines a bond's grab target is made of: straight between its carbons, or through its O or NH. */
function listGrabLinesOfBond(skeleton, bond) {
  const first = findCarbonAtomById(skeleton, bond.firstAtomId);
  const second = findCarbonAtomById(skeleton, bond.secondAtomId);
  const [firstPoint, secondPoint] = [first, second].map((carbon) => ({ x: carbon.positionX, y: carbon.positionY }));
  if (!isLinkBond(bond)) return [{ x1: firstPoint.x, y1: firstPoint.y, x2: secondPoint.x, y2: secondPoint.y }];
  const { atomX, atomY } = placeLinkAtomOfBond(skeleton, bond);
  return [firstPoint, secondPoint].map((point) => ({ x1: point.x, y1: point.y, x2: atomX, y2: atomY }));
}
/** The direction (in degrees) each group on a carbon points, in the order of its list of groups. */
function listDirectionsOfGroupsOnCarbon(skeleton, carbonAtomId) {
  const carbonAtom = findCarbonAtomById(skeleton, carbonAtomId);
  const carbonPoint = { x: carbonAtom.positionX, y: carbonAtom.positionY };
  const directions = [];
  for (const outerAtom of placeAtomsAroundCarbons(skeleton)) {
    if (outerAtom.carbonAtomId !== carbonAtomId || outerAtom.symbol === 'H') continue;
    directions[outerAtom.groupIndex] = angleFromPointToPoint(carbonPoint, { x: outerAtom.positionX, y: outerAtom.positionY });
  }
  return directions;
}

/**
 * The groups on one carbon were added, changed or removed. That can change how many hydrogens
 * it has, and so the directions round it (two hydrogens for one O), so each group is kept
 * pointing in the direction given: groupDirections, in the order of the edited list of groups.
 */
function keepGroupsOnCarbonPointing(skeletonBefore, editedSkeleton, carbonAtomId, groupDirections) {
  const directionByGroupKey = new Map(groupDirections.map((direction, groupIndex) => [`${carbonAtomId}/${groupIndex}`, direction]));
  return keepGroupsPointingTheSameWay(skeletonBefore, editedSkeleton, directionByGroupKey);
}

/** Removes a group, keeping the carbon's other groups where they were. */
function removeGroupKeepingTheOthers(skeleton, carbonAtomId, groupIndex) {
  const otherDirections = listDirectionsOfGroupsOnCarbon(skeleton, carbonAtomId).filter((_, index) => index !== groupIndex);
  return keepGroupsOnCarbonPointing(skeleton, removeGroupFromCarbon(skeleton, carbonAtomId, groupIndex), carbonAtomId, otherDirections);
}

/** An outer atom drawn with the given symbol, pointing from its carbon towards a point, as OuterAtomDrawing draws it. */
function describeOuterAtomPointingTowards(carbonPoint, towardsPoint, symbol) {
  const direction = angleFromPointToPoint(carbonPoint, towardsPoint);
  const position = pointAtAngleAndDistance(carbonPoint, direction, bondLengthToOuterAtom(symbol));
  const outerAtom = { symbol, positionX: position.x, positionY: position.y };
  if (symbol === HYDROXYL_GROUP) {
    const hydrogenPosition = placeHydrogenOfHydroxylGroup(carbonPoint, position);
    outerAtom.hydrogenPositionX = hydrogenPosition.x;
    outerAtom.hydrogenPositionY = hydrogenPosition.y;
  }
  if (symbol === AMINO_GROUP) {
    const [hydrogenPosition, secondHydrogenPosition] = placeHydrogensOfAminoGroup(carbonPoint, position);
    outerAtom.hydrogenPositionX = hydrogenPosition.x;
    outerAtom.hydrogenPositionY = hydrogenPosition.y;
    outerAtom.secondHydrogenPositionX = secondHydrogenPosition.x;
    outerAtom.secondHydrogenPositionY = secondHydrogenPosition.y;
  }
  return outerAtom;
}

/**
 * The faded preview of what dropping the chosen atom would add (see planAtomDrop.js):
 * { outerAtom, carbonPoint } for a group, drawn like any other outer atom (a halogen a little
 * further out than a hydrogen, OH with its own hydrogen, =O with two lines), or { bond } for an
 * O or NH going in the middle of a bond. null when nothing would be added.
 */
function findPreviewOfAtomDrop(skeleton, dropPlan) {
  if (dropPlan.kind === 'link') {
    if (dropPlan.action !== 'addLink') return null;
    return { bond: { firstAtomId: dropPlan.firstAtomId, secondAtomId: dropPlan.secondAtomId, linkAtom: dropPlan.linkAtom } };
  }
  const carbonAtom = findCarbonAtomById(skeleton, dropPlan.carbonAtomId);
  const carbonPoint = { x: carbonAtom.positionX, y: carbonAtom.positionY };
  if (dropPlan.kind === 'group') {
    if (dropPlan.action === 'blocked') return null;
    const symbol = dropPlan.action === 'remove' ? 'H' : dropPlan.group;
    return { outerAtom: describeOuterAtomPointingTowards(carbonPoint, { x: dropPlan.positionX, y: dropPlan.positionY }, symbol), carbonPoint };
  }
  if (dropPlan.kind === 'groupBond' && dropPlan.action !== 'cannotMakeDouble') {
    const group = placeAtomsAroundCarbons(skeleton).find(
      (outerAtom) => outerAtom.carbonAtomId === dropPlan.carbonAtomId && outerAtom.groupIndex === dropPlan.groupIndex,
    );
    const symbol = dropPlan.action === 'makeDouble' ? CARBONYL_OXYGEN : HYDROXYL_GROUP;
    return { outerAtom: describeOuterAtomPointingTowards(carbonPoint, { x: group.positionX, y: group.positionY }, symbol), carbonPoint };
  }
  return null;
}

/** True when dropping the chosen atom here would change the molecule. */
function atomDropCanHappen(dropPlan) {
  if (dropPlan === null) return false;
  if (dropPlan.kind === 'group') return dropPlan.action !== 'blocked';
  if (dropPlan.kind === 'link') return dropPlan.action !== 'cannotLink';
  if (dropPlan.kind === 'groupBond') return dropPlan.action !== 'cannotMakeDouble';
  return false;
}

/**
 * What Ctrl + click would do to a bond: 'makeDouble', 'makeSingle' or 'cannotMakeDouble', or for
 * the bond to a halogen or NH2, 'notOxygen'. null if the part isn't a bond in this skeleton
 * (for example, it has just been erased).
 */
function chooseBondChange(skeleton, part) {
  if (isGroupBondPart(part)) {
    const carbonAtom = findCarbonAtomById(skeleton, part.bondGroupCarbonId);
    if (carbonAtom === undefined || listGroupsOnCarbon(carbonAtom)[part.bondGroupIndex] === undefined) return null;
    return chooseGroupBondChange(skeleton, part.bondGroupCarbonId, part.bondGroupIndex);
  }
  if (!isBondPart(part)) return null;
  const bond = findBondBetween(skeleton, part.nearerAtomId, part.fartherAtomId);
  if (bond === undefined) return null;
  if (isDoubleBond(bond)) return 'makeSingle';
  return bondCanBecomeDouble(skeleton, part.nearerAtomId, part.fartherAtomId) ? 'makeDouble' : 'cannotMakeDouble';
}

/**
 * What letting go would do, in a drag from one carbon to another: { canJoin, closesRing,
 * hintKey }. Two carbons can be joined if they aren't bonded already, and each has a
 * hydrogen to give up.
 */
function planJoiningCarbons(skeleton, fromAtomId, toAtomId) {
  if (findBondBetween(skeleton, fromAtomId, toAtomId) !== undefined) return { canJoin: false, hintKey: 'drawing.carbonsAlreadyBonded' };
  if (countHydrogensOnCarbon(skeleton, fromAtomId) === 0 || countHydrogensOnCarbon(skeleton, toAtomId) === 0) {
    return { canJoin: false, hintKey: 'drawing.carbonHasNoRoomToJoin' };
  }
  const closesRing = countRings(bondTwoCarbons(skeleton, fromAtomId, toAtomId)) > countRings(skeleton);
  return { canJoin: true, closesRing, hintKey: closesRing ? 'drawing.releaseToCloseRing' : 'drawing.releaseToJoinCarbons' };
}

/**
 * Joins two carbons. A molecule that now has one ring is redrawn round it, staying where the
 * ring's carbons were; anything else keeps its shape.
 */
function joinCarbons(skeleton, fromAtomId, toAtomId) {
  const joined = bondTwoCarbons(skeleton, fromAtomId, toAtomId);
  if (countRings(joined) !== 1 || !isSkeletonOneMolecule(joined)) return { skeleton: joined, isRedrawn: false };
  // Each C=C stays E or Z as it was drawn.
  const redrawn = drawDoubleBondsAsBefore(joined, layOutDisplayedFormula(joined));
  const centreOf = (someSkeleton) => {
    const atoms = someSkeleton.carbonAtoms;
    return {
      x: atoms.reduce((total, { positionX }) => total + positionX, 0) / atoms.length,
      y: atoms.reduce((total, { positionY }) => total + positionY, 0) / atoms.length,
    };
  };
  const [oldCentre, newCentre] = [centreOf(joined), centreOf(redrawn)];
  return {
    skeleton: {
      ...redrawn,
      carbonAtoms: redrawn.carbonAtoms.map((carbonAtom) => ({
        ...carbonAtom,
        positionX: carbonAtom.positionX - newCentre.x + oldCentre.x,
        positionY: carbonAtom.positionY - newCentre.y + oldCentre.y,
      })),
    },
    isRedrawn: true,
  };
}

export default function MoleculeCanvas({
  carbonSkeleton,
  displayMode,
  isEraseModeOn,
  isDoubleBondModeOn = false,
  atomToAdd,
  viewResetRequestCount,
  onCarbonSkeletonEdited,
  onCarbonPositionsChanged,
  namingStep = null,
  coveredLeft = 0,
  coveredRight = 0,
}) {
  const t = useTranslation();
  const svgElementReference = useRef(null);
  const [measureSvgElement, svgSize] = useElementSize();
  // The same function every render: a new one would make React detach and re-attach it, re-measuring each time.
  const keepSvgElement = useCallback(
    (svgElement) => {
      svgElementReference.current = svgElement;
      measureSvgElement(svgElement);
    },
    [measureSvgElement],
  );
  /** Details of the drag in progress, if any: { kind: 'panning' | 'moving' | 'turning' | 'placing' | 'dropping', ... } */
  const dragReference = useRef(null);

  const [dragKind, setDragKind] = useState(null);
  /** The molecule as it is being moved or turned, before the change is handed back to the app. */
  const [skeletonBeingRearranged, setSkeletonBeingRearranged] = useState(null);
  /** null means "fit the molecule"; otherwise the view the student has slid to. */
  const [chosenView, setChosenView] = useState(null);
  const [pointerPoint, setPointerPoint] = useState(null);
  const [isAddKeyHeld, setIsAddKeyHeld] = useState(false);
  /** Where the mouse is over the drawing (in screen pixels) and what it is over, for the hint beside it. */
  const [pointerHint, setPointerHint] = useState(null);
  /** While dragging from one carbon to another to join them: { fromAtomId, toAtomId, canJoin, hintKey, left, top }. */
  const [joiningPlan, setJoiningPlan] = useState(null);
  /** Where the pointer is (in screen pixels) while a move or turn is stopped because it would change a C=C's E or Z. */
  const [heldBackHint, setHeldBackHint] = useState(null);

  // A new molecule (typed, picked or generated) is shown whole, wherever the view had been slid to.
  const [lastViewResetRequestCount, setLastViewResetRequestCount] = useState(viewResetRequestCount);
  if (lastViewResetRequestCount !== viewResetRequestCount) {
    setLastViewResetRequestCount(viewResetRequestCount);
    setChosenView(null);
  }

  useEffect(() => {
    function handleKeyChange(keyboardEvent) {
      setIsAddKeyHeld(isAddKeyDown(keyboardEvent));
    }
    function handleWindowBlur() {
      setIsAddKeyHeld(false);
    }
    window.addEventListener('keydown', handleKeyChange);
    window.addEventListener('keyup', handleKeyChange);
    window.addEventListener('blur', handleWindowBlur);
    return () => {
      window.removeEventListener('keydown', handleKeyChange);
      window.removeEventListener('keyup', handleKeyChange);
      window.removeEventListener('blur', handleWindowBlur);
    };
  }, []);

  const isAddCarbonModeOn = atomToAdd === 'C';
  /** The O, N or halogen chosen in the Add atom menu, if any: it goes wherever it is dropped (see planAtomDrop.js). */
  const atomToDrop = canBePlacedByDropping(atomToAdd) ? atomToAdd : null;

  const skeletonToDraw = skeletonBeingRearranged ?? carbonSkeleton;
  const isShowingDisplayedFormula = displayMode === DISPLAY_MODES.displayed;
  const drawingIsEmpty = isSkeletonEmpty(carbonSkeleton);

  const viewAroundMolecule = useMemo(
    () => computeViewBoxFittingMolecule(carbonSkeleton, { screenWidth: svgSize.width, screenHeight: svgSize.height, coveredLeft, coveredRight }),
    [carbonSkeleton, svgSize, coveredLeft, coveredRight],
  );
  const view = chosenView ?? viewAroundMolecule;

  // With Ctrl held (or Double bond on) over a bond, a click makes it double or single instead of adding a carbon.
  const isChangingBonds = isAddKeyHeld || isDoubleBondModeOn;
  const bondChangeUnderPointer = isChangingBonds && dragKind === null ? chooseBondChange(carbonSkeleton, pointerHint?.part) : null;
  const isAddingCarbon =
    (isAddKeyHeld || isAddCarbonModeOn) && bondChangeUnderPointer === null && joiningPlan === null && (dragKind === null || dragKind === 'placing');
  const placementPlan = isAddingCarbon && pointerPoint ? planNewCarbonPlacement(carbonSkeleton, pointerPoint) : null;
  const carbonThePreviewWouldBondTo = placementPlan?.bondToAtomId ? findCarbonAtomById(carbonSkeleton, placementPlan.bondToAtomId) : null;
  const atomDropPlan =
    atomToDrop && !isAddingCarbon && bondChangeUnderPointer === null && (dragKind === null || dragKind === 'dropping') && pointerPoint
      ? planAtomDrop(carbonSkeleton, pointerPoint, atomToDrop)
      : null;
  const atomDropWouldChangeMolecule = atomDropCanHappen(atomDropPlan);
  const atomDropPreview = atomDropWouldChangeMolecule ? findPreviewOfAtomDrop(carbonSkeleton, atomDropPlan) : null;
  /** The hydrogen (or group) a dropped atom would take the place of, shown in red. */
  const outerAtomIdReplacedByDrop =
    atomDropWouldChangeMolecule && atomDropPlan.kind === 'group' && atomDropPlan.action !== 'remove' ? atomDropPlan.outerAtomId : null;

  const erasedPartUnderPointer = isEraseModeOn && dragKind === null ? findErasedPart(pointerHint?.part) : null;
  const erasePreview = erasedPartUnderPointer ? listWhatErasingRemoves(carbonSkeleton, erasedPartUnderPointer) : null;

  /** Carbons were added or removed, or a bond changed: the groups stay pointing the way they did. */
  function editCarbons(editedSkeleton) {
    onCarbonSkeletonEdited(keepGroupsPointingTheSameWay(carbonSkeleton, editedSkeleton));
  }

  /** Swaps a hydrogen or group for another, as planned by planAtomDrop (kind 'group'). */
  function swapGroup(swapPlan) {
    const { action, carbonAtomId, group } = swapPlan;
    const groupDirections = listDirectionsOfGroupsOnCarbon(carbonSkeleton, carbonAtomId);
    if (action === 'add') {
      // The new group points where the hydrogen it replaces did.
      const carbonAtom = findCarbonAtomById(carbonSkeleton, carbonAtomId);
      const clickedDirection = angleFromPointToPoint(
        { x: carbonAtom.positionX, y: carbonAtom.positionY },
        { x: swapPlan.positionX, y: swapPlan.positionY },
      );
      const editedSkeleton = addGroupToCarbon(carbonSkeleton, carbonAtomId, group, swapPlan.place);
      groupDirections[listGroupsOnCarbon(carbonAtom).length] = clickedDirection;
      onCarbonSkeletonEdited(keepGroupsOnCarbonPointing(carbonSkeleton, editedSkeleton, carbonAtomId, groupDirections));
    }
    if (action === 'change') {
      const editedSkeleton = changeGroupOnCarbon(carbonSkeleton, carbonAtomId, swapPlan.groupIndex, group);
      onCarbonSkeletonEdited(keepGroupsOnCarbonPointing(carbonSkeleton, editedSkeleton, carbonAtomId, groupDirections));
    }
    if (action === 'remove') onCarbonSkeletonEdited(removeGroupKeepingTheOthers(carbonSkeleton, carbonAtomId, swapPlan.groupIndex));
  }

  /** Makes the bond to an OH double (C=O), or of a C=O single (OH), keeping the carbon's groups where they were. */
  function toggleBondToGroup(carbonAtomId, groupIndex) {
    const groupDirections = listDirectionsOfGroupsOnCarbon(carbonSkeleton, carbonAtomId);
    const editedSkeleton = toggleGroupDoubleBond(carbonSkeleton, carbonAtomId, groupIndex);
    onCarbonSkeletonEdited(keepGroupsOnCarbonPointing(carbonSkeleton, editedSkeleton, carbonAtomId, groupDirections));
  }

  /** Does what planAtomDrop planned, if it changes anything. */
  function dropAtom(dropPlan) {
    if (!atomDropCanHappen(dropPlan)) return;
    if (dropPlan.kind === 'group') swapGroup(dropPlan);
    if (dropPlan.kind === 'link') {
      const newLinkAtom = dropPlan.action === 'addLink' ? dropPlan.linkAtom : null;
      onCarbonSkeletonEdited(setLinkAtomOfBond(carbonSkeleton, dropPlan.firstAtomId, dropPlan.secondAtomId, newLinkAtom));
    }
    if (dropPlan.kind === 'groupBond') toggleBondToGroup(dropPlan.carbonAtomId, dropPlan.groupIndex);
  }

  function startDrag(drag, pointerEvent) {
    setPointerHint(null);
    dragReference.current = drag;
    setDragKind(drag.kind);
    pointerEvent.currentTarget.setPointerCapture(pointerEvent.pointerId);
  }

  function endDrag() {
    dragReference.current = null;
    setDragKind(null);
    setSkeletonBeingRearranged(null);
    setJoiningPlan(null);
    setHeldBackHint(null);
  }

  /** Shows or hides the hint saying that going further would change a C=C's E or Z. */
  function showWhetherHeldBack(pointerEvent, heldBackBy) {
    if (heldBackBy !== HELD_BACK_BY_DOUBLE_BOND_CONFIGURATION) {
      setHeldBackHint(null);
      return;
    }
    const canvasBox = pointerEvent.currentTarget.getBoundingClientRect();
    setHeldBackHint({ left: pointerEvent.clientX - canvasBox.left, top: pointerEvent.clientY - canvasBox.top });
  }

  function placeCarbonAt(dropPoint) {
    const plan = planNewCarbonPlacement(carbonSkeleton, dropPoint);
    if (!plan.canPlace) return;
    const { updatedSkeleton } = addCarbonAtom(carbonSkeleton, {
      positionX: dropPoint.x,
      positionY: dropPoint.y,
      bondToAtomId: plan.bondToAtomId,
    });
    editCarbons(updatedSkeleton);
  }

  /**
   * What the pointer is on: { carbonAtomId } for a carbon, { nearerAtomId, fartherAtomId }
   * for a bond (its two carbons, nearer the pointer first), { groupCarbonId, groupIndex,
   * groupPlace } for a group (halogen, OH, =O or NH2), with hydrogenIndex if it is on one of
   * the group's hydrogens, { bondGroupCarbonId, bondGroupIndex, bondGroupPlace } for the bond
   * from a carbon to one of its groups, { hydrogenCarbonId, hydrogenPlace } for a hydrogen on a
   * carbon, { linkFirstAtomId, linkSecondAtomId, isLinkHydrogen } for the O or NH in a bond or
   * the H of that NH, or null for the background.
   */
  function findPartUnderPointer(pointerEvent, point) {
    const groupElement = pointerEvent.target.closest('[data-group-index]');
    if (groupElement) {
      const { groupCarbonId, groupIndex, groupPlace, groupHydrogenIndex } = groupElement.dataset;
      const part = { groupCarbonId: Number(groupCarbonId), groupIndex: Number(groupIndex), groupPlace: Number(groupPlace) };
      return groupHydrogenIndex === undefined ? part : { ...part, hydrogenIndex: Number(groupHydrogenIndex) };
    }

    const linkElement = pointerEvent.target.closest('[data-link-first-atom-id]');
    if (linkElement) {
      return {
        linkFirstAtomId: Number(linkElement.dataset.linkFirstAtomId),
        linkSecondAtomId: Number(linkElement.dataset.linkSecondAtomId),
        isLinkHydrogen: linkElement.dataset.linkHydrogen !== undefined,
      };
    }

    const carbonElement = pointerEvent.target.closest('[data-carbon-id]');
    if (carbonElement) return { carbonAtomId: Number(carbonElement.dataset.carbonId) };

    const hydrogenElement = pointerEvent.target.closest('[data-hydrogen-carbon-id]');
    if (hydrogenElement) {
      return { hydrogenCarbonId: Number(hydrogenElement.dataset.hydrogenCarbonId), hydrogenPlace: Number(hydrogenElement.dataset.hydrogenPlace) };
    }

    const groupBondElement = pointerEvent.target.closest('[data-bond-group-index]');
    if (groupBondElement) {
      return {
        bondGroupCarbonId: Number(groupBondElement.dataset.bondGroupCarbonId),
        bondGroupIndex: Number(groupBondElement.dataset.bondGroupIndex),
        bondGroupPlace: Number(groupBondElement.dataset.bondGroupPlace),
      };
    }

    const bondElement = pointerEvent.target.closest('[data-bond-first-atom-id]');
    if (!bondElement) return null;
    const firstAtomId = Number(bondElement.dataset.bondFirstAtomId);
    const secondAtomId = Number(bondElement.dataset.bondSecondAtomId);
    const distanceTo = (atomId) => {
      const carbonAtom = findCarbonAtomById(carbonSkeleton, atomId);
      return distanceBetweenPoints(point, { x: carbonAtom.positionX, y: carbonAtom.positionY });
    };
    return distanceTo(firstAtomId) < distanceTo(secondAtomId)
      ? { nearerAtomId: firstAtomId, fartherAtomId: secondAtomId }
      : { nearerAtomId: secondAtomId, fartherAtomId: firstAtomId };
  }

  /**
   * Erasing a carbon removes it and anything that would be left hanging on its own.
   * Erasing a bond removes everything on its smaller side (the side nearer the pointer if they're equal).
   * Erasing a group, or its bond, puts its hydrogens back (one for a halogen or OH, two for =O).
   * Erasing the O or NH in a bond (or the H of the NH) takes it out, leaving a C-C bond.
   * A hydrogen on a carbon can't be erased, as it is only there to give the carbon 4 bonds.
   */
  function erasePart(part) {
    if (isHydrogenPart(part)) return;
    if (isLinkPart(part)) {
      onCarbonSkeletonEdited(setLinkAtomOfBond(carbonSkeleton, part.linkFirstAtomId, part.linkSecondAtomId, null));
    } else if (isGroupPart(part)) {
      onCarbonSkeletonEdited(removeGroupKeepingTheOthers(carbonSkeleton, part.groupCarbonId, part.groupIndex));
    } else if (isGroupBondPart(part)) {
      onCarbonSkeletonEdited(removeGroupKeepingTheOthers(carbonSkeleton, part.bondGroupCarbonId, part.bondGroupIndex));
    } else if (part.carbonAtomId !== undefined) {
      editCarbons(removeCarbonAndItsSmallerBranches(carbonSkeleton, part.carbonAtomId));
    } else {
      editCarbons(removeSmallerSideOfBond(carbonSkeleton, part.nearerAtomId, part.fartherAtomId, part.nearerAtomId));
    }
  }

  function handlePointerDown(pointerEvent) {
    if (pointerEvent.button !== 0) return;
    const svgElement = svgElementReference.current;
    const point = convertPointerPositionToDrawingPoint(svgElement, pointerEvent);
    setPointerPoint(point);
    setIsAddKeyHeld(isAddKeyDown(pointerEvent));
    // Keep the view still from now on, so nothing jumps while the student is working.
    setChosenView(view);

    const part = findPartUnderPointer(pointerEvent, point);

    const isChangingBond = isAddKeyDown(pointerEvent) || isDoubleBondModeOn;
    if (isChangingBond && isGroupBondPart(part)) {
      const change = chooseBondChange(carbonSkeleton, part);
      if (change === 'makeDouble' || change === 'makeSingle') toggleBondToGroup(part.bondGroupCarbonId, part.bondGroupIndex);
      return;
    }

    if (isChangingBond && isBondPart(part)) {
      if (chooseBondChange(carbonSkeleton, part) !== 'cannotMakeDouble') {
        editCarbons(toggleDoubleBond(carbonSkeleton, part.nearerAtomId, part.fartherAtomId));
      }
      return;
    }

    if (isAddKeyDown(pointerEvent) || isAddCarbonModeOn) {
      // Starting on a carbon, the drag may end on another, to join the two.
      startDrag({ kind: 'placing', fromAtomId: part?.carbonAtomId }, pointerEvent);
      return;
    }

    if (part && isEraseModeOn) {
      erasePart(part);
      return;
    }

    // The chosen O, N or halogen follows the pointer, and goes where it is let go (if anywhere).
    if (atomToDrop) {
      startDrag({ kind: 'dropping' }, pointerEvent);
      return;
    }

    const atomToMove = findAtomToMove(part);
    const atomPosition = atomToMove && findAtomPosition(carbonSkeleton, atomToMove);
    if (atomPosition) {
      // Grabbed off-centre (or by the bond to a group), the atom keeps the same offset from the pointer.
      startDrag(
        {
          kind: 'moving',
          atom: atomToMove,
          offsetFromPointer: { x: atomPosition.x - point.x, y: atomPosition.y - point.y },
          move: startMovingAtom(carbonSkeleton, atomToMove),
          rearrangedSkeleton: carbonSkeleton,
        },
        pointerEvent,
      );
      return;
    }

    if (isBondPart(part) && !isRingBond(carbonSkeleton, part.nearerAtomId, part.fartherAtomId)) {
      // The end of the bond nearer the pointer swings round the other end.
      startDrag(
        {
          kind: 'turning',
          turn: startTurningBond(carbonSkeleton, part.fartherAtomId, part.nearerAtomId),
          wantedTotalTurn: 0,
          previousPointerPoint: point,
          rearrangedSkeleton: carbonSkeleton,
        },
        pointerEvent,
      );
      return;
    }

    startDrag(
      {
        kind: 'panning',
        startClientX: pointerEvent.clientX,
        startClientY: pointerEvent.clientY,
        startView: view,
        drawingUnitsPerScreenPixel: 1 / svgElement.getScreenCTM().a,
      },
      pointerEvent,
    );
  }

  function handlePointerMove(pointerEvent) {
    const point = convertPointerPositionToDrawingPoint(svgElementReference.current, pointerEvent);
    setPointerPoint(point);
    const drag = dragReference.current;
    if (!drag) {
      setIsAddKeyHeld(isAddKeyDown(pointerEvent));
      if (pointerEvent.pointerType === 'mouse') {
        const canvasBox = pointerEvent.currentTarget.getBoundingClientRect();
        const part = findPartUnderPointer(pointerEvent, point);
        setPointerHint({
          left: pointerEvent.clientX - canvasBox.left,
          top: pointerEvent.clientY - canvasBox.top,
          isOver: describeWhatPartIs(part),
          part,
        });
      }
      return;
    }

    if (drag.kind === 'dropping') {
      // The hint keeps saying what letting go here would do.
      const canvasBox = pointerEvent.currentTarget.getBoundingClientRect();
      setPointerHint({ left: pointerEvent.clientX - canvasBox.left, top: pointerEvent.clientY - canvasBox.top, isOver: null, part: null });
    }

    if (drag.kind === 'placing' && drag.fromAtomId !== undefined) {
      const carbonUnderPointer = findCarbonAtPoint(carbonSkeleton, point);
      if (carbonUnderPointer && carbonUnderPointer.atomId !== drag.fromAtomId) {
        const canvasBox = pointerEvent.currentTarget.getBoundingClientRect();
        setJoiningPlan({
          fromAtomId: drag.fromAtomId,
          toAtomId: carbonUnderPointer.atomId,
          ...planJoiningCarbons(carbonSkeleton, drag.fromAtomId, carbonUnderPointer.atomId),
          left: pointerEvent.clientX - canvasBox.left,
          top: pointerEvent.clientY - canvasBox.top,
        });
      } else {
        setJoiningPlan(null);
      }
    }

    if (drag.kind === 'panning') {
      setChosenView(
        slideViewBox(
          drag.startView,
          -(pointerEvent.clientX - drag.startClientX) * drag.drawingUnitsPerScreenPixel,
          -(pointerEvent.clientY - drag.startClientY) * drag.drawingUnitsPerScreenPixel,
        ),
      );
    }

    if (drag.kind === 'moving') {
      // A carbon dragged onto another carbon can be joined to it, closing a ring.
      const movedCarbonId = drag.atom.kind === MOVED_CARBON ? drag.atom.atomId : null;
      const carbonUnderPointer = movedCarbonId === null ? null : findCarbonAtPoint(carbonSkeleton, point);
      const joinPlan =
        carbonUnderPointer && carbonUnderPointer.atomId !== movedCarbonId ? planJoiningCarbons(carbonSkeleton, movedCarbonId, carbonUnderPointer.atomId) : null;
      if (joinPlan && joinPlan.hintKey !== 'drawing.carbonsAlreadyBonded') {
        const canvasBox = pointerEvent.currentTarget.getBoundingClientRect();
        setJoiningPlan({
          fromAtomId: movedCarbonId,
          toAtomId: carbonUnderPointer.atomId,
          ...joinPlan,
          left: pointerEvent.clientX - canvasBox.left,
          top: pointerEvent.clientY - canvasBox.top,
        });
      } else {
        setJoiningPlan(null);
      }
      const wantedPosition = { x: point.x + drag.offsetFromPointer.x, y: point.y + drag.offsetFromPointer.y };
      const moved = moveAtom(drag.move, wantedPosition);
      // If there is no room there, or it would change a C=C's E or Z, the atom stays at the last place it could go.
      if (moved.skeleton) {
        drag.rearrangedSkeleton = keepGroupsPointingTheSameWay(drag.rearrangedSkeleton, moved.skeleton);
        setSkeletonBeingRearranged(drag.rearrangedSkeleton);
      }
      showWhetherHeldBack(pointerEvent, moved.heldBackBy);
    }

    if (drag.kind === 'turning') {
      drag.wantedTotalTurn += changeInPointerAngleAroundPivot(drag.turn, drag.previousPointerPoint, point);
      drag.previousPointerPoint = point;
      drag.turn = turnBondTowards(drag.turn, drag.wantedTotalTurn);
      drag.rearrangedSkeleton = keepGroupsPointingTheSameWay(drag.rearrangedSkeleton, arrangeSkeletonForTurn(drag.turn));
      setSkeletonBeingRearranged(drag.rearrangedSkeleton);
      showWhetherHeldBack(pointerEvent, drag.turn.heldBackBy);
    }
  }

  function handlePointerUp(pointerEvent) {
    const drag = dragReference.current;
    const point = convertPointerPositionToDrawingPoint(svgElementReference.current, pointerEvent);

    if (drag?.kind === 'placing') {
      if (joiningPlan === null) {
        placeCarbonAt(point);
      } else if (joiningPlan.canJoin) {
        const joined = joinCarbons(carbonSkeleton, joiningPlan.fromAtomId, joiningPlan.toAtomId);
        if (joined.isRedrawn) onCarbonSkeletonEdited(joined.skeleton);
        else editCarbons(joined.skeleton);
      }
    }

    if (drag?.kind === 'dropping') dropAtom(planAtomDrop(carbonSkeleton, point, atomToDrop));

    const isRearranging = drag?.kind === 'moving' || drag?.kind === 'turning';
    // The hydrogens and groups held still during the drag go back to their usual places.
    const rearranged = isRearranging ? letGoOfHeldOuterAtoms(drag.rearrangedSkeleton) : null;
    const joinsMovedCarbon = drag?.kind === 'moving' && joiningPlan?.canJoin;
    if (joinsMovedCarbon) {
      // The carbon is joined from where it was dragged to.
      const joined = joinCarbons(rearranged, joiningPlan.fromAtomId, joiningPlan.toAtomId);
      onCarbonSkeletonEdited(joined.isRedrawn ? joined.skeleton : keepGroupsPointingTheSameWay(rearranged, joined.skeleton));
    } else if (isRearranging && drag.rearrangedSkeleton !== carbonSkeleton) {
      onCarbonPositionsChanged(rearranged);
    }

    endDrag();
    // A finger has no "hover", so the preview disappears when it is lifted.
    if (pointerEvent.pointerType !== 'mouse') setPointerPoint(null);
  }

  function handlePointerLeave() {
    setPointerHint(null);
    if (!dragReference.current) setPointerPoint(null);
  }

  /** Right-click erases. (On a Mac, Ctrl + click also lands here, but that adds a carbon instead.) */
  function handleContextMenu(mouseEvent) {
    mouseEvent.preventDefault();
    if (isAddKeyDown(mouseEvent) || dragReference.current) return;
    const point = convertPointerPositionToDrawingPoint(svgElementReference.current, mouseEvent);
    const part = findPartUnderPointer(mouseEvent, point);
    if (part) erasePart(part);
  }

  /** The hint while an O, N or halogen is chosen: what letting go of it here would do. */
  function chooseAtomDropHintText() {
    const plan = atomDropPlan;
    if (plan === null) {
      return isHalogenSymbol(atomToDrop)
        ? t('drawing.pointAtHydrogenUntilEsc', { symbol: atomToDrop })
        : t('drawing.pointAtHydrogenOrBondUntilEsc', { symbol: atomToDrop });
    }
    if (plan.kind === 'carbonIsFull') return t('drawing.carbonHasNoHydrogenToSwap');
    if (plan.kind === 'groupBond') {
      if (plan.action === 'makeDouble') return t('drawing.clickToMakeCarbonOxygenDouble');
      if (plan.action === 'makeSingle') return t('drawing.clickToMakeCarbonOxygenSingle');
      return t('drawing.cannotMakeDoubleBond');
    }
    if (plan.kind === 'link') {
      if (plan.action === 'addLink') return t('drawing.clickToPutLinkInBond', { symbol: plan.linkAtom });
      if (plan.action === 'removeLink') return t('drawing.clickToTakeLinkOutOfBond', { symbol: plan.linkAtom });
      return t('drawing.linkNeedsSingleBond', { symbol: plan.linkAtom });
    }
    if (plan.action === 'add') return t('drawing.clickToSwapHydrogenForGroup', { symbol: plan.group });
    if (plan.action === 'change') return t('drawing.clickToChangeGroup', { symbol: plan.group });
    if (plan.action === 'remove') return t('drawing.clickToPutHydrogenBack');
    return t('drawing.cannotMakeDoubleBond');
  }

  /** The short hint that follows the mouse: what a click does here, right now. */
  function chooseHintText() {
    if (bondChangeUnderPointer === 'makeDouble') return t('drawing.clickToMakeDoubleBond');
    if (bondChangeUnderPointer === 'makeSingle') return t('drawing.clickToMakeSingleBond');
    if (bondChangeUnderPointer === 'cannotMakeDouble') return t('drawing.cannotMakeDoubleBond');
    if (bondChangeUnderPointer === 'notOxygen') return t('drawing.onlyBondToOxygenCanBeDouble');
    if (isAddingCarbon) {
      if (placementPlan && !placementPlan.canPlace) return t(placementPlan.reasonCannotPlace);
      return isAddCarbonModeOn ? t('drawing.clickToAddCarbonUntilEsc') : t('drawing.clickToAddCarbon');
    }
    if (isEraseModeOn) return pointerHint.isOver === 'background' ? t('drawing.erasingUntilEsc') : t('drawing.clickToErase');
    if (isDoubleBondModeOn && pointerHint.isOver === 'background') return t('drawing.clickBondToMakeDoubleUntilEsc');
    if (atomToDrop) return chooseAtomDropHintText();
    if (pointerHint.isOver === 'group') return t('drawing.dragToMoveGroup');
    if (pointerHint.isOver === 'groupBond') {
      const change = chooseBondChange(carbonSkeleton, pointerHint.part);
      return change === 'makeDouble' || change === 'makeSingle' ? t('drawing.ctrlClickToChangeBondToGroup') : t('drawing.dragToMoveGroup');
    }
    if (pointerHint.isOver === 'hydrogen') return t('drawing.dragToMoveHydrogen');
    if (pointerHint.isOver === 'link') return t('drawing.dragToMoveLinkAtom');
    if (pointerHint.isOver === 'carbon') return t('drawing.dragToMoveCarbon');
    if (pointerHint.isOver === 'bond') {
      const { nearerAtomId, fartherAtomId } = pointerHint.part;
      return isRingBond(carbonSkeleton, nearerAtomId, fartherAtomId) ? t('drawing.ringBondCannotTurn') : t('drawing.dragToTurnBond');
    }
    return t('drawing.ctrlClickForCarbon');
  }

  const canvasClassNames = [
    'molecule-canvas',
    isAddingCarbon && 'molecule-canvas--adding',
    dragKind && `molecule-canvas--${dragKind}`,
    isEraseModeOn && 'molecule-canvas--erasing',
    atomDropWouldChangeMolecule && 'molecule-canvas--swapping-group',
    bondChangeUnderPointer &&
      `molecule-canvas--bond-${bondChangeUnderPointer === 'makeDouble' || bondChangeUnderPointer === 'makeSingle' ? 'changing' : 'locked'}`,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={canvasClassNames}>
      <svg
        ref={keepSvgElement}
        viewBox={formatViewBoxForSvg(view)}
        preserveAspectRatio="xMidYMid meet"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={endDrag}
        onPointerLeave={handlePointerLeave}
        onContextMenu={handleContextMenu}
        role="img"
        aria-label={isShowingDisplayedFormula ? t('drawing.displayedFormulaLabel') : t('drawing.skeletalFormulaLabel')}
      >
        {namingStep && !drawingIsEmpty && <NamingStepHighlight carbonSkeleton={skeletonToDraw} namingStep={namingStep} />}

        {isShowingDisplayedFormula ? (
          <DisplayedFormulaDrawing
            carbonSkeleton={skeletonToDraw}
            outerAtomIdBeingReplaced={placementPlan?.canPlace ? placementPlan.hydrogenIdReplaced : outerAtomIdReplacedByDrop}
            beingReplacedTooltip={placementPlan?.canPlace ? t('drawing.newCarbonReplacesHydrogen') : undefined}
          />
        ) : (
          !drawingIsEmpty && <SkeletalFormulaDrawing carbonSkeleton={skeletonToDraw} />
        )}

        {namingStep && !drawingIsEmpty && <NamingStepLocants carbonSkeleton={skeletonToDraw} namingStep={namingStep} />}

        {erasePreview && <ErasePreview carbonSkeleton={carbonSkeleton} removal={erasePreview} isShowingHydrogens={isShowingDisplayedFormula} />}

        {/* Invisible shapes over each bond and carbon, so they can be grabbed in either view. */}
        <g className="grab-targets">
          {skeletonToDraw.carbonCarbonBonds.map((bond) =>
            listGrabLinesOfBond(skeletonToDraw, bond).map((line, lineIndex) => (
              <line
                key={`grab-bond-C${bond.firstAtomId}-C${bond.secondAtomId}-${lineIndex}`}
                className="grab-target grab-target--bond"
                data-bond-first-atom-id={bond.firstAtomId}
                data-bond-second-atom-id={bond.secondAtomId}
                {...line}
              >
                <title>{isEraseModeOn ? t('drawing.bondTitleWhileErasing') : t('drawing.bondTitle')}</title>
              </line>
            )),
          )}
          {placeAtomsAroundCarbons(skeletonToDraw)
            .filter((outerAtom) => outerAtom.symbol !== 'H')
            .map((group) => {
              const carbonAtom = findCarbonAtomById(skeletonToDraw, group.carbonAtomId);
              return (
                <line
                  key={`grab-bond-to-${group.outerAtomId}`}
                  className="grab-target grab-target--bond grab-target--group-bond"
                  data-bond-group-carbon-id={group.carbonAtomId}
                  data-bond-group-index={group.groupIndex}
                  data-bond-group-place={group.place}
                  x1={carbonAtom.positionX}
                  y1={carbonAtom.positionY}
                  x2={group.positionX}
                  y2={group.positionY}
                >
                  <title>{isEraseModeOn ? t('drawing.groupTitleWhileErasing') : t('drawing.groupBondTitle')}</title>
                </line>
              );
            })}
          {/* Hydrogens on carbon are only drawn, and so can only be grabbed, in the displayed formula. */}
          {isShowingDisplayedFormula &&
            placeAtomsAroundCarbons(skeletonToDraw)
              .filter((outerAtom) => outerAtom.symbol === 'H')
              .map((hydrogen) => (
                <circle
                  key={`grab-${hydrogen.outerAtomId}`}
                  className="grab-target grab-target--hydrogen"
                  data-hydrogen-carbon-id={hydrogen.carbonAtomId}
                  data-hydrogen-place={hydrogen.place}
                  cx={hydrogen.positionX}
                  cy={hydrogen.positionY}
                  r={HYDROGEN_CIRCLE_RADIUS + 3}
                >
                  {!isEraseModeOn && <title>{t('drawing.hydrogenTitle')}</title>}
                </circle>
              ))}
          {skeletonToDraw.carbonAtoms.map((carbonAtom) => (
            <circle
              key={`grab-C${carbonAtom.atomId}`}
              className="grab-target grab-target--carbon"
              data-carbon-id={carbonAtom.atomId}
              cx={carbonAtom.positionX}
              cy={carbonAtom.positionY}
              r={CARBON_CIRCLE_RADIUS + 3}
            >
              <title>{isEraseModeOn ? t('drawing.carbonTitleWhileErasing') : t('drawing.carbonTitle')}</title>
            </circle>
          ))}
          {placeAtomsAroundCarbons(skeletonToDraw)
            .filter((outerAtom) => outerAtom.symbol !== 'H')
            .map((group) => {
              const title = <title>{isEraseModeOn ? t('drawing.groupTitleWhileErasing') : t('drawing.groupTitle')}</title>;
              // In the skeletal formula a group is a label, so its hydrogens can't be grabbed on their own.
              const hydrogensOfGroup = [
                [group.hydrogenPositionX, group.hydrogenPositionY],
                [group.secondHydrogenPositionX, group.secondHydrogenPositionY],
              ].filter(([x]) => x !== undefined && isShowingDisplayedFormula);
              return (
                <g key={`grab-${group.outerAtomId}`} className="grab-target grab-target--group">
                  <circle
                    data-group-carbon-id={group.carbonAtomId}
                    data-group-index={group.groupIndex}
                    data-group-place={group.place}
                    cx={group.positionX}
                    cy={group.positionY}
                    r={circleRadiusOfOuterAtom(group.symbol) + 3}
                  >
                    {title}
                  </circle>
                  {hydrogensOfGroup.map(([x, y], hydrogenIndex) => (
                    <circle
                      key={hydrogenIndex}
                      data-group-carbon-id={group.carbonAtomId}
                      data-group-index={group.groupIndex}
                      data-group-place={group.place}
                      data-group-hydrogen-index={hydrogenIndex}
                      cx={x}
                      cy={y}
                      r={HYDROGEN_CIRCLE_RADIUS + 3}
                    >
                      {title}
                    </circle>
                  ))}
                </g>
              );
            })}
          {skeletonToDraw.carbonCarbonBonds.filter(isLinkBond).map((bond) => {
            const { atomX, atomY, hydrogenX, hydrogenY } = placeLinkAtomOfBond(skeletonToDraw, bond);
            const title = <title>{isEraseModeOn ? t('drawing.linkAtomTitleWhileErasing') : t('drawing.linkAtomTitle')}</title>;
            return (
              <g key={`grab-link-C${bond.firstAtomId}-C${bond.secondAtomId}`} className="grab-target grab-target--link">
                <circle data-link-first-atom-id={bond.firstAtomId} data-link-second-atom-id={bond.secondAtomId} cx={atomX} cy={atomY} r={OXYGEN_CIRCLE_RADIUS + 3}>
                  {title}
                </circle>
                {hydrogenX !== undefined && isShowingDisplayedFormula && (
                  <circle
                    data-link-first-atom-id={bond.firstAtomId}
                    data-link-second-atom-id={bond.secondAtomId}
                    data-link-hydrogen=""
                    cx={hydrogenX}
                    cy={hydrogenY}
                    r={HYDROGEN_CIRCLE_RADIUS + 3}
                  >
                    {title}
                  </circle>
                )}
              </g>
            );
          })}
        </g>

        {atomDropPreview?.outerAtom && (
          <g className="placement-preview">
            <OuterAtomDrawing outerAtom={atomDropPreview.outerAtom} carbonPoint={atomDropPreview.carbonPoint} />
          </g>
        )}

        {atomDropPreview?.bond && (
          <g className="placement-preview">
            <LinkAtomDrawing carbonSkeleton={carbonSkeleton} bond={atomDropPreview.bond} />
          </g>
        )}

        {joiningPlan && (
          <g className={`placement-preview ${joiningPlan.canJoin ? '' : 'placement-preview--not-allowed'}`}>
            <line
              className="placement-preview__bond"
              x1={findCarbonAtomById(skeletonToDraw, joiningPlan.fromAtomId).positionX}
              y1={findCarbonAtomById(skeletonToDraw, joiningPlan.fromAtomId).positionY}
              x2={findCarbonAtomById(skeletonToDraw, joiningPlan.toAtomId).positionX}
              y2={findCarbonAtomById(skeletonToDraw, joiningPlan.toAtomId).positionY}
            />
          </g>
        )}

        {placementPlan && (
          <g className={`placement-preview ${placementPlan.canPlace ? '' : 'placement-preview--not-allowed'}`}>
            {carbonThePreviewWouldBondTo && (
              <line
                className="placement-preview__bond"
                x1={carbonThePreviewWouldBondTo.positionX}
                y1={carbonThePreviewWouldBondTo.positionY}
                x2={pointerPoint.x}
                y2={pointerPoint.y}
              />
            )}
            <AtomCircle
              elementSymbol="C"
              centreX={pointerPoint.x}
              centreY={pointerPoint.y}
              radius={CARBON_CIRCLE_RADIUS}
              tooltip={placementPlan.canPlace ? t('drawing.releaseToPlaceCarbon') : t(placementPlan.reasonCannotPlace)}
            />
          </g>
        )}
      </svg>

      {drawingIsEmpty && (
        <p className="molecule-canvas__empty-message">{t('drawing.emptyDrawing')}</p>
      )}

      {pointerHint && (!dragKind || dragKind === 'dropping') && (
        <p className="molecule-canvas__pointer-hint" style={{ left: pointerHint.left, top: pointerHint.top }}>
          {chooseHintText()}
        </p>
      )}

      {joiningPlan && (
        <p className="molecule-canvas__pointer-hint" style={{ left: joiningPlan.left, top: joiningPlan.top }}>
          {t(joiningPlan.hintKey)}
        </p>
      )}

      {heldBackHint && !joiningPlan && (
        <p className="molecule-canvas__pointer-hint" style={{ left: heldBackHint.left, top: heldBackHint.top }}>
          {t('drawing.wouldChangeEOrZ')}
        </p>
      )}
    </div>
  );
}
