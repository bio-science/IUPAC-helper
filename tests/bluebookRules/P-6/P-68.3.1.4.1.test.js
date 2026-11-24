/**
 * P-68.3.1.4.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Acyclic polyazanes are saturated chains of nitrogen atoms; hydrazine is the retained name and the
 * preselected name for diazane, H2N-NH2. Names are formed by prefixing the mononuclear parent hydride
 * name ‘azane’ with an appropriate numerical prefix and numbered in the same way as hydrocarbons. The
 * parent hydrides are preselected names (see P-12.2). The final ‘a’ of a numerical prefix is not
 * elided before ‘azane’.
 * The corresponding prefixes are named according to the general method described in P-29. …
 * The formation of systematic prefix names, i.e., triazan-1-yl, etc., as described in P-29, must be
 * considered a change even though the names triazano, tetrazano, etc., previously used as names for …”
 *
 * The whole section is in the Blue Book.
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 1015, P-68.3.1.4.1, box, line 1. [corrected 28 October 2016]
 *     For ...systematic prefix names, i.e., triaazan-1-yl, etc.,
 *     read ...systematic prefix names, i.e., triazan-1-yl, etc.,
 *   Page 1015, P-68.3.1.4.1, structure 3. [corrected 28 October 2016]
 *     For triazan-1-yl- (preselected prefix)
 *     read triazan-1-yl (preselected prefix)
 *   Page 1015, P-68.3.1.4.1, structure 4. [corrected 28 October 2016]
 *     For triaz-2-en-1-yl- (preselected prefix
 *     read triaz-2-en-1-yl (preselected prefix)
 *     for (not triaz[2]eno)
 *     read (not triaz-2-eno)
 *   Page 1015, P-68.3.1.4.1, last example on this page. [corrected 28 October 2016]
 *     For (not 4-triazenobenzoic acid)
 *     read [not 4-(triaz-2-eno)benzoic acid]
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-68.3.1.4.1', [
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68314a.gif', pin: '1-methyltriazane.' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68314b.gif', pin: '1,2-dimethyltetraazane' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68314c.gif', preselectedPrefix: 'triazan-1-yl', notNames: ['triazano'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68314d.gif', preselectedPrefix: 'triaz-2-en-1-yl', notNames: ['triaz-2-eno'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68314e.gif', pin: '4-(triaz-2-en-1-yl)benzoic acid', notNames: ['4-(triaz-2-eno)benzoic acid'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68314f.gif', pin: 'ethyl (tetraazan-1-yl)acetate', notNames: ['ethyl tetrazanoacetate'] },
]);
