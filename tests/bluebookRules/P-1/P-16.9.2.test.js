/**
 * P-16.9.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Superscript arabic numbers, which are the locants of the parent structure, are used to
 * differentiate the nitrogen atoms of di- and polyamines, di- and polyimines, di- and polyamides,
 * except for geminal amines, imines, and amides.
 * Superscript arabic numbers are now used to differentiate the nitrogen atoms of symmetrical diamines,
 * diimines, diamides, di(imidamides), di(amidines), di(hydrazonamides), di(amidrazones), …
 * Superscript arabic numbers are also used to differentiate the chalcogen atoms in polynuclear organic
 * and inorganic oxoacids.
 * The use of superscripted letter locants is a change from previous practice where numerical locants
 * were placed in front of the letter locants such as 1-O and 3-O, as described in ref. 1, Rule
 * C-213.1.”
 *
 * The whole section is in the Blue Book.
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-16.9.2', [
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1609f.gif', pin: 'N¹-ethyl-N²-methylethane-1,2-diamine', otherNames: ['N-ethyl-N′-methylethane-1,2-diamine'] },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1609g.gif', pin: 'N¹,N⁴-dimethylnaphthalene-1,4-diimine', otherNames: ['N,N′-dimethylnaphthalene-1,4-diimine', 'N,N′-dimethyl-1,4-dihydronaphthalene-1,4-diimine'] },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1609h.gif', pin: 'N¹,N⁵-dimethylpentanediamide', otherNames: ['N,N′-dimethylpentanediamide'] },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1609i.gif', pin: 'N⁴,2-dimethylpentane-2,4-diamine' },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1609j.gif', pin: '1,3-diimidodicarbonic acid' },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1609k.gif', name: '1,3-dithiodicarbonic S¹,S³-acid', notNames: ['1,3-dithiodicarbonic 1-S,3-S-acid'] },
]);
