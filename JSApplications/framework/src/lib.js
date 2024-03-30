import { html, render as renderBase } from '../node_modules/lit-html/lit-html.js'; //TODO
import { classMap } from '../node_modules/lit-html/directives/class-map.js';
import { styleMap } from '../node_modules/lit-html/directives/style-map.js';
import page from '../node_modules/page/page.mjs';
import { getUserData } from './utils.js';

//TODO select correct root based on the exam
const root = document.querySelector('main');

function render(templateResult){
    renderBase(templateResult, root);
}

// const userNav = document.querySelector("div.user"); //TODO select right user div
// const guestNav = document.querySelector("div.guest"); //TODO select right guest div

function updateNav() {
    // const user = getUserData();

    // if (user) {
    //     userNav.style.display = "inline-block";
    //     guestNav.style.display = "none";
    // } else {
    //     userNav.style.display = "none";
    //     guestNav.style.display = "inline-block";
    // }
}


export{
    html,
    render,
    classMap,
    styleMap,
    page,
    updateNav
}