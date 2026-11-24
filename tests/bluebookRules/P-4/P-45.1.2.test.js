/**
 * P-45.1.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “When two or more parent structures, rings, ring systems, or chains, satisfy the requirements for
 * multiplicative nomenclature (see P-15.3), the structure chosen as the parent structure to be
 * multiplied is the more numerous.”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 516, P-45.1.2, example 2. [corrected 13 February 2019]
 *     For N,N′-ethane-1,2-diylbis[N-(carboxymethyl)glycine]
 *     read N,N′-(ethane-1,2-diyl)bis[N-(carboxymethyl)glycine]
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-45.1.2', [
  // Drawn in the Blue Book.
  { drawing: 'P4gif/P450102a.gif', pin: '1,1′-[(phenylmethylene)bis(sulfanediylmethylene)]dibenzene' },
  // Drawn in the Blue Book.
  { drawing: 'P4gif/P450102b.gif', name: '2,2′,2′′,2′′′-(ethane-1,2-diyldinitrilo)tetraacetic acid' },
  // Drawn in the Blue Book.
  { drawing: 'P4gif/P450102c.gif', pin: '4,4′,4′′-(ethene-1,1,2-triyl)trianiline', notNames: ['4,4′-[2-(4-aminophenyl)ethene-1,1-diyl]dianiline'] },
  // Drawn in the Blue Book.
  { drawing: 'P4gif/P450102e.gif', pin: '1,1′,1′′-({[(diphenylmethyl)sulfanyl]diphenylmethoxy}methanetriyl)tribenzene', notNames: ['1,1′-({[diphenyl(triphenylmethoxy)methyl]sulfanyl}methylene)dibenzene'] },
]);
