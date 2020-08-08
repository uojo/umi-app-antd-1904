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
 * 参考 https://blog.csdn.net/sinat_17775997/article/details/94453167
 * 结论
 */

function Child({ callback }) {
  const [count, setCount] = useState(() => callback());
  useEffect(
    () => {
      setCount(callback());
    },
    [callback]
  );
  return <div>{count}</div>;
}

/**
 * 只有当父组件的值发生变更后，子组件才更新
 */
const Main0 = () => {
  const [count, setCount] = useState(1);
  const [val, setVal] = useState('');

  const callback = useCallback(() => count, [count]);
  return (
    <div>
      <h4>{count}</h4>
      <Child callback={callback} />
      <div>
        <button onClick={() => setCount(count + 1)}>+</button>
        <input value={val} onChange={event => setVal(event.target.value)} />
      </div>
    </div>
  );
};

export default Main0;
