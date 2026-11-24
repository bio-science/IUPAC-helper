/**
 * Telling whether the student has changed the practice molecule.
 *
 * In practice the answer is marked against the molecule on screen. Moving atoms or turning
 * bonds leaves the molecule the same (a C=C can't be turned from E to Z, see
 * rearrangeDrawing.js), so its name stays the same too. But a change by hand (adding or
 * erasing atoms, or changing a bond) makes it a different molecule, and the student may not
 * have meant to. Then the page says so, and
 * offers to put the practice molecule back.
 */

/**
 * practiceMoleculeName: the name of the molecule practice showed, or null when not practising.
 * namingResult: what nameCarbonSkeleton returned for the drawing on screen.
 * Returns true when the drawing is no longer that molecule.
 */
export function hasPracticeMoleculeChanged(practiceMoleculeName, namingResult) {
  if (practiceMoleculeName === null) return false;
  return !namingResult.isNameable || namingResult.iupacName !== practiceMoleculeName;
}
