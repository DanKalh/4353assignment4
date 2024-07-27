import { query } from './db';
import bcrypt from 'bcrypt';

export const register = async (email, password) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  const result = await query(
    'INSERT INTO user_credentials (email, password) VALUES ($1, $2) RETURNING *',
    [email, hashedPassword]
  );
  return result.rows[0];
};

export const login = async (email, password) => {
  const result = await query('SELECT * FROM user_credentials WHERE email = $1', [email]);
  const user = result.rows[0];
  if (user && await bcrypt.compare(password, user.password)) {
    return user;
  }
  return null;
};
