const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('should round a and b and return their sum', () => {
    assert.strictEqual(calculateNumber(0.5, 2.5), 4);
    assert.strictEqual(calculateNumber(1.4, 2.7), 4);
  });
  it('should fail if a or b is not a number', () => {
    assert.throws(() => 
      calculateNumber('not a number', 2.5), TypeError, 'a is not a number');
    assert.throws(() => 
      calculateNumber(2.5, 'not a number'), TypeError, 'b is not a number');
    assert.throws(() => 
      calculateNumber('not a number', 'not number'), TypeError, 'a and b are not numbers');
  });
});
