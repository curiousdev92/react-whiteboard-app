export const getPointFromEvent = (event) => {
  let point = { x: 0, y: 0 };
  // If event is triggered by a touch event, we get the position of the first finger
  if (event.targetTouches) {
    point.x = event.targetTouches[0].clientX;
    point.y = event.targetTouches[0].clientY;
  } else {
    point.x = event.clientX;
    point.y = event.clientY;
  }

  return point;
};
