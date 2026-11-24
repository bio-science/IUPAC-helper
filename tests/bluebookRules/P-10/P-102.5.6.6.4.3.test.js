/**
 * P-102.5.6.6.4.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Derivatives of uronic acid are named as indicated in P-102 and P-65 and P-66.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-102.5.6.6.4.3', [
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P102566r.gif', name: 'ethyl (methyl β-D-glucopyranosid)uronate' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P102566s.gif', name: 'N,N-dimethyl(methyl β-D-glucopyranosid)uronamide' },
]);
