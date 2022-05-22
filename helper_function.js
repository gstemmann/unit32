function findMean(nums) {
    let meanOfNums = nums.length / 2
    console.log(meanOfNums);
}
findMean([1,2,3,4,5])

function findMedian(nums) {
    let firstIndex = nums[0]
    let lastIndex = nums.length - 1

    while (firstindex <= lastIndex) {
        let median = Math.floor(lastIndex - firstIndex) / 2

       console.log(median)

    }
}
findMedian([1,2,3,4,5,6])