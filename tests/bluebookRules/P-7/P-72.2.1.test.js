/**
 * P-72.2.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Functional class nomenclature
 * Functional class nomenclature can be used, in general nomenclature, to describe anionic compounds.
 * An anion that can be considered as derived formally by adding an electron to a radical may also be
 * named by adding the class name ‘anion’ as a separate word to the name of the substituent group. The
 * names are formed by using the names of corresponding radicals (not necessarily the name of
 * substitutent groups) and the class name ‘anion’ as a separate word. …”
 *
 * The whole section is in the Blue Book.
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-72.2.1', [
  { pin: 'methanide', otherNames: ['H3C⁻ methyl anion'] },
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P72210a.gif', pin: '1-oxoethan-1-ide', otherNames: ['acetyl anion'] },
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P72210b.gif', pin: 'oxo(phenyl)-λ⁴-sulfanide', otherNames: ['benzenesulfinyl anion'] },
  { formula: 'CH3-NH⁻', pin: 'methanaminide', otherNames: ['methanaminyl anion'] },
  { formula: '(C6H5)2C²⁻', pin: 'diphenylmethanediide', otherNames: ['diphenylmethylidene dianion'] },
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P72210c.gif', pin: 'benzenide', otherNames: ['phenyl anion'] },
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P72210d.gif', pin: 'cyclopenta-2,4-dien-1-ide', otherNames: ['cyclopenta-2,4-dien-1-yl anion', 'cyclopentadienide'] },
]);
