import { page, updateNav } from "./lib.js";
import { showHomeView } from "./views/homeView.js";
import { showRegisterView } from "./views/registerView.js";
import { showLoginView } from "./views/loginView.js";
import { showAllItemsView } from "./views/dashboardView.js";
import { showAddNewItemView } from "./views/addNewItemView.js";
import { showItemDetailsView } from "./views/itemDetailsView.js";
import { showEditItemView } from "./views/editItemView.js";
import { deleteItem } from "./views/delete.js";
import { logoutUser } from "./views/logout.js";


//TODO remove these imports after testing and adding views
// import * as api from './data/request.js';
// import * as userApi from './data/users.js';

updateNav();

page('/index.html', showHomeView);
page('/', showHomeView);
page('/dashboard', showAllItemsView);
page('/details/:id', showItemDetailsView);
page('/edit/:id', showEditItemView);
page('/delete/:id', deleteItem);
page('/sell', showAddNewItemView);
page('/login', showLoginView);
page('/register', showRegisterView);
page('/logout', logoutUser);
page.start();

// window.api = api;
// window.userApi = userApi;