/**
 * P-101.2.6.1.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “At chirality centers, the ‘α/β’ system is used as described in IUPAC- IUBMB recommendations for the
 * nomenclature of steroids (ref. 16). Each chirality center is described by the stereodescriptor ‘α’,
 * ‘β’, or ‘ξ’ to indicate a configuration that must be specified and those that are inverted. The
 * symbols ‘α’, ‘β’, or ‘ξ’, preceded by the appropriate locants, are placed immediately at the
 * beginning of the name of the fundamental parent structure. …
 * A change in configuration of a nonbridgeheaded side chain that is part of the parent is denoted by
 * the method specified for ‘C-17’ of steroids (see 3S-5.2, ref. …”
 *
 * The whole section is in the Blue Book.
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-101.2.6.1.1', [
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P101261a.gif', name: 'pregnane' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P101261b.gif', name: '5β,9β,10α-pregnane' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P101261c.gif', name: 'abietane' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P101261d.gif', name: '13β-abietane' },
]);
