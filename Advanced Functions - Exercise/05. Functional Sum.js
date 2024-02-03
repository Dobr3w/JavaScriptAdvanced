function add(n) {
    let sum = n;

    function innerAdd(nextNumber) {
        sum += nextNumber;
        return innerAdd;
    }

    innerAdd.toString = function() {
        return sum;
    };

    return innerAdd;
}


add(1);     // Should log the function itself, implicitly calls toString
add(1)(6)(-3); // Should log 4
