/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */

function countMines(arr, k, l, rows, colomns) {
  let mines = 0;
  for (let i = -1; i <= 1; i++) {
    for (let j = -1; j <= 1; j++) {
      if (k + i >= 0 && k + i < rows && l + j >= 0 && l + j < colomns) {
        if (i !== 0 || j !== 0) {
          if (arr[k + i][l + j]) {
            mines++;
          }
        }
      }
    }
  }
  return mines;
}

function minesweeper(matrix) {
  const matrixResult = [];
  const rows = matrix.length;
  const colomns = matrix[0].length;

  for (let i = 0; i < rows; i++) {
    matrixResult.push([]);
    for (let j = 0; j < colomns; j++) {
      matrixResult[i][j] = countMines(matrix, i, j, rows, colomns);
    }
  }
  return matrixResult;
}

module.exports = minesweeper;
