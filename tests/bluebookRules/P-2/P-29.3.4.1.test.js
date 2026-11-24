/**
 * P-29.3.4.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “All mancude rings and ring systems are named by method (2) in P-29.2. When one hydrogen atom is
 * present, there is no difficulty in deriving a monovalent substituent. When no hydrogen atoms are
 * present or when an ‘ylidene’ type substituent group is needed, it is necessary to use ‘added
 * indicated hydrogen’ (see P-14.7). …”
 *
 * The whole section is in the Blue Book.
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-29.3.4.1', [
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P290304a.gif', preferredPrefix: 'naphthalen-2-yl' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P290304b.gif', preferredPrefix: 'pyridin-2-yl' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P290304c.gif', preferredPrefix: 'pyridin-1(4H)-yl' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P290304d.gif', preferredPrefix: 'imidazo[1,2-b][1,2,4]triazin-1(2H)-yl' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P290304e.gif', preferredPrefix: 'azulen-2(1H)-ylidene' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P290304f.gif', preferredPrefix: 'naphthalen-1(2H)-ylidene' },
]);
