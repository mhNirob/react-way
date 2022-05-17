import { atom, useAtom } from "jotai";
import { dotsAtom, SVGDots } from "./SVGDots";

type Point = [number, number];
//const dotsAtom = atom<Point[]>([]);

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

export const SVGRoot = () => {
  // const [, setDots] = useAtom(dotsAtom);
  const [, handleMouseMove] = useAtom(handleMouseMoveAtom);
  const [mouseDown] = useAtom(mouseDownAtom);
  const [, handleMouseDown] = useAtom(handleMouseDownAtom);
  const [, handleMouseUp] = useAtom(handleMouseUpAtom);

  console.log("> root ");

  return (
    <svg
      width="200"
      height="200"
      viewBox="0 0 200 200"
      onMouseDown={(e) => handleMouseDown(true)}
      onMouseUp={(e) => handleMouseUp(false)}
      onMouseMove={(e) => {
        const p: Point = [e.clientX, e.clientY];
        console.log("mouse down -> ", mouseDown);
        if (mouseDown) handleMouseMove(p);
        // setDots((prev) => [...prev, p]);
      }}
    >
      <rect width="200" height="200" viewBox="0 0 200 200" fill="#eee" />
      <SVGDots />
    </svg>
  );
};
