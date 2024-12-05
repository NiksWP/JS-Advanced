function cityTaxes(name, population, treasury){
    let city = {
        name: name,
        population,
        treasury,
        taxRate: 10,
        collectTaxes(){
             treasury += population * taxRate;
        },
        applyGrowth(percentage){
            population += population * (percentage / 100)
        },
        applyRecession(percentage){
            population -= population * (percentage / 100)
        }
    }
    return city;
}

const city =

cityTaxes('Tortuga',

7000,

15000);

console.log(city);
