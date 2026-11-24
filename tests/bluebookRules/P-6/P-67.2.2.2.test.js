/**
 * P-67.2.2.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Replacement by –OO–, –S–, =S, –Se–, =Se, –Te–, =Te, –NH–, and =NH
 * Functional replacement of oxygen atom(s) is denoted by prefixes, i.e., peroxy, for –OO–; thio, for
 * –S– or =S; seleno, for –Se– or =Se; telluro, for –Te– or =Te; and imido, for –NH– or =NH.
 * Superscripted italic letter locants N¹ N² are used to designate substitution on imido groups that
 * are not linkages between atoms that receive numerical locants as part of the chain. For rules on
 * primes, see P-16.9.
 * The use of superscripted ‘N’ locants is a change from previous recommendations serially letters for
 * example, ‘N′’, ‘N′′’, etc. ; …
 * Superscripted italic letters are used to specifically locate the chalcogen atoms in acid groups, for
 * example S³.
 * This is a change from previous recommendations where the specific location of a chalcogen atom in
 * acid groups was described by an on line arabic number prefixed to the atomic symbol.”
 *
 * The whole section is in the Blue Book.
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 952, P-67.2.2.2, example 1 [corrected 25 August 2016]
 *     For (not 1,3-dithiotriphosphoric 1-S , 3 - S - acid)
 *     read (not 1,3-dithiotriphosphoric 1-S,3-S-acid) [delete spaces in name]
 *   Page 952, P-67.2.2.2, example 4. [modified 20 March 2019]
 *     For 1,3-dithiodiphosphonic O¹,S2-acid
 *     read 1,3-dithiodiphosphonic O¹,S³-acid
 *     for ...name diphosphoric acid...
 *     read ...name diphosphonic acid...
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-67.2.2.2', [
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P67222a.gif', name: '1,3-dithiotriphosphoric S¹,S³-acid', notNames: ['1,3-dithiotriphosphoric 1-S,3-S-acid'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P67222c.gif', name: '2-seleno-1,1,3-trithiodiarsonic S¹,S³-acid' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P67222d.gif', name: '1,3-dithiodiphosphonic O¹,S³-acid' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P67222e.gif', name: '1-imidohypodiarsonic acid' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P67222f.gif', name: '1,3-diimidodiphosphoric acid' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P67222g.gif', name: '1-thiodisulfuric S¹-acid' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P67222h.gif', name: '3-amido-1-selenodisulfuric Se¹-acid' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P67222i.gif', preselectedName: '2-thiodisulfuric acid', otherNames: ['sulfanedisulfonic acid', 'trithionic acid'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P67222j.gif', preselectedName: '2-(dithioperoxy)disulfuric acid', otherNames: ['disulfanedisulfonic acid', 'tetrathionic acid'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P67222k.gif', name: '2,4-diimidotrisulfuric acid' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P67222l.gif', pin: 'N¹-methyl-1-imido-2-thiodithionous S²-acid', notNames: ['1-(methylimido)-2-thiodithionous 2-S-acid'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P67222m.gif', pin: 'N¹-methyl-1,2-diimidodithionous acid' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P67222n.gif', name: '2-imido-1,1,3-trithiodisulfuric O³,S¹-acid' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P67222o.gif', name: '1-imido-1,3-dithiodisulfuric O¹,S³-acid' },
]);
