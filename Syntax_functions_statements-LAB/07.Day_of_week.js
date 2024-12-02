function PrintDay(day){
    const daysOfWeek = ["Monday", "Tueday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    const dayIndex = daysOfWeek.indexOf(day) + 1;

    if (!dayIndex) {
        return "error";
    }
    return dayIndex;
}

console.log(PrintDay("Monday"));
