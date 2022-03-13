import React from "react";
import CounterB from "../RenderProps/CounterB"
import HoverCounterC from "./HoverCounterC";
import ThemeContext from "./ThemeContext";


export default class ContentClass extends React.Component {

  static contextType = ThemeContext;

  constructor(props, context) {
    super(props, context);
  }

  componentDidMount(){
    console.log("this.context --> ", this.context)
    console.log("this.context --> ", ThemeContext)

  }


  render(){
    // const {theme, switchTheme} = this.context;
    return (
        <div>
            {/* <CounterB>  
            {(count, incrementCount) => 
                  <HoverCounterC count={count} incrementCount={incrementCount} theme={theme} switchTheme={switchTheme}/> 
            }
            </CounterB> */}
        </div>
    )
  }
}
