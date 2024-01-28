function lockedProfile() {
   let buttons = Array.from(document.querySelectorAll('button'));

    buttons.forEach(el => el.addEventListener('click', onClickHandler));

    function onClickHandler(e) {
        let hiddenInfo = e.currentTarget.parentElement.querySelector('div');
        let currRadioBtn = e.target.parentElement.querySelector("input[type='radio']:checked")

        if(currRadioBtn.value === "unlock") {
            if(e.currentTarget.textContent === "Show more"){
                e.currentTarget.textContent = "Hide it"
                hiddenInfo.style.display = "block"
            } else if (e.currentTarget.textContent === "Hide it") {
                e.currentTarget.textContent = "Show more"
                hiddenInfo.style.display = "none"
            }
        }
    }
}