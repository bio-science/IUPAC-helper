/**
 * P-16.2.4.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Hyphens are used in substitutive names:
 * (a) to separate locants from words or word fragments;
 * (b) after parentheses, if the closing parenthesis is followed by a locant;
 * (c) to separate adjacent locants from a subsequent opening enclosing mark;
 * (d) to separate italic letters from Roman letters;”
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-16.2.4.1', [
  { pin: '2-chloro-2-methylpropane' },
  { pin: '1-(chloromethyl)-4-nitrobenzene' },
  { pin: 'N¹-(2-aminoethyl)-N¹,N²,N²-trimethylethane-1,2-diamine' },
  { pin: '1-(3,4-dihydroquinolin-1(2H)-yl)ethan-1-one' },
  { pin: 'N-acetyl-N-(3-chloropropanoyl)benzamide' },
]);
