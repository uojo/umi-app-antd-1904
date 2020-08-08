import React, {
  Component,
  createRef,
  forwardRef,
  useState,
  useEffect,
  memo,
  useMemo,
  useRef,
  useImperativeHandle,
  useCallback,
} from 'react';
import { Input, Form, Button } from 'antd';
import utils from './utils';

/**
 * 参考
 * https://segmentfault.com/a/1190000018697490
 * https://blog.csdn.net/weixin_43902189/article/details/99689963
 * 结论
 * memo 用于缓存无参数传入的函数式组件。
 * useCallback 用于缓存函数，返回缓存后的函数。
 * useMemo 用于缓存值，包括组件。与 useCallback 类似。用来代替 shouldComponentUpdate
 * useMemo(() => <component />,[]) 等价于 useCallback(()=>()=>{},[])
 */

// 子组件，useMemo
const Child1 = ({ pval1, pval2 }) => {
  const [val1, val1Set] = useState(0);

  const getPval2C1 = val => {
    console.log('被执行了');
    return <span>{val}</span>;
  };

  // 仅当[]内申明的依赖发生变化时，才会执行设定的函数，当依赖未发生变化时，依旧返回上一次计算的结果。
  const pval2View = useMemo(() => getPval2C1(pval2), [pval2]);

  return (
    <div>
      <b>Child1:</b>
      <span>val1({val1})</span>
      <span>pval1({pval1})</span>
      ~pval2({pval2View})
    </div>
  );
};

// 子组件，memo
const Child2 = () => {
  console.log('TCL: Child2 todo');
  return (
    <div>
      <b>Child3:</b>~
    </div>
  );
};

const Child2Memo = memo(Child2);

const Child3 = ({ name, func1, func2, obj1 = {}, obj2 = {}, obj3 = {} }) => {
  console.log('TCL: Child3 todo');
  return (
    <div>
      <b>Child3:</b>
      <ul>
        <li>name:{name}</li>
        <li onClick={func1}>obj1.a:{obj1.a}</li>
        <li onClick={func2}>obj2.b:{obj2.b}</li>
        <li>obj3.c:{obj3.c}</li>
      </ul>
    </div>
  );
};

const Child3Memo = memo(Child3);

// 父组件
const Main = () => {
  const [val1, val1Set] = useState(1);
  const [val2, val2Set] = useState(2);
  const [obj1, obj1Set] = useState({ a: 1 });
  useEffect(() => {});

  const handlefunc2 = val => {
    console.log(val);
  };
  return (
    <div className="space_pd_bottom">
      <h3>函数组件中，父子组件的 memo 应用</h3>
      父组件
      <Button
        size="small"
        onClick={() => {
          val1Set(val1 + 1);
        }}
      >
        val1Set ({val1})
      </Button>
      <Button
        size="small"
        type="primary"
        onClick={() => {
          val2Set(val2 + 1);
        }}
      >
        val2Set ({val2})
      </Button>
      {/* <Child1 pval1={val1} pval2={val2} /> */}
      {/* 只要当前组件更新，Child2 内部就会执行 */}
      {/* <Child2 /> */}
      {/* 相反 */}
      {/* <Child2Memo /> */}
      {/* 存在 props 时，同 Child2 */}
      {/* <Child3 name={val1} /> */}
      {/* 如 props 的值不变时，不会引发内部执行，然而，当传入的是函数时，依旧触发 */}
      <Child3Memo
        name={val1}
        // 传入的函数时，会不断的触发子组件内执行
        func1={useCallback(val => console.info(val), [])}
        // 同上
        // func2={handlefunc2}
        // 直接赋值对象变量，除非对象变化，不会引发子组件内执行
        obj1={obj1}
        // 相反
        // obj2={{ b: 2 }}
        //
        obj3={useMemo(() => ({ c: 3 }), [val1])}
      />
    </div>
  );
};

export default Main;
