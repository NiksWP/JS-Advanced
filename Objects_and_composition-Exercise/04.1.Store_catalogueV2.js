function Solve(input = []){
    let store = {};
  
    for (const kvp of input) {
      let[product, price] = kvp.split(' : ');
      store[product] = Number(price);
    }
  
    let sortArray = Object.entries(store).sort((a, b) => a[0].localeCompare(b[0]))
  
    let currentGroupChar = '';
    for (const el of sortArray) {
      let[key, value] = el;
      if (currentGroupChar != key[0]) {
        currentGroupChar = key[0];
        console.log(currentGroupChar);
      }
      console.log(`  ${key}: ${value}`)
    }
  }
  
  console.log(Solve(['Appricot : 20.4',
         'Fridge : 1500',
         'TV : 1499',
         'Deodorant : 10',
         'Boiler : 300',
         'Apple : 1.25',
         'Anti-Bug Spray : 15',
         'T-Shirt : 10']));
  