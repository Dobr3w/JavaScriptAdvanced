window.addEventListener("load", solve);

function solve() {
  const formRef = document.querySelector("form");
  formRef.addEventListener("submit", onSubmit);
  const submitBtn = formRef.querySelector('button[type="submit"]');
  const ulSnowman = document.querySelector("ul.snowman-preview");
  const ulList = document.querySelector("ul.snow-list");

  const snowmanName = document.getElementById("snowman-name");
  const snowmanHeight = document.getElementById("snowman-height");
  const snowmanLocation = document.getElementById("location");
  const snowmanCreatorName = document.getElementById("creator-name");
  const specialAttribute = document.getElementById("special-attribute");

  function onSubmit(e) {
    e.preventDefault();

    let name = snowmanName.value;
    let height = snowmanHeight.value;
    let snowmanLoc = snowmanLocation.value;
    let creatorName = snowmanCreatorName.value;
    let specAttr = specialAttribute.value;

    if (!name || !height || !snowmanLoc || !creatorName || !specAttr) {
      return;
    }
    createPreview(name, height, snowmanLoc, creatorName, specAttr);

    formRef.reset();
    submitBtn.disabled = true;
  }

  function createPreview(name, height, snowmanLoc, creatorName, specAttr) {
    const li = document.createElement("li");
    li.classList.add("snowman-info");

    const article = document.createElement("article");

    const pForName = document.createElement("p");
    pForName.textContent = `Name: ${name}`;
    const pForHeight = document.createElement("p");
    pForHeight.textContent = `Height: ${height}`;
    const pForLoc = document.createElement("p");
    pForLoc.textContent = `Location: ${snowmanLoc}`;
    const pForCreator = document.createElement("p");
    pForCreator.textContent = `Creator: ${creatorName}`;
    const pForAttr = document.createElement("p");
    pForAttr.textContent = `Attribute: ${specAttr}`;

    article.appendChild(pForName);
    article.appendChild(pForHeight);
    article.appendChild(pForLoc);
    article.appendChild(pForCreator);
    article.appendChild(pForAttr);
    li.appendChild(article);
    ulSnowman.appendChild(li);

    const div = document.createElement("div");
    div.classList.add("btn-container");

    const editBtn = document.createElement("button");
    editBtn.classList.add("edit-btn");
    editBtn.textContent = "Edit";
    editBtn.addEventListener("click", () => {
      snowmanName.value = name;
      snowmanHeight.value = height;
      snowmanLocation.value = snowmanLoc;
      snowmanCreatorName.value = creatorName;
      specialAttribute.value = specAttr;
      li.remove();
      submitBtn.disabled = false;
    });

    const nextBtn = document.createElement("button");
    nextBtn.classList.add("next-btn");
    nextBtn.textContent = "Next";
    nextBtn.addEventListener("click", () => {
      const liInfo = document.createElement("li");
      liInfo.classList.add("snowman-content");

      const article = document.createElement("article");

      const pForName = document.createElement("p");
      pForName.textContent = `Name: ${name}`;
      const pForHeight = document.createElement("p");
      pForHeight.textContent = `Height: ${height}`;
      const pForLoc = document.createElement("p");
      pForLoc.textContent = `Location: ${snowmanLoc}`;
      const pForCreator = document.createElement("p");
      pForCreator.textContent = `Creator: ${creatorName}`;
      const pForAttr = document.createElement("p");
      pForAttr.textContent = `Attribute: ${specAttr}`;

      const sendBtn = document.createElement("button");
      sendBtn.classList.add("send-btn");
      sendBtn.textContent = "Send";
      sendBtn.addEventListener("click", () => {
        const mainElement = document.getElementById("hero");
        mainElement.remove();
        const body = document.querySelector("body");
        const backBtn = document.createElement("button");
        backBtn.classList.add("back-btn");
        backBtn.textContent = "Back";
        backBtn.addEventListener("click", () => {
          location.reload();
        });
        body.appendChild(backBtn);
        const img = document.getElementById("back-img");
        img.hidden = false;

      });

      article.appendChild(pForName);
      article.appendChild(pForHeight);
      article.appendChild(pForLoc);
      article.appendChild(pForCreator);
      article.appendChild(pForAttr);
      article.appendChild(sendBtn);
      liInfo.appendChild(article);
      ulList.appendChild(liInfo);
      li.remove();
    });

    div.appendChild(editBtn);
    div.appendChild(nextBtn);
    li.appendChild(div);
  }
}
