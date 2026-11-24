/**
 * P-16.5.4.1.5
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “When the nesting order given in P-16.5.4 results in consecutive enclosing marks of the same level,
 * the next level of enclosing mark is used. For example the following name formed by the application
 * of the nesting order rules given above results in the appearance of consecutive parentheses twice.
 * With this example the stereochemistry needs to be inserted at three positions. Insertion of the
 * third one into the name without stereochemistry results in two opening parenthesis next to each
 * other. …
 * Explanation: The order of insertion of stereochemistry for
 * 2-{2-[(1-ethoxy-1-oxo-4-phenylbutan-2-yl)amino]propanoyl}-1,2,3,4-tetrahydroisoquinoline-3-carboxylic
 * acid is as shown below.
 * Stage 1 insert stereochemistry at the inner most position:
 * 2-(2-{[(2S)-1-ethoxy-1-oxo-4-phenylbutan-2-yl]amino}propanoyl)-1,2,3,4-tetrahydroisoquinoline-3-carboxylic
 * acid
 * The substituent (2S)-1-ethoxy-1-oxo-4-phenylbutan-2-yl requires square brackets to surround it hence
 * subsequent enclosing marks need to be adjusted.
 * Stage 2 insert stereochemistry at the next position:
 * 2-[(2S)-2-{[(2S)-1-ethoxy-1-oxo-4-phenylbutan-2-yl]amino}propanoyl]-1,2,3,4-tetrahydroisoquinoline-3-carboxylic
 * acid
 * …”
 *
 * The whole section is in the Blue Book.
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 120, P-16.5.4.1.5 (revised text), Stage 1. [corrected 31 December 2025]
 *     For
 *     2-{2-{[(2S)-1-ethoxy-1-oxo-4-phenylbutan-2-yl]amino}propanoyl}-1,2,3,4-tetrahydroisoquinoline-3-carboxylic
 *     acid
 *     read
 *     2-(2-{[(2S)-1-ethoxy-1-oxo-4-phenylbutan-2-yl]amino}propanoyl)-1,2,3,4-tetrahydroisoquinoline-3-carboxylic
 *     acid
 */
import { noChecksYet } from '../support/checkRule.js';

// The Blue Book gives no examples here that the checks can read. Checks of the wording go here.
noChecksYet('P-16.5.4.1.5');
