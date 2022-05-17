import React, { useState, useEffect, useCallback, useMemo } from "react";
// import "./App.css";
import Example from "./components/Example";
import ClickCounter from "./components/HOC/ClickCounter";
import HoverCounter from "./components/HOC/HoverCounter";
import ExampleClass from "./components/ExampleClass";
import { Counter } from "./components/Counter";
import ClickCounterB from "./components/RenderProps/ClickCounterB";
import HoverCounterB from "./components/RenderProps/HoverCounterB";
import User from "./components/User";
import CounterB from "./components/RenderProps/CounterB";
import Section from "./components/contexts/Section";
import ThemeContext from "./components/contexts/ThemeContext";
import TodoClass from "./components/TodoClass";
import Todo from "./components/Todo";
import LikeDislike from "./components/LikeDislike.js";
import EffectClass from "./components/useEffects/EffectClass";
import Effect from "./components/useEffects/Effect";
import Title from "./components/useMemoUseCallback/Title";
import ShowCount from "./components/useMemoUseCallback/ShowCount";
import ButtonM from "./components/useMemoUseCallback/ButtonM";
import { increment } from "./components/CounterSlice";
import Form from "./components/useRef/Form";
import ComponentApp from "./components/useEffects/UserApp";
import JotaiAtom from "./components/Jotai/JotaiCounter";

function App() {
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState("dark");
  const [showEffect, setShowEffect] = useState(true);
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const switchTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  const incrementByOne = useCallback(() => {
    setCount1((prevCount) => prevCount + 1);
  }, []);

  const incrementByFive = useCallback(() => {
    setCount2((prevCount) => prevCount + 5);
  }, []);

  const returnFive = useMemo(() => {
    console.log("returnFive");
    return 10;
  }, []);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  return (
    <div className="App">
      {/* <ClickCounter />
      <HoverCounter />
      <Example />
      <ExampleClass />
      <Counter />
      <ClickCounterB />
      <HoverCounterB />  */}
      <User name={(isLoggedIn) => (isLoggedIn ? "Nirob" : "Guest")} />
      {/* <CounterB render={(count, incrementCount)=> <ClickCounterB count={count} incrementCount={incrementCount}/>}/>
      <CounterB render={(count, incrementCount)=> <HoverCounterB count={count} incrementCount={incrementCount}/>}/>
      */}

      {/* <CounterB>
        {(count, incrementCount) => <ClickCounterB count={count} incrementCount={incrementCount}/>}
      </CounterB>

      <CounterB>
        {(count, incrementCount) => <HoverCounterB count={count} incrementCount={incrementCount}/>}
      </CounterB>

      {15}

      {/* <Section theme={theme}/> */}
      {/* 
      <ThemeContext.Provider value={{theme, switchTheme: switchTheme}}>
        <Section />
      </ThemeContext.Provider>

      <Todo/>
      
      <LikeDislike/> */}
      {/* <p> Clicked {count} times </p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click me
      </button>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click me useEffect
      </button>
      <Example /> */}
      {/* 
      {showEffect && <EffectClass />}

      <button
        onClick={() => {
          setShowEffect(!showEffect);
        }}
      >
        {" "}
        {showEffect ? "Hide" : "Show"}
      </button>

      {showEffect && <Effect />} */}

      <Title />
      {returnFive}
      <ShowCount count={count1} title="Counter 1" />
      <ButtonM number={1} handleOnClick={incrementByOne}></ButtonM>

      <ShowCount count={count2} title="Counter 2" />
      <ButtonM number={2} handleOnClick={incrementByFive}></ButtonM>

      <Form />

      <ComponentApp />

      <br />

      <JotaiAtom />
    </div>
  );
}

export default App;

// useCallback remembers the function
// useMemo remembers value returned by the function
