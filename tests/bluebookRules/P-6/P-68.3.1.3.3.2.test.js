/**
 * P-68.3.1.3.3.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “An azoxy compound, according to the general seniority given to zwitterions over suffixes expressing
 * characteristic groups, is preferably named as a derivative of diazene oxide, unless some other
 * priority is given to another radical or ionic group. In general nomenclature, the traditional method
 * for naming azoxy compounds is maintained. …
 * When the azoxy compound has to be expressed by a prefix, substitutive nomenclature using the
 * λ-convention is preferred (see P-14.1).”
 *
 * The whole section is in the Blue Book.
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-68.3.1.3.3.2', [
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68313o.gif', pin: '1-(1-carboxynaphthalen-2-yl)-2-phenyldiazene 2-oxide', otherNames: ['2-(phenyl-ONN-azoxy)naphthalene-1-carboxylic acid'], notNames: ['2-(phenyl-ONN-azoxy)-1-naphthoic acid'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68313p.gif', preferredPrefix: '2-(2-phenyl-2-oxo-2λ⁵-diazenyl)naphthalen-1-yl' },
]);
