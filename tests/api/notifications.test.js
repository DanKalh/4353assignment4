import request from 'supertest';
import { query } from '../../backend/db';
import notificationService from '../../backend/notificationService';

jest.mock('../../backend/db', () => ({
  query: jest.fn()
}));

jest.mock('../../backend/notificationService', () => ({
  getNotifications: jest.fn(),
  addNotification: jest.fn()
}));

describe('Notification API', () => {
  test('should get all notifications', async () => {
    notificationService.getNotifications.mockResolvedValueOnce([{ id: 1, message: 'Arrakis Dune Desert Planet' }]);
    const res = await request('http://localhost:3000').get('/api/notifications');
    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBeGreaterThan(0);
  });

  test('should create a new notification', async () => {
    const newNotification = {
      volunteer_id: 1,
      message: 'The spice must flow'
    };
    notificationService.addNotification.mockResolvedValueOnce(newNotification);
    const res = await request('http://localhost:3000').post('/api/notifications').send(newNotification);
    expect(res.statusCode).toBe(201);
  });
});
