/**
 * P-66.1.1.4.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Substituents of the types –SO2-NH2, –SO-NH2, and their selenium and tellurium analogues
 * In the presence of a characteristic group having priority for citation as suffix, the groups
 * –SO2-NH2, –SO-NH2 and related selenium and tellurium groups are named in two ways corresponding to
 * methods (2) and (3) for the –CO-NH2 group above in P-66.1.1.4.1:
 * (2) by using the acyl group ‘sulfamoyl’ (for sulfonamides only) (see P-65.3.2.3);
 * (3) by using the prefixes ‘amino...sulfonyl’, ‘amino...sulfinyl’, ‘amino...selenonyl’,
 * ‘amino...seleninyl’, ‘amino...telluronyl’, or ‘amino...tellurinyl’.
 * For –SO2-NH2, method (2) generates preferred IUPAC names; for all other groups method (3) is the
 * only method for generation of preferred IUPAC names.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-66.1.1.4.2', [
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66114i.gif', pin: '2-(dimethylsulfamoyl)benzene-1-sulfonic acid', otherNames: ['2-[(dimethylamino)sulfonyl]benzene-1-sulfonic acid'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66114j.gif', pin: 'methyl 3-(phenylsulfamoyl)propanoate', otherNames: ['methyl 3-[(phenylamino)sulfonyl]propanoate', 'methyl 3-(anilinosulfonyl)propanoate'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66114k.gif', pin: '6-[(methylamino)sulfinyl]naphthalene-2-carboxylic acid', otherNames: ['6-[(methylamino)sulfinyl]-2-naphthoic acid,'] },
]);
