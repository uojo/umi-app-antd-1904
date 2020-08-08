/* eslint-disable no-return-assign */
/* eslint-disable no-param-reassign */
import React, { useState, useEffect, useReducer } from 'react';
import { useImmer } from 'use-immer';

function reducer(state, action) {
  console.log('reducer -> action', action);
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

function App() {
  // 定义
  const [store1, store1Set] = useImmer({
    people: [
      {
        name: '马云',
      },
      {
        name: '马化腾',
      },
      {
        name: '李彦宏',
      },
    ],
  });

  const [num, numSet] = useState(1);

  const [stateReducer, dispatchReducer] = useReducer(reducer, { count: 100 });

  useEffect(
    () => {
      console.log('num现值', num);
      // 处理异步数据
    },
    [num]
  );

  useEffect(
    () => {
      console.log('store1现值', JSON.stringify(store1.people[2]));
    },
    [store1.people[2]]
  );

  const onClick = () => {
    numSet(pval => {
      console.log('num前值', pval);
      return Date.now();
    });
  };
  const onClick1 = () => {
    store1Set(pval => {
      pval.people[2].name = '张三';
    });
    console.log('store1前值', JSON.stringify(store1.people[2])); // 异步
  };
  const onClick2 = () => {
    dispatchReducer({ type: 'increment', payload: Date.now() });
    console.log('reducer前值', JSON.stringify(stateReducer)); // 异步
  };
  return (
    <div className="App">
      <h1>useState-number: {num}</h1>
      <button onClick={onClick}>numSet</button>

      <h1>
        useState-array:{' '}
        {store1.people.map(item => (
          <span key={item.name}>{item.name}</span>
        ))}
      </h1>
      <button onClick={onClick1}>复杂数据处理</button>

      <h1>useReducer: {stateReducer.count}</h1>
      <button onClick={onClick2}>我要修改stateReducer</button>
    </div>
  );
}

export default App;
