function Crew(worker){
    if (worker.dizziness) {
      let neededWater = 0.1 * worker.weight * worker.experience;
      worker.levelOfHydrated = neededWater;
      worker.dizziness = false;
    }
  
  
    return worker;
}
