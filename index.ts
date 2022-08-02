import './style';

import {sum} from './src/func';
import {domInit} from './src/loaded'
import {clicker} from './src/paragraph';
import {titleChange} from './src/title';

declare var API_DOMAIN : string | undefined;

window.addEventListener('DOMContentLoaded', function(){
  domInit();
  clicker();
  titleChange();
  console.log(sum(9999,1));
})

console.log(process.env.NODE_ENV);
console.log(API_DOMAIN);