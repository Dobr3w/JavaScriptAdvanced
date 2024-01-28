function addItem() {

    let newItemTextElement = document.getElementById("newItemText");
    let newItemValueElement = document.getElementById("newItemValue");
    let newItemText = newItemTextElement.value;
    let newItemValue = newItemValueElement.value;


    if (newItemText !== "" && newItemValue !== "") {
        const option = document.createElement("option");
        option.textContent = newItemText;
        option.value = newItemValue;

        let menu = document.getElementById("menu");
        menu.appendChild(option);

        newItemTextElement.value = "";
        newItemValueElement.value = "";
    }
}