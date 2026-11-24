/**
 * P-65.6.3.3.2.2.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Esters that do not qualify for multiplicative names as described above are named as monoesters and
 * other ester components are expressed as prefixes by substitutive nomenclature. A multiplicative name
 * could be used in general nomenclature [see P-15.3.2 and P-51.3.3].”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-65.6.3.3.2.2.2', [
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650603z.gif', pin: 'methyl 2-chloro-5-[3-(ethoxycarbonyl)phenoxy]benzoate', otherNames: ['1′-ethyl 1-methyl 6-chloro-3,3′-oxydibenzoate'], notNames: ['ethyl 3-[4-chloro-3-(methoxycarbonyl)phenoxy]benzoate'] },
]);
