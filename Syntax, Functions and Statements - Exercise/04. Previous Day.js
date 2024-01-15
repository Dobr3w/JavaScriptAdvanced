function prevDay(year, month, day) {

    let currDate = new Date(year, month - 1, day);
    currDate.setDate(currDate.getDate() - 1);
    console.log(`${currDate.getFullYear()}-${currDate.getMonth()+1}-${currDate.getDate()}`);
}


prevDay(2016, 9, 30);
prevDay(2015, 5, 10);