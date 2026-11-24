/**
 * P-25.3.4.2.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Order of seniority for selecting parent components
 * When there are two or more locations for a parent component in a fused ring structure, the following
 * criteria are applied sequentially until a complete distinction is obtained. In the examples below,
 * the senior location is identified by a solid box and other locations with a dashed box.
 * The senior location is:
 * (a) the location that enables the whole ring system to be named by fusion
 * nomenclature, thus excluding names of bridged fused systems;
 * (b) the location that results in a name that does not require attached components higher than
 * first-order. …
 * (c) the location that results in the maximum number of first-order attached components, second-order
 * attached components, etc. …
 * (d) a location that permits the expression of the maximum number of identical attached components
 * with multiplicative prefixes;
 * (e) a location that uses a senior interparent component;
 * (f) a location that results in preferred attached components, first-order, then second-order, etc.
 * This criterion is embellished and illustrated in the original publication (see FR-3.3.1 in ref. 4).”
 *
 * The whole section is in the Blue Book.
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-25.3.4.2.1', [
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250304f.gif', pin: 'cyclopenta[ij]pentaleno[2,1,6-cde]azulene', notNames: ['1,9-methenopentaleno[1,6-ef]azulene', '1,9-methenodicyclopenta[cd,f]azulene'] },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250304g.gif', pin: 'cyclopenta[h]indeno[2,1-f]naphtho[2,3-a]azulene', notNames: ['benzo[a]benzo[5,6]indeno[2,1-f]cyclopenta[h]azulene', 'benzo[5,6]indeno[1,2-e]indeno[2,1-h]azulene'] },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250304h.gif', name: 'dibenzo[c,g]phenanthrene', notNames: ['naphtho[2,1-c]phenanthrene'] },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250304i.gif', pin: 'dinaphtho[1,2-c :2′,1′-m]picene', notNames: ['benzo[c]phenanthreno[2,1-m]picene'] },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250304j.gif', pin: 'anthra[2,1,9-def:6,5,10-d′e′f′]diisoquinoline', notNames: ['phenanthro[2,1,10-def:7,8,9-d′e′f′]diisoquinoline'] },
]);
