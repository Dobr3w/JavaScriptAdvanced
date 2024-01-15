function isDistanceValid(x1, y1, x2, y2) {
    // Function to calculate distance
    function calculateDistance(xa, ya, xb, yb) {
        return Math.sqrt(Math.pow(xb - xa, 2) + Math.pow(yb - ya, 2));
    }

    // Function to check if distance is an integer
    function isInteger(value) {
        return Number.isInteger(value);
    }

    // Check distances
    const distance1 = calculateDistance(x1, y1, 0, 0);
    const distance2 = calculateDistance(x2, y2, 0, 0);
    const distance3 = calculateDistance(x1, y1, x2, y2);

    console.log(`{${x1}, ${y1}} to {0, 0} is ${isInteger(distance1) ? 'valid' : 'invalid'}`);
    console.log(`{${x2}, ${y2}} to {0, 0} is ${isInteger(distance2) ? 'valid' : 'invalid'}`);
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${isInteger(distance3) ? 'valid' : 'invalid'}`);
}

// Example usage
isDistanceValid(3, 0, 0, 4);
isDistanceValid(2, 1, 1, 1);
