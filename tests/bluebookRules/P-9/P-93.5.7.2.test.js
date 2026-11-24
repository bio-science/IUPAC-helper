/**
 * P-93.5.7.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Specification of stereogenic centers
 * In preferred IUPAC names, stereogenic centers are specified by stereodescriptors such as ‘R’, ‘S,’
 * ‘r’, and ‘s’. In general nomenclature, the stereodescriptors ‘cis’ and ‘trans’ may be used as
 * described in P-93.5.1.2.”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 1281, P-93.5.7.2, last example on this page. [modified 26 June 2019]
 *     For
 *     (1E)-1-[(1′S,1r,4S)-[1,1′-bi(cyclohexan)-3′-en-4-yl]-N-[(1r,4r)-4-phenylcyclohexyl]methan-1-imine
 *     (PIN)
 *     read
 *     (1E)-1-{(1r,1′S,4S)-[1,1′-bi(cyclohexan)]-3′-en-4-yl}-N-[(1r,4S)-4-phenylcyclohexyl]methanimine
 *     (PIN)
 *     for
 *     (1E)-1-[(1′R,1(4)-trans)-1,1′-bi(cyclohexan)-3′-en-4-yl]-N-[(trans)-4-phenylcyclohexyl]methanimine
 *     read
 *     (E)-1-{1(4)-trans-(1′S)-[1,1′-bi(cyclohexan)]-3′-en-4-yl}-N-(trans-4-phenylcyclohexyl)methanimine
 *     replace structure with:
 */
import { noChecksYet } from '../support/checkRule.js';

// The Blue Book gives no examples here that the checks can read. Checks of the wording go here.
noChecksYet('P-93.5.7.2');
