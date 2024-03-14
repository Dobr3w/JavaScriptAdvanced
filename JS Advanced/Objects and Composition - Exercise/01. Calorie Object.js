function obj(array) {
    let foods = {};

    for (let i = 0; i < array.length; i += 2) {
        let foodName = array[i];
        let foodCalories = Number(array[i + 1]);

        if (foodName in foods) {
            foods[foodName] += foodCalories;
        } else {
            foods[foodName] = foodCalories;
        }
    }

    console.log(foods);
}


obj(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);
// obj(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']);