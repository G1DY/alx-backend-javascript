const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('should round a and b and return their sum', () => {
    assert.strictEqual(calculateNumber(0.5, 2.5), 4);
    assert.strictEqual(calculateNumber(1.4, 2.7), 4);
    assert.strictEqual(calculateNumber(1, 3), 4);
    assert.strictEqual(calculateNumber(1, 2.7), 4);
  });
  it('should fail if a or b is not a number', () => {
    try {
      calculateNumber('not a number', 2.5);
      assert.fail('Expected calculateNumber to throw an error for invalid argument');
    } catch (error) {
      assert.strictEqual(error.name, 'AssertionError');
    }

    try {
      calculateNumber(2.5, 'not a number');
      assert.fail('Expected calculateNumber to throw an error for invalid argument');
    } catch (error) {
      assert.strictEqual(error.name, 'AssertionError');
    }

    try {
      calculateNumber('not a number', 'not number');
      assert.fail('Expected calculateNumber to throw an error for invalid arguments');
    } catch (error) {
      assert.strictEqual(error.name, 'AssertionError');
    }
  });
});
