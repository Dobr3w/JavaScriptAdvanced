import { login } from "../api/userService.js";
import { setUser } from "../utils/userUtils.js";

const loginSection = document.querySelector("div[data-view-name='login']");
const form = loginSection.querySelector("form").addEventListener("submit", onSubmit);

let context = null;

export function showLoginView(ctx) {
    context = ctx;
    context.render(loginSection);
}

async function onSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const { email, password } = Object.fromEntries(formData);

    if(!email || !password) {
        alert("Error Login");
    }

    const userData = await login({ email, password });
    setUser(userData);
    context.updateNav();
    context.goTo("/home");
    form.reset();
}