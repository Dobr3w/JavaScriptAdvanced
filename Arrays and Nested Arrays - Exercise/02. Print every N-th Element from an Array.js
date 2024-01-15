function printN(array, num) {
let newArr = [];
 for (let i =0; i<array.length; i += num) {
    newArr.push(array[i]);
 }

return newArr

}

printN(['5','20','31','4','20'],2);
printN(['dsa', 'asd', 'test', 'tset'], 2);
printN(['1', '2', '3', '4', '5'], 6);