/**
 * P-93.5.6.4
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Type 3. Substituted fullerenes noninherently chiral because of their substitution pattern.
 * Derivatives of achiral parent fullerenes in which a chiral substitution pattern on the fullerene is
 * due only to nonidentities among the substituents have a noninherently chiral substitution pattern.
 * The CIP system is used to rank substituents according to Sequence Rules 1 or 2 (see P-92.2 and
 * P-92.3). …
 * Explanation: This compound is chiral only because the substituents are constitutionally different.
 * …”
 *
 * The whole section is in the Blue Book.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-93.5.6.4', [
  { pin: '1-tert-butyl-7-(3,6-dicyclopropylcyclohepta-2,4,6-trien-1-yl)-1,7-dihydro(C60-Ih)[5,6]fullerene' },
]);
