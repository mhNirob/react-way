import { atom, useAtom } from "jotai";
import DrawSVG from "./DrawSVG";

const Atom1 = atom(0);
const Atom2 = atom(0);

const Counter1 = () => {
  const [counter, setCounter] = useAtom(Atom1);
  return (
    <div>
      {counter}
      <button
        onClick={() => {
          setCounter((counter) => counter + 1);
        }}
      >
        Click 1
      </button>
    </div>
  );
};

const Counter2 = () => {
  const [counter, setCounter] = useAtom(Atom2);
  return (
    <div>
      {counter}
      <button
        onClick={() => {
          setCounter((counter) => counter + 1);
        }}
      >
        Click 2
      </button>
    </div>
  );
};

const JotaiAtom = () => {
  return (
    <>
      <Counter1 />
      <Counter2 />
      <DrawSVG />
    </>
  );
};

export default JotaiAtom;
