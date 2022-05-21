import { useRef, useState } from "react";
import { getPointFromEvent } from "../../helpers/SVG";

const Board = () => {
  const [action, setAction] = useState("none");
  const [pointerOrigin, setPointerOrigin] = useState({ x: 0, y: 0 });
  const svgRef = useRef(null);
  const transformMatrix = useRef([1, 0, 0, 1, 0, 0]);

  const handlePointerDown = (e) => {
    setAction("drawing");
    const { x, y } = getPointFromEvent(e);
    setPointerOrigin({ x, y });
  };
  const handlePointerMove = (e) => {
    const { x, y } = getPointFromEvent(e);
    if (action === "drawing") {
      setPointerOrigin({ x, y });
      pan(x - pointerOrigin.x, y - pointerOrigin.y);
    }
  };
  const handlePointerUp = (e) => {
    const { x, y } = getPointFromEvent(e);
    setPointerOrigin({ x, y });
    setAction("none");
  };
  const pan = (dx, dy) => {
    let curMatrix = transformMatrix.current;
    curMatrix[4] += dx;
    curMatrix[5] += dy;
    transformMatrix.current = curMatrix;
  };
  const zoom = (scale) => {
    for (let i = 0; i < 4; i++) {
      transformMatrix.current[i] *= scale;
    }
    transformMatrix.current[4] += (1 - scale) * centerX;
    transformMatrix.current[5] += (1 - scale) * centerY;

    let newMatrix = "matrix(" + transformMatrix.join(" ") + ")";
    matrixGroup.setAttributeNS(null, "transform", newMatrix);
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="svg"
      version="1.1"
      className="whiteboard__svg"
      width={500}
      height={500}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerOut={handlePointerUp}
      ref={svgRef}
      style={{ transform: `matrix(${transformMatrix.current})` }}
    ></svg>
  );
};
export default Board;
