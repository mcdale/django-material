import {MDCTemporaryDrawer} from '@material/drawer';
const drawer = new MDCTemporaryDrawer(document.querySelector('.mdc-drawer--temporary'));
document.querySelector('.mdc-top-app-bar__navigation-icon').addEventListener('click', () => drawer.open = true);
