function time(steps, footPrint, speed) {
    let distance = steps * footPrint;
    let speedMS = speed / 3.6;
    let time = distance / speedMS;
    let rest = Math.floor(distance / 500);
    time += rest * 60;

    let sec = Math.round(time % 60);
    let min = Math.floor(time / 60);
    let hour = Math.floor(min / 60);

    min -= hour * 60;

    let hourPrint = hour < 10 ? `0${hour}` : `${hour}`;
    let minPrint = min < 10 ? `0${min}` : `${min}`;
    let secPrint = sec < 10 ? `0${sec}` : `${sec}`;

    console.log(`${hourPrint}:${minPrint}:${secPrint}`);
}

time(4000, 0.60, 5);
time(2564, 0.70, 5.5);
