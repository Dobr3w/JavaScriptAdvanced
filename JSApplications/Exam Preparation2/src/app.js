import { page, updateNav } from "./lib.js";
import { showLoginView } from "./views/loginView.js";
import { showRegisterView } from "./views/registerView.js";
import { showAddMotorcycleView } from "./views/addMotorcycleView.js";
import { showAllMotorcycleView } from "./views/allMotorcyclesView.js";

//TODO remove these imports after testing and adding views
import * as api from './data/request.js';
import * as userApi from './data/users.js';
import { logoutUser } from "./views/logout.js";
import { showHomeView } from "./views/homeView.js";
import { showMoreInfoView } from "./views/moreInfoView.js";
import { showEditMotorcycleView } from "./views/editMotorcycleView.js";
import { deleteMotorcycle } from "./views/delete.js";

updateNav();

page('/', showHomeView);
page('/index.html', showHomeView);
page('/login', showLoginView);
page('/register', showRegisterView);
page('/logout', logoutUser);
page('/addMotorcycle', showAddMotorcycleView);
page('/motorcycles', showAllMotorcycleView);
page('/data/motorcycles/:id', showMoreInfoView);
page('/edit/:id', showEditMotorcycleView);
page('/delete/:id', deleteMotorcycle);
page.start();

window.api = api;
window.userApi = userApi;