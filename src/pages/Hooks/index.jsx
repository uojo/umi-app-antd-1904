import React, { createRef, forwardRef, useState, useEffect } from 'react';
import Ref01 from './ref01';
import Ref02 from './ref02';
import Memo01 from './memo01';
import Memo02 from './memo02';
import Effect01 from './effect01';
import Reducer01 from './reducer01';
import State01 from './state01';
import State02 from './state02';

const Comp1 = () => <div>Comp1</div>;

const Comp2 = () => <div>Comp2</div>;

export default () => (
  <>
    {/* <State01 /> */}
    <State02 />
    {/* <Ref01 /> */}
    {/* <Ref02 /> */}
    {/* <Form01 /> */}
    {/* <Form02 /> */}
    {/* <Memo01 /> */}
    {/* <Memo02 /> */}
    {/* <Effect01 /> */}
    {/* <Reducer01 /> */}
  </>
);
