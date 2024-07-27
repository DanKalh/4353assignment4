import { getUsers, addUser } from '../backend/userService';
import { query } from '../backend/db';

jest.mock('../backend/db', () => ({
  query: jest.fn()
}));

describe('userService', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should get all users', async () => {
    query.mockResolvedValueOnce({ rows: [{ id: 1, email: 'muad.dib@dune.com' }] });
    const users = await getUsers();
    expect(users).toBeTruthy();
  });

  test('should add a new user', async () => {
    const newUser = {
      email: 'muad.dib@dune.com',
      password: 'Arrakis'
    };
    query.mockResolvedValueOnce({ rows: [{ id: 1, email: 'muad.dib@dune.com' }] });
    const user = await addUser(newUser);
    expect(user).toBeTruthy();
  });
});
