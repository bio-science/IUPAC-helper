/**
 * P-25.8.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Partial list of heterocyclic parent components in decreasing order of seniority
 * The following list contains parent heterocycles arranged in decreasing order of seniority for
 * selection as the parent component for fusion names. Ring systems containing Hg as given in ref. 4
 * are not included in these recommendations.
 * The parent heterocycles are arranged by ring analysis, i.e., in decreasing order of number rings,
 * ring size, and in accordance with the priority given to heteroatoms, N, O, S, Se.
 * Note 1: Indicated hydrogen atoms are not shown in this kind of listing.
 * Note 2: The seniority order given below is used to select parent components in fusion nomenclature.
 * Note 3: In the order of seniority used by CAS quinolizine precedes quinoline and isoquinoline; and
 * indolizine preceeds indole and isoindole..
 * phenoxazine C4NO-C6-C6
 * phenothiazine C4NS-C6-C6
 * phenoselenazine C4NSe-C6-C6
 * phenotellurazine C4NTe-C6-C6
 * phenazaphosphinine C4NP-C6-C6
 * phenazarsinine C4NAs-C6-C6
 * phenazine C4N2-C6-C6
 * phenanthroline C5N-C5N-C6 (in accordance with the positions of nitrogen
 * atoms, in decreasing order of seniority:
 * 1,7; 1,8; 1,9; 1,10; 2,7; 2,8; 2,9; 3,7; 3,8; 4,7)
 * perimidine C4N2-C6-C6
 * acridine C5N-C6-C6
 * …”
 *
 * The whole section is in the Blue Book.
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 294, P-25.8.1, Note 3. [modified 11 August 2021]
 *     For In the order of seniority used by CAS quinolizine precedes quinoline and the indacenes
 *     precede biphenylene.
 *     read In the order of seniority used by CAS quinolizine precedes quinoline and isoquinoline; and
 *     indolizine preceeds indole and isoindole.
 *   Page 296, P-25.8.1, line 12. [corrected 30 January 2019]
 *     For selanthrene
 *     read selenanthrene
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-25.8.1', [
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250801a.gif', name: '10H-phenoxazine' },
]);
