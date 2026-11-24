/**
 * P-102.7.1.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Disaccharides with a free hemiacetal group
 * Disaccharides which can be regarded as formed by elimination of one molecule of water from one
 * glycosidic (anomeric) hydroxy group and one alcoholic hydroxy group, are named as glycosylglycoses.
 * Locants and anomeric descriptors must be cited in the full name.
 * There are two established methods for citing locants:
 * (1) in parentheses between the components with an arrow going from the locant of the glycosyl
 * component to that of the glycose component;
 * (2) at the front of the glycosyl component.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-102.7.1.2', [
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P102712a.gif', name: 'α-D-glucopyranosyl-(1→4)-β-D-glucopyranose' },
]);
