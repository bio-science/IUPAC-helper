/**
 * P-64.4.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Thioketone and thioaldehyde oxides.
 * Thioketone oxides are named by three methods.
 * (1) substitutively, as heterones, using the λ-convention and the suffix ‘one’;
 * (2) by functional class nomenclature, using the class names ‘oxide’, and ‘dioxide’, as required.
 * (3) substitutively, based on the preferred parent structure
 * Method (1) leads to preferred IUPAC names.
 * When a group –SO– or –SO2– is part of a ring system, oxygen atom(s) are expressed substitutively by
 * the suffix ‘-one’ added to the name of the heterocycle in which the sulfur atoms are designated as
 * …”
 *
 * The whole section is in the Blue Book.
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-64.4.2', [
  { formula: 'CH3-CH2-CH=S=O', pin: 'propylidene-λ⁴-sulfanone', otherNames: ['propanethial oxide', '1-(oxosulfanylidene)propane'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P640402a.gif', pin: '1H-1λ⁴-thiophen-1-one', otherNames: ['thiophene oxide', '1-oxo-1H-1λ⁴-thiophene'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P640402b.gif', pin: '5H-λ⁶-thianthrene-5,5-dione', otherNames: ['thianthrene 5,5-dioxide', '5,5-dioxo-5H-5λ⁶-thianthrene'] },
]);
