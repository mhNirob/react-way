import { atom, useAtom } from "jotai";
import { Point, ShapeAtom } from "./types";
import { addShapeAtoms } from "./SVGShapes";

const shapeAtomGlobal = atom({ path: "" });

const pointsToPath = (points: readonly Point[]) => {
  let d = "";
  points.forEach((point) => {
    if (d) {
      d += ` L ${point[0]} ${point[1] - 350}`;
    } else {
      d = `M ${point[0]} ${point[1] - 350}`;
    }
  });
  return d;
};

export const addShapeAtom = atom(null, (get, set, update: readonly Point[]) => {
  set(addShapeAtoms, atom({ path: pointsToPath(update) }));
});

export const SVGShape = ({ shapeAtom }: { shapeAtom: ShapeAtom }) => {
  const [shape] = useAtom(shapeAtom);
  console.log("path > ", shape.path);
  return (
    <g>
      <path d={shape.path} fill="none" stroke="black" strokeWidth="3" />
    </g>
  );
};
