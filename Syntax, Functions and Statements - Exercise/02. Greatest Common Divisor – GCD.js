function findGCD(a, b) {
    let gcd = a % b;

    while (gcd !== 0) {
        a = b;
        b = gcd;
        gcd = a % b;
    }

    console.log(b);
}


findGCD(15, 5);
findGCD(2154, 458);

