/**
 * P-102.5.5
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Thio sugars and other chalcogen analogues
 * The replacement of a hydroxy oxygen atom of an aldose or ketose, or of the oxygen atom of the
 * carbonyl group of an acyclic aldose or ketose, by sulfur, selenium or tellurium is indicated by
 * placing the prefix ‘thio’, ‘seleno’ or ‘telluro’, respectively, preceded by the appropriate locant,
 * at the front of the systematic or trivial name of the aldose or ketose. In carbohydrate
 * nomenclature, the prefixes ‘thio’, ‘seleno’ and ‘telluro’ are considered as detachable, alphabetized
 * prefixes.
 * Replacement of the ring oxygen atom of the cyclic form of an aldose or ketose by sulfur, selenium,
 * or tellurium is indicated in the same way, the number of the non-anomeric adjacent carbon atom of …
 * Sulfoxides (and selenoxides or telluroxides) and sulfones (and selenones or tellurones) are named by
 * functional class nomenclature (see P-63.6 for functional class names of sulfoxides and sulfones).”
 *
 * The whole section is in the Blue Book.
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-102.5.5', [
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P102550a.gif', name: '2-thio-α-D-glucopyranose' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P102550b.gif', name: '5-thio-β-D-galactopyranose' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P102550c.gif', name: 'β-D-glucopyranosyl phenyl sulfoxide' },
]);
