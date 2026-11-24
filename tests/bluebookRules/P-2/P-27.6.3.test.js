/**
 * P-27.6.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Spiro fullerenes
 * Fullerenes cannot themselves form spiro compounds directly due to their specific connectivity and,
 * as mentioned earlier, spiro ring systems are not fused to fullerenes.
 * Spiro fullerenes formed from homofullerenes and fullerenes fused to organic ring systems follow the
 * normal procedure for naming organic spiro systems that contain
 * at least one polycyclic ring system, as described in P-24.5. Spiro fullerene parent hydrides will
 * not necessarily have unprimed numbers as locants, as the alphanumerical order is used to name this
 * …”
 *
 * The whole section is in the Blue Book.
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 338, P-27.6.3, example. [modified 24 October 2018]
 *     For spiro[cyclohexane-1,1′a-[1(9a)H-1(9)a]-homo(C60-Ih)[5,6]fullerene] (PIN)
 *     read spiro[cyclohexane-1,1′a-[1(9)a]homo(C60-Ih)[5,6]fullerene] (PIN)
 *     replace the structure with:
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-27.6.3', [
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P270603a.gif', pin: 'spiro[cyclohexane-1,1′a-[1(9)a]homo(C60-Ih)[5,6]fullerene]' },
]);
