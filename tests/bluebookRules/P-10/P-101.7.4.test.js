/**
 * P-101.7.4
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Addition of rings denoting functional groups
 * Rings denoting functional groups are preferably named by the usual methods described for
 * constructing systematic names. Cyclic esters and lactones are named by the general method described
 * for naming esters (see P-65.6.3.5). Names of acetals are formed by using the principles of
 * functional class nomenclature (see P-66.6.5) rather than by fusion nomenclature described in
 * P-101.5. When a choice is possible, a fusion name is preferred.”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 1339, P-101.7.4, example 1. [corrected 24 October 2018]
 *     Replace the structure with:
 *   Page 1339, P-101.7.4, examples 2. [modified 24 October 2018]
 *     For 19,21-epoxyspermidin-21-one
 *     read 19,21-epoxyaspidospermidin-21-one
 *     replace the structure with:
 *   Page 1339, P-101.7.4, example 3. [modified 26 June 2019]
 *     For (3αH,4αH)-2′,2′-dimethyl-3,4-dihydro-[1,3]-dioxolo[4′,5′:3,4]matridine
 *     read (3αH,4αH)-2′,2′-dimethyl-3,4-dihydro[1,3]dioxolo[4′,5′:3,4]matridine
 *     For propane-2-one matridine-3β,4β-diyl acetal
 *     read propane-2-one matridine-3β,4β-diyl ketal
 *     for acetone matridine-3β,4β-diyl acetal
 *     read acetone matridine-3β,4β-diyl ketal
 *   Page 1339, P-101.7.4, example 3. [corrected 23 September 2020]
 *     Replace the structure with:
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-101.7.4', [
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P101740a.gif', name: 'aspidospermidine-3α,4α-diyl carbonate' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P101740b.gif', name: '19,21-epoxyaspidospermidin-21-one' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P101740c.gif', name: 'propan-2-one matridine-3β,4β-diyl ketal' },
]);
