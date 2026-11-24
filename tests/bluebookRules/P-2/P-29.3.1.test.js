/**
 * P-29.3.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Substituent prefixes derived from mononuclear parent hydrides
 * Simple substituent groups derived from the mononuclear parent hydrides of carbon, silicon,
 * germanium, tin, and lead (boron is no longer included) traditionally have been named by method (1)
 * in P-29.2. Other mononuclear parent hydrides, i.e., those derived from O, F, Cl, Br, I, S, Se, Te,
 * N, P, As, Sb, Bi, B, Al, Ga, In, and Tl, are named by method (2) in P-29.2. …”
 *
 * The whole section is in the Blue Book.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-29.3.1', [
  { formula: 'CH3–', preferredPrefix: 'methyl' },
  { formula: 'GeH3–', preselectedPrefix: 'germyl' },
  { formula: 'BH2–', preselectedPrefix: 'boranyl', notNames: ['boryl'] },
  { formula: 'CH2=', preferredPrefix: 'methylidene' },
  { formula: 'SnH2=', preselectedPrefix: 'stannylidene' },
  { formula: 'BH=', preselectedPrefix: 'boranylidene', notNames: ['borylidene'] },
  { formula: 'HS–', preselectedPrefix: 'sulfanyl' },
  { formula: 'H2P–', preselectedPrefix: 'phosphanyl' },
  { formula: 'HAs=', preselectedPrefix: 'arsanylidene', notNames: ['arsinidine'] },
  { formula: 'H2Al–', preselectedPrefix: 'alumanyl' },
  { formula: 'HAl=', preselectedPrefix: 'alumanylidene' },
  { formula: 'S=', preselectedPrefix: 'sulfanylidene' },
  { formula: 'HSi≡', preselectedPrefix: 'silylidyne' },
  { formula: 'P≡', preselectedPrefix: 'phosphanylidyne', notNames: ['phosphinidyne'] },
]);
