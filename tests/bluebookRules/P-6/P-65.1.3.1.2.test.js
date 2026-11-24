/**
 * P-65.1.3.1.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Substitutive nomenclature, prefix mode
 * When another group is present that has seniority for citation as principal group, the following
 * prefixes are used:
 * (1) the compound prefix ‘C-hydroxycarbonimidoyl’ used to denote the acyl group –C(=NH)-OH is formed
 * by concatenation based on the simple prefix carbonimidoyl, –C(=NH)–, derived from carbonimidic acid
 * …
 * (2) a combination of the simple prefixes ‘hydroxy’ and ‘imino’ at the end of a carbon chain is used
 * in preferred IUPAC names rather than the compound prefix ‘C-hydroxycarbonimidoyl’.
 * Note 1: The italicized letter ‘C’ is used to avoid potential confusion with N-hydroxy substitution.
 * Note 2: The name carbonohydroximoyl, for –C(=NH)-OH, is not used to generate preferred IUPAC names.”
 *
 * The whole section is in the Blue Book.
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-65.1.3.1.2', [
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650103e.gif', pin: '2-(C-hydroxycarbonimidoyl)cyclopentane-1-carboxylic acid' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650103f.gif', pin: '4-(C-hydroxycarbonimidoyl)benzoic acid' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650103g.gif', pin: '4-hydroxy-4-iminobutanoic acid', otherNames: ['3-(C-hydroxycarbonimidoyl)propanoic acid'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650103h.gif', pin: 'N-{[({[(2-oxoethyl)amino]sulfanyl}methyl)amino]oxy}ethanimidothioic acid' },
]);
