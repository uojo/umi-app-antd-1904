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
 * 结论
 */

/**
 * useEffect 在第二次快照中没有执行。原因在于没有申明依赖。
 * 执行顺序：组件开始渲染、渲染完成、执行 useEffect、【执行 setInterval、setState、组件重绘（1次）】*重复（其中 setInterval 会不断的执行，但传入setState的值不变）
 * 问题：
 * 函数会执行3次，count值分别为：0、1、1
 */
const Main0 = () => {
  const [count, countSet] = useState(0);
  // console.log('TCL: Main -> count1', count);
  // 仅执行一次
  useEffect(() => {
    // console.log('TCL: Main -> count2', count);
    const id = setInterval(() => {
      // console.log('TCL: id -> count', count);
      countSet(count + 1);
    }, 1000);
    return () => {
      console.log('组件销毁', id);
      clearInterval(id);
    };
  }, []);

  return <div>{count}</div>;
};

/**
 * 在不申明依赖的情况下，保证传入 countSet 的是累加值。
 * useEffect 的生命周期：组件挂载 --> 执行副作用 --> 组件更新 --> 执行清理函数 --> 执行副作用 --> 组件更新 --> 执行清理函数 --> 组件卸载
 */
const Main = () => {
  const [count, countSet] = useState(0);
  // console.log('TCL: Main -> count1', count);
  // 仅执行一次
  useEffect(() => {
    // 相当于在 componentDidMount 内执行
    // console.log('TCL: Main -> count2', count);
    const id = setInterval(() => {
      // 获取最新值
      countSet(v => v + 1);
    }, 1000);
    // 返回清理函数
    return () => {
      // 相当于在 componentWillUnmount 内执行。同时在，每次执行该 Effect 前都将执行该返回方法
      console.log('组件销毁', id);
      clearInterval(id);
    };
  }, []);

  return <div>{count}</div>;
};

export default Main0;
