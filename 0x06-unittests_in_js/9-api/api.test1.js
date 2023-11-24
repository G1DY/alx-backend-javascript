const { expect } = require('chai');
const request = require('request');

const HOST = 'localhost';
const PORT = 7865;
const API_URL = `http://${HOST}:${PORT}`;

describe('API Integration', () => {
  it('GET / returns correct response', (done) => {
    request.get(`${API_URL}/`, (err, res, body) => {
      if (err) {
        done(err);
        return;
      }
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome to the payment system');
      done();
    });
  });

  it('GET /cart/:id returns correct response for valid :id', (done) => {
    request.get(`${API_URL}/cart/12`, (err, res, body) => {
      if (err) {
        done(err);
        return;
      }
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Payment methods for cart 12');
      done();
    });
  });

  it('GET /cart/:id returns 404 response for negative numbers values in :id', (done) => {
    request.get(`${API_URL}/cart/-12`, (err, res) => {
      if (err) {
        done(err);
        return;
      }
      expect(res.statusCode).to.be.equal(404);
      done();
    });
  });

  it('GET /cart/:id returns 404 response for non-numeric values of :id', (done) => {
    request.get(`${API_URL}/cart/d200-44a5-9de6`, (err, res) => {
      if (err) {
        done(err);
        return;
      }
      expect(res.statusCode).to.be.equal(404);
      done();
    });
  });
});