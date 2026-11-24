/**
 * P-63.2.2.1.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Substituent prefix names for R′-O– groups are formed by concatenation, i.e., by adding the prefix
 * ‘oxy’ to the substituent prefix name for the group R′. These compound prefixes require the numerical
 * multiplying prefixes ‘bis’, ‘tris’, etc.”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 700, P-63.2.2.1.1, example 2. [corrected 5 June 2019]
 *     For butan-2-yloxy
 *     read (butan-2-yl)oxy
 *   Page 700, P-63.2.2.1.1, example 3. [corrected 5 June 2019]
 *     For pyridin-2-yloxy
 *     read (pyridin-2-yl)oxy
 *   Page 700, P-63.2.2.1.1, example 4. [corrected 5 June 2019]
 *     For piperidin-2-yloxy
 *     read (piperidin-2-yl)oxy
 *   Page 700, P-63.2.2.1.1, example 5. [corrected 5 June 2019]
 *     For 2-(butan-2-yloxy)ethyl
 *     read 2-[(butan-2-yl)oxy]ethyl
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-63.2.2.1.1', [
  { formula: 'CH3-CH2-CH2-CH2-CH2-O—', preferredPrefix: 'pentyloxy' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P630202a.gif', name: '1-methylpropoxy' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P630202b.gif', name: '2-pyridyloxy' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P630202c.gif', name: 'piperidinooxy' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P630202d.gif', preferredPrefix: '2-[(butan-2-yl)oxy]ethyl' },
  { formula: 'H3Si-O—', preselectedPrefix: 'silyloxy', notNames: ['siloxy'] },
]);
