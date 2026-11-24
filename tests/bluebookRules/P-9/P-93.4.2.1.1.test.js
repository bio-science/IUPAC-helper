/**
 * P-93.4.2.1.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Stereodescriptors ‘Z’ and ‘E’, and ‘cis’ and ‘trans’
 * The stereodescriptors ‘Z’ and ‘E’ have been defined in section P-92.4; they are recommended to
 * specify the configuration of double bonds as preferred stereodescriptors in preferred IUPAC names.
 * Their use in nomenclature is described here. They have replaced the stereodescriptors ‘cis’ and
 * ‘trans’ that are still recommended for general nomenclature and in the nomenclature of carotenoids.
 * The stereodescriptors ‘cis’ and ‘trans’ are used in general nomenclature only to describe double
 * bonds having two hydrogen atoms, one on each carbon atom. …”
 *
 * The whole section is in the Blue Book.
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-93.4.2.1.1', [
  // Drawn in the Blue Book.
  { drawing: 'P9gif/P93421a.gif', name: 'cis-but-2-ene' },
  // Drawn in the Blue Book.
  { drawing: 'P9gif/P93421b.gif', name: 'trans-but-2-ene' },
  // Drawn in the Blue Book.
  { drawing: 'P9gif/P93421g.gif', name: 'trans-(1-²H1)prop-1-ene' },
  // Drawn in the Blue Book.
  { drawing: 'P9gif/P93421h.gif', pin: '1,1′-[(1E)-1-(4-chlorophenyl)ethene-1,2-diyl]dibenzene', otherNames: ['4-chloro-1,1′-[(1E)-1-phenylethene-1,2-diyl]dibenzene'] },
]);
