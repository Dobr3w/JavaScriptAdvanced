function tableToJSON(input) {
    let result = [];

    for (let i = 1; i < input.length; i++) {
        let [town, latitude, longitude] = input[i].split('|').filter(Boolean).map(x => x.trim());
        let townInfo = {
            Town: town,
            Latitude: Number(Number(latitude).toFixed(2)),
            Longitude: Number(Number(longitude).toFixed(2))
        };

        result.push(townInfo);
    }

    return JSON.stringify(result);
}

console.log(tableToJSON(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']));
