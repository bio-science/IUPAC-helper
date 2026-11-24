/**
 * P-68.3.1.2.4
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Semicarbazides
 * Semicarbazide is the amide of ‘hydrazinecarboxylic acid’. As acids and amides expressed by suffixes
 * are senior to acids or amides modified by functional replacement, these names are senior to
 * ‘carbonohydrazidic acid’ and ‘carbonohydrazidic amide’.
 * Semicarbazide is the traditional name for the compound H2N-NH-CO-NH2, systematically named
 * ‘hydrazinecarboxamide’. The systematic name is the preferred IUPAC name. …
 * Numerical locants are no longer used for the parent name semicarbazide in preferred IUPAC names.
 * As a prefix, the –HN-NH-CO-NH2 group is called ‘semicarbazido’, ‘2-carbamoylhydrazin-1-yl’
 * (preferred prefix), or ‘2-(aminocarbonyl)hydrazin-1-yl’.
 * Chalcogen analogues are named systematically as described for amides or by functional replacement
 * nomenclature using the class term ‘semicarbazide’ modified by the replacement prefixes ‘thio’, …”
 *
 * The whole section is in the Blue Book.
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 1002, P-68.3.1.2.4, example 2. [corrected 28 October 2016]
 *     For N,1-dimethylhydrazin-1-carboxamide (PIN)
 *     read N,1-dimethylhydrazine-1-carboxamide (PIN)
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-68.3.1.2.4', [
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68312k.gif', pin: 'hydrazinecarboxamide' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68312l.gif', name: 'semicarbazide' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68312m.gif', pin: 'N-phenylhydrazinecarboxamide', otherNames: ['4-phenylsemicarbazide'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68312n.gif', pin: 'N,1-dimethylhydrazine-1-carboxamide', otherNames: ['2,4-dimethylsemicarbazide'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68312o.gif', pin: '3-(2-carbamoylhydrazin-1-yl)propanoic acid' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68312p.gif', pin: 'hydrazinecarboselenoamide' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68312q.gif', name: 'selenosemicarbazide' },
]);
