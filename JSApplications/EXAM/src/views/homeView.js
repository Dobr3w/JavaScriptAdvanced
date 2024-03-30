import { html, render } from '../lib.js';

const homeView = () => html`
<section id="hero">
    <img src="../../images/home.png" alt="home" />
    <p>We know who you are, we will contact you</p>
</section>
`;

export function showHomeView(ctx) {
    render(homeView());
}