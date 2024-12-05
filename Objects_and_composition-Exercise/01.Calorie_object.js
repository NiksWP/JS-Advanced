function Calories(input = []){
    let foods = {};
  
    for (let i = 0; i < input.length; i+=2) {
      foods[input[i]] = input[i + 1]
    }
    return foods;
  }
  
  console.log(Calories(['Potato', '93', 'Skyr', '63',
  
    'Cucumber', '18', 'Milk', '42']));
  