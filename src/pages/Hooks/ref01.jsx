import React, { createRef, forwardRef, useState, useEffect, useMemo, useRef } from 'react';
import utils from './utils';

// useEffect // Similar to componentDidMount and componentDidUpdate:
// ref 回调函数，实例化并挂载在页面上才会调用

// forwardRef 是HOC，解决无法获取函数式组件 ref
const Comp1 = forwardRef((props, ref) => {
  // console.log('TCL: ref', ref);
  const [position, positionSet] = useState(null);
  useEffect(() => {
    // https://developer.mozilla.org/zh-CN/docs/Web/API/Element/getBoundingClientRect
    // 返回元素的大小及其相对于视口的位置。
    const curDomPos = ref?.current?.getBoundingClientRect();
    console.log('TCL: curDomPos', curDomPos);
    curDomPos && positionSet(curDomPos);
  }, []);

  return (
    <div ref={ref} name="name1">
      {props.children}：{JSON.stringify(position)}
    </div>
  );
});

// createRef simple
const Comp2 = () => {
  const [count, countSet] = useState(0);
  const ref2 = createRef();
  useEffect(() => {
    console.log('TCL: ref2.组件内部的ref', ref2);
  });
  return (
    <div name="ref2">
      Comp2
      <div>
        <button
          onClick={() => {
            countSet(Date.now());
          }}
        >
          button
        </button>
        <span ref={ref2}>count:{count}</span>
      </div>
    </div>
  );
};

/**
 * useRef
 * 等价于在 Class 中使用 this.something
 */
const Comp3 = () => {
  const [count, setCount] = useState(0);

  const doubleCount = useMemo(() => 2 * count, [count]);

  const couterRef = useRef();

  useEffect(
    () => {
      console.log('TCL: couterRef.current', couterRef.current, couterRef.current.innerHTML);
    },
    [count]
  );

  return (
    <>
      <button
        ref={couterRef}
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Count: {count}
      </button>
    </>
  );
};

/**
 * 缓存对象，避免重复创建对象
 * @param {*} props
 */
function Image(props) {
  const ref = useRef(null);

  function getExpensiveObj() {
    if (ref.current === null) {
      // ref.current = ExpensiveObj;
    }

    return ref.current;
  }

  // if need ExpensiveObj, call getExpensiveObj()
}

export default () => {
  const ref1 = createRef();
  useEffect(() => {
    console.log('TCL: ref1.父组件获取子组件ref', ref1);
  }, []);
  return (
    <>
      <Comp1 ref={ref1}>comp1.children</Comp1>
      <Comp2 />
      {/* <Comp3 /> */}
      {/* <Comp4 /> */}
    </>
  );
};
