function getLastDayOfMonth(year, month) {
    return new Date(year, month, 0).getDate();
}

console.log(getLastDayOfMonth(2021, 2));