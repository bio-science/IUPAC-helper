/**
 * P-66.4.2.3.4
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “The preferred prefix for the group H2N-CH=N-NH– is ‘(aminomethylidene)hydrazinyl’. Prefixes for the
 * group HN=CH-NH-NH– are
 * ‘methanimidohydrazido’ (preferred prefix) and ‘2-(methanimidoyl)hydrazin-1-yl’ and
 * ‘2-(iminomethyl)hydrazin-1-yl’. Prefixes for the group HC(=NNH2)-NH– are ‘methanehydrazonamido’
 * (preferred prefix) and ‘(methanehydrazonoyl)amino’.”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 894, P-66.4.2.3.4, lines 1-2. [corrected 13 March 2019]
 *     For ...the group H2N-CH=N-NH– is (aminomethylidene)hydrazin-1-yl’.
 *     read ...the group H2N-CH=N-NH– is ‘2-(aminomethylidene)hydrazin-1-yl’.
 *   Page 894, P-66.4.2.3.4, line 3. [corrected 13 March 2019]
 *     For ...and ‘2-methanimidoylhydrazin-1-yl’ and...
 *     read ...and ‘2-(methanimidoyl)hydrazin-1-yl’ and...
 *   Page 894, P-66.4.2.3.4, line 5. [corrected 1 July 2020]
 *     For ...(preferred prefix) and ‘methanehydrazonoylamino’.
 *     read ...(preferred prefix) and ‘(methanehydrazonoyl)amino’.
 *   Page 894, P-66.4.2.3.4, example. [modified 13 March 2019]
 *     For 3-[(aminomethylidene)hydrazinyl]propanoic acid (PIN)
 *     read 3-[2-(aminomethylidene)hydrazin-1-yl]propanoic acid (PIN)
 *     replace the structure with:
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-66.4.2.3.4', [
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66423f.gif', pin: '3-[2-(aminomethylidene)hydrazin-1-yl]propanoic acid' },
]);
