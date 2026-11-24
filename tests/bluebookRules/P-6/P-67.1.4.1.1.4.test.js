/**
 * P-67.1.4.1.1.4
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Names of acyl groups derived from mononuclear noncarbon oxoacids modified by functional replacement
 * nomenclature
 * Preferred IUPAC prefixes are formed by the methodology indicated in P-65.2.1.5 for acyl groups
 * derived from carbonic acids modified by the infixes and prefixes in functional replacement
 * nomenclature. All infixes and prefixes listed in Table 1.6 and cited in P-65.1.2.3 are allowed.
 * Applied to the B, N, P, As and Sb mononuclear noncarbon oxoacids, the method consists of first
 * achieving functional replacement in acids, then removing all remaining –OH groups. …”
 *
 * The whole section is in the Blue Book.
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 937, P-67.1.4.1.1.4, example 3, right version. [corrected 20 March 2019]
 *     For hydrazonostiboroyl
 *     read hydrazonostiboryl
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-67.1.4.1.1.4', [
  { formula: 'P(S)(OH)3', preselectedName: 'phosphorothioic O,O,O-acid', otherNames: ['thiophosphoric O,O,O-acid'] },
  { formula: '>P(S)–', preselectedPrefix: 'phosphorothioyl' },
  { formula: 'As(=NH)(OH)3', preselectedName: 'arsorimidic acid', otherNames: ['imidoarsoric acid'] },
  { formula: '>As(=NH)–', preselectedPrefix: 'arsorimidoyl' },
  { formula: 'Sb(=NNH2)(OH)3', preselectedName: 'stiborohydrazonic acid', otherNames: ['hydrazonostiboric acid'] },
  { formula: '>Sb(=NNH2)–', preselectedPrefix: 'stiborohydrazonoyl' },
  { formula: 'NH(S)(OH)2', preselectedName: 'azonothioic acid', otherNames: ['thioazonic acid'] },
  { formula: '>NH(S)', preselectedPrefix: 'azonothioyl' },
  { formula: 'PH2(=NH)(OH)', preselectedName: 'phosphinimidic acid', otherNames: ['imidophosphinic acid'] },
  { formula: '–PH2(=NH)', preselectedPrefix: 'phosphinimidoyl' },
  { formula: '(CH3)2P(Se)(OH)', pin: 'dimethylphosphinoselenoic acid', otherNames: ['dimethyl(selenophosphinic acid)'] },
  { formula: '(CH3)2P(Se)–', preferredPrefix: 'dimethylphosphinoselenoyl' },
  { formula: 'C6H5-P(O)Cl(OH)', pin: 'phenylphosphonochloridic acid', otherNames: ['phenyl(chlorophosphonic acid)'] },
  { formula: 'C6H5-P(O)(Cl)–', preferredPrefix: 'phenylphosphonochloridoyl' },
  { formula: 'P(≡N)(OH)2', preselectedName: 'phosphoronitridic acid', otherNames: ['nitridophosphoric acid'] },
  { formula: '>P(≡N)', preselectedPrefix: 'phosphoronitridoyl' },
  { formula: 'P(=NH)(NHNH2)(OH)2', preselectedName: 'phosphorohydrazidimidic acid', otherNames: ['hydrazidimidophosphoric acid'] },
  { formula: '>P(=NH)(NHNH2)', preselectedPrefix: 'phosphorohydrazidimidoyl' },
  { formula: 'P(O)Cl2(OH)', preselectedName: 'phosphorodichloridic acid', otherNames: ['dichlorophosphoric acid'] },
  { formula: 'P(O)(Cl)2–', preselectedPrefix: 'phosphorodichloridoyl' },
  { formula: '(CH3)2N-P(O)(OH)2', pin: 'N,N-dimethylphosphoramidic acid' },
  { formula: '(CH3)2N-P(O)<', preferredPrefix: 'N,N-dimethylphosphoramidoyl' },
  { formula: 'P(O)(OH)2(OOH)', preselectedPrefix: 'phosphoroperoxoic acid' },
  { formula: '>P(O)(OOH)', preselectedPrefix: 'phosphoroperoxoyl' },
  { preselectedName: 'phosphoro(thioperoxoic) acid' },
  { preselectedPrefix: 'phosphoro(thioperoxoyl)' },
]);
