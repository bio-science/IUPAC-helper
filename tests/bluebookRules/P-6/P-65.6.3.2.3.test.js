/**
 * P-65.6.3.2.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Esters cited as prefixes
 * When, in an ester with the general structure R-CO-O-R′ or R-S(O)x-O-R′, another group is present
 * that has priority for citation as the principal group or when all ester groups cannot be described
 * by the methods prescribed for naming esters, an ester group is indicated by prefixes as ‘acyloxy’
 * for the group R-CO-O–, and ‘alkoxy...oxo’, ‘(alkyloxy)...oxo’, ‘(alkanyloxy)...oxo’,
 * ‘alkoxycarbonyl’, ‘(alkyloxy)carbonyl’ or ‘(alkanyloxy)carbonyl’ for the group –CO-OR′.
 * The systematic name ‘acetyloxy’ is preferred to the contracted name ‘acetoxy’ that may be used in
 * general nomenclature.
 * Seniority for numbering follows that for acids, for which see P-65.1.2.3.”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 805, P-65.6.3.2.3, lines 4/5. [corrected 25 August 2016]
 *     For ...and ‘alkyloxy(alkanyl)...oxo’ or ‘alkyl(alkanyl)oxycarbonyl’ for the group –CO-OR′.
 *     read ...and ‘alkoxy...oxo’, ‘(alkyloxy)...oxo’, ‘(alkanyloxy)...oxo’, ‘alkoxycarbonyl’,
 *     ‘(alkyloxy)carbonyl’ or ‘(alkanyloxy)carbonyl’ for the group –CO-OR′.
 *   Page 805, P-65.6.3.2.3, example 2. [corrected 25 August 2016]
 *     For 3-[(phenylcarbony)oxy]propanoic acid
 *     read 3-[(phenylcarbonyl)oxy]propanoic acid
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-65.6.3.2.3', [
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650603f.gif', pin: '3-ethoxy-N,N,N-trimethyl-3-oxopropan-1-aminium bromide' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650603g.gif', pin: '3-(benzoyloxy)propanoic acid', otherNames: ['3-[(phenylcarbonyl)oxy]propanoic acid'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650603h.gif', pin: '2-(acetyloxy)ethane-1-sulfonic acid', otherNames: ['2-acetoxyethanesulfonic acid'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650603i.gif', pin: 'methyl 4-(phenoxysulfinothioyl)naphthalene-1-carboxylate' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650603j.gif', pin: 'methyl 4-[(phenylsulfanyl)sulfonyl]naphthalene-1-carboxylate' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650603k.gif', pin: 'ethyl 2-[(ethoxycarbonyl)oxy]-4,4-dimethyl-3-oxopentanoate' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650603l.gif', pin: '3-[(pyridine-3-carbonyl)oxy]propanoic acid', otherNames: ['3-(nicotinoyloxy)propanoic acid'] },
]);
