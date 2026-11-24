/**
 * P-16.9.5
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Primes also occur:
 * (a) in fusion nomenclature, to identify first and higher attached components, identical attached
 * components, and multiparent names;
 * (b) in fullerenes ortho-fused to organic ring or ring systems, to identify positions in the
 * nonfullerene component;
 * (c) in natural product nomenclature, to identify positions in ring(s) fused to a fundamental parent
 * hydride;”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 129, P-16.9.5 (a), example 1. [corrected 31 July 2019]
 *     For pyrido[1′′,2′′:1,2′]imidazo[4′,5′:5,6]pyrazino[2,3-b]phenazine (PIN,
 *     read pyrido[1′′,2′′:1′,2′]imidazo[4′,5′:5,6]pyrazino[2,3-b]phenazine (PIN,
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-16.9.5', [
  { pin: 'pyrido[1′′,2′′:1′,2′]imidazo[4′,5′:5,6]pyrazino[2,3-b]phenazine' },
  { pin: 'difuro[3,2-b:2′,3′-e]pyridine' },
  { pin: 'cyclopenta[1,2-b:5,1-b′]bis([1,4]oxathiine)' },
  { pin: '3′H-cyclopropa[1,9](C60-Ih)[5,6]fullerene' },
]);
