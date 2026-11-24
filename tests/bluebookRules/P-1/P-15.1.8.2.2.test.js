/**
 * P-15.1.8.2.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Substitution rules for Type 2b retained names
 * Type 2b retained names include parent compounds explicitly or implicitly devoid of suffixes;
 * acetylene (PIN) and allene are examples. Substitution of these parent compounds is possible by using
 * specifically designated prefixes only.
 * The following characteristic groups cited can be used to substitute parent structures of Type 2b
 * (ring and the side chain if required): halides –Br, –Cl, –F, –I, pseudohalides –N3, –NCO (and …”
 *
 * The whole section is in the Blue Book.
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-15.1.8.2.2', [
  { formula: 'Br-C≡C-H', pin: 'bromoethyne', otherNames: ['bromoacetylene'] },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1501s.gif', pin: '1,3-dichloropropa-1,2-diene', otherNames: ['1,3-dichloroallene'] },
]);
