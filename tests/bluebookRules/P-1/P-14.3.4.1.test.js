/**
 * P-14.3.4.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Terminal locants are not cited in names for mono- and dicarboxylic acids derived from acyclic
 * hydrocarbons and their corresponding acyl halides, amides, hydrazides, nitriles, esters, aldehydes,
 * amidines, amidrazones, hydrazidines, and amidoximes, when unsubstituted or substituted on carbon
 * atoms.”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 30, P-14.3.4.1, line 3. [corrected 9 January 2019]
 *     For ...hydrazides, nitriles, aldehydes...
 *     read ...hydrazides, nitriles, esters, aldehydes...
 *   Page 30, P-14.3.4.1, example 2. [corrected 1 May 2019]
 *     For 2-chlorobutanedioic acid (PIN)
 *     read chlorobutanedioic acid (PIN)
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-14.3.4.1', [
  { formula: 'HOOC-CH2-CH2-COOH', pin: 'butanedioic acid' },
  { formula: 'HOOC-CH2-CH(Cl)-COOH', pin: 'chlorobutanedioic acid' },
  { formula: 'CH3-CH2-CH2-CH2-CO–', preferredPrefix: 'pentanoyl' },
  { formula: 'H2N-CO-CH(CH3)-CO-NH2', pin: '2-methylpropanediamide' },
  { formula: 'CH3-NH-CO-CH2-CO-NH-CH3', pin: 'N¹,N³-dimethylpropanediamide', notNames: ['N¹,N³-dimethylpropane-1,3-diamide'] },
]);
