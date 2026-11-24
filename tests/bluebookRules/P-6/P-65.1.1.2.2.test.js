/**
 * P-65.1.1.2.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “The following names are retained for general nomenclature with functionalization but no
 * substitution is allowed. Functionalization leads to anhydrides, salts, and esters, for example, the
 * formation of esters leads to names such as methyl butyrate.”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 747, P-65.1.1.2.2, end of list. [corrected 18 September 2019]
 *     Add examples 1-3 of page 749, P-65.1.1.2.4 on this page
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-65.1.1.2.2', [
  { formula: 'CH2=CH-COOH', pin: 'prop-2-enoic acid', otherNames: ['acrylic acid'] },
  { formula: 'HOOC-[CH2]4-COOH', pin: 'hexanedioic acid', otherNames: ['adipic acid'] },
  { formula: 'CH3-CH2-CH2-COOH', pin: 'butanoic acid', otherNames: ['butyric acid'] },
  { formula: 'C6H5-CH=CH-COOH', pin: '3-phenylprop-2-enoic acid', otherNames: ['cinnamic acid (‘E’ configuration implied)', '‘E’ and ‘Z‘ isomers)'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650101e.gif', name: 'fumaric acid' },
  { formula: 'HOOC-[CH2]3-COOH', pin: 'pentanedioic acid', otherNames: ['glutaric acid'] },
  { formula: 'HOOC-CH2-COOH', pin: 'propanedioic acid', otherNames: ['malonic acid'] },
  { formula: 'CH2=C(CH3)-COOH', pin: '2-methylprop-2-enoic acid', otherNames: ['methacrylic acid'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650101f.gif', pin: 'pyridine-4-carboxylic acid', otherNames: ['isonicotinic acid'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650101g.gif', name: 'maleic acid' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650101h.gif', pin: 'naphthalene-2-carboxylic acid', otherNames: ['2-naphthoic acid'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650101i.gif', pin: 'pyridine-3-carboxylic acid', otherNames: ['nicotinic acid'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650101j.gif', name: 'oleic acid' },
  { formula: 'CH3-[CH2]14-COOH', pin: 'hexadecanoic acid', otherNames: ['palmitic acid'] },
  { formula: 'CH3-CH2-COOH', pin: 'propanoic acid', otherNames: ['propionic acid'] },
  { formula: 'CH3-[CH2]16-COOH', pin: 'octadecanoic acid', otherNames: ['stearic acid'] },
  { formula: 'HOOC-CH2-CH2-COOH', pin: 'butanedioic acid', otherNames: ['succinic acid'] },
  { formula: 'CH3-CO-OOH', pin: 'ethaneperoxoic acid', otherNames: ['peracetic acid'] },
  { formula: 'C6H5-CO-OOH', pin: 'benzenecarboperoxoic acid', otherNames: ['perbenzoic acid'] },
  { formula: 'H-CO-OOH', pin: 'methaneperoxoic acid', otherNames: ['performic acid'] },
  { formula: '(HOOC-CH)2N-CH2-CH2-N(CH2-COOH)2', name: 'ethylenediaminetetraacetic acid' },
]);
