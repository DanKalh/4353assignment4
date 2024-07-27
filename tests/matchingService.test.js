import { matchVolunteersToEvents } from '../backend/matchingService';
import { query } from '../backend/db';

jest.mock('../backend/db', () => ({
  query: jest.fn()
}));

describe('matchingService', () => {
  test('should match volunteers to events', async () => {
    // Mock implementation of your matching logic
    const result = await matchVolunteersToEvents();
    expect(result).toBeTruthy();
  });
});
