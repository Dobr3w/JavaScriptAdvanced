function attachEvents() {

const url = 'http://localhost:3030/jsonstore/messenger';

document.getElementById("refresh").addEventListener("click", onLoadMsg);
document.getElementById("submit").addEventListener("click", onSubmit);

async function onSubmit(event){
let nameRef = document.querySelector("input[name='author']");
let textRef = document.querySelector("input[name='content']");
let name = nameRef.value;
let text = textRef.value;
let data = {
    method: "POST",
    headers: {
        "Content-type": "application/json"
    },
    body: JSON.stringify({
        author: name,
        content: text,
    })
    }

    await fetch(url,data);

    nameRef.value = "";
    textRef.value = "";
}

async function onLoadMsg(event){
    let textAreaRef = document.getElementById("messages");
    textAreaRef.value = "";
    let response = await fetch(url);
    let data = await response.json();
    Object.values(data).forEach(record => {
        textAreaRef.value += `${record.author}: ${record.content}\n`;
        
    })
    textAreaRef.value = textAreaRef.value.trim();
}

}
attachEvents();