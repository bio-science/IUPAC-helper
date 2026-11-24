/**
 * P-66.4.1.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Suffixes for amidines
 * Amidines are named as amides by functional replacement nomenclature in which the =O atom has been
 * replaced by the =NH group. As a principal characteristic group they are designated by the suffixes
 * ‘-imidamide’ and ‘-carboximidamide’. The locant for the –NH2 group is N and for the imino group N′.
 * The suffixes ‘-amidine’ and ‘-carboxamidine’ are no longer recommended.
 * Suffixes for the sulfonic and sulfinic analogues and their selenium and tellurium analogues are
 * named similarly. …
 * Suffixes for groups containing S, Se, and Te in place of O in a sulfonimidamide suffix are named by
 * functional replacement, for example:
 * The suffix ‘imidamide’ is used to denote an acyclic amidine with one terminal amidine characteristic
 * group; …
 * Retained names of amidines are formed by replacing the ‘amide’ ending in names of amides by
 * ‘imidamide’, but these are not preferred IUPAC names; preferred IUPAC names are derived
 * systematically. …
 * The letter locants ‘N’, ‘N′’, etc. with superscripted numbers are used to differentiate among the
 * different nitrogen atoms for ‘diimidamides’”
 *
 * The whole section is in the Blue Book.
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 881, P-66.4.1.1, example 1. [corrected 13 March 2019]
 *     Replace the structure with:
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-66.4.1.1', [
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66411a.gif', suffix: '-imidamide' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66411b.gif', suffix: '-carboximidamide' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66411c.gif', suffix: '-sulfonimidamide' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66411d.gif', suffix: '-sulfonodiimidamide' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66411e.gif', suffix: '-sulfinimidamide' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66411f.gif', suffix: '-seleninimidamide' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66411g.gif', suffix: '-sulfonimidothioamide' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66411h.gif', pin: 'hexanimidamide' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66411i.gif', pin: 'cyclohexanecarboximidamide' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66411j.gif', pin: 'ethanimidamide', otherNames: ['acetimidamide'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66411k.gif', pin: 'methanesulfinimidamide' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66411l.gif', pin: 'methanimidamide', otherNames: ['formimidamide'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66411m.gif', pin: 'pentanediimidamide' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66411n.gif', pin: 'disilane-1,2-dicarboximidamide' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66411o.gif', pin: 'butanediimidamide', otherNames: ['succinimidamide'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66411p.gif', pin: 'ethanediimidamide', otherNames: ['oxalimidamide'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66411q.gif', pin: 'benzene-1,2-dicarboximidamide', otherNames: ['phthalimidamide'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66411r.gif', pin: 'benzene-1,4-dicarboximidamide', otherNames: ['terephthalimidamide'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66411s.gif', pin: 'N′′¹-ethyl-N¹,N¹-dimethylcyclohexane-1,1-dicarboximidamide' },
]);
