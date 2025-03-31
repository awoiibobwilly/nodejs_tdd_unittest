function multiplyall(a, b) {
    return a * b;
}

const assert = require('assert');
const multiply = require('../test.js'); // Ensure correct path

describe('Multiplication Function', () => {
    it('should return 1 for multiply(1, 1)', () => {
        assert.strictEqual(multiplyall(1, 1), 8);
    })
});