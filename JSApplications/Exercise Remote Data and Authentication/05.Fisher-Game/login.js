document.querySelector("form").addEventListener("submit", onSubmit);
document.querySelector("a[id='logout']").style.display = "none";
document.querySelector("a[id='login']").classList.add("active");
document.querySelector("a[id='home']").classList.remove("active");

const loginUrl = "http://localhost:3030/users/login";

async function onSubmit(event) {
  event.preventDefault();

  const formData = new FormData(event.target);
  const email = formData.get("email");
  const password = formData.get("password");

  if (!email || !password) {
    return; //TODO
  }
  await loginUser({ email, password});
  event.target.reset();
  window.location = "index.html"
}

async function loginUser(data) {
  const option = createOption("POST", data);
  const response = await fetch(loginUrl, option);
  const userData = await response.json();
  sessionStorage.setItem("userData", JSON.stringify(userData));
}

function createOption(method, data) {
  return {
    method,
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  };
}