import { useRef } from "react";
import { useEffect } from "react/cjs/react.development";
import Input from "../useRef/Input";

function Form() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  return (
    <div>
      {/* <input ref={inputRef} type="text" placeholder="enter something"></input> */}
      <Input ref={inputRef} type="text" placeholder="This is input"></Input>
    </div>
  );
}

export default Form;
