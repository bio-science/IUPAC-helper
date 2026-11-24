/**
 * P-93.5.6.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Type 1. Inherently chiral parent fullerenes.
 * The two fullerene molecules described in Section P-27, (C60-Ih)[5,6]fullerene and the
 * (C70-D5h(6))[5,6]fullerene, are achiral; they are not inherently chiral. …”
 *
 * The whole section is in the Blue Book.
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 1273, P-93.5.6.2, line 3. [corrected 7 November 2018]
 *     For ...(C76-D2)[5,6}fullerene shown below...
 *     read ...(C76-D2)[5,6]fullerene shown below...
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-93.5.6.2', [
  { pin: 'I (ᶠ,ˢA)-2H-5-aza-(C76-D2)[5,6]fullerene' },
  { pin: 'II (ᶠ,ˢC)-20-tert-butyl-20,21-dihydro(C76-D2)[5,6]fullerene' },
]);
