/**
 * P-24.6.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “If there is a choice of locants, the lowest set of locants for all spiro atoms is selected when
 * compared in increasing numerical order and, if there is still a choice, in order of their citation
 * in the name (see P-24.2.4.1).
 * Note 1: The double set of brackets in the traditional name above occurs because the spiro name
 * requires them and brackets are used to enclose locants belonging to ring component names (see …”
 *
 * The whole section is in the Blue Book.
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 190, P-24.6.1, example. [modified 27 May 2020]
 *     For dispiro[[1,3]dioxolane-2,3′-bicyclo[3.2.1]octane-6′,2′′-[1,3]dioxolane] (I)
 *     read dispiro[[1,3]dioxolane-2,3′-bicyclo[3.2.1]octane-6′,2′′-[1,3]dioxolane] (I) (PIN)
 *     For dispiro[bicyclo[3.2.1]octane-2,3′:6′,2′′-bis([1,3]dioxolane) (PIN, see P-24.7.1)
 *     read [not dispiro[bicyclo[3.2.1]octane-3,2′:6,2′′-bis([1,3]dioxolane) (III) (see P-24.4.2)]
 *     Replace structures with:
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-24.6.1', [
  { pin: 'dispiro[[1,3]dioxolane-2,3′-bicyclo[3.2.1]octane-6′,2′′-[1,3]dioxolane] (I)', notNames: ['dispiro[[1,3]dioxolane-2,6′-bicyclo[3.2.1]octane-3′,2′′-[1,3]dioxolane] (II)', 'dispiro[bicyclo[3.2.1]octane-3,2′:6,2′′-bis([1,3]dioxolane) (III) (see P-24.4.2)'] },
]);
