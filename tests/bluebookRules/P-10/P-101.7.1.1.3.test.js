/**
 * P-101.7.1.1.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Rule 3S-2.7 in ref. 16 describes the methodology to name steroids with a side chain as part of the
 * parent carbocycle and an alkyl substituent at C-17. Rule 3S-2.7 also describes the methodology to
 * name steroids with two alkyl substituents at C-17. This methodology is applicable to any fundamental
 * parent structure described in Section P-101. Locants with superscript numbers are intended for the
 * identification of the atoms, e.g. in ¹³C-nmr assignments, not as locants for further substitution.”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 1334, P-101.7.1.1.3, example 1. [corrected 24 October 2018]
 *     Replace the structure with:
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-101.7.1.1.3', [
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P101711c.gif', name: '17-methyl-5α-campestane' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P101711d.gif', name: '17,17-dimethyl-5α-androstane' },
]);
