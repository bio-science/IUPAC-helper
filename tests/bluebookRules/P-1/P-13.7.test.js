/**
 * P-13.7
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “THE FUSION OPERATION
 * The fusion operation involves the union of two rings or ring systems so that atoms or atoms and
 * bonds are common to each. Spiro systems have one atom in common; fused ring systems have both atoms
 * and bonds in common.”
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-13.7', [
  { pin: 'cyclopentane' },
  { pin: '1H-indene' },
  { pin: 'spiro[cyclopentane-1,1′-indene]' },
  { pin: 'cycloocta-1,3,5,7-tetraene', otherNames: ['8-annulene'] },
  { pin: 'benzene' },
]);
