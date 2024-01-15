function radar(speed, area) {
    let status = '';
    let speedLimit = 0;
    switch (area) {
        case 'city':
            speedLimit = 50;
            if (speed <= speedLimit) {
                console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
            } else {
                let speedOver = speed - speedLimit;
                if (speedOver <= 20) {
                    status = 'speeding';
                } else if (speedOver > 20 && speedOver <= 40) {
                    status = 'excessive speeding';
                } else if (speedOver > 40) {
                    status = 'reckless driving';
                }
                console.log(`The speed is ${speedOver} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
            }
            break;
        case 'residential':
            speedLimit = 20;
            if (speed <= speedLimit) {
                console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
            } else {
                let speedOver = speed - speedLimit;
                if (speedOver <= 20) {
                    status = 'speeding';
                } else if (speedOver > 20 && speedOver <= 40) {
                    status = 'excessive speeding';
                } else if (speedOver > 40) {
                    status = 'reckless driving';
                }
                console.log(`The speed is ${speedOver} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
            }
            break;
        case 'interstate':
            speedLimit = 90;
            if (speed <= speedLimit) {
                console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
            } else {
                let speedOver = speed - speedLimit;
                if (speedOver <= 20) {
                    status = 'speeding';
                } else if (speedOver > 20 && speedOver <= 40) {
                    status = 'excessive speeding';
                } else if (speedOver > 40) {
                    status = 'reckless driving';
                }
                console.log(`The speed is ${speedOver} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
            }
            break;
        case 'motorway':
            speedLimit = 130;
            if (speed <= speedLimit) {
                console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
            } else {
                let speedOver = speed - speedLimit;
                if (speedOver <= 20) {
                    status = 'speeding';
                } else if (speedOver > 20 && speedOver <= 40) {
                    status = 'excessive speeding';
                } else if (speedOver > 40) {
                    status = 'reckless driving';
                }
                console.log(`The speed is ${speedOver} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
            }
            break;
    }
}


radar(40, 'city');
radar(21, 'residential');
radar(120, 'interstate');
radar(200, 'motorway');