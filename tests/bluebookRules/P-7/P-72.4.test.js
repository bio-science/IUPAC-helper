/**
 * P-72.4
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “SKELETAL REPLACEMENT NOMENCLATURE
 * Anionic centers in parent hydrides are named by two methods using the principles of skeletal
 * replacement (‘a’) nomenclature described in Section P-15.4:
 * (1) by forming the name of the neutral compound according to skeletal replacement (‘a’) nomenclature
 * and using the suffixes ‘ide’ and ‘uide’ to describe the anionic centers;
 * (2) by adding anionic skeletal replacement (‘a’) prefixes formed by adding the suffixes ‘ida’ and
 * ‘uida’ to the name of the corresponding mononuclear parent hydride, with elision of the final letter
 * …
 * Method (1) results in preferred IUPAC names. In other words, names that do not require designation
 * of skeletal heteroatoms in nonstandard valence states using the λ-convention are preferred (see
 * P-72.3).
 * Skeletal replacement (‘a’) prefixes ending in ‘ata’, for example ‘borata’, are no longer
 * recognized.”
 *
 * The whole section is in the Blue Book.
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-72.4', [
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P72400a.gif', preselectedName: 'phosphanida' },
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P72400b.gif', preselectedName: 'boranuida', notNames: ['borata'] },
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P72400c.gif', preselectedName: 'sulfanuida' },
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P72400d.gif', pin: '2,2-dimethyl-2-boraspiro[4.5]decan-2-uide', otherNames: ['2,2-dimethyl-2-boranuidaspiro[4.5]decane'], notNames: ['2,2-dimethyl-2-borataspiro[4.5]decane'] },
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P72400e.gif', pin: '6λ⁵-phosphaspiro[5.5]undecan-6-uide', otherNames: ['6λ⁵-phosphanuidaspiro[5.5]undecane'], notNames: ['6-phosphataspiro[5.5]undecane'] },
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P72400f.gif', pin: '1-phosphabicyclo[2.2.2]octan-1-uide', otherNames: ['1-phosphanuidabicyclo[2.2.2]octane', '1λ⁵-phosphabicyclo[2.2.2]octan-1-ide', '1λ⁵-phosphanidabicyclo[2.2.2]octane'] },
]);
