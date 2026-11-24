/**
 * P-66.3.6
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Semioxamazones
 * Semioxamazones have the general structure R=N-NH-CO-CO-NH2. They are derivatives of the hydrazide of
 * oxamic acid. Their preferred IUPAC names are based on the parent name acetamide, but they may also
 * be named as derivatives of oxamic hydrazide.”
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-66.3.6', [
  { formula: 'C6H5-CH=N-NH-COCO-NH2', pin: '2-(benzylidenehydrazinyl)-2-oxoacetamide', otherNames: ['N′-benzylideneoxamic hydrazide'] },
]);
