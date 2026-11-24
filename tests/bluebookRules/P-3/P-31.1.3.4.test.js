/**
 * P-31.1.3.4
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Retained names.
 * Styrene, stilbene, and fulvene are the only retained names for parent hydrides containing a
 * monocyclic ring system and side-chain unsaturation. All are used only in general nomenclature. …”
 *
 * The whole section is in the Blue Book.
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-31.1.3.4', [
  // Drawn in the Blue Book.
  { drawing: 'P3gif/P310103n.gif', pin: 'ethenylbenzene', otherNames: ['styrene', 'vinylbenzene'] },
  // Drawn in the Blue Book.
  { drawing: 'P3gif/P310103o.gif', pin: '1,1′-(ethene-1,2-diyl)dibenzene', otherNames: ['stilbene'] },
  // Drawn in the Blue Book.
  { drawing: 'P3gif/P310103p.gif', pin: '5-methylidenecyclopenta-1,3-diene', otherNames: ['fulvene (no substitution)'] },
]);
