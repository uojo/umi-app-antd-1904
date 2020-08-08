import React from 'react';
import PropTypes from 'prop-types';

/**
 * 判断是否更新（重绘）组件
 * v15.5 之后
 */
class Main1 extends React.PureComponent {
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

export default Main1;
