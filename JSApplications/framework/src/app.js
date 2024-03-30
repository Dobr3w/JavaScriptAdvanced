import { page, updateNav } from "./lib.js";
import { showExample } from "./views/exampleView.js";

//TODO remove these imports after testing and adding views
import * as api from './data/request.js';
import * as userApi from './data/users.js';

updateNav();

page('/index.html', showExample);
page('/', showExample);
page.start();

window.api = api;
window.userApi = userApi;