import { useEffect, useState } from "react";

export default function Effect() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    document.title = `Clicked ${count} times - first`;
  }, [count]);

  const tick = () => {
    console.log("-> tick functional");
    setDate(new Date());
  };

  useEffect(() => {
    console.log("setting interval !!!");
    const interval = setInterval(tick, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const addClick = () => {
    setCount((count) => count + 1);
  };

  return (
    <div>
      <p>Date 2: {date.toLocaleTimeString()}</p>

      <textarea onChange={(e) => setText(e.target.value)}></textarea>

      <p>{count}</p>

      <button type="button" onClick={addClick}>
        Add
      </button>
    </div>
  );
}
