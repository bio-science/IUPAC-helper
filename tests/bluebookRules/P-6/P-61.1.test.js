/**
 * P-61.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “GENERAL METHODOLOGY
 * Substitutive nomenclature is based on the substitutive operation involving the exchange of one or
 * more hydrogen atoms of a parent hydride or parent compound for another atom or group. This process
 * is expressed by either a prefix or suffix denoting the atom or group being introduced. Substitution
 * is not possible when no hydrogen atoms are present. However, if hydrogen atoms are added to a
 * structure by an additive operation (to a double bond, for example), substitution then becomes
 * possible. …
 * This is a change from previous recommendations. In these recommendations the prefix ‘hydro’ is
 * detachable but not alphabetized with other substituent prefixes. …
 * The seniority order of parent structures, the principal chain, and the senior ring system are chosen
 * in accordance with Rule P-44.
 * When there is a choice for numbering, the general rule described in P-14.4 is applied. …
 * (a) fixed numbering, as for naphthalene, bicyclo[2.2.2]octane, etc.;
 * (b) heteroatoms in heterocycles and in acyclic parent structures;
 * …”
 *
 * The whole section is in the Blue Book.
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-61.1', [
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P610100a.gif', pin: 'naphthalene' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P610100b.gif', pin: '4a,8a-dihydronaphthalene' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P610100c.gif', pin: '4a-bromo-4a,8a-dihydronaphthalene' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P610100d.gif', pin: '4a-bromo-8a-chloro-4a,8a-dihydronaphthalene' },
]);
