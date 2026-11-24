/**
 * P-66.1.6.1.2.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “The groups HN=C(OH)-NH– and H2N-C(OH)=N– derived from isourea are named respectively
 * ‘(C-hydroxycarbonimidoyl)amino’ (preferred prefix) or [hydroxy(imino)methyl]amino-, and
 * ‘[amino(hydroxy)methylidene]amino’ (preferred prefix). The italic letter locant ‘C’ is used in the
 * preferred prefix to prevent possible ambiguity with N-substitution and parentheses are used around
 * ‘hydroxy’ to emphasize that ‘amino’ is not substituted by ‘hydroxy’.
 * The prefixes 1-isoureido and 3-isoureido are no longer recommended.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-66.1.6.1.2.2', [
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66161p.gif', pin: '7-{[(dimethylamino)ethoxymethylidene]amino}naphthalene-2-carboxylic acid', notNames: ['7-(2-ethyl-1,1-dimethyl-3-isoureido)naphthalene-2-carboxylic acid'] },
]);
