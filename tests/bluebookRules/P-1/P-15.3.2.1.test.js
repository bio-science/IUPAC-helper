/**
 * P-15.3.2.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Assemblies of identical structural units (see P-15.3.1.1)
 * Retained and systematic names can be used as identical parent structural units. Primes, double
 * primes, etc., are used to distinguish among the locants of the identical parent structural unit.
 * When functionalized parent hydrides, i.e. parent structures substituted by groups expressed as
 * suffixes (see P-15.1.2), have locants, they are enclosed in parentheses and preceded by a numerical
 * prefix ‘di-’, ‘tri-’, etc. …”
 *
 * The whole section is in the Blue Book.
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 77, P-15.3.2.1, example 1 on this page. [corrected 31 July 2019]
 *     For 1,1′-[oxydi(tetradecane-14,1-diyl)]bis(silane) (PIN)
 *     read [oxydi(tetradecane-14,1-diyl)]bis(silane) (PIN)
 *   Page 78, P-15.3.2.1, example 5 on this page. [modified 25 August 2016]
 *     For 1,1′,1′′,1′′′-[oxydi(pyridazine-4,3,5-triyl)]tetra(methan-1-ol) (PIN)
 *     read [oxydi(pyridazine-4,3,5-triyl)]tetramethanol (PIN)
 *     replace structure with:
 *   Page 78, P-15.3.2.1, example 6 on this page. [corrected 31 July 2019]
 *     For 1,1′,1′′,1′′′-[oxydi(pyridazine-5,3,4-triyl)]tetra(methan-1-ol) (PIN)
 *     read[oxydi(pyridazine-5,3,4-triyl)]tetramethanol (PIN)
 *     delete [Note: The use of the locant ‘1’ here for methanol; see P-14.3.3]
 *     replace structure with:
 *   Page 79, P-15.3.2.1, example 4 on this page. [corrected 31 July 2019]
 *     For N,N′-ethane-1,2-diylbis[N-(carboxymethyl)glycine]
 *     read N,N′-(ethane-1,2-diyl)bis[N-(carboxymethyl)glycine]
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-15.3.2.1', [
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1503x.gif', pin: '1,1′-peroxydibenzene', notNames: ['dioxydibenzene'] },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1503y.gif', pin: '1,1′-methylenebis(disilane)' },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1503z.gif', pin: '1,1′-methylenebis(1-azacyclododecane)' },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1503aa.gif', pin: '2,2′-sulfanediyldi(ethan-1-ol)', otherNames: ['2,2′-thiodi(ethan-1-ol)'] },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1503ab.gif', pin: '8,8′-oxydi(spiro[4.5]decane)' },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1503ad.gif', pin: '4,4′-oxydi(cyclohexane-1-carboxylic acid)' },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1503ae.gif', pin: '4,4′-oxydi(benzene-1-sulfonic acid)' },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1503af.gif', pin: '4,4′-[(2-methylpropane-1,3-diyl)bis(oxy)]diphenol' },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1503ag.gif', pin: '2,2′-[ethane-1,2-diylbis(oxymethylene)]di(cyclohexane-1-carboxylic acid)' },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1503ah.gif', pin: '2,2′-[oxybis(ethane-2,1-diyloxy)]diacetic acid' },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1503ai.gif', pin: '4,4′-[oxydi(tetradecane-14,1-diyl)]diphenol' },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1503aj.gif', pin: '4,4′-[oxybis(1-fluoroethane-2,1-diyl)]di(cyclohexane-1-sulfonic acid)' },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1503ak.gif', pin: '2,2′-oxydiacetic acid' },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1503al.gif', pin: '3,3′-oxydipropanoic acid' },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1503am.gif', pin: '2,2′,2′′-phosphanetriyltriacetic acid' },
  { formula: 'H2N-CH2-CH2-O-CH2-CH2-NH2', pin: '2,2′-oxydi(ethan-1-amine)' },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1503ap.gif', pin: '2,2′,2′′-nitrilotri(ethan-1-ol)' },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1503aq.gif', name: '10,10′-[[1,1′-biphenyl]-4,4′-diylbis(oxy)]di(decanoic acid) (PIN).' },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1503ar.gif', name: '2,2′,2′′,2′′′-(ethane-1,2-diyldinitrilo)tetraacetic acid' },
]);
