/**
 * P-63.1.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Systematic names of alcohols, phenols, enols, and ynols
 * Hydroxy compounds are named in three ways:
 * (1) substitutively, using the suffix ‘ol’ and the prefix ‘hydroxy’. The presence of several ‘ol’
 * characteristic groups is denoted by the numerical multiplying prefixes ‘di’, ‘tri’, etc.; …
 * (2) by functional class nomenclature and the class term ‘alcohol’;
 * (3) as assemblies of identical units by multiplicative nomenclature when the conditions for its use
 * are fulfilled (see P-51.3)
 * Method (1) generates preferred IUPAC names. Names as assemblies of identical units, method (3), are
 * preferred to those that are formed by simple substitution (P-51.1.5).”
 *
 * The whole section is in the Blue Book.
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 692, P-63.1.2, example 4 on this page. [corrected 26 September 2018]
 *     Replace the structure with:
 *   Page 694, P-63.1.2, example 1 on this page. [modified 27 February 2019]
 *     For (C60-Ih)[5,6]fulleren-1(9H)-ol (PIN)
 *     read (C60-Ih)[5,6]fulleren-1(9H)-ol (PIN)
 *     For 1,9-dihydro(C60-Ih)[5,6] fulleren-1-ol
 *     read 1,9-dihydro(C60-Ih)[5,6] fulleren-1-ol
 *     replace the structure with:
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-63.1.2', [
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P630102a.gif', pin: '2-nitrobenzene-1,3-diol', notNames: ['2-nitroresorcinol'] },
  { formula: 'CH3-OH', pin: 'methanol', otherNames: ['methyl alcohol'] },
  { formula: '(CH3)3C-OH', pin: '2-methylpropan-2-ol', otherNames: ['tert-butyl alcohol'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P630102b.gif', pin: 'butane-1,3-diol' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P630102c.gif', pin: 'pent-2-ene-1,5-diol' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P630102d.gif', pin: 'cyclopentanol' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P630102e.gif', pin: 'benzenehexol' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P630102f.gif', pin: 'bicyclo[4.2.0]octan-3-ol' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P630102g.gif', pin: 'quinolin-8-ol' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P630102h.gif', pin: '1,3,5,7(1,3)-tetrabenzenacyclooctaphane-1²,3²,5²,7²-tetrol' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P630102i.gif', pin: 'naphthalen-4a(2H)-ol', otherNames: ['2,4a-dihydronaphthalen-4a-ol'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P630102j.gif', pin: 'naphthalene-4a,8a-diol', otherNames: ['4a,8a-dihydronaphthalene-4a,8a-diol'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P630102k.gif', name: '1,9-dihydro(C60-Ih)[5,6]fulleren-1-ol' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P630102l.gif', pin: '4,4′-methylenediphenol', otherNames: ['4-[(4-hydroxyphenyl)methyl]phenol'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P630102m.gif', name: '2,2′-[ethane-1,2-diylbis(azanylylidenemethanylylidene)]bis(6-fluorophenol)(PIN)' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P630102n.gif', pin: '3,4-dihydronaphthalen-1-ol' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P630102o.gif', pin: '5,6,7,8-tetrahydronaphthalen-2-ol' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P630102p.gif', pin: '2-methylidenepentan-1-ol' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P630102q.gif', pin: '4-methylidenehexan-3-ol' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P630102r.gif', pin: '4-(2-hydroxyethyl)-3-(hydroxymethyl)-2-methylidenecyclopentan-1-ol' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P630102s.gif', pin: '[1,1′-biphenyl]-2,4,4′,6-tetrol', otherNames: ['biphenyl-2,4,4′,6-tetrol'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P630102t.gif', pin: '[1¹,2¹:2⁴,3¹-terphenyl]-1²,1⁶,2³,2⁵-tetrol' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P630102v.gif', pin: '[1,1′-biphenyl]-2,2′-diol', otherNames: ['2,2′-biphenol'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P630102w.gif', name: '2,2′-bi-1-naphthol' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P630102x.gif', pin: '[2,2′-binaphthalene]-4,8′-diol', otherNames: ['3,7′-bi-1-naphthol'] },
]);
