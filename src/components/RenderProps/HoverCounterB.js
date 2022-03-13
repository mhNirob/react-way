import React from "react";

export default class HoverCounterB extends React.Component{

  render() {
    const {count, incrementCount} = this.props;
    return (
        <h1 onMouseOver={incrementCount}>
        Hovered  {count} times
        </h1>
    )
  }
};