/**
 * P-15.6.1.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “When necessary, the position of attachment of the side chain to the cyclic component is given by
 * the appropriate locant placed before the name of the cyclic component, unless locants for structural
 * features referring to the cyclic component, such as heteroatoms and indicated hydrogen, are already
 * there; in this case the locant follows the name of the cyclic component. Since the acyclic component
 * must terminate at the cyclic component, it is not necessary to give its locant of attachment. …”
 *
 * The whole section is in the Blue Book.
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-15.6.1.2', [
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1506c.gif', pin: '3-(naphthalen-2-yl)propan-1-ol', otherNames: ['naphthalene-2-propanol', '3-(2-naphthyl)propan-1-ol'] },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1506d.gif', name: '1,3-thiazole-2-acetic acid' },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1506e.gif', pin: '2-chloro-3-(naphthalen-2-yl)propan-1-ol', otherNames: ['β-chloronaphthalene-2-propanol'] },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1506f.gif', name: '5,6-dimethyl-2H-isoindole-2-acetic acid' },
]);
