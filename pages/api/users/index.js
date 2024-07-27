// pages/api/users/index.js
import userService from '../../../backend/userService';
import validate from '../../../middleware/validation';

export default async function handler(req, res) {
  console.log(`${req.method} request to /api/users`);

  if (req.method === 'GET') {
    const users = await userService.getUsers();
    console.log('GET users:', users);
    return res.status(200).json(users);
  }

  if (req.method === 'POST') {
    await validate(req, res);
    const user = req.body;
    const result = await userService.addUser(user);
    console.log('User added:', result);
    return res.status(201).json(result);
  }

  res.status(405).json({ message: 'Not allowed' });
}
