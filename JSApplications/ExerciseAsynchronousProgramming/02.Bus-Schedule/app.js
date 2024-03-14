function solve() {

    const span = document.querySelector('#info span');
    const departBtn = document.getElementById('depart');
    const arriveBtn = document.getElementById('arrive');

    const url = "http://localhost:3030/jsonstore/bus/schedule/";

    const stop = {
        currentStop: "",
        nextStop: "depot"
    }

    async function depart() {
        try {
            const response = await fetch(url + stop.nextStop);
            const data = await response.json();
            stop.currentStop = data.name;
            stop.nextStop = data.next;
            span.textContent = `Next stop ${stop.currentStop}`;
            departBtn.disabled = true;
            arriveBtn.disabled = false;
        } catch (error) {
            span.textContent = "Error";
            departBtn.disabled = true;
            arriveBtn.disabled = true;
        }

    }

    function arrive() {
        try {
            span.textContent = `Arriving at ${stop.currentStop}`;
            departBtn.disabled = false;
            arriveBtn.disabled = true;
        } catch (error) {
            departBtn.disabled = true;
            arriveBtn.disabled = true;
        }

    }

    return {
        depart,
        arrive
    };

}

let result = solve();