/**
 * P-68.3.1.3.2.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Symmetrical monoazo compounds, R-N=N-R, are named:
 * (1) by substituting the parent diazene, HN=NH, by the appropriate substituent groups;
 * (2) by adding ‘azo’ to the name of the parent hydride, RH; substituents are denoted in the usual way
 * by prefixes, the two RH parents being distinguished by unprimed and primed locants. …
 * Method (1) gives preferred IUPAC names.”
 *
 * The whole section is in the Blue Book.
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-68.3.1.3.2.1', [
  { formula: 'CH3-N=N-CH3', pin: 'dimethyldiazene', otherNames: ['azomethane'] },
  { formula: 'C6H5-N=N-C6H5', pin: 'diphenyldiazene', otherNames: ['azobenzene'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68313d.gif', name: '3,4′-dichloroazobenzene' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68313e.gif', name: '1,2′-azonaphthalene' },
]);
