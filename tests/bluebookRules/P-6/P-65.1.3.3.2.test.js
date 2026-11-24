/**
 * P-65.1.3.3.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Substitutive nomenclature, prefix mode
 * When another group is present that has seniority for citation as principal group, the following
 * prefixes are used:
 * (1) ‘C,N-dihydroxycarbonimidoyl’ to denote the group –C(=N-OH)-OH;
 * (2) the combination of the prefixes ‘hydroxy’ and ‘hydroxyimino’ at the end of a carbon chain is
 * used in preferred IUPAC names rather than the prefix ‘dihydroxycarbonimidoyl’.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-65.1.3.3.2', [
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650103t.gif', pin: '2-(C,N-dihydroxycarbonimidoyl)cyclopentane-1-carboxylic acid' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650103u.gif', pin: '4-(C,N-dihydroxycarbonimidoyl)benzoic acid' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650103v.gif', pin: '5-hydroxy-5-(hydroxyimino)pentanoic acid', otherNames: ['4-(C,N-dihydroxycarbonimidoyl)butanoic acid'] },
]);
