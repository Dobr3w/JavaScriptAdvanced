const list = document.getElementById('commits');
const item = document.createElement('li');

function loadCommits() {

    const username = document.getElementById('username').value;
    const repository = document.getElementById('repo').value;
    const url = `https://api.github.com/repos/${username}/${repository}/commits`;

    fetch(url)
        .then(onHeaders)
        .then(loadData)
        .catch(onError);
}

function onHeaders(response) {
    if (!response.ok) {
        throw 'Error';
    }
    return response.json();
}

function loadData(data) {
    list.replaceChildren(...data.map(createListItem));
}

function onError(error) {
    list.appendChild(item)
    item.textContent = error;
}

    function createListItem({commit}) {
    const item = document.createElement('li');
    item.textContent = `${commit.author.name}: ${commit.message}`;
    return item;
}