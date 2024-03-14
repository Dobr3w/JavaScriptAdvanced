function matrix(array) {
    for (let i = 0; i < array.length - 1; i++) {
        let rowOne = array.reduce((acc, value, index) => {
            acc += value[i];
            return acc;
        }, 0);

        let rowTwo = array.reduce((acc, value, index) => {
            acc += value[i + 1];
            return acc;
        }, 0);

        let colOne = array[i].reduce((acc, value) => acc + value);
        let colTwo = array[i + 1].reduce((acc, value) => acc + value);

        if (rowOne !== rowTwo || colOne !== colTwo) {
            return false;
        }
    }

    return true;
}


console.log(matrix([[4, 5, 6], [6, 5, 4], [5, 5, 5]]));
console.log(matrix([[11, 32, 45], [21, 0, 1], [21, 1, 1]]));
console.log(matrix([[1, 0, 0], [0, 0, 1], [0, 1, 0]]));