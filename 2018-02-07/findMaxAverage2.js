// 643. Maximum Average Subarray I 128 points
// Given an array consisting of n integers, find the contiguous subarray of 
// given length k that has the maximum average value. And you need to output 
// the maximum average value.
//
// Example 1:
// Input: [1, 12, -5, -6, 50, 3], k = 4
// Output: 12.75
// Explanation: Maximum average is (12-5-6+50)/4 = 51/4 = 12.75
// Note:
// 1 <= k <= n <= 30,000.
// Elements of the given array will be in the range [-10,000, 10,000].

const findMaxAverage = (nums, k) => {
    const numsLength = nums.length;
    const averages = [];

    for (let i = 0; i < numsLength - k + 1; i++) {
        const slidedArr = nums.slice(i, i + k);
        let sum = 0;
        for (let j = 0; j < slidedArr.length; j++)
            sum += slidedArr[j];
        averages.push(sum/k);
    }

    return Math.max(...averages);
};

console.log(findMaxAverage([1, 12, -5, -6, 50, 3], 4)); // 12.5