/**
 * P-68.3.1.3.6
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Carbodiazone [bis(diazenyl)methanone], HN=N-CO-N=NH
 * The compound HN=N-CO-N=NH is named systematically bis(diazenyl)methanone; its hydrocarbyl
 * derivatives are named substitutively. Such names are preferred IUPAC names over those denoted by the
 * retained name ‘carbodiazone’, which can be used in general nomenclature with full substitution
 * according to a special numbering. …
 * Chalcogen analogues of bis(diazenyl)methanone are also named systematically as
 * bis(diazenyl)methanethione, -selone, and -tellone, respectively. …”
 *
 * The whole section is in the Blue Book.
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 1014, P-68.3.1.3.6, second paragraph, line 3. [corrected 28 October 2016]
 *     For ...and telluro are used with the name carbadiazone in general nomenclature.
 *     read ...and telluro are used with the name carbodiazone in general nomenclature.
 *   Page 1014, P-68.3.1.3.6, box. [corrected 28 October 2016]
 *     Delete the box.
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-68.3.1.3.6', [
  { formula: 'HN=N-CO-N=NH', pin: 'bis(diazenyl)methanone', notNames: ['1,1′-carbonylbis(diazene)'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68313am.gif', name: 'carbodiazone' },
  { formula: 'HN=N-CS-N=NH', pin: 'bis(diazenyl)methanethione', otherNames: ['thiocarbodiazone'] },
  { formula: 'C6H5-N=N-CO-N=N-C6H5', pin: 'bis(phenyldiazenyl)methanone', otherNames: ['1,5-diphenylcarbodiazone'] },
]);
