/**
 * P-68.3.1.3.4
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Diazenecarbohydrazide, HN=N-CO-NH-NH2
 * The hydrazide of ‘diazenecarboxylic acid’, HN=N-CO-NH-NH2, is named systematically
 * ‘diazenecarbohydrazide’; it is the preferred IUPAC name. The name ‘carbazone’ is not recommended.
 * Chalcogen analogues are named by using the infixes and the prefixes ‘thio’, ‘seleno’, and ‘telluro’.
 * Note: Numerical locants that were used for the name ‘carbazone’ that is now abandoned are not
 * transferred to the preferred IUPAC name ‘diazenecarbohydrazide’.
 * As a prefix, the group –HN-NH-CO-N=NH is named ‘2-(diazenecarbonyl)hydrazin-1-yl’ or
 * ‘diazenecarbohydrazido’ (preferred prefix). The name ‘carbazono’ is not recommended.
 * The group H2N-NH-CO-N=N– is named ‘(hydrazinecarbonyl)diazenyl’.”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 1011, P-68.3.1.3.4, second and third paragraph. [corrected 11 March 2020]
 *   Page 1011, P-68.3.1.3.4, third paragraph, lines 1/2. [corrected 28 October 2016]
 *     For ...The group H2N-NH-CO-N=NH– is named...
 *     read ...The group H2N-NH-CO-N=N– is named...
 *   Page 1011, P-68.3.1.3.4, last example. [corrected 28 October 2016]
 *     For ethyl 3-(2-diazenecarbonylhydrazin-1-yl)propanoate (PIN)
 *     read ethyl 3-[2-(diazenecarbonyl)hydrazin-1-yl]propanoate
 *     add ethyl 3-(diazenecarbohydrazido)propanoate (PIN)
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-68.3.1.3.4', [
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68313q.gif', pin: 'diazenecarbohydrazide' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68313r.gif', pin: 'diazenecarbothiohydrazide' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68313s.gif', pin: 'N′,2-diphenyldiazenecarbohydrazide' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68313t.gif', pin: 'N′,2-diphenyldiazenecarbothiohydrazide' },
  { formula: 'HN=N-CO-NH-NH-CH2-CH2-COO-CH2-CH3', pin: 'ethyl 3-(diazenecarbohydrazido)propanoate', otherNames: ['ethyl 3-[2-(diazenecarbonyl)hydrazin-1-yl]propanoate'] },
]);
