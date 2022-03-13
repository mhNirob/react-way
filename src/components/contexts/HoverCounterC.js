import React from "react";
import { useEffect } from "react/cjs/react.development";

export default class HoverCounterC extends React.Component{

  render() {
    const {count, incrementCount, theme , switchTheme} = this.props;
    console.log("theme --> ", theme)
    const style = theme === 'dark' ? {backroundColor: '#00FF00', color: "#00FF00"} : {backroundColor: '#FF0000', color: "#FF0000"};
    console.log("style --> ", style)

    return (
        <>
            <p style={style}> This in HoverCounterC Paragraph </p>
            <h1 style={style} onMouseOver={incrementCount}>
                Hovered {count} times in HoverCounterC
            </h1>
            <button onClick={switchTheme}> Change Theme </button>
        </>
    )
  }
};