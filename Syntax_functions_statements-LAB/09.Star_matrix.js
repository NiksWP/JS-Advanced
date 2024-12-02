function StarMatrix(size){
    for (let index = 0; index < size; index++) {
        console.log("* ".repeat(size).trimEnd());
    }
}

StarMatrix(5);
