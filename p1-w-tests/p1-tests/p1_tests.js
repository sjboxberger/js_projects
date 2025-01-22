const assert = require('assert');

describe("Math", () => {
    describe('.max', () => {
        it('returns the number with the highest value', () =>{
            assert.ok(Math.max(3, 5, 19) === 19);
        })
    })
})