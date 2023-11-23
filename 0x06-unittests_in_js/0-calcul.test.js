const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('should round a and b and return their sum', () => {
    assert.Equal(calculateNumber(1, 3.5), 4);
    assert.Equal(calculateNumber(1.4, 2.5), 4);
  });
});