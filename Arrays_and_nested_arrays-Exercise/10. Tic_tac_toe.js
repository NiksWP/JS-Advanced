function TicTac(input){
    let dashboard = [[false, false, false],
                  [false, false, false],
                  [false, false, false]]
                  
    let hasFreeFields = (matrix) => matrix.some(row => row.some(x => x === false))

    let player = 'X';
    let hasWon = false;
    
    for (let i = 0; i < input.length &&  hasFreeFields(dashboard);i++) {
        let[row, col] = input[i].split(' ').map(num => Number(num));

        if (!dashboard[row][col]) {
            dashboard[row][col] = player;
            checkForWinner(dashboard, player);
            if (checkForWinner(dashboard, player)){
                hasWon = true;
                break;
            }
            player = player === 'X' ? 'O' : 'X';
        }
        else{
            console.log("This place is already taken. Please choose another!");
        }
    }

    if (hasWon) {
        console.log(`Player ${player} wins!`);
    }
    else {
    console.log("The game ended! Nobody wins :(");
    }
    dashboard.forEach(line => {
        console.log(line.join('\t'));
    });

    function checkForWinner(currentBoard, sign){
        let isWinner = false;

        for (let i = 0; i < 3; i++) {
            if (currentBoard[i][0] === sign && currentBoard[i][1] === sign && currentBoard[i][2] === sign) {
              isWinner = true;
              break;
            }
            if (currentBoard[0][i] === sign && currentBoard[1][i] === sign && currentBoard[2][i] === sign) {
              isWinner = true;
              break;
            }
          }
          if (!isWinner) {
            if ((currentBoard[0][0] === sign && currentBoard[1][1] === sign && currentBoard[2][2] === sign) ||
              (currentBoard[2][0] === sign && currentBoard[1][1] === sign && currentBoard[0][2] === sign)) {
              isWinner = true;
            }
          }
          return isWinner;
    }
}
