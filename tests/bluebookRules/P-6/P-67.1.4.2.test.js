/**
 * P-67.1.4.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Substituent groups derived from the boron acids and silicic acid
 * Substituent groups derived from boron and silicon mononuclear acids and their analogues are formed
 * by substituting the parent hydride names ‘borane’ and ‘silane’. The name borono, for –B(OH)2, is
 * retained and is the preselected name.
 * The name boryl has been used for the substituent group H2B–, now named boranyl as the preselected
 * name, and consequently is not to be used for the prefix group derived from boric acid by removal of
 * …”
 *
 * The whole section is in the Blue Book.
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 941, P-67.1.4.2, example 2. [corrected 25 August 2016]
 *     For (not borinoyl)
 *     read (not boryl)
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-67.1.4.2', [
  { formula: '–B(OH)2', preselectedPrefix: 'borono' },
  { formula: '–BH2', preselectedPrefix: 'boranyl', notNames: ['boryl'] },
  { formula: '>BH', preselectedPrefix: 'boranediyl', notNames: ['boronoyl'] },
  { formula: '–B<', preselectedPrefix: 'boranetriyl', notNames: ['boryl'] },
  { formula: '=BH', preselectedPrefix: 'boranylidene', notNames: ['boronoyl'] },
  { formula: '≡B', preselectedPrefix: 'boranylidyne', notNames: ['boryl'] },
  { formula: '–B(NH2)2', preselectedPrefix: 'diaminoboranyl', notNames: ['borodiamidoyl'] },
  { formula: '–BH(O-CH3)', preferredPrefix: 'methoxyboranyl', notNames: ['hydromethoxyboryl'] },
  { formula: '–Si(OH)3', preselectedPrefix: 'trihydroxysilyl' },
  { formula: '–SiCl2(NH2)', preselectedPrefix: 'aminodichlorosilyl' },
  { formula: '–Si(O-CH3)3', preferredPrefix: 'trimethoxysilyl' },
  { formula: '–Si(OH)2(SH)', preselectedPrefix: 'dihydroxy(sulfanyl)silyl' },
]);
