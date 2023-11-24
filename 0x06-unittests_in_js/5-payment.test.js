const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', function() {
  describe('#pys Utils.calculateNumber()', function() {
    let spy;
    beforeEach(function() {
      spy = sinon.spy(console, 'log');
    });
    afterEach(function() {
      spy.restore();
    });
    it('should return 120 when called by sendPaymentRequestToApi', function() {
      sendPaymentRequestToApi(100, 20);
      expect(spy.calledWith('The total is: 120')).to.equal(true);
      expect(spy.calledOnce).to.equal(true);
    });
    it('should return 20 when called by sendPaymentRequestToApi', function() {
      sendPaymentRequestToApi(100, 20);
      expect(spy.calledWith('The total is: 20')).to.equal(true);
      expect(spy.calledOnce).to.equal(true);
    });
  });
});
