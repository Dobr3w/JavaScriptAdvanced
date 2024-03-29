import { html, render } from "./node_modules/lit-html/lit-html.js";
const url = "http://localhost:3030/jsonstore/advanced/dropdown";

const root = document.getElementById("menu");
document.querySelector("form").addEventListener("submit", addItem);

async function loadOptions() {
    const response = await fetch(url);

    if (!response.ok) {
        const err = response.message;
        throw new Error(err);
    }
    const data = await response.json();
    const option = Object.values(data).map(option => optionTemp(option));
    update(option);
}

function optionTemp(data) {
    return html`<option value="${data._id}">${data.text}</option>`;
}

function update(data) {
    render(data, root);
}

function addItem(e) {
    e.preventDefault();
    const inputRef = document.getElementById("itemText");
    const text = inputRef.value;
    inputRef.value = "";
    postOption({text});
}

async function postOption(text) {
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(text)
    });
    loadOptions();
}

loadOptions();