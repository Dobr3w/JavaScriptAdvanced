let userData = JSON.parse(sessionStorage.getItem("userData"));

document.getElementById("logout").addEventListener("click", onLogout);
document.querySelector("aside button").addEventListener("click", onLoadCatch);
document.getElementById("addForm").addEventListener("submit", onCreate);

const guestNavRef = document.getElementById("guest");
const logoutBtnRef = document.getElementById("user");
const addBtnRef = document.querySelector(".add");
const divCatches = document.getElementById("catches");

const endpoint = {
  logout: "http://localhost:3030/users/logout",
  allCaches: "http://localhost:3030/data/catches"
};

function hasOwner(id) {
  return userData?._id === id;
}

//update nav
updateNav();
function updateNav() {
  if (userData) {
    document.querySelector("nav p span").textContent = userData.email;
    document.getElementById("user");
    guestNavRef.style.display = "none";
    logoutBtnRef.style.display = "inline-block";
    addBtnRef.disabled = false;
  } else {
    document.querySelector("nav p span").textContent = "guest";
    guestNavRef.style.display = "inline-block";
    logoutBtnRef.style.display = "none";
    addBtnRef.disabled = true;
  }
}

async function onLogout(event) {
  let option = {
    method: "GET",
    headers: {
      "X-Authorization": userData.accessToken,
    },
  };
  await fetch(endpoint.logout, option);
  sessionStorage.clear();
  userData = null;
  await onLoadCatch();
  updateNav();
}

async function onLoadCatch() {
  divCatches.innerHTML = "";
  const response = await fetch(endpoint.allCaches);
  const data = await response.json();
  data.forEach(element => {
    let div = listCatches(element);
    divCatches.appendChild(div);
  });

}

function listCatches(data) {
  let isOwner = hasOwner(data._ownerId);
  let div = document.createElement("div");
  div.classList.add("catch");

  div.innerHTML += `<label>Angler</label>`;
  div.innerHTML += `<input type="text" class="angler" id="angler" value="${data.angler}" ${!isOwner ? "disabled" : ""}>`;
  div.innerHTML += `<label>Weight</label>`;
  div.innerHTML += `<input type="text" class="weight" id="weight" value="${data.weight}" ${!isOwner ? "disabled" : ""}>`;
  div.innerHTML += `<label>Species</label>`;
  div.innerHTML += `<input type="text" class="species" id="species" value="${data.species}" ${!isOwner ? "disabled" : ""}>`;
  div.innerHTML += `<label>Location</label>`;
  div.innerHTML += `<input type="text" class="location" id="location" value="${data.location}" ${!isOwner ? "disabled" : ""}>`;
  div.innerHTML += `<label>Bait</label>`;
  div.innerHTML += `<input type="text" class="bait" id="bait" value="${data.bait}" ${!isOwner ? "disabled" : ""}>`;
  div.innerHTML += `<label>Capture Time</label>`;
  div.innerHTML += `<input type="number" class="captureTime" id="captureTime" value="${data.captureTime}" ${!isOwner ? "disabled" : ""}>`;

  const updateBtn = document.createElement("button");
  updateBtn.classList.add("update");
  updateBtn.dataset.id = data._id;
  updateBtn.textContent = "Update";

  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("delete");
  deleteBtn.dataset.id = data._id;
  deleteBtn.textContent = "Delete";

  if (!hasOwner(data._ownerId)) {
    updateBtn.disabled = true;
    deleteBtn.disabled = true;
  }
div.appendChild(updateBtn);
div.appendChild(deleteBtn);

  updateBtn.addEventListener("click", onUpdate);
  deleteBtn.addEventListener("click", onDelete);
  return div;
}

async function onCreate(event) {
  event.preventDefault();
  let formData = new FormData(event.target);
  let angler = formData.get("angler");
  let weight = formData.get("weight");
  let species = formData.get("species");
  let location = formData.get("location");
  let bait = formData.get("bait");
  let captureTime = formData.get("captureTime");
  let _ownerId = userData._id;

  if (!angler || !weight || !species || !location || !bait || !captureTime) {
    return; //TODO
  };

  let data = {
    angler,
    weight,
    species,
    location,
    bait,
    captureTime,
    _ownerId
  };

  const option = createOption("POST", data);
  await fetch(endpoint.allCaches, option);
  await onLoadCatch();
  document.getElementById("addForm").reset();
}

async function onUpdate(event) {
  event.preventDefault();
  let id = event.target.dataset.id;
  let formInputs = event.target.parentElement;

  let angler = formInputs.querySelector("input#angler").value;
  let weight = formInputs.querySelector("input#weight").value;
  let species = formInputs.querySelector("input#species").value;
  let location = formInputs.querySelector("input#location").value;
  let bait = formInputs.querySelector("input#bait").value;
  let captureTime = formInputs.querySelector("input#captureTime").value;

  let updatedData = {
    angler,
    weight,
    species,
    location,
    bait,
    captureTime,
  };
  const option = createOption("PUT", updatedData);
  await fetch(endpoint.allCaches + "/" + id , option);
  await onLoadCatch();
}

async function onDelete(event) {
  let id = event.target.dataset.id;
  const option = {
    method: "DELETE",
    headers: {
      "X-Authorization": userData.accessToken
    }
  }
  await fetch(endpoint.allCaches + "/" + id, option);
  onLoadCatch();
}

function createOption(method, data) {
  return {
    method,
    headers: {
      "Content-type": "application/json",
      "X-Authorization": userData.accessToken
    },
    body: JSON.stringify(data),
  };
}