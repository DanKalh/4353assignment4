// tests/auth.test.js
const authService = require('../backend/authService').default;

describe('authService', () => {
  test('should register a new user', async () => {
    const result = await authService.register('test@example.com', 'password123');
    expect(result).toBeTruthy();
  });

  test('should login an existing user', async () => {
    const result = await authService.login('test@example.com', 'password123');
    expect(result).toBeTruthy();
  });
});
