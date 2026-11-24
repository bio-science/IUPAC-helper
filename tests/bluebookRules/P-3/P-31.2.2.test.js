/**
 * P-31.2.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “General methodology
 * ‘Hydro’ and ‘dehydro’ prefixes are associated with hydrogenation and dehydrogenation, respectively,
 * of a double bond; thus, multiplying prefixes of even values, as ‘di’, ‘tetra’, etc. are used to
 * indicate the saturation of double bond(s), for example ‘dihydro’, ‘tetrahydro’; or creation of
 * double (or triple) bonds, as ‘didehydro’, etc.. In names, they are placed immediately at the front
 * of the name of the parent hydride and in front of any nondetachable prefixes. …”
 *
 * The whole section is in the Blue Book.
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-31.2.2', [
  // Drawn in the Blue Book.
  { drawing: 'P3gif/P310202a.gif', pin: '1′,2′,3′,4′-tetrahydro-1,2′-binaphthalene' },
  // Drawn in the Blue Book.
  { drawing: 'P3gif/P310202b.gif', pin: '4,5-dihydro-3H-azepine' },
  // Drawn in the Blue Book.
  { drawing: 'P3gif/P310202c.gif', pin: '3,4-dihydro-2H-pyrrole' },
  // Drawn in the Blue Book.
  { drawing: 'P3gif/P310202d.gif', pin: '1,2-didehydrobenzene', otherNames: ['cyclohex-1,3-dien-5-yne'], notNames: ['benzyne'] },
]);
