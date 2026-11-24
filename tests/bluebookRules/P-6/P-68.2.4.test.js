/**
 * P-68.2.4
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Silicic acid as functional parent compound
 * The nomenclature of silicic acid (formerly orthosilicic acid) has been discussed in Section
 * P-67.1.2. Silicic acid is modified only by prefixes to denote functional replacement by chalcogen
 * atoms. Functional replacement by other atoms or groups is not recommended. Names of salts, esters,
 * and anhydrides are derived from the retained name silicic acid. Amides of silicic acid are
 * classified as amines. Hydrazides of silicic acid are considered as derivatives of hydrazine.
 * Names of substituent groups derived from silicic acid are formed on the basis of the parent hydride
 * ‘silane’ (see P-67.1.4.2).”
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-68.2.4', [
  { formula: '(HO)3Si–', preselectedName: 'trihydroxysilyl' },
  { formula: '(HS)(HO)2Si–', preselectedName: 'dihydroxy(sulfanyl)silyl' },
  { formula: 'Si(NH2)4', preselectedName: 'silanetetramine', notNames: ['silicic tetraamide'] },
  { formula: 'Si(NH-NH2)4', preselectedName: '1,1′,1′′,1′′′-silanetetrayltetrahydrazine', notNames: ['silicic tetrahydrazide'] },
]);
