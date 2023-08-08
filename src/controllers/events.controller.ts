import db from "../models";
import { Request, Response } from "express";

const Events = db.events;

export const create = async (req: Request, res: Response) => {
  try {
    const {
      name,
      description,
      domain,
      start,
      end,
      venue,
      coordinator,
      status,
      registrationDeadline,
      club,
      participants,
      creationDate,
    } = req.body;

    const newEvent = new Events({
      name,
      description,
      domain,
      start,
      end,
      venue,
      coordinator,
      status,
      registrationDeadline,
      club,
      participants,
      creationDate,
    });

    await newEvent.save();

    res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).json({ message: "Failed to create the event.", error });
  }
};

export const findAll = async (req: Request, res: Response) => {
  try {
    const allEvents = await Events.find();

    if (!allEvents || allEvents.length === 0) {
      return res.status(200).json({ events: [] });
    }

    res.status(200).json({ events: allEvents });
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch all events.", error });
  }
};
