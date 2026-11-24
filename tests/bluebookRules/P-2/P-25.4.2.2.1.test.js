/**
 * P-25.4.2.2.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “A polyvalent bridge consisting of one atom (other than hydrogen) is named as a prefix based either
 * on a substitutive prefix to which the prefix ‘epi’ is added as described in P-25.4.2.1.4 or by
 * changing the ending ‘ano’ in the name of a divalent monoatomic bridge described in P-25.4.2.1.4 into
 * ‘eno’, for example ‘metheno’ from ‘methano’. Polyvalent bridges are enclosed within parentheses in
 * names of bridged fused systems; …”
 *
 * The whole section is in the Blue Book.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-25.4.2.2.1', [
  { notNames: ['‘nitrilo’', 'see ref. 2', 'R-9.2.2'] },
  { name: 'epiazanetriyl [ref. 4, FR-8.3.2 (a)]', notNames: ['nitrilo'] },
  { notNames: ['phosphanetriyl', '[ref. 4 FR-8.3.2 (a)'] },
]);
