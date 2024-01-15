function sameNums(num) {
    let numToString = num.toString();
    let isSame = true;
    let sum = 0

    for (let i = 1; i < numToString.length; i++) {
        sum += parseInt(numToString[i]);

        if (numToString[i] !== numToString[i - 1]) {
            isSame = false;
        }
    }
    console.log(isSame);
    console.log(sum);
}

sameNums(2222222);
sameNums(1234);
sameNums(11334456);
sameNums(11223333456556666);