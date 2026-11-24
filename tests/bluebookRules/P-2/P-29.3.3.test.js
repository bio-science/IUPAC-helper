/**
 * P-29.3.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Substituent prefixes derived from saturated cyclic parent hydrides
 * Names for monovalent substituent groups derived from cycloalkanes are formed traditionally by method
 * (1) in P-29.2. Names for all other substituent groups derived from saturated cyclic parent hydrides
 * are named by method (2) in P-29.2. Low locants are assigned to free valences ‘yl’, ‘ylidene’, and
 * ‘ylidyne’ in accordance with the numbering of the parent hydride. If there is a choice, the suffixes
 * are assigned low locants, in that order. …”
 *
 * The whole section is in the Blue Book.
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-29.3.3', [
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P290303a.gif', preferredPrefix: 'cyclohexyl' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P290303b.gif', preferredPrefix: 'cyclopentylidene' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P290303c.gif', preferredPrefix: 'cyclohexan-1-yl-2-ylidene' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P290303d.gif', preferredPrefix: 'cyclopentane-1,3-diyl' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P290303e.gif', preferredPrefix: 'phosphinane-3,5-diyl' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P290303f.gif', preferredPrefix: 'oxolan-3-yl-4-ylidene' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P290303g.gif', preferredPrefix: '1-oxacyclododecan-7-yl' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P290303h.gif', preferredPrefix: '2-thiabicyclo[2.2.2]octan-3-yl' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P290303i.gif', preferredPrefix: '2-phosphaspiro[4.5]decan-8-yl' },
]);
