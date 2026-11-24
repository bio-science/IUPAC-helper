/** Shows a formula such as "C5H12" with the numbers written as subscripts: C₅H₁₂. */
export default function MolecularFormulaText({ formulaText }) {
  const lettersAndNumbers = formulaText.match(/[A-Za-z]+|\d+/g) ?? [];
  return (
    <span className="molecular-formula">
      {lettersAndNumbers.map((part, index) => (/\d/.test(part) ? <sub key={index}>{part}</sub> : <span key={index}>{part}</span>))}
    </span>
  );
}
