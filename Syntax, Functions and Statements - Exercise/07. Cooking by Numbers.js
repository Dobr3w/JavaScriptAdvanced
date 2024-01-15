function cooking(arr) {

    let num = Number(arr[0]);
    let status = 0;
    for (let i = 0; i < arr.length; i++) {

        if (arr[i] == 'chop') {

            status = num / 2;
            num = status;
            console.log(num);
        }
    }

}

cooking(['32', 'chop', 'chop', 'chop', 'chop', 'chop']);
cooking(['9', 'dice', 'spice', 'chop', 'bake', 'fillet']);