/**
 * One atom drawn as a particle: a circle with its element symbol inside.
 * Colours and outline styles come from app.css (.atom-circle--carbon, --hydrogen, --oxygen, --chlorine ...).
 */
const CLASS_NAME_BY_ELEMENT = {
  C: 'atom-circle--carbon',
  H: 'atom-circle--hydrogen',
  O: 'atom-circle--oxygen',
  N: 'atom-circle--nitrogen',
  F: 'atom-circle--fluorine',
  Cl: 'atom-circle--chlorine',
  Br: 'atom-circle--bromine',
  I: 'atom-circle--iodine',
};

export default function AtomCircle({ elementSymbol, centreX, centreY, radius, extraClassNames = '', tooltip }) {
  const elementClassName = CLASS_NAME_BY_ELEMENT[elementSymbol];

  return (
    <g className={`atom-circle ${elementClassName} ${extraClassNames}`}>
      {tooltip && <title>{tooltip}</title>}
      <circle cx={centreX} cy={centreY} r={radius} />
      <text x={centreX} y={centreY} textAnchor="middle" dominantBaseline="central" fontSize={radius * 1.1}>
        {elementSymbol}
      </text>
    </g>
  );
}
