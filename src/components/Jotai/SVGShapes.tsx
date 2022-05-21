import { SVGShape } from "./SVGShape";
import { ShapeAtom } from "./types";
import { atom, useAtom } from "jotai";
import { addShapeAtom } from "./SVGShape";

const shapeAtomAtoms = atom<ShapeAtom[]>([]);

export const addShapeAtoms = atom(null, (_get, set, update: ShapeAtom) => {
  set(shapeAtomAtoms, (prev) => [...prev, update]);
});

export const SVGShapes = () => {
  const [shapeAtoms] = useAtom(shapeAtomAtoms);
  console.log("shapeAtoms -> ", shapeAtoms);
  return (
    <g>
      {shapeAtoms.map((shapeAtom) => (
        <SVGShape key={`${shapeAtom}`} shapeAtom={shapeAtom} />
      ))}
    </g>
  );
};
