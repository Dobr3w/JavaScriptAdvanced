import { loadTemplate, render } from "./renderer.js";
const root = document.querySelector("main");

const views = {
    "home": {
        title: "Home",
        content: "This is home view"
    },
    "catalog": {
        title: "Catalog",
        content: "This is catalog view"
    },
    "about": {
        title: "About",
        content: "This is about view"
    },
};

document.querySelector("nav").addEventListener("click", (event) => {
    event.preventDefault();
    if (event.target.tagName == "A") {
        show(event.target.id);
    }
});

show("home");

async function show(id) {
    const context = views[id];
    const result = await render("layout", context);
    root.innerHTML = result;
}