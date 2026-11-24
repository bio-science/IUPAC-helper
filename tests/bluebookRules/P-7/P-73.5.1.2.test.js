/**
 * P-73.5.1.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Polycations with cationic centers on characteristic groups
 * Polycations with cationic centers on characteristic groups are named by substitutive nomenclature or
 * multiplicative nomenclature using the multiplying prefixes ‘bis-’, ‘tris-’, etc.”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 1101, P-73.5.1.2, example 1. [corrected 7 August 2019]
 *     For ethane-1,2-diylbis(oxylium) (PIN)
 *     read (ethane-1,2-diyl)bis(oxylium) (PIN)
 *     for ethane-1,2-diylbis(oxidanylium)
 *     read (ethane-1,2-diyl)bis(oxidanylium)
 *   Page 1101, P-73.5.1.2, example 3. [corrected 7 August 2019]
 *     For pentane-2,4-diylidenebis(oxidanium) (PIN)
 *     read (pentane-2,4-diylidene)bis(oxidanium) (PIN)
 *     for pentane-2,4-diylidenebis(oxonium)
 *     read (pentane-2,4-diylidene)bis(oxonium)
 *   Page 1102, P-73.5.1.2, example 4 on this page. [corrected 7 August 2019]
 *     For pyridine-2,6-diylbis(sulfanylium) (PIN)
 *     read (pyridine-2,6-diyl)bis(sulfanylium) (PIN)
 *     for pyridine-2,6-diylbis(thioxylium)
 *     read (pyridine-2,6-diyl)bis(thioxylium)
 *   Page 1102, P-73.5.1.2, example 5 on this page. [corrected 7 August 2019]
 *     For 1,4-phenylenebis(dioxo-λ⁶-sulfanylium) (PIN)
 *     read (1,4-phenylene)bis(dioxo-λ⁶-sulfanylium) (PIN)
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-73.5.1.2', [
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P73512b.gif', pin: '1,4-dioxobutane-1,4-bis(ylium)' },
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P73512d.gif', pin: 'benzene-1,4-bis(carboxamidylium)' },
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P73512e.gif', pin: 'N¹,N¹,N¹,N³,N³,N³-hexamethylpropanebis(amidium)', otherNames: ['N,N,N,N′,N′,N′-hexamethylmalonamidium'] },
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P73512f.gif', pin: 'butanebis(nitrilium)', otherNames: ['butanediylidynebis(ammonium)', 'butanediylidynebis(azanium)'] },
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P73512i.gif', name: 'benzene-1,4-bis(sulfonylium)' },
]);
