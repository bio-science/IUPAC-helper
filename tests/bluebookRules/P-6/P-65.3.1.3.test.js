/**
 * P-65.3.1.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Modification by other chalcogen atoms
 * Suffixes are modified by the infixes ‘thio’, for –S– or =S, ‘seleno’, for –Se– or =Se, and
 * ‘telluro’, for –Te– or =Te, and used as such. Tautomers are denoted by symbols S, Se, and Te placed
 * in front of the term ‘acid’, to express positions of chalcogen atoms when known. The infixes
 * ‘thioperoxo’, ‘selenoperoxo’, etc. are used to indicate functional replacement in peroxy acids.”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 790, P-65.3.1.3, example 1. [modified 24 June 2020]
 *     For propane-1-sulfonoselenoic acid (PIN)
 *     read propane-1-sulfinoselenoic acid (PIN)
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-65.3.1.3', [
  { formula: '–SO2-SH', suffix: 'sulfonothioic S-acid' },
  { formula: '–Se(=S)-OH', suffix: 'seleninothioic O-acid' },
  { formula: '–SO2-OSH', suffix: 'sulfono(thioperoxoic) OS-acid' },
  { formula: '–TeO-SeSH', suffix: 'tellurino(selenothioperoxoic) SeS-acid' },
  { formula: 'CH3-CH2-CH2-S{O/Se}H', pin: 'propane-1-sulfinoselenoic acid' },
  { formula: 'CH3-CH2-S(O)(S)-OH', pin: 'ethanesulfonothioic O-acid' },
  { formula: 'CH3-CH2-Se(=S)-OH', pin: 'ethaneseleninothioic O-acid' },
]);
