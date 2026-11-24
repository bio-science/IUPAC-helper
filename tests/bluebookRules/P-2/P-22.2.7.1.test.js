/**
 * P-22.2.7.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “The λ-convention is used to denote heteroatoms with nonstandard bonding numbers in heteromonocycles
 * (see P-14.1). The symbol λn, where n is the bonding number, is cited immediately after the locant
 * denoting the heteroatom with the nonstandard bonding number. The indicated hydrogen symbol H, if
 * required to denote saturated skeletal atoms, is cited at the front of the complete name with the
 * appropriate locant(s).”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-22.2.7.1', [
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P220207a.gif', pin: '1H-1λ⁴-thiophene' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P220207b.gif', pin: '3H-1λ⁴-thiophene' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P220207c.gif', pin: '1λ³-iodinane' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P220207d.gif', pin: '1H-1λ⁵-iodole' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P220207e.gif', pin: '1,3λ⁵-oxaphosphole' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P220207f.gif', pin: '1λ⁴,3-thiazine' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P220207g.gif', pin: '1-oxa-4λ⁴-thiacyclotetradecane' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P220207h.gif', pin: '1-oxa-4,8λ⁴-dithiacyclododecane' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P220207i.gif', pin: '1H-1λ⁴-thiepine' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P220207j.gif', pin: '1H-1λ⁴,3λ⁴-dithiepine' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P220207k.gif', pin: '1λ⁶-thiopyran' },
]);
