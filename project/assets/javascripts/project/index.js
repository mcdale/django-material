import {MDCList} from '@material/list/index';
import {MDCTopAppBar} from '@material/top-app-bar/index';

// Instantiation
const topAppBarElement = document.querySelector('.mdc-top-app-bar');
const topAppBar = new MDCTopAppBar(topAppBarElement);


const listElement = document.querySelector('.mdc-list');
const list = new MDCList(listElement);

list.singleSelection = true;
