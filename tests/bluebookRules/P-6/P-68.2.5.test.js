/**
 * P-68.2.5
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Substitutive nomenclature: suffix mode
 * Traditionally, silicon compounds were denoted by suffixes or prefixes; germanium, tin, and lead
 * compounds were denoted only by prefixes. Full systematization is recommended to use suffixes, when
 * available, to generate preferred names, in accordance with the seniority order of suffixes, and the
 * seniority of suffixes over prefixes.”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 989, P-68.2.5, example 7. [corrected 18 September 2019]
 *     For 4-[(bis(silanyl)methyl]hexan-2-one
 *     read 4-[bis(silanyl)methyl]hexan-2-one
 *     replace the structure with:
 *   Page 989, P-68.2.5, last example on this page. [corrected 28 October 2016]
 *     Replace the structure with:
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-68.2.5', [
  { formula: 'CH3-Si(NH2)3', pin: 'methylsilanetriamine' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68250a.gif', pin: '1-methyl-N,N′-disilylsilanediamine', notNames: ['3-methyltrisilazane'] },
  { formula: '(CH3)2Si(OH)2', pin: 'dimethylsilanediol' },
  { formula: '(CH3)3Si-COOH', pin: 'trimethylsilanecarboxylic acid' },
  { formula: 'CH3-GeH2-SH', pin: 'methylgermanethiol', otherNames: ['methyl(sulfanyl)germane'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68250b.gif', pin: '4-(disilylmethyl)hexan-2-one', otherNames: ['4-[bis(silanyl)methyl]hexan-2-one'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68250c.gif', pin: '1-germacyclotetradecane-3-carbonitrile', otherNames: ['3-cyano-1-germacyclotetradecane'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68250d.gif', pin: '4-(disilylamino)cyclohexane-1-carbonitrile', otherNames: ['4-[bis(silanyl)amino]cyclohexane-1-carbonitrile'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68250e.gif', pin: 'dimethyl dibutylstannanediyl dibutanedioate', otherNames: ['dibutylbis[(4-methoxy-4-oxobutanoyl)oxy]stannane'] },
  { formula: '[(CH3)3Si]2CH-SnH(OH)-CH[Si(CH3)3]2', pin: 'bis[bis(trimethylsilyl)methyl]stannanol' },
]);
