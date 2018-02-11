# 739. Daily Temperatures
# Given a list of daily temperatures, produce a list that, for each day in
# the input, tells you how many days you would have to wait until a warmer
# temperature. If there is no future day for which this is possible, put 0 instead.
# For example, given the list temperatures = [73, 74, 75, 71, 69, 72, 76, 73],
# your output should be[1, 1, 4, 2, 1, 1, 0, 0].
# Note: The length of temperatures will be in the range[1, 30000]. Each
# temperature will be an integer in the range[30, 100].


def daily_temperatures(nums):
    def predicate(index, value):
        counter = 1
        for i in range(index, len(nums) - 1):
            if nums[i + 1] > nums[i]:
                return counter
            elif i == len(nums - 1):
                return 0
            else:
                counter += 1

    return predicate(3, 71)
    # return map(predicate, enumerate(nums))


def main():
    print(daily_temperatures([73, 74, 75, 71, 69, 72, 76, 73]))


if __name__ == '__main__':
    main()
