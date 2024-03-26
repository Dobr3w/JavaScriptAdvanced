import { html, render } from "./node_modules/lit-html/lit-html.js";

const root = document.getElementById("root");
const form = document.querySelector("form").addEventListener("submit", onSubmit);

function onSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const townList = formData.get("towns").split(", ");
    renderer(createTemplate(townList));
}

function createTemplate(towns) {
    return html`
<ul>
    ${towns.map(town => html`<li>${town}</li>`)}
</ul>`;
}

function renderer(temp) {
    render(temp, root);
}