import { strictEqual, fail } from 'assert';
import calculateNumber from './0-calcul';

describe('calculateNumber', () => {
  it('should round a and b and return their sum', () => {
    strictEqual(calculateNumber(0.5, 2.5), 4);
    strictEqual(calculateNumber(1.4, 2.7), 4);
  });
  it('should fail if a or b is not a number', () => {
    try {
      calculateNumber('not a number', 2.5);
      fail('Expected calculateNumber to throw an error for invalid argument');
    } catch (error) {
      strictEqual(error.name, 'AssertionError');
    }

    try {
      calculateNumber(2.5, 'not a number');
      fail('Expected calculateNumber to throw an error for invalid argument');
    } catch (error) {
      strictEqual(error.name, 'AssertionError');
    }

    try {
      calculateNumber('not a number', 'not number');
      fail('Expected calculateNumber to throw an error for invalid arguments');
    } catch (error) {
      strictEqual(error.name, 'AssertionError');
    }
  });
});
