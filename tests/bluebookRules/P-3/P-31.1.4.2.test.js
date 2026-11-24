/**
 * P-31.1.4.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “If there is a choice of names and numbering, the following criteria are considered in order until a
 * decision is reached:
 * (1) a minimum number of compound locants. A compound locant is used for a double bond if the locants
 * of the atoms at each end of the bond do not differ by a value of one. …
 * Note: The seniority of single locants over compound locants was established in 1989 for numbering
 * steroids [see S3-2.5(2), ref. 16] and extended to von Baeyer systems in the 1999 publication on von
 * Baeyer nomenclature (see VB-8.3.1, ref. 7).
 * (2) when comparing double bond locants that also include compound locants, any number in parentheses
 * is ignored;
 * (3) if there is still a choice, low locants are selected considering all locants (including those in
 * parentheses) as a set.”
 *
 * The whole section is in the Blue Book.
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 381, P-31.1.4.2 (2), example 2. [modified 30 October 2019]
 *     For tricyclo[9.3.1.1⁴,⁸]hexadeca-1(15),4(16),5,7,11,13-hexaene (I) (PIN)
 *     read tricyclo[9.3.1.1⁴,⁸]hexadeca-1(15),4(16),5,7,11,13-hexaene (I)
 *     for tricyclo[9.3.1.1⁴,⁸]hexadeca-1(14),4(16)5,7,11(15),12-hexaene (IV
 *     read tricyclo[9.3.1.14,8]hexadeca-1(14),4(16),5,7,11(15),12-hexaene (IV);
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-31.1.4.2', [
  // Drawn in the Blue Book.
  { drawing: 'P3gif/P310104c.gif', pin: 'bicyclo[4.2.0]oct-6-ene', notNames: ['bicyclo[4.2.0]oct-1(8)-ene'] },
  // Drawn in the Blue Book.
  { drawing: 'P3gif/P310104d.gif', pin: 'bicyclo[6.5.1]tetradec-8-ene', notNames: ['bicyclo[6.5.1]tetradec-1(13)-ene'] },
  // Drawn in the Blue Book.
  { drawing: 'P3gif/P310104e.gif', pin: '1(1,4)-benzenacyclotridecaphane', otherNames: ['bicyclo[12.2.2]octadeca-1(16),14,17-triene'], notNames: ['bicyclo[12.2.2]octadeca-1(17),14(18),15-triene'] },
  // Drawn in the Blue Book.
  { drawing: 'P3gif/P310104f.gif', pin: 'bicyclo[4.1.0]hepta-1,3,5-triene', notNames: ['bicyclo[4.1.0]hepta-1(6),2,4-triene'] },
  { pin: '1(1,3)-benzena-4(1,3)-cyclohexanacyclohexaphane', otherNames: ['tricyclo[9.3.1.1⁴,⁸]hexadeca-1(15),11,13-triene (I)'], notNames: ['tricyclo[9.3.1.1⁴,⁸]hexadeca-4(16),5,7-triene (II)'] },
  { pin: '1,4(1,3)-dibenzenacyclohexaphane', otherNames: ['tricyclo[9.3.1.1⁴,⁸]hexadeca-1(15),4(16),5,7,11,13-hexaene (I)', 'not tricyclo[9.3.1.1⁴,⁸]hexadeca-1(15),4,6,8(16),11,13-hexaene (II)', 'nor tricyclo[9.3.1.1⁴,⁸]hexadeca-1(14),4,6,8(16),11(15),12-hexaene (III)', 'nor tricyclo[9.3.1.14,8]hexadeca-1(14),4(16),5,7,11(15),12-hexaene (IV)'] },
  // Drawn in the Blue Book.
  { drawing: 'P3gif/P310104o.gif', pin: 'tetracyclo[7.7.1.1³,⁷.1¹¹,¹⁵]nonadeca-3,11(18)-diene', notNames: ['tetracyclo[7.7.1.1³,⁷.1¹¹,¹⁵]nonadeca-3(19),11-diene'] },
]);
