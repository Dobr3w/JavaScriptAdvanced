function rotate(array, num) {
    let length = array.length;
    num = num % length;
    return array.slice(-num).concat(array.slice(0, length - num)).join(' ');
}

console.log(rotate(['1', '2', '3', '4'], 2));
console.log(rotate(['Banana', 'Orange', 'Coconut', 'Apple'], 15));