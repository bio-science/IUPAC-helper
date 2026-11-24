/**
 * P-68.1.5.2.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Compounds with groups of higher seniority
 * In the presence of groups of higher seniority, parent structures and prefixes are chosen in
 * accordance with the seniority of classes (see P-41).”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 978, P-68.1.5.2.3, example 4 on this page. [corrected 30 Mach 2022]
 *     For (difluoroboranyl)trimethylsilane (PIN)
 *     read (difluoroboranyl)tri(methyl)silane (PIN)
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-68.1.5.2.3', [
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68152k.gif', pin: 'trimethyl[(4,4,5,5-tetramethyl-1,3,2-dioxaborolan-2-yl)methyl]stannane' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68152l.gif', pin: '3-(9-borabicyclo[3.3.1]nonan-9-yl)-1,1-dimethylstannolane' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68152m.gif', pin: 'N,N,N′,N′-tetrakis(trimethylsilyl)boranediamine', notNames: ['N,N′-boranediylbis[1,1,1-trimethyl-N-(trimethylsilyl)silanamine]'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68152n.gif', name: 'N-[chloro(2,4,6-tri-tert-butylphenyl)gallanyl]-1,1,1-trimethyl-N-(trimethylsilyl)silanamine' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68152p.gif', name: 'P,P′-(phenylgallanediyl)bis(phenylphosphane)' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68152q.gif', pin: '4,4′,4′′-boranetriyltrianiline', otherNames: ['4,4′,4′′-boranetriyltris(benzen-1-amine)'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68152r.gif', pin: '4-(dimethylboranyl)phenol' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68152s.gif', pin: '4-borono-2-nitrobenzoic acid' },
  { formula: '(CH3)3Si-BF2', notNames: ['(trimethylsilyl)boronic difluoride'] },
  { formula: 'Ga(S-S-CH2-CH3)3', name: 'tris(ethyldisulfanyl)gallane' },
  { formula: 'Al(O-CO-[CH2]16-CH3)3', name: 'alumanetriyl tri(octadecanoate)' },
]);
