const {
    findMean,
    findMedian,
    findMode,
} = require('./helper_function')


describe('#findMean', function(){
    it('finds the average of the numbers', function(){
        expect(findMean([1,2,3,4,5])).toEqual(3)
    })
})

describe('#findMedian', function(){
    it('finds the middle of the numbers', function(){
        expect(findMedian([1,2,3,4,5])).toEqual(3)
    })
})

describe('#findMode', function(){
    it('finds the average of the numbers', function(){
        expect(findMode([1,2,3,3,3])).toEqual(3)
    })
})