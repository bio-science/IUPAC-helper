/**
 * P-68.3.1.3.3.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “N-Oxides of azo compounds having the general structure R-N2(O)-R′ (R = R′ or R ≠ R′) are known
 * generically as ‘azoxy compounds’. Their nomenclature was revised in 1993 (ref. 2) and is used in
 * these recommendations. Azoxy compounds are named in two different ways:
 * (1) by adding the term ‘oxide’ to the name of the corresponding azo compound, preceded by a locant 1
 * or 2;
 * (2) in the traditional way of replacing the prefix ‘azo’ by ‘azoxy’ and using the locants NNO and
 * ONN to indicate the parent hydride associated with the =N(O) group. …
 * Method (1) leads to preferred IUPAC names. Azoxy compounds could also be named by using the
 * λ-convention or as zwitterions.”
 *
 * The whole section is in the Blue Book.
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-68.3.1.3.3.1', [
  { formula: 'C6H5-N=N(O)-C6H5', pin: 'diphenyldiazene oxide', otherNames: ['azoxybenzene', '1-oxo-1,2-diphenyl-1λ⁵-diazene'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68313m.gif', name: '2,2′,4-trichloroazoxybenzene' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68313n.gif', pin: '1-(1-chloronaphthalen-2-yl)-2-phenyldiazene 2-oxide', otherNames: ['1-chloro-2-(phenyl-ONN-azoxy)naphthalene'] },
]);
