// pages/api/events/index.js
import eventService from '../../../backend/eventService';
import validate from '../../../middleware/validation';

export default async function handler(req, res) {
  console.log(`${req.method} request to /api/events`);

  if (req.method === 'GET') {
    const events = await eventService.getEvents();
    console.log('GET events:', events);
    return res.status(200).json(events);
  }

  if (req.method === 'POST') {
    await validate(req, res);
    const event = req.body;
    const result = await eventService.addEvent(event);
    console.log('Event added:', result);
    return res.status(201).json(result);
  }

  res.status(405).json({ message: 'Not allowed' });
}
