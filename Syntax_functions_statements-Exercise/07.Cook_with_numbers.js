function Cook(...params){
    let number = Number(params[0]);
    
    for (let i = 1; i < params.length; i++) {
        const operation = params[i];
        
        if (operation === 'chop') {
            number /= 2;
        }
        else if(operation === 'dice'){
            number = Math.sqrt(number);
        }
        else if(operation === 'spice'){
            number++;
        }
        else if(operation === 'bake'){
            number *= 3;
        }
        else if (operation === 'fillet') {
            const toRemove = number * 0.2;
            number -= toRemove;
        }
        console.log(number);
    }
}
