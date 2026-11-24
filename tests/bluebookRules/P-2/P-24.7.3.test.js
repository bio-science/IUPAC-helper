/**
 * P-24.7.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “If no decision can be attained by application of P-24.7.2 and if there is a choice of locants, the
 * lowest set of locants for all spiro atoms is selected when compared as a set in increasing numerical
 * order, and, if still undecided, in their order of their citation in the name. If a choice still
 * remains, criteria about heteroatoms and indicated hydrogen are taken into consideration (see Section
 * SP-3.2 in ref. 8).
 * Explanation: The locant set 1,1′′,2′,2′′′,4′,6′ in (I) is lower than 1,1′′,2′′′,4′,6′,8′ in (II),
 * 1,1′′,2′,2′′′,4′,8′ in (III), or 1,1′′,2′,2′′′,6′,8′ in (IV).”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 193, P-24.7.3, example. [modified 27 May 2020]
 *     Replace the structure of (I) with:
 *     replace the structure of (II) with:
 *     replace the structure of (III) with:
 *     replace the structure of (IV) with:
 *     for trispiro[cyclohexane-1,2′-[1,5]dithiocane-6′,1′′-cyclopentane-4′,2′′′-indene] (I) (PIN)
 *     read trispiro[bis(cyclohexane)-1,2′:6′,1′′-[1,5]dithiocane-4′,2′′′-indene] (I) (PIN)
 *     for trispiro[cyclohexane-1,8′-[1,5]dithiocane-4′,1′′-cyclopentane-6′,2′′′-indene] (II)
 *     read [not trispiro[bis(cyclohexane)-1,8′:4′,1′′-[1,5]dithiocane-6′,2′′′-indene] (II)
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-24.7.3', [
  { pin: 'trispiro[bis(cyclohexane)-1,2′:6′,1′′-[1,5]dithiocane-4′,2′′′-indene] (I)', notNames: ['trispiro[bis(cyclohexane)-1,8′:4′,1′′-[1,5]dithiocane-6′,2′′′-indene] (II)', 'trispiro[bis(cyclohexane)-1,4′:8′,1′′-[1,5]dithiocane-2′,2′′′-indene] (III)'] },
]);
