/**
 * P-66.3.3.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Alkyl, aryl, cycloalkyl, etc. substituents on the nitrogen atoms of hydrazides are described by the
 * appropriate prefix names and the locants ‘N’ for –NH– and ‘N′’ for –NH2, as illustrated below. The
 * locants ‘1′’and ‘2′’ have been used in the past for naming hydrazides as derivatives of hydrazine;
 * these locants are no longer recommended. Preferred IUPAC names are hydrazide names and use the
 * locants ‘N’ and ‘N′’”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-66.3.3.1', [
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66331b.gif', pin: 'N-methylacetohydrazide', notNames: ['1-acetyl-1-methylhydrazine'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66331c.gif', pin: '2-chloro-N,N′,N′-trimethylpropanehydrazide', notNames: ['1-(2-chloropropanoyl)-1,2,2-trimethylhydrazine'] },
]);
