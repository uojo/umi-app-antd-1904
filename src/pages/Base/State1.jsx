import React from 'react';

/**
 * setState 是否同步？
 * 参考 https://zhuanlan.zhihu.com/p/26069727
 * 同步场景：原生事件中、非控制区域中
 * 异步场景：合成事件中、
 * batch update 参考 https://zhuanlan.zhihu.com/p/28532725
 */
class Main extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.handleClickLater = this.handleClickLater.bind(this);

    this.state = {
      count: 0,
      // foo: 0,
      val: 0,
      countA: 0,
      countB: 0,
    };
  }

  componentDidMount() {
    document.querySelector('#btn-raw').addEventListener('click', this.handleClick);
    this.handleTimeout1();
    this.handleTimeout2();
    this.handleBatchUpdates();
  }

  handleBatchUpdates() {
    // 相当于只执行一次，Batch Update
    this.setState({ val: this.state.val + 1 });
    this.setState({ val: this.state.val + 2 });
    this.setState({ val: this.state.val + 3 }); // 覆盖前值
  }

  handleBatchUpdates2() {
    // 执行3次，因为传入的回调函数
    this.setState(state => ({ value: state.value + 1 }));
    this.setState(state => ({ value: state.value + 1 }));
    this.setState(state => ({ value: state.value + 1 }));
  }

  handleClick() {
    // 异步
    console.log('onClick -> handleClick -> this.state.count:start', this.state.count);
    this.setState({ count: this.state.count + 1 });
    console.log('onClick -> handleClick -> this.state.count:end', this.state.count);
  }

  handleClickLater() {
    // 同步
    setTimeout(() => {
      this.handleClick();
    });
  }

  handleTimeout1() {
    // 同步，不在 react 控制中
    setTimeout(() => {
      console.log('setTimout -> countA:start', this.state.countA); // 0
      this.setState({ countA: 1 });
      this.setState({ countA: 2 });
      this.setState({ countA: 3 });
      console.log('setTimout -> countA:end', this.state.countA); // 3
    }, 0);
  }

  handleTimeout2() {
    // 异步
    return new Promise(reslove => {
      console.log('promise -> countB:start', this.state.countB); // 0
      this.setState({ countB: 1 });
      this.setState({ countB: 2 });
      this.setState({ countB: 3 });
      console.log('promise -> countB:end', this.state.countB); // 3
      reslove();
    });
  }

  render() {
    console.log('#enter render');
    return (
      <div>
        <div>
          val[{this.state.val}] count[{this.state.count}]{/* 异步 */}
          <button onClick={this.handleClick}>Increment</button>
          {/* 同步 */}
          <button id="btn-raw">Increment Raw</button>
          <button onClick={this.handleClickLater}>Increment Later</button>
        </div>
      </div>
    );
  }
}
export default Main;
