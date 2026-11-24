/**
 * P-14.3.4.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “The locant ‘1’ is omitted:
 * (a) in substituted mononuclear parent hydrides;
 * (b) in monosubstituted homogeneous chains consisting of only two identical atoms;
 * (c) in monosubstituted homogeneous monocyclic rings;
 * (d) in any dinuclear, unsubstituted trinuclear alkenes and alkynes and monounsaturated cycloalkenes
 * and cycloalkynes; …”
 *
 * The whole section is in the Blue Book.
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 31, P-14.3.4.2 (d). [corrected 9 April 2025]
 *     For(d) in unsubstituted dinuclear and trinuclear...
 *     read (d) in any dinuclear, unsubstituted trinuclear...
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-14.3.4.2', [
  { formula: 'CH3Cl', pin: 'chloromethane' },
  { formula: 'SiH2Cl2', name: 'dichlorosilane' },
  { formula: '(CH3)3Al', name: 'trimethylalumane' },
  { formula: 'CH3-CH2-OH', pin: 'ethanol' },
  { formula: 'NH2-NH-Cl', name: 'chlorohydrazine' },
  { formula: 'NH2-NH–', preselectedPrefix: 'hydrazinyl', notNames: ['hydrazin-1-yl'] },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1403d.gif', pin: 'cyclohexanethiol' },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1403e.gif', pin: 'bromobenzene' },
  { formula: 'CH2=CH2', pin: 'ethene' },
  { formula: 'CH≡CH', pin: 'acetylene' },
  { formula: 'CH3-CH=CH2', pin: 'propene' },
  { formula: 'NH=NH', preselectedName: 'diazene' },
  { formula: 'SiH≡SiH', preselectedName: 'disilyne' },
  { formula: 'H2N-N=NH', preselectedName: 'triazene' },
]);
