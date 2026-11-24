/**
 * P-54.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “UNSATURATION IN RING ASSEMBLIES COMPOSED OF MONOCYCLIC MANCUDE AND SATURATED RINGS
 * When assemblies of otherwise identical rings contain both mancude and saturated rings, the use of
 * hydro prefixes is preferred, except in the case of a two ring assembly consisting of one benzene
 * ring and a cyclohexane ring. However, when the requirements for the formation of phane names are met
 * (see P-52.2.5.1), phane names are preferred IUPAC names.”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 598, P-54.3, example 2. [modified 6 December 2023]
 *     Replace the structure with:
 *     read (1Z,3E,5Z,7E,9Z)-cyclododeca-1,3,5,7,9-pentaen-11-yne (PIN)
 *     for 1,2-didehydro[12]annulene
 *     read 1,2-didehydro[12]annulene (numbering shown)
 *   Page 598, P-54.3, example 3. [modified 29 January 2020]
 *     For 4-[4-(4′-phenyl-[1,1′-bi(cyclohexan)]-4-yl)phenyl]-1¹,2¹:2⁴,3¹-tercyclohexyl
 *     read 1⁴-[4-(4′-phenyl[1,1′-bi(cyclohexan)]-4-yl)phenyl]-1¹,2¹:2⁴,3¹-tercyclohexyl
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-54.3', [
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P540300a.gif', pin: 'cyclohexylbenzene', otherNames: ['1,2,3,4,5,6-hexahydro-1,1′-biphenyl'] },
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P540300b.gif', pin: '1,2,3,4,5,6-hexahydro-2,2′-bipyridine', otherNames: ['2-(piperidin-2-yl)pyridine'] },
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P540300c.gif', pin: '1(1),4(1,4)-dibenzena-2,3,5,6(1,4),7(1)-pentacyclohexanaheptaphane', otherNames: ['1⁴-[4-(4′-phenyl[1,1′-bi(cyclohexan)]-4-yl)phenyl]-1¹,2¹:2⁴,3¹-tercyclohexane'] },
]);
