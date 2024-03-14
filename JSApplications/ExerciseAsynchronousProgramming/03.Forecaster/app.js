function attachEvents() {

    document.getElementById('submit').addEventListener("click", getWeather);
    const userInputRef = document.getElementById("location");
    const forecastRef = document.getElementById("forecast");
    const currentRef = document.getElementById("current");
    const upcomingRef = document.getElementById("upcoming");

    const baseURL = 'http://localhost:3030/jsonstore/forecaster/locations';
    const todayURL = 'http://localhost:3030/jsonstore/forecaster/today/';
    const upcomingURL = 'http://localhost:3030/jsonstore/forecaster/upcoming/';

    async function getWeather(event) {
        const userInput = userInputRef.value;
        forecastRef.style.display = "block";
        const locationResponse = await fetch(baseURL);
        const locationData = await locationResponse.json();
        const currLocationData = locationData.find(x => x.name === userInput);
        await fillTodayData(currLocationData.code);
        await fillUpcomingData(currLocationData.code);
    }

    async function fillTodayData(code) {
        const response = await fetch(todayURL + code);
        const data = await response.json();
        createForecastTodaySection(data);
        createForecastUpcomingSection(data);
    }

    async function fillUpcomingData(code) {
        const response = await fetch(upcomingURL + code);
        const data = await response.json();
        createForecastUpcomingSection(data);
    }

    function createForecastUpcomingSection(data){
        const container = document.createElement("div");
        container.classList.add("forecast-info");
        const upcoming1 = generateSpan("upcoming",data.name, data.forecast[0]);
        const upcoming2 = generateSpan("upcoming",data.name, data.forecast[1]);
        const upcoming3 = generateSpan("upcoming",data.name, data.forecast[2]);

        container.appendChild(upcoming1);
        container.appendChild(upcoming2);
        container.appendChild(upcoming3);

        upcomingRef.appendChild(container);

        return upcomingRef;
    }

    function generateSpan(classes,name,data){
        const spanContainer = document.createElement("span");
        spanContainer.classList.add(classes);

        const spanName = document.createElement("span");
        spanName.classList.add("forecast-data");
        spanName.textContent = name;

        const spanDegree = document.createElement("span");
        spanDegree.classList.add("forecast-data");
        spanDegree.innerHTML = `${data.low + findSymbol("Degrees")}/${data.high + findSymbol("Degrees")}`;

        const spanCondition = document.createElement("span");
        spanCondition.classList.add("forecast-data");
        spanCondition.textContent = data.condition;

        spanContainer.appendChild(spanName);
        spanContainer.appendChild(spanDegree);
        spanContainer.appendChild(spanCondition);

        return spanContainer;
    }

    function createForecastTodaySection(data) {
        const container = document.createElement("div");
        container.classList.add("forecasts");
        const conditionSpan = document.createElement("span");
        conditionSpan.classList.add("condition");
        conditionSpan.classList.add("symbol");
        conditionSpan.innerHTML = findSymbol(data.forecast.condition);

        container.appendChild(conditionSpan);
        const spanContainer = generateSpan("condition",data.name,data.forecast);

        container.appendChild(spanContainer);
        currentRef.appendChild(container);
        
        return currentRef;
    }

    function findSymbol(condition) {
        switch (condition) {
            case "Sunny": return "&#x2600";
            case "Partly sunny": return "&#x26C5";
            case "Overcast": return "&#x2601";
            case "Rain": return "&#x2614";
            case "Degrees": return "&#176";
        }
    }
}

attachEvents();