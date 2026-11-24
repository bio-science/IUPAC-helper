/**
 * P-62.3.1.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Imino groups attached to heteroatoms (heteroimines)
 * Compounds containing the group X=NH, where X is a heteroatom and =NH the principal characteristic
 * group, are named as imines; the prefix ‘imino’ is used to express the =NH group when another
 * characteristic group has seniority over imines.”
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-62.3.1.3', [
  { formula: 'CH3-P=NH', pin: '1-methylphosphanimine' },
  { formula: '(CH3)2Si=N-C6H5', pin: '1,1-dimethyl-N-phenylsilanimine' },
  { formula: 'CH3-N=SiH-CH2-CO-O-CH3', pin: 'methyl [(methylimino)silyl]acetate' },
]);
