import React, { createRef, forwardRef, useState, useEffect } from 'react';
import utils from './utils';
import Form01 from './form01';
import Form02 from './form02';

const Comp1 = () => <div>Comp1</div>;

const Comp2 = () => <div>Comp1</div>;

export default () => {
  const ref1 = createRef();
  return (
    <>
      {/* <Ref01 /> */}
      {/* <Ref02 /> */}
      {/* <Form01 /> */}
      {/* <Form02 /> */}
    </>
  );
};
