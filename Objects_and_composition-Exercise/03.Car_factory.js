function CarFactory(input){
    let engines = {
      smallEngine: { power: 90, volume: 1800 },
      normalEngine: { power: 120, volume: 2400 },
      monsterEngine: { power: 200, volume: 3500 }
    }
  
    let coupes = {
     hatchback: { type: 'hatchback'},
     Coupe: { type: 'coupe',}
    }
    
    let smallestEngine = Object.values(engines).filter(x => x.power >= input.power).sort((a, b) => a.power - b.power)[0];
    let wantedCoupe = Object.values(coupes).find(x => x.type == input.carriage);
    wantedCoupe.color = input.color;
  
    delete input.power;
    delete input.carriage;
    delete input.color;
  
    input.engine = Object.assign({}, smallestEngine);
    input.carriage = Object.assign({}, wantedCoupe);
    input.wheels = Array(4).fill(input.wheelsize % 2 == 0 ? input.wheelsize - 1 : input.wheelsize);
  
    delete input.wheelsize;
  
    return input;
  }
