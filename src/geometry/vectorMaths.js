/**
 * Small maths helpers for points and directions.
 *
 * Angles are in degrees. As on any web page, x increases to the right and y increases
 * DOWNWARDS, so an angle of 90 degrees points down the screen and -90 points up.
 */

export function distanceBetweenPoints(firstPoint, secondPoint) {
  return Math.hypot(secondPoint.x - firstPoint.x, secondPoint.y - firstPoint.y);
}

export function convertDegreesToRadians(angleInDegrees) {
  return (angleInDegrees * Math.PI) / 180;
}

/** The direction you face when looking from one point towards another. */
export function angleFromPointToPoint(fromPoint, toPoint) {
  return (Math.atan2(toPoint.y - fromPoint.y, toPoint.x - fromPoint.x) * 180) / Math.PI;
}

/** The point reached by walking a distance from a start point in a direction. */
export function pointAtAngleAndDistance(startPoint, angleInDegrees, distance) {
  const angleInRadians = convertDegreesToRadians(angleInDegrees);
  return {
    x: startPoint.x + Math.cos(angleInRadians) * distance,
    y: startPoint.y + Math.sin(angleInRadians) * distance,
  };
}

/** How far apart two directions are, from 0 (same direction) to 180 (opposite). */
export function sizeOfAngleBetweenDirections(firstAngleInDegrees, secondAngleInDegrees) {
  const difference = Math.abs(firstAngleInDegrees - secondAngleInDegrees) % 360;
  return difference > 180 ? 360 - difference : difference;
}

/** The same direction written between -180 and 180 degrees, so 270 becomes -90. */
export function normaliseAngle(angleInDegrees) {
  const wrapped = (((angleInDegrees + 180) % 360) + 360) % 360;
  return wrapped - 180;
}

/** Where a point ends up after turning it around a centre by an angle (positive = clockwise on screen). */
export function rotatePointAroundCentre(point, centre, angleInDegrees) {
  const angleInRadians = convertDegreesToRadians(angleInDegrees);
  const offsetX = point.x - centre.x;
  const offsetY = point.y - centre.y;
  return {
    x: centre.x + offsetX * Math.cos(angleInRadians) - offsetY * Math.sin(angleInRadians),
    y: centre.y + offsetX * Math.sin(angleInRadians) + offsetY * Math.cos(angleInRadians),
  };
}

/** The shortest distance from a point to a straight line segment. */
export function distanceFromPointToSegment(point, segmentStart, segmentEnd) {
  const segmentX = segmentEnd.x - segmentStart.x;
  const segmentY = segmentEnd.y - segmentStart.y;
  const segmentLengthSquared = segmentX * segmentX + segmentY * segmentY;
  if (segmentLengthSquared === 0) return distanceBetweenPoints(point, segmentStart);

  // How far along the segment the nearest point is, from 0 (at the start) to 1 (at the end).
  const fractionAlong = ((point.x - segmentStart.x) * segmentX + (point.y - segmentStart.y) * segmentY) / segmentLengthSquared;
  const clampedFraction = Math.min(1, Math.max(0, fractionAlong));
  return distanceBetweenPoints(point, {
    x: segmentStart.x + clampedFraction * segmentX,
    y: segmentStart.y + clampedFraction * segmentY,
  });
}

/** True when two line segments cross each other (just touching at an end does not count). */
export function doSegmentsCross(firstStart, firstEnd, secondStart, secondEnd) {
  // Which side of a line a point is on: positive on one side, negative on the other.
  const sideOfLine = (lineStart, lineEnd, point) =>
    (lineEnd.x - lineStart.x) * (point.y - lineStart.y) - (lineEnd.y - lineStart.y) * (point.x - lineStart.x);

  const secondStartSide = sideOfLine(firstStart, firstEnd, secondStart);
  const secondEndSide = sideOfLine(firstStart, firstEnd, secondEnd);
  const firstStartSide = sideOfLine(secondStart, secondEnd, firstStart);
  const firstEndSide = sideOfLine(secondStart, secondEnd, firstEnd);
  return secondStartSide * secondEndSide < 0 && firstStartSide * firstEndSide < 0;
}

/**
 * The smallest rectangle containing every point:
 *   { left, top, width, height }
 */
export function boundingBoxAroundPoints(points) {
  const allX = points.map((point) => point.x);
  const allY = points.map((point) => point.y);
  const left = Math.min(...allX);
  const top = Math.min(...allY);
  return { left, top, width: Math.max(...allX) - left, height: Math.max(...allY) - top };
}

export function growBoundingBoxOnEverySide(box, extraSpace) {
  return {
    left: box.left - extraSpace,
    top: box.top - extraSpace,
    width: box.width + 2 * extraSpace,
    height: box.height + 2 * extraSpace,
  };
}
