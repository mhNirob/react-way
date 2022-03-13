import { useState, useMemo } from "react";
import { useEffect } from "react/cjs/react.development";
import useSWR from "swr";
import ChatAPI from "react";
import { createContext } from "react";
import Menu from "./Menu";
export const Context = createContext("Default value");

const fetcher = (...args) => fetch(...args).then((res) => res.json());

function Example() {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(0);

  const { data, error } = useSWR("https://pokeapi.co/api/v2/pokemon", fetcher);

  console.log({ data, error });

  useEffect(() => {
    document.title = `you clicked ${count} times`;
  });

  const [avatar, setAvatar] = useState("");

  useEffect(() => {
    /* 
	  Note that because the function passed to useEffect cannot be async, we must create a separate function for our promise to be resolved in (fetchAvatar)
    */
    async function fetchAvatar() {
      const response = await fetch("https://api.github.com/users/reedbarge");
      console.log("type response", typeof response);

      const errorMessage = `A error has occured ${response.status}`;

      if (!response.ok) {
       // throw new Error(errorMessage);
      }

      const data = await response.json();
      console.log("type data ", typeof data);
      setAvatar(data.avatar_url);
    }

    fetchAvatar();
  }, []);

  //const [isOnline, setIsOnline] = useState(null);
  // useEffect(() => {
  //   ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
  //   return () => {
  //     ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
  //   };
  // });

  const value = "Nirob";

  function factorial(number) {
    console.log("in factorial");
    return String(number);
  }

  const memFact = useMemo(() => factorial(number), [number]);

  return (
    <div>
      <Context.Provider value={value}>
        <Menu />
      </Context.Provider>
      <Menu />
      <p>clicked {count} times</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      />
      <input
        onChange={(e) => {
          console.log(number);
          setNumber(Number(e.target.value));
          console.log(number);
          console.log("memFact :: ", memFact);
        }}
      ></input>
      <div>{memFact}</div>
      <img src={avatar} alt="Reed Barger" />
    </div>
  );
}

export default Example;
