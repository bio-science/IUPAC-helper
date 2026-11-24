/**
 * P-44.4.1.5
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “The senior ring, ring system, or principal chain has the lower locants for heteroatoms introduced
 * by skeletal replacement (‘a’) nomenclature as a set [criterion (e) in P-44.4.1].”
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-44.4.1.5', [
  { pin: '1,7-dioxa-3,5-dithia-4-stannacycloundecane' },
  { pin: '1,9-dioxa-4,6-dithia-5-stannacycloundecane' },
  { pin: '1,4,6,10-tetraoxa-5λ⁵-phosphaspiro[4.5]decane' },
  { pin: '2,3,6,10-tetraoxa-5λ⁵-phosphaspiro[4.5]decane' },
  { pin: '2-oxa-5-thia-1,8(1),3,6(1,4)-tetrabenzenaoctaphane' },
  { pin: '2-oxa-7-thia-1,8(1),3,6(1,4)-tetrabenzenaoctaphane' },
  { pin: '1H-2,1,3-benzoxadisiline' },
  { pin: '1H-2,1,4-benzoxadisiline' },
  { pin: '3,13-dioxabicyclo[8.2.1]tridecane' },
  { pin: '4,13-dioxabicyclo[8.2.1]tridecane' },
]);
