import { config } from 'dotenv';
config({ path: '.env.test' });

import pool from '../backend/db';

beforeAll(async () => {
  // Drop and recreate tables if necessary
  await pool.query('TRUNCATE TABLE user_profile, user_credentials, event_details, volunteer_history, states, notifications RESTART IDENTITY CASCADE');

  // Insert initial data
  await pool.query(`
    INSERT INTO user_credentials (email, password) VALUES ('john.doe@example.com', 'password');
    INSERT INTO states (code, name) VALUES ('IL', 'Illinois');
  `);
});

beforeEach(async () => {
  // Clear data before each test
  await pool.query('TRUNCATE TABLE user_profile, event_details, volunteer_history, notifications RESTART IDENTITY CASCADE');
});

afterAll(async () => {
  // Close the database connection
  await pool.end();
});
