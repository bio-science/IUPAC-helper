/**
 * Sizes used when drawing molecules, in drawing units (roughly screen pixels at 100% zoom).
 * Kept in one place so the drawing code and the layout code always agree.
 */

/** Distance between two bonded carbons in the displayed formula. */
export const CARBON_TO_CARBON_BOND_LENGTH = 110;

/** Distance from a carbon to each of its hydrogens in the displayed formula. */
export const CARBON_TO_HYDROGEN_BOND_LENGTH = 42;

/** Distance from a carbon to a halogen (F, Cl, Br, I): a little longer, as these are bigger atoms. */
export const CARBON_TO_HALOGEN_BOND_LENGTH = 52;

/** Distance from a carbon to the oxygen of a hydroxyl group (OH). */
export const CARBON_TO_OXYGEN_BOND_LENGTH = 50;

/** Distance from that oxygen to its hydrogen. */
export const OXYGEN_TO_HYDROGEN_BOND_LENGTH = 36;

export const CARBON_CIRCLE_RADIUS = 17;
export const HYDROGEN_CIRCLE_RADIUS = 11;
export const HALOGEN_CIRCLE_RADIUS = 15;
export const OXYGEN_CIRCLE_RADIUS = 15;
export const NITROGEN_CIRCLE_RADIUS = 15;

/** Distance from the N of an NH2 group, or of the NH in the middle of a bond, to its hydrogens. */
export const NITROGEN_TO_HYDROGEN_BOND_LENGTH = 36;

/** A new carbon can't be dropped closer than this to an existing carbon. */
export const CLOSEST_ALLOWED_DISTANCE_BETWEEN_CARBONS = 55;

/** The drawing area always shows at least this much space, so there is room to draw. */
export const SMALLEST_VISIBLE_DRAWING_AREA = { left: 0, top: 0, width: 1000, height: 460 };

/** Empty space kept around the edge of a drawing. */
export const SPACE_AROUND_DRAWING = 30;
