import { login } from '../data/users.js';
import { html, render, page, updateNav } from '../lib.js';
import { createSubmitHandler } from '../utils.js';

const loginView = (onLogin) => html`
<section id="login">
    <div class="form">
      <h2>Login</h2>
      <form class="login-form" @submit="${onLogin}">
        <input type="text" name="email" id="email" placeholder="email" />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="password"
        />
        <button type="submit">login</button>
        <p class="message">
          Not registered? <a href="/register">Create an account</a>
        </p>
      </form>
    </div>
  </section>
`;

export function showLoginView(ctx) {
  render(loginView(createSubmitHandler(onLogin)));
}


async function onLogin(data, form) {

  const formData = new FormData(form);
  const email = formData.get("email");
  const password = formData.get("password");


  page.start();

  if (!email || !password) {
    return alert("Login Error!");
  }

  await login(data.email, data.password);
  updateNav();
  form.reset();
  page.redirect("/");
}