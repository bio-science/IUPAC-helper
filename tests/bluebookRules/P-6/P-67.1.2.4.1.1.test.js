/**
 * P-67.1.2.4.1.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Examples of mononuclear noncarbon oxoacids modified by infixes:”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 923, P-67.1.2.4.1.1, example 5. [corrected 9 April 2025]
 *     For N,N-dimethylphosphoramidic acid (PIN)
 *     read dimethylphosphoramidic acid (PIN)
 *   Page 924, P-67.1.2.4.1.1, example 1 on this page. [modified 25 November 2020]
 *     For N,N-dimethyl-N′ -phenylphosphoramidimido(thiocyanatidic) acid (PIN)
 *     read N,N-dimethyl-N′-phenylphosphoramidimido(thiocyanatidic) acid (PIN) [delete space from name]
 *   Page 924, P-67.1.2.4.1.1, example 7 on this page. [corrected 25 August 2016]
 *     For P(=NH)(NH-NH2)(OH)
 *     read P(=NH)(NH-NH2)(OH)2
 *   Page 924, P-67.1.2.4.1.1, example 12 on this page. [modified 20 March 2019]
 *     For diphenylarsorothious acid (PIN)
 *     read diphenylarsinothious acid (PIN)
 *   Page 924, P-67.1.2.4.1.1, example 17 on this page. [modified 20 March 2019]
 *     For sulfuro(isothiocyanatidic) acid
 *     read sulfur(isothiocyanatidic) acid
 *     For HO-SO-NCS
 *     read HO-SO2-NCS
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-67.1.2.4.1.1', [
  { formula: 'CH3-B(OH)(SH)', pin: 'methylboronothioic acid' },
  { formula: 'CH3-B(NH-CH3)(OH)', pin: 'B,N-dimethylboronamidic acid' },
  { formula: 'CH3-N(OH)(SH)', pin: 'methylazonothious acid' },
  { formula: '(C2H5)2P(S)(SH)', pin: 'diethylphosphinodithioic acid' },
  { formula: '(CH3)2N-P(O)(OH)2', pin: 'dimethylphosphoramidic acid' },
  { formula: '(C6H5)2P(=N-CH3)(OH)', pin: 'N-methyl-P,P-diphenylphosphinimidic acid' },
  { formula: 'C6H5-P(=N-C6H5)(Cl)(SH)', pin: 'N,P-diphenylphosphonochloridimidothioic acid' },
  { formula: 'C6H5-P(S)(NH-CH3)(OH)', pin: 'N-methyl-P-phenylphosphonamidothioic O-acid' },
  { formula: '(CH3)2N-P(O)(NCS)(SH)', pin: 'N,N-dimethylphosphoramid(isothiocyanatido)thioic S-acid' },
  { formula: '(CH3)2N-P(=N-C6H5)(SCN)(OH)', pin: 'N,N-dimethyl-N′-phenylphosphoramidimido(thiocyanatidic) acid' },
  { formula: 'C6H5-P(OH)(SH)', pin: 'phenylphosphonothious acid' },
  { formula: 'C6H5-P(≡N)(OH)', pin: 'phenylphosphononitridic acid' },
  { formula: 'C6H5-P(O)(Cl)(OH)', pin: 'phenylphosphonochloridic acid' },
  { formula: 'CH3-CH2-P(Se)(OH)2', pin: 'ethylphosphonoselenoic O,O-acid' },
  { formula: 'CH3-CH2-P(O)(OH)(SeH)', pin: 'ethylphosphonoselenoic Se-acid' },
  { formula: 'P(=NH)(NH-NH2)(OH)2', name: 'phosphorohydrazidimidic acid' },
  { formula: 'P(O)(OH)(SH)(SSH)', name: 'phosphoro(dithioperoxo)thioic S-acid' },
  { formula: 'P(O)(OH)2(OSH)', name: 'phosphoro(thioperoxoic) OS-acid' },
  { formula: 'As(S)(OH)3', name: 'arsorothioic O,O,O-acid' },
  { formula: '(C6H5)2As(SH)', pin: 'diphenylarsinothious acid' },
  { formula: 'HO-SO2-SH', name: 'sulfurothioic S-acid' },
  { formula: 'H2N-SO2-OH', name: 'sulfamic acid' },
  { formula: 'H2S2O3', name: 'sulfurothioic acid' },
  { formula: 'HO-SO2-NC', pin: 'sulfurisocyanidic acid' },
  { formula: 'HO-SO2-NCS', pin: 'sulfur(isothiocyanatidic) acid' },
  { formula: 'HO-SO2-CN', pin: 'sulfurocyanidic acid' },
  { formula: 'HS-SO2-NH2', name: 'sulfamothioic S-acid' },
  { formula: 'HS-TeO2-NH2', name: 'telluramidothioic acid' },
]);
