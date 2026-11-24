/**
 * P-68.3.1.2.5
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Semicarbazones
 * Compounds with the structure R-CH=N-NH-CO-NR′R′′ or RR′C=N-NH-CO-NR′′R′′′ are generically called
 * ‘semicarbazones’. They are named in two ways:
 * (1) substitutively by using the functional parent ‘hydrazinecarboxamide’;
 * (2) by the class modifier ‘semicarbazone’ placed after the name of the corresponding aldehyde or
 * ketone.
 * Method (1) yields preferred IUPAC names.
 * Numerical locants are no longer used for the functional class name semicarbazone in preferred IUPAC
 * names.
 * The compound prefix ‘carbamoylhydrazinylidene’ is used in the presence of a characteristic group
 * that is preferred for citation as a suffix. …
 * Chalcogen analogues of semicarbazones are named systematically as described for amides to give
 * preferred IUPAC names, or by functional replacement nomenclature using the class terms
 * ‘semicarbazone’ …”
 *
 * The whole section is in the Blue Book.
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 1003, P-68.3.1.2.5, example 1. [corrected 28 October 2016]
 *     For (hexan-3-ylidene)-N,N-diphenylhydrazinecarboxamide (PIN)
 *     read 2-(hexan-3-ylidene)-N,N-diphenylhydrazine-1-carboxamide (PIN)
 *     For (1-ethylbutylidene)-N,N-diphenylhydrazinecarboxamide
 *     read 2-(1-ethylbutylidene)-N,N-diphenylhydrazine-1-carboxamide
 *   Page 1003, P-68.3.1.2.5, last example on this page. [corrected 28 October 2016]
 *     For N,N-diphenyl(1-phenylbutylidene)hydrazine-1-carbothioamide (PIN)
 *     read N,N-diphenyl-2-(1-phenylbutylidene)hydrazine-1-carbothioamide (PIN)
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-68.3.1.2.5', [
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68312r.gif', pin: '2-(hexan-3-ylidene)-N,N-diphenylhydrazine-1-carboxamide', otherNames: ['2-(1-ethylbutylidene)-N,N-diphenylhydrazine-1-carboxamide', 'hexan-3-one 4,4-diphenylsemicarbazone'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68312t.gif', pin: '4-[(dimethylcarbamoyl)hydrazinylidene]heptanoic acid', otherNames: ['4-(4,4-dimethylsemicarbazono)heptanoic acid'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68312u.gif', pin: 'hydrazinecarbothioamide' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68312v.gif', name: 'thiosemicarbazide' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68312w.gif', pin: 'N,N-diphenyl-2-(1-phenylbutylidene)hydrazine-1-carbothioamide', otherNames: ['1-phenylbutan-1-one 4,4-diphenylthiosemicarbazone'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68312x.gif', pin: '4-[(dimethylcarbamoselenoyl)hydrazinylidene]heptanedioic acid', otherNames: ['4-[4,4-dimethyl(selenosemicarbazono)]heptanedioic acid'] },
]);
