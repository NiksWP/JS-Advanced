function Orbit(input = []){
    const height = input[0];
    const width = input[1];
    const x = input[2];
    const y = input[3];
  
    let matrix = Array(height).fill().map((row) => Array(width).fill(0))
  
  
    for (let row = 0; row < height; row++) {
      for (let col = 0; col < width; col++) {
        matrix[row][col] = Math.max(Math.abs(row - x), Math.abs(col - y)) + 1;
      }
    }
    return matrix.map(row => row.join(" ")).join("\n");
}
