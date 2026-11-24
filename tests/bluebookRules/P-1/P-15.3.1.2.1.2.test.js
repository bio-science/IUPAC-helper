/**
 * P-15.3.1.2.1.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Substitution, expressed by prefixes or implied, is allowed on simple multiplicative groups,
 * symmetrical or unsymmetrical, generating substitutive compound or complex (see P-29.1 for
 * definitions) multiplicative groups.
 * The name azanediyl (preselected prefix) derived from the preselected parent hydride name ‘azane’ is
 * recommended for the multiplicative substituent group –NH– ; …”
 *
 * The whole section is in the Blue Book.
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-15.3.1.2.1.2', [
  { formula: 'ClCH<', preferredPrefix: 'chloromethylene' },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1503f.gif', preferredPrefix: 'chloromethanylylidene' },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1503g.gif', preferredPrefix: '1-chloroethane-1,2-diyl' },
  { formula: 'CH3-N<', preferredPrefix: 'methylazanediyl' },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1503h.gif', preferredPrefix: '2-methylpropane-1,3-diyl' },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1503i.gif', preferredPrefix: 'butane-1,3-diyl' },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1503j.gif', preferredPrefix: '2-(dimethylamino)propane-1,3-diyl' },
]);
