/**
 * What a naming step is about, marked on the drawing underneath the molecule: a soft band
 * along each of its bonds and a ring round each of its carbons and groups, the same in the
 * displayed and skeletal formulae. For the numbering step, each main chain carbon also gets
 * its number. The step comes from listNamingSteps.js.
 */
import { findBondBetween, findCarbonAtomById, isLinkBond } from '../chemistry/carbonSkeleton.js';
import { placeAtomsAroundCarbons, placeLinkAtomOfBond } from '../geometry/placeAtomsAroundCarbons.js';
import { CARBON_CIRCLE_RADIUS } from '../geometry/drawingDimensions.js';

/** How far past the edge of an atom its ring is drawn. */
const RING_MARGIN = 9;

/** Where a carbon's number sits, from its centre: on the edge of its circle, up and to the right. */
const LOCANT_OFFSET = { x: CARBON_CIRCLE_RADIUS * 0.95, y: -CARBON_CIRCLE_RADIUS * 0.95 };

export function NamingStepHighlight({ carbonSkeleton, namingStep }) {
  const carbonPoint = (atomId) => {
    const carbonAtom = findCarbonAtomById(carbonSkeleton, atomId);
    return carbonAtom ? { x: carbonAtom.positionX, y: carbonAtom.positionY } : null;
  };
  const groupAtoms = placeAtomsAroundCarbons(carbonSkeleton).filter((outerAtom) =>
    namingStep.groups.some(({ carbonAtomId, symbol }) => outerAtom.carbonAtomId === carbonAtomId && outerAtom.symbol === symbol),
  );

  return (
    <g className="naming-step-highlight" aria-hidden="true">
      {namingStep.bonds.map(({ firstAtomId, secondAtomId }) => {
        const [first, second] = [carbonPoint(firstAtomId), carbonPoint(secondAtomId)];
        if (!first || !second) return null;
        // A bond with an O or NH in it bends wherever that atom has been moved to.
        const bond = findBondBetween(carbonSkeleton, firstAtomId, secondAtomId);
        if (bond && isLinkBond(bond)) {
          const { atomX, atomY } = placeLinkAtomOfBond(carbonSkeleton, bond);
          return (
            <polyline
              key={`bond-${firstAtomId}-${secondAtomId}`}
              className="naming-step-highlight__bond"
              points={`${first.x},${first.y} ${atomX},${atomY} ${second.x},${second.y}`}
            />
          );
        }
        return (
          <line key={`bond-${firstAtomId}-${secondAtomId}`} className="naming-step-highlight__bond" x1={first.x} y1={first.y} x2={second.x} y2={second.y} />
        );
      })}
      {groupAtoms.map((outerAtom) => {
        const carbon = carbonPoint(outerAtom.carbonAtomId);
        return (
          <g key={outerAtom.outerAtomId}>
            <line className="naming-step-highlight__bond" x1={carbon.x} y1={carbon.y} x2={outerAtom.positionX} y2={outerAtom.positionY} />
            <circle className="naming-step-highlight__atom" cx={outerAtom.positionX} cy={outerAtom.positionY} r={CARBON_CIRCLE_RADIUS + RING_MARGIN} />
          </g>
        );
      })}
      {namingStep.atomIds.map((atomId) => {
        const point = carbonPoint(atomId);
        return point && <circle key={`atom-${atomId}`} className="naming-step-highlight__atom" cx={point.x} cy={point.y} r={CARBON_CIRCLE_RADIUS + RING_MARGIN} />;
      })}
    </g>
  );
}

/** The number of each main chain carbon, drawn over the molecule so it can be read. */
export function NamingStepLocants({ carbonSkeleton, namingStep }) {
  if (!namingStep.atomLocants) return null;
  return (
    <g className="naming-step-locants" aria-hidden="true">
      {namingStep.atomLocants.map(({ atomId, locant }) => {
        const carbonAtom = findCarbonAtomById(carbonSkeleton, atomId);
        if (!carbonAtom) return null;
        const x = carbonAtom.positionX + LOCANT_OFFSET.x;
        const y = carbonAtom.positionY + LOCANT_OFFSET.y;
        return (
          <g key={atomId}>
            <circle className="naming-step-locants__badge" cx={x} cy={y} r={11} />
            <text className="naming-step-locants__number" x={x} y={y} textAnchor="middle" dominantBaseline="central">
              {locant}
            </text>
          </g>
        );
      })}
    </g>
  );
}
