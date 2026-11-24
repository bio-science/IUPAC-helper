/**
 * P-56.4
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “THE ENDINGS ‘DIYL’ AND ‘YLIDENE’ VS. ‘YLENE’
 * Except for ‘methylene’, ‘ethylene’, and ‘phenylene’, the suffix ‘ylene’ previously used to describe
 * divalent substituent groups in which the free valences do not form a double bond, i.e., –E– or E<
 * was discarded in 1993 (ref. 2). Substituent groups in which the free valences form a double bond,
 * i.e., E= were described by the suffix ‘ylidene’. …”
 *
 * The whole section is in the Blue Book.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-56.4', [
  { preferredPrefix: 'methylene', notNames: ['methanediyl'] },
  { preferredPrefix: 'methylidene' },
  { preferredPrefix: 'ethane-1,2-diyl' },
  { preferredPrefix: 'ethylidene' },
  { preselectedPrefix: 'silanediyl', notNames: ['silylene', 'a name still used by CAS'] },
  { preselectedPrefix: 'germylidene', notNames: ['germylene', 'a name still used by CAS'] },
  { preselectedPrefix: 'boranediyl', notNames: ['borylene', 'a name still used by CAS'] },
  { preselectedPrefix: 'boranylidene', notNames: ['borylene', 'a name still used by CAS'] },
  { preselectedPrefix: 'stibanediyl', notNames: ['stibinediyl', 'stibylene', 'a name still used by CAS'] },
  { preselectedPrefix: 'stibanylidene', notNames: ['stibinylidene', 'stibylene', 'a name still used by CAS'] },
  { formula: '–NH-CO-NH–', name: 'carbonylbis(azanediyl) [preferred prefix,', notNames: ['carbonyldiimino', 'a name still used by CAS', 'ureylene'] },
]);
