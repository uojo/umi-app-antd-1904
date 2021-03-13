import React from 'react';

import './b1';
import { data, changeName } from './b2';

console.log('module-index', data.name);

export default () => <p>ES6 Module</p>;
