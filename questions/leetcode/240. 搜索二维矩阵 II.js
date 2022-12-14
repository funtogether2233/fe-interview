/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  // 遍历
  // const row = matrix.length, col = matrix[0].length;
  // for(let i = 0; i < row; i++){
  //     for(let j = 0; j < col && matrix[i][j] <= target; j++){
  //         if(matrix[i][j] === target){
  //             return true;
  //         }
  //     }
  // }
  // return false;

  // 二分
  // const search = (nums, target) => {
  //     let low = 0, high = nums.length - 1;
  //     while (low <= high) {
  //         const mid = Math.floor((high - low) / 2) + low;
  //         const num = nums[mid];
  //         if (num === target) {
  //             return mid;
  //         } else if (num > target) {
  //             high = mid - 1;
  //         } else {
  //             low = mid + 1;
  //         }
  //     }
  //     return -1;
  // }
  // for (const row of matrix) {
  //     const index = search(row, target);
  //     if (index >= 0) {
  //         return true;
  //     }
  // }
  // return false;

  // Z型查找
  const m = matrix.length,
    n = matrix[0].length;
  let x = 0,
    y = n - 1;
  while (x < m && y >= 0) {
    if (matrix[x][y] === target) {
      return true;
    }
    if (matrix[x][y] > target) {
      --y;
    } else {
      ++x;
    }
  }
  return false;
};
