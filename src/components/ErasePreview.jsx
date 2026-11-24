/**
 * While Erase is on, everything a click would take away is marked in red over the molecule: the
 * carbons, the bonds, the groups (with their hydrogens) and any O or NH in a removed bond. In the
 * displayed formula the hydrogens on the removed carbons are marked too. What is removed comes
 * from listWhatErasingRemoves in carbonSkeleton.js.
 */
import { findBondBetween, findCarbonAtomById, isLinkBond } from '../chemistry/carbonSkeleton.js';
import { circleRadiusOfOuterAtom, placeAtomsAroundCarbons, placeLinkAtomOfBond } from '../geometry/placeAtomsAroundCarbons.js';
import { CARBON_CIRCLE_RADIUS, HYDROGEN_CIRCLE_RADIUS, OXYGEN_CIRCLE_RADIUS } from '../geometry/drawingDimensions.js';

/** How far past the edge of an atom its red mark is drawn. */
const MARK_MARGIN = 4;

/** The hydrogens drawn on an OH or NH2 group, as [x, y] points. */
function listHydrogensOfGroup(outerAtom) {
  return [
    [outerAtom.hydrogenPositionX, outerAtom.hydrogenPositionY],
    [outerAtom.secondHydrogenPositionX, outerAtom.secondHydrogenPositionY],
  ].filter(([x]) => x !== undefined);
}

export default function ErasePreview({ carbonSkeleton, removal, isShowingHydrogens }) {
  const carbonPoint = (atomId) => {
    const carbonAtom = findCarbonAtomById(carbonSkeleton, atomId);
    return { x: carbonAtom.positionX, y: carbonAtom.positionY };
  };
  const removedCarbonIds = new Set(removal.carbonAtomIds);
  const isGroupRemoved = (outerAtom) =>
    removal.groups.some(({ atomId, groupIndex }) => outerAtom.carbonAtomId === atomId && outerAtom.groupIndex === groupIndex);
  const outerAtoms = placeAtomsAroundCarbons(carbonSkeleton).filter((outerAtom) =>
    outerAtom.symbol === 'H' ? isShowingHydrogens && removedCarbonIds.has(outerAtom.carbonAtomId) : isGroupRemoved(outerAtom),
  );
  const hydrogenMark = (key, x, y) => <circle key={key} className="erase-preview__atom" cx={x} cy={y} r={HYDROGEN_CIRCLE_RADIUS + MARK_MARGIN} />;

  return (
    <g className="erase-preview" aria-hidden="true">
      {removal.bonds.map(({ firstAtomId, secondAtomId }) => {
        const [first, second] = [carbonPoint(firstAtomId), carbonPoint(secondAtomId)];
        const key = `bond-${firstAtomId}-${secondAtomId}`;
        const bond = findBondBetween(carbonSkeleton, firstAtomId, secondAtomId);
        if (!isLinkBond(bond)) {
          return <line key={key} className="erase-preview__bond" x1={first.x} y1={first.y} x2={second.x} y2={second.y} />;
        }
        // The O or NH in the bond goes with it.
        const { atomX, atomY, hydrogenX, hydrogenY } = placeLinkAtomOfBond(carbonSkeleton, bond);
        return (
          <g key={key}>
            <polyline className="erase-preview__bond" points={`${first.x},${first.y} ${atomX},${atomY} ${second.x},${second.y}`} />
            <circle className="erase-preview__atom" cx={atomX} cy={atomY} r={OXYGEN_CIRCLE_RADIUS + MARK_MARGIN} />
            {hydrogenX !== undefined && isShowingHydrogens && hydrogenMark('hydrogen', hydrogenX, hydrogenY)}
          </g>
        );
      })}
      {removal.linkAtoms.map(({ firstAtomId, secondAtomId }) => {
        const { atomX, atomY, hydrogenX, hydrogenY } = placeLinkAtomOfBond(carbonSkeleton, findBondBetween(carbonSkeleton, firstAtomId, secondAtomId));
        return (
          <g key={`link-${firstAtomId}-${secondAtomId}`}>
            <circle className="erase-preview__atom" cx={atomX} cy={atomY} r={OXYGEN_CIRCLE_RADIUS + MARK_MARGIN} />
            {hydrogenX !== undefined && isShowingHydrogens && hydrogenMark('hydrogen', hydrogenX, hydrogenY)}
          </g>
        );
      })}
      {outerAtoms.map((outerAtom) => {
        const carbon = carbonPoint(outerAtom.carbonAtomId);
        return (
          <g key={outerAtom.outerAtomId}>
            <line className="erase-preview__bond" x1={carbon.x} y1={carbon.y} x2={outerAtom.positionX} y2={outerAtom.positionY} />
            <circle className="erase-preview__atom" cx={outerAtom.positionX} cy={outerAtom.positionY} r={circleRadiusOfOuterAtom(outerAtom.symbol) + MARK_MARGIN} />
            {isShowingHydrogens && listHydrogensOfGroup(outerAtom).map(([x, y], hydrogenIndex) => hydrogenMark(hydrogenIndex, x, y))}
          </g>
        );
      })}
      {removal.carbonAtomIds.map((atomId) => {
        const point = carbonPoint(atomId);
        return <circle key={`carbon-${atomId}`} className="erase-preview__atom" cx={point.x} cy={point.y} r={CARBON_CIRCLE_RADIUS + MARK_MARGIN} />;
      })}
    </g>
  );
}
