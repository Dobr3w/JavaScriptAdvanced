export function showLoginView() {
}

start();

function start() {
    const form = document.getElementById("loginForm");
    form.addEventListener("submit", onLogin);
}

async function onLogin(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    const email = data.email.trim();
    const password = data.password.trim();

    const url = "http://localhost:3030/users/login";
    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password })
        });

        if (!response.ok) {
            const err = await response.json();
            throw new Error(err.message);
        }

        const userData = await response.json();

        localStorage.setItem("user", JSON.stringify(userData));
        window.location = "/";

    } catch (error) {
        alert(error.message);
    }
}