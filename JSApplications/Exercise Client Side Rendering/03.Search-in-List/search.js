import { html, render } from "./node_modules/lit-html/lit-html.js";
import { towns } from "./towns.js"

document.querySelector("button").addEventListener("click", search);

const root = document.getElementById("towns");
const inputRef = document.getElementById("searchText");
const result = document.getElementById("result");

update();
function update(match) {
   render(ulTemplate(towns, match), root);
}

function ulTemplate(towns, match) {
   return html`<ul>${towns.map(town => createLiTemplate(town, match?.includes(town)))}</ul>`;
};

function createLiTemplate(town, isActive) {
   return html`<li class="${isActive ? "active" : ""}">${town}</li>`;
};

function search() {
   const searchText = inputRef.value;
   const match = towns.filter(town => town.includes(searchText));
   update(match);
   matchCount(match.length);
}

function matchCount(num) {
   render(html`${num} matches found`, result);
}