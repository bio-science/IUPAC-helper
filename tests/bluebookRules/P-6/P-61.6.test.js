/**
 * P-61.6
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “HETERONES
 * Compounds containing the –PO, –PO2, –AsO or –AsO2 are called heterones (see P-64.1.2.2, P-64.4). In
 * the presence of a more senior characteristic group they are described by the compound prefixes
 * oxophosphanyl, dioxo-λ⁵-phosphanyl, oxoarsanyl, and dioxo-λ⁵-arsanyl.
 * Note: In spite of the use of the term ‘phospho’ to describe the –PO2 group as a substituent prefix
 * since 1937, the term ‘phospho’ is widely used in biochemical nomenclature in place of phosphono for
 * …”
 *
 * The whole section is in the Blue Book.
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-61.6', [
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P610600a.gif', pin: 'phenyl-λ⁵-phosphanedione', otherNames: ['dioxo(phenyl)-λ⁵-phosphane'], notNames: ['phosphobenzene'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P610600b.gif', name: 'N-(2-methylpropyl)-1-oxoarsanamine', notNames: ['N-arsenoso-2-methylpropanamine'] },
]);
