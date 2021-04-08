/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let temp = 0;
  let index = 0;
  const array = arr;

  for (let i = 0; i < array.length - 1; i++) {
    index = 0;
    temp = array[index];
    for (let j = 0; j < array.length - 1; j++) {
      if (array[j + 1] > -1) {
        if (temp > array[j + 1]) {
          array[index] = array[j + 1];
          array[j + 1] = temp;
          index = j + 1;
        } else {
          temp = array[j + 1];
          index = j + 1;
        }
      }
    }
  }
  return array;
}

module.exports = sortByHeight;
