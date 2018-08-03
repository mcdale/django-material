import {MDCTemporaryDrawer} from '@material/drawer';
const drawer = new MDCTemporaryDrawer(document.querySelector('.mdc-drawer--temporary'));
document.querySelector('.js-menu').addEventListener('click', () => drawer.open = true);
