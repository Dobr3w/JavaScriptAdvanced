function town(array) {

    let townObj = {};

    for (let currTown of array) {
        let [townName, townPopulation] = currTown.split(' <-> ');
        townPopulation = Number(townPopulation);

        if (townObj[townName]) {
            townObj[townName] += townPopulation;
        } else {
            townObj[townName] = townPopulation;
        }
    }

    let entries = Object.entries(townObj);

    for (let [key, value] of entries) {
        console.log(`${key} : ${value}`);
    }
}

// town(['Sofia <-> 1200000',
//     'Montana <-> 20000',
//     'New York <-> 10000000',
//     'Washington <-> 2345000',
//     'Las Vegas <-> 1000000']
// );

town(['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000']
);