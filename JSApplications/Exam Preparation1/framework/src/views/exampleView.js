import { html, render } from "../lib.js";

const exampleTemplate = () => html`<h2>render</h2>`;

export function showExampleTemp(ctx) {
 render(exampleTemplate());
}