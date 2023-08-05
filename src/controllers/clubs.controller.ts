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

    await newClub.save();

    res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).json({ message: "Failed to create the club.", error });
  }
};

export const findAll = async (req: Request, res: Response) => {
  try {
    const allClubs = await Clubs.find();

    if (!allClubs || allClubs.length === 0) {
      return res.status(200).json({ clubs: [] });
    }

    res.status(200).json({ clubs: allClubs });
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch all clubs.", error });
  }
};
