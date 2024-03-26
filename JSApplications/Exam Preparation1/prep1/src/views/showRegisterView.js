import { html } from "../../node_modules/lit-html/lit-html.js";
import { userService } from "../service/userService.js";
import { userHelper } from "../utility/userHelper.js";

const registerViewTemplate = () => html`
<!-- Register Page (Only for Guest users) -->
<section id="register">
    <div class="form">
    <h2>Register</h2>
    <form class="register-form" @submit="${onRegister}">
        <input type="text" name="email" id="register-email" placeholder="email"/>
        <input type="password" name="password" id="register-password" placeholder="password"/>
        <input type="password" name="rePassword" id="repeat-password" placeholder="repeat password"/>
        <button type="submit">register</button>
        <p class="message">Already registered? <a href="/login">Login</a></p>
    </form>
    </div>
</section>`;

let context = null;
export function showRegisterView(ctx) {
    context = ctx;
    ctx.render(registerViewTemplate());
}

async function onRegister(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    let { email, password, rePassword } = Object.fromEntries(formData);
    if (!email || !password || password !== rePassword) {
        return alert("Error register!");
    }

    const userData = await userService.register({ email, password });
    userHelper.setUserData(userData);
    context.updateNav();
    context.goTo("/");
}