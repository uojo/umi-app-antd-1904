import React, { useRef, useEffect, createRef, useState } from 'react';

// memo类似于PureCompoent 作用是优化组件性能，防止组件触发重渲染
// memo针对 一个组件的渲染是否重复执行
// usememo针对 一段函数逻辑是否重复执行
// useMemo是在渲染期间完成的
// useEffect是在渲染之后完成的
// 参数如果是空数组的话就只会执行一次

export default () => {
  const [count, setCount] = useState(0);
  const myRef = createRef(null);
  const inputRef = useRef(null);
  // 仅执行一次
  useEffect(() => {
    // 赋值 window ，用于测试
    // inputRef.current.focus();
    window.myRef = myRef;
    window.inputRef = inputRef;
  }, []);
  useEffect(() => {
    // 除了第一次为true， 其它每次都是 false 【createRef，在每次组件重绘后，都会重新申明，例如 const 变量。】
    console.log('myRef === window.myRef', myRef === window.myRef);
    // 始终为true 【useRef，在整个组件的生命周期中，不会重新申明，只是不断的变更最新的引用。例如，let 变量。】
    console.log('inputRef === window.inputRef', inputRef === window.inputRef);
  });
  return (
    <>
      <input type="text" ref={inputRef} style={{ border: 0 }} />
      <button ref={myRef} onClick={() => setCount(count + 1)}>
        count {count}
      </button>
    </>
  );
};
