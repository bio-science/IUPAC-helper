/**
 * P-62.2.2.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Selection of the principal chain or senior ring system in secondary and tertiary amines.
 * Names of amines formed substitutively by using the retained name aniline or the suffix ‘amine’ are
 * based on a principal chain and a senior ring system (see P-44.1). …”
 *
 * The whole section is in the Blue Book.
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 673, P-62.2.2.2, example 4 on this page. [corrected 24 June 2020]
 *     Delete (not 2,2′-dimethyl-N-(2,2-dimethylpropyl)di(prop-2-en-1-amine)
 *   Page 673, P-62.2.2.2, example 7 on this page. [modified 26 January 2022] For
 *   N-butylcyclopropan-1-amine (PIN)
 *     read N-butylcyclopropanamine (PIN)
 *     For N-cyclopropylbutan-1-amine
 *     read (not N-cyclopropylbutan-1-amine)
 *   Page 674, P-62.2.2.2, example on this page. [corrected 24 June 2020]
 *     For (not 5,6,7,8-tetrahydrodi-2-naphthylamine)
 *     read [not 5,6,7,8-tetrahydrodi(2-naphthyl)amine]
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-62.2.2.2', [
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P620202g.gif', pin: '4-methyl-N,N-dipropylpent-4-en-2-yn-1-amine', otherNames: ['(4-methylpent-4-en-2-yn-1-yl)di(propyl)azane', '(4-methylpent-4-en-2-yn-1-yl)di(propyl)amine'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P620202h.gif', pin: 'N,N-dimethyl-4-(4-methylcyclohex-3-en-1-yl)but-3-en-2-amine', otherNames: ['dimethyl[4-(4-methylcyclohex-3-en-1-yl)but-3-en-2-yl]azane', 'dimethyl[4-(4-methylcyclohex-3-en-1-yl)but-3-en-2-yl]amine'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P620202i.gif', pin: 'N,N-dimethylpent-1-yn-3-amine', otherNames: ['dimethyl(pent-1-yn-3-yl)azane', 'dimethyl(pent-1-yn-3-yl)amine'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P620202j.gif', pin: 'N-ethenylbutan-1-amine', otherNames: ['butyl(ethenyl)azane', 'butyl(ethenyl)amine'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P620202k.gif', pin: 'N-(2,2-dimethylpropyl)-2-methyl-N-(2-methylprop-2-en-1-yl)prop-2-en-1-amine' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P620202l.gif', pin: 'N-cyclohexylaniline', otherNames: ['cyclohexyl(phenyl)azane', 'cyclohexyl(phenyl)amine'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P620202m.gif', pin: 'N-(furan-2-yl)-1H-pyrrol-2-amine', otherNames: ['2-furyl(1H-pyrrol-2-yl)azane', '2-furyl(1H-pyrrol-2-yl)amine'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P620202n.gif', pin: 'N-butylcyclopropanamine', otherNames: ['butyl(cyclopropyl)azane', 'butyl(cyclopropyl)amine'], notNames: ['N-cyclopropylbutan-1-amine'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P620202o.gif', pin: 'N-(5,6,7,8-tetrahydronaphthalen-2-yl)naphthalen-2-amine', otherNames: ['2-naphthyl(5,6,7,8-tetrahydro-2-naphthyl)azane', '2-naphthyl(5,6,7,8-tetrahydro-2-naphthyl)amine'], notNames: ['5,6,7,8-tetrahydrodi(2-naphthyl)amine'] },
]);
