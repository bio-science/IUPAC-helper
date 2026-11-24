/**
 * P-44.2.1.7
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “The senior ring or ring system has the greater number of heteroatoms of any kind [(criterion (f) in
 * P-44.2.1]”
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-44.2.1.7', [
  { pin: '2,5,7-trioxabicyclo[4.1.1]octane' },
  { pin: '2-oxabicyclo[4.1.1]octane' },
  { pin: 'cinnoline' },
  { pin: 'cyclopenta[c]azepine' },
  { pin: '5,6,11,12-tetraoxadispiro[3.2.3⁷.2⁴]dodecane' },
  { pin: '11-oxadispiro[3.1.3⁶.3⁴]dodecane' },
  { pin: 'silolo[3,4-c]silole' },
  { pin: 'cyclopenta[c]silole' },
  { pin: '2H-6,8a-methanofuro[2,3-b]oxepine' },
  { pin: '1H-3a,6-epoxyazulene' },
]);
