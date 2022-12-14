/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  //   // 滑动窗口
  //   // 哈希集合，记录每个字符是否出现过
  //   const occ = new Set(),
  //     n = s.length;
  //   // 右指针，初始值为 -1，相当于我们在字符串的左边界的左侧，还没有开始移动
  //   let rk = 0,
  //     ans = 0;
  //   for (let i = 0; i < n; ++i) {
  //     if (i != 0) {
  //       // 左指针向右移动一格，移除一个字符
  //       occ.delete(s[i - 1]);
  //     }
  //     while (rk < n && !occ.has(s[rk])) {
  //       // 不断地移动右指针
  //       occ.add(s[rk++]);
  //     }
  //     // 第 i 到 rk 个字符是一个极长的无重复字符子串
  //     ans = Math.max(ans, rk - i);
  //   }
  //   return ans;

  // 第二次写，没写出来，抄了一遍
  const occ = new Set(),
    n = s.length;
  let rk = 0,
    ans = 0;
  for (let i = 0; i < n; ++i) {
    if (i != 0) {
      occ.delete(s[i - 1]);
    }
    while (rk < n && !ooc.has(s[rk])) {
      occ.add(s[rk++]);
    }
    ans = Math.max(ans, rk - i);
  }
  return ans;
};
