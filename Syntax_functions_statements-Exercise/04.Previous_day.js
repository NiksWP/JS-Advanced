function PreviousDay(year, month, day){
    let currentDate = new Date(year, month - 1, day);
    currentDate.setDate(currentDate.getDate() - 1)
    console.log(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate()}`);
}

PreviousDay(2020, 3, 1);
