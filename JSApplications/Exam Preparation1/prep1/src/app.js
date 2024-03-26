import { html, render } from "../node_modules/lit-html/lit-html.js";
import page from "../node_modules/page/page.mjs";
import { showAddEventView } from "./views/showAddEventView.js";
import { showLoginView } from "./views/showLoginView.js";
import { showRegisterView } from "./views/showRegisterView.js";
import { showHomeView } from "./views/showHomeView.js";
import { userHelper } from "./utility/userHelper.js";
import { logout } from "./views/logout.js";
import { showAllEventsView } from "./views/showEventsView.js";
import { showDetailsView } from "./views/showSingleEvent.js";
import { showEditEventView } from "./views/showEditEvent.js";
import { deleteEvent } from "./views/deleteEvent.js";

const root = document.querySelector("main");
const userNav = document.querySelector(".user");
const guestNav = document.querySelector(".guest");

updateNav(); 

page(updateCTX);
page("/", showHomeView);
page("/index.html", showHomeView);
page("/allEvents", showAllEventsView);
page("/addEvent", showAddEventView);
page("/logout", logout);
page("/login", showLoginView);
page("/register", showRegisterView);
page('/create', "");
page('/data/events/:id', showDetailsView);
page('/edit/:id', showEditEventView);
page('/delete/:id', deleteEvent);

page.start();

function renderer(temp) {
    render(temp, root);
}

function updateCTX(ctx, next) {
    ctx.render = renderer;
    ctx.updateNav = updateNav;
    ctx.goTo = goTo;
    next();
}

function updateNav() {
    const user = userHelper.getUserData();

    if (user) {
        userNav.style.display = "inline-block";
        guestNav.style.display = "none";
    } else {
        userNav.style.display = "none";
        guestNav.style.display = "inline-block";
    }
}

function goTo(path) {
    page.redirect(path);
}