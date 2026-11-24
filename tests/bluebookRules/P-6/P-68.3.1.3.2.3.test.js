/**
 * P-68.3.1.3.2.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Bis(azo) compounds and more complex analogues, in the absence of a characteristic group having
 * seniority to be cited as suffix, are named:
 * (1) on the basis of ‘diazene’, as described in P-68.3.1.3.2.1 above, the first cited substituent
 * being chosen on the basis of the principle of alphanumerical order;
 * (2) by using the prefix ‘azo’, as described in P-68.3.1.3.2.1;
 * (3) by using the prefix ‘azo’ and, after choosing the principal parent hydride, substituting the
 * other components as an ‘organylazo’ group.
 * Method (1) generates preferred IUPAC names.
 * When characteristic groups that have priority for citation as suffixes are present, the usual
 * substitutive operations based on priority of suffixes are carried out. …”
 *
 * The whole section is in the Blue Book.
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 1008, P-68.3.1.3.2.3, example 1. [modified 30 March 2022]
 *     For (anthracen-2-yl)[(7-phenyldiazenyl)naphthalen-2-yl]diazene (PIN)
 *     read (1) {7-[(anthracen-2-yl)diazenyl]naphthalen-2-yl}(phenyl)diazene (PIN)
 *     for {not [7-(anthracen-2-yldiazenyl)naphthalen-2-yl]phenyldiazene
 *     (numbering shown); alphanumerical order ‘anthracen-2-yl’ precedes ‘anthracen-2-yldiazenyl’}
 *     read {not (anthracen-2-yl)[7-(phenyldiazenyl)naphthalen-2-yl]diazene;
 *     each primary substituent has the same locant, i.e., none, so ‘anthracenyldiazenyl’ is
 *     alphabtically preferred to ‘anthracenylphenyl’}
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-68.3.1.3.2.3', [
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68313k.gif', pin: '{7-[(anthracen-2-yl)diazenyl]naphthalen-2-yl}(phenyl)diazene', otherNames: ['{not (anthracen-2-yl)[7-(phenyldiazenyl)naphthalen-2-yl]diazene', 'anthracene-2-azo-2′-naphthalene-7′-azobenzene)', '2-{[7-(phenylazo)naphthalen-2-yl]azo}anthracene'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68313l.gif', pin: '2,7-bis(phenyldiazenyl)naphthalene-1,8-diol', otherNames: ['2,7-bis(phenylazo)naphthalene-1,8-diol'] },
]);
