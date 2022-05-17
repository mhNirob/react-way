import { atom, useAtom } from "jotai";
import { SVGRoot } from "./SVGRoot";

type Point = [number, number];
const dotsAtom = atom<Point[]>([]);
const numberOfDotsAtom = atom((get) => get(dotsAtom).length);

const handleMouseMoveAtom = atom(null, (get, set, update: Point) => {
  set(dotsAtom, (prev) => [...prev, update]);
});

const mouseDownAtom = atom<boolean>(false);

// write only atoms
const handleMouseDownAtom = atom(null, (get, set, update: boolean) => {
  set(mouseDownAtom, update);
});

const handleMouseUpAtom = atom(null, (get, set, update: boolean) => {
  set(mouseDownAtom, update);
});

const SVGDots = () => {
  const [dots] = useAtom(dotsAtom);
  //console.log("> dots ", dots);
  return (
    <g>
      {dots.map(([x, y]) => (
        <circle cx={x} cy={y - 350} r="2" fill="#aaa" />
      ))}
    </g>
  );
};

// const SVGRoot = () => {
//   // const [, setDots] = useAtom(dotsAtom);
//   const [, handleMouseMove] = useAtom(handleMouseMoveAtom);
//   const [mouseDown] = useAtom(mouseDownAtom);
//   const [, handleMouseDown] = useAtom(handleMouseDownAtom);
//   const [, handleMouseUp] = useAtom(handleMouseUpAtom);

//   console.log("> root ");

//   return (
//     <svg
//       width="200"
//       height="200"
//       viewBox="0 0 200 200"
//       onMouseDown={(e) => handleMouseDown(true)}
//       onMouseUp={(e) => handleMouseUp(false)}
//       onMouseMove={(e) => {
//         const p: Point = [e.clientX, e.clientY];
//         console.log("mouse down -> ", mouseDown);
//         if (mouseDown) handleMouseMove(p);
//         // setDots((prev) => [...prev, p]);
//       }}
//     >
//       <rect width="200" height="200" viewBox="0 0 200 200" fill="#eee" />
//       <SVGDots />
//     </svg>
//   );
// };

const Stats = () => {
  const [numberOfDots] = useAtom(numberOfDotsAtom);
  return <div>Dots: {numberOfDots}</div>;
};

const DrawSVG = () => {
  return (
    <div>
      <SVGRoot />
      <Stats />
    </div>
  );
};

export default DrawSVG;
