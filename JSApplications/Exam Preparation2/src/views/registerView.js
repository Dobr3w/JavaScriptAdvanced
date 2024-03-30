import { register } from '../data/users.js';
import { html, render, page, updateNav } from '../lib.js';
import { createSubmitHandler } from '../utils.js';

const registerView = (onRegister) => html`
<!-- Register Page (Only for Guest users) -->
<section id="register">
        <div class="form">
          <h2>Register</h2>
          <form class="register-form" @submit="${onRegister}">
            <input type="text" name="email" id="register-email" placeholder="email" />
            <input type="password" name="password" id="register-password" placeholder="password" />
            <input type="password" name="rePassword" id="repeat-password" placeholder="repeat password" />
            <button type="submit">register</button>
            <p class="message">Already registered? <a href="#">Login</a></p>
          </form>
        </div>
      </section>`;

export function showRegisterView(ctx) {
    render(registerView(createSubmitHandler(onRegister)));
}

async function onRegister(data, form) {

    page.start();

    if (!data || data.password !== data.rePassword) {
        return alert("Error register!");
    }

    await register(data.email, data.password);
    form.reset();
    updateNav();
    page.redirect("/");
}