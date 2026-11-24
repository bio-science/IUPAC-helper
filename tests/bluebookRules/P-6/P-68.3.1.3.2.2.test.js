/**
 * P-68.3.1.3.2.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Unsymmetrical monoazo compounds are named in two ways:
 * (1) substitutively, by prefixing the names of the appropriate substituent groups, in alphabetical
 * order, before the parent hydride name diazene;
 * (2) by inserting ‘azo’ between the names of the parent hydrides RH and R′H; …
 * Method (1) leads to preferred IUPAC names.
 * Monoazo compounds with the general structure R-N=N-R′ in which R is substituted by a principal
 * characteristic group are named on the basis of the parent hydride, RH, substituted by an organyl …”
 *
 * The whole section is in the Blue Book.
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-68.3.1.3.2.2', [
  { formula: 'CH2=CH-N=N-CH3', pin: 'ethenyl(methyl)diazene', otherNames: ['methyl(vinyl)diazene', 'etheneazomethane'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68313f.gif', name: 'naphthalene-2-azobenzene' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68313g.gif', pin: '4-(phenyldiazenyl)benzene-1-sulfonic acid' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68313h.gif', pin: '1-[(4-chloro-2-methylphenyl)diazenyl]naphthalen-2-amine', notNames: ['2-aminonaphthalene-1-azo(4′-chloro-2′-methylbenzene) (see C-911.2', 'ref. 1)'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68313i.gif', pin: '4-[(2-hydroxynaphthalen-1-yl)diazenyl]benzene-1-sulfonic acid', otherNames: ['4-[(2-hydroxy-1-naphthyl)azo]benzene-1-sulfonic acid'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68313j.gif', pin: '4,4′-diazenediyldibenzoic acid' },
]);
