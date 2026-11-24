/**
 * P-106.3.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “In the presence of a characteristic group of higher priority than the phosphoric acid residue,
 * normal substitutive nomenclature principles are applied. Substitutive prefix names are derived from
 * the traditional names for the nucleoside monophosphates by replacing the ‘ic acid’ ending with ‘yl’,
 * for example, adenylyl and cytidylyl. Note that the substituent prefix name from inosinic acid is an
 * exception; …”
 *
 * The whole section is in the Blue Book.
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-106.3.3', [
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P106330a.gif', name: '3-(5′-guanylyloxy)benzoic acid' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P106330b.gif', name: '3′-O-phosphonato-5′-adenylyl sulfate' },
]);
