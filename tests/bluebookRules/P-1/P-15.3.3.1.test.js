/**
 * P-15.3.3.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Unsymmetrical central multiplicative substituent groups are allowed if they are formed from a
 * multivalent substituent group to which subsequent groups are attached by identical bonds (single or
 * multiple). There is no limit to the number of individual groups in the full central substituent used
 * as a multiplier.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-15.3.3.1', [
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1503bq.gif', name: 'trimethyl[1-(trimethylsilyl)propan-2-yl]silane' },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1503br.gif', pin: '1,1′-(prop-1-ene-1,3-diyl)bis(4-bromobenzene)', otherNames: ['1-bromo-4-[3-(4-bromophenyl)prop-1-en-1-yl]benzene'], notNames: ['1-bromo-4-[3-(4-bromophenyl)prop-2-en-1-yl]benzene'] },
]);
