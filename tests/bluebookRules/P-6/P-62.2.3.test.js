/**
 * P-62.2.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “When all amino groups cannot be expressed as suffixes, or when the –NH2 group is not the principal
 * characteristic group, the prefix ‘amino’ is used in preferred IUPAC names. The prefix azanyl may be
 * used in general nomenclature. The substituent prefix name ‘anilino’ is a preferred IUPAC prefix and
 * substitution is allowed (see P-62.2.1.1.1).
 * Preferred IUPAC names for prefixes corresponding to –NHR, –NRR′, or –NR2 are formed by prefixing the
 * names of the groups R and R′ to the prefix ‘amino’, for example ‘methylamino’ for –NH-CH3. …”
 *
 * The whole section is in the Blue Book.
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-62.2.3', [
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P620203a.gif', pin: '2-(aminomethyl)propane-1,3-diamine', otherNames: ['2-(azanylmethyl)propane-1,3-diamine'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P620203b.gif', pin: '3-aminopropanoic acid', otherNames: ['3-azanylpropanoic acid'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P620203c.gif', pin: '3-anilinobenzoic acid', otherNames: ['3-(phenylamino)benzoic acid'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P620203d.gif', pin: '3-(N-methylanilino)phenol', otherNames: ['3-[methyl(phenyl)amino]phenol'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P620203e.gif', pin: '3-amino-2-sulfanylidene-1,3-thiazolidin-4-one', otherNames: ['3-amino-2-thioxo-1,3-thiazolidin-4-one'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P620203f.gif', pin: '4,4-bis(methylamino)butanoic acid', otherNames: ['4,4-bis(methylazanyl)butanoic acid'] },
  { formula: '(H3Si)2N-CH2-COOH', name: 'N,N-disilylglycine', notNames: ['(disilazan-2-yl)acetic acid'] },
  { formula: 'H3Si-HN-SiH2–', notNames: ['disilazan-1-yl'] },
]);
