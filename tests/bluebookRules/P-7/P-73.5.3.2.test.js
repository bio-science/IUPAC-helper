/**
 * P-73.5.3.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Where there is a choice, low locants for skeletal cationic centers are determined before
 * considering locants for cationic suffixes. This is consistent with the choice of lowest locants for
 * corresponding neutral compounds (see P-14.4).”
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-73.5.3.2', [
  { pin: 'N,N,N,2-tetramethyl-2,6-naphthyridin-2-ium-5-aminium', notNames: ['N,N,N,6-tetramethyl-2,6-naphthyridin-6-ium-1-aminium'] },
]);
