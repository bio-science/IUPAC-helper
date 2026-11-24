/**
 * P-66.4.1.5
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Formamidine disulfides
 * The compound H2N-C(=NH)-S-S-C(=NH)-NH2 and its derivatives have been named previously on the basis
 * of the parent structure ‘formamidine disulfide’. They are now named on the basis of the parent
 * compound ‘dicarbonic acid’ or as a dithioperoxyanhydride which is the preferred IUPAC name.”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 889, P-66.4.1.5, example 1. [modified 13 March 2019]
 *     For [not N¹-ethyl-N²-methyldisulfanedicarboximidamide; not
 *     N-ethyl-N′′-methyl(dithioperoxy)dicarbonimidic diamide (numbering shown); ...
 *     read [not N¹-ethyl-N²-methyldisulfanedicarboximidamide (numbering shown); not
 *     N-ethyl-N′′-methyl(dithioperoxy)dicarbonimidic diamide; ...
 *     for ...; not N¹-ethyl-N2-methyl-α,α′-dithiobisformamidine...
 *     read ...; not N¹-ethyl-N³-methyl-α,α′-dithiobisformamidine...
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-66.4.1.5', [
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66415a.gif', pin: 'N-ethylcarbamimidic N-methylcarbamimidic dithioperoxyanhydride', notNames: ['N¹-ethyl-N²-methyldisulfanedicarboximidamide (numbering shown)', 'N-ethyl-N′′-methyl(dithioperoxy)dicarbonimidic diamide', 'N¹-ethyl-N³-methyl-α,α′-dithiobisformamidine (see C-951.5 in ref. 1)'] },
]);
