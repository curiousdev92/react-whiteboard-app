import { useRef, useState } from "react";
import { getPointFromEvent } from "../../helpers/mouseInteraction";

const Board = () => {
  const [action, setAction] = useState("none");
  const svgRef = useRef(null);
  const transformMatrix = useRef([1, 0, 0, 1, 0, 0]);

  const handlePointerDown = (e) => {
    setAction("drawing");
  };
  const handlePointerMove = (e) => {
    if (action !== "none") {
      console.log(getPointFromEvent(e));
    }
  };
  const handlePointerUp = (e) => {
    setAction("none");
  };

  return (
    <div className="board__container">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        id="svg"
        version="1.1"
        className="board__svg"
        width={500}
        height={500}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        ref={svgRef}
        style={{ transform: `matrix(${transformMatrix.current})` }}
      >
        <path d="M 0,0 Q 0,0 0.89,0.67 1.79,1.34 2.73,1.93 3.67,2.53 4.41,3.08 5.16,3.63 6.02,4.38 6.87,5.14 8.24,6.22 9.61,7.31 10.82,8.14 12.02,8.96 13.36,10.09 14.69,11.21 15.66,12.06 16.62,12.91 17.82,13.82 19.02,14.74 19.91,15.69 20.80,16.64 21.74,17.39 22.68,18.14 23.20,19.00 23.71,19.87 24.23,20.79 24.74,21.71 25.24,22.67 25.75,23.63 26.25,24.61 26.75,25.58 27.03,26.57 27.31,27.56 27.46,28.55 27.62,29.54 27.70,30.54 27.79,31.54 27.83,32.53 27.88,33.53 27.91,34.53 27.93,35.53 27.95,36.75 27.96,37.97 27.97,39.32 27.98,40.67 27.98,41.64 27.98,42.60 27.99,43.59 27.99,44.57 27.77,46.23 27.54,47.89 27.20,49.26 26.85,50.62 26.44,51.83 26.02,53.03 25.57,53.91 25.11,54.80 24.64,55.74 24.17,56.68 23.90,57.64 23.64,58.61 23.27,59.59 22.90,60.57 22.70,61.34 22.50,62.10 22.25,63.55 22,65 22,65"></path>
      </svg>
    </div>
  );
};

export default Board;
