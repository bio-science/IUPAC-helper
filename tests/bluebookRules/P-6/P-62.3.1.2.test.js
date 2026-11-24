/**
 * P-62.3.1.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “The prefix ‘imino’ for =NH is used in presence of characteristic groups having seniority over
 * imines. In multiplicative nomenclature, the prefix ‘azanylylidene’ is used for –N=. Substituent
 * groups attached to rings, ring systems or heteroatoms of the type R-(C=NH)–, where R– is a ring or a
 * chain, are named as acyl groups (see imidic acids, P-65.1.3.1 and acyl groups P-65.2).”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-62.3.1.2', [
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P620301h.gif', pin: '3,5-diiminocyclohexan-1-one' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P620301i.gif', pin: '3-(2-iminopropyl)cyclohexane-1-carboxylic acid' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P620301j.gif', pin: '5-iminopyrrolidin-2-one', notNames: ['5-imino-2-pyrrolidone'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P620301k.gif', pin: '4-iminocyclohexa-2,5-dien-1-one', notNames: ['p-benzoquinone monoimine'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P620301l.gif', pin: '3,3′-[ethane-1,2-diylbis(azanylylidene)]dipropanoic acid' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P620301m.gif', pin: '2,2′-[ethane-1,2-diylbis(azanylylidenemethanylylidene)]diphenol' },
]);
