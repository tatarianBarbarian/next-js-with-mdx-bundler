import React from "react";

export const Counter = () => {
  const [count, setCount] = React.useState(0);

  return <button onClick={() => setCount((i) => i + 1)}>{count}</button>;
};
