/**
 * P-63.4.2.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Compounds having the general structure R-SOH or R-OSH are called generically ‘thioperoxols’ or
 * ‘thiohydroperoxides’. Similarly, compounds R-SeOH or R-OSeH and R-TeOH or R-OTeH, are called
 * ‘selenoperoxols’ or ‘selenohydroperoxides’, and ‘telluroperoxols’ or ‘tellurohydroperoxides’,
 * respectively. When representing the principal function, they are named by two methods.
 * (1) by substitutive nomenclature and the appropriate suffix listed in Table 6.1 formed by functional
 * replacement, to denote a principal function;
 * (2) by functional class nomenclature using the name of the class ‘thiohydroperoxide’,
 * ‘selenohydroperoxide’ or ‘tellurohydroperoxide’. …
 * Compounds of the type R-SOH, R-SeOH and R-TeOH and their chalcogen analogues were previously named
 * sulfenic, selenenic and tellurenic acids, using the suffixes ‘sulfenic acid’, ‘selenenic acid’, and
 * …
 * Method (1) generates preferred IUPAC names.”
 *
 * The whole section is in the Blue Book.
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-63.4.2.1', [
  { formula: 'CH3-SOH', pin: 'methane-SO-thioperoxol', otherNames: ['S-methyl thiohydroperoxide'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P630402a.gif', pin: 'propane-1-OS-thioperoxol', otherNames: ['O-propyl thiohydroperoxide'] },
  { formula: 'CH3-CH2-SSH', pin: 'ethanedithioperoxol', otherNames: ['ethyl hydrodisulfide', 'ethyl dithiohydroperoxide'] },
  { formula: 'CH3-SSeH', pin: 'methane-SSe-selenothioperoxol', otherNames: ['S-methyl selenothiohydroperoxide'] },
]);
