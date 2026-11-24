/**
 * P-25.4.2.1.4
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “A divalent acyclic homogeneous heteroatom bridge is named by a prefix based either on a
 * substitutive prefix or the name of the corresponding parent hydride. Bridge prefixes based on a
 * substitutive prefix, in use today or formerly recommended, are distinguished by the prefix ‘epi’ (or
 * ‘ep’ before the letter ‘iְ or ‘o’ of the following term). Bridge prefixes based on the name of a
 * parent hydride are named in the same way as for acyclic hydrocarbon bridge prefixes (see
 * P-25.4.2.1.1). …
 * The following names are now recommended as preselected (see P-12.2) bridge prefixes: ‘sulfano’,
 * –S–;‘disulfano’, –SS–; ‘selano’, –Se–; ‘tellano’, –Te–; ‘azano‘, –NH–; ‘diazeno’, –N=N–; …”
 *
 * The whole section is in the Blue Book.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-25.4.2.1.4', [
  { preselectedPrefix: 'epoxy', notNames: ['epoxidano'] },
  { preselectedPrefix: 'epidioxy', notNames: ['epiperoxy'] },
  { preselectedPrefix: 'epitrioxy' },
  { preselectedPrefix: 'sulfano' },
  { preselectedPrefix: 'λ⁴-sulfano' },
  { preselectedPrefix: 'disulfano' },
  { preselectedPrefix: 'selano' },
  { preselectedPrefix: 'tellano' },
  { preselectedPrefix: 'silano' },
  { preselectedPrefix: 'stannano' },
  { preselectedPrefix: 'azano', notNames: ['imino given in ref. 1', 'C-815.2'] },
  { preselectedPrefix: 'diazano' },
  { preselectedPrefix: 'epitriazano', notNames: ['triazano', 'which has been used for H2N-NH-NH–', 'see C-942.3', 'ref. 1', 'which is triazan-1-yl in these recommendations', 'see P-68.3.1.4.1'] },
  { preselectedPrefix: 'epitriaz[1]eno', notNames: ['triaz[1]eno', 'which has been used for H2N-N=N–', 'see C-942.3', 'ref. 1', 'which is triaz-1-en-1-yl in these recommendations', 'see P-68.3.1.4.1'] },
  { preselectedPrefix: 'phosphano' },
  { preselectedPrefix: 'borano' },
]);
