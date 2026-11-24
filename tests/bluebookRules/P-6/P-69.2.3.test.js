/**
 * P-69.2.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Compounds with at least one metal-carbon single bond
 * Compounds are named by citing the names of ligands, including hydrogen atom(s), in alphanumerical
 * order, followed by the name of the metal. The presence of hydrogen attached to a metal atom must
 * always be indicated by the prefix ‘hydrido’.”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 1038, P-69.2.3, example 2. [corrected 28 October 2016]
 *     For (methyl)bis(triethylphosphane)platinum
 *     read acetyl(methyl)bis(triethylphosphane)platinum
 *   Page 1038, P-69.2.3, example 5. [corrected 9 April 2025]
 *     For (4-carboxyphenyl)methylmercury
 *     read (4-carboxyphenyl)(methyl)mercury
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-69.2.3', [
  { formula: '[Ti(CH3)Cl3]', name: 'trichlorido(methanido)titanium' },
  { formula: '[Pt{C(O)-CH3}(CH3)(PEt3)2]', name: 'acetyl(methanido)bis(triethylphosphane)platinum' },
  { formula: '[Os(CH2-CH3)(NH3)5]Cl', name: 'pentaammine(ethanido)osmium(1+) chloride' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P69230a.gif', name: 'dihydrido(naphthalen-2-ido)rhenium' },
]);
