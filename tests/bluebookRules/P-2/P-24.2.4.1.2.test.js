/**
 * P-24.2.4.1.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “If there is a choice of name or numbering due to heteroatoms, the following criteria are considered
 * in order until a decision is reached:
 * (a) low locants are allocated to heteroatoms as a set regardless of the kind of heteroatom;
 * (b) if there is still a choice, low locants are assigned in accord with the following decreasing
 * seniority order of heteroatoms: F > Cl > Br > I > O > S > Se > Te > N > P > As > Sb > Bi > Si > Ge >
 * …”
 *
 * The whole section is in the Blue Book.
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-24.2.4.1.2', [
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P240204e.gif', pin: '9-oxa-6-azaspiro[4.5]decane' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P240204f.gif', pin: '7-thia-9-azaspiro[4.5]decane' },
]);
