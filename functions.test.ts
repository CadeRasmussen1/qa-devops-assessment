const {shuffleArray} = require('./utils')


const arr = [1,2,3,4,5]


describe('shuffleArray should', () => {
    test("shuffle array should return array", () => {
        expect(Array.isArray(shuffleArray(arr))).toBe(true);
    });

    it('return an array with the same length as arr', () => {
        expect(shuffleArray(arr)).toHaveLength(5)
    });

    test('has the arr been shuffled', () => {
        let result = shuffleArray(arr)
        expect(shuffleArray(arr)).not.toEqual(arr.join())
    })
})