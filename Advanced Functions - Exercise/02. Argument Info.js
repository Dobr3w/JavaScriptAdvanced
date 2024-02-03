function argumentInfo(...data) {
    let result = {};

    for (let element of data) {
        let type = typeof (element);
        console.log(`${type}: ${element}`);

        if (!result.hasOwnProperty(type)) {
            result[type] = 0;
        }

        result[type] += 1;
    }

    let sortResult = Object.entries(result).sort((a, b) => b[1] - a[1]);

    for (let [key, value] of sortResult) {
        console.log(`${key} = ${value}`);
    }
}

argumentInfo('cat', 42, function () { console.log('Hello world!'); });