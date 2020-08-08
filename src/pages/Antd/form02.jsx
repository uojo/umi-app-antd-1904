import React, {
  Component,
  createRef,
  forwardRef,
  useState,
  useEffect,
  useMemo,
  useRef,
  useImperativeHandle,
} from 'react';
import { Input, Form, Button } from 'antd';
import utils from './utils';

// 参考 https://www.lizenghai.com/archives/45474.html

const Child = ({ childRef1 }) => {
  const [val1, val1Set] = useState('');
  const handleOnChange = val => {
    val1Set(val);
  };

  useImperativeHandle(childRef1, () => ({
    triggerChange: val => {
      handleOnChange(val);
    },
  }));

  return (
    <div>
      <Input onChange={handleOnChange} value={val1} />
    </div>
  );
};

const Child1 = Form.create({ name: 'c1' })(Child);

const Main = () => {
  const childRef1 = useRef();
  useEffect(() => {
    // 父组件执行子组件的一个方法
    console.log('TCL: Main -> childRef1', childRef1);
    // this.childFormRef.handleOnChange('来自父组件的调用');
  });
  return (
    <div className="space_pd_bottom">
      <h3>函数组件中，父组件调用子组件方法</h3>
      <Child1 childRef1={childRef1} />
      <Button
        onClick={() => {
          childRef1.current.triggerChange('Hello');
        }}
      >
        父组件执行子组件方法
      </Button>
    </div>
  );
};

export default Main;
