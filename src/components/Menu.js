import { useContext } from "react";
import { Context } from "./Example";

function Menu() {
  const value = useContext(Context);
  return <span> {value} </span>;
}

export default Menu;
