const app = require('../routes/accelerator');
const supertest = require('supertest');
const request = supertest(app);

const acceleratorData = require('./../db/acceleratorTable.json');

// Tests for the accelerator
describe('routes/accelerator', () => {
  it('Get accelerator table', () => {
    // Getting the accelerators endpoint
    const response = request.get('/accelerators');

    // Expecting the data to be the accelerators table
    expect(response.body).toBe(acceleratorData);
  });

  it('Get accelerators id', () => {
    const response = request.get('/accelerators/SOL');

    // Where the SOL accelerator goes to
    expect(response.body).toEqual(['RAN', 'PRX', 'SIR', 'ARC', 'ALD']);
  });
});
