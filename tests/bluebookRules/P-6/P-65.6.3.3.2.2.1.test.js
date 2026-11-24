/**
 * P-65.6.3.3.2.2.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Esters of acid components whose preferred IUPAC names are derived using multiplicative nomenclature
 * are named by two methods:
 * (1) all organyl components representing the ‘hydroxylic’ components are cited in front of the name
 * of the multiplied acid component;
 * (2) for esters where both organyl components representing the ‘hydroxylic’ component are exactly the
 * same are cited with the acid component preceded by a numerical term ‘bis-’, ‘tris-’, etc.
 * Method (1) leads to preferred IUPAC names.”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 809, P-65.6.3.3.2.2.1, example 1. [corrected 28 May 2024]
 *     For (2) 3,3′-oxydi(methyl benzoate)
 *     read (2) 3,3′-oxybis(methyl benzoate)
 *   Page 809, P-65.6.3.3.2.2.1, example 3. [modified 18 December 2023]
 *     For (1) dimethyl butanedioylbis(oxy-2,1-phenylene) dibutanedioate (PIN)
 *     read (1) dimethyl butanedioylbis(oxy-2,1-phenylenedibutanedioate (PIN) [cancelled 28 May 2024]
 *     for (2) butanebis(oxy-2,1-phenylene) di(methyl butanedioate)
 *     read (2) butanebis(oxy-2,1-phenylene)di(methyl butanedioate)
 *   Page 809, P-65.6.3.3.2.2.1, example 3. [corrected 28 May 2024]
 *     For (1) dimethyl butanedioylbis(oxy-2,1-phenylene)dibutanedioate (PIN)
 *     read (1) dimethyl butanedioylbis(oxy-2,1-phenylene) dibutanedioate (PIN)
 *   Page 809, P-65.6.3.3.2.2.1, example 3. [corrected 7 November 2018]
 *     For (1) dimethyl butanedioylbis(oxy-2,1-phenylene) dibutanedioate (PIN)
 *     read (1) dimethyl butanedioylbis(oxy-2,1-phenylene)dibutanedioate (PIN)
 *   Page 809, P-65.6.3.3.2.2.1, example 3. [modified 9 October 2024]
 *     For (2) butanedioylbis(oxy-2,1-phenylene) di(methyl butanedioate)
 *     read (2) butanedioylbis(oxy-2,1-phenylene) bis(methyl butanedioate)
 *   Page 809, P-65.6.3.3.2.2.1, example 3. [corrected 7 November 2018]
 *     For (not bis[2-(4-methoxy-4-oxobutanoyl)oxy]phenyl butanedioate; ...
 *     read (not bis{2-[(4-methoxy-4-oxobutanoyl)oxy]phenyl} butanedioate; ...
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-65.6.3.3.2.2.1', [
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650603w.gif', pin: 'dimethyl 3,3′-oxydibenzoate', otherNames: ['3,3′-oxybis(methyl benzoate)'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650603x.gif', pin: 'ethyl methyl 3,3′-oxydibenzoate' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650603y.gif', pin: 'dimethyl butanedioylbis(oxy-2,1-phenylene) dibutanedioate', otherNames: ['butanedioylbis(oxy-2,1-phenylene) bis(methyl butanedioate)'], notNames: ['bis{2-[(4-methoxy-4-oxobutanoyl)oxy]phenyl} butanedioate'] },
]);
