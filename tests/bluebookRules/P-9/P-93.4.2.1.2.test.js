/**
 * P-93.4.2.1.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Compounds containing more than one double bond
 * The stereodescriptors ‘E’ and ‘Z’ related to the parent are cited, preceded by the appropriate
 * locant if more than one double bond is present, before the complete name of the compound, or before
 * the name of the appropriate component. Chain locants are used when double bonds are ‘exo’ to the
 * chain (see fifth example below). If more than one descriptor is used, the descriptors are cited in
 * ascending order of their respective locants.
 * When alternative numberings of a chain or rings or ring systems are possible, that numbering is
 * chosen which gives a ‘cis’ attachment at the first point of difference. …
 * Stereodescriptors ‘cis’ and ‘trans’ may be used to describe double bonds having two hydrogen atoms,
 * one on each carbon atom, but stereodescriptors ‘E’ and ‘Z’ are used in preferred IUPAC names. …”
 *
 * The whole section is in the Blue Book.
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 1236, P-93.4.2.1.2, 3rd paragraph, line 3/5. [corrected 26 June 2019]
 *     For ... The stereodescriptors, ‘cis’ and ‘trans’, placed in parentheses, are cited at the front
 *     of the name, preceded by the appropriate locant followed by a hyphen.
 *     read ... The stereodescriptors, ‘cis’ and ‘trans’, are cited at the front of the name, preceded
 *     by the appropriate locant, if necessary, followed by a hyphen.
 *   Page 1236, P-93.4.2.1.2, example 1. [corrected 10 April 2019]
 *     For (2-cis,4-trans)-octa-2,4-diene
 *     read 2-cis,4-trans-octa-2,4-diene
 *   Page 1237, P-93.4.2.1.2, example 1 on this page. [corrected 10 April 2019]
 *     For (2-trans,4-cis)-hexa-2,4-dienoic acid
 *     read 2-trans,4-cis-hexa-2,4-dienoic acid
 *   Page 1237, P-93.4.2.1.2, example 3 on this page. [corrected 10 April 2019]
 *     For (3-cis,5-trans)-octa-3,5-diene
 *     read 3-cis,5-trans-octa-3,5-diene
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-93.4.2.1.2', [
  // Drawn in the Blue Book.
  { drawing: 'P9gif/P93421i.gif', name: '2-cis,4-trans-octa-2,4-diene' },
  // Drawn in the Blue Book.
  { drawing: 'P9gif/P93421j.gif', name: '2-trans,4-cis-hexa-2,4-dienoic acid' },
  // Drawn in the Blue Book.
  { drawing: 'P9gif/P93421l.gif', name: '3-cis,5-trans-octa-3,5-diene' },
]);
