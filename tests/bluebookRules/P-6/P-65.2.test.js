/**
 * P-65.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “CARBONIC, CYANIC, AND DI- AND POLYCARBONIC ACIDS
 * Carbonic acid, cyanic acid, and di- and polycarbonic acids are a group of functional parent
 * compounds different from carboxylic acids; these acids have no hydrogen atom(s) to be used in
 * substitutive nomenclature.
 * The following acids, classified as mononuclear carbon acids, have retained names that are preferred
 * IUPAC names:
 * carbonic acid (PIN) HO-CO-OH
 * cyanic acid (PIN) HO-CN
 * The following di- or polynuclear carbon acids have retained names that are preferred IUPAC names:
 * dicarbonic acid (PIN) HO-CO-O-CO-OH
 * tricarbonic acid (PIN) HO-CO-O-CO-O-CO-OH
 * tetracarbonic acid (PIN) HO-CO-O-CO-O-CO-O-CO-OH
 * polycarbonic acids HO-[CO-O]n-H n = 5, 6 and higher homologues are named by skeletal replacement
 * (‘a’) nomenclature
 * The decreasing order of seniority of the carbon acids as indicated in Section P-41 is: polycarbonic
 * acids > tetracarbonic acid > tricarbonic acid > dicarbonic acid > carbonic acid > cyanic acid.
 * P-65.2.1 Carbonic acid
 * P-65.2.2 Cyanic acid
 * P-65.2.3 Di-, tri-, tetra-, and polycarbonic acids”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 778, P-65.2, example. [corrected 6 March 2019]
 *     For 2,4,6,8-tetraoxanonanedioic acid (PIN)
 *     read 3,5,7-trioxo-2,4,6,8-tetraoxanonanedioic acid (PIN)
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-65.2', [
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650200a.gif', pin: '3,5,7-trioxo-2,4,6,8-tetraoxanonanedioic acid' },
]);
