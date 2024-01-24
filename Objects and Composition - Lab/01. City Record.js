
//You will receive a city’s name (string), population (number), and treasury (number) as arguments, which you will need to set as properties of an object and return it.


function city(cityName, cityPopulayion, cityTreasury) {

    cityObj = {
        name: cityName,
        population: Number(cityPopulayion),
        treasury: Number(cityTreasury)
    }

    return cityObj

}


console.log(city('Tortuga',7000,15000));
console.log(city('Santo Domingo',12000,23500));