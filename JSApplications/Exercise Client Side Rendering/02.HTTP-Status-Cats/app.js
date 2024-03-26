import { html, render } from "./node_modules/lit-html/lit-html.js";
import { cats } from "./catSeeder.js";

const root = document.getElementById("allCats");

function createTemplate(cats) {
    return html`
    <ul>
        ${cats.map(cat => html`
        <li>
            <img src="./images/${cat.imageLocation}.jpg" width="250" height="250" alt="Card image cap">
            <div class="info">
                <button class="showBtn">Show status code</button>
                <div class="status" style="display: none" id="${cat.id}">
                    <h4>Status Code: ${cat.id}</h4>
                    <p>Continue</p>
                </div>
            </div>
        </li>`)}
    </ul>`;
}


function addEvent() {
    const buttons = document.querySelectorAll(".showBtn");
    buttons.forEach(btn => {
        btn.addEventListener("click", onClick);
    });
}

function onClick(event) {
    const parentElement = event.target.parentElement;
    const button = event.target;
    const divInfo = parentElement.querySelector(".status");
    const isHidden = divInfo.style.display === 'none';
    divInfo.style.display = isHidden ? 'block' : 'none';
    button.textContent = isHidden ? 'Hide status code' : 'Show status code';
}

function renderer(temp) {
    render(temp, root);
}

function onLoad() {
    renderer(createTemplate(cats));
    addEvent();
}

onLoad();