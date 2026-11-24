/**
 * P-24.3.4
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Heterocyclic ‘spirobi’ ring systems named by skeletal replacement (‘a’) nomenclature
 * When ring components of ‘spirobi’ compounds are named by von Baeyer nomenclature, heteroatoms are
 * indicated by skeletal replacement (‘a’) nomenclature. The spirobi ring system is named as the
 * saturated bi- or polycyclic alicyclic hydrocarbon and the heteroatoms are denoted by ‘a’ prefixes
 * cited at the front of the completed ‘spirobi’ hydrocarbon name. If there is a choice, low locants
 * are given to the spiro atom, then to the heteroatoms as described in Section P-24.2.4.1.
 * Note: This treatment of skeletal replacement (‘a’) prefixes was introduced in the 1999 publication
 * on the nomenclature of spiro compounds (ref. 8).”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-24.3.4', [
  { pin: '5,6′-dithia-2,2′-spirobi[bicyclo[2.2.2]octane] (I)', notNames: ['6,8′-dithia-2,2′-spirobi[bicyclo[2.2.2]octane] (II)'] },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P240304c.gif', pin: '6,6′-dioxa-3,3′-spirobi[bicyclo[3.2.1]octane]' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P240304d.gif', pin: '6-sila-2,2′-spirobi[bicyclo[2.2.1]heptane]' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P240304e.gif', pin: '6-oxa-6′-thia-2,2′-spirobi[bicyclo[2.2.1]heptane]' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P240304f.gif', pin: '2-sila-2,3′-spirobi[bicyclo[3.2.1]octane]' },
]);
