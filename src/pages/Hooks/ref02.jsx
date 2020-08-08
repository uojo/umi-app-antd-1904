import React, { useRef, useEffect, createRef, useState } from 'react';

/**
 * 利用 useRef 实现组件重绘时，始终访问最新值（穿越组件生命周期对象，引用始终不变）
 */
const MessageThread = () => {
  const latestMessage = useRef('');

  const showMessage = () => {
    alert(`You said: ${latestMessage.current}`);
  };

  const handleSendClick = () => {
    setTimeout(showMessage, 3000);
  };

  const handleMessageChange = e => {
    latestMessage.current = e.target.value;
  };

  return (
    <>
      <input value={latestMessage.current} onChange={handleMessageChange} />
      <button onClick={handleSendClick}>Send</button>
    </>
  );
};

// createRef 与 useRef 的区别：
// createRef 可以在类组件和函数组件中使用，
// useRef 只能在函数组件中使用。
// https://zhuanlan.zhihu.com/p/89641234

export default () => {
  const [count, setCount] = useState(0);
  const cRef = createRef(null);
  const uRef = useRef(null);
  // 仅执行一次
  useEffect(() => {
    // uRef.current.focus();
    window.cRef = cRef;
    window.uRef = uRef;
  }, []);
  useEffect(() => {
    // 除了第一次为true， 其它每次都是 false 【createRef，在每次组件重绘后，都会重新申明，例如 const 变量。】
    console.log('cRef === window.cRef', cRef === window.cRef);
    // 始终为true 【useRef，在整个组件的生命周期中，不会重新申明，只是不断的变更最新的引用。例如，let 变量。】
    console.log('uRef === window.uRef', uRef === window.uRef);
  });
  return (
    <>
      <input type="text" ref={uRef} style={{ border: 0 }} />
      <button ref={cRef} onClick={() => setCount(count + 1)}>
        count {count}
      </button>
    </>
  );
};
