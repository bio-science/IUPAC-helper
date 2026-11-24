/**
 * P-15.3.2.4.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Substituent groups on the identical parent structures other than the principal characteristic
 * group, if any, are cited as prefixes associated with the identical parent structure when they
 * fulfill the following two conditions:
 * (1) the linking bonds (single or multiple) between the central substituent group of the
 * multiplicative group and all subsequent structural units are identical; and
 * (2) the locants of all substituent groups on the identical parent structures, including suffixes,
 * are identical.
 * The identical parent structures, together with their prefixes and suffixes, if any, are treated as a
 * compound or complex group, enclosed in parentheses, square brackets, or braces according to the …”
 *
 * The whole section is in the Blue Book.
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 82, P-15.3.2.4.1, example 3 on this page. [corrected 6 May 2020]
 *     Delete tetramethyldiazoxane (see P-21.2.3.1)
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-15.3.2.4.1', [
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1503az.gif', pin: '1,1′-oxybis(4-bromobenzene)' },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1503ba.gif', pin: '4,4′-oxybis(2-bromobenzoic acid)' },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1503bb.gif', pin: '1,1′-methylenebis(pentafluorodisilane)' },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1503bc.gif', pin: 'N,N′-oxybis(N-methylmethanamine)' },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1503bd.gif', pin: 'N,N′-[ethenyl(methyl)silanediyl]bis(N-methylacetamide)' },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1503be.gif', pin: '1,1′-methylenebis[3-bromo-4-(chloromethyl)benzene]' },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1503bf.gif', pin: '3,3′-oxybis[5-(1-chloroethyl)pyridine]' },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1503bh.gif', pin: '3,3′-sulfanediylbis(N,N-dimethylpropanamide)' },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1503bi.gif', pin: 'bis(phenyldiazenyl)methanone', notNames: ['1,1′-carbonylbis(2-phenyldiazene)'] },
]);
