function TimeToWalk(steps, size, speed){
    let distance = steps * size;
    let speedMeterPerSecond = speed * 1000/3600;
    let timeinSeconds = distance / speedMeterPerSecond;
    let restTime = Math.floor(distance / 500) * 60;

    timeinSeconds += restTime;

    let hours = Math.floor(timeinSeconds / 3600);
    let minutes = Math.floor(timeinSeconds / 60);
    let seconds = Math.floor(timeinSeconds % 60);

    console.log(`${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`);
}

TimeToWalk(4000, 0.60, 5);
