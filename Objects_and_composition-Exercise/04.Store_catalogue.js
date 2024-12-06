function Solve2(input = []){
    const store = {};
    
    for (const kvp of input) {
        let[key, value] = kvp.split(' : ');
        let ch = key.charAt(0);

        if (!store.hasOwnProperty(ch)) {
          store[ch] = {}; 
        }
        store[ch][key] = value; 
      }
      let sortedArr= Object.entries(store).sort((arr1, arr2) => arr1[0].localeCompare(arr2[0]));
      for (const [key, products] of sortedArr) {
        console.log(key);
        Object.entries(products).sort((a, b) => a[0].localeCompare(b[0])).forEach(element => {
          console.log(`${element[0]}: ${element[1]}`);
        });
      }
}

Solve2(['Appricot : 20.4',
  'Fridge : 1500',
  'TV : 1499',
  'Deodorant : 10',
  'Boiler : 300',
  'Apple : 1.25',
  'Anti-Bug Spray : 15',
  'T-Shirt : 10']);
