/**
 * P-69.2.7
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * ““Ocenes”
 * “Ocenes” are bis(η⁵-cyclopenta-2,4-dien-1-ido) or bis(η⁵-cyclopenta-2,4-dien-1-yl) or
 * bis(η⁵-cyclopentadienido) complexes of certain metals. The names ferrocene, ruthenocene, osmocene,
 * nickelocene, chromocene, cobaltocene, and vanadocene are names for compounds corresponding to
 * ‘bis(λ⁵-cyclopenta-2,4-dien-1-yl)metal’, where the metal atom is Fe, Ru, Os, Ni, Cr, Co, and V. …”
 *
 * The whole section is in the Blue Book.
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 1041, P-69.2.7, example 2. [modified 5 June 2019]
 *     For 2-(osmocen-1-yl)ethanol (PIN)
 *     read 2-osmocenylethan-1-ol (PIN)
 *     for 1-(2-(hydroxyethyl)osmocene
 *     read 1-(2-hydroxyethyl)osmocene
 *   Page 1041, P-69.2.7, example 3. [modified 1 July 2020]
 *     For N,N-dimethyl(vanadocen-1-yl)ethan-1-amine (PIN)
 *     read N,N-dimethyl-1-vanadocenylethan-1-amine (PIN)
 *     For 1-[1-(dimethylamino)ethyl]vanadocene
 *     read [1-(dimethylamino)ethyl]vanadocene
 *   Page 1042, P-69.2.7, example 2 on this page. [modified 20 March 2019]
 *     For 1(1,1′),3(1,1′)-diferrocenacylotetraphane (PIN)
 *     read 1,3(1,1′)-diferrocenacyclotetraphane (PIN)
 *   Page 1042, P-69.2.7, example 3. [corrected 16 August 2016].
 *     For 1,1′-(4-carboxybutane-1,3-diyl)ferrocene (PIN)
 *     read 1,1′-(4-carboxybutane-1,3-diyl)ferrocene
 *     for 3,5-(ferrocene-1,1′ -diyl)pentanoic acid
 *     read 3,5-(ferrocene-1,1′-diyl)pentanoic acid (PIN) [space removed from name]
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-69.2.7', [
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P69270a.gif', pin: '1,1′-(ferrocene-1,1′-diyl)di(ethan-1-one)', otherNames: ['1,1′-diacetylferrocene'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P69270b.gif', pin: '2-(osmocen-1-yl)ethanol', otherNames: ['1-(2-hydroxyethyl)osmocene'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P69270c.gif', pin: 'N,N-dimethyl-1-vanadocenylethan-1-amine' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P69270d.gif', pin: '1,1′′-(ethane-1,2-diyl)bis(1′-methylruthenocene)' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P69270e.gif', pin: '1,3(1,1′)-diferrocenacyclotetraphane' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P69270f.gif', pin: '3,5-(ferrocene-1,1′-diyl)pentanoic acid', otherNames: ['1,1′-(4-carboxybutane-1,3-diyl)ferrocene'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P69270g.gif', pin: 'benzoferrocene' },
]);
