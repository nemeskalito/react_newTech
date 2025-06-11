import { useState } from "react";
import "./App.css";

function ParentComponent() {
  const [count, useCount] = useState(0);
  const handleClick = () => {
    useCount((prevCount) => prevCount + 1);
  };
  const handleClick2 = () => {
    useCount((prevCount) => {
      return prevCount > 0 ? prevCount - 1 : 0;
    });
  };
  const defaultCount = () => {
    useCount(0);
  };
  const randomCount = () => {
    useCount((prevCount) => {
      const min = 0;
      const max = 10;
      return (prevCount = Math.floor(Math.random() * (max - min + 1)) + min);
    });
  };
  return (
    <div>
      <button onClick={handleClick}>Увеличить</button>
      <button onClick={handleClick2}>Уменьшить</button>
      <br />
      <button onClick={randomCount}>Случайное значение</button>
      <p>{count}</p>
      <button onClick={defaultCount}>Сбросить</button>
    </div>
  );
}

export default ParentComponent;
