function RoadRadar(speed, area){
    const limits = {
        'motorway': 130,
        'interstate': 90,
        'city': 50,
        'residential': 20,
    }
    const limit = limits[area];

    if (limit == undefined) {
        return false;
    }

    if (limit >= speed) {
        return `Driving ${speed} km/h in a ${limit} zone`
    }

    const difference = speed - limit;

    let status;
    if (difference <= 20) {
        status = 'speeding';
    }
    else if(difference > 20 && difference <= 40){
        status = 'excessive speeding';
    }
    else if(difference > 40){
        status = 'reckless driving';
    }

    return `The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${status}`
}