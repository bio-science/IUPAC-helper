/**
 * P-15.1.7.1.4
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “The longest chain is numbered from one end to the other by arabic numbers, the direction being
 * chosen so as to give the lower locants to the substituent groups (side chains) [see P-14.4 (f)]. The
 * lower set of locants is defined as the set that, when compared term by term with other locant sets
 * cited in order of increasing magnitude, has the lower term at the first point of difference (see
 * P-14.3.5). The locants are placed immediately in front of the part of the name to which they refer.
 * …”
 *
 * The whole section is in the Blue Book.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-15.1.7.1.4', [
  { pin: '2-methylpentane' },
  { pin: '2,3,5-trimethylhexane', notNames: ['2,4,5-trimethylhexane'] },
]);
