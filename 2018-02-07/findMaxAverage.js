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

// Pulls all contiguous subarrays starting at the
// first index and ending at the last one. 
// Stores each subarray of length k into a nested
// array which is returned.
// Example: 
// Input: [1,12,-5,-6,50,3], k = 4
// Output: [[1, 12, -5, -6], [12, -5, -6, 50], [-5, -6, 50, 3]]
const pullContiguousSubarrays = (nums, k) => {
    const numsLength = nums.length;
    const averageStore = [];

    for (let i = 0; i < numsLength - k + 1; i++) {
        averageStore.push(nums.slice(i, i + k));
    }
    return averageStore;
};

// Simply finds the average of all elements within array.
// Example:
// Input: [12,-5,-6,50]
// Output: 12.5
const average = (array) => {
    return array.reduce((acc, cur) => acc + cur, 0)/array.length;
};

// The driver function for this problem.
// Example:
// Input: [1,12,-5,-6,50,3], k = 4
// Output: 12.5
const findMaxAverage = (nums, k) => {
    if (k > nums.length)
        return 'Length of `nums` param is too small compared to value of `k`.'
    const averageStore = pullContiguousSubarrays(nums, k);
    const averages = averageStore.map(a => average(a));
    return Math.max(...averages);
};

console.log(findMaxAverage([1, 12, -5, -6, 50, 3], 4)); // 12.5