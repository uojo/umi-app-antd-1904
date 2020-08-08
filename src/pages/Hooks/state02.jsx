/* eslint-disable func-names */
import React, { useState, useEffect } from 'react';

/**
 *
 *
 */
const Counter = () => {
  const [count, countSet] = useState(0);
  function handleShowCount() {
    setTimeout(() => {
      alert(count);
      // console.log('Counter -> count', count);
    }, 3000);
  }
  function handleCount() {
    countSet(count + 1);
  }
  return (
    <div>
      <button onClick={handleCount}>count++</button>
      {count}
      <button onClick={handleShowCount}>show count</button>
    </div>
  );
};

const Main = () => (
  <>
    <Counter />
  </>
);

export default Counter;
