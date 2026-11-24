/**
 * P-68.4.2.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Compounds of the type R-(chalcogen)x-H where x = 3, 4,..., that cannot be named as alcohols,
 * thiols, ethers, sulfides, hydroperoxides, peroxides, or their chalcogen analogues as described in
 * P-63 are named on the basis of the mononuclear parent hydrides ‘oxidane’, (H2O), ‘sulfane’ (H2S),
 * etc. and ‘dioxidane’ (HOOH) , ‘disulfane’ (HSSH), etc. They are also named using suffixes ‘ol’
 * (–OH), ‘thiol’ (–SH), etc. according to P-63.1.2 and ‘peroxol’ (–OOH), SO-thioperoxol (–SOH), etc.
 * …”
 *
 * The whole section is in the Blue Book.
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-68.4.2.2', [
  { formula: 'HS-OH', preselectedName: 'sulfanol', notNames: ['oxidanethiol'] },
  { formula: 'CH3-OO-SH', pin: 'methyldioxidanethiol' },
  { formula: 'CH3-OOO-SH', pin: 'methyltrioxidanethiol' },
  { formula: 'CH3-O-SOH', pin: 'methyloxidane-SO-thioperoxol' },
  { formula: 'CH3-SS-OH', pin: 'methyldisulfanol' },
  { formula: 'CH3-SSS-SeH', pin: 'methyltrisulfaneselenol' },
  { formula: 'CH3-OO-SSH', pin: 'methyldioxidanedithioperoxol' },
  { formula: 'CH3-O-S-SeSeH', pin: 'methoxysulfanediselenoperoxol' },
  { formula: 'CH3-SS-OOH', pin: 'methyldisulfaneperoxol' },
  { formula: 'CH3-S-O-S-OH', notNames: ['(methylsulfanyl)oxidane-SO-thioperoxol'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68422a.gif', pin: '4,4′-diselenoxanediyldiphenol' },
]);
