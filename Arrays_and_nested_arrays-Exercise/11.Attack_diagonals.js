function DiagonalAttack(input){
    let matrix = input.map(row => row.split(' ').map(Number));
    let firstDiagonal = 0;
    let secondDiagonal = 0;
  
    for (let i = 0; i < matrix.length; i++) {
      firstDiagonal += matrix[i][i];
      secondDiagonal += matrix[i][ matrix.length - 1 - i];
    }
    if (firstDiagonal == secondDiagonal) {
      PrintMatrix(matrix) 
    }
  
    function PrintMatrix(matrix){
      if (matrix.length % 2 !== 0) {
        for (let i = 0; i < Math.floor(matrix.length / 2); i++) {
          for (let j = 1 + i; j < matrix.length - i - 1; j++) {
            matrix[i][j] = firstDiagonal;
            matrix[matrix.length - 1 - i][j] = firstDiagonal
          } 
        }
  
        for (let i = 1; i < Math.ceil(matrix.length / 2); i++) {
          for (let j = 0; j < Math.floor(matrix.length / 2) - Math.floor(matrix.length / 2) + i; j++) {
            matrix[i][j] = firstDiagonal;
            matrix[i][matrix.length - 1 - j] = firstDiagonal;
          }
        }
        let minus = 1;
        for (let i = Math.ceil(matrix.length / 2); i < matrix.length - 1; i++) {
          for (let j = 0; j < Math.floor(matrix.length / 2) - minus; j++) {
            matrix[i][j] = firstDiagonal; 
            matrix[i][matrix.length - 1 - j] = firstDiagonal;
          }
          minus++;
        }
  
      }
      else{
        for (let i = 0; i < (matrix.length / 2) - 1; i++) {
          for (let j = 1 + i; j < matrix.length - i - 1; j++) {
            matrix[i][j] = firstDiagonal;
            matrix[matrix.length - 1 - i][j] = firstDiagonal
          } 
        }
  
        for (let i = 1; i < (matrix.length / 2); i++) {
          for (let j = 0; j < i; j++) {
            matrix[i][j] = firstDiagonal;
            matrix[i][matrix.length - 1 - j] = firstDiagonal;
          }
        }
        let minus = 1;
        for (let i = matrix.length / 2; i < matrix.length - 1; i++) {
          for (let j = 0; j < (matrix.length / 2) - minus; j++) {
            matrix[i][j] = firstDiagonal; 
            matrix[i][matrix.length - 1 - j] = firstDiagonal;
          }
          minus++;
        }
      }
    }
    matrix.forEach(row => {
      console.log(row.join(' '))
    });
}
  