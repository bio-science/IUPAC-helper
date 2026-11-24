/**
 * P-24.7.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “When two or more different terminal ring components are spirofused to a central component, the
 * alphabetically earliest is cited first with a multiplicative prefix, if appropriate, followed by the
 * central ring component and then the remaining terminal ring component(s) in alphabetical order. The
 * first cited ring component, or one of the first cited ring components, is spirofused to the lowest
 * numbered spiro position of the central ring component; …
 * Note: The double set of brackets in this name occurs because the spiro name requires them and
 * brackets are used to enclose locants belonging to ring component names (see P-16.5.2.2). …
 * Explanation: the first cited component is the alphabetically earliest, 1,4-benzodioxine, which
 * determines the locant 1′ of the central ring component cycloheptane. …
 * Explanation: The locant 3′ in (I) is lower than 5′ in (II) for the first cited ring component
 * following the citation of the central ring component.”
 *
 * The whole section is in the Blue Book.
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 192, P-24.7.2, example (3). [modified 27 May 2020]
 *     Replace the structures with:
 *     for trispiro[bis(cyclopentane)-1,1′:1,4′-cycloheptane-6′,2′′′-[1,4]-dioxolane] (I) (PIN)
 *     read 3′′′H-trispiro[bis(cyclopentane)-1,1′:4′,1′′-cycloheptane-6′,2′′′-[1,4]benzodioxine] (I)
 *     (PIN)
 *     for (not trispiro[bis(cyclopentane)-1,1′:1,5′-cycloheptane-3′,2′′′-[1,4]-dioxolane] (II)
 *     read [not 3′′′H-trispiro[bis(cyclopentane)-1,1′:5′,1′′-cycloheptane-3′,2′′′-[1,4]benzodioxine]
 *     (II)]
 *   Page 192, P-24.7.2, example (3). [corrected 11 November 2020]
 *     Replace the structures with:
 *     Replace the text by:
 *     3H-trispiro[[1,4]benzodioxine-2,1′-cycloheptane-3′,1′′:5′,1′′′-bis(cyclopentane)] (I) (PIN)
 *     {not 3H-trispiro[[1,4]benzodioxine-2,1′-cycloheptane-4′,1′′:6′,1′′′-bis(cyclopentane)] (II)}
 *     Explanation: the first cited component is the alphabetically earliest 1,4-benzodioxine which
 *     determines the locant 1′ of the central ring component cycloheptane. The set of spirofusion
 *     locants 1′,3′,5′ in (I) is lower than 1′,4′,6′ in (II).
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-24.7.2', [
  { pin: 'trispiro[[1,3]benzodioxole-2,1′-cyclohexane-2′,2′′:4′,2′′′-bis([1,3]dioxolane)]' },
  { pin: 'trispiro[cyclohexane-1,2′-[1,5]dithiocane-6′,1′′-cyclopentane-4′,2′′′-indene]' },
  { pin: '3H-trispiro[[1,4]benzodioxine-2,1′-cycloheptane-3′,1′′:5′,1′′′-bis(cyclopentane)] (I)', otherNames: ['{not 3H-trispiro[[1,4]benzodioxine-2,1′-cycloheptane-4′,1′′:6′,1′′′-bis(cyclopentane)] (II)}'] },
  { pin: 'trispiro[cyclopentane-1,1′-cyclohexane-3′,2′′-imidazole-5′,1′′′-indene] (I)', notNames: ['trispiro[cyclopentane-1,1′-cyclohexane-5′,2′′-imidazole-3′,1′′′-indene] (II'] },
]);
