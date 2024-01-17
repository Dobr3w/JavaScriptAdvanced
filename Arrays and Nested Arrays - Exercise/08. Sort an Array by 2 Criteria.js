function sortBy(arr) {

    return arr.sort((a, b) => {
        if (a.length !== b.length) {
            return a.length - b.length;
        }

        return a.toLowerCase().localeCompare(b.toLowerCase());
    }).join('\n');

}


console.log(sortBy(['alpha', 'beta', 'gamma']));
console.log(sortBy(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']));
console.log(sortBy(['test', 'Deny', 'omen', 'Default']));