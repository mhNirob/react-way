import React from 'react';

class TodoClass extends React.Component {
  state = {
    todo: "",
    warning: null,
  }

  handleInput = (e) => {
    const inputValue = e.target.value;
    const warning = inputValue.includes('.js') ? "Hey! I Think You Should learn javascript first if you wanna do this task!"  : "Good decision";

    this.setState({
      todo: inputValue,
      warning,
    })

  }

  render(){
    return (
      <> 
        {this.state.todo}
        <br/>
        <input onChange={(e) => this.handleInput(e)}/>
        <br/>
        {this.state.warning}
      </>
    )
  }

}

export default TodoClass;