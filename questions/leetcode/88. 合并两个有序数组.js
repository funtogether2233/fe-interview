/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  //   (m -= 1), (n -= 1);
  //   for (let i = m + n + 1; i >= 0; i--) {
  //     if (m >= 0 && n >= 0) {
  //       nums1[i] = nums1[m] > nums2[n] ? nums1[m--] : nums2[n--];
  //     } else if (n >= 0) {
  //       for (let j = 0; j <= n; j++) {
  //         nums1[j] = nums2[j];
  //       }
  //       break;
  //     } else {
  //       break;
  //     }
  //   }
  //   return nums1;
  // 第二次写，没写出来，nums1倒着装入就可以了，又抄了一遍
  --m, --n;
  for (let i = m + n + 1; i >= 0; --i) {
    if (m >= 0 && n >= 0) {
      nums1[i] = nums1[m] > nums2[n] ? nums1[m--] : nums2[n--];
    } else if (n >= 0) {
      for (let j = 0; j <= n; ++j) {
        nums1[j] = nums2[j];
      }
      break;
    } else {
      break;
    }
  }
  return nums1;
};
