function createAssemblyLine() {
    return {
        hasClima: function(car) {
            car.temp = 21;
            car.tempSettings = 21;
            car.adjustTemp = function() {
                if (car.temp < car.tempSettings) {
                    car.temp += 1;
                } else if (car.temp > car.tempSettings) {
                    car.temp -= 1;
                }
            };
        },
        hasAudio: function(car) {
            car.currentTrack = null;
            car.nowPlaying = function() {
                if (car.currentTrack) {
                    console.log(`Now playing '${car.currentTrack.name}' by ${car.currentTrack.artist}`);
                }
            };
        },
        hasParktronic: function(car) {
            car.checkDistance = function(distance) {
                if (distance < 0.1) {
                    console.log("Beep! Beep! Beep!");
                } else if (distance >= 0.1 && distance < 0.25) {
                    console.log("Beep! Beep!");
                } else if (distance >= 0.25 && distance < 0.5) {
                    console.log("Beep!");
                } else {
                    console.log("");
                }
            };
        }
    };
}

// Example usage
const assemblyLine = createAssemblyLine();
const myCar = {
    make: 'Toyota',
    model: 'Avensis'
};

assemblyLine.hasClima(myCar);
console.log(myCar.temp); // 21
myCar.tempSettings = 18;
myCar.adjustTemp();
console.log(myCar.temp); // 20

assemblyLine.hasAudio(myCar);
myCar.currentTrack = {
    name: 'Never Gonna Give You Up',
    artist: 'Rick Astley'
};
myCar.nowPlaying(); // Now playing 'Never Gonna Give You Up' by Rick Astley

assemblyLine.hasParktronic(myCar);
myCar.checkDistance(0.4); // Beep!
myCar.checkDistance(0.2); // Beep! Beep!

console.log(myCar);
