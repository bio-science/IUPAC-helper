/**
 * P-57.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “PREFIXES DERIVED FROM ORGANIC FUNCTIONAL PARENT COMPOUNDS
 * Names of prefixes derived from functional parent compounds are either retained prefixes or are
 * systematically formed by substitutive nomenclature. Retained prefixes corresponding to functional
 * parent compounds used as preferred prefixes are described in P-34.2. Retained prefixes derived from
 * functional compounds that can only be used in general nomenclature are described in Chapter P-6 in
 * Sections related to specific classes. …”
 *
 * The whole section is in the Blue Book.
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-57.3', [
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P570300a.gif', preferredPrefix: 'anilino' },
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P570300b.gif', preferredPrefix: 'phenoxy' },
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P570300c.gif', preferredPrefix: '4-aminophenyl' },
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P570300d.gif', preferredPrefix: '4-methoxyphenyl' },
  { formula: 'H-CO–', name: 'formyl (preferred prefix,' },
  { formula: 'CH3-CO–', name: 'acetyl (preferred prefix,' },
]);
