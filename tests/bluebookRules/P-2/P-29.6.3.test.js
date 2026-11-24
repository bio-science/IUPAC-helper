/**
 * P-29.6.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Retained prefixes no longer recommended as approved prefixes
 * Trivial, common, and traditional prefixes have always been an integral part of organic nomenclature.
 * However, as systematic nomenclature develops and becomes widely used, many of these prefixes fall by
 * the wayside. Accordingly, each set of IUPAC recommendations contains fewer of these traditional
 * prefixes. These recommendations are no different. The following prefixes were still contained in the
 * 1993 recommendations (ref. 2) but are NOT recommended in these recommendations; …
 * Continued with P-3 Characteristic (functional) and Substituent Groups.
 * Return to:
 * IUPAC Chemical Nomenclature home page.
 * Blue Book home page.”
 *
 * The whole section is in the Blue Book.
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-29.6.3', [
  { formula: 'C6H5-CH2-CH2–', preferredPrefix: '2-phenylethyl', notNames: ['phenethyl'] },
  { formula: '(C6H5)2CH–', preferredPrefix: 'diphenylmethyl', notNames: ['benzhydryl'] },
  { formula: '(CH3)2CH-CH2–', preferredPrefix: '2-methylpropyl', notNames: ['isobutyl'] },
  { formula: 'CH3-CH2-CH(CH3)–', preferredPrefix: 'butan-2-yl', notNames: ['sec-butyl'] },
  { formula: '(CH3)2CH-CH2-CH2–', preferredPrefix: '3-methylbutyl', notNames: ['isopentyl'] },
  { formula: 'CH3-CH2-C(CH3)2–', preferredPrefix: '2-methylbutan-2-yl', notNames: ['tert-pentyl'] },
  { formula: '(CH3)3C-CH2–', preferredPrefix: '2,2-dimethylpropyl', notNames: ['neopentyl'] },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P290603a.gif', notNames: ['furfuryl (2-isomer only)'] },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P290603b.gif', name: '2-thienylmethyl', notNames: ['thenyl (2-isomer only)'] },
]);
