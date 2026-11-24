/**
 * P-77.1.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “When P-77.1.2 cannot be applied, three traditional methods of naming salts of organic bases may be
 * applied as follows:
 * (1) as adducts. The names of these adducts are preferred IUPAC names only when the acid components
 * of the adducts are organic compounds;
 * (2) the unaltered name of the base followed by the name of the anion;
 * (3) for salts of hydrohalogen acids only, the unaltered name of the base is followed by
 * hydrofluoride, hydrobromide, hydrochloride, or hydroiodide, as the case may be.”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 1128, P-77.1.3, example. [modified 21 November 2018]
 *     For (a) N,N-dimethyl-1,3-thiazolidin-2-amine—sulfuric acid (2/1) (PIN)
 *     read (1) N,N-dimethyl-1,3-thiazolidin-2-amine—sulfuric acid (2/1) (PIN)
 *     for (b) bis(N,N-dimethyl-1,3-thiazolidin-2-amine) sulfate
 *     read (2) bis(N,N-dimethyl-1,3-thiazolidin-2-amine) sulfate
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-77.1.3', [
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P77130a.gif', name: 'N,N-dimethyl-1,3-thiazolidin-2-amine—sulfuric acid (2/1)' },
]);
