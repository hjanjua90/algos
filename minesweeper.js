// Minesweeper game
// function minesweeper(matrix){
//     const board = []
//     for (let x =0; x< matrix.length; x++){
//         board.push([])
//         for(let y =0; y < matrix[0].length; y++){
//         }
//     }
//     console.log(board)
//     return board
// }

/*
In the popular Minesweeper game you have a board with 
some mines and those cells that don't contain a mine have
 a number in it that indicates the total number of mines 
 in the neighboring cells. Starting off with some arrangement
  of mines we want to create a Minesweeper game setup.
Example
For
matrix = [[true, false, false],
          [false, true, false],
          [false, false, false]]
the output should be
minesweeper(matrix) = [[1, 2, 1],
                       [2, 1, 1],
                       [1, 1, 1]]
*/

    function minesweeper(matrix) {
        const directions = [
        [ 1,-1], [ 1, 0], [ 1, 1],
        [ 0,-1],          [ 0, 1],
        [-1,-1], [-1, 0], [-1, 1]
        ];
    return matrix.map((row, y) => row.map((col, x) => directions.reduce((count, i) => count += !!(matrix[y + i[0]] && matrix[y + i[0]][x + i[1]]), 0)));
    }
    
