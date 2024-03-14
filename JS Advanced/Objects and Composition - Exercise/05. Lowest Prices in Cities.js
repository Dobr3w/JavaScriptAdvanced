function lowestPrice(input) {
    let result = {};

    for(let data of input) {
        let [townName, product, price] = data.split(' | ');
        price = Number(price);

        if (!result[product] || result[product].price > price) {
            result[product] = {price, townName};
        }
    }

    for(let [product, info] of Object.entries(result)) {
        console.log(`${product} -> ${info.price} (${info.townName})`);
    }
}



lowestPrice(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10']);