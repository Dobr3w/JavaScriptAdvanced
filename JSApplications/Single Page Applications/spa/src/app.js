import { showHomeView } from "./home.js";
import "./login.js";
import { showView } from "./nav.js";

const views = {
    "homeBtn": ["homeView", showHomeView],
    "loginBtn": ["loginView"]
};

for (const linkId in views) {
    const [sectionId, callback] = views[linkId];
    document.getElementById(linkId).addEventListener("click", event => showView(sectionId, callback, event));
}

document.getElementById("loading").remove();

showView("homeView", showHomeView);