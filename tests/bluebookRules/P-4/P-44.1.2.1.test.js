/**
 * P-44.1.2.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “When two or more atoms denoting different classes are present in a compound, and when the choice
 * for parent compound is between these atoms, the parent compound is the one belonging to the class
 * cited first in the seniority of classes given above. A single senior atom is sufficient to give
 * seniority to the parent hydride.
 * This rule is broader than Rule D-1.34 in the 1979 Recommendations (ref. 1) that referred to
 * compounds where the heteroatoms were directly attached to each other.”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 450, P-44.1.2.1, example 4 on this page. [modified 22 May 2019]
 *     For tert-butyl(dimethyl)(oxiran-2-ylmethoxy)silane (PIN)
 *     read tert-butyldi(methyl)(oxiranylmethoxy)silane (PIN)
 *     replace the structure with:
 *   Page 451, P-44.1.2.1, example 5. [corrected 19 September 2018]
 *     For 1-[ 5-(2,4,6,8-tetrasilanonan-1-yl)oxan-3-yl]-2,4,6,8-tetraoxaonane (PIN)
 *     read 1-[5-(2,4,6,8-tetrasilanonan-1-yl)oxan-3-yl]-2,4,6,8-tetraoxanonane (PIN) [deleted space in
 *     name]
 *     for [O-chain > Si-chain (see P-44.3); senior parent cannot be chosen by P-44.1.2)
 *     read [O-chain > Si-chain (see P-44.3; senior parent cannot be chosen by P-44.1.2)]
 *     replace the structure with:
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-44.1.2.1', [
  { formula: 'Si(CH3)4', pin: 'tetramethylsilane' },
  { formula: 'CH3-PH-SiH3', pin: 'methyl(silyl)phosphane' },
  { formula: 'Al(CH2-CH3)3', name: 'triethylalumane' },
  { formula: 'HS-S-S-S-S-SiH2-SiH2-SiH3', preselectedName: '1-pentasulfanyltrisilane' },
  // Drawn in the Blue Book.
  { drawing: 'P4gif/P440102b.gif', pin: 'tert-butyldi(methyl)(oxiranylmethoxy)silane' },
  // Drawn in the Blue Book.
  { drawing: 'P4gif/P440102c.gif', pin: '2-(2-carboxyethyl)disilane-1-carboxylic acid' },
  // Drawn in the Blue Book.
  { drawing: 'P4gif/P440102e.gif', pin: '1-(trimethylsilyl)-1H-imidazole' },
  // Drawn in the Blue Book.
  { drawing: 'P4gif/P440102f.gif', pin: '4-(2-cyanophosphinin-4-yl)oxane-2-carbonitrile' },
  // Drawn in the Blue Book.
  { drawing: 'P4gif/P440102g.gif', pin: '2-[(phosphinin-2-yl)phosphanyl]furan' },
  // Drawn in the Blue Book.
  { drawing: 'P4gif/P440102h.gif', pin: '1-(2H-pyran-3-yl)-2-(silolan-2-yl)hydrazine' },
  // Drawn in the Blue Book.
  { drawing: 'P4gif/P440102i.gif', pin: 'trimethyl[1²H-1(6)-pyrana-3,5(1,4),7(1)-tribenzenaheptaphan-7⁴-yl]silane' },
  // Drawn in the Blue Book.
  { drawing: 'P4gif/P440102j.gif', pin: 'N-(2,4,6,8-tetrathianonan-1-yl)-2,4,6,8-tetraoxanonan-1-amine' },
  // Drawn in the Blue Book.
  { drawing: 'P4gif/P440102k.gif', pin: '1-[5-(2,4,6,8-tetrasilanonan-1-yl)oxan-3-yl]-2,4,6,8-tetraoxanonane' },
]);
