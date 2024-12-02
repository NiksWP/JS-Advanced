function EchoFunction(text){
    let sum = 0;
    text.split("").forEach(char => {
        sum++
    });
    console.log(sum);
    console.log(text);
}

EchoFunction("Niki is going to be great JS developer!");
