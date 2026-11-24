/**
 * P-23.7
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “RETAINED NAMES FOR VON BAEYER PARENT HYDRIDES
 * The retained names adamantane and cubane are used in general nomenclature and as preferred IUPAC
 * names. The name quinuclidine is retained for general nomenclature only (see Table 2.6). The name
 * prismane is no longer recommended.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-23.7', [
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P230700a.gif', pin: 'adamantane', otherNames: ['tricyclo[3.3.1.1³,⁷]decane'] },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P230700b.gif', pin: 'cubane', otherNames: ['pentacyclo[4.2.0.0²,⁵.0³,⁸.0⁴,⁷]octane'] },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P230700c.gif', pin: '1-azabicyclo[2.2.2]octane', otherNames: ['quinuclidine'] },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P230700d.gif', pin: 'tetracyclo[2.2.0.0²,⁶.0³,⁵]hexane', notNames: ['prismane'] },
]);
