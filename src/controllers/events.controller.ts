import db from "../models";
import { Request, Response } from "express"; 

const EventModel = db.events;

// Create a new event
export const createEvent = async (req: Request, res: Response) => {
  try {
    const eventData = req.body; // Use the Events interface
    const event = new EventModel(eventData);
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
  const eventData = req.body; // Use the Events interface
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
