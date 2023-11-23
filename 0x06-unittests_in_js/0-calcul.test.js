const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('should round a and b and return their sum', () => {
    assert.strictEqual(calculateNumber(0.5, 2.5), 4);
    assert.strictEqual(calculateNumber(1.4, 2.7), 4);
  });
});