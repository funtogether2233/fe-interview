/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  // 动态规划
  // const n = height.length;
  // if (n == 0) {
  //     return 0;
  // }
  // // leftMax
  // const leftMax = new Array(n).fill(0);
  // leftMax[0] = height[0];
  // for (let i = 1; i < n; ++i) {
  //     leftMax[i] = Math.max(leftMax[i - 1], height[i]);
  // }
  // // rightMax
  // const rightMax = new Array(n).fill(0);
  // rightMax[n - 1] = height[n - 1];
  // for (let i = n - 2; i >= 0; --i) {
  //     rightMax[i] = Math.max(rightMax[i + 1], height[i]);
  // }
  // // ans
  // let ans = 0;
  // for (let i = 0; i < n; ++i) {
  //     ans += Math.min(leftMax[i], rightMax[i]) - height[i];
  // }
  // return ans;

  // 单调栈
  // let ans = 0;
  // const stack = [];
  // const n = height.length;
  // for (let i = 0; i < n; ++i) {
  //     while (stack.length && height[i] > height[stack[stack.length - 1]]) {
  //         const top = stack.pop();
  //         if (stack.length) {
  //             const left = stack[stack.length - 1],
  //                   currWidth = i - left - 1,
  //                   currHeight = Math.min(height[left], height[i]) - height[top];
  //             ans += currWidth * currHeight;
  //         }
  //     }
  //     stack.push(i);
  // }
  // return ans;

  // 双指针
  let ans = 0,
    left = 0,
    right = height.length - 1,
    leftMax = 0,
    rightMax = 0;
  while (left < right) {
    leftMax = Math.max(leftMax, height[left]);
    rightMax = Math.max(rightMax, height[right]);
    if (height[left] < height[right]) {
      ans += leftMax - height[left];
      ++left;
    } else {
      ans += rightMax - height[right];
      --right;
    }
  }
  return ans;
};
