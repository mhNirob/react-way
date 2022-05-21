import { atom, useAtom } from "jotai";
import { addShapeAtom } from "./SVGShape";
import { Point } from "./types";

// type Point = [number, number];
export const dotsAtom = atom<Point[]>([]);

export const addDotAtom = atom(null, (get, set, update: Point) => {
  set(dotsAtom, (prev) => [...prev, update]);
});

export const commitDotsAtom = atom(null, (get, set) => {
  set(addShapeAtom, get(dotsAtom));
  set(dotsAtom, []);
});

export const SVGDots = () => {
  const [dots] = useAtom(dotsAtom);
  console.log("> dots ", dots);
  return (
    <g>
      {dots.map(([x, y]) => (
        <circle cx={x} cy={y - 350} r="2" fill="#aaa" />
      ))}
    </g>
  );
};
