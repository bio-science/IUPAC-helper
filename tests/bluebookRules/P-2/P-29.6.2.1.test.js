/**
 * P-29.6.2.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “The prefixes benzyl, benzylidene, and benzylidyne are preferred prefixes when unsubstituted.
 * However, these prefixes may be used in general nomenclature when substituted as follows:
 * (1) unlimited ring substitution;
 * (2) substitution on the α-position by characteristic atoms or groups that are compulsory
 * substituents (see Table 5.1) or by substituent groups that do not extend the chain.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-29.6.2.1', [
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P290602a.gif', preferredPrefix: 'bromo(4-methylphenyl)methyl' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P290602b.gif', preferredPrefix: '1-(4-methylphenyl)propyl', notNames: ['α-ethyl-4-methylbenzyl'] },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P290602c.gif', preferredPrefix: 'carboxy(4-carboxyphenyl)methylidene' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P290602d.gif', name: '3,4,5-trimethylbenzylidyne' },
]);
