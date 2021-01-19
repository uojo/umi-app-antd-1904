import React from 'react';
import PropTypes from 'prop-types';

// 定义 props 类型
import Proptypes1 from './Proptypes1';
// setState 执行时是否同步
import State1 from './State1';
// 样式示例集合，包括：flex、伪类选择器
import Style1 from './Style1';
import BFC from './BFC';
// 组件传入组件的各种方式
import Children1 from './Children1';
// 判断组件是否需要更新
import Update1 from './Update1';

export default () => (
  <div>
    {/* <Proptypes1 /> */}

    {/* <State1 /> */}

    {/* <Children1 /> */}

    {/* <Update1 /> */}

    {/* <Style1 className="style1Comp" /> */}

    <BFC />
  </div>
);
