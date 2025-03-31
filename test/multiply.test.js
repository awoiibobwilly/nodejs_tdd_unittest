// Testing with Mocha and Chai
const assert = require('assert');
const multiplyall = require('../test.js');

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

describe('The Third Sets of Multiplication Function', () => {
    it('Should return 9, when we multiply(3, 3)', () => {
        assert.strictEqual(multiplyall(3, 3), 9);
    });
    it('Should return -9, when we multiply(-3, 3)', () => {
        assert.strictEqual(multiplyall(-3, 3), -9);
    });
    it('Should return 9, when we multiply(-3, -3)', () => {
        assert.strictEqual(multiplyall(-3, -3), 9);
    })
});

describe('The Fourth Sets of Multiplication Function', () => {
    it('Should return 16, when we multiply(4, 4)', () => {
        assert.strictEqual(multiplyall(4, 4), 16);
    });
    it('Should return -16, when we multiply(-4, 4)', () => {
        assert.strictEqual(multiplyall(-4, 4), -16);
    });
    it('Should return 16, when we multiply(-4, -4)', () => {
        assert.strictEqual(multiplyall(-4, -4), 16);
    })
});

describe('The Fifth Sets of Multiplication Function', () => {
    it('Should return 23*32, when we multiply(23, 32)', () => {
        assert.strictEqual(multiplyall(23, 32), (23*32));
    });
    it('Should return -23*32, when we multiply(-23,3 2)', () => {
        assert.strictEqual(multiplyall(-23, 32), (-23*32));
    });
    it('Should return 23*32, when we multiply(-23, -32)', () => {
        assert.strictEqual(multiplyall(-23, -32), (-23*-32));
    })
});