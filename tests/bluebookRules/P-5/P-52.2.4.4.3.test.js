/**
 * P-52.2.4.4.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Bridging nomenclature. A bridged fused system (see Section P-25.4) is used to generate names for
 * structures that cannot be named by normal fusion nomenclature. A properly formed fusion name is
 * first created; then additional rings are created by using bridges.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-52.2.4.4.3', [
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P520204q.gif', pin: '12,19:13,18-di(metheno)dinaphtho[2,3-a:2′,3′-o]pentaphene' },
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P520204r.gif', pin: '8,7-(azenoetheno)cyclohepta[4,5]cycloocta[1,2-b]pyridine', notNames: ['6,7-buta[1,3]dienocycloocta[1,2-b:5,6-c′]dipyridine'] },
]);
