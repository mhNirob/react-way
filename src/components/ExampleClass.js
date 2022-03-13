import React from "react";

class ExampleClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  render() {
    return (
      <div>
        <p> you clicked {this.state.count} times </p>
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          Click me ee
        </button>
      </div>
    );
  }
}

export default ExampleClass;
