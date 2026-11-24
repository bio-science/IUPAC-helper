/**
 * P-33.2.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Basic functional suffixes
 * Basic suffixes are those composed only of oxygen and/or nitrogen, with or without association with
 * carbon, as in the case of carboxylic acids, amides, nitriles and aldehydes, and also with sulfur to
 * denote sulfonic acids and sulfinic acids, and the corresponding amides and hydrazides. They are
 * listed in Table 3.3.
 * The suffix ‘peroxol’, for –OOH, has been added to the list of basic suffixes. …”
 *
 * The whole section is in the Blue Book.
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 408, P-33.2.1, Table 3.3 (7). [corrected 26 September 2018]
 *     For –CO-NNH2
 *     read –CO-NHNH2
 *   Page 408, P-33.2.1, Table 3.3 (8). [corrected 26 September 2018]
 *     For –(C)O-NNH2
 *     read –(C)O-NHNH2
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-33.2.1', [
  { suffix: 'sulfonic acid' },
  { suffix: 'sulfinic acid' },
  { suffix: 'one' },
  { suffix: 'peroxol' },
  { suffix: 'amine' },
  { suffix: 'imine' },
]);
