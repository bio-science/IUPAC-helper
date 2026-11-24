/**
 * P-68.3.2.3.2.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Phosphanes, arsanes, and stibanes expressed as substituent groups
 * Substituent groups are formed by the general method described in Section P-29, i.e., by adding the
 * suffixes ‘yl’, ‘ylidene’ and ‘ylidyne’ to the name of the parent hydride with elision of the final
 * letter ‘e’ of the parent hydride name. When required, the order of classes is applied, as indicated
 * in Section P-41. The traditional names phosphino, arsino, and stibino may be used in general
 * nomenclature.”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 1020, P-68.3.2.3.2.2, structure 3. [corrected 28 October 2016]
 *     For –H2P-PH2– read –HP-PH–
 *   Page 1020, P-68.3.2.3.2.2, example 2.. [modified 12 May 2021]
 *     For (arsanylmethyl)diphenylphosphane (PIN)
 *     read (arsanylmethyl)di(phenyl)phosphane (PIN)
 *     for (arsinomethyl)diphenylphosphine
 *     read (arsinomethyl)di(phenyl)phosphine
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-68.3.2.3.2.2', [
  { formula: '–PH2', preselectedPrefix: 'phosphanyl' },
  { formula: '–As=', preselectedPrefix: 'arsanylylidene' },
  { formula: '–HP-PH–', preselectedPrefix: 'diphosphane-1,2-diyl' },
  { formula: '–As<', preselectedPrefix: 'arsanetriyl' },
  { formula: '–AsH2', preselectedPrefix: 'arsanyl' },
  { formula: '–SbH2', preselectedPrefix: 'stibanyl' },
  { formula: '–SbH-SbH2', preselectedPrefix: 'distibanyl' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68323j.gif', pin: '2-phosphanylethan-1-amine', otherNames: ['2-phosphinoethan-1-amine'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68323k.gif', pin: '4-(dimethylarsanyl)quinoline', otherNames: ['4-(dimethylarsino)quinoline'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68323l.gif', pin: '4-[ethyl(methyl)phosphanyl]-1H-imidazole', otherNames: ['4-[ethyl(methyl)phosphino]-1H-imidazole'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68323m.gif', pin: '4,4′-phosphanediyldibenzoic acid' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68323n.gif', pin: '4,4′-diarsenediyldiphenol' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68323o.gif', pin: '3,3′,3′′,3′′′-[1,2-phenylenebis(arsanetriyl)]tetrapropanoic acid' },
  { formula: '(HO)2As(O)-CH2-COOH', pin: 'arsonoacetic acid' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68323p.gif', pin: '4,4′-(hydroxyarsoryl)dibenzoic acid', notNames: ['4,4′-arsinicodibenzoic acid'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68323q.gif', pin: '4,4′-(methoxyphosphoryl)dibenzoic acid' },
  { formula: 'Cl2P(O)-CH2-CO-Cl', pin: 'phosphorodichloridoylacetyl chloride' },
  { formula: '(CH3O)2P(=NH)-CH2-CO-O-CH3', pin: 'methyl (P,P-dimethoxyphosphinimidoyl)acetate' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68323r.gif', pin: '4-(dimethylphosphinothioyl)benzoic acid' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68323s.gif', pin: '4-(methoxyphosphoronitridoyl)benzene-1-sulfonic acid' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68323t.gif', pin: '4-(tetraphenyl-λ⁵-phosphanyl)benzoic acid', otherNames: ['4-(tetraphenylphosphoranyl)benzoic acid'] },
]);
