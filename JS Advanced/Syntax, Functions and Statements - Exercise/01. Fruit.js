function calculateFruitCost(fruit, weightInGrams, pricePerKg) {
    let weightInKg = (weightInGrams / 1000);
    
    let totalCost = (weightInKg * pricePerKg);
    
    console.log(`I need $${totalCost.toFixed(2)} to buy ${weightInKg.toFixed(2)} kilograms ${fruit}.`);
}


calculateFruitCost('orange', 2500, 1.80);
calculateFruitCost('apple', 1563, 2.35);
