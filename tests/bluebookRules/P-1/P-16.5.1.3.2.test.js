/**
 * P-16.5.1.3.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Simple substituents of a parent where only one possible position can be substituted do not require
 * locants. Enclosing marks are used with second and subsequent simple substituents (see P-16.5.1.3.1).
 * In some cases, such as acetic acid, alkyl substituents are not allowed as the resulting compound
 * requires a different parent structure. Locants are required for related compounds where additional
 * substitutable positions are available, for example acetamide.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-16.5.1.3.2', [
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1605ld.gif', pin: 'bromo(nitro)(phenyl)acetic acid' },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1605le.gif', pin: 'diethyl ethyl(methyl)propanedioate' },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1605lf.gif', pin: 'bromo(chloro)acetic acid' },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1605lg.gif', pin: 'cyclopropyl(fluoro)acetonitrile' },
]);
