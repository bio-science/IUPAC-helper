/**
 * P-101.3.5.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “The nondetachable prefix ‘x(y→z)-abeo’ designates the migration from one end of a single bond from
 * its original position in a fundamental parent structure to another position. In the prefix, ‘x’ is
 * the locant of the stationary, i.e. unchanged, end of the migrating bond; ‘y’ is the locant of the
 * position of the moving end of the migrating bond in the parent structure; …
 * Previously the prefix ‘abeo’ was italicized (Rule F-4.9, ref. 1; Rule R-1.2.7.1, ref. 2). For
 * consistency with the other modifying prefixes it is now recommended that a regular roman font be
 * used.
 * The ‘abeo’ nomenclature described in this rule is permissive, not compulsory. It is most suitable
 * for use in discussions on reaction mechanisms and biogenesis.”
 *
 * The whole section is in the Blue Book.
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-101.3.5.1', [
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P101351a.gif', name: 'podocarpane' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P101351b.gif', name: '3,5-cyclo-4,5-seco-3β-podocarpane' },
]);
