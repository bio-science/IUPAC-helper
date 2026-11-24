/**
 * P-16.7.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Vowels are systematically elided as follows:
 * (a) the terminal letter ‘e’ in names of parent hydrides or endings ‘ene’ and ‘yne’ when followed by
 * a suffix or ending beginning with ‘a’, ‘e’, ‘i’, ‘o’, ‘u’, or ‘y’;
 * (b) in Hantzsch-Widman names, the final letter ‘a’ of an ‘a’ prefix when followed by a vowel;
 * (c) the terminal letter ‘a’ in the names of numerical multiplicative prefixes when followed by a
 * suffix beginning with ‘a’ or ‘o’;
 * (d) the terminal letter ‘a’ of an element ‘a’ prefix in ‘a(ba)n’ repeating unit names when followed
 * by a vowel;
 * (e) the terminal letter ‘o’ of a functional replacement infix when followed by a vowel;
 * (f) the terminal letter ‘o’ of ‘benzo’ in names of ‘benzoheterocycles’ formed by fusion of a benzene
 * ring to a heteromonocycle whose name begins with a vowel [an exception to P-16.7.2 (g)].”
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-16.7.1', [
  { pin: 'pentanal' },
  { pin: 'cyclopentadec-1-en-4-yne' },
  { pin: 'methanium' },
  { pin: 'butan-2-one' },
  { pin: 'tetramethylboranuide' },
  { preselectedPrefix: 'sulfanyl' },
  { pin: '1,3-thiazole', notNames: ['1,3-thiaazaole'] },
  { pin: '1,6,2-dioxazepane', notNames: ['1,6,2-dioxaazaepane'] },
  { notNames: ['[1,1′-biphenyl]-3,3′,4,4′'] },
  { pin: 'benzenehexol', notNames: ['benzenehexaol'] },
  { preselectedName: 'disiloxane', notNames: ['disilaoxane'] },
  { preselectedName: 'tetrastannoxane', notNames: ['tetrastannaoxane'] },
  { pin: 'N,P-diphenylphosphonochloridimidic acid', notNames: ['N,P-diphenylphosphonochloridoimidic acid'] },
  { pin: '3-benzoxepine' },
  { pin: '4H-3,1-benzoxazine' },
]);
