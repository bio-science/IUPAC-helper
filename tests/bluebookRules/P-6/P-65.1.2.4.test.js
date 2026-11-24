/**
 * P-65.1.2.4
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Polyfunctional carboxylic acids
 * Systematic names of substituted carboxylic acids are formed by adding appropriate prefixes, such as
 * ‘oxo’, ‘hydroxy’, ‘amino’, ‘imino’, ‘halo’, ‘nitro’, etc., to the name of the acid. Prefixes are not
 * ranked as functional entities; they are cited in a name in alphabetical order (except for
 * hydro/dehydro) which is also used to assign lowest locants when required.”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 754, P-65.1.2.4, example 4 on this page. [corrected 26 September 2018]
 *     Replace the structure with:
 *   Page 754, P-65.1.2.4, example 5. [corrected 6 March 2019]
 *     For N,N′-ethane-1,2-diylbis[N-(carboxymethyl)glycine]
 *     read N,N′-(ethane-1,2-diyl)bis[N-(carboxymethyl)glycine]
 *   Page 755, P-65.1.2.4, example 1 on this page. [corrected 6 March 2019]
 *     For N-(carboxymethyl)-N′-(2-hydroxyethyl)-N,N′-ethane-1,2-diyldiglycine
 *     read N-(carboxymethyl)-N′-(2-hydroxyethyl)-N,N′-(ethane-1,2-diyl)diglycine
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-65.1.2.4', [
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650102x.gif', pin: '5-oxohexanoic acid' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650102y.gif', pin: '5-aminopentanoic acid' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650102z.gif', pin: '3,5-dibromo-4-hydroxybenzoic acid' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650102aa.gif', pin: '2-amino-5-nitrobenzoic acid', notNames: ['5-nitroanthranilic acid'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650102ab.gif', pin: '1-hydroxy-3-oxopropane-1,2,3-tricarboxylic acid', notNames: ['3-hydroxy-1-oxopropane-1,2,3-tricarboxylic acid'] },
  { formula: '(HO-CH2-CH2-O)2CH-COOH', pin: 'bis(2-hydroxyethoxy)acetic acid' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650102ac.gif', pin: '4-(methylsulfanyl)-2-oxobutanoic acid', notNames: ['4-(methylthio)-2-oxobutyric acid'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650102ad.gif', pin: '4-[(hydroxysulfanyl)methyl]benzoic acid', notNames: ['4-(sulfenomethyl)benzoic acid'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650102ae.gif', pin: '5,6,7,8-tetrabromo-1,2,3,4-tetrahydroanthracene-9-carboxylic acid', notNames: ['1,2,3,4-tetrabromo-5,6,7,8-tetrahydroanthracene-9-carboxylic acid hydro/dehydro prefixes are given lowest possible locants before other detachable prefixes'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650102af.gif', pin: '1-(2-carboxy-2-oxoethyl)-4-hydroxycyclohexa-2,5-diene-1-carboxylic acid', otherNames: ['1-carboxy-4-hydroxy-α-oxocyclohexa-2,5-dienepropanoic acid'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650102ag.gif', pin: '4-hydroxy-6-oxoocta-2,4-dienedioic acid', notNames: ['5-hydroxy-3-oxoocta-4,6-dienedioic acid'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650102ah.gif', name: '2,2′,2′′,2′′′-(ethane-1,2-diyldinitrilo)tetraacetic acid' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650102ai.gif', name: 'N-(carboxymethyl)-N′-(2-hydroxyethyl)-N,N′-(ethane-1,2-diyl)diglycine' },
]);
