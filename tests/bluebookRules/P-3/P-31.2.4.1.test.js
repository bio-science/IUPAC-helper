/**
 * P-31.2.4.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “The subtractive prefix ‘dehydro’ is used to denote the removal of hydrogen atoms and the formation
 * of multiple bonds. Its use is very limited in systematic nomenclature of organic compounds. Applied
 * to benzene, it leads to the name ‘1,2-didehydrobenzene’, the preferred IUPAC name, rather than
 * ‘benzyne’ that was formerly used. Applied to annulenes, it leads to didehydro[n]annulenes that are
 * not used in preferred IUPAC names, but are acceptable for use in general nomenclature.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-31.2.4.1', [
  // Drawn in the Blue Book.
  { drawing: 'P3gif/P310204a.gif', pin: '1,2-didehydrobenzene', otherNames: ['cyclohexa-1,3-dien-5-yne'] },
  // Drawn in the Blue Book.
  { drawing: 'P3gif/P310204b.gif', pin: 'cyclododeca-1,3,5,7,9-pentaen-11-yne', otherNames: ['1,2-didehydro[12]annulene'] },
]);
