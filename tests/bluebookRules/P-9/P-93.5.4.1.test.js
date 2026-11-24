/**
 * P-93.5.4.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Specification of configuration by CIP stereodescriptors
 * A great variety of fused and bridged fused carbocyclic and heterocyclic compounds are described by
 * specifying their stereogenic units as ‘R’, ‘S’, ‘r’, ‘s’, ‘M’, and ‘P’. A few examples illustrate
 * chirality associated with carbon and heteroatoms.”
 *
 * The whole section is in the Blue Book.
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 1267, P-93.5.4.1, example 1 on this page. [corrected 2 January 2019]
 *     For(1R,2r,3S,3aR,4S,7R,7aS)-1,2,3,4,5,6,7,8,8-nonachloro-2,3,3a,4,7,7a-hexahydro-4,7-methano-1H-
 *     indene (PIN)
 *     read(1R,2r,3S,3aR,4S,7R,7aS)-1,2,3,4,5,6,7,8,8-nonachloro-2,3,3a,4,7,7a-hexahydro-1H-4,7-methanoindene
 *     (PIN) [remove space from name]
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-93.5.4.1', [
  // Drawn in the Blue Book.
  { drawing: 'P9gif/P93541f.gif', name: 'trans-octahydroindole' },
  // Drawn in the Blue Book.
  { drawing: 'P9gif/P93541i.gif', name: 'cis-decahydronaphthalene' },
  // Drawn in the Blue Book.
  { drawing: 'P9gif/P93541k.gif', name: 'trans-decahydronaphthalene' },
  // Drawn in the Blue Book.
  { drawing: 'P9gif/P93541l.gif', pin: '1,2-dihydronaphthalene' },
]);
