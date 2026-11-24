/**
 * P-63.2.2.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Retained names
 * Some contracted names are retained for R-O– substituent groups. They are used both as preferred
 * IUPAC prefixes and in general nomenclature; they are fully substitutable (with the exception of
 * tert-butoxy) and are considered as simple prefixes requiring the numerical prefixes ‘di’, ‘tri’,
 * etc. They are:
 * The following prefix is retained for use only in general nomenclature; no substitution is allowed:
 * The prefixes ‘sec-butoxy’ and ‘isobutoxy’ are no longer recommended:”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 701, P-63.2.2.2, last example on this page. [corrected 5 June 2019]
 *     For propan-2-yloxy
 *     read (propan-2-yl)oxy
 *   Page 702, P-63.2.2.2, example 1 on this page. [corrected 5 June 2019]
 *     For butan-2-yloxy
 *     read (butan-2-yl)oxy
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-63.2.2.2', [
  { formula: 'CH3-O–', preferredPrefix: 'methoxy' },
  { formula: 'CH3-CH2-O–', preferredPrefix: 'ethoxy' },
  { formula: 'CH3-[CH2]2-O–', preferredPrefix: 'propoxy' },
  { formula: 'CH3-[CH2]3-O–', preferredPrefix: 'butoxy' },
  { formula: 'C6H5-O–', preferredPrefix: 'phenoxy' },
  { formula: '(CH3)3C-O–', preferredPrefix: 'tert-butoxy' },
  { formula: '(CH3)2CH-O–', name: 'isopropoxy' },
  { formula: 'CH3-CH2-CH(CH3)-O–', name: '1-methylpropoxy', notNames: ['sec-butoxy'] },
  { formula: '(CH3)2CH-CH2-O–', preferredPrefix: '2-methylpropoxy', notNames: ['isobutoxy'] },
]);
