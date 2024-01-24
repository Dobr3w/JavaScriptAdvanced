function factory(order) {

    let result = {
        model: order.model,
        engine: undefined,
        carriage: undefined,
        wheels: undefined
    };

    if (order.power <= 90) {
        result.engine = { power: 90, volume: 1800 };
    } else if (order.power <= 120) {
        result.engine = { power: 120, volume: 2400 };
    } else {
        result.engine = { power: 200, volume: 3500 };
    }

    if (order.carriage === "hatchback") {
        result.carriage = { type: "hatchback", color: order.color };
    } else {
        result.carriage = { type: "coupe", color: order.color };
    }

    if (order.wheelsize % 2 == 0) {
        let wheel = order.wheelsize - 1;
        let wheels = result.wheels = [];
        for (let i = 0; i < 4; i++) {
            wheels.push(wheel);
        }
    } else {
        let wheel = order.wheelsize;
        let wheels = result.wheels = [];
        for (let i = 0; i < 4; i++) {
            wheels.push(wheel);
        }

    }

    return result;
}


console.log(factory({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
}));

// console.log(factory({
//     model: 'Opel Vectra',
//     power: 110,
//     color: 'grey',
//     carriage: 'coupe',
//     wheelsize: 17
// }));