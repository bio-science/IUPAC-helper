/**
 * P-61.2.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Hydrocarbons consisting of rings and chains.
 * Names of cyclic hydrocarbons substituted by chains are formed by substituting chains, saturated or
 * unsaturated, into rings (see P-44.1.2.2). …
 * The names ‘styrene’, ‘stilbene’ and ‘fulvene’ are retained only for general nomenclature. Styrene
 * and stilbene can be ring substituted as prescribed in P-31.1.3.4. …
 * In the 1993 Guide (ref. 2), these parent hydrides were retained but only limited substitution was
 * allowed.”
 *
 * The whole section is in the Blue Book.
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 655, P-61.2.3, example 1 on this page. [modified 27 February 2019]
 *     For 1,1′,1′′-(benzene-1,2,4-triyltripropane-3,1-diyl)tris(4-methylbenzene) (PIN)
 *     read 1,1′,1′′-[benzene-1,2,4-triyltri(propane-3,1-diyl)]tris(4-methylbenzene) (PIN)
 *     Delete 1,2,4-tris(3-p-tolylpropyl)benzene
 *   Page 655, P-61.2.3, last example on this page. [corrected 27 February 2019]
 *     For 2,3,7,8-tetra(naphthalen-2-yl)anthracene
 *     read 2,3,6,7-tetra(naphthalen-2-yl)anthracene
 *     replace the structure with:
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-61.2.3', [
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P610203a.gif', pin: '1,2-xylene', otherNames: ['1,2-dimethylbenzene'], notNames: ['o-methyltoluene', 'substitution of toluene by additional methyl groups is not allowed: see P-22.1.3'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P610203b.gif', pin: '1,4-diethenylbenzene', otherNames: ['1,4-divinylbenzene'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P610203c.gif', pin: 'decylcyclohexane', otherNames: ['1-cyclohexyldecane'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P610203d.gif', name: '3-cyclohexylprop-1-ene' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P610203e.gif', pin: '1,3,5-tri(decyl)cyclohexane', notNames: ['1,3,5-tris(decyl)cyclohexane'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P610203f.gif', pin: '1,2-di-tert-butylbenzene' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P610203g.gif', pin: '1,4-di(propan-2-yl)cyclohexane' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P610203h.gif', notNames: ['[2-methylidene-3-(2-methylpropyl)but-3-en-1-yl]cyclohexane'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P610203i.gif', name: '{not [1-methyl-3-(4-methylcyclohex-3-en-1-yl)prop-2-en-1-yl]benzene' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P610203j.gif', pin: '1,1′,1′′-[benzene-1,2,4-triyltri(propane-3,1-diyl)]tris(4-methylbenzene)', otherNames: ['1,2,4-tris[3-(4-methylphenyl)propyl]benzene'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P610203k.gif', pin: '3-methyl-1H-indene' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P610203l.gif', pin: '5-methyl-1,2-dihydronaphthalene' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P610203m.gif', pin: '2-[4-(propan-2-yl)cyclohexyl]naphthalene', otherNames: ['2-(4-isopropylcyclohexyl)naphthalene'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P610203n.gif', pin: '2,3,6,7-tetra(naphthalen-2-yl)anthracene' },
]);
