// tests/api/matching.test.js
const request = require('supertest');
const handler = require('../../pages/api/matching/index');

describe('Matching API', () => {
  test('should match a volunteer to an event', async () => {
    const match = { volunteer_id: 1, event_id: 1 };
    const res = await request(handler).post('/api/matching').send(match);
    expect(res.statusCode).toBe(201);
  });
});
