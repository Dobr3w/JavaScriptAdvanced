function attachEventsListeners() {

    const days = document.getElementById('days');
    const hours = document.getElementById('hours');
    const minutes = document.getElementById('minutes');
    const seconds = document.getElementById('seconds');

    
    let dayBtn = document.getElementById('daysBtn');
    dayBtn.addEventListener('click', toDays);
    function toDays() {
        let dayValue = days.value;
        let hoursValue = dayValue * 24;
        let minutesValue = dayValue * 1440;
        let secondsValue = dayValue * 86400;

        hours.value = hoursValue;
        minutes.value = minutesValue;
        seconds.value = secondsValue; 
    }

    let hoursBtn = document.getElementById('hoursBtn');
    hoursBtn.addEventListener('click', toHours);
    function toHours() {
        let hoursValue = hours.value;
        let dayValue = hoursValue/24;
        let minutesValue = dayValue * 1440;
        let secondsValue = dayValue * 86400;

        days.value = dayValue;
        minutes.value = minutesValue;
        seconds.value = secondsValue;
    }

    let minutesBtn = document.getElementById('minutesBtn');
    minutesBtn.addEventListener('click', toMinutes);
    function toMinutes() {
        let minutesValue = minutes.value;
        let dayValue = minutesValue/1440;
        let hoursValue = dayValue * 24;
        let secondsValue = dayValue * 86400;

        days.value = dayValue;
        hours.value = hoursValue;
        seconds.value = secondsValue;
    } 

    let secondsBtn = document.getElementById('secondsBtn');
    secondsBtn.addEventListener('click', toSeconds);
    function toSeconds() {
        let secondsValue = seconds.value;
        let dayValue = secondsValue/86400;
        let hoursValue = dayValue * 24;
        let minutesValue = dayValue * 1440;

        days.value = dayValue;
        hours.value = hoursValue;
        minutes.value = minutesValue;
    } 
}

/*One day is equal to 24 hours/1440 minutes/86400 seconds.
Whichever button we click,
the input fields should change depending on the added value on the left.
(For example, if we write 48 hours and click convert the days,
the field value should change to 2). */