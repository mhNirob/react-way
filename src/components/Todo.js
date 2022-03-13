import { useState } from "react";
import Counter from "./useState/Counter"

function Todo(){
  const [todo, setTodo] = useState({title: "", description: ""});
  const [warning, setWarning] = useState();

  const handleInput = (e) => {
    const inputValue = e.target.value;
    const updateWarning = inputValue.includes('.js') ? "Hey! I Think You Should learn javascript first if you wanna do this task!"  : "Good decision";

    setTodo({title: inputValue});
    setWarning(updateWarning);
  }

  return (
    <> 
      {todo.title}
      <br/>
      <input onChange={(e) => handleInput(e)}/>
      <br/>
      <br/>
        <textarea onChange={(e) => {
          setTodo({...todo, description: e.target.value})
        }}/>
      <br/>
      {warning}
      <Counter/>
    </>
  )

}

export default Todo;