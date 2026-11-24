/**
 * P-62.2.2.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Symmetrical and unsymmetrical secondary and tertiary amines are named only by the same methods
 * described in P-62.2.1.2.
 * (1) substitutively using the retained name ‘aniline’ or the suffix ‘amine’ and the name of a parent
 * hydride with further N-substitution;
 * (2) substitutively, by prefixing, in alphabetical order when required, the name(s) of the
 * substituent group(s) R, R′ or R′′ to the parent hydride name ‘azane’. …
 * (3) substitutively, by prefixing, in alphabetical order when required, the name(s) of the
 * substituent group(s) R, R′ or R′′ to the parent hydride name ‘amine’. …
 * Method (1) generates preferred IUPAC names. Functional parent names like diethylamine and
 * triethylamine are deprecated. …”
 *
 * The whole section is in the Blue Book.
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 672, P-62.2.2.1, example 4 on this page. [modified 18 September 2019]
 *     For (1) N-silylsilanamine
 *     read (1) N-silylsilanamine (preselected name)
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-62.2.2.1', [
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P620202a.gif', pin: 'N-phenylaniline', otherNames: ['diphenylazane', '(diphenyl)amine'], notNames: ['azanediyldibenzene'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P620202b.gif', pin: 'N,N-diethylethanamine', otherNames: ['triethylazane', '(triethyl)amine'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P620202c.gif', pin: '2-chloro-N-(2-chloroethyl)ethan-1-amine', otherNames: ['bis(2-chloroethyl)azane', 'bis(2-chloroethyl)amine'], notNames: ['2,2′-dichlorodiethylamine'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P620202d.gif', pin: 'N-(2-chloroethyl)propan-1-amine', otherNames: ['(2-chloroethyl)(propyl)azane', '(2-chloroethyl)(propyl)amine'], notNames: ['N-(2-chloroethyl)propylamine'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P620202e.gif', pin: 'N-ethyl-N-propylbutan-l-amine', otherNames: ['butyl(ethyl)(propyl)azane', 'butyl(ethyl)(propyl)amine'], notNames: ['N-ethyl-N-propylbutylamine'] },
  { formula: 'H3Si-NH-SiH3', preselectedName: 'N-silylsilanamine', otherNames: ['disilylazane', '(disilyl)amine'], notNames: ['disilazane'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P620202f.gif', pin: 'N-phenylpyridin-3-amine', otherNames: ['phenyl(pyridin-3-yl)azane', 'phenyl(pyridin-3-yl)amine'], notNames: ['N-(pyridin-3-yl)aniline'] },
]);
