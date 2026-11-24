/**
 * P-52.2.7.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “The preferred numbering for ring assemblies composed of three or more identical cyclic systems uses
 * composite locants rather than primed locants (see P-28.3.1).
 * A new numbering system is now recommended for preferred IUPAC names of ring assemblies with more
 * than two rings or ring systems; it consists of composite locants, for example, 1². …”
 *
 * The whole section is in the Blue Book.
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-52.2.7.2', [
  { pin: '1¹,2¹:2²,3¹-tercyclopropane' },
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P520207g.gif', pin: '1¹,2¹:2⁴,3¹-terphenyl', otherNames: ['1,1′:4′,1′′-terphenyl'], notNames: ['p-terphenyl'] },
]);
