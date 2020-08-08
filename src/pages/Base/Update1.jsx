import React from 'react';
import PropTypes from 'prop-types';

/**
 * shouldComponentUpdate 手动判断是否更新（重绘）组件
 * v15.5 之前，没有 PureComponent 出现之前
 */
class Main1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('componentWillUpdate');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate');
  }

  shouldComponentUpdate(prevProps, nextState) {
    // 阻止重新渲染组件
    if (this.state.count === nextState.count) {
      return false;
    }
    return true;
  }

  render() {
    return (
      <div>
        {this.state.count}
        <button onClick={() => this.setState({ count: 1 })}>Click Me</button>
      </div>
    );
  }
}

/**
 * PureComponent v15.5 之后引入
 * 浅比较包括：比较对象key的数量与值（第一层）、引用。
 * 如果引用相同，可以利用concat或其它拷贝方式。
 * 如果内部申明 shouldComponentUpdate，则依据其返回的值判断是否重绘
 */
class Main2 extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('componentWillUpdate');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate');
  }

  render() {
    return (
      <div>
        {this.state.count}
        <button onClick={() => this.setState({ count: 1 })}>Click Me</button>
      </div>
    );
  }
}

export default () => (
  <>
    {/* <Main1 /> */}
    <Main2 />
  </>
);
