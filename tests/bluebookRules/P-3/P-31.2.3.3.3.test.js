/**
 * P-31.2.3.3.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Spiro compounds
 * Spiro compounds including mancude components are modified in accordance with the general methodology
 * described in P-31.2.2.”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 395, P-31.2.3.3.3, example 2. [corrected 12 May 2021]
 *     For 4,5-dihydro-3H-spiro[1-benzofuran-2,1′-cyclohexan]-2′-ene (PIN)
 *     read 4,5-dihydro-3H-spiro[[1]benzofuran-2,1′-cyclohexan]-2′-ene (PIN)
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-31.2.3.3.3', [
  // Drawn in the Blue Book.
  { drawing: 'P3gif/P310203ad.gif', pin: '4′a,5′,6′,7′,8′,8′a-hexahydro-1′H-spiro[imidazolidine-4,2′-quinoxaline]' },
  // Drawn in the Blue Book.
  { drawing: 'P3gif/P310203ae.gif', pin: '4,5-dihydro-3H-spiro[[1]benzofuran-2,1′-cyclohexan]-2′-ene' },
]);
