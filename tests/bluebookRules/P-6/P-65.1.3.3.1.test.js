/**
 * P-65.1.3.3.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Substitutive nomenclature, suffix mode
 * Acids in which the carbonyl oxygen atom of a carboxylic acid group has been replaced by =N-OH are
 * named as N-hydroxy derivatives of imidic acids named as described in P-65.1.3.1. This method is used
 * to generate preferred IUPAC names.
 * Note: The following former methodology is no longer used for preferred IUPAC names:
 * The name formed by modifying the ‘-oic acid’ or ‘-carboxylic acid’ suffix of a systematically named
 * acid, or the ‘-ic acid’ ending of the retained name of an acid to ‘-hydroximic acid’ or …
 * This former method may be still used in general nomenclature.”
 *
 * The whole section is in the Blue Book.
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-65.1.3.3.1', [
  { formula: 'CH3-C(=N-OH)-OH', pin: 'N-hydroxyethanimidic acid', otherNames: ['acetohydroximic acid'] },
  { formula: 'C6H5-C(=N-OH)-OH', pin: 'N-hydroxybenzenecarboximidic acid', otherNames: ['benzohydroximic acid'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650103p.gif', pin: 'N-hydroxybutanimidic acid', otherNames: ['butyrohydroximic acid', 'butanohydroximic acid'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650103q.gif', name: 'N¹,N⁴-dihydroxybutanediimidic acid' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650103r.gif', pin: 'N²-hydroxy-1H-pyrrole-2-carboximidic acid', otherNames: ['pyrrole-2-carbohydroximic acid'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650103s.gif', pin: 'N¹,N′⁴-dihydroxybenzene-1,4-dicarboximidic acid', otherNames: ['terephthalohydroximic acid'] },
]);
