import { Request, Response } from 'express';
import { Events } from '../models/events.model'; // Update the import statement
import mongoose, { Document, Schema } from 'mongoose'; // Import mongoose with Document and Schema

// Create a Mongoose schema based on the Events interface
const eventSchema = new Schema<Events & Document>({
  name: String,
  description: String,
  domain: String,
  start: String,
  end: String,
  venue: String,
  coordinator: String,
  status: String,
  registrationDeadline: String,
  club: String,
  participants: [String],
  creationDate: String,
});

// Create a Mongoose model based on the schema
const EventModel = mongoose.model<Events & Document>('Event', eventSchema);

// Create a new event
export const createEvent = async (req: Request, res: Response) => {
  try {
    const eventData: Events = req.body; // Use the Events interface
    const event = new EventModel(eventData); // Use the EventModel to create a new event
    const savedEvent = await event.save();
    res.status(201).json(savedEvent);
  } catch (error) {
    console.error('Error creating event:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Get all events
export const getAllEvents = async (req: Request, res: Response) => {
  try {
    const events = await EventModel.find();
    res.status(200).json(events);
  } catch (error) {
    console.error('Error fetching events:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Get a single event by ID
export const getEventById = async (req: Request, res: Response) => {
  const eventId = req.params.id;
  try {
    const event = await EventModel.findById(eventId);
    if (!event) {
      return res.status(404).json({ error: 'Event not found' });
    }
    res.status(200).json(event);
  } catch (error) {
    console.error('Error fetching event:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Update an event by ID
export const updateEventById = async (req: Request, res: Response) => {
  const eventId = req.params.id;
  const eventData: Events = req.body; // Use the Events interface
  try {
    const updatedEvent = await EventModel.findByIdAndUpdate(eventId, eventData, { new: true });
    if (!updatedEvent) {
      return res.status(404).json({ error: 'Event not found' });
    }
    res.status(200).json(updatedEvent);
  } catch (error) {
    console.error('Error updating event:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Delete an event by ID
export const deleteEventById = async (req: Request, res: Response) => {
  const eventId = req.params.id;
  try {
    const deletedEvent = await EventModel.findByIdAndDelete(eventId);
    if (!deletedEvent) {
      return res.status(404).json({ error: 'Event not found' });
    }
    res.status(204).send();
  } catch (error) {
    console.error('Error deleting event:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
