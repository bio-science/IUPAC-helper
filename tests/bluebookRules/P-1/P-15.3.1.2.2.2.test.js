/**
 * P-15.3.1.2.2.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “When polyvalent substituent groups of the ‘yl/ylidene’ type that have no locants and are cited in a
 * prescribed order are used in a multipart multiplicative substituent group, concatenation occurs by
 * adding a monovalent free valence of the ‘yl’ type to another monovalent free valence of the ‘yl’
 * type, and similarly for free valences of the ‘ylidene’ type.”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 73, P-15.3.1.2.2.2, example 2. [corrected 18 May 2023]
 *     For ethane-1,2-diylidenebis(azanylylideneoxy)
 *     read ethanediylidenebis(azanylylideneoxy)
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-15.3.1.2.2.2', [
  { formula: '–CH=N-O-N=CH–', preferredPrefix: 'oxybis(azanylylidenemethanylylidene)', notNames: ['oxybis(nitrilomethanylylidene)'] },
  { formula: '–O-N=CH-CH=N-O–', preferredPrefix: 'ethanediylidenebis(azanylylideneoxy)' },
  { formula: '–O-N=C=N-O–', preferredPrefix: 'methanediylidenebis(azanylylideneoxy)' },
  { formula: '=CH-N=C=N-CH=', preferredPrefix: 'methanediylidenebis(azanylylidenemethanylylidene)', notNames: ['methanediylidenebis(nitrilomethanylylidene)'] },
]);
