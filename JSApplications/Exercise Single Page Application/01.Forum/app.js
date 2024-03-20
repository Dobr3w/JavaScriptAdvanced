
const newTopicForm = document.querySelector("form");
const cancelBtn = document.querySelector(".cancel").addEventListener("click", formReset);
const main = document.querySelector("main");

const url = "http://localhost:3030/jsonstore/collections/myboard/posts";

fetchData();


function formReset(event) {
    event.preventDefault();
    newTopicForm.reset();
}

const publicBtn = document.querySelector(".public").addEventListener("click", submitTopic);
async function submitTopic(event) {


    // event.preventDefault();

    let formData = new FormData(newTopicForm);
    let data = Object.fromEntries(formData.entries());

    let topicName = data.topicName.trim();
    let postText = data.postText.trim();
    let username = data.username.trim();

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                topicName,
                postText,
                username
            })
        });

        if (!topicName || !postText || !username) {
            alert("Всички полета са задължителни!");
        }

        if (!response.ok) {
            const err = await response.json();
            throw new Error(err.message);
        };

        console.log("Topic is posted");

    } catch (error) {
        alert(error.message);
    };

    newTopicForm.reset();
}

async function fetchData() {

    try {
        const response = await fetch(url);

        if (!response.ok) {
            const err = await response.json();
            throw new Error(err.message);
        };

        const data = await response.json();

        for (const key in data) {
            if (Object.hasOwnProperty.call(data, key)) {
                const { topicName, postText, username, _id } = data[key];

                let topicInfo = {
                    topicName: topicName,
                    postText: postText,
                    username: username,
                    _id: _id
                }
                displayTopics(topicInfo);
            }
        }

    } catch (error) {
        alert(error.message);
    };
}

function displayTopics(data) {
    let name = data.topicName;
    let text = data.postText;
    let username = data.username;
    let id = data._id;

    const divForTopic = document.createElement("div");
    divForTopic.classList.add("topic-title");


    const divForText = document.createElement("div");
    divForText.classList.add("topic-container");
    divForText.innerHTML += `<h3>${name}</h3>`;
    divForText.innerHTML += `<p>Date: <b>${id}</b></p>`;
    divForText.innerHTML += `<p>Username: <b>${username}</b></p>`;

    divForTopic.appendChild(divForText);
    main.appendChild(divForTopic);
}