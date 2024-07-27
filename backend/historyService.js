import { query } from './db';

export const addVolunteerHistory = async (volunteerId, eventId, status) => {
  const result = await query(
    'INSERT INTO volunteer_history (volunteer_id, event_id, participation_status) VALUES ($1, $2, $3) RETURNING *',
    [volunteerId, eventId, status]
  );
  return result.rows[0];
};
