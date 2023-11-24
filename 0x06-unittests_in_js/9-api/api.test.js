const { expect } = require('chai');
const request = require('request');

const HOST = 'localhost';
const PORT = 7865;

describe('API Integration', () => {
  const API_URL = 'http://localhost:7865';

  it('should return home page', function(done) {
    request.get(`http://${HOST}:${PORT}/`, (error, res, body) => {
      if (error) expect(res.statusCode).to.not.equal(200);
      expect(res.statusCode).to.equal(200);
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });

  it ('GET /cart/:id returns correct response for valid :id', (done) => {
    request.get(`${API_URL}/cart/12`, (_err, res, _body) => {
      expect(res.statusCode).to.be.equal(404);
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
