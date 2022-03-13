import React from "react";

export default class ClickCounterB extends React.Component{
  render() {
    const {count, incrementCount} = this.props;
    return (
        <div type="button" onClick={incrementCount}>
        clicked {count} times
        </div>
    )
  }
};