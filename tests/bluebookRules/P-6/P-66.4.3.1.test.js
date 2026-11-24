/**
 * P-66.4.3.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Hydrazidine suffixes
 * Compounds with the general structure R-C(=N-NH2)-NH-NH2 have the class name ‘hydrazidines’ and are
 * named substitutively by using the suffixes ‘hydrazonohydrazide’ and ‘carbohydrazonohydrazide’ as
 * prescribed for hydrazides. The former method of naming hydrazidines as hydrazones of the
 * corresponding hydrazides (see C-954.2 in ref. 1) is no longer recommended.
 * Hydrazidines are named systematically in these recommendations rather than as hydrazones of the
 * corresponding hydrazides as in the 1979 recommendations.
 * Locants are assigned to nitrogen atoms as follows:
 * When necessary, the locant indicating the position of the hydrazidine characteristic group on the
 * parent structure is given as a superscript arabic number to the appropriate ‘N’ locant.
 * Names of hydrazidines formally derived from carboxylic acids having retained names, formed by
 * replacing the ‘ohydrazide’ ending in names of hydrazides by ‘hydrazonohydrazide’, may be used in
 * general …”
 *
 * The whole section is in the Blue Book.
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 896, P-66.4.3.1, example 5. [corrected 26 September 2018]
 *     Replace the structure with:
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-66.4.3.1', [
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66431b.gif', pin: 'methanehydrazonohydrazide' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66431c.gif', pin: 'butanehydrazonohydrazide' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66431d.gif', pin: 'ethanedihydrazonohydrazide' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66431e.gif', pin: 'N′,N′′-dimethylthiophene-2-carbohydrazonohydrazide' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66431f.gif', pin: 'N′,N′′-dibenzylidene-1,3-thiazole-4-carbohydrazonohydrazide' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66431g.gif', pin: 'N′², N′², N⁶,1-tetramethylnaphthalene-2,6-dicarbohydrazonohydrazide' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66431h.gif', pin: 'N′¹,N′¹-diethyl-N′′′ ′¹,N′′′ ′¹-dimethylcyclohexane-1,1-dicarbohydrazonohydrazide' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66431i.gif', pin: 'N′¹, N′¹-diethyl-N′′′ ′¹,N′′′ ′¹,N ³-trimethylcyclohexane-1,1,3-tricarbohydrazonohydrazide' },
]);
