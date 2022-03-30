import React from "react";
import ReactDOM from "react-dom";
//import "./index.css";
import App from "../src/App";
import reportWebVitals from "../src/reportWebVitals";
import store from "../src/app/store";
import { Provider } from "react-redux";
import useState from "react";
import type { NextPage } from "next";

// const states = [];
// let currentIndex = -1;

// function useState(currentValue){
//   const index = ++currentIndex;
//   if(states[index]){
//     return states[index];
//   }

//   const setValue = (value)=>{
//     debugger;
//     states[index][0] = value;
//     renderForHook();
//   }

//   const temp = [currentValue, setValue];

//   states[index] = temp;

//   return temp;
// }

// function Apps(){

//   const [todo, setTodo] = useState('ini');
//   const [warning, setWarning] = useState('');

//   console.log({todo});

//   const handleInput = (e) => {
//     const inputValue = e.target.value;
//     const updateWarning = inputValue.includes('.js') ? "Hey! I Think You Should learn javascript first if you wanna do this task!"  : "Good decision";

//     setTodo(inputValue);
//     setWarning(updateWarning);
//   }

//   return (
//     <>
//       {todo}
//       <br/>
//       <input onChange={(e) => handleInput(e)}/>
//       <br/>
//       {warning}
//     </>
//   )

// }

// function renderForHook(){
//   currentIndex = -1;
//   ReactDOM.render(
//     // <React.StrictMode>
//     //   <Provider store={store}>
//         <Apps />,
//     //   </Provider>
//     // </React.StrictMode>,
//     document.getElementById("root")
//   );
// }

// renderForHook();
const Home: NextPage = () => {
  return <App />;
};
// ReactDOM.render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <App />,
//     </Provider>
//   </React.StrictMode>
//   //,
//   //document.getElementById("root")
// );
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();

export default Home;
