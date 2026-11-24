/**
 * P-68.1.1.2.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Compounds named by skeletal replacement (‘a’) nomenclature (see P-15.4)”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-68.1.1.2.3', [
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68112j.gif', pin: '2,9-dimethyl-4,7-dioxa-2,9-diboradecane' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68112k.gif', pin: '3,5,7-trisila-1,9-diboranonane', otherNames: ['Si,Si′-bis(boranylmethyl)[silanediylbis(methylene)]bis(silane)'] },
]);
