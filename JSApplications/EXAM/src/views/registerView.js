import { html, render, page, updateNav } from '../lib.js';
import { createSubmitHandler } from '../utils.js';
import { register } from '../data/users.js';

const registerView = (onRegister) => html`
<section id="register">
    <div class="form">
      <h2>Register</h2>
      <form class="register-form" @submit="${onRegister}">
        <input
          type="text"
          name="email"
          id="register-email"
          placeholder="email"
        />
        <input
          type="password"
          name="password"
          id="register-password"
          placeholder="password"
        />
        <input
          type="password"
          name="re-password"
          id="repeat-password"
          placeholder="repeat password"
        />
        <button type="submit">register</button>
        <p class="message">Already registered? <a href="/login">Login</a></p>
      </form>
    </div>
  </section>
`;

export function showRegisterView(ctx){
    render(registerView(createSubmitHandler(onRegister)));
}


async function onRegister(data, form) {

    const formData = new FormData(form);
    const email = formData.get("email");
    const password = formData.get("password");
    const repeatPass = formData.get("re-password");

    page.start();

    if (!email || !password || !repeatPass || password !== repeatPass) {
        return alert("Passwords don't match");
    }

    await register(data.email, data.password);
    form.reset();
    updateNav();
    page.redirect("/");
}