import { getNotifications, addNotification } from '../backend/notificationService';
import { query } from '../backend/db';

jest.mock('../backend/db', () => ({
  query: jest.fn()
}));

describe('notificationService', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should get all notifications', async () => {
    query.mockResolvedValueOnce({ rows: [{ id: 1, message: 'Arrakis Dune Desert Planet' }] });
    const notifications = await getNotifications();
    expect(notifications).toBeTruthy();
  });

  test('should add a new notification', async () => {
    const newNotification = {
      volunteer_id: 1,
      message: 'The spice must flow'
    };
    query.mockResolvedValueOnce({ rows: [{ id: 1, message: 'The spice must flow' }] });
    const notification = await addNotification(newNotification);
    expect(notification).toBeTruthy();
  });
});
