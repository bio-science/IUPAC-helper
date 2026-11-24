/**
 * P-22.1.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Parent hydrocarbons having retained names
 * Toluene, xylene, and mesitylene are specific parent hydrides that are composed of two components,
 * one cyclic and the other acyclic and saturated. These names are retained due to a long and well
 * established tradition. Toluene and xylene are preferred IUPAC names, but are not freely
 * substitutable; toluene is substitutable under certain conditions, but only for general nomenclature
 * (see P-15.1.8 for a general substitution rules for retained names).
 * Mesitylene is a retained name in general nomenclature only and cannot be substituted.
 * The names cumene and cymene are not retained.”
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-22.1.3', [
  { pin: 'toluene' },
  { pin: '1,3,5-trimethylbenzene', otherNames: ['mesitylene (no substitution)'] },
]);
