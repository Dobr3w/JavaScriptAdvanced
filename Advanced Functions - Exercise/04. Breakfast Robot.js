function solution() {
    
    let store = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    };

    const recipes = {
        apple: { carbohydrate: 1, flavour: 2 },
        lemonade: { carbohydrate: 10, flavour: 20 },
        burger: { carbohydrate: 5, fat: 7, flavour: 3 },
        eggs: { protein: 5, fat: 1, flavour: 1 },
        turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 }
    };

    function restock(microElement, quantity) {
        store[microElement] += Number(quantity);
        return "Success";
    }

    function prepare(recipe, quantity) {
        quantity = Number(quantity);
        const neededIngredients = Object.entries(recipes[recipe]);

        for (let [ingredient, qty] of neededIngredients) {
            if (store[ingredient] < qty * quantity) {
                return `Error: not enough ${ingredient} in stock`;
            }
        }

        for (let [ingredient, qty] of neededIngredients) {
            store[ingredient] -= qty * quantity;
        }

        return "Success";
    }

    function report() {
        return Object.entries(store).map(([key, value]) => `${key}=${value}`).join(' ');
    }

    return function (cmd) {
        let [action, type, qty] = cmd.split(" ");
        switch (action) {
            case "restock": return restock(type, Number(qty));
            case "prepare": return prepare(type, Number(qty));
            case "report": return report();
        }
    };
}

let manager = solution();
console.log(manager("restock flavour 50")); // Success
console.log(manager("prepare lemonade 4")); // Error: not enough carbohydrate in stock
console.log(manager("restock carbohydrate 10")); // Success
console.log(manager("restock flavour 10")); // Success
console.log(manager("prepare apple 1")); // Success 
console.log(manager("restock fat 10")); // Success 
console.log(manager("prepare burger 1")); // Success 
console.log(manager("report"));