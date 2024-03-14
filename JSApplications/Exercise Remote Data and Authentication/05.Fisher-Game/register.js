document.querySelector("form").addEventListener("submit", onSubmit);
document.querySelector("a[id='logout']").style.display = "none";
document.querySelector("a[id='register']").classList.add("active");
document.querySelector("a[id='home']").classList.remove("active");

const registerUrl = "http://localhost:3030/users/register";

async function onSubmit(event) {
  event.preventDefault();

  let formData = new FormData(event.target);

  let email = formData.get("email");
  let password = formData.get("password");
  let repPass = formData.get("rePass");

  if (!email || !password || !repPass || password !== repPass) {
    return; //TODO
  }

  await createUser({ email, password });
  event.target.reset();
  window.location = "index.html";
}

async function createUser(data) {
  const option = createOption("POST", data);
  let response = await fetch(registerUrl, option);
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