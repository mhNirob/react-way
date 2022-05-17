import { atom, useAtom } from "jotai";

type Point = [number, number];
export const dotsAtom = atom<Point[]>([]);

export const SVGDots = () => {
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
