/**
 * P-65.1.3.2.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Substitutive nomenclature, prefix mode
 * When another group is present that has seniority for citation as principal group, the following
 * prefixes are used:
 * (1) the compound prefix ‘C-hydroxycarbonohydrazonoyl’ used to denote the acyl group –C(=N-NH2)-OH is
 * formed by concatenation based on the simple prefix name carbonohydrazonoyl, –C(=NNH2)–, derived …
 * (2) the combination of the simple prefixes ‘hydroxy’ and ‘hydrazinylidene’ at the end of a carbon
 * chain is used in preferred IUPAC names rather than the compound prefixes …
 * Note: The italicized letter ‘C’ is used to avoid potential confusion with N-hydroxy substitution.”
 *
 * The whole section is in the Blue Book.
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-65.1.3.2.2', [
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650103m.gif', pin: '2-(C-hydroxycarbonohydrazonoyl)cyclopentane-1-carboxylic acid' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650103n.gif', pin: '4-(C-hydroxycarbonohydrazonoyl)benzoic acid' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650103o.gif', pin: '5-hydrazinylidene-5-hydroxypentanoic acid', otherNames: ['4-(C-hydroxycarbonohydrazonoyl)butanoic acid'] },
]);
