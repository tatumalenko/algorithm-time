# 643. Maximum Average Subarray I 128 points
# Given an array consisting of n integers, find the contiguous subarray of
# given length k that has the maximum average value. And you need to output
# the maximum average value.
#
# Example 1:
# Input: [1, 12, -5, -6, 50, 3], k = 4
# Output: 12.75
# Explanation: Maximum average is (12-5-6+50)/4 = 51/4 = 12.75
# Note:
# 1 <= k <= n <= 30,000.
# Elements of the given array will be in the range [-10,000, 10,000].


def find_max_average(nums, k):
    return max([sum(nums[index:index+k])/k for index in range(0, len(nums) - k + 1)])


def main():
    print(find_max_average([1, 12, -5, -6, 50, 3], 4))


if __name__ == '__main__':
    main()
