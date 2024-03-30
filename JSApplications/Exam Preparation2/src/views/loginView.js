import { login } from '../data/users.js';
import { html, render, page, updateNav } from '../lib.js';
import { createSubmitHandler } from '../utils.js';

const loginView = (onLogin) => html`
<!-- Login Page (Only for Guest users) -->
<section id="login">
<div class="form">
    <h2>Login</h2>
    <form class="login-form" @submit="${onLogin}">
    <input type="text" name="email" id="email" placeholder="email" />
    <input type="password" name="password" id="password" placeholder="password" />
    <button type="submit">login</button>
    <p class="message">
        Not registered? <a href="#">Create an account</a>
    </p>
    </form>
</div>
</section>`;

export function showLoginView(ctx) {
    render(loginView(createSubmitHandler(onLogin)));
}

async function onLogin(data, form) {

    page.start();

    if (!data || data.email == "" || data.password == "") {
        return alert("Login Error!");
    }

    await login(data.email, data.password);
    updateNav();
    form.reset();
    page.redirect("/");
}