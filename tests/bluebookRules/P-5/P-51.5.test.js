/**
 * P-51.5
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “CONJUNCTIVE NOMENCLATURE vs. SUBSTITUTIVE NOMENCLATURE
 * When there is a choice between conjunctive nomenclature and substitutive nomenclature, preferred
 * IUPAC names are formed by using substitutive nomenclature (including multiplicative nomenclature and
 * skeletal replacement nomenclature when the conditions for their use are fulfilled) (see P-51).”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-51.5', [
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P510500a.gif', pin: '2,2′-(naphthalene-2,3-diyl)diacetic acid', otherNames: ['naphthalene-2,3-diacetic acid'] },
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P510500b.gif', pin: '2,2′,2′′-(benzene-1,3,5-triyl)triacetic acid', otherNames: ['benzene-1,3,5-triacetic acid'] },
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P510500c.gif', name: '2-(3-hydroxypropyl)quinoline-3-acetic acid' },
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P510500d.gif', pin: '3-[2,3-bis(carboxymethyl)naphthalen-1-yl]propanoic acid', otherNames: ['1-(2-carboxyethyl)naphthalene-2,3-diacetic acid'] },
]);
