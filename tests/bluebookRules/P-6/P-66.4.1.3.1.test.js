/**
 * P-66.4.1.3.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “The systematic name for the group –C(=NH)-NH2 is ‘carbamimidoyl’; it is the name of the acyl group
 * derived from the name carbamimidic acid, HO-C(=NH)-NH2 and is the preferred IUPAC prefix. The prefix
 * ‘amidino’ is no longer recommended. In the acyl group, the –NH2 group is denoted by the locant N and
 * the =NH group by N′.
 * The prefix ‘amidino’ is no longer acceptable in IUPAC nomenclature; ‘carbamimidoyl’ is now
 * recommended for preferred IUPAC names.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-66.4.1.3.1', [
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66413a.gif', pin: '4-carbamimidoylbenzoic acid', otherNames: ['4-[amino(imino)methyl]benzoic acid'], notNames: ['4-amidinobenzoic acid'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66413b.gif', pin: '4-(N′-ethyl-N,N-dimethylcarbamimidoyl)benzoic acid', otherNames: ['4-[(dimethylamino)(ethylimino)methyl]benzoic acid'], notNames: ['4-(N′-ethyl-N,N-dimethylamidino)benzoic acid'] },
]);
