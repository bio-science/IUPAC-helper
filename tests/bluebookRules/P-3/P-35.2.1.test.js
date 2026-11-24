/**
 * P-35.2.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Retained traditional prefixes”
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-35.2.1', [
  { formula: '–F', preselectedPrefix: 'fluoro' },
  { formula: '–Cl', preselectedPrefix: 'chloro' },
  { formula: '–Br', preselectedPrefix: 'bromo' },
  { formula: '–I', preselectedPrefix: 'iodo' },
  { formula: '–OH', preselectedPrefix: 'hydroxy' },
  { formula: '=O', preselectedPrefix: 'oxo' },
  { formula: '–O–', preselectedPrefix: 'oxy' },
  { formula: '–COOH', preferredPrefix: 'carboxy' },
  { formula: '–SO2-OH', preselectedPrefix: 'sulfo' },
  { formula: '–SO-OH', preselectedPrefix: 'sulfino' },
  { formula: '–NH2', preselectedPrefix: 'amino' },
  { formula: '–N3', preselectedPrefix: 'azido' },
  { formula: '=NH', preselectedPrefix: 'imino' },
  { formula: '–N<', preselectedPrefix: 'nitrilo' },
  { formula: '=N2', preselectedPrefix: 'diazo' },
  { formula: '–NC', preferredPrefix: 'isocyano' },
  { formula: '–CN', preferredPrefix: 'cyano' },
  { formula: '–NCO', preferredPrefix: 'isocyanato' },
]);
