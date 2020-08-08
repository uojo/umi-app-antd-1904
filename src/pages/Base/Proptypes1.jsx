/* eslint-disable react/destructuring-assignment */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-useless-constructor */
import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

/**
 * https://www.npmjs.com/package/prop-types
 * https://github.com/yannickcr/eslint-plugin-react
 * https://react.docschina.org/docs/typechecking-with-proptypes.html
 */
// console.log('TCL: PropTypes', PropTypes);

class ClassComp extends React.Component {
  constructor(props) {
    super(props);
  }

  sayHi(e) {
    console.log('TCL: ClassComp -> sayHi -> e', e);
  }

  render() {
    return (
      <div>
        <div>类组件~</div>
        <div>{this.props.name}</div>
      </div>
    );
  }
}

const FuncComp = props => {
  console.log('TCL: props', props.func());
  return (
    <div>
      <div>函数式组件~</div>
      <div>
        {props.str}
        {props.bool}
        {props.arr.toString()}
      </div>
    </div>
  );
};

FuncComp.propTypes = {
  str: PropTypes.string.isRequired,
  obj: PropTypes.shape({ a: PropTypes.number, b: PropTypes.bool }),
  arr: PropTypes.array,
  func: PropTypes.func.isRequired,
};
FuncComp.defaultProps = {
  // str: 'hello',
  obj: { a: 1, b: false },
  arr: [0],
};

export default () => (
  <div>
    <ClassComp />
    <FuncComp str="world" func={() => {}} />
  </div>
);
