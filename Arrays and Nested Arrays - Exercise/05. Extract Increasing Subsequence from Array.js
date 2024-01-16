function extract(data) {
    let result = [];

    let biggest = data.shift();

    result.push(biggest);

    data.forEach(element => {
        if (biggest <= element) {
            biggest = element;
            result.push(biggest);
        }
    });
    return result;
}

console.log(extract([1, 3, 8, 4, 10, 12, 3, 2, 24]));
console.log(extract([1, 3, 4]));
console.log(extract([20, 3, 2, 15, 6, 1]));