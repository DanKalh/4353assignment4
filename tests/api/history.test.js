import request from 'supertest';
import { query } from '../../backend/db';
import historyService from '../../backend/historyService';

jest.mock('../../backend/db', () => ({
  query: jest.fn()
}));

jest.mock('../../backend/historyService', () => ({
  addVolunteerHistory: jest.fn()
}));

describe('History API', () => {
  test('should get all history records', async () => {
    historyService.addVolunteerHistory.mockResolvedValueOnce([{ id: 1, volunteer_id: 1, event_id: 1, participation_status: 'attended' }]);
    const res = await request('http://localhost:3000').get('/api/history');
    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBeGreaterThan(0);
  });

  test('should create a new history record', async () => {
    const newRecord = {
      volunteer_id: 1,
      event_id: 1,
      participation_status: 'attended'
    };
    historyService.addVolunteerHistory.mockResolvedValueOnce(newRecord);
    const res = await request('http://localhost:3000').post('/api/history').send(newRecord);
    expect(res.statusCode).toBe(201);
  });
});
