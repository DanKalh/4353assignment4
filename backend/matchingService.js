// backend/matchingService.js
import pool from './db';

const matchVolunteerToEvent = async (volunteerId, eventId) => {
  const result = await pool.query(
    'INSERT INTO volunteer_history (volunteer_id, event_id) VALUES ($1, $2) RETURNING *',
    [volunteerId, eventId]
  );
  return result.rows[0];
};

export { matchVolunteerToEvent };

// backend/historyService.js
import pool from './db';

const addVolunteerHistory = async (volunteerId, eventId, status) => {
  const result = await pool.query(
    'INSERT INTO volunteer_history (volunteer_id, event_id, participation_status) VALUES ($1, $2, $3) RETURNING *',
    [volunteerId, eventId, status]
  );
  return result.rows[0];
};

export { addVolunteerHistory };
