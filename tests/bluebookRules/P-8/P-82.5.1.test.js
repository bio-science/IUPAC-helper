/**
 * P-82.5.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Numbering in relation to the unmodified compound
 * Numbering of an isotopically substituted compound is not changed from that of an isotopically
 * unmodified compound. Among the structural features of a compound to be considered successively for
 * numbering as given by P-14.4, the presence of nuclides is considered last with the exception of
 * chirality arising from isotopic modification.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-82.5.1', [
  // Drawn in the Blue Book.
  { drawing: 'P8gif/P82510a.gif', pin: '1,1,1-trifluoro(2-²H1)ethane' },
  // Drawn in the Blue Book.
  { drawing: 'P8gif/P82510b.gif', pin: '1-chloro-3-fluoro(2-²H)benzene' },
  // Drawn in the Blue Book.
  { drawing: 'P8gif/P82510c.gif', pin: '2-methoxy(3,4,5,6-³H4)phenol' },
]);
