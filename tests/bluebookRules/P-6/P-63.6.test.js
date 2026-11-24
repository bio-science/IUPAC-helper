/**
 * P-63.6
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “SULFOXIDES AND SULFONES
 * Compounds with the general structures R-SO-R′ and R-SO2-R′ are called generically ‘sulfoxides’ and
 * ‘sulfones’, respectively, when R and R′ are hydrocarbyl groups. They are named in three ways as
 * follows:
 * (1) substitutively, by prefixing the name of the acyl group R′-SO– or R′-SO2– to the name of the
 * parent hydride corresponding to R as described in P-65.3.2.2.2;
 * (2) by functional class nomenclature, using the class names ‘sulfoxide’ and ‘sulfone’, respectively;
 * (3) by multiplicative nomenclature, except where R and R′ are alkyl groups, when the conditions for
 * its use are satisfied.
 * Methods (1) and (3) generate preferred names.
 * Selenium and tellurium analogues are named in the same way using acyl groups derived from the
 * appropriate seleninic, selenonic, tellurinic, and telluronic acids, and the class names
 * ‘selenoxide’, …
 * Di- and polysulfones are described in P-68.4.3.2”
 *
 * The whole section is in the Blue Book.
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-63.6', [
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P630600a.gif', pin: '1-(ethanesulfinyl)butane', otherNames: ['1-(ethylsulfinyl)butane', 'butyl ethyl sulfoxide'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P630600b.gif', pin: '(ethaneseleninyl)benzene', otherNames: ['ethyl phenyl selenoxide'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P630600c.gif', pin: '7-(benzeneselenonyl)quinoline', otherNames: ['7-(phenylselenonyl)quinoline', 'phenyl quinolin-7-yl selenone', 'phenyl 7-quinolyl selenone'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P630600d.gif', pin: '1,1′-sulfinyldibenzene', otherNames: ['diphenyl sulfoxide', '(benzenesulfinyl)benzene'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P630600e.gif', pin: '1,1′-selenonyldibenzene', otherNames: ['diphenyl selenone', '(benzeneselenonyl)benzene'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P630600f.gif', pin: '(ethanesulfonyl)ethane', otherNames: ['diethyl sulfone'] },
]);
