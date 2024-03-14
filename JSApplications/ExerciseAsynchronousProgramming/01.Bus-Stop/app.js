const result = document.getElementById('result');
const stopName = document.getElementById('stopName');
const busesElement = document.getElementById('buses');

function getInfo() {
    const stopId = document.getElementById('stopId').value;
    const url = `http://localhost:3030/jsonstore/bus/businfo/${stopId}`;

    fetch(url)
        .then(onHeaders)
        .then(loadData)
        .catch(onError);
}

function onHeaders(response) {
    if (!response.ok) {
        throw new Error('Error fetching bus info');
    }
    return response.json();
}

function loadData(data) {
    stopName.textContent = data.name;
    busesElement.innerHTML = '';

    const buses = data.buses;
    Object.entries(buses).forEach(([key, value]) => {
        busesElement.appendChild(createListItem(key, value));
    });
}

function onError(error) {
    stopName.textContent = 'Error';
    busesElement.innerHTML = '';
}

function createListItem(busId, time) {
    const item = document.createElement('li');
    item.textContent = `Bus ${busId} arrives in ${time}`;
    return item;
}