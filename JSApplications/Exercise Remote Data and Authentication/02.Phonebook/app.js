function attachEvents() {
  const baseURL = "http://localhost:3030/jsonstore/phonebook/";

  const ul = document.getElementById("phonebook");

  document.getElementById("btnLoad").addEventListener("click", loadData);
  document.getElementById("btnCreate").addEventListener("click", postData);

  async function loadData() {
    ul.innerHTML = "";
    let request = await fetch(baseURL);
    let response = await request.json();

    Object.values(response).forEach((record) => {
      let li = document.createElement("li");
      li.textContent = `${record.person}: ${record.phone}`;
      let deleteBtn = document.createElement("button");
      deleteBtn.value = record._id;
      deleteBtn.textContent = "Delete";
      let deleteID = deleteBtn.value;
      deleteBtn.addEventListener("click", async () => {
        let data = {
          method: "DELETE",
          headers: {
            "Content-type": "application/json",
          },
        };
        await fetch(baseURL + deleteID, data);
      });

      li.appendChild(deleteBtn);
      ul.appendChild(li);
    });
  }

  async function postData() {
    let personRef = document.getElementById("person");
    let person = personRef.value;

    let phoneRef = document.getElementById("phone");
    let phone = phoneRef.value;

    let data = {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ 
        person: person,
        phone: phone,
      }),
    };
    await fetch(baseURL, data);

    personRef.value = "";
    phoneRef.value = "";
  }
}

attachEvents();
