import React from "react";
import withCounter from "./withCounter";

const HoverCounter = (props) => {
  const { count } = props;

  return (
    <h1 type="button" onMouseOver={props.incrementCount}>
      Hovered {count} times
    </h1>
  );
};

export default withCounter(HoverCounter);
