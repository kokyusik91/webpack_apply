import './styles/start.scss';
import './assets/images/chick.jpeg';
import './assets/images/nyncat.png';
import './assets/images/sad-frog.png';

import {sum} from './src/func';
import {domInit} from './src/loaded'
import {clicker} from './src/paragraph';
import {titleChange} from './src/title';

window.addEventListener('DOMContentLoaded', function(){
  domInit();
  clicker();
  titleChange();
  console.log(sum(9999,1));
})
