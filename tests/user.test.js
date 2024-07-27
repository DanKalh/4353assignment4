import request from 'supertest';
import { query } from '../../backend/db';
import userService from '../../backend/userService';

jest.mock('../../backend/db', () => ({
  query: jest.fn()
}));

jest.mock('../../backend/userService', () => ({
  getUsers: jest.fn(),
  addUser: jest.fn()
}));

describe('User API', () => {
  test('should get all users', async () => {
    userService.getUsers.mockResolvedValueOnce([{ id: 1, email: 'muad.dib@dune.com' }]);
    const res = await request('http://localhost:3000').get('/api/users');
    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBeGreaterThan(0);
  });

  test('should create a new user', async () => {
    const newUser = {
      email: 'lisan@dune.com',
      password: 'password123',
      full_name: 'Lisan Al Gaib',
      address1: '123 Arrakis Desert',
      city: 'Dune City',
      state: 'CA',
      zip_code: '12345',
      skills: ['leadership', 'strategic thinking'],
      preferences: 'Test Preferences',
      availability: ['2024-01-01']
    };
    userService.addUser.mockResolvedValueOnce(newUser);
    const res = await request('http://localhost:3000').post('/api/users').send(newUser);
    expect(res.statusCode).toBe(201);
  });
});
