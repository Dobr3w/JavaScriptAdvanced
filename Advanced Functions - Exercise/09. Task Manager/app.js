function solve() {
    const formRef = document.querySelector("form");
    const [addTask, openTask, inProgressTask, completeTask] = document.querySelectorAll("section");

    btnHandlerEnum = {
        start: function (event) {
            let currArticle = event.target.parentElement.parentElement;
            removeBtnPartial(event.target.parentElement);
            currArticle.innerHTML += getBtnPartial({ classes: "red", text: "Delete" }, { classes: "orange", text: "Finish" });
            let btns = currArticle.querySelectorAll("button");
            addEventListenerToButton(btns);
            inProgressTask.children[1].appendChild(currArticle);
        },
        finish: function (event) {
            let currArticle = event.target.parentElement.parentElement;
            removeBtnPartial(event.target.parentElement);
            completeTask.children[1].appendChild(currArticle);
        },
        delete: function (event) {
            event.target.parentElement.parentElement.remove();
        }
    }

    formRef.addEventListener("submit", onSubmitHandler);

    function onSubmitHandler(event) {
        event.preventDefault();
        let formEl = event.target.elements;
        let taskName = formEl[0].value;
        let desc = formEl[1].value;
        let date = formEl[2].value;

        if (!taskName || !desc || !date) {
            return;
        }

        createArticle(taskName, desc, date);
        clearForm(formEl);
    }

    function clearForm(formEl) {
        formEl[0].value = "";
        formEl[1].value = "";
        formEl[2].value = "";
    }

    function createArticle(name, desc, date) {
        let newArticle = document.createElement("article");
        newArticle.innerHTML = getArticleTemp(name, desc, date);
        openTask.children[1].appendChild(newArticle);
        let btns = newArticle.querySelectorAll("button");
        addEventListenerToButton(btns);
    }

    function clickHandler(event) {
        let currAction = event.target.innerHTML.toLowerCase();
        btnHandlerEnum[currAction](event);
    }

    function addEventListenerToButton(btns) {
        Array.from(btns).forEach(btn => btn.addEventListener("click", clickHandler));
    }

    function getArticleTemp(name, desc, date) {
        return `<h3>${name}</h3>` +
            `<p>Description: ${desc}</p>` +
            `<p>Due Date: ${date}</p>` +
            getBtnPartial({ classes: "green", text: "Start" }, { classes: "red", text: "Delete" });
    }

    function getBtnPartial(btn1, btn2) {
        return `<div class="flex">` +
            `<button class="${btn1.classes}">${btn1.text}</button>` +
            `<button class="${btn2.classes}">${btn2.text}</button>` +
            `</div>`;
    }

    function removeBtnPartial(target) {
        target.remove();
    }

}