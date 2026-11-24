/**
 * P-23.2.6.2.4
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “The superscript locants for the secondary bridges must be as low as possible when considered as a
 * set in ascending numerical order, the decision being made at the first point of difference.”
 *
 * The whole section is in the Blue Book.
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 161, P-23.2.6.2.4, example 2, left version. [modified 8 May 2019]
 *     For tricyclo[5.5.1.0³,¹¹]tridecane (PIN)
 *     read tricyclo[5.5.1.0³,¹¹]tridecane
 *     replace the structure with:
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-23.2.6.2.4', [
  { pin: 'tetracyclo[5.3.2.1²,⁴.0³,⁶]tridecane' },
  { pin: 'tricyclo[4.4.1.1¹,⁵]dodecane' },
]);
