# 747. Largest Number At Least Twice of Others
# In a given integer array nums, there is always exactly one largest element.
# Find whether the largest element in the array is at least twice as much as every other number in the array.
# If it is, return the index of the largest element, otherwise return -1.
#
# Example 1:
# Input: nums = [3, 6, 1, 0]
# Output: 1
# Explanation: 6 is the largest integer, and for every other number in the array x,
# 6 is more than twice as big as x.  The index of value 6 is 1, so we return 1.
#
# Example 2:
# Input: nums = [1, 2, 3, 4]
# Output: -1
# Explanation: 4 isn't at least as big as twice the value of 3, so we return -1.
#
# Note:
# nums will have a length in the range [1, 50].
# Every nums[i] will be an integer in the range [0, 99].


def dominant_index(arr):
    max_index1, max_value1 = max(enumerate(arr), key=lambda v: v[1])
    arr.pop(max_index1)
    max_value2 = max(arr)
    return max_index1 if max_value1 >= max_value2 * 2 else -1


def main():
    print(dominant_index([3, 6, 1, 0]))
    print(dominant_index([1, 2, 3, 4]))
    print(dominant_index([3, 6, 1, 0, 13]))


if __name__ == '__main__':
    main()
