/**
 * P-63.2.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Retained names of ethers
 * Anisole, C6H5-O-CH3, is the only name in the class of ethers which is retained both as a preferred
 * IUPAC name and for use in general nomenclature. For preferred IUPAC names, no substitution is
 * allowed; for general nomenclature substitution is allowed on the ring and on the side chain under
 * certain conditions (see P-34.1.1.4).”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 702, P-63.2.3, example 3. [corrected 27 February 2019]
 *     For (not 2-methoxyanisole; see P-34.1.1.2 and P-15.1.8.2 for substitution rules for anisole)
 *     read 2-methoxyanisole (see P-34.1.1.4 and P-15.1.8.2 for substitution rules for anisole)
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-63.2.3', [
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P630203a.gif', pin: '1-chloro-4-methoxybenzene', otherNames: ['4-chloroanisole'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P630203b.gif', pin: '1-(chloromethyl)-4-methoxybenzene', otherNames: ['4-(chloromethyl)anisole', '4-methoxybenzyl chloride'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P630203c.gif', pin: '1,2-dimethoxybenzene', otherNames: ['2-methoxyanisole'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P630203d.gif', pin: '1-(chloromethoxy)-4-nitrobenzene', otherNames: ['α-chloro-4-nitroanisole'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P630203e.gif', pin: '1,1′-[methylenebis(oxy)]dibenzene', otherNames: ['α-phenoxyanisole'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P630203f.gif', pin: '1-(chloromethoxy)-2-methoxybenzene', otherNames: ['α-chloro-2-methoxyanisole'], notNames: ['2-(chloromethoxy)anisole'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P630203g.gif', pin: '4-methoxy-1,1′-biphenyl', notNames: ['4-phenylanisole', '1-methoxy-4-phenylbenzene'] },
]);
