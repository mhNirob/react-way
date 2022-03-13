import React from "react";
import withCounter from "./withCounter";

const ClickCounter = (props) => {
  const { count, incrementCount } = props;

  return (
    <div type="button" onClick={incrementCount}>
      clicked {count} times
    </div>
  );
};

export default withCounter(ClickCounter);
