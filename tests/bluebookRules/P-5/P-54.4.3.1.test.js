/**
 * P-54.4.3.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Retained fusion names are used for the fully unsaturated compounds (see P-25); they are the
 * preferred IUPAC names. Preferred IUPAC names for the partially saturated and fully saturated
 * compounds are formed by using ‘hydro’ prefixes. Preferred IUPAC names for partially saturated and
 * mancude ring assemblies are formed in the same way.
 * In these recommendations, the prefix ‘hydro’ is detachable, but is not included in the category of
 * alphabetized detachable prefixes (see P-14.4; …”
 *
 * The whole section is in the Blue Book.
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 601, P-54.4.3.1 box, line 3. [corrected 8.11.2023]
 *     For ...see also P-15.1.3.2, P-31.2, P-58.2), ...
 *     read ...see also P-15.1.5.2, P-31.2, P-58.2), ...
 *   Page 601, P-54.4.3.1, last structure on this page. [corrected 14 November 2018]
 *     For 1,2-dihydro2,2′-binaphthyl
 *     read 1,2-dihydro-2,2′-binaphthyl
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-54.4.3.1', [
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P540403a.gif', pin: 'naphthalene' },
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P540403b.gif', pin: '1,2-dihydronaphthalene' },
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P540403c.gif', pin: 'decahydronaphthalene', otherNames: ['bicyclo[4.4.0]decane'] },
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P540403d.gif', pin: '2H-[1,4]dithiepino[2,3-c]furan' },
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P540403e.gif', pin: '3,4-dihydro-2H-[1,4]dithiepino[2,3-c]furan' },
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P540403f.gif', pin: 'hexahydro-2H-[1,4]dithiepino[2,3-c]furan' },
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P540403g.gif', pin: '2,2′-binaphthalene', otherNames: ['2,2′-binaphthyl'] },
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P540403h.gif', pin: '1,2-dihydro-2,2′-binaphthalene', otherNames: ['1,2-dihydro-2,2′-binaphthyl', '1,2-dihydro-2-(naphthalen-2-yl)naphthalene'] },
]);
