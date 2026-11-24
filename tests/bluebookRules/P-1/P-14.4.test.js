/**
 * P-14.4
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “NUMBERING
 * When several structural features appear in cyclic and acyclic compounds, low locants
 * are assigned to them in the following decreasing order of seniority:
 * Two important changes have been made to the 1979 recommendations (ref 1):
 * (1) heteroatoms in chains are now considered to be a part of the parent hydride; as such, they have
 * seniority over suffixes for numbering as for heteroatoms in rings;
 * (2) hydro/dehydro prefixes are now classified as detachable prefixes but are not included in the
 * category of alphabetized detachable prefixes; …
 * (a) fixed numbering in chains, rings, or ring systems, i.e., when the numbering of a system is
 * fixed, for example in purine, anthracene, and phenanthrene, this numbering must be used, both in
 * PINs …
 * (b) indicated hydrogen for unsubstituted compounds; a higher locant may be needed at another
 * position to accommodate a substituent suffix in accordance with structural feature (c);
 * (c) principal characteristic groups and free valences (suffixes);
 * (d) ‘added indicated hydrogen’ (consistent with the structure of the compound and in accordance with
 * further substitution);
 * (e) saturation/unsaturation:
 * …”
 *
 * The whole section is in the Blue Book.
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 35, P-14.4 (b) lines 2/3. [corrected 28 May 2024]
 *     For ....accommodate a substituent suffix in accordance with structural feature (d)
 *     read ....accommodate a substituent suffix in accordance with structural feature (c)
 *   Page 38, P-14.4 (h), example 1. [corrected 5 July 2018]
 *     Replace structure with:
 *   Page 41, P-14.4 (j), last example. [corrected 11 November 2020]
 *     Replace the structure with:
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-14.4', [
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1404a.gif', pin: '5-oxa-2,8-dithia-11-silatetradecan-14-oic acid' },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1404b.gif', pin: 'naphthalene' },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1404c.gif', pin: 'phenazine' },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1404d.gif', pin: '1-germacyclotetradecane-3-carbonitrile' },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1404e.gif', pin: '1H-phenalen-4-ol' },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1404f.gif', pin: '2H-pyran-6-carboxylic acid' },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1404g.gif', pin: '5H-inden-5-one' },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1404h.gif', pin: '3,4-dichloronaphthalene-1,6-dicarboxylic acid' },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1404i.gif', preferredPrefix: '6-carboxynaphthalen-2-yl' },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1404j.gif', pin: 'cyclohex-2-en-1-amine' },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1404k.gif', preferredPrefix: 'cyclohex-3-en-1-yl' },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1404l.gif', pin: '3,4-dihydronaphthalen-1(2H)-one' },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1404m.gif', pin: '9,10-dihydro-2H,4H-benzo[1,2-b:4,3-c′]dipyran-2,6(8H)-dione' },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1404n.gif', pin: '6-fluoro-1,2,3,4-tetrahydronaphthalene' },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1404o.gif', pin: '3-bromocyclohex-1-ene' },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1404p.gif', pin: '2-methylpent-1-en-4-yn-3-ol', notNames: ['4-methylpent-4-en-1-yn-3-ol'] },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1404q.gif', pin: '5-bromo-8-hydroxy-4-methylazulene-2-carboxylic acid' },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1404r.gif', pin: '4-methyl-5-nitrooctanedioic acid' },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1404s.gif', pin: '1-methyl-4-nitronaphthalene', notNames: ['4-methyl-1-nitronaphthalene'] },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1404t.gif', pin: '1λ⁴,5-benzodithiepine' },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1404u.gif', pin: '1-oxa-4λ⁶,12λ⁴-dithiacyclotetradecane' },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1404v.gif', pin: '1-(λ⁵-phosphanyl)-3-phosphanylpropan-2-ol' },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1404w.gif', notNames: ['(3-¹⁴C)butane'] },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1404x.gif', notNames: ['(2-¹⁴C,3,3-²H2)butane'] },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1404y.gif', notNames: ['(3-¹⁴C,2-²H1)butane'] },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1404ac.gif', notNames: ['(2R,4S)-(2-²H1,4-³H1)pentane'] },
  { pin: 'rel-(1R,2R)-1,2-dibromo-4-chlorocyclopentane', otherNames: ['1r,2t-dibromo-4c-chlorocyclopentane'] },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1404aj.gif', pin: '1-[(2R)-butan-2-yl]-3-[(2S)-butan-2-yl]benzene' },
]);
