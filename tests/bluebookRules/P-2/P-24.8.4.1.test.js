/**
 * P-24.8.4.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Monospiro ring systems composed of two different ring systems and a spiro heteroatom with a
 * nonstandard bonding number are named by placing the prefix spiro in front of the names of the
 * components cited in alphabetical order and with appropriate spiro locants. The lowest locant
 * (unprimed) is used to denote the spiro fusion and the λ symbol is placed at the front of the name.
 * Indicated hydrogen, if necessary, is added in front of the λ symbol. …
 * Note: The double set of brackets in this name occurs because the spiro name requires them and
 * brackets are used to enclose locants belonging to ring component names (see P-16.5.2.2). …
 * Note 1: Adamantane, a retained name, is preferred to its systematic von Baeyer name.
 * Note 2: The double set of brackets in this name occurs because the spiro name requires them and
 * brackets are used to enclose locants belonging to ring component names (see P-16.5.2.2). …
 * Note: The double set of brackets in this name occurs because the spiro name requires them and
 * brackets are used to enclose locants belonging to ring component names (see P-16.5.2.2). …”
 *
 * The whole section is in the Blue Book.
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-24.8.4.1', [
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P240804a.gif', pin: '3H-2λ⁵-spiro[[1,3,2]benzoxazaphosphole-2,2′-[1,3,5,2]triazaphosphinine]' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P240804b.gif', pin: '3H-1′λ⁵-spiro[[1,4,2]oxazaphosphole-2,1′-[2,8,9]trioxa[1]phosphaadamantane]', otherNames: ['3H-1′λ⁵-spiro[[1,4,2]oxazaphosphole-2,1′-[2,8,9]trioxa[1]phosphatricyclo[3.3.1.1³,⁷]decane]'] },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P240804c.gif', pin: '3H-2λ⁵,5′λ⁵-spiro[[1,3,2]benzoxazaphosphole-2,2′-[1,3,2,5]diazadiphosphinine]' },
]);
