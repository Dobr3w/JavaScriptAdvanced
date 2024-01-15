function cookingOperations(number, ...operations) {
    let currentNumber = Number(number);

    let operationsMap = {
        'chop': num => num / 2,
        'dice': num => Math.sqrt(num),
        'spice': num => num + 1,
        'bake': num => num * 3,
        'fillet': num => num * 0.8
    };

    operations.forEach(operation => {
        currentNumber = operationsMap[operation](currentNumber);
        console.log(currentNumber.toFixed(1));
    });
}

cookingOperations('9', 'dice', 'spice', 'chop', 'bake','fillet');