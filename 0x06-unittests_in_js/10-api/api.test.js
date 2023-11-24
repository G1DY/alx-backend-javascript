const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('./api'); // Update the path accordingly

const { expect } = chai;

chai.use(chaiHttp);

const HOST = 'http://localhost:7865';

describe('Express app test suite', function () {
  describe('/', function () {
    it('should return home page', async function () {
      const response = await chai.request(HOST).get('/');
      expect(response).to.have.status(200);
      expect(response.text).to.equal('Welcome to the payment system');
    });
  });

  describe('/cart:id', function () {
    it('should return cart page with cart id', async function () {
      const response = await chai.request(HOST).get('/cart/12');
      expect(response).to.have.status(200);
      expect(response.text).to.equal('Payment methods for cart 12');
    });

    it('should return an error if :id parameter is not a number', async function () {
      const response = await chai.request(HOST).get('/cart/gi');
      expect(response).to.have.status(404);
    });
  });

  describe('/available_payment', function () {
    it('should get the available payment method', async function () {
      const response = await chai.request(HOST).get('/available_payments');
      const expectedResponse = {
        payment_methods: {
          credit_cards: true,
          paypal: false,
        },
      };
      expect(response).to.have.status(200);
      expect(response.body).to.deep.equal(expectedResponse);
    });
  });

  describe('/login', function () {
    it('should get the available payment method', async function () {
      const userName = 'Tester';
      const response = await chai.request(HOST).post('/login').send({ userName });
      expect(response).to.have.status(200);
      expect(response.text).to.equal(`Welcome ${userName}`);
    });
  });
});
