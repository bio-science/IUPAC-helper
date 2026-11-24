/**
 * P-93.5.2.2.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “The stereodescriptors ‘endo’, ‘exo’, ‘syn’, and ‘anti’
 * These stereodescriptors are used to indicate the relative orientation of groups attached to
 * nonbridgehead atoms in bicyclo[x.y.z]alkanes, where ‘x ≥ y > z > 0’, and with the additional
 * provision that the two bridges ‘x + y’ must be smaller than ‘7’. In fact, these stereodescriptors
 * are used to describe the relative configuration of bi- and tricyclic systems such as
 * bicyclo[2.2.1]heptanes, bicyclo[3.2.1]octane, and bicyclo[3.3.1]nonane.
 * If the substituent is orientated toward the highest numbered bridge (‘Z’ bridge, e.g. ‘C-7’ in
 * example below) it is given the description ‘exo’; …
 * The stereodescriptors ‘endo’, ‘exo’, ‘syn’, and ‘anti’ describe relative configuration only; …”
 *
 * The whole section is in the Blue Book.
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 1256, P-93.5.2.2.1, example 1 on this page. [modified 2 September 2020]
 *     For (2-endo)-bromo-(7-anti)-fluorobicyclo[2.2.1]heptane
 *     read 2-endo-bromo-7-anti-fluorobicyclo[2.2.1]heptane
 *     for rel-(2R,7S)-2-bromo-7-fluorobicyclo[2.2.1]heptane (PIN)
 *     read rel-(1R,2S,4R,7R)-2-bromo-7-fluorobicyclo[2.2.1]heptane (PIN)
 *     replace structure with:
 *   Page 1257, P-93.5.2.2.1, example on this page. [corrected 13 January 2021]
 *     For 8-methyl-8-aza-bicyclo[3.2.1]heptan-3-endo-yl (2S)-3-hydroxy-2-phenylpropanoate
 *     read 8-methyl-8-aza-bicyclo[3.2.1]octan-3-endo-yl (2S)-3-hydroxy-2-phenylpropanoate
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-93.5.2.2.1', [
  // Drawn in the Blue Book.
  { drawing: 'P9gif/P93522b.gif', pin: 'rel-(1R,2S,4R,7R)-2-bromo-7-fluorobicyclo[2.2.1]heptane', otherNames: ['2-endo-bromo-7-anti-fluorobicyclo[2.2.1]heptane'] },
  // Drawn in the Blue Book.
  { drawing: 'P9gif/P93522c.gif', pin: 'rac-(1R,4S,5S,7R)-5-bromo-5,7-dimethylbicyclo[2.2.1]hept-2-ene' },
  // Drawn in the Blue Book.
  { drawing: 'P9gif/P93522d.gif', name: '8-syn-methylbicyclo[3.2.1]octane' },
  // Drawn in the Blue Book.
  { drawing: 'P9gif/P93522e.gif', name: '8-azabicyclo[3.2.1]octan-3-exo-ol' },
  // Drawn in the Blue Book.
  { drawing: 'P9gif/P93522f.gif', name: '8-methyl-8-azabicyclo[3.2.1]octan-3-endo-yl (2S)-3-hydroxy-2-phenylpropanoate' },
]);
