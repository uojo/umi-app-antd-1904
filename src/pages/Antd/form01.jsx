/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-return-assign */
/* eslint-disable react/no-multi-comp */
/* eslint-disable no-useless-constructor */
import React, {
  Component,
  createRef,
  forwardRef,
  useState,
  useEffect,
  useMemo,
  useRef,
} from 'react';
import { Input, Form } from 'antd';
import utils from './utils';

// 参考：https://www.cnblogs.com/krisZzz/p/11158003.html

class Child extends Component {
  constructor(props) {
    super(props);
    this.state = {
      val1: '',
    };
  }

  handleOnChange = val => {
    console.log('TCL: Child -> handleOnChange -> val', val);
    this.setState({
      val1: val,
    });
  };

  render() {
    return <Input onChange={this.handleOnChange} value={this.state.val1} />;
  }
}

const Child1 = Form.create({ name: 'c1' })(Child);

class Main extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // 父组件获取子组件的一个方法
    this.childFormRef.handleOnChange('来自父组件的调用');
  }

  render() {
    return (
      <div className="space_pd_bottom">
        <h3>类组件中，父组件调用子组件方法</h3>
        <Child1
          wrappedComponentRef={form => {
            console.log('TCL: Main -> render -> form', form);
            this.childFormRef = form;
          }}
        />
      </div>
    );
  }
}

export default Main;
