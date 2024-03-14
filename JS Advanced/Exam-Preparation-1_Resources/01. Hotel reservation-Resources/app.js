window.addEventListener('load', solve);

function solve() {
    const firstName = document.getElementById("first-name");
    const lastName = document.getElementById("last-name");
    const dateIn = document.getElementById("date-in");
    const dateOut = document.getElementById("date-out");
    const peopleCount = document.getElementById("people-count");

    const btnSubmit = document.getElementById("next-btn");
    btnSubmit.addEventListener("click", nextBtnFunction);

    function nextBtnFunction(event) {
        event.preventDefault();
        if (firstName.value, lastName.value, dateIn.value, dateOut.value, peopleCount.value) {
            createReservationInfo(firstName.value, lastName.value, dateIn.value, dateOut.value, peopleCount.value);
            btnSubmit.disabled= true;
        }
    }

    function createReservationInfo(firstNameInput, lastNameInput, dateInInput, dateOutInput, peopleCountInput) {
        const ulInfo = document.getElementsByClassName("info-list")[0];
        const liInfo = document.createElement("li");
        liInfo.classList.add("reservation-content");

        const article = document.createElement("article");
        const h3 = document.createElement("h3");
        const pForDateIn = document.createElement("p");
        const pForDateOut = document.createElement("p");
        const pForPeople = document.createElement("p");

        h3.textContent = `Name: ${firstNameInput} ${lastNameInput}`;
        pForDateIn.textContent = `From date: ${dateInInput}`;
        pForDateOut.textContent = `To date: ${dateOutInput}`;
        pForPeople.textContent = `For ${peopleCountInput} people`;

        firstName.value = "";
        lastName.value = "";
        dateIn.value = "";
        dateOut.value = "";
        peopleCount.value = "";

        ulInfo.appendChild(liInfo);
        liInfo.appendChild(article);

        article.appendChild(h3);
        article.appendChild(pForDateIn);
        article.appendChild(pForDateOut);
        article.appendChild(pForPeople);

        const editBtn = document.createElement("button");
        editBtn.classList.add("edit-btn");
        editBtn.textContent = "Edit";
        editBtn.addEventListener("click", () => {
            btnSubmit.disabled= false;
            firstName.value = firstNameInput;
            lastName.value = lastNameInput;
            dateIn.value = dateInInput;
            dateOut.value = dateOutInput;
            peopleCount.value = peopleCountInput;

            liInfo.remove();
        })

        const continueBtn = document.createElement("button");
        continueBtn.classList.add("continue-btn");
        continueBtn.textContent = "Continue";
        continueBtn.addEventListener("click", () => {
            btnSubmit.disabled= true;
            createConfirmInfo(firstNameInput, lastNameInput, dateInInput, dateOutInput, peopleCountInput);
            liInfo.remove();
        });

        liInfo.appendChild(editBtn);
        liInfo.appendChild(continueBtn);
    }

    function createConfirmInfo(firstNameInput, lastNameInput, dateInInput, dateOutInput, peopleCountInput) {
        const ulInfo = document.getElementsByClassName("confirm-list")[0];
        const liInfo = document.createElement("li");
        liInfo.classList.add("reservation-content");

        const article = document.createElement("article");
        const h3 = document.createElement("h3");
        const pForDateIn = document.createElement("p");
        const pForDateOut = document.createElement("p");
        const pForPeople = document.createElement("p");

        h3.textContent = `Name: ${firstNameInput} ${lastNameInput}`;
        pForDateIn.textContent = `From date: ${dateInInput}`;
        pForDateOut.textContent = `To date: ${dateOutInput}`;
        pForPeople.textContent = `For ${peopleCountInput} people`;

        ulInfo.appendChild(liInfo);
        liInfo.appendChild(article);

        article.appendChild(h3);
        article.appendChild(pForDateIn);
        article.appendChild(pForDateOut);
        article.appendChild(pForPeople);

        const confirmBtn = document.createElement("button");
        confirmBtn.classList.add("confirm-btn");
        confirmBtn.textContent = "Confirm";
        confirmBtn.addEventListener("click", () => {
            btnSubmit.disabled= false;
            const h1 = document.getElementById("verification");
            h1.textContent = "Confirmed.";
            h1.classList.add("reservation-confirmed");

            liInfo.remove();
        })

        const cancelBtn = document.createElement("button");
        cancelBtn.classList.add("cancel-btn");
        cancelBtn.textContent = "Cancel";
        cancelBtn.addEventListener("click", () => {
            btnSubmit.disabled= false;
            const h1 = document.getElementById("verification");
            h1.textContent = "Cancelled.";
            h1.classList.add("reservation-cancelled");

            liInfo.remove();
        });


        liInfo.appendChild(confirmBtn);
        liInfo.appendChild(cancelBtn);
    }
}