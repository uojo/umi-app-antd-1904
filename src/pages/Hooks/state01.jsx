import React, { useState, useEffect } from 'react';

/**
 * 说明：lazy initState，使重绘组件时，不会再执行 useState；
 *
 */
const Counter = ({ initVal }) => {
  console.log('TCL: Counter -> initVal', initVal);

  // const [count, countSet] = useState(10);
  const [count, countSet] = useState(() => {
    // 仅初始渲染时执行（赋返回值），之后不和props值关联。原因在于仅在改组件初始时执行一次。可用于缓存复杂值，例如对象。
    console.log('lazy initState', initVal);
    return initVal;
  });

  // useEffect(() => {}, []);

  return (
    <div>
      [Counter] <span>count:{count}</span>
    </div>
  );
};

const Main = () => {
  const [initVal, initValSet] = useState(1);
  useEffect(() => {
    initValSet(2);
  }, []);

  return (
    <>
      <button
        onClick={() => {
          initValSet(Date.now());
        }}
      >
        countSet
      </button>
      {initVal}

      <Counter initVal={initVal} />
    </>
  );
};

export default Main;
