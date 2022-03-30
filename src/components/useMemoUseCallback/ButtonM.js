import React from "react";

function ButtonM({ number, handleOnClick }) {
  console.log("render button... ", number);
  return <button onClick={handleOnClick}> Button {number} </button>;
}

export default React.memo(ButtonM);
