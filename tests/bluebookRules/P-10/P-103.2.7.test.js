/**
 * P-103.2.7
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Amides, anilides, hydrazides, and other nitrogenous analogues
 * Amides, anilides, hydrazides, and other nitrogenous analogues derivatives derived from amino acids
 * are named systematically.
 * Names of amides derived from amino acids are formed by changing the final letter ‘e’ in the names of
 * amino acids, when appropriate, into ‘amide’ or adding the term ‘amide’ to the name tryptophan.
 * The 4-amide of aspartic acid has its own name, asparagine, and the 5-amide of glutamic acid is
 * glutamine (see Table 10.4). Their 1-amides are named as follows:
 * The 1-amides of aspartic acid and glutamic acid are named as follows:
 * Names of anilides are formed by N-substitution of the amide group by the phenyl group or a
 * substituted phenyl group. The ending ‘anilide’, in place of ‘amide’, may also be used.
 * Substitution on nitrogen atoms in amides of amino acids is expressed systematically by the methods
 * described for amides (P-66.1.1.3) and amines (P-62.2.2.1).”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 1406, P-103.2.7, line 1. [corrected 19 September 2018]
 *     For ...and other nitrogeneous analogues derivatives...
 *     read ...and other nitrogenous analogues derivatives...
 *   Page 1407, P-103.2.7, example 4 on this page. [corrected 23 September 2020]
 *     For 2-amino-1-N-phenylacetamide
 *     read 2-amino-N1-phenylacetamide
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-103.2.7', [
  { formula: 'H2N-CH2-CO-NH2', name: '2-aminoacetamide' },
  { formula: 'H2N-CO-CH2-CH(NH2)-CO-NH2', name: '2-aminobutanediamide' },
  { formula: 'H2N-CO-CH2-CH2-CH(NH2)-CO-NH2', name: '2-aminopentanediamide' },
  { formula: 'HO-CO-CH2-CH(NH2)-CO-NH2', name: '3,4-diamino-4-oxobutanoic acid' },
  { formula: 'HO-CO-CH2-CH2-CH(NH2)-CO-NH2', name: '4,5-diamino-5-oxopentanoic acid' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P103270a.gif', name: '2-amino-N¹-phenylacetamide' },
  { formula: 'CH3-NH-CH2-CO-NH-CH2-CH3', name: 'N-ethyl-2-(methylamino)acetamide' },
  { formula: 'CH3-CO-NH-CH2-CO-NH2', name: '2-(acetylamino)acetamide' },
]);
