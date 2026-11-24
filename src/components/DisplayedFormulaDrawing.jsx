/**
 * The displayed formula: every atom drawn as a circle, with a line for every bond (two lines
 * for a double bond). Hydrogens are added automatically to give every carbon 4 bonds, and
 * halogens (F, Cl, Br, I), hydroxyl groups (O-H) and the O of C=O are drawn in the places of
 * the hydrogens they replaced, as are NH2 groups (N with two H). The O of an ester and the NH
 * of an amide are drawn halfway along the bond they sit in, or wherever they have been moved
 * to, with a line from each carbon to them.
 *
 * While a new atom is being placed, the hydrogen (or group) it will replace is shown in red.
 */
import AtomCircle from './AtomCircle.jsx';
import { AMINO_GROUP, CARBONYL_OXYGEN, HYDROXYL_GROUP, findCarbonAtomById, isDoubleBond, isLinkBond, isTripleBond, linkAtomOf } from '../chemistry/carbonSkeleton.js';
import { circleRadiusOfOuterAtom, placeAtomsAroundCarbons, placeLinkAtomOfBond } from '../geometry/placeAtomsAroundCarbons.js';
import { listCarbonylDoubleBondLines, listDisplayedDoubleBondLines, listTripleBondLines } from '../geometry/doubleBondLines.js';
import { CARBON_CIRCLE_RADIUS, HYDROGEN_CIRCLE_RADIUS, NITROGEN_CIRCLE_RADIUS, OXYGEN_CIRCLE_RADIUS } from '../geometry/drawingDimensions.js';

/** The O of an ester or the NH of an amide, drawn on its bond (the bond's two lines meet underneath it). */
export function LinkAtomDrawing({ carbonSkeleton, bond }) {
  const { atomX, atomY, hydrogenX, hydrogenY } = placeLinkAtomOfBond(carbonSkeleton, bond);
  const isNitrogen = linkAtomOf(bond) !== 'O';
  return (
    <g>
      {isNitrogen && <line className="bond-line bond-line--to-hydrogen" x1={atomX} y1={atomY} x2={hydrogenX} y2={hydrogenY} />}
      {isNitrogen && <AtomCircle elementSymbol="H" centreX={hydrogenX} centreY={hydrogenY} radius={HYDROGEN_CIRCLE_RADIUS} />}
      <AtomCircle
        elementSymbol={isNitrogen ? 'N' : 'O'}
        centreX={atomX}
        centreY={atomY}
        radius={isNitrogen ? NITROGEN_CIRCLE_RADIUS : OXYGEN_CIRCLE_RADIUS}
      />
    </g>
  );
}

/**
 * A hydrogen, a halogen, a hydroxyl group as its oxygen and hydrogen, an NH2 group as its
 * nitrogen and two hydrogens, or the O of C=O, with the bonds from its carbon (two lines for C=O). Drawn red (with a tooltip) when it is about
 * to be replaced.
 */
export function OuterAtomDrawing({ outerAtom, carbonPoint, isBeingReplaced = false, tooltip }) {
  const isHydroxylGroup = outerAtom.symbol === HYDROXYL_GROUP;
  const isAminoGroup = outerAtom.symbol === AMINO_GROUP;
  const hydrogensOfGroup = [];
  if (outerAtom.hydrogenPositionX !== undefined) hydrogensOfGroup.push({ x: outerAtom.hydrogenPositionX, y: outerAtom.hydrogenPositionY });
  if (outerAtom.secondHydrogenPositionX !== undefined) hydrogensOfGroup.push({ x: outerAtom.secondHydrogenPositionX, y: outerAtom.secondHydrogenPositionY });
  const bondClassName = outerAtom.symbol === 'H' ? 'bond-line--to-hydrogen' : '';
  const replacedClassName = isBeingReplaced ? 'bond-line--being-replaced' : '';
  const atomPoint = { x: outerAtom.positionX, y: outerAtom.positionY };
  const bondLines =
    outerAtom.symbol === CARBONYL_OXYGEN
      ? listCarbonylDoubleBondLines(carbonPoint, atomPoint)
      : [{ x1: carbonPoint.x, y1: carbonPoint.y, x2: atomPoint.x, y2: atomPoint.y }];
  return (
    <g>
      {bondLines.map((line, lineIndex) => (
        <line key={lineIndex} className={`bond-line ${bondClassName} ${replacedClassName}`} {...line} />
      ))}
      {hydrogensOfGroup.map((hydrogen, hydrogenIndex) => (
        <line
          key={`line-${hydrogenIndex}`}
          className={`bond-line bond-line--to-hydrogen ${replacedClassName}`}
          x1={outerAtom.positionX}
          y1={outerAtom.positionY}
          x2={hydrogen.x}
          y2={hydrogen.y}
        />
      ))}
      {hydrogensOfGroup.map((hydrogen, hydrogenIndex) => (
        <AtomCircle
          key={`H-${hydrogenIndex}`}
          elementSymbol="H"
          centreX={hydrogen.x}
          centreY={hydrogen.y}
          radius={HYDROGEN_CIRCLE_RADIUS}
          extraClassNames={isBeingReplaced ? 'atom-circle--being-replaced' : ''}
          tooltip={tooltip}
        />
      ))}
      <AtomCircle
        elementSymbol={isHydroxylGroup ? 'O' : isAminoGroup ? 'N' : outerAtom.symbol}
        centreX={outerAtom.positionX}
        centreY={outerAtom.positionY}
        radius={circleRadiusOfOuterAtom(outerAtom.symbol)}
        extraClassNames={isBeingReplaced ? 'atom-circle--being-replaced' : ''}
        tooltip={tooltip}
      />
    </g>
  );
}

export default function DisplayedFormulaDrawing({ carbonSkeleton, outerAtomIdBeingReplaced = null, beingReplacedTooltip }) {
  const outerAtoms = placeAtomsAroundCarbons(carbonSkeleton);

  return (
    <g>
      {carbonSkeleton.carbonCarbonBonds.map((bond) => {
        const { firstAtomId, secondAtomId } = bond;
        if (isTripleBond(bond)) {
          return listTripleBondLines(carbonSkeleton, firstAtomId, secondAtomId).map((line, lineIndex) => (
            <line key={`bond-C${firstAtomId}-C${secondAtomId}-line-${lineIndex + 1}`} className="bond-line" {...line} />
          ));
        }
        if (isDoubleBond(bond)) {
          return listDisplayedDoubleBondLines(carbonSkeleton, firstAtomId, secondAtomId).map((line, lineIndex) => (
            <line key={`bond-C${firstAtomId}-C${secondAtomId}-line-${lineIndex + 1}`} className="bond-line" {...line} />
          ));
        }
        const firstCarbon = findCarbonAtomById(carbonSkeleton, firstAtomId);
        const secondCarbon = findCarbonAtomById(carbonSkeleton, secondAtomId);
        if (isLinkBond(bond)) {
          const { atomX, atomY } = placeLinkAtomOfBond(carbonSkeleton, bond);
          return [firstCarbon, secondCarbon].map((carbon) => (
            <line
              key={`bond-C${firstAtomId}-C${secondAtomId}-to-C${carbon.atomId}`}
              className="bond-line"
              x1={carbon.positionX}
              y1={carbon.positionY}
              x2={atomX}
              y2={atomY}
            />
          ));
        }
        return (
          <line
            key={`bond-C${firstAtomId}-C${secondAtomId}`}
            className="bond-line"
            x1={firstCarbon.positionX}
            y1={firstCarbon.positionY}
            x2={secondCarbon.positionX}
            y2={secondCarbon.positionY}
          />
        );
      })}

      {carbonSkeleton.carbonCarbonBonds.filter(isLinkBond).map((bond) => (
        <LinkAtomDrawing key={`link-C${bond.firstAtomId}-C${bond.secondAtomId}`} carbonSkeleton={carbonSkeleton} bond={bond} />
      ))}

      {outerAtoms.map((outerAtom) => {
        const carbon = findCarbonAtomById(carbonSkeleton, outerAtom.carbonAtomId);
        const isBeingReplaced = outerAtom.outerAtomId === outerAtomIdBeingReplaced;
        return (
          <OuterAtomDrawing
            key={outerAtom.outerAtomId}
            outerAtom={outerAtom}
            carbonPoint={{ x: carbon.positionX, y: carbon.positionY }}
            isBeingReplaced={isBeingReplaced}
            tooltip={isBeingReplaced ? beingReplacedTooltip : undefined}
          />
        );
      })}

      {carbonSkeleton.carbonAtoms.map((carbonAtom) => (
        <AtomCircle
          key={`C${carbonAtom.atomId}`}
          elementSymbol="C"
          centreX={carbonAtom.positionX}
          centreY={carbonAtom.positionY}
          radius={CARBON_CIRCLE_RADIUS}
        />
      ))}
    </g>
  );
}
