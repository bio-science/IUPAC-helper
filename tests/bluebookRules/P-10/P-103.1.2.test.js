/**
 * P-103.1.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Numbering of α-amino carboxylic acids
 * In acyclic amino acids, the carbon atom of the carboxy group next to the carbon atom carrying the
 * amino group is numbered ‘1’. Alternatively, Greek letters may be used, with C-2 designated α.
 * A heteroatom in a characteristic group has the same number as the carbon atom to which it is
 * attached, e.g. N-2 is on C-2. …
 * The carbon atoms of the methyl groups of valine are numbered ‘4’ and ‘4′’; likewise, those of
 * leucine are ‘5’ and ‘5′’. Isoleucine is numbered as follows:
 * The atoms in proline are numbered as in pyrrolidine, the nitrogen atom being numbered ‘1’, and the
 * carbon atom bonded to the carboxy group is numbered ‘2’.
 * The carbon atoms in the aromatic rings of phenylalanine, tyrosine and tryptophan are numbered as in
 * systematic nomenclature. The carbon atoms of the chains are designated ‘α’ and ‘β’ as shown below:
 * A special fixed numbering, composed of numerals and Greek letters, is assigned to histidine; …”
 *
 * The whole section is in the Blue Book.
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-103.1.2', [
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P103120b.gif', name: 'isoleucine' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P103120c.gif', name: 'proline' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P103120d.gif', name: 'phenylalanine' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P103120e.gif', name: 'tyrosine' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P103120f.gif', name: 'tryptophan' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P103120g.gif', name: 'histidine' },
]);
