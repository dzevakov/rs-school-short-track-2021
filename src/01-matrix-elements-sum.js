/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  const langthX = matrix[0].length;
  const langthY = matrix.length;

  let result = 0;
  for (let x = 0; x < langthX; x++) {
    for (let y = 0; y < langthY; y++) {
      if (matrix[y][x] === 0) {
        break;
      } else {
        result += matrix[y][x];
      }
    }
  }
  return result;
}

module.exports = getMatrixElementsSum;
