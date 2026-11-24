/**
 * P-71.2.1.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “A radical formally derived by the removal of one hydrogen atom from any position of a parent
 * hydride, or a modified parent hydride other than those described by P-71.2.1.1, above, is named by
 * adding the suffix ‘yl’ to the name of the parent hydride, eliding the final letter ‘e’ of the name
 * of the parent hydride, if any. As an exception, the IUPAC preferred name for HO• is ‘hydroxyl’, a
 * retained name for the systematic name ‘oxidanyl’ (see ref. 12, IR-6.4.7); …”
 *
 * The whole section is in the Blue Book.
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 1052, P-71.2.1.2, example 5. [modified 12 June 2019]
 *     For tert-butoxy(triphenyl)-λ⁵-phosphanyl (PIN)
 *     read tert-butoxytri(phenyl)-λ⁵-phosphanyl (PIN)
 *     for [(2-methylpropan-2-yl)oxy]triphenyl-λ⁵-phosphanyl
 *     read [(2-methylpropan-2-yl)oxy]tri(phenyl)-λ⁵-phosphanyl
 *     for (1,1-dimethylethoxy)triphenyl-λ⁵-phosphanyl
 *     read (1,1-dimethylethoxy)tri(phenyl)-λ⁵-phosphanyl
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-71.2.1.2', [
  { formula: 'HS•', preselectedName: 'sulfanyl' },
  { formula: 'H2N•', preselectedName: 'azanyl', otherNames: ['aminyl'] },
  { formula: 'H2B•', preselectedName: 'boranyl', notNames: ['boryl'] },
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P71212a.gif', preselectedName: 'trisilan-2-yl' },
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P71212b.gif', pin: 'tert-butoxytri(phenyl)-λ⁵-phosphanyl' },
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P71212c.gif', pin: 'bicyclo[2.2.1]heptan-2-yl' },
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P71212d.gif', pin: 'spiro[4.5]decan-8-yl' },
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P71212e.gif', pin: 'propan-2-yl', otherNames: ['1-methylethyl', 'isopropyl'] },
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P71212f.gif', pin: '2-methylpropan-2-yl', otherNames: ['1,1-dimethylethyl', 'tert-butyl'] },
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P71212g.gif', pin: 'cyclopenta-2,4-dien-1-yl', otherNames: ['cyclopentadienyl'] },
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P71212h.gif', pin: 'naphthalen-2-yl' },
]);
