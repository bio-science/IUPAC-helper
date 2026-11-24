/**
 * P-65.1.2.2.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “The prefixes ‘carboxy’ and ‘oxalo’
 * When another group is present that has priority for citation as suffix, for example, a free valence,
 * or when all carboxylic acid groups cannot be described by a suffix, carboxylic acid groups, –COOH,
 * are indicated by the preferred prefix ‘carboxy’ (also used in general nomenclature). The prefix
 * ‘oxalo’ is recommended as the preferred prefix for –CO-CO-OH, but cannot be used to lengthen a
 * carbon chain. …”
 *
 * The whole section is in the Blue Book.
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 752, P-65.1.2.2.3, example 1 on this page. [corrected 19 September 2018]
 *     For 1-methyl-3-oxalobicyclo[2.2.2]octan-1-ium (PIN)
 *     read 1-methyl-3-oxalo-1-azabicyclo[2.2.2]octan-1-ium (PIN)
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-65.1.2.2.3', [
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650102o.gif', pin: '4-carboxy-1-methylpyridin-1-ium chloride' },
  { formula: '–CH2-CH2-COOH', preferredPrefix: '2-carboxyethyl' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650102p.gif', pin: '3-(carboxymethyl)heptanedioic acid' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650102q.gif', pin: '1-methyl-3-oxalo-1-azabicyclo[2.2.2]octan-1-ium' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650102r.gif', preferredPrefix: '3-carboxy-3-oxopropyl', notNames: ['2-oxaloethyl'] },
]);
