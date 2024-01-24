function store(input) {
    let products = input
        .map(line => line.split(' : '))
        .sort((a, b) => a[0].localeCompare(b[0]));

    let currentLetter = '';
    for (let [product, price] of products) {
        if (product[0] !== currentLetter) {
            currentLetter = product[0];
            console.log(currentLetter);
        }
        console.log(`${product}: ${price}`);
    }
}

store(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']);