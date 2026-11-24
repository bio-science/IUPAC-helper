/**
 * P-93.1.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Racemates
 * A racemate is an equimolecular mixture of a pair of enantiomers. It does not exhibit optical
 * activity. Racemates may be denoted by using the prefix ‘rac’ cited at the front of the name of one
 * enantiomer where the configurational descriptors ‘R’, ‘S’, ‘M’, ‘P’, etc. have been used. This
 * prefix ‘rac’ with plain stereodescriptors is preferred in preferred IUPAC names to the
 * stereodescriptors such as ‘RS’, ‘SR’, etc. that may be used in general nomenclature. …
 * The structure of one enantiomer followed by the mention ‘and enantiomer’ is used to depict
 * racemates. …”
 *
 * The whole section is in the Blue Book.
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-93.1.3', [
  // Drawn in the Blue Book.
  { drawing: 'P9gif/P93130a.gif', pin: 'rac-(1R,2S)-2-chlorocyclopentane-1-carboxylic acid' },
  { pin: 'rac-(2R,3R)-3-bromobutan-2-ol' },
  { pin: 'rac-(2R)-2-bromobutane', otherNames: ['rac|rac-2-bromobutane'] },
]);
