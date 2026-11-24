/**
 * The skeletal formula: lines only. Every corner and every line end is a carbon,
 * and the hydrogens on carbon are not drawn. A double bond is drawn as two lines.
 * A halogen is drawn as a line to its symbol (Cl, Br ...), and a hydroxyl group as a line to
 * OH (written HO when it points left, so the O is next to the line), and C=O as two lines to
 * O, as in A-level textbooks. An NH2 group is a line to NH2 (H2N when it points left). The O of
 * an ester and the NH of an amide are written halfway along their bond, with a gap in the line
 * around them.
 *
 * The lines join the same positions as the displayed formula, so switching views
 * keeps the shape exactly as the student arranged it.
 */
import { AMINO_GROUP, CARBONYL_OXYGEN, HYDROXYL_GROUP, countAtomsInMolecule, findCarbonAtomById, isDoubleBond, isLinkBond, isTripleBond, linkAtomOf } from '../chemistry/carbonSkeleton.js';
import { formatMolecularFormula } from '../chemistry/molecularFormula.js';
import { placeAtomsAroundCarbons, placeLinkAtomOfBond } from '../geometry/placeAtomsAroundCarbons.js';
import { listCarbonylDoubleBondLines, listSkeletalDoubleBondLines, listTripleBondLines } from '../geometry/doubleBondLines.js';
import { pointAtAngleAndDistance, angleFromPointToPoint, distanceBetweenPoints } from '../geometry/vectorMaths.js';

/** How far short of a group's symbol its line stops, so the line doesn't run into the letters. */
const GAP_BEFORE_GROUP_SYMBOL = 15;

/** About half the width of one letter of a group's symbol, so "OH" can be lined up by its O. */
const HALF_A_LETTER = 8;

/**
 * How a group's symbol is written and lined up. Usually centred on its position, but OH
 * pointing sideways is lined up so its O sits there: "OH" to the right, "HO" to the left.
 */
function describeGroupLabel(symbol, carbonPoint, groupPoint) {
  const direction = angleFromPointToPoint(carbonPoint, groupPoint);
  if (symbol !== HYDROXYL_GROUP && symbol !== AMINO_GROUP) return { text: symbol, x: groupPoint.x, textAnchor: 'middle' };
  const [rightText, leftText] = symbol === HYDROXYL_GROUP ? ['OH', 'HO'] : ['NH2', 'H2N'];
  const pointsRight = Math.abs(direction) < 60;
  const pointsLeft = Math.abs(direction) > 120;
  if (pointsRight) return { text: rightText, x: groupPoint.x - HALF_A_LETTER, textAnchor: 'start' };
  if (pointsLeft) return { text: leftText, x: groupPoint.x + HALF_A_LETTER, textAnchor: 'end' };
  return { text: rightText, x: groupPoint.x, textAnchor: 'middle' };
}

/** A group's text, with the 2 of NH2 as a subscript. */
function GroupLabelText({ text }) {
  const parts = text.match(/[A-Za-z]+|\d+/g) ?? [];
  return parts.map((part, index) =>
    /\d/.test(part) ? (
      <tspan key={index} baselineShift="sub" fontSize="0.7em">
        {part}
      </tspan>
    ) : (
      part
    ),
  );
}

/** How far either side of an ester's O or an amide's NH its bond line stops. */
const GAP_AROUND_LINK_ATOM = 16;

/** A formula such as CH2Cl2, with the numbers as subscripts. */
function FormulaLabel({ formulaText, x, y }) {
  const lettersAndNumbers = formulaText.match(/[A-Za-z]+|\d+/g) ?? [];
  return (
    <text className="skeletal-formula-label" x={x} y={y} textAnchor="middle" dominantBaseline="central">
      {lettersAndNumbers.map((part, index) =>
        /\d/.test(part) ? (
          <tspan key={index} baselineShift="sub" fontSize="0.7em">
            {part}
          </tspan>
        ) : (
          part
        ),
      )}
    </text>
  );
}

export default function SkeletalFormulaDrawing({ carbonSkeleton }) {
  // A single carbon has no lines to draw, so it is written as a formula: CH4, CH3Cl, CCl4 ...
  if (carbonSkeleton.carbonAtoms.length === 1) {
    const onlyCarbon = carbonSkeleton.carbonAtoms[0];
    return <FormulaLabel formulaText={formatMolecularFormula(countAtomsInMolecule(carbonSkeleton))} x={onlyCarbon.positionX} y={onlyCarbon.positionY} />;
  }

  const positionById = new Map(carbonSkeleton.carbonAtoms.map((carbonAtom) => [carbonAtom.atomId, carbonAtom]));
  const groups = placeAtomsAroundCarbons(carbonSkeleton).filter((outerAtom) => outerAtom.symbol !== 'H');

  return (
    <g>
      {carbonSkeleton.carbonCarbonBonds.map((bond) => {
        const { firstAtomId, secondAtomId } = bond;
        if (isTripleBond(bond)) {
          return listTripleBondLines(carbonSkeleton, firstAtomId, secondAtomId).map((line, lineIndex) => (
            <line key={`skeletal-bond-C${firstAtomId}-C${secondAtomId}-line-${lineIndex + 1}`} className="skeletal-bond-line" {...line} />
          ));
        }
        if (isDoubleBond(bond)) {
          return listSkeletalDoubleBondLines(carbonSkeleton, firstAtomId, secondAtomId).map((line, lineIndex) => (
            <line key={`skeletal-bond-C${firstAtomId}-C${secondAtomId}-line-${lineIndex + 1}`} className="skeletal-bond-line" {...line} />
          ));
        }
        const firstCarbon = positionById.get(firstAtomId);
        const secondCarbon = positionById.get(secondAtomId);
        if (isLinkBond(bond)) {
          const { atomX, atomY } = placeLinkAtomOfBond(carbonSkeleton, bond);
          const middle = { x: atomX, y: atomY };
          const lineTo = (carbon) => {
            const carbonPoint = { x: carbon.positionX, y: carbon.positionY };
            const end = pointAtAngleAndDistance(middle, angleFromPointToPoint(middle, carbonPoint), GAP_AROUND_LINK_ATOM);
            return { x1: carbonPoint.x, y1: carbonPoint.y, x2: end.x, y2: end.y };
          };
          return (
            <g key={`skeletal-bond-C${firstAtomId}-C${secondAtomId}`}>
              <line className="skeletal-bond-line" {...lineTo(firstCarbon)} />
              <line className="skeletal-bond-line" {...lineTo(secondCarbon)} />
              <text className="skeletal-group-label" x={atomX} y={atomY} textAnchor="middle" dominantBaseline="central">
                {linkAtomOf(bond)}
              </text>
            </g>
          );
        }
        return (
          <line
            key={`skeletal-bond-C${firstAtomId}-C${secondAtomId}`}
            className="skeletal-bond-line"
            x1={firstCarbon.positionX}
            y1={firstCarbon.positionY}
            x2={secondCarbon.positionX}
            y2={secondCarbon.positionY}
          />
        );
      })}

      {groups.map((group) => {
        const carbon = findCarbonAtomById(carbonSkeleton, group.carbonAtomId);
        const carbonPoint = { x: carbon.positionX, y: carbon.positionY };
        const groupPoint = { x: group.positionX, y: group.positionY };
        const lineEnd = pointAtAngleAndDistance(
          carbonPoint,
          angleFromPointToPoint(carbonPoint, groupPoint),
          distanceBetweenPoints(carbonPoint, groupPoint) - GAP_BEFORE_GROUP_SYMBOL,
        );
        const label = describeGroupLabel(group.symbol, carbonPoint, groupPoint);
        const bondLines =
          group.symbol === CARBONYL_OXYGEN
            ? listCarbonylDoubleBondLines(carbonPoint, lineEnd)
            : [{ x1: carbonPoint.x, y1: carbonPoint.y, x2: lineEnd.x, y2: lineEnd.y }];
        return (
          <g key={`skeletal-${group.outerAtomId}`}>
            {bondLines.map((line, lineIndex) => (
              <line key={lineIndex} className="skeletal-bond-line" {...line} />
            ))}
            <text className="skeletal-group-label" x={label.x} y={groupPoint.y} textAnchor={label.textAnchor} dominantBaseline="central">
              <GroupLabelText text={label.text} />
            </text>
          </g>
        );
      })}
    </g>
  );
}
