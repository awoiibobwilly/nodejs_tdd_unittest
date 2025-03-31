//The Function that is invoked when for Mulplication
function multiplyall(a, b) {
    return a * b;
}

// Testing with Mocha and Chai
const assert = require('assert');
const multiply = require('../test.js');

describe('The First Sets of Multiplication Function', () => {
    it('Should return 1, when we multiply(1, 1)', () => {
        assert.strictEqual(multiplyall(1, 1), 1);
    });
    it('Should return -1, when we multiply(-1, 1)', () => {
        assert.strictEqual(multiplyall(-1, 1), -1);
    });
    it('Should return 1, when we multiply(-1, -1)', () => {
        assert.strictEqual(multiplyall(-1, -1), 1);
    })
});


describe('The Second Sets of Multiplication Function', () => {
    it('Should return 4, when we multiply(2, 2)', () => {
        assert.strictEqual(multiplyall(2, 2), 4);
    });
    it('Should return -4, when we multiply(-2, 2)', () => {
        assert.strictEqual(multiplyall(-2, 2), -4);
    });
    it('Should return 4, when we multiply(-2, -2)', () => {
        assert.strictEqual(multiplyall(-2, -2), 4);
    })
});