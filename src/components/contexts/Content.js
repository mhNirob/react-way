import CounterB from "../RenderProps/CounterB"
import HoverCounterC from "./HoverCounterC";
import ThemeContext from "./ThemeContext";
import { useContext } from "react";

export default function Content ({themes}) {
    const style = themes === "dark" ? {backroundColor: '#000000', color: "#ffffff"} : null;
    // const themeContext = useContext( );
    // const {theme, switchTheme} = themeContext;
    return (
        <div>
            <p style={style}> this is Content </p>    
            <CounterB>  
                {(count, incrementCount) => 
                    <ThemeContext.Consumer>
                        {({theme, switchTheme}) =>  
                        <HoverCounterC count={count} incrementCount={incrementCount} theme={theme} switchTheme={switchTheme}/> 
                        }
                    </ThemeContext.Consumer>
                } 
            </CounterB>
        </div>
    )
}