function Solve(input){
    let cities = {};

    for (const line of input) {
        let[city, population] = line.split(' <-> ');

        if (!cities[city]) {
            cities[city] = 0;
        }

        cities[city] += Number(population);
    }

    for (const town in cities) {
        console.log(`${town} : ${cities[town]}`);
    }
}
