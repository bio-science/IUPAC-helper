/**
 * P-69.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “ORGANOMETALLIC COMPOUNDS INVOLVING THE ELEMENTS IN GROUPS 1 AND 2
 * Although many organometallic compounds of Groups 1 and 2 elements exist in associated molecular form
 * and contain structural solvent, their names are based on the stoichiometric compositions of the
 * compounds, the solvent, if any, being ignored. Additive names are formed by citing the names of the
 * ligands denoting the organic groups and the ligand ‘hydrido’ denoting the hydrogen atoms, if any, in
 * alphabetical order, followed by the name of the metal.”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 1043, P-69.3, example 4. [corrected 28 October 2016]
 *     For tetra-μ3-methanidotetralithium
 *     read tetra-μ3-methanido-tetralithium
 *     for tetra-μ3-methyltetralithium
 *     read tetra-μ3-methyl-tetralithium
 *   Page 1043, P-69.3, example 7. [corrected 28 October 2016]
 *     For MgI(Me)]
 *     read [MgI(Me)]
 *   Page 1043, P-69.3, last example on this page. [corrected 28 October 2016]
 *     For [(MgI(Me)]n
 *     read [MgI(Me)]n
 *     For poly[iodo(methyl)magnesium]
 *     read poly[iodido(methyl)magnesium]
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-69.3', [
  { formula: '[BeEtH]', name: 'ethylhydridoberyllium' },
  { formula: '[LiMe]', name: 'methanidolithium' },
  { formula: '[(LiMe)4]', name: 'tetra-μ3-methanido-tetralithium' },
  { formula: '(LiMe)n', name: 'poly(methyllithium)' },
  { formula: '[MgI(Me)]', name: 'iodido(methanido)magnesium' },
  { formula: '[MgMe]I', name: 'methylmagnesium iodide (compositional name' },
  { formula: '[MgI(Me)]n', name: 'poly[iodido(methanido)magnesium], or' },
  { formula: 'MgIMe', name: 'magnesium iodide methanide' },
]);
