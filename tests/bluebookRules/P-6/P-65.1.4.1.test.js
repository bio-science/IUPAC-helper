/**
 * P-65.1.4.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Peroxycarboxylic acids are named systematically using the following suffixes:
 * –(C)O-OOH peroxoic acid
 * –CO-OOH carboperoxoic acid
 * Retained names of carboxylic acids are modified by the prefix ‘peroxy’. Preferred IUPAC names are
 * formed by functional replacement of systematic carboxylic acid names.
 * The use of systematic substitutive names for peroxycarboxylic acids is a change for formic acid,
 * acetic acid, benzoic acid, oxalic acid, and oxamic acid.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-65.1.4.1', [
  { formula: 'HCO-OOH', pin: 'methaneperoxoic acid', otherNames: ['peroxyformic acid', 'performic acid'] },
  { formula: 'CH3-CO-OOH', pin: 'ethaneperoxoic acid', otherNames: ['peroxyacetic acid', 'peracetic acid'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650104a.gif', pin: 'hexaneperoxoic acid' },
  { formula: 'C6H5-CO-OOH', pin: 'benzenecarboperoxoic acid', otherNames: ['peroxybenzoic acid', 'perbenzoic acid'] },
  { formula: 'H2N-CO-CO-OOH', pin: 'amino(oxo)ethaneperoxoic acid', otherNames: ['peroxyoxamic acid'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650104b.gif', pin: 'cyclohexanecarboperoxoic acid' },
  { formula: 'HOO-CO-CO-OOH', pin: 'ethanediperoxoic acid', otherNames: ['diperoxyoxalic acid'] },
]);
