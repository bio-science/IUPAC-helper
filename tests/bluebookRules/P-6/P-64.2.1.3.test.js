/**
 * P-64.2.1.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “The following trivial names for ketones have been used in past recommendations but are no longer
 * accepted even in general nomenclature.”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 724, P-64.2.1.3, example 1. [corrected 11 March 2020]
 *     For acenaphthoquinone
 *     read (not acenaphthoquinone)
 *   Page 724, P-64.2.1.3, example 2. [corrected 11 March 2020]
 *     For isoquinolone (1-isomer shown)
 *     read [not isoquinolone (1-isomer shown)]
 *   Page 725, P-64.2.1.3, example 3 on this page. [modified 26 January 2022]
 *     For benzal
 *     read [not benzil]
 *     For quinolone (2-isomer shown)
 *     read [not quinolone (2-isomer shown)]
 *   Page 725, P-64.2.1.3, example 2 on this page. [corrected 11 March 2020]
 *     For pyrrolidone (2-isomer shown)
 *     read [not pyrrolidone (2-isomer shown)]
 *   Page 725, P-64.2.1.3, example 3 on this page. [modified 11 March 2020]
 *     For 1,2-diphenylethane-1,2-dione (PIN)
 *     read diphenylethanedione (PIN)
 *     for benzal
 *     read [not benzal]
 *   Page 725, P-64.2.1.3, example 4 on this page. [modified 11 March 2020]
 *     For biacetyl
 *     read [not biacetyl]
 *   Page 725, P-64.2.1.3, example 5 on this page. [modified 11 March 2020]
 *     For propiophenone
 *     read [not propiophenone]
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-64.2.1.3', [
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P640201j.gif', pin: 'acenaphthylene-1,2-dione', notNames: ['acenaphthoquinone'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P640201k.gif', pin: 'isoquinolin-1(2H)-one', notNames: ['isoquinolone (1-isomer shown)'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P640201l.gif', pin: 'quinolin-2(1H)-one', notNames: ['quinolone (2-isomer shown)'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P640201m.gif', pin: 'pyrrolidin-2-one', notNames: ['pyrrolidone (2-isomer shown)'] },
  { formula: 'C6H5-CO-CO-C6H5', pin: 'diphenylethanedione', notNames: ['benzil'] },
  { formula: 'CH3-CO-CO-CH3', pin: 'butane-2,3-dione', notNames: ['biacetyl'] },
  { formula: 'C6H5-CO-CH2-CH3', pin: '1-phenylpropan-1-one', notNames: ['propiophenone'] },
]);
