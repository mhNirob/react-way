import { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);
  const addFive = () => {
    let i = 0;
    while(i<5){
      setCounter((counter) => counter + 1);
      i++;
    }
  }
  return (
    <div> 
      {counter}
      <button onClick={addFive}>
        Add 5
      </button>
    </div>
  )

}

export default Counter;