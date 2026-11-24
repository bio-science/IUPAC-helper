/**
 * P-16.6.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Lower case italic letters are used in descriptors for fusion sites in names of fused ring systems.
 * The letters o, m, and p have been used in place of ortho, meta, and para, respectively, to designate
 * the 1,2-, 1,3-, and 1,4- isomers of disubstituted benzene. …”
 *
 * The whole section is in the Blue Book.
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 121, P-16.6.1, example 2. [corrected 23 December 2020]
 *     Delete this example.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-16.6.1', [
  { pin: 'selenopheno[2,3-b]selenophene' },
  { pin: '1,2-xylene', otherNames: ['o-xylene (P-22.1.3)', '1,2-dimethylbenzene'] },
]);
