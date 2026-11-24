/**
 * P-66.1.1.4.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Substituents of the types –NH-CO-R and –NH-SO2-R
 * When a group having preference for citation as a principal characteristic group is present, the
 * group R-CO-NH–, or R-SO2-NH– (and selenium and tellurium analogues) of an N-substituted amide is
 * named in two ways:
 * (1) substitutively, by using a prefix formed by changing the final letter ‘e’ in the complete name
 * of the amide to ‘o’, thus changing the suffixes ‘amide’ and ‘carboxamide’ into ‘amido’ and …
 * (2) substitutively, by using ‘acylamino’ prefixes formed by substituting the substituent group
 * ‘amino’ with the name of the acyl group.
 * Method (1) generates preferred IUPAC names.
 * When an amide is the principal function, it must be named as such. The method of considering amides
 * as substituents on polycyclic ring systems, described in the 1993 Recommendations (ref. …”
 *
 * The whole section is in the Blue Book.
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-66.1.1.4.3', [
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66114m.gif', pin: '4-formamidobenzoic acid', otherNames: ['4-(formylamino)benzoic acid'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66114n.gif', pin: '(4-acetamido-3-methylphenyl)arsonic acid', otherNames: ['[4-(acetylamino)-3-methylphenyl]arsonic acid'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66114o.gif', pin: '4-benzamidobenzene-1-sulfonic acid', otherNames: ['4-(benzoylamino)benzene-1-sulfonic acid'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66114p.gif', pin: '3-(methanesulfonamido)propanoic acid', otherNames: ['3-[(methanesulfonyl)amino]propanoic acid'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66114q.gif', name: 'N-(cyclohexylmethanesulfonyl)glycine' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66114r.gif', name: 'N-cyclopropyl-N-(methanesulfonyl)glycine' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66114s.gif', pin: '2-(4-aminobenzene-1-sulfonamido)-1,3-thiazole-5-carboxylic acid', otherNames: ['2-{[(4-aminophenyl)sulfonyl]amino}-1,3-thiazole-5-carboxylic acid'], notNames: ['2-sulfanilamidothiazole-5-carboxylic acid'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66114t.gif', pin: '2-(N-methylpropanamido)benzene-1-sulfonic acid', otherNames: ['2-[methyl(propanoyl)amino]benzene-1-sulfonic acid'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66114u.gif', pin: '4,4′-butanediamidodibenzoic acid', otherNames: ['4,4′-[butanedioylbis(azanediyl)]dibenzoic acid', '4,4′-[1,4-dioxobutane-1,4-diylbis(azanediyl)]dibenzoic acid'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66114v.gif', pin: 'N-methyl-N-(quinolin-4-yl)acetamide', otherNames: ['{not 4-[acetyl(methyl)amino]quinoline}'], notNames: ['4-(N-methylacetamido)quinoline'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66114w.gif', pin: 'N-(dibenzo[b,d]furan-1-yl)acetamide', notNames: ['1-acetamidodibenzofuran', '1-(acetylamino)dibenzofuran'] },
]);
