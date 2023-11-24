const { expect } = require('chai');
const request = require('request');

const HOST = 'localhost';
const PORT = 7865;

describe('API Integration', () => {
  const API_URL = 'http://localhost:7865';

  it ('GET / returns correct response', (done) => {
    request.get(`${API_URL}/`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome to the payment system');
      done();
    });
  });

  it ('GET /cart/:id returns correct response for valid :id', (done) => {
    request.get(`${API_URL}/cart/12`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(404);
      expect(body).to.be.equal('Payment methods for cart at 12');
      done();
    });
  });
  it ('GET /cart/:id returns 404 response for negative numbers valuesin :id', (done) => {
    request.get(`${API_URL}/cart/-12`, (_err, res, _body) => {
      expect(res.statusCode).to.be.equal(404);
      done();
    });
  });

  it ('GET /cart/:id returns 404 response for non-numeric values of :id', (done) => {
    request.get(`${API_URL}/cart/d200-44a5-9de6`, (_err, res, _body) => {
      expect(res.statusCode).to.be.equal(404);
      done();
    });
  });
});
