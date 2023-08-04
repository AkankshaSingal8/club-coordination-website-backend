import db from "../models";
import { Request, Response } from "express";

const Clubs = db.clubs;

export const create = async (req: Request, res: Response) => {
  try {
    const { name, description, coordinator, events, email, members, creationDate } = req.body;

    const newClub = new Clubs({
      name,
      description,
      coordinator,
      events,
      email,
      members,
      creationDate,
    });

    const savedClub = await newClub.save();

    res.status(201).json(savedClub);
  } catch (error) {
    res.status(500).json({ message: "Failed to create the club.", error });
  }
};
