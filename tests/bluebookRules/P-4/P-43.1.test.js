/**
 * P-43.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “GENERAL METHODOLOGY OF FUNCTIONAL REPLACEMENT
 * Suffixes are modified as indicated in Table 4.3 for acids and in Table 4.4 for acids and other
 * classes. Prefixes and infixes are used as indicated in Table 4.2. Prefixes are used to modify
 * suffixes such as ‘ol’, ‘al’, for example ‘thiol’ and ‘thial’. Infixes are recommended to modify the
 * suffixes ‘carboxylic acid’, ‘sulfonic acid’, and related suffixes, for example ‘carboperoxoic acid’
 * and ‘sulfonothioic acid’.
 * When several oxygen atoms are replaceable, the following criteria are applied, in order, until a
 * decision is reached:
 * (a) maximum number of oxygen atoms, then S, Se, and Te atoms, =NH and =NNH2 groups;
 * (b) maximum number of oxygen atoms, then S, Se, and Te atoms, in −OO− groups;
 * (c) oxygen atoms, then S, Se, and Te atoms, in −(O)OH and −OH groups.
 * The order of seniority is described, in the case of carboxylic acids, sulfonic acids and sulfinic
 * acids, by indicating, after the name of the modified suffix the number and kind of atoms used in the
 * …
 * Table 4.3 gives the list, in decreasing order, of the seniority of suffixes and suffixes modified by
 * functional replacement for carboxylic and sulfonic acids. …”
 *
 * The whole section is in the Blue Book.
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 439, P-43.1, Table 4.3, line 14 on this page. [corrected 19 September 2018]
 *     For sulfoimidodithioic acid
 *     read sulfonimidodithioic acid
 *   Page 441, P-43.1, Table 4.4, section 3, last two examples. [corrected 13 February 2019]
 *     For –C(=NHNH2)-SH
 *     read –C(=NNH2)-SH
 *     for –(C)(=NHNH2)-SH
 *     read –(C)(=NNH2)-SH
 *   Page 442, P-43.1, Table 4.4 (9), line 4. [corrected 10 October 2018]
 *     For –S(O)(S)-OOH
 *     read –S(S)-OOH
 *   Page 444, P-43.1, Table 4.4 (22), line 3. [corrected 10 October 2018]
 *     For –S(S)(=NH)-NH2
 *     read –S(S)(=NNH2)-NH2
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-43.1', [
  { name: 'selone', notNames: ['selenone'] },
  { name: 'tellone', notNames: ['tellurone'] },
  { name: 'SO-thioperoxol', notNames: ['sulfenic acid'] },
]);
