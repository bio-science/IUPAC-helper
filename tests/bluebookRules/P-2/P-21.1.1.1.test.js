/**
 * P-21.1.1.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Systematic names
 * The names of mononuclear hydrides of the elements for use as parents in naming organic compounds by
 * substitutive nomenclature are given in Table 2.1. Most are formed systematically by citing the ‘a’
 * term of the element (see Table 2.4) with elision of the terminal letter ‘a’ before the ending ‘ane’
 * (patterned after methane), for example borane for BH3 and silane for SiH4, etc. …
 * The newly recommended names gallane and thallane are formed systematically. Alumane and indigane are
 * exceptions. …
 * The monohydride names listed in Table 2.1 constitute the basis of ‘generalized ane nomenclature’. …”
 *
 * The whole section is in the Blue Book.
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 131, P-21.1.1.1, line 6. [corrected 27 May 2020]
 *     For ...tellane for H2Te, polonane for H2Po, and...
 *     read ...tellane for H2Te, polane for H2Po, and...
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-21.1.1.1', [
  { formula: 'BH3', name: 'borane' },
  { formula: 'NH3', name: 'azane' },
  { formula: 'OH2', name: 'oxidane' },
  { formula: 'FH', name: 'fluorane' },
  { formula: 'AlH3', name: 'alumane' },
  { formula: 'SiH4', name: 'silane' },
  { formula: 'PH3', name: 'phosphane' },
  { formula: 'SH2', name: 'sulfane' },
  { formula: 'ClH', name: 'chlorane' },
  { formula: 'GaH3', name: 'gallane' },
  { formula: 'GeH4', name: 'germane' },
  { formula: 'AsH3', name: 'arsane' },
  { formula: 'SeH2', name: 'selane' },
  { formula: 'BrH', name: 'bromane' },
  { formula: 'InH3', name: 'indigane' },
  { formula: 'SnH4', name: 'stannane' },
  { formula: 'SbH3', name: 'stibane' },
  { formula: 'TeH2', name: 'tellane' },
  { formula: 'IH', name: 'iodane' },
  { formula: 'TlH3', name: 'thallane' },
  { formula: 'PbH4', name: 'plumbane' },
  { formula: 'BiH3', name: 'bismuthane' },
  { formula: 'PoH2', name: 'polane' },
  { formula: 'AtH', name: 'astatane' },
  { formula: 'AlH3', preselectedName: 'alumane', notNames: ['alane'] },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P210101a.gif', name: 'aluminane' },
  { formula: 'InH3', preselectedName: 'indigane' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P210101b.gif', pin: '2,3-dihydro-1H-indene', otherNames: ['indane'] },
]);
