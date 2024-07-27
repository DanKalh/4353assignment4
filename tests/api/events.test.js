import request from 'supertest';
import { query } from '../../backend/db';
import eventService from '../../backend/eventService';

jest.mock('../../backend/db', () => ({
  query: jest.fn()
}));

jest.mock('../../backend/eventService', () => ({
  getEvents: jest.fn(),
  addEvent: jest.fn()
}));

describe('Event API', () => {
  test('should get all events', async () => {
    eventService.getEvents.mockResolvedValueOnce([{ id: 1, event_name: 'Test Event' }]);
    const res = await request('http://localhost:3000').get('/api/events');
    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBeGreaterThan(0);
  });

  test('should create a new event', async () => {
    const newEvent = {
      event_name: 'Test Event',
      event_description: 'Description of test event',
      location: 'Test Location',
      required_skills: ['Skill1', 'Skill2'],
      urgency: 'high',
      event_date: '2024-01-01'
    };
    eventService.addEvent.mockResolvedValueOnce(newEvent);
    const res = await request('http://localhost:3000').post('/api/events').send(newEvent);
    expect(res.statusCode).toBe(201);
  });
});
