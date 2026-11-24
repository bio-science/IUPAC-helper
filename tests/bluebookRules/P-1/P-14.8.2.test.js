/**
 * P-14.8.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Mixed organic – inorganic adducts
 * Formulas for mixed adducts composed of organic and inorganic chemical species are written in the
 * following order: organic components in order as described in P-14.8.1, inorganic components in order
 * as described in Ref 12; water (if present), is cited last.
 * Although organic components are preferred IUPAC names, preferred IUPAC names cannot be assigned to
 * mixed adducts because preferred IUPAC names have not yet been determined for inorganic components.
 * However, names are formed by citing the names of individual compounds, connected by long (em) dashes
 * (—). …”
 *
 * The whole section is in the Blue Book.
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-14.8.2', [
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1408k.gif', name: 'N-propyl-N-(pyridin-3-yl)-1H-indol-1-amine—hydrogen chloride (1/1)' },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1408l.gif', name: 'N⁴-(7-chloroquinolin-4-yl)-N¹,N¹-diethylpentane-1,4-diamine—phosphoric acid (1/2)' },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1408m.gif', name: 'N⁴-(7-chloroquinolin-4-yl)-N¹,N¹-diethylpentane-1,4-diamine—sulfuric acid (1/1)' },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1408n.gif', name: '3-[(2S)-1-methylpyrrolidin-2-yl]pyridine—hydrogen chloride (1/1)' },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1408o.gif', name: '2-amino-N-(4-ethoxyphenyl)acetamide—water (1/1)' },
  { formula: 'HOOC-COOH • H2N-CH2-CH2-NH2 • 3/2 H2O', name: 'oxalic acid—ethane-1,2-diamine—water (2/2/3)' },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1408p.gif', name: '4-[4-(aminomethyl)benzene-1-sulfonyl]aniline—hydrogen chloride—water (1/1/1)' },
]);
