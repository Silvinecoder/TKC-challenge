const app = require('../routes/distance');
const supertest = require('supertest');
const request = supertest(app);

// Tests for the accelerator
describe('routes/distance', () => {
  it('Get distance endpoint', () => {
    const response = request.get('/20?passengers=2&parking=0');

    // Expecting the data to be the same as whats printing out in the endpoint
    expect(response.body).toBe({ totalPrice: '3.6', vehicle: 'htc' });
  });
});
