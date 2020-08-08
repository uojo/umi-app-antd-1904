import React from 'react';
import PropTypes from 'prop-types';

const Zoo = props => {
  // console.log('props', props);
  const { children, Dog, bird } = props;
  const Bird = bird; // 定义要用大写
  return (
    <div>
      {children}
      {Dog}
      <Bird />
      {props.cock()}
    </div>
  );
};
const Cat = props => <div>This is Cat</div>;
const Dog = props => <div>This is Dog</div>;
const Bird = props => <div>This is Bird</div>;
const Cock = props => <div>This is Cock</div>;
const Hen = props => <div>This is Hen.{props.render(props.name)}</div>;

/**
 * 传递组件的方法，参考：https://www.jianshu.com/p/a2ef7d7031b9
 * 1. children。Cat
 * 2. 传递组件的实例。Dog
 * 3. 传递组件的定义。Bird
 * 4. 传递函数式无状态组件。使用这种方式可以传递props。Cock
 * 5. 自定义组件渲染方式。Hen
 * @param {} props
 */
const Main1 = () => (
  <Zoo Dog={<Dog />} bird={Bird} cock={Cock}>
    <Cat />
    <Hen name="bbc" render={props => <b>{props}</b>} />
  </Zoo>
);

export default () => (
  <div>
    <Main1 />
  </div>
);
