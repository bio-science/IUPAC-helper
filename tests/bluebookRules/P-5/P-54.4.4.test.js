/**
 * P-54.4.4
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Names modified by ‘dehydro’ prefixes
 * ‘Dehydro’ prefixes are used to generate preferred IUPAC names for dehydrogenated mancude compounds.
 * They may be used in general nomenclature to introduce double and triple bonds in saturated parent
 * hydrides.
 * In these recommendations, the prefix ‘dehydro’ is detachable, but is not included in the category of
 * alphabetized detachable prefixes (see P-14.4; …”
 *
 * The whole section is in the Blue Book.
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-54.4.4', [
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P540404a.gif', pin: '1,2-didehydrobenzene', otherNames: ['cyclohexa-1,3-dien-5-yne'], notNames: ['benzyne'] },
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P540404b.gif', pin: '2,3,4,5-tetrahydropyridine', otherNames: ['1,2-didehydropiperidine'] },
]);
